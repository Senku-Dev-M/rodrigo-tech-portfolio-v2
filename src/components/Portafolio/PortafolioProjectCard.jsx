import { motion } from 'framer-motion';
import { ArrowUpRight, Link2 } from 'lucide-react';
import { pick, useI18n } from '../../i18n/i18n';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' }
    }),
};

export default function PortafolioProjectCard({ project, index }) {
    const { t, lang } = useI18n();

    const highlights = pick(project, 'highlights', lang) || [];
    const links = project.links || [];

    return (
        <motion.div
            className="project-detail-card"
            style={{ '--accent': project.accent }}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
        >
            <div className="project-detail-header">
                <div className="project-detail-meta">
                    <span className="project-detail-icon">{project.icon}</span>
                    <div>
                        <h2 className="project-detail-name">{project.name}</h2>
                        <div className="project-detail-badges">
                            <span className="badge-type" style={{ color: project.accent, borderColor: `${project.accent}40` }}>
                                {project.type}
                            </span>
                            <span className="badge-period">{pick(project, 'period', lang)}</span>
                        </div>
                    </div>
                </div>
            </div>

            <p className="project-detail-desc">{pick(project, 'desc', lang)}</p>

            <div className="project-highlights">
                <h3>{t('portfolio.highlights')}</h3>
                <ul>
                    {highlights.map((h, j) => (
                        <li key={j}>
                            <span className="highlight-dot" style={{ background: project.accent }} />
                            {h}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="project-tags">
                {project.tags.map(tag => (
                    <span key={tag} className="project-tag" style={{ borderColor: `${project.accent}35`, color: 'rgba(220,210,255,0.8)' }}>
                        {tag}
                    </span>
                ))}
            </div>

            {links.length > 0 && (
                <div className="project-links">
                    <span className="project-links__label">
                        <Link2 size={14} />
                        {t('portfolio.liveLinks')}
                    </span>

                    <div className="project-links__actions">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`project-link-btn ${link.tone === 'primary' ? 'project-link-btn--primary' : ''}`}
                                style={{ '--accent': project.accent }}
                            >
                                {pick(link, 'label', lang)}
                                <ArrowUpRight size={15} />
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </motion.div>
    );
}
