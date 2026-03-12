import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import GradientText from '../GradientText/GradientText';
import Antigravity from '../Antigravity/Antigravity';
import profileImg from '../../assets/profile.jpg';
import './About.css';

const skills = [
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

const categoryColors = {
    backend: '#00d4ff',
    frontend: '#0ea5e9',
    database: '#06b6d4',
    devops: '#22d3ee',
    design: '#67e8f9',
};

const experiences = [
    {
        period: 'Nov. 2025 – Feb. 2026',
        role: 'Desarrollador Full Stack',
        company: 'Freelance',
        desc: 'Desarrollé GymFlow AI — sistema de gestión para gimnasios con Python + FastAPI Onion Architecture, React 18 + TypeScript, JWT/RBAC, IA generativa para rutinas con OpenRouter, contenedorizado con Docker.',
        accent: '#00d4ff',
    },
    {
        period: 'Jul. 2025 – Sep. 2025',
        role: 'Desarrollador Full Stack',
        company: 'Jala University',
        desc: 'Participé en PixPro, plataforma de gestión de imágenes con arquitectura distribuida. Backend en Node.js/TypeScript (Clean Architecture), microservicio Python para imágenes, Docker, GitLab CI/CD, MySQL, RabbitMQ, Supabase, frontend Angular.',
        accent: '#0ea5e9',
    },
    {
        period: 'Ene. 2024 – Actualidad',
        role: 'Mentor de Ingeniería de Software',
        company: 'Jala University – Programa Mentor U',
        desc: 'Mentoría académica en Programación I y II, Bases de Datos y Desarrollo de Software. Guía de APIs con Java/Spring Boot, revisiones de código y acompañamiento técnico en proyectos.',
        accent: '#06b6d4',
    },
    {
        period: 'Abr. 2025 – Jun. 2025',
        role: 'Diseñador UI/UX',
        company: 'Jala University',
        desc: 'Diseñé TeToca, app móvil de intercambio de servicios. Prototipo completo en Figma con Design Thinking, user flows, wireframes y prototipos de alta fidelidad.',
        accent: '#22d3ee',
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6, ease: 'easeOut' } }),
};

function SectionTitle({ children }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <motion.h2
            ref={ref}
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
        >
            <GradientText colors={['#00d4ff', '#0ea5e9', '#22d3ee', '#00d4ff']} animationSpeed={8}>
                {children}
            </GradientText>
        </motion.h2>
    );
}

export default function About() {
    const skillsRef = useRef(null);
    const expRef = useRef(null);
    const skillsInView = useInView(skillsRef, { once: true, margin: '-60px' });
    const expInView = useInView(expRef, { once: true, margin: '-60px' });

    return (
        <section id="about" className="about">
            {/* Subtle Antigravity particle field in the background */}
            <div className="about-antigravity">
                <Antigravity
                    count={140}
                    magnetRadius={8}
                    ringRadius={9}
                    waveSpeed={0.3}
                    waveAmplitude={0.8}
                    particleSize={0.45}
                    lerpSpeed={0.04}
                    color="#00d4ff"
                    autoAnimate={true}
                    particleVariance={0.8}
                    rotationSpeed={0.05}
                    depthFactor={0.6}
                    pulseSpeed={2}
                    particleShape="tetrahedron"
                    fieldStrength={12}
                />
            </div>
            <div className="section-container">
                <SectionTitle>Sobre Mí</SectionTitle>

                {/* Profile Card */}
                <motion.div
                    className="profile-card"
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="profile-avatar">
                        <img src={profileImg} alt="Rodrigo Machaca" className="avatar-photo" />
                        <div className="avatar-ring" />
                    </div>
                    <div className="profile-info">
                        <h3>Beimar Rodrigo Machaca Aruquipa</h3>
                        <p className="profile-subtitle">Full Stack Developer · La Paz, Bolivia</p>
                        <p className="profile-desc">
                            Estudiante de último año de Ingeniería en Software Comercial y Técnico Superior en
                            Informática Industrial. Orientado al backend con experiencia real en sistemas distribuidos,
                            Clean Architecture y DevOps. Apasionado por la enseñanza, la mentoría y las buenas
                            prácticas de ingeniería.
                        </p>
                        <div className="profile-badges">
                            <span className="badge">🎓 Estudiante Destacado × 3</span>
                            <span className="badge">🧑‍🏫 Mentor Académico</span>
                            <span className="badge">📍 La Paz, Bolivia</span>
                        </div>
                    </div>
                </motion.div>

                {/* Experience Timeline */}
                <div ref={expRef} className="experience-section">
                    <h3 className="subsection-title">Experiencia Laboral</h3>
                    <div className="timeline">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                className="timeline-item"
                                variants={fadeUp}
                                initial="hidden"
                                animate={expInView ? 'visible' : 'hidden'}
                                custom={i}
                            >
                                <div className="timeline-dot" style={{ background: exp.accent, boxShadow: `0 0 12px ${exp.accent}60` }} />
                                <div className="timeline-card">
                                    <span className="timeline-period">{exp.period}</span>
                                    <h4 className="timeline-role">{exp.role}</h4>
                                    <span className="timeline-company" style={{ color: exp.accent }}>{exp.company}</span>
                                    <p className="timeline-desc">{exp.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Skills Grid */}
                <div ref={skillsRef} className="skills-section">
                    <h3 className="subsection-title">Habilidades Técnicas</h3>
                    <div className="skills-grid">
                        {skills.map((skill, i) => (
                            <motion.div
                                key={skill.name}
                                className="skill-chip"
                                style={{
                                    '--accent': categoryColors[skill.category],
                                    borderColor: `${categoryColors[skill.category]}40`,
                                }}
                                variants={fadeUp}
                                initial="hidden"
                                animate={skillsInView ? 'visible' : 'hidden'}
                                custom={i * 0.5}
                                whileHover={{ scale: 1.06, borderColor: categoryColors[skill.category] }}
                            >
                                {skill.name}
                            </motion.div>
                        ))}
                    </div>
                    <div className="skills-legend">
                        {Object.entries(categoryColors).map(([cat, color]) => (
                            <span key={cat} className="legend-item">
                                <span className="legend-dot" style={{ background: color }} />
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div className="education-section">
                    <h3 className="subsection-title">Formación</h3>
                    <div className="education-grid">
                        <motion.div
                            className="education-card"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="edu-icon">🎓</div>
                            <div>
                                <h4>Ingeniería en Software Comercial</h4>
                                <p className="edu-school">Jala University · 2023 – Actualidad</p>
                                <p className="edu-desc">Formación intensiva Full Stack & QA Automation. Estudiante Destacado 3 semestres consecutivos.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="education-card"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="edu-icon">🏭</div>
                            <div>
                                <h4>Técnico Superior en Informática Industrial</h4>
                                <p className="edu-school">Escuela Industrial Superior Pedro Domingo Murillo · 2020 – 2024</p>
                                <p className="edu-desc">Formación técnica en informática industrial, programación y sistemas computacionales.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Certifications highlight */}
                <div className="certs-section">
                    <h3 className="subsection-title">Certificaciones Destacadas</h3>
                    <div className="certs-grid">
                        {[
                            { name: "Dean's List Recognition", issuer: "Jala University", years: "2024 – 2025" },
                            { name: "Programación 1 & 2 – Mentor U", issuer: "Jala University", years: "2025" },
                            { name: "Curso Profesional de Java", issuer: "Código Facilito", years: "2023" },
                            { name: "Java Spring Boot + JPA", issuer: "Platzi", years: "2023" },
                            { name: "Patrones de Diseño con Java", issuer: "Código Facilito", years: "2023" },
                            { name: "Python Essentials 1", issuer: "Cisco Networking Academy", years: "2023" },
                        ].map((cert, i) => (
                            <motion.div
                                key={i}
                                className="cert-card"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}
                                whileHover={{ y: -4 }}
                            >
                                <span className="cert-icon">🏆</span>
                                <div>
                                    <p className="cert-name">{cert.name}</p>
                                    <p className="cert-meta">{cert.issuer} · {cert.years}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="certs-link-row">
                        <a
                            href="https://drive.google.com/drive/folders/1ZjpmZptWPuFE_2xwMWTj7qRChAecPDzH"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            Ver todos los certificados →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
