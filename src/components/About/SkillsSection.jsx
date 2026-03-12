import { motion } from 'framer-motion';
import { useI18n } from '../../i18n/i18n';
import { skills, categoryColors } from '../../data/about';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6, ease: 'easeOut' } }),
};

export default function SkillsSection({ skillsRef, skillsInView }) {
    const { t } = useI18n();

    return (
        <div ref={skillsRef} className="skills-section">
            <h3 className="subsection-title">{t('about.skills')}</h3>
            <div className="skills-grid">
                {skills.map((skill, i) => (
                    <motion.div
                        key={skill.name}
                        className="skill-chip"
                        style={{
                            '--accent': categoryColors[skill.category],
                            borderColor: `${categoryColors[skill.category]}40`,
                        }}
                        variants={fadeUp}
                        initial="hidden"
                        animate={skillsInView ? 'visible' : 'hidden'}
                        custom={i * 0.5}
                        whileHover={{ scale: 1.06, borderColor: categoryColors[skill.category] }}
                    >
                        {skill.name}
                    </motion.div>
                ))}
            </div>
            <div className="skills-legend">
                {Object.entries(categoryColors).map(([cat, color]) => (
                    <span key={cat} className="legend-item">
                        <span className="legend-dot" style={{ background: color }} />
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </span>
                ))}
            </div>
        </div>
    );
}
