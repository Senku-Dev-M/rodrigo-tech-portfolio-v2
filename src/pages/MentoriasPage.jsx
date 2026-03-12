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

import MentoringStats from '../components/Mentorias/MentoringStats';
import MentoringApproach from '../components/Mentorias/MentoringApproach';
import MentoringCertifications from '../components/Mentorias/MentoringCertifications';
import Breadcrumb from '../components/Mentorias/Breadcrumb';

// ─── Page slide animation ────────────────────────────────────
const slideVariants = {
    initial: { opacity: 0, x: 32 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
};

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
                                <MentoringStats />

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
                                <MentoringApproach />

                                {/* Certifications */}
                                <MentoringCertifications />
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
