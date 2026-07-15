import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, Navigate, useParams } from 'react-router-dom';
import { BookOpen, CheckCircle2, Filter, GraduationCap, Search, Sparkles } from 'lucide-react';
import CourseCard from '../components/CourseExperience/CourseCard';
import CourseDashboard from '../components/CourseExperience/CourseDashboard';
import LessonPlayer from '../components/CourseExperience/LessonPlayer';
import ModuleTimeline from '../components/CourseExperience/ModuleTimeline';
import MentoringApproach from '../components/Mentorias/MentoringApproach';
import MentoringCertifications from '../components/Mentorias/MentoringCertifications';
import MentoringStats from '../components/Mentorias/MentoringStats';
import PageHero from '../components/PageShell/PageHero';
import PageLayout from '../components/PageShell/PageLayout';
import { MENTORING_ROUTE } from '../constants/routes';
import { subjects } from '../data/mentoring';
import useLearningProgress from '../hooks/useLearningProgress';
import { useI18n } from '../i18n/i18n';
import {
    buildCourses,
    getCourseById,
    getLessonById,
    lessonMatches,
} from '../utils/mentoringCourse';
import './MentoriasPage.css';

const enterVariants = {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const MotionDiv = motion.div;

function AcademySummary({ courses }) {
    const totals = courses.reduce(
        (acc, course) => ({
            lessons: acc.lessons + course.stats.lessons,
            simulations: acc.simulations + course.stats.simulations,
            exercises: acc.exercises + course.stats.exercises,
            labs: acc.labs + course.stats.labs,
        }),
        { lessons: 0, simulations: 0, exercises: 0, labs: 0 }
    );
    const metrics = [
        { value: courses.length, label: 'materias' },
        { value: totals.lessons, label: 'lecciones' },
        { value: totals.simulations, label: 'simulaciones' },
        { value: totals.labs, label: 'laboratorios' },
    ];

    return (
        <section className="academy-summary" aria-label="Resumen de contenido educativo">
            <div className="academy-summary__copy">
                <span><GraduationCap size={16} /> Academia interactiva</span>
                <h2>Rutas de aprendizaje interactivas y material de estudio</h2>
            </div>
            <div className="academy-summary__metrics">
                {metrics.map((metric) => (
                    <div key={metric.label} className="academy-summary__metric">
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

function CourseBreadcrumb({ course, lesson }) {
    return (
        <nav className="course-breadcrumb" aria-label="Navegación de mentorías">
            <Link to={MENTORING_ROUTE}>Mentorías</Link>
            {course && (
                <>
                    <span>/</span>
                    <Link to={`${MENTORING_ROUTE}/${course.id}`}>{course.title}</Link>
                </>
            )}
            {lesson && (
                <>
                    <span>/</span>
                    <span>{lesson.title}</span>
                </>
            )}
        </nav>
    );
}

function CourseFilters({ query, setQuery, type, setType, difficulty, setDifficulty, lessons }) {
    const types = ['__all__', ...Array.from(new Set(lessons.map((lesson) => lesson.type)))];
    const difficulties = ['__all__', ...Array.from(new Set(lessons.map((lesson) => lesson.difficulty)))];

    return (
        <section className="course-filters" aria-label="Filtros del curso">
            <label className="course-filters__search">
                <Search size={17} />
                <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Buscar por tema, tag, práctica o simulación..."
                    aria-label="Buscar lecciones"
                />
            </label>

            <div className="course-filters__groups">
                <div className="course-filter-group">
                    <span><Filter size={14} /> Tipo</span>
                    {types.map((item) => (
                        <button
                            key={item}
                            type="button"
                            className={type === item ? 'is-active' : ''}
                            onClick={() => setType(item)}
                        >
                            {item === '__all__' ? 'Todos' : item}
                        </button>
                    ))}
                </div>
                <div className="course-filter-group">
                    <span><Sparkles size={14} /> Nivel</span>
                    {difficulties.map((item) => (
                        <button
                            key={item}
                            type="button"
                            className={difficulty === item ? 'is-active' : ''}
                            onClick={() => setDifficulty(item)}
                        >
                            {item === '__all__' ? 'Todos' : item}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CoursesOverview({ courses, progressApi, t }) {
    return (
        <>
            <PageHero
                backLabel={t('mentoring.backHome')}
                title={t('mentoring.title')}
                subtitle={t('mentoring.subtitle')}
                subtitleIsHtml
            />

            <div className="page-container page-container--academy">
                <MotionDiv variants={enterVariants} initial="initial" animate="animate">
                    <MentoringStats />
                    <AcademySummary courses={courses} />

                    <section className="mentorias-section">
                        <div className="section-heading-row">
                            <div>
                                <span className="section-kicker"><BookOpen size={15} /> Catálogo guiado</span>
                                <h2 className="section-heading">Cursos disponibles</h2>
                            </div>
                            <p>Elige una materia y continúa desde tu último avance. Todo el progreso se guarda localmente en este navegador.</p>
                        </div>

                        <div className="course-grid">
                            {courses.map((course) => (
                                <CourseCard
                                    key={course.id}
                                    course={course}
                                    progress={progressApi.getSubjectProgress(course)}
                                />
                            ))}
                        </div>
                    </section>

                    <MentoringApproach />
                    <MentoringCertifications />
                </MotionDiv>
            </div>
        </>
    );
}

function CourseDetail({ course, progressApi }) {
    const [query, setQuery] = useState('');
    const [type, setType] = useState('__all__');
    const [difficulty, setDifficulty] = useState('__all__');
    const progress = progressApi.getSubjectProgress(course);
    const lastLesson = progress.lastLessonId ? getLessonById(course, progress.lastLessonId) : null;
    const filteredLessons = course.lessons.filter((lesson) => lessonMatches(lesson, query, type, difficulty));

    return (
        <div className="page-container page-container--academy page-container--course">
            <MotionDiv variants={enterVariants} initial="initial" animate="animate">
                <CourseBreadcrumb course={course} />
                <CourseDashboard
                    course={course}
                    progress={progress}
                    lastLesson={lastLesson}
                    onReset={() => progressApi.resetSubject(course.id)}
                />

                <CourseFilters
                    query={query}
                    setQuery={setQuery}
                    type={type}
                    setType={setType}
                    difficulty={difficulty}
                    setDifficulty={setDifficulty}
                    lessons={course.lessons}
                />

                <ModuleTimeline course={course} lessons={filteredLessons} progressApi={progressApi} />
            </MotionDiv>
        </div>
    );
}

function LessonDetail({ course, lesson, progressApi }) {
    return (
        <div className="page-container page-container--academy page-container--lesson">
            <MotionDiv variants={enterVariants} initial="initial" animate="animate">
                <CourseBreadcrumb course={course} lesson={lesson} />
                <LessonPlayer course={course} lesson={lesson} progressApi={progressApi} />
            </MotionDiv>
        </div>
    );
}

export default function MentoriasPage() {
    const { t } = useI18n();
    const { subjectId, lessonId } = useParams();
    const courses = useMemo(() => buildCourses(subjects), []);
    const progressApi = useLearningProgress();
    const course = subjectId ? getCourseById(courses, subjectId) : null;
    const lesson = course && lessonId ? getLessonById(course, lessonId) : null;

    if (subjectId && !course) {
        return <Navigate to={MENTORING_ROUTE} replace />;
    }

    if (course && lessonId && !lesson) {
        return <Navigate to={`${MENTORING_ROUTE}/${course.id}`} replace />;
    }

    return (
        <PageLayout mainClassName={`mentorias-page ${subjectId ? 'mentorias-page--focused' : ''}`}>
            {!subjectId && <CoursesOverview courses={courses} progressApi={progressApi} t={t} />}
            {course && !lessonId && <CourseDetail course={course} progressApi={progressApi} />}
            {course && lesson && <LessonDetail course={course} lesson={lesson} progressApi={progressApi} />}
        </PageLayout>
    );
}
