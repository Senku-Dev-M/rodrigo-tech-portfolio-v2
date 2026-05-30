import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/PageShell/PageHero';
import PageLayout from '../components/PageShell/PageLayout';
import GithubCTA from '../components/Portafolio/GithubCTA';
import ProjectShowcaseCard from '../components/Portafolio/ProjectShowcaseCard';
import { useI18n } from '../i18n/i18n';
import { projects } from '../data/portfolio';
import './PortafolioPage.css';

export default function PortafolioPage() {
    const { t } = useI18n();
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const categories = [
        { id: 'all', labelKey: 'portfolio.filterAll' },
        { id: 'fullstack', labelKey: 'portfolio.filterFullstack' },
        { id: 'backend', labelKey: 'portfolio.filterBackend' },
        { id: 'uiux', labelKey: 'portfolio.filterUiUx' }
    ];

    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter(p => p.categories && p.categories.includes(selectedCategory));

    return (
        <PageLayout mainClassName="portafolio-page">
            <PageHero
                backLabel={t('portfolio.backHome')}
                title={t('portfolio.title')}
                subtitle={t('portfolio.subtitle')}
            />

            <div className="page-container">
                {/* Dynamic Interactive Filter Tabs */}
                <div className="portfolio-filter-tabs">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`portfolio-filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                        >
                            {t(cat.labelKey)}
                            {selectedCategory === cat.id && (
                                <motion.span
                                    layoutId="activePortfolioTabGlow"
                                    className="active-tab-glow"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                <motion.div layout className="projects-list">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                key={project.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                            >
                                <ProjectShowcaseCard project={project} index={index} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <GithubCTA />
            </div>
        </PageLayout>
    );
}
