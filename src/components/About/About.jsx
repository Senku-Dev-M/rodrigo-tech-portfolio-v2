import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useI18n } from '../../i18n/i18n';
import useWindowWidthBelow from '../../hooks/useWindowWidthBelow';
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
    const { t } = useI18n();
    const skillsRef = useRef(null);
    const expRef = useRef(null);
    const skillsInView = useInView(skillsRef, { once: true, margin: '-60px' });
    const expInView = useInView(expRef, { once: true, margin: '-60px' });
    const isMobile = useWindowWidthBelow(768);
    const particleCount = isMobile ? 60 : 140;

    return (
        <section id="about" className="about">
            <div className="about-antigravity">
                <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
                    <Antigravity
                        count={particleCount} magnetRadius={8} ringRadius={9} waveSpeed={0.3}
                        waveAmplitude={0.8} particleSize={0.45} lerpSpeed={0.04}
                        color="#00d4ff" autoAnimate={true} particleVariance={0.8}
                        rotationSpeed={0.05} depthFactor={0.6} pulseSpeed={2}
                        particleShape="tetrahedron" fieldStrength={12}
                    />
                </div>
            </div>
            <div className="section-container">
                <SectionTitle>{t('about.title')}</SectionTitle>

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
                        <p className="profile-subtitle">{t('about.subtitle')}</p>
                        <p className="profile-desc">{t('about.desc')}</p>
                        <div className="profile-badges">
                            <span className="badge">{t('about.badge1')}</span>
                            <span className="badge">{t('about.badge2')}</span>
                            <span className="badge">{t('about.badge3')}</span>
                        </div>
                    </div>
                </motion.div>

                <ExperienceSection expRef={expRef} expInView={expInView} />
                <SkillsSection skillsRef={skillsRef} skillsInView={skillsInView} />
                <EducationSection />
                <CertificationsSection />
            </div>
        </section>
    );
}
