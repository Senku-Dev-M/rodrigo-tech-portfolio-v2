import { motion } from 'framer-motion';
import { useI18n } from '../../i18n/i18n';
import { pick } from '../../i18n/i18n';
import { experiences } from '../../data/about';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6, ease: 'easeOut' } }),
};

export default function ExperienceSection({ expRef, expInView }) {
    const { t, lang } = useI18n();

    return (
        <div ref={expRef} className="experience-section">
            <h3 className="subsection-title">{t('about.experience')}</h3>
            <div className="timeline">
                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        className="timeline-item"
                        variants={fadeUp}
                        initial="hidden"
                        animate={expInView ? 'visible' : 'hidden'}
                        custom={i}
                    >
                        <div className="timeline-dot" style={{ background: exp.accent, boxShadow: `0 0 12px ${exp.accent}60` }} />
                        <div className="timeline-card">
                            <span className="timeline-period">{pick(exp, 'period', lang)}</span>
                            <h4 className="timeline-role">{pick(exp, 'role', lang)}</h4>
                            <span className="timeline-company" style={{ color: exp.accent }}>{exp.company}</span>
                            <p className="timeline-desc">{pick(exp, 'desc', lang)}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
