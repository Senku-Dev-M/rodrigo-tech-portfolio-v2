// ─── Spanish Dictionary ─────────────────────────────────────
// Namespace convention:  section.key  (flat within each namespace)
// For new pages, add a new top-level namespace object.

const es = {
    // ── Navigation ──
    nav: {
        about: 'Sobre Mí',
        mentoring: 'Mentorías',
        portfolio: 'Portafolio',
        certificates: 'Certificados',
        contact: 'Contacto',
        formacion: 'Formación',
    },

    // ── Hero ──
    hero: {
        greeting: 'hola, soy',
        role1: 'Full Stack Developer',
        role2: 'Mentor Académico',
        role3: 'Backend · La Paz, Bolivia',
        bio: 'Estudiante de Ingeniería de Software Comercial. Desarrollador Full Stack enfocado en el backend. Apasionado por la automatización y el diseño de sistemas escalables aplicando arquitecturas de software avanzadas (Hexagonal, Clean, Onion) y el desarrollo frontend.',
        cta: 'Conoce mi trabajo',
    },

    // ── About ──
    about: {
        title: 'Sobre Mí',
        subtitle: 'Full Stack Developer · La Paz, Bolivia',
        desc: 'Estudiante de último año de Ingeniería en Software Comercial y Técnico Superior en Informática Industrial. Desarrollador Full Stack con conocimientos de frontend, aunque enfocado y especializado en el desarrollo backend. Cuento con experiencia real en sistemas distribuidos, automatización DevOps y el diseño de sistemas escalables aplicando diversas arquitecturas de software (Hexagonal, Onion, Clean Architecture, etc.). Apasionado por la enseñanza, la mentoría y las buenas prácticas de ingeniería.',
        badge1: 'Estudiante Destacado × 3',
        badge2: 'Mentor Académico',
        badge3: 'La Paz, Bolivia',
        experience: 'Experiencia Laboral',
        skills: 'Habilidades Técnicas',
        education: 'Formación',
        certifications: 'Certificaciones Destacadas',
        viewAllCerts: 'Ver todos los certificados →',
        certFilterAll: 'Todas',
        certFilterJala: 'Jala University',
        certFilterPlatzi: 'Platzi',
        certFilterCodeFacilito: 'Código Facilito',
        certFilterUdemy: 'Udemy',
        certFilterSalesiana: 'Univ. Salesiana',
        certFilterFeyAlegria: 'Fe y Alegría',
        certFilterOthers: 'Otros',
        edu1Title: 'Ingeniería en Software Comercial',
        edu1School: 'Jala University · 2023 – Actualidad',
        edu1Desc: 'Formación intensiva Full Stack & QA Automation. Estudiante Destacado 3 semestres consecutivos.',
        edu2Title: 'Técnico Superior en Informática Industrial',
        edu2School: 'Escuela Industrial Superior Pedro Domingo Murillo · 2020 – 2024',
        edu2Desc: 'Formación técnica en informática industrial, programación y sistemas computacionales.',
        cvEs: 'Currículum (Español)',
        cvEn: 'Resume (English)',
    },

    // ── Portfolio ──
    portfolio: {
        title: 'Portafolio',
        subtitle: '',
        backHome: '← Volver al inicio',
        highlights: 'Tecnologías destacadas',
        liveLinks: 'Enlaces del proyecto',
        githubTitle: 'Más proyectos en GitHub y GitLab',
        githubDesc: 'Explora mi código, contribuciones y repos públicos en ambas plataformas.',
        githubCta: 'Ver GitHub →',
        gitlabCta: 'Ver GitLab →',
        filterAll: 'Todas',
        filterFullstack: 'Full Stack',
        filterBackend: 'Backend',
        filterUiUx: 'UI/UX',
        featuredTitle: 'Proyectos Destacados',
        featuredSubtitle: 'Una selección curada de mis últimos y más complejos desarrollos.',
        featuredCta: 'Ver portafolio completo →',
    },

    // ── Mentoring ──
    mentoring: {
        title: 'Mentorías',
        subtitle: 'Desde enero de 2024 formo parte del programa <strong>Mentor U</strong> de Jala University, brindando mentoría académica a estudiantes de ingeniería en software.',
        backHome: '← Volver al inicio',
        subjects: 'Materias',
        labs: 'Laboratorios',
        breadcrumbRoot: 'Mentoría',
        searchPlaceholder: 'Buscar contenido...',
        searchAriaLabel: 'Buscar contenido educativo',
        clearSearch: 'Limpiar búsqueda',
        filterByType: 'Filtrar por tipo',
        filterAll: 'Todos',
        emptyTitle: 'Sin resultados',
        emptyDesc: 'No se encontraron contenidos que coincidan con tu búsqueda.',
        emptyHint: 'Intenta con otro término o cambia el filtro.',

        // Stats
        stat1: 'Años mentoreando',
        stat2: 'Cursos impartidos',
        stat3: 'Estudiantes apoyados',
        stat4: 'Estudiante Destacado',

        // Approach
        approachTitle: 'Mi Enfoque',
        approachDesc: 'Me caracterizo por un acompañamiento técnico <strong>personalizado</strong>, con revisiones de código, explicaciones paso a paso y ejemplos reales.',
        approach1: 'Revisiones de código con feedback específico',
        approach2: 'Guía en arquitectura y buenas prácticas',
        approach3: 'Apoyo en proyectos académicos y personales',
        approach4: 'Sesiones adaptadas al nivel del estudiante',
        approach5: 'Enfoque en resultados: aprobar, aprender y crecer',

        // Mentor certifications
        certsTitle: 'Certificados como Mentor',
        certsViewAll: 'Ver certificados completos →',
    },

    // ── Lab Cards ──
    lab: {
        viewLab: 'Ver laboratorio →',
        viewTheory: 'Ver teoría →',
    },

    // ── Simulations ──
    sim: {
        start: 'Iniciar simulación',
        running: 'Simulando...',
    },

    // ── Theory / Guide sections ──
    theory: {
        intro: 'Introducción',
        conclusion: 'Conclusión del Tema',
        analysis: 'Análisis de',
        whatIs: '¿Qué es?',
        howWorks: '¿Cómo funciona?',
        examples: 'Ejemplos de uso',
        comparisonTitle: 'Tabla Comparativa',
        aspect: 'Aspecto',
        pros: 'Ventajas',
        cons: 'Desventajas',
    },

    // ── Subject Card ──
    subjectCard: {
        lab: 'laboratorio',
        labs: 'laboratorios',
    },

    // ── Footer ──
    footer: {
        certificates: 'Certificados',
        backTop: 'Volver arriba',
        nav: 'Navegación',
        connect: 'Conectar',
    },

    // ── Formación ──
    formacion: {
        title: 'Formación y Credenciales',
        subtitle: 'Mi trayectoria académica y certificaciones profesionales.',
        backHome: '← Volver al inicio',
        ctaLabel: 'Ver formación y credenciales →',
    },

    // ── Contact ──
    contact: {
        title: 'Hablemos',
        subtitle: '¿Tienes un proyecto en mente, quieres mentoría o simplemente saludar? Respondo en menos de 24 h.',
        namePlaceholder: 'Tu nombre',
        emailPlaceholder: 'tu@email.com',
        messagePlaceholder: '¿En qué puedo ayudarte?',
        send: 'Enviar mensaje',
        sending: 'Enviando…',
        successTitle: '¡Mensaje enviado!',
        successDesc: 'Gracias por escribir. Te responderé lo antes posible.',
        errorDesc: 'Algo salió mal. Prueba escribiéndome directamente.',
        availableLabel: 'Disponible para',
        available1: 'Proyectos freelance',
        available2: 'Mentorías académicas',
        available3: 'Colaboraciones open source',
        responseTime: 'Tiempo de respuesta: menos de 24 h',
        orEmail: 'o escríbeme directamente',
    },

    // ── Mentoring Teaser ──
    mentoringTeaser: {
        tag: 'Diferenciador',
        title: 'No solo construyo. También enseño.',
        desc: 'Desde 2024 formo parte del programa Mentor U de Jala University, guiando a estudiantes de ingeniería con simulaciones interactivas, revisiones de código y sesiones personalizadas.',
        stat1Value: '2+',
        stat1Label: 'Años mentoreando',
        stat2Value: '50+',
        stat2Label: 'Estudiantes apoyados',
        stat3Value: '6+',
        stat3Label: 'Cursos impartidos',
        cta: 'Ver plataforma de mentorías',
    },

    // ── Common ──
    common: {
        backHome: '← Volver al inicio',
    },
};

export default es;
