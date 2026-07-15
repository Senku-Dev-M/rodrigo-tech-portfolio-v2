import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dataFiles = [
    'src/data/mentoring.js',
    'src/data/redes.js',
    'src/data/desarrolloSoftware.js',
    'src/data/calidadSoftware2.js',
    'src/data/programacion1.js',
    'src/data/programacion3.js',
];
const textIssuePattern = /�|Ã|Â|â[^\s]?/;
const lessonFields = ['title', 'subtitle', 'type', 'difficulty', 'duration'];
const blueprintFields = ['outcomes', 'problemContext', 'deliverable', 'practice', 'checkpoints', 'portfolioProof'];

function isMissing(value) {
    if (Array.isArray(value)) return value.length === 0;
    return !String(value || '').trim();
}

function inspectText(label, value, issues) {
    if (textIssuePattern.test(String(value || ''))) {
        issues.push(`${label}: contiene caracteres rotos o mojibake`);
    }
}

async function main() {
    const issues = [];

    for (const file of dataFiles) {
        const source = await readFile(path.join(root, file), 'utf8');
        inspectText(file, source, issues);
    }

    const vite = await createServer({
        root,
        appType: 'custom',
        server: { middlewareMode: true },
        logLevel: 'silent',
    });

    try {
        const { subjects } = await vite.ssrLoadModule('/src/data/mentoring.js');
        const { buildCourses } = await vite.ssrLoadModule('/src/utils/mentoringCourse.js');
        const courses = buildCourses(subjects);

        courses.forEach((course) => {
            inspectText(`${course.id}.title`, course.title, issues);
            inspectText(`${course.id}.description`, course.description, issues);

            course.lessons.forEach((lesson) => {
                lessonFields.forEach((field) => {
                    if (isMissing(lesson[field])) {
                        issues.push(`${course.id}/${lesson.id}: falta ${field}`);
                    }
                });

                blueprintFields.forEach((field) => {
                    if (isMissing(lesson.blueprint?.[field])) {
                        issues.push(`${course.id}/${lesson.id}: falta blueprint.${field}`);
                    }
                });

                inspectText(`${course.id}/${lesson.id}.title`, lesson.title, issues);
                inspectText(`${course.id}/${lesson.id}.subtitle`, lesson.subtitle, issues);
                inspectText(`${course.id}/${lesson.id}.blueprint`, JSON.stringify(lesson.blueprint), issues);
            });
        });

        if (issues.length) {
            console.error(`Mentoring content check failed with ${issues.length} issue(s):`);
            issues.forEach((issue) => console.error(`- ${issue}`));
            process.exitCode = 1;
            return;
        }

        const lessonCount = courses.reduce((sum, course) => sum + course.lessons.length, 0);
        console.log(`Mentoring content check passed: ${courses.length} courses, ${lessonCount} lessons.`);
    } finally {
        await vite.close();
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
