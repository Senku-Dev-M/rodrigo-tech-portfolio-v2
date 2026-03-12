import { motion } from 'framer-motion';
import GradientText from '../GradientText/GradientText';
import './Portfolio.css';

const projects = [
    {
        name: 'GymFlow AI',
        desc: 'Sistema de gestión para gimnasios con IA generativa. Backend Python + FastAPI, React 18 + TypeScript, JWT/RBAC, rutinas personalizadas con OpenRouter, Docker.',
        tags: ['FastAPI', 'React', 'PostgreSQL', 'Docker', 'IA/LLM', 'TypeScript'],
        accent: '#7c5cfc',
        icon: '🏋️',
        status: 'Freelance',
    },
    {
        name: 'PixPro',
        desc: 'Plataforma integral de gestión de imágenes con arquitectura distribuida. Node.js + TypeScript (Clean Architecture), microservicio Python, RabbitMQ, Supabase, Angular.',
        tags: ['Node.js', 'TypeScript', 'Python', 'Angular', 'RabbitMQ', 'Docker'],
        accent: '#38bdf8',
        icon: '🖼️',
        status: 'Jala University',
    },
    {
        name: 'TeToca',
        desc: 'App móvil de intercambio de servicios. Diseño UX completo en Figma: investigación de usuarios, user flows, wireframes y prototipos de alta fidelidad.',
        tags: ['Figma', 'UI/UX', 'Design Thinking', 'Prototipado'],
        accent: '#ec4899',
        icon: '🤝',
        status: 'Jala University',
    },
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="portfolio">
            <div className="section-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <GradientText colors={['#38bdf8', '#7c5cfc', '#c084fc', '#38bdf8']} animationSpeed={8}>
                        Portafolio
                    </GradientText>
                </motion.h2>

                <div className="portfolio-grid">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.name}
                            className="project-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12, duration: 0.6 }}
                            whileHover={{ y: -6 }}
                            style={{ '--accent': project.accent }}
                        >
                            <div className="project-header">
                                <span className="project-icon">{project.icon}</span>
                                <span className="project-status" style={{ color: project.accent, borderColor: `${project.accent}40` }}>
                                    {project.status}
                                </span>
                            </div>
                            <h3 className="project-name">{project.name}</h3>
                            <p className="project-desc">{project.desc}</p>
                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span key={tag} className="project-tag">{tag}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="portfolio-more"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <p>Más proyectos próximamente. Mientras tanto, visita mi GitHub:</p>
                    <a
                        href="https://github.com/Senku-Dev-M"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                    >
                        Ver GitHub →
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
