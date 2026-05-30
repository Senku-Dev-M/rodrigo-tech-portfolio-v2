import gymflowPreview from '../assets/portfolio/gymflow-preview.png';
import tetocaPreview from '../assets/portfolio/tetoca-preview.png';

export const projects = [
    {
        name: 'GymFlow AI',
        period: { es: 'Nov. 2025 – Feb. 2026', en: 'Nov 2025 – Feb 2026' },
        type: 'Freelance',
        icon: 'dumbbell',
        accent: '#a78bfa',
        links: [
            {
                label: { es: 'Abrir demo', en: 'Open demo' },
                href: 'https://gymflow-frontend-three.vercel.app/login',
                tone: 'primary',
            },
        ],
        impact: {
            es: 'Panel operativo para gimnasios con IA, roles, pagos y rutinas personalizadas en un solo flujo.',
            en: 'Operational gym platform with AI, roles, payments and personalized routines in one workflow.',
        },
        preview: {
            type: 'image',
            image: gymflowPreview,
            alt: {
                es: 'Vista de login administrativo de GymFlow AI',
                en: 'GymFlow AI administrative login screen',
            },
            caption: {
                es: 'Acceso administrativo del sistema',
                en: 'Administrative access screen',
            },
        },
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
        icon: 'image',
        accent: '#38bdf8',
        impact: {
            es: 'Arquitectura distribuida para procesar, optimizar y entregar imágenes con servicios desacoplados.',
            en: 'Distributed architecture for processing, optimizing and delivering images through decoupled services.',
        },
        preview: {
            type: 'architecture',
            caption: {
                es: 'Mapa técnico de servicios',
                en: 'Technical services map',
            },
            nodes: ['Angular UI', 'Node API', 'Python worker', 'RabbitMQ', 'MySQL', 'Supabase'],
        },
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
        icon: 'handshake',
        accent: '#ec4899',
        links: [
            {
                label: { es: 'Ver landing page', en: 'View landing page' },
                href: 'https://tetoca-landingpage.vercel.app/',
                tone: 'primary',
            },
        ],
        impact: {
            es: 'Landing formal para presentar una API de marketplace lista para equipos de producto.',
            en: 'Formal landing page for presenting a marketplace API ready for product teams.',
        },
        preview: {
            type: 'image',
            image: tetocaPreview,
            alt: {
                es: 'Vista principal de la landing page de TeToca',
                en: 'Main view of the TeToca landing page',
            },
            caption: {
                es: 'Landing page pública',
                en: 'Public landing page',
            },
        },
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
