import { motion } from 'framer-motion';
import { useI18n } from '../../i18n/i18n';
import { skills, categoryColors } from '../../data/about';
import techIconMap from '../Icon/techIcons';
import TechSphere3D from '../TechSphere3D/TechSphere3D';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.04, duration: 0.5, ease: 'easeOut' } }),
};

export default function SkillsSection({ skillsRef, skillsInView }) {
    const { t } = useI18n();

    return (
        <div ref={skillsRef} className="skills-section">
            <h3 className="subsection-title">{t('about.skills')}</h3>
            
            <div className="skills-layout-grid">
                {/* Left column: Static/Interactive Chips */}
                <div className="skills-left-col">
                    <div className="skills-grid">
                        {skills.map((skill, i) => {
                            const TechSvg = techIconMap[skill.name];
                            return (
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
                                    custom={i * 0.4}
                                    whileHover={{ scale: 1.05, borderColor: categoryColors[skill.category] }}
                                >
                                    {TechSvg && <TechSvg size={14} />}
                                    {skill.name}
                                </motion.div>
                            );
                        })}
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

                {/* Right column: 3D Tag Sphere Canvas */}
                <div className="skills-right-col">
                    <TechSphere3D radius={8.8} speed={0.25} />
                </div>
            </div>
        </div>
    );
}
