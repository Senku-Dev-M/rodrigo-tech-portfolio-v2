import { motion } from 'framer-motion';
import { useI18n } from '../../i18n/i18n';
import { skills, categoryColors } from '../../data/about';
import techIconMap from '../Icon/techIcons';
import TechSphere3D from '../TechSphere3D/TechSphere3D';

const fadeUp = {
    hidden: { opacity: 0, y: 28, scale: 0.82, rotate: -3 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: { delay: i * 0.035, duration: 0.58, ease: [0.22, 1, 0.36, 1] }
    }),
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
                                    className={`skill-chip skill-chip-${skill.category}`}
                                    style={{
                                        '--accent': categoryColors[skill.category],
                                        borderColor: `${categoryColors[skill.category]}40`,
                                    }}
                                    variants={fadeUp}
                                    initial="hidden"
                                    animate={skillsInView ? 'visible' : 'hidden'}
                                    custom={i * 0.4}
                                    whileHover={{
                                        scale: 1.08,
                                        y: -6,
                                        rotate: 1.5,
                                        borderColor: categoryColors[skill.category],
                                        boxShadow: `0 10px 24px ${categoryColors[skill.category]}24`
                                    }}
                                >
                                    <span className="skill-chip-spark" />
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
