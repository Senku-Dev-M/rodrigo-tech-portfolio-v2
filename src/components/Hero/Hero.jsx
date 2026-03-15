import { motion } from 'framer-motion';
import { useI18n } from '../../i18n/i18n';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import Prism from '../Prism/Prism';
import FuzzyText from '../FuzzyText/FuzzyText';
import './Hero.css';

const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/Senku-Dev-M', icon: <Github size={24} /> },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/beimar-rodrigo-machaca-aruquipa-2052b1267/', icon: <Linkedin size={24} /> },
    { label: 'Instagram', href: 'https://www.instagram.com/rodrigo_ml_1/', icon: <Instagram size={24} /> },
    { label: 'Email', href: 'mailto:beimar090@gmail.com', icon: <Mail size={24} /> },
];

const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.11, duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }
    }),
};

export default function Hero() {
    const { t } = useI18n();

    return (
        <section id="hero" className="hero">

            {/* Prism — full background, high intensity */}
            <div className="hero-prism">
                <Prism
                    animationType="rotate"
                    timeScale={0.5}
                    height={3.5}
                    baseWidth={5.5}
                    scale={3.6}
                    hueShift={0}
                    colorFrequency={1}
                    noise={0}
                    bloom={1}
                    transparent={true}
                    suspendWhenOffscreen={true}
                />
            </div>

            {/* Overlay */}
            <div className="hero-overlay" />

            {/* Centered content */}
            <div className="hero-content">
                <motion.span className="hero-greeting" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
                    {t('hero.greeting')}
                </motion.span>

                <motion.div className="hero-fuzzy-wrapper" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
                    <FuzzyText
                        fontSize="clamp(3rem, 8vw, 7rem)"
                        fontWeight={900}
                        fontFamily="'Inter', sans-serif"
                        gradient={['#ffffff', '#e0f7ff', '#00d4ff', '#0ea5e9']}
                        enableHover={true}
                        baseIntensity={0.1}
                        hoverIntensity={0.4}
                        fuzzRange={28}
                        fps={60}
                        transitionDuration={300}
                    >
                        Rodrigo Machaca
                    </FuzzyText>
                </motion.div>

                <motion.div className="hero-roles" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
                    <span className="role-chip">{t('hero.role1')}</span>
                    <span className="role-chip role-chip--dim">{t('hero.role2')}</span>
                    <span className="role-chip role-chip--dim">{t('hero.role3')}</span>
                </motion.div>

                <motion.p className="hero-bio" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
                    {t('hero.bio')}
                </motion.p>

                <motion.div className="hero-actions" variants={fadeUp} initial="hidden" animate="visible" custom={4}>
                    <a
                        href="#about"
                        className="btn-primary"
                        onClick={e => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}
                    >
                        {t('hero.cta')}
                    </a>
                    <a href="https://github.com/Senku-Dev-M" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                        GitHub →
                    </a>
                </motion.div>

                <motion.div className="hero-socials" variants={fadeUp} initial="hidden" animate="visible" custom={5}>
                    {socialLinks.map(s => (
                        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-dot" title={s.label}>
                            {s.icon}
                        </a>
                    ))}
                </motion.div>
            </div>

            <div className="hero-scroll-hint">
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8 }}
                    className="scroll-chevron"
                >↓</motion.div>
            </div>
        </section>
    );
}
