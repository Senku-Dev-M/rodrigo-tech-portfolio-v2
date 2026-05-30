export const skills = [
    { name: 'Java', category: 'backend' },
    { name: 'Spring Boot', category: 'backend' },
    { name: 'C#', category: 'backend' },
    { name: '.NET', category: 'backend' },
    { name: 'Python', category: 'backend' },
    { name: 'FastAPI', category: 'backend' },
    { name: 'Node.js', category: 'backend' },
    { name: 'TypeScript', category: 'backend' },
    { name: 'React', category: 'frontend' },
    { name: 'Angular', category: 'frontend' },
    { name: 'JavaScript', category: 'frontend' },
    { name: 'PostgreSQL', category: 'database' },
    { name: 'MySQL', category: 'database' },
    { name: 'MongoDB', category: 'database' },
    { name: 'Docker', category: 'devops' },
    { name: 'GitLab CI/CD', category: 'devops' },
    { name: 'RabbitMQ', category: 'devops' },
    { name: 'Figma', category: 'design' },
    { name: 'Linux', category: 'devops' },
    { name: 'Git', category: 'devops' },
];

export const categoryColors = {
    backend: '#00d4ff',
    frontend: '#a78bfa',
    database: '#f59e0b',
    devops: '#10b981',
    design: '#ec4899',
};

export const experiences = [
    {
        period: { es: 'Nov. 2025 – Feb. 2026', en: 'Nov 2025 – Feb 2026' },
        role: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
        company: 'Freelance',
        desc: {
            es: 'Desarrollé GymFlow AI — sistema de gestión para gimnasios con Python + FastAPI Onion Architecture, React 18 + TypeScript, JWT/RBAC, IA generativa para rutinas con OpenRouter, contenedorizado con Docker.',
            en: 'Developed GymFlow AI — gym management system with Python + FastAPI Onion Architecture, React 18 + TypeScript, JWT/RBAC, generative AI for routines via OpenRouter, containerized with Docker.',
        },
        accent: '#00d4ff',
    },
    {
        period: { es: 'Jul. 2025 – Sep. 2025', en: 'Jul 2025 – Sep 2025' },
        role: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
        company: 'Jala University',
        desc: {
            es: 'Participé en PixPro, plataforma de gestión de imágenes con arquitectura distribuida. Backend en Node.js/TypeScript (Clean Architecture), microservicio Python para imágenes, Docker, GitLab CI/CD, MySQL, RabbitMQ, Supabase, frontend Angular.',
            en: 'Contributed to PixPro, an image management platform with distributed architecture. Backend in Node.js/TypeScript (Clean Architecture), Python microservice for images, Docker, GitLab CI/CD, MySQL, RabbitMQ, Supabase, Angular frontend.',
        },
        accent: '#0ea5e9',
    },
    {
        period: { es: 'Ene. 2024 – Actualidad', en: 'Jan 2024 – Present' },
        role: { es: 'Mentor de Ingeniería de Software', en: 'Software Engineering Mentor' },
        company: 'Jala University – Programa Mentor U',
        desc: {
            es: 'Mentoría académica en Programación I y II, Bases de Datos y Desarrollo de Software. Guía de APIs con Java/Spring Boot, revisiones de código y acompañamiento técnico en proyectos.',
            en: 'Academic mentoring in Programming I & II, Databases, and Software Development. API guidance with Java/Spring Boot, code reviews, and technical project support.',
        },
        accent: '#06b6d4',
    },
    {
        period: { es: 'Abr. 2025 – Jun. 2025', en: 'Apr 2025 – Jun 2025' },
        role: { es: 'Diseñador UI/UX', en: 'UI/UX Designer' },
        company: 'Jala University',
        desc: {
            es: 'Diseñé TeToca, app móvil de intercambio de servicios. Prototipo completo en Figma con Design Thinking, user flows, wireframes y prototipos de alta fidelidad.',
            en: 'Designed TeToca, a mobile app for service exchange. Complete Figma prototype using Design Thinking, user flows, wireframes, and high-fidelity prototypes.',
        },
        accent: '#22d3ee',
    },
];

export const educationEntries = [
    {
        icon: 'graduation-cap',
        titleKey: 'about.edu1Title',
        schoolKey: 'about.edu1School',
        descriptionKey: 'about.edu1Desc',
    },
    {
        icon: 'cpu',
        titleKey: 'about.edu2Title',
        schoolKey: 'about.edu2School',
        descriptionKey: 'about.edu2Desc',
    },
];

export const certificationEntries = [
    { name: "Dean's List Recognition", issuer: 'Jala University', years: '2024 – 2025' },
    { name: 'Programación 1 & 2 – Mentor U', issuer: 'Jala University', years: '2025' },
    { name: 'Curso Profesional de Java', issuer: 'Código Facilito', years: '2023' },
    { name: 'Java Spring Boot + JPA', issuer: 'Platzi', years: '2023' },
    { name: 'Patrones de Diseño con Java', issuer: 'Código Facilito', years: '2023' },
    { name: 'Python Essentials 1', issuer: 'Cisco Networking Academy', years: '2023' },
];
