import { motion } from 'framer-motion';
import { pick, useI18n } from '../../i18n/i18n';
import ProjectIcon from '../Icon/ProjectIcon';
import './MinimalProjectCard.css';

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' }
    })
};

export default function MinimalProjectCard({ project, index }) {
    const { lang } = useI18n();

    return (
        <motion.div
            className="minimal-project-card"
            style={{ '--accent': project.accent }}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            custom={index}
            whileHover={{ y: -4, borderColor: project.accent, boxShadow: `0 10px 30px ${project.accent}15` }}
        >
            <div className="minimal-card-header">
                <span className="minimal-card-icon" style={{ background: `${project.accent}15`, color: project.accent }}>
                    <ProjectIcon name={project.icon} size={20} />
                </span>
                <span className="minimal-card-type">{project.type}</span>
            </div>
            
            <h3 className="minimal-card-name">{project.name}</h3>
            
            <p className="minimal-card-impact">{pick(project, 'impact', lang)}</p>
            
            <div className="minimal-card-tags">
                {project.tags.slice(0, 4).map(t => (
                    <span key={t} className="minimal-card-tag">{t}</span>
                ))}
            </div>
        </motion.div>
    );
}
