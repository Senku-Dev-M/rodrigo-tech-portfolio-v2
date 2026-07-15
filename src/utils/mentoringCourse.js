const COURSE_VISUALS = {
    'redes-computacionales-1': {
        accent: 'var(--mentor-accent)',
        accent2: 'var(--mentor-accent-strong)',
        level: 'Fundamentos + práctica',
        audience: 'Redes, infraestructura y soporte',
        promise: 'Diseña, configura y diagnostica redes desde el direccionamiento hasta servicios reales.',
    },
    'desarrollo-software': {
        accent: 'var(--mentor-accent-strong)',
        accent2: 'var(--mentor-accent-soft)',
        level: 'Proceso profesional',
        audience: 'Ingeniería, producto y equipos',
        promise: 'Convierte ideas en flujo de trabajo: SDLC, Git, colaboración y Scrum con criterio.',
    },
    'ingenieria-calidad-software-2': {
        accent: 'var(--mentor-accent)',
        accent2: 'var(--mentor-accent-soft)',
        level: 'QA aplicado',
        audience: 'Testing, calidad y delivery',
        promise: 'Toma mejores decisiones de prueba: explora, prioriza, diseña datos y comunica defectos.',
    },
    'programacion-1': {
        accent: 'var(--mentor-accent-strong)',
        accent2: 'var(--mentor-accent-soft)',
        level: 'Base técnica',
        audience: 'Programación inicial en Java',
        promise: 'Construye una base mental sólida para leer, explicar y escribir programas Java.',
    },
    'programacion-3': {
        accent: 'var(--mentor-accent-strong)',
        accent2: 'var(--mentor-accent-soft)',
        level: 'C# y .NET aplicado',
        audience: 'Aplicaciones de escritorio y POO',
        promise: 'Construye una aplicación Pac-Man por etapas mientras dominas C#, Avalonia, LINQ, concurrencia y archivos.',
    },
    'robotica-arduino': {
        accent: 'var(--mentor-accent)',
        accent2: 'var(--mentor-accent-soft)',
        level: 'Hardware educativo',
        audience: 'Arduino, electrónica y robótica',
        promise: 'Conecta código con componentes físicos usando Arduino, sensores y actuadores.',
    },
};

const DEFAULT_VISUAL = {
    accent: 'var(--mentor-accent)',
    accent2: 'var(--mentor-accent-strong)',
    level: 'Curso guiado',
    audience: 'Estudiantes de ingeniería',
    promise: 'Aprende con teoría, práctica, simulaciones y evidencia de progreso.',
};

const LESSON_FIELD_LABELS = {
    outcomes: 'Resultados',
    problemContext: 'Contexto',
    deliverable: 'Entregable',
    practice: 'Práctica',
    checkpoints: 'Checkpoints',
    portfolioProof: 'Evidencia',
};

export function stripHtml(value = '') {
    return String(value)
        .replace(/<br\s*\/?>/gi, ' ')
        .replace(/<[^>]*>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/\s+/g, ' ')
        .trim();
}

function firstSentence(value = '') {
    const text = stripHtml(value);
    const match = text.match(/^(.{90,220}?[.!?])\s/);
    return match?.[1] || text.slice(0, 220);
}

function toSectionId(title, index) {
    const slug = String(title || 'section')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

    return `${slug || 'seccion'}-${index}`;
}

function hasTextIssue(value) {
    return /�|Ã|Â|â[^\s]?/.test(String(value || ''));
}

function countSections(lab) {
    if (lab.content?.sections) return lab.content.sections.length;
    if (lab.guide?.steps) return lab.guide.steps.length;
    if (lab.labData?.steps) return lab.labData.steps.length;
    if (lab.isArduinoLab) return 8;
    return 0;
}

function hasSimulation(lab) {
    const featureText = (lab.learningFeatures || []).join(' ').toLowerCase();
    const sections = lab.content?.sections || [];
    const guideSteps = lab.guide?.steps || [];

    return (
        featureText.includes('simul') ||
        lab.isArduinoLab ||
        Boolean(lab.guide?.labArchitecture?.simulationLink) ||
        sections.some((section) => section.type === 'process' || section.simType) ||
        guideSteps.some((step) => step.simulationLink)
    );
}

function hasExercise(lab) {
    const sections = lab.content?.sections || [];
    return Boolean(lab.guide?.exercise || sections.some((section) => section.type === 'exercise'));
}

function hasInteractiveCode(lab) {
    const featureText = (lab.learningFeatures || []).join(' ').toLowerCase();
    return featureText.includes('código') || (lab.content?.sections || []).some((section) => section.type === 'interactiveCode');
}

function getIntroSource(lab) {
    if (lab.content?.intro) return lab.content.intro;
    if (typeof lab.guide?.intro === 'string') return lab.guide.intro;
    if (lab.guide?.introCards?.[0]?.text) return lab.guide.introCards[0].text;
    if (lab.labData?.intro) return lab.labData.intro;
    return lab.subtitle || lab.title;
}

function getLessonOutcomes(lab) {
    if (lab.content?.objectives?.length) return lab.content.objectives.slice(0, 4);
    if (lab.guide?.objectives?.length) return lab.guide.objectives.slice(0, 4);
    if (lab.labData?.objectives?.length) return lab.labData.objectives.slice(0, 4);
    if (lab.learningFeatures?.length) {
        return lab.learningFeatures.slice(0, 4).map((feature) => `Practicar ${feature.toLowerCase()} dentro del tema.`);
    }
    return ['Comprender el problema principal del tema.', 'Aplicar la idea en una actividad guiada.'];
}

function getPractice(lab) {
    const exercise = (lab.content?.sections || []).find((section) => section.type === 'exercise') || lab.guide?.exercise;
    if (exercise?.title) return exercise.title;
    if (exercise?.prompt) return firstSentence(exercise.prompt);
    if (lab.guide?.steps?.length) return 'Ejecutar el laboratorio paso a paso y validar cada resultado.';
    if (lab.isPacketTracerLab) return 'Construir la topología, configurar servicios y registrar evidencia técnica.';
    if (lab.isArduinoLab) return 'Montar, simular y explicar el comportamiento del circuito.';
    return 'Resolver una práctica breve para comprobar comprensión.';
}

function getLessonBlueprint(lab) {
    const outcomes = getLessonOutcomes(lab);
    const featureHints = lab.learningFeatures?.slice(0, 3) || [];

    return {
        outcomes,
        problemContext: firstSentence(getIntroSource(lab)),
        deliverable:
            lab.type === 'Laboratorio'
                ? 'Una ejecución documentada con verificaciones, evidencia y explicación técnica.'
                : 'Un mapa mental operativo del concepto, sus riesgos y su aplicación práctica.',
        practice: getPractice(lab),
        checkpoints:
            featureHints.length > 0
                ? featureHints
                : ['Concepto explicado', 'Ejemplo revisado', 'Práctica resuelta'],
        portfolioProof:
            lab.type === 'Laboratorio'
                ? 'Capturas, comandos, tabla de resultados o configuración final verificable.'
                : 'Resumen propio, respuesta de ejercicio y explicación de cuándo usar el concepto.',
    };
}

function getQuality(lesson) {
    const raw = JSON.stringify({
        title: lesson.title,
        subtitle: lesson.subtitle,
        tags: lesson.tags,
        learningFeatures: lesson.learningFeatures,
        intro: lesson.content?.intro || lesson.guide?.intro || lesson.labData?.intro,
    });
    const missing = Object.entries(lesson.blueprint)
        .filter(([, value]) => !value || (Array.isArray(value) && value.length === 0))
        .map(([key]) => LESSON_FIELD_LABELS[key] || key);

    return {
        status: hasTextIssue(raw) ? 'warning' : missing.length ? 'partial' : 'strong',
        missing,
        hasTextIssue: hasTextIssue(raw),
    };
}

function getModuleForLesson(subject, index, lab) {
    const stages = subject.learningPath?.stages || [];
    if (!stages.length) {
        return {
            id: `${subject.id}-module-1`,
            index: 0,
            title: 'Ruta principal',
            desc: 'Secuencia guiada de conceptos, práctica y cierre.',
        };
    }

    const requestedStage = Number.isInteger(lab?.moduleIndex) ? lab.moduleIndex : null;
    const stageIndex = requestedStage === null
        ? Math.min(stages.length - 1, Math.floor((index * stages.length) / subject.labs.length))
        : Math.max(0, Math.min(stages.length - 1, requestedStage));
    const stage = stages[stageIndex];

    return {
        id: `${subject.id}-module-${stageIndex + 1}`,
        index: stageIndex,
        title: stage.title.replace(/^\d+\.\s*/, ''),
        desc: stage.desc,
    };
}

export function buildLesson(subject, lab, index) {
    const module = getModuleForLesson(subject, index, lab);
    const blueprint = getLessonBlueprint(lab);

    return {
        ...lab,
        order: index + 1,
        module,
        blueprint,
        quality: getQuality({ ...lab, blueprint }),
        sectionCount: countSections(lab),
        hasSimulation: hasSimulation(lab),
        hasExercise: hasExercise(lab),
        hasInteractiveCode: hasInteractiveCode(lab),
        searchableText: [
            lab.title,
            lab.subtitle,
            lab.type,
            lab.difficulty,
            ...(lab.tags || []),
            ...(lab.learningFeatures || []),
            module.title,
            module.desc,
        ].join(' ').toLowerCase(),
    };
}

export function buildCourse(subject) {
    const visual = COURSE_VISUALS[subject.id] || DEFAULT_VISUAL;
    const lessons = subject.labs.map((lab, index) => buildLesson(subject, lab, index));
    const modules = Array.from(
        lessons.reduce((map, lesson) => {
            if (!map.has(lesson.module.id)) {
                map.set(lesson.module.id, {
                    ...lesson.module,
                    lessons: [],
                });
            }
            map.get(lesson.module.id).lessons.push(lesson);
            return map;
        }, new Map()).values()
    );

    const stats = {
        lessons: lessons.length,
        theory: lessons.filter((lesson) => lesson.type === 'Teoría').length,
        labs: lessons.filter((lesson) => lesson.type !== 'Teoría').length,
        simulations: lessons.filter((lesson) => lesson.hasSimulation).length,
        exercises: lessons.filter((lesson) => lesson.hasExercise).length,
        interactive: lessons.filter((lesson) => lesson.hasInteractiveCode).length,
        duration: subject.learningPath?.estimatedDuration || 'Ruta flexible',
    };

    return {
        ...subject,
        ...visual,
        lessons,
        modules,
        stats,
        promise: visual.promise,
        level: visual.level,
        audience: visual.audience,
    };
}

export function buildCourses(subjects) {
    return subjects.map(buildCourse);
}

export function getCourseById(courses, subjectId) {
    return courses.find((course) => course.id === subjectId) || null;
}

export function getLessonById(course, lessonId) {
    return course?.lessons.find((lesson) => lesson.id === lessonId) || null;
}

export function getAdjacentLessons(course, lessonId) {
    const index = course.lessons.findIndex((lesson) => lesson.id === lessonId);
    return {
        previous: index > 0 ? course.lessons[index - 1] : null,
        next: index >= 0 && index < course.lessons.length - 1 ? course.lessons[index + 1] : null,
    };
}

export function getLessonSections(lesson) {
    if (lesson.content?.sections?.length) {
        return [
            { id: 'theory-intro', label: 'Inicio' },
            ...lesson.content.sections
                .map((section, index) => (
                    section.title ? { id: toSectionId(section.title, index), label: section.title } : null
                ))
                .filter(Boolean),
            { id: 'theory-conclusion', label: 'Cierre' },
        ];
    }

    const guide = lesson.guide;
    if (guide) {
        return [
            { id: 'guide-intro', label: 'Inicio' },
            guide.technologies?.length ? { id: 'guide-tech', label: 'Tecnologías' } : null,
            guide.scenario ? { id: 'guide-scenario', label: 'Escenario' } : null,
            guide.labArchitecture ? { id: 'guide-architecture', label: 'Arquitectura' } : null,
            guide.objectives?.length ? { id: 'guide-objectives', label: 'Objetivos' } : null,
            guide.steps?.length ? { id: 'guide-steps', label: 'Paso a paso' } : null,
            guide.verification?.length ? { id: 'guide-verification', label: 'Verificación' } : null,
            guide.exercise ? { id: 'guide-exercise', label: 'Ejercicio' } : null,
            { id: 'guide-conclusion', label: 'Cierre' },
        ].filter(Boolean);
    }

    return [
        { id: 'lesson-content', label: 'Contenido' },
        { id: 'lesson-finish', label: 'Cierre' },
    ];
}

export function lessonMatches(lesson, query, type, difficulty) {
    const normalizedQuery = query.trim().toLowerCase();
    const matchesQuery = !normalizedQuery || lesson.searchableText.includes(normalizedQuery);
    const matchesType = type === '__all__' || lesson.type === type;
    const matchesDifficulty = difficulty === '__all__' || lesson.difficulty === difficulty;

    return matchesQuery && matchesType && matchesDifficulty;
}
