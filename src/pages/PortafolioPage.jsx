import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import GradientText from '../components/GradientText/GradientText';
import Antigravity from '../components/Antigravity/Antigravity';
import './PortafolioPage.css';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' }
    }),
};

const projects = [
    {
        name: 'GymFlow AI',
        period: 'Nov. 2025 – Feb. 2026',
        type: 'Freelance',
        icon: '🏋️',
        accent: '#a78bfa',
        desc: 'Sistema integral de gestión para gimnasios con IA generativa. Incluye gestión de clientes, membresías, rutinas, pagos, check-in con QR y panel de administración con analíticas.',
        highlights: [
            'Backend Python + FastAPI con Onion Architecture, JWT y RBAC',
            'Frontend React 18 + TypeScript + Vite, TanStack Router/Query, Zustand',
            'IA (LLM) via OpenRouter para generación de rutinas personalizadas en JSON',
            'Asistente IA para administradores con historial de sesiones',
            'PostgreSQL + SQLAlchemy 2.0 + Pydantic, Docker Compose + Nginx',
        ],
        tags: ['Python', 'FastAPI', 'React 18', 'TypeScript', 'PostgreSQL', 'Docker', 'LLM', 'JWT/RBAC'],
    },
    {
        name: 'PixPro',
        period: 'Jul. 2025 – Sep. 2025',
        type: 'Jala University',
        icon: '🖼️',
        accent: '#38bdf8',
        desc: 'Plataforma integral de gestión de imágenes con arquitectura distribuida y microservicios. Sistema completo de procesamiento, optimización y despliegue automatizado.',
        highlights: [
            'Backend Node.js + TypeScript aplicando Clean Architecture',
            'Microservicio Python para procesamiento y optimización de imágenes',
            'Frontend Angular con arquitectura modular y lazy loading',
            'MySQL + RabbitMQ (mensajería asíncrona) + Supabase (auth)',
            'Docker para contenedorización + GitLab CI/CD para despliegue automatizado',
        ],
        tags: ['Node.js', 'TypeScript', 'Python', 'Angular', 'MySQL', 'RabbitMQ', 'Docker', 'GitLab CI/CD'],
    },
    {
        name: 'TeToca',
        period: 'Abr. 2025 – Jun. 2025',
        type: 'Jala University',
        icon: '🤝',
        accent: '#ec4899',
        desc: 'App móvil de intercambio de servicios entre personas. Diseño UX completo basado en Design Thinking, con prototipo de alta fidelidad en Figma listo para desarrollo.',
        highlights: [
            'Investigación de usuarios, definición de user personas y flows',
            'Wireframes y prototipos de alta fidelidad en Figma',
            'Diseño de experiencias: onboarding, creación de servicios, gestión de perfiles',
            'Principios de usabilidad, accesibilidad y Design Thinking',
            'Iteraciones basadas en feedback para mejorar la experiencia de usuario',
        ],
        tags: ['Figma', 'UI/UX', 'Design Thinking', 'Prototipado', 'Usabilidad', 'Accesibilidad'],
    },
];

export default function PortafolioPage() {
    return (
        <div className="page-wrapper">
            <Navbar />
            <div className="page-antigravity">
                <Antigravity count={120} color="#00d4ff" autoAnimate particleSize={0.45} particleShape="tetrahedron" lerpSpeed={0.04} waveAmplitude={0.7} pulseSpeed={2} />
            </div>
            <main className="portafolio-page">
                <div className="page-hero">
                    <motion.div
                        className="page-back"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Link to="/" className="back-link">← Volver al inicio</Link>
                    </motion.div>

                    <motion.h1
                        className="page-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <GradientText colors={['#00d4ff', '#0ea5e9', '#22d3ee', '#00d4ff']} animationSpeed={7}>
                            Portafolio
                        </GradientText>
                    </motion.h1>

                    <motion.p
                        className="page-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Proyectos reales con impacto — desde APIs con IA hasta apps móviles con UX de alta fidelidad.
                    </motion.p>
                </div>

                <div className="page-container">
                    <div className="projects-list">
                        {projects.map((project, i) => (
                            <motion.div
                                key={project.name}
                                className="project-detail-card"
                                style={{ '--accent': project.accent }}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i}
                            >
                                <div className="project-detail-header">
                                    <div className="project-detail-meta">
                                        <span className="project-detail-icon">{project.icon}</span>
                                        <div>
                                            <h2 className="project-detail-name">{project.name}</h2>
                                            <div className="project-detail-badges">
                                                <span className="badge-type" style={{ color: project.accent, borderColor: `${project.accent}40` }}>
                                                    {project.type}
                                                </span>
                                                <span className="badge-period">{project.period}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="project-detail-desc">{project.desc}</p>

                                <div className="project-highlights">
                                    <h3>Aspectos destacados</h3>
                                    <ul>
                                        {project.highlights.map((h, j) => (
                                            <li key={j}>
                                                <span className="highlight-dot" style={{ background: project.accent }} />
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="project-tag" style={{ borderColor: `${project.accent}35`, color: 'rgba(220,210,255,0.8)' }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="github-cta"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="github-cta-inner">
                            <span className="github-icon">⌨</span>
                            <div>
                                <h3>Más proyectos en GitHub</h3>
                                <p>Explora mi código, contribuciones y repos públicos.</p>
                            </div>
                            <a
                                href="https://github.com/Senku-Dev-M"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                            >
                                Ver GitHub →
                            </a>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
