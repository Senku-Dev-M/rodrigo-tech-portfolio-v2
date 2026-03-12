import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import GradientText from '../GradientText/GradientText';
import Antigravity from '../Antigravity/Antigravity';
import profileImg from '../../assets/profile.jpg';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import EducationSection from './EducationSection';
import CertificationsSection from './CertificationsSection';
import './About.css';

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
                <ExperienceSection expRef={expRef} expInView={expInView} />

                {/* Skills Grid */}
                <SkillsSection skillsRef={skillsRef} skillsInView={skillsInView} />

                {/* Education */}
                <EducationSection />

                {/* Certifications highlight */}
                <CertificationsSection />
            </div>
        </section>
    );
}
