// ─── English Dictionary ─────────────────────────────────────
// Mirror of es.js — same keys, English values.

const en = {
    // ── Navigation ──
    nav: {
        about: 'About Me',
        mentoring: 'Mentoring',
        portfolio: 'Portfolio',
        certificates: 'Certificates',
        contact: 'Contact',
        formacion: 'Education',
    },

    // ── Hero ──
    hero: {
        greeting: "hi, I'm",
        role1: 'Full Stack Developer',
        role2: 'Academic Mentor',
        role3: 'Backend · La Paz, Bolivia',
        bio: 'Commercial Software Engineering student. Full Stack Developer focused on the backend. Passionate about automation, designing scalable systems applying advanced software architectures (Hexagonal, Clean, Onion), and frontend development.',
        cta: 'See my work',
    },

    // ── About ──
    about: {
        title: 'About Me',
        subtitle: 'Full Stack Developer · La Paz, Bolivia',
        desc: 'Final-year Commercial Software Engineering student and Higher Technician in Industrial Informatics. Full Stack Developer with frontend knowledge, though focused and specialized in backend development. I have real experience in distributed systems, DevOps automation, and designing scalable systems applying various software architectures (Hexagonal, Onion, Clean Architecture, etc.). Passionate about teaching, mentoring, and engineering best practices.',
        badge1: 'Outstanding Student × 3',
        badge2: 'Academic Mentor',
        badge3: 'La Paz, Bolivia',
        experience: 'Work Experience',
        skills: 'Technical Skills',
        education: 'Education',
        certifications: 'Featured Certifications',
        viewAllCerts: 'View all certificates →',
        certFilterAll: 'All',
        certFilterJala: 'Jala University',
        certFilterPlatzi: 'Platzi',
        certFilterCodeFacilito: 'Código Facilito',
        certFilterUdemy: 'Udemy',
        certFilterSalesiana: 'Univ. Salesiana',
        certFilterFeyAlegria: 'Fe y Alegría',
        certFilterOthers: 'Others',
        edu1Title: 'Commercial Software Engineering',
        edu1School: 'Jala University · 2023 – Present',
        edu1Desc: 'Intensive Full Stack & QA Automation program. Outstanding Student 3 consecutive semesters.',
        edu2Title: 'Higher Technician in Industrial Informatics',
        edu2School: 'Escuela Industrial Superior Pedro Domingo Murillo · 2020 – 2024',
        edu2Desc: 'Technical training in industrial informatics, programming and computer systems.',
        cvEs: 'CV (Spanish)',
        cvEn: 'Resume (English)',
    },

    // ── Portfolio ──
    portfolio: {
        title: 'Portfolio',
        subtitle: '',
        backHome: '← Back to home',
        highlights: 'Key technologies',
        liveLinks: 'Project links',
        githubTitle: 'More projects on GitHub and GitLab',
        githubDesc: 'Explore my code, contributions and public repos on both platforms.',
        githubCta: 'View GitHub →',
        gitlabCta: 'View GitLab →',
        filterAll: 'All',
        filterFullstack: 'Full Stack',
        filterBackend: 'Backend',
        filterUiUx: 'UI/UX',
        featuredTitle: 'Featured Projects',
        featuredSubtitle: 'A curated selection of my latest and most complex developments.',
        featuredCta: 'View full portfolio →',
    },

    // ── Mentoring ──
    mentoring: {
        title: 'Mentoring',
        subtitle: 'Since January 2024 I have been part of the <strong>Mentor U</strong> program at Jala University, providing academic mentoring to software engineering students.',
        backHome: '← Back to home',
        subjects: 'Courses',
        labs: 'Labs',
        breadcrumbRoot: 'Mentoring',
        searchPlaceholder: 'Search content...',
        searchAriaLabel: 'Search educational content',
        clearSearch: 'Clear search',
        filterByType: 'Filter by type',
        filterAll: 'All',
        emptyTitle: 'No results',
        emptyDesc: 'No content matches your search.',
        emptyHint: 'Try a different term or change the filter.',

        // Stats
        stat1: 'Years mentoring',
        stat2: 'Courses taught',
        stat3: 'Students supported',
        stat4: 'Outstanding Student',

        // Approach
        approachTitle: 'My Approach',
        approachDesc: 'I provide <strong>personalized</strong> technical support with code reviews, step-by-step explanations and real-world examples.',
        approach1: 'Code reviews with specific feedback',
        approach2: 'Guidance in architecture and best practices',
        approach3: 'Support in academic and personal projects',
        approach4: 'Sessions adapted to the student\'s level',
        approach5: 'Results-driven: pass, learn and grow',

        // Mentor certifications
        certsTitle: 'Mentor Certificates',
        certsViewAll: 'View all certificates →',
    },

    // ── Lab Cards ──
    lab: {
        viewLab: 'View lab →',
        viewTheory: 'View theory →',
    },

    // ── Simulations ──
    sim: {
        start: 'Start simulation',
        running: 'Simulating...',
    },

    // ── Theory / Guide sections ──
    theory: {
        intro: 'Introduction',
        conclusion: 'Topic Conclusion',
        analysis: 'Analysis of',
        whatIs: 'What is it?',
        howWorks: 'How does it work?',
        examples: 'Usage examples',
        comparisonTitle: 'Comparison Table',
        aspect: 'Aspect',
        pros: 'Advantages',
        cons: 'Disadvantages',
    },

    // ── Subject Card ──
    subjectCard: {
        lab: 'lab',
        labs: 'labs',
    },

    // ── Footer ──
    footer: {
        certificates: 'Certificates',
        backTop: 'Back to top',
        nav: 'Navigation',
        connect: 'Connect',
    },

    // ── Formación ──
    formacion: {
        title: 'Education & Credentials',
        subtitle: 'My academic background and professional certifications.',
        backHome: '← Back to home',
        ctaLabel: 'View education & credentials →',
    },

    // ── Contact ──
    contact: {
        title: "Let's Talk",
        subtitle: 'Have a project in mind, want mentoring, or just want to say hi? I reply within 24 h.',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'you@email.com',
        messagePlaceholder: 'How can I help you?',
        send: 'Send message',
        sending: 'Sending…',
        successTitle: 'Message sent!',
        successDesc: 'Thanks for reaching out. I will get back to you as soon as possible.',
        errorDesc: 'Something went wrong. Try writing to me directly.',
        availableLabel: 'Available for',
        available1: 'Freelance projects',
        available2: 'Academic mentoring',
        available3: 'Open source collaborations',
        responseTime: 'Response time: under 24 h',
        orEmail: 'or write to me directly',
    },

    // ── Mentoring Teaser ──
    mentoringTeaser: {
        tag: 'Differentiator',
        title: "I don't just build. I also teach.",
        desc: "Since 2024 I've been part of the Mentor U program at Jala University, guiding engineering students with interactive simulations, code reviews and personalized sessions.",
        stat1Value: '2+',
        stat1Label: 'Years mentoring',
        stat2Value: '50+',
        stat2Label: 'Students supported',
        stat3Value: '6+',
        stat3Label: 'Courses taught',
        cta: 'Explore the mentoring platform',
    },

    // ── Common ──
    common: {
        backHome: '← Back to home',
    },
};

export default en;
