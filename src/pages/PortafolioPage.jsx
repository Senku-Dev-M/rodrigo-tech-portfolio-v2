import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/i18n';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import GradientText from '../components/GradientText/GradientText';
import Antigravity from '../components/Antigravity/Antigravity';
import PortafolioProjectCard from '../components/Portafolio/PortafolioProjectCard';
import GithubCTA from '../components/Portafolio/GithubCTA';
import { projects } from '../data/portfolio';
import './PortafolioPage.css';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' }
    }),
};

export default function PortafolioPage() {
    const { t } = useI18n();

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
                        <Link to="/" className="back-link">{t('portfolio.backHome')}</Link>
                    </motion.div>

                    <motion.h1
                        className="page-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <GradientText colors={['#00d4ff', '#0ea5e9', '#22d3ee', '#00d4ff']} animationSpeed={7}>
                            {t('portfolio.title')}
                        </GradientText>
                    </motion.h1>

                    <motion.p
                        className="page-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {t('portfolio.subtitle')}
                    </motion.p>
                </div>

                <div className="page-container">
                    <div className="projects-list">
                        {projects.map((project, i) => (
                            <PortafolioProjectCard
                                key={project.name}
                                project={project}
                                index={i}
                            />
                        ))}
                    </div>

                    <GithubCTA />
                </div>
            </main>
            <Footer />
        </div>
    );
}
