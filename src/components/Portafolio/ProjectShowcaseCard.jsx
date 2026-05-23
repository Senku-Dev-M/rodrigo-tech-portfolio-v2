import { motion } from 'framer-motion';
import { ArrowUpRight, Layers3, Link2, ServerCog, Sparkles } from 'lucide-react';
import { pick, useI18n } from '../../i18n/i18n';

const reveal = {
    hidden: { opacity: 0, y: 34 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
};

function ProjectPreview({ project, lang }) {
    const preview = project.preview;

    if (preview?.type === 'image') {
        return (
            <div className="project-preview project-preview--image">
                <div className="project-window">
                    <div className="project-window__bar">
                        <span />
                        <span />
                        <span />
                        <strong>{pick(preview, 'caption', lang)}</strong>
                    </div>
                    <img src={preview.image} alt={pick(preview, 'alt', lang)} loading="lazy" />
                </div>
            </div>
        );
    }

    return (
        <div className="project-preview project-preview--architecture" aria-label={pick(preview, 'caption', lang)}>
            <div className="project-window project-window--diagram">
                <div className="project-window__bar">
                    <span />
                    <span />
                    <span />
                    <strong>{pick(preview, 'caption', lang)}</strong>
                </div>
                <div className="architecture-board">
                    <div className="architecture-board__core">
                        <ServerCog size={32} />
                        <strong>PixPro</strong>
                        <span>Image pipeline</span>
                    </div>
                    <div className="architecture-board__nodes">
                        {(preview?.nodes || project.tags.slice(0, 6)).map((node, index) => (
                            <span key={node} style={{ '--node-delay': `${index * 80}ms` }}>
                                {node}
                            </span>
                        ))}
                    </div>
                    <div className="architecture-board__flow">
                        <span>Upload</span>
                        <i />
                        <span>Optimize</span>
                        <i />
                        <span>Deliver</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ProjectShowcaseCard({ project, index }) {
    const { t, lang } = useI18n();
    const highlights = pick(project, 'highlights', lang) || [];
    const links = project.links || [];
    const isReversed = index % 2 === 1;

    return (
        <motion.article
            className={`project-showcase ${isReversed ? 'project-showcase--reverse' : ''}`}
            style={{ '--accent': project.accent }}
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            custom={index}
        >
            <div className="project-showcase__content">
                <div className="project-showcase__topline">
                    <span className="project-showcase__icon">{project.icon}</span>
                    <span className="project-showcase__type">{project.type}</span>
                    <span className="project-showcase__period">{pick(project, 'period', lang)}</span>
                </div>

                <h2>{project.name}</h2>

                <p className="project-showcase__impact">
                    <Sparkles size={16} />
                    {pick(project, 'impact', lang)}
                </p>

                <p className="project-showcase__desc">{pick(project, 'desc', lang)}</p>

                <div className="project-showcase__highlights">
                    <span>
                        <Layers3 size={15} />
                        {t('portfolio.highlights')}
                    </span>
                    <ul>
                        {highlights.slice(0, 4).map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                        ))}
                    </ul>
                </div>

                <div className="project-showcase__tags">
                    {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>

                {links.length > 0 && (
                    <div className="project-showcase__links" aria-label={t('portfolio.liveLinks')}>
                        <span>
                            <Link2 size={14} />
                            {t('portfolio.liveLinks')}
                        </span>
                        {links.map((link) => (
                            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                                {pick(link, 'label', lang)}
                                <ArrowUpRight size={16} />
                            </a>
                        ))}
                    </div>
                )}
            </div>

            <ProjectPreview project={project} lang={lang} />
        </motion.article>
    );
}
