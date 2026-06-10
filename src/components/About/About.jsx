import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useI18n } from '../../i18n/i18n';
import { GraduationCap, Users, MapPin, BookOpen } from 'lucide-react';
import profileImg from '../../assets/Profile2.png';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import MinimalProjectCard from '../Portafolio/MinimalProjectCard';
import { projects } from '../../data/portfolio';
import { PORTFOLIO_ROUTE, FORMACION_ROUTE } from '../../constants/routes';
import './About.css';

function SectionTitle({ num = '01', children }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <motion.div
            ref={ref}
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <span className="section-num">{num}</span>
            <h2 className="section-title">{children}</h2>
        </motion.div>
    );
}

export default function About() {
    const { t } = useI18n();
    const navigate = useNavigate();
    const skillsRef = useRef(null);
    const expRef = useRef(null);
    const skillsInView = useInView(skillsRef, { once: true, margin: '-60px' });
    const expInView = useInView(expRef, { once: true, margin: '-60px' });
    return (
        <section id="about" className="about">
            <div className="section-container">
                <SectionTitle num="01">{t('about.title')}</SectionTitle>

                {/* Profile — bento layout */}
                <div className="profile-bento">
                    <motion.div
                        className="bento-card bento-photo"
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="profile-avatar">
                            <img src={profileImg} alt="Rodrigo Machaca" className="avatar-photo" />
                            <div className="avatar-ring" />
                        </div>
                        <h3>Beimar Rodrigo Machaca Aruquipa</h3>
                        <p className="profile-subtitle">{t('about.subtitle')}</p>
                    </motion.div>

                    <motion.div
                        className="bento-card bento-bio"
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p className="profile-desc">{t('about.desc')}</p>
                        <div className="profile-badges">
                            <span className="badge"><GraduationCap size={14} /> {t('about.badge1')}</span>
                            <span className="badge"><Users size={14} /> {t('about.badge2')}</span>
                            <span className="badge"><MapPin size={14} /> {t('about.badge3')}</span>
                        </div>
                    </motion.div>
                </div>

                <ExperienceSection expRef={expRef} expInView={expInView} />
                <SkillsSection skillsRef={skillsRef} skillsInView={skillsInView} />

                {/* Highlighted Projects Grid */}
                <motion.div
                    className="about-featured-projects"
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h3 className="subsection-title">{t('portfolio.featuredTitle')}</h3>
                    <div className="about-projects-grid">
                        {projects.slice(0, 2).map((project, index) => (
                            <MinimalProjectCard
                                key={project.name}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>
                    <div className="about-projects-cta">
                        <button onClick={() => navigate(PORTFOLIO_ROUTE)} className="btn-secondary">
                            {t('portfolio.featuredCta')}
                        </button>
                    </div>
                </motion.div>

                {/* Formación CTA */}
                <motion.div
                    className="about-formacion-cta"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="formacion-cta-card">
                        <span className="formacion-cta-icon" aria-hidden="true">
                            <BookOpen size={22} />
                        </span>
                        <div className="formacion-cta-text">
                            <p className="formacion-cta-label">{t('formacion.title')}</p>
                            <p className="formacion-cta-desc">{t('formacion.subtitle')}</p>
                        </div>
                        <button
                            className="btn-formacion-link"
                            onClick={() => navigate(FORMACION_ROUTE)}
                        >
                            {t('formacion.ctaLabel')}
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
