import { motion } from 'framer-motion';
import { pick, useI18n } from '../../i18n/i18n';
import ProjectIcon from '../Icon/ProjectIcon';
import './MinimalProjectCard.css';

const fadeUp = {
    hidden: { opacity: 0, y: 34, scale: 0.94, rotateX: -8 },
    visible: (i = 0) => ({
        opacity: 1, y: 0, scale: 1, rotateX: 0,
        transition: { delay: i * 0.11, duration: 0.65, ease: [0.22, 1, 0.36, 1] }
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
            whileHover={{
                y: -8,
                rotateY: index % 2 === 0 ? 2 : -2,
                borderColor: project.accent,
                boxShadow: `0 18px 46px ${project.accent}20`
            }}
        >
            <span className="minimal-card-glow" />
            <motion.span
                className="minimal-card-build-line"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: 0.14 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="minimal-card-header">
                <motion.span
                    className="minimal-card-icon"
                    style={{ background: `${project.accent}15`, color: project.accent }}
                    initial={{ opacity: 0, scale: 0.55, rotate: -18 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <ProjectIcon name={project.icon} size={20} />
                </motion.span>
                <motion.span className="minimal-card-type" initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.24 + index * 0.1 }}>{project.type}</motion.span>
            </div>
            
            <motion.h3 className="minimal-card-name" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + index * 0.1 }}>{project.name}</motion.h3>
            
            <motion.p className="minimal-card-impact" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.36 + index * 0.1 }}>{pick(project, 'impact', lang)}</motion.p>
            
            <div className="minimal-card-tags">
                {project.tags.slice(0, 4).map((t, tagIndex) => (
                    <motion.span
                        key={t}
                        className="minimal-card-tag"
                        initial={{ opacity: 0, y: 10, scale: 0.86 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.42 + index * 0.1 + tagIndex * 0.04 }}
                    >
                        {t}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
}
