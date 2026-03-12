import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' }
    }),
};

export default function PortafolioProjectCard({ project, index }) {
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
                            <span className="badge-period">{project.period}</span>
                        </div>
                    </div>
                </div>
            </div>

            <p className="project-detail-desc">{project.desc}</p>

            <div className="project-highlights">
                <h3>Aspectos destacados</h3>
                <ul>
                    {project.highlights.map((h, j) => (
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
        </motion.div>
    );
}
