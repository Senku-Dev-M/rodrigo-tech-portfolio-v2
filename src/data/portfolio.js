export const projects = [
    {
        name: 'GymFlow AI',
        period: { es: 'Nov. 2025 – Feb. 2026', en: 'Nov 2025 – Feb 2026' },
        type: 'Freelance',
        icon: '🏋️',
        accent: '#a78bfa',
        desc: {
            es: 'Sistema integral de gestión para gimnasios con IA generativa. Incluye gestión de clientes, membresías, rutinas, pagos, check-in con QR y panel de administración con analíticas.',
            en: 'Comprehensive gym management system with generative AI. Includes client management, memberships, routines, payments, QR check-in, and admin dashboard with analytics.',
        },
        highlights: {
            es: [
                'Backend Python + FastAPI con Onion Architecture, JWT y RBAC',
                'Frontend React 18 + TypeScript + Vite, TanStack Router/Query, Zustand',
                'IA (LLM) via OpenRouter para generación de rutinas personalizadas en JSON',
                'Asistente IA para administradores con historial de sesiones',
                'PostgreSQL + SQLAlchemy 2.0 + Pydantic, Docker Compose + Nginx',
            ],
            en: [
                'Backend Python + FastAPI with Onion Architecture, JWT and RBAC',
                'Frontend React 18 + TypeScript + Vite, TanStack Router/Query, Zustand',
                'AI (LLM) via OpenRouter for personalized routine generation in JSON',
                'AI assistant for admins with session history',
                'PostgreSQL + SQLAlchemy 2.0 + Pydantic, Docker Compose + Nginx',
            ],
        },
        tags: ['Python', 'FastAPI', 'React 18', 'TypeScript', 'PostgreSQL', 'Docker', 'LLM', 'JWT/RBAC'],
    },
    {
        name: 'PixPro',
        period: { es: 'Jul. 2025 – Sep. 2025', en: 'Jul 2025 – Sep 2025' },
        type: 'Jala University',
        icon: '🖼️',
        accent: '#38bdf8',
        desc: {
            es: 'Plataforma integral de gestión de imágenes con arquitectura distribuida y microservicios. Sistema completo de procesamiento, optimización y despliegue automatizado.',
            en: 'Comprehensive image management platform with distributed architecture and microservices. Full processing, optimization, and automated deployment system.',
        },
        highlights: {
            es: [
                'Backend Node.js + TypeScript aplicando Clean Architecture',
                'Microservicio Python para procesamiento y optimización de imágenes',
                'Frontend Angular con arquitectura modular y lazy loading',
                'MySQL + RabbitMQ (mensajería asíncrona) + Supabase (auth)',
                'Docker para contenedorización + GitLab CI/CD para despliegue automatizado',
            ],
            en: [
                'Backend Node.js + TypeScript applying Clean Architecture',
                'Python microservice for image processing and optimization',
                'Angular frontend with modular architecture and lazy loading',
                'MySQL + RabbitMQ (async messaging) + Supabase (auth)',
                'Docker containerization + GitLab CI/CD for automated deployment',
            ],
        },
        tags: ['Node.js', 'TypeScript', 'Python', 'Angular', 'MySQL', 'RabbitMQ', 'Docker', 'GitLab CI/CD'],
    },
    {
        name: 'TeToca',
        period: { es: 'Abr. 2025 – Jun. 2025', en: 'Apr 2025 – Jun 2025' },
        type: 'Jala University',
        icon: '🤝',
        accent: '#ec4899',
        desc: {
            es: 'App móvil de intercambio de servicios entre personas. Diseño UX completo basado en Design Thinking, con prototipo de alta fidelidad en Figma listo para desarrollo.',
            en: 'Mobile service exchange app. Complete UX design based on Design Thinking, with a high-fidelity Figma prototype ready for development.',
        },
        highlights: {
            es: [
                'Investigación de usuarios, definición de user personas y flows',
                'Wireframes y prototipos de alta fidelidad en Figma',
                'Diseño de experiencias: onboarding, creación de servicios, gestión de perfiles',
                'Principios de usabilidad, accesibilidad y Design Thinking',
                'Iteraciones basadas en feedback para mejorar la experiencia de usuario',
            ],
            en: [
                'User research, user persona definition, and user flows',
                'Wireframes and high-fidelity prototypes in Figma',
                'Experience design: onboarding, service creation, profile management',
                'Usability, accessibility, and Design Thinking principles',
                'Feedback-driven iterations to improve user experience',
            ],
        },
        tags: ['Figma', 'UI/UX', 'Design Thinking', 'Prototipado', 'Usabilidad', 'Accesibilidad'],
    },
];
