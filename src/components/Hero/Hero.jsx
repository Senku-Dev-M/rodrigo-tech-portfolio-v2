import { motion } from 'framer-motion';
import Prism from '../Prism/Prism';
import FuzzyText from '../FuzzyText/FuzzyText';
import './Hero.css';

const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/Senku-Dev-M', icon: '⌨' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/beimar-rodrigo-machaca-aruquipa-2052b1267/', icon: '💼' },
    { label: 'Instagram', href: 'https://www.instagram.com/rodrigo_ml_1/', icon: '📸' },
    { label: 'Email', href: 'mailto:beimar090@gmail.com', icon: '✉' },
];

const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.11, duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }
    }),
};

export default function Hero() {
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
                    glow={1}
                    bloom={1}
                    transparent={true}
                />
            </div>

            {/* Overlay: only darken top & edges so Prism beams shine through bottom */}
            <div className="hero-overlay" />

            {/* Centered content */}
            <div className="hero-content">
                <motion.span className="hero-greeting" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
                    hola, soy
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
                    <span className="role-chip">Full Stack Developer</span>
                    <span className="role-chip role-chip--dim">Mentor Académico</span>
                    <span className="role-chip role-chip--dim">Backend · La Paz, Bolivia</span>
                </motion.div>

                <motion.p className="hero-bio" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
                    Estudiante de Ingeniería en Software Comercial. Apasionado por la arquitectura limpia,
                    el backend y la automatización. Construyo sistemas escalables y
                    experiencias de usuario memorables.
                </motion.p>

                <motion.div className="hero-actions" variants={fadeUp} initial="hidden" animate="visible" custom={4}>
                    <a
                        href="#about"
                        className="btn-primary"
                        onClick={e => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}
                    >
                        Conoce mi trabajo
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
