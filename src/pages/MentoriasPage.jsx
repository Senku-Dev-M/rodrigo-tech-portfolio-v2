import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import GradientText from '../components/GradientText/GradientText';
import SubjectCard from '../components/SubjectCard/SubjectCard';
import LabCard from '../components/LabCard/LabCard';
import GuideView from '../components/GuideView/GuideView';
import TheoryView from '../components/TheoryView/TheoryView';
import Antigravity from '../components/Antigravity/Antigravity';
import Icon from '../components/Icon/Icon';
import { subjects } from '../data/mentoring';
import './MentoriasPage.css';

// ─── Breadcrumb ─────────────────────────────────────────────
function Breadcrumb({ view, subject, lab, onNavigate }) {
    return (
        <nav className="breadcrumb">
            <button className={`bc-item ${view === 'subjects' ? 'bc-item--active' : ''}`} onClick={() => onNavigate('subjects')}>
                Mentoría
            </button>
            {subject && (
                <>
                    <span className="bc-sep">›</span>
                    <button className={`bc-item ${view === 'labs' ? 'bc-item--active' : ''}`} onClick={() => onNavigate('labs')}>
                        {subject.title}
                    </button>
                </>
            )}
            {lab && (
                <>
                    <span className="bc-sep">›</span>
                    <span className="bc-item bc-item--active">{lab.title}</span>
                </>
            )}
        </nav>
    );
}

// ─── Page slide animation ────────────────────────────────────
const slideVariants = {
    initial: { opacity: 0, x: 32 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
};

// ─── Stats (shown only in subjects view) ────────────────────
const stats = [
    { iconName: 'calendar', value: '2+', label: 'Años mentoreando' },
    { iconName: 'book', value: '6+', label: 'Cursos impartidos' },
    { iconName: 'users', value: '100+', label: 'Estudiantes apoyados' },
    { iconName: 'star', value: '3×', label: 'Estudiante Destacado' },
];

const certifications = [
    'Programación 1 – Jala University Mentor U (Ene. 2026)',
    'Computer Networks 1 – Jala University Mentor U (Oct. 2025)',
    'Programación 3 – Jala University Mentor U (Ago. 2025)',
    'Desarrollo de Software I – Jala University Mentor U (May. 2025)',
    'Base de Datos 2 – Jala University Mentor U (Abr. 2025)',
    'Programación 2 – Jala University Mentor U (Feb. 2025)',
];

// ─── Main page ───────────────────────────────────────────────
export default function MentoriasPage() {
    const [view, setView] = useState('subjects'); // 'subjects' | 'labs' | 'guide'
    const [subject, setSubject] = useState(null);
    const [lab, setLab] = useState(null);

    function navigate(to, nextSubject, nextLab) {
        if (to === 'subjects') { setSubject(null); setLab(null); }
        if (to === 'labs') { setLab(null); if (nextSubject) setSubject(nextSubject); }
        if (to === 'guide') { if (nextLab) setLab(nextLab); }
        setView(to);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className="page-wrapper">
            <Navbar />
            <div className="page-antigravity">
                <Antigravity count={120} color="#00d4ff" autoAnimate particleSize={0.45} particleShape="tetrahedron" lerpSpeed={0.04} waveAmplitude={0.7} pulseSpeed={2} />
            </div>

            <main className="mentorias-page">
                {/* ── Page hero (always visible) ── */}
                <div className="page-hero">
                    <motion.div className="page-back" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                        <Link to="/" className="back-link">← Volver al inicio</Link>
                    </motion.div>

                    <motion.h1 className="page-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                        <GradientText colors={['#00d4ff', '#0ea5e9', '#22d3ee', '#00d4ff']} animationSpeed={7}>Mentorías</GradientText>
                    </motion.h1>

                    <motion.p className="page-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                        Desde enero de 2024 formo parte del programa <strong>Mentor U</strong> de Jala University,
                        brindando mentoría académica a estudiantes de ingeniería en software.
                    </motion.p>
                </div>

                <div className="page-container">
                    {/* ── Breadcrumb (only when inside a subject) ── */}
                    {view !== 'subjects' && (
                        <Breadcrumb
                            view={view}
                            subject={subject}
                            lab={lab}
                            onNavigate={(to) => navigate(to)}
                        />
                    )}

                    {/* ── Animated view swap ── */}
                    <AnimatePresence mode="wait">

                        {/* VIEW 1: subjects list */}
                        {view === 'subjects' && (
                            <motion.div key="subjects" variants={slideVariants} initial="initial" animate="animate" exit="exit">

                                {/* Stats */}
                                <div className="stats-row">
                                    {stats.map((s, i) => (
                                        <div key={i} className="stat-card">
                                            <Icon name={s.iconName} size={20} color="rgba(0,212,255,0.5)" />
                                            <span className="stat-value">{s.value}</span>
                                            <span className="stat-label">{s.label}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Subject cards */}
                                <section className="mentorias-section">
                                    <h2 className="section-heading">Materias</h2>
                                    <div className="subjects-grid">
                                        {subjects.map(subj => (
                                            <SubjectCard
                                                key={subj.id}
                                                subject={subj}
                                                onClick={(s) => navigate('labs', s)}
                                            />
                                        ))}
                                    </div>
                                </section>

                                {/* Approach */}
                                <section className="mentorias-section">
                                    <h2 className="section-heading">Mi Enfoque</h2>
                                    <div className="approach-card">
                                        <p>Me caracterizo por un acompañamiento técnico <strong>personalizado</strong>, con revisiones de código, explicaciones paso a paso y ejemplos reales.</p>
                                        <ul className="approach-list">
                                            <li><Icon name="search" size={15} color="#00d4ff" /> Revisiones de código con feedback específico</li>
                                            <li><Icon name="tool" size={15} color="#00d4ff" /> Guía en arquitectura y buenas prácticas</li>
                                            <li><Icon name="book" size={15} color="#00d4ff" /> Apoyo en proyectos académicos y personales</li>
                                            <li><Icon name="chat" size={15} color="#00d4ff" /> Sesiones adaptadas al nivel del estudiante</li>
                                            <li><Icon name="rocket" size={15} color="#00d4ff" /> Enfoque en resultados: aprobar, aprender y crecer</li>
                                        </ul>
                                    </div>
                                </section>

                                {/* Certifications */}
                                <section className="mentorias-section">
                                    <h2 className="section-heading">Certificados como Mentor</h2>
                                    <div className="cert-list">
                                        {certifications.map((cert, i) => (
                                            <motion.div key={i} className="cert-row" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                                                <span className="cert-check"><Icon name="check" size={14} color="#00d4ff" /></span>
                                                <span>{cert}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="cta-row">
                                        <a href="https://drive.google.com/drive/folders/1ZjpmZptWPuFE_2xwMWTj7qRChAecPDzH" target="_blank" rel="noopener noreferrer" className="btn-primary">
                                            Ver certificados completos →
                                        </a>
                                    </div>
                                </section>
                            </motion.div>
                        )}

                        {/* VIEW 2: labs list for a subject */}
                        {view === 'labs' && subject && (
                            <motion.div key="labs" variants={slideVariants} initial="initial" animate="animate" exit="exit">
                                <div className="subject-detail-header">
                                    <span className="subject-detail-icon">{subject.icon}</span>
                                    <div>
                                        <span className="subject-detail-code">{subject.code}</span>
                                        <h2 className="subject-detail-title">{subject.title}</h2>
                                        <p className="subject-detail-desc">{subject.description}</p>
                                    </div>
                                </div>

                                <section className="mentorias-section">
                                    <h3 className="section-heading">Laboratorios</h3>
                                    <div className="labs-grid">
                                        {subject.labs.map((l, i) => (
                                            <LabCard
                                                key={l.id}
                                                lab={l}
                                                index={i}
                                                onClick={(lb) => navigate('guide', subject, lb)}
                                            />
                                        ))}
                                    </div>
                                </section>
                            </motion.div>
                        )}

                        {/* VIEW 3: full guide / theory */}
                        {view === 'guide' && lab && (
                            <motion.div key="guide" variants={slideVariants} initial="initial" animate="animate" exit="exit">
                                {lab.type === 'Teoría' ? (
                                    <TheoryView lab={lab} />
                                ) : (
                                    <GuideView lab={lab} />
                                )}
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>
            </main>
            <Footer />
        </div>
    );
}
