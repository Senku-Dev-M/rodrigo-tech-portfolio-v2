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

/* Monochrome system — one neutral for all categories (no rainbow chips) */
export const categoryColors = {
    backend: '#8A8F98',
    frontend: '#8A8F98',
    database: '#8A8F98',
    devops: '#8A8F98',
    design: '#8A8F98',
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
        accent: '#FF5A1F',
    },
    {
        period: { es: 'Jul. 2025 – Sep. 2025', en: 'Jul 2025 – Sep 2025' },
        role: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
        company: 'Jala University',
        desc: {
            es: 'Participé en PixPro, plataforma de gestión de imágenes con arquitectura distribuida. Backend en Node.js/TypeScript (Clean Architecture), microservicio Python para imágenes, Docker, GitLab CI/CD, MySQL, RabbitMQ, Supabase, frontend Angular.',
            en: 'Contributed to PixPro, an image management platform with distributed architecture. Backend in Node.js/TypeScript (Clean Architecture), Python microservice for images, Docker, GitLab CI/CD, MySQL, RabbitMQ, Supabase, Angular frontend.',
        },
        accent: '#FF5A1F',
    },
    {
        period: { es: 'Ene. 2024 – Actualidad', en: 'Jan 2024 – Present' },
        role: { es: 'Mentor de Ingeniería de Software', en: 'Software Engineering Mentor' },
        company: 'Jala University – Programa Mentor U',
        desc: {
            es: 'Mentoría académica en Programación I y II, Bases de Datos y Desarrollo de Software. Guía de APIs con Java/Spring Boot, revisiones de código y acompañamiento técnico en proyectos.',
            en: 'Academic mentoring in Programming I & II, Databases, and Software Development. API guidance with Java/Spring Boot, code reviews, and technical project support.',
        },
        accent: '#FF5A1F',
    },
    {
        period: { es: 'Abr. 2025 – Jun. 2025', en: 'Apr 2025 – Jun 2025' },
        role: { es: 'Diseñador UI/UX', en: 'UI/UX Designer' },
        company: 'Jala University',
        desc: {
            es: 'Diseñé TeToca, app móvil de intercambio de servicios. Prototipo completo en Figma con Design Thinking, user flows, wireframes y prototipos de alta fidelidad.',
            en: 'Designed TeToca, a mobile app for service exchange. Complete Figma prototype using Design Thinking, user flows, wireframes, and high-fidelity prototypes.',
        },
        accent: '#FF5A1F',
    },
];

import jalaIcon from '../assets/jala_icon.jpg';
import eispmdIcon from '../assets/eispmd_icon.jpg';

export const educationEntries = [
    {
        icon: jalaIcon,
        titleKey: 'about.edu1Title',
        schoolKey: 'about.edu1School',
        descriptionKey: 'about.edu1Desc',
    },
    {
        icon: eispmdIcon,
        titleKey: 'about.edu2Title',
        schoolKey: 'about.edu2School',
        descriptionKey: 'about.edu2Desc',
    },
];

export const certificationEntries = [
    // --- Otros Logros Académicos ---
    { name: "Dean's List Certificate (Term 1-2024, Term I-2025, Term 2-2025)", issuer: 'Jala University', years: '2024 – 2025', category: 'jala' },

    // --- Jala University (Mentorías) ---
    { name: 'Redes Computacionales 1 (Mentorías)', issuer: 'Jala University', years: '2026', category: 'jala' },
    { name: 'Desarrollo de Software 2 (Mentorías)', issuer: 'Jala University', years: '2026', category: 'jala' },
    { name: 'Programación 1 (Mentorías)', issuer: 'Jala University', years: '2026', category: 'jala' },
    { name: 'Computer Networks 1 (Mentorías)', issuer: 'Jala University', years: '2025', category: 'jala' },
    { name: 'Programación 3 (Mentorías)', issuer: 'Jala University', years: '2025', category: 'jala' },
    { name: 'Desarrollo de Software I (Mentorías)', issuer: 'Jala University', years: '2025', category: 'jala' },
    { name: 'Base de Datos 2 (Mentorías)', issuer: 'Jala University', years: '2025', category: 'jala' },
    { name: 'Programación 1 (Mentorías)', issuer: 'Jala University', years: '2025', category: 'jala' },
    { name: 'Programación 2 (Mentorías)', issuer: 'Jala University', years: '2025', category: 'jala' },
    { name: 'Programación 1 (Mentorías)', issuer: 'Jala University', years: '2024', category: 'jala' },

    // --- Universidad Salesiana de Bolivia ---
    { name: 'Robótica Básica I (Facilitador)', issuer: 'Universidad Salesiana de Bolivia', years: '2024', category: 'salesiana' },
    { name: 'Robótica Vacacional (Facilitador)', issuer: 'Universidad Salesiana de Bolivia', years: '2024', category: 'salesiana' },

    // --- Fe y Alegría ---
    { name: 'Robótica Básica (Facilitador)', issuer: 'Fe y Alegría', years: '2024', category: 'feyalegria' },
    { name: 'Robótica Básica I (Facilitador)', issuer: 'Fe y Alegría', years: '2024', category: 'feyalegria' },
    { name: 'Robótica (Facilitador)', issuer: 'Fe y Alegría', years: '2023', category: 'feyalegria' },
    { name: 'Jurado Calificador (Defensa de Proyectos)', issuer: 'Fe y Alegría', years: '2023', category: 'feyalegria' },

    // --- Platzi ---
    { name: 'Reto de 21 días de Python', issuer: 'Platzi', years: '2023', category: 'platzi' },
    { name: 'Curso de Introducción a la Ingeniería Social', issuer: 'Platzi', years: '2023', category: 'platzi' },
    { name: 'Curso Práctico de PHP', issuer: 'Platzi', years: '2023', category: 'platzi' },
    { name: 'Curso de SQL y MySQL', issuer: 'Platzi', years: '2023', category: 'platzi' },
    { name: 'Curso de Java SE: SQL y Bases de Datos', issuer: 'Platzi', years: '2023', category: 'platzi' },
    { name: 'Curso de Fundamentos de Python', issuer: 'Platzi', years: '2023', category: 'platzi' },
    { name: 'Curso de Java Spring', issuer: 'Platzi', years: '2023', category: 'platzi' },
    { name: 'Curso Avanzado de Java SE', issuer: 'Platzi', years: '2023', category: 'platzi' },
    { name: 'Curso de Negociación con Clientes Corporativos', issuer: 'Platzi', years: '2023', category: 'platzi' },
    { name: 'Curso de Programación Orientada a Objetos con C#', issuer: 'Platzi', years: '2023', category: 'platzi' },
    { name: 'Curso de Scrum Master', issuer: 'Platzi', years: '2023', category: 'platzi' },
    { name: 'Curso Básico de Diseño de Interfaces con Android Studio', issuer: 'Platzi', years: '2023', category: 'platzi' },
    { name: 'Curso Práctico de SQL', issuer: 'Platzi', years: '2023', category: 'platzi' },
    { name: 'Curso de Java Spring Data JPA: Bases de Datos', issuer: 'Platzi', years: '2023', category: 'platzi' },
    { name: 'Curso de Java SE Orientado a Objetos', issuer: 'Platzi', years: '2023', category: 'platzi' },
    { name: 'Curso de Fundamentos de Desarrollo de Hardware con Arduino', issuer: 'Platzi', years: '2023', category: 'platzi' },
    { name: 'Curso de Java SE Persistencia de Datos', issuer: 'Platzi', years: '2023', category: 'platzi' },

    // --- Código Facilito ---
    { name: 'Curso Profesional de Base de Datos', issuer: 'Código Facilito', years: '2023', category: 'codefacilito' },
    { name: 'Curso de Arduino Premium', issuer: 'Código Facilito', years: '2023', category: 'codefacilito' },
    { name: 'Curso de Programación Orientada a Objetos', issuer: 'Código Facilito', years: '2023', category: 'codefacilito' },
    { name: 'Curso de Patrones de Diseño con JAVA', issuer: 'Código Facilito', years: '2023', category: 'codefacilito' },
    { name: 'Curso Profesional de JAVA', issuer: 'Código Facilito', years: '2023', category: 'codefacilito' },

    // --- Udemy ---
    { name: 'Visual Studio 2022 C# - Nivel Básico', issuer: 'Udemy', years: '2024', category: 'udemy' },
    { name: 'Curso de Java - Nivel Básico', issuer: 'Udemy', years: '2023', category: 'udemy' },
    { name: 'Aprende HTML5 de CERO a EXPERTO', issuer: 'Udemy', years: '2023', category: 'udemy' },

    // --- Universidad Pública de El Alto (UPEA) ---
    { name: 'Seguridad de la Información', issuer: 'UPEA', years: '2022', category: 'others' },
    { name: 'Programación Orientado a Objetos con Java', issuer: 'UPEA', years: '2022', category: 'others' },

    // --- I.T. Pedro Domingo Murillo ---
    { name: 'Compresores de Aire a Tornillo, Neumática y Electroneumática', issuer: 'Escuela Industrial Superior Pedro Domingo Murillo', years: '2022', category: 'others' },
    { name: 'Telecontrol y Fibra Óptica', issuer: 'Escuela Industrial Superior Pedro Domingo Murillo', years: '2022', category: 'others' },
    { name: 'Estándares de Calidad en los Servicios de Telecomunicaciones', issuer: 'Escuela Industrial Superior Pedro Domingo Murillo', years: '2021', category: 'others' }
];
