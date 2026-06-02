import { motion } from 'framer-motion';
import { pick, useI18n } from '../../i18n/i18n';
import { experiences } from '../../data/about';

const fadeUp = {
    hidden: { opacity: 0, y: 44, scale: 0.96 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { delay: i * 0.1, duration: 0.72, ease: [0.22, 1, 0.36, 1] }
    }),
};

const cardParts = {
    hidden: { opacity: 0, x: -18 },
    visible: (i = 0) => ({
        opacity: 1,
        x: 0,
        transition: { delay: 0.2 + i * 0.08, duration: 0.48, ease: [0.22, 1, 0.36, 1] }
    })
};

export default function ExperienceSection({ expRef, expInView }) {
    const { t, lang } = useI18n();

    return (
        <div ref={expRef} className="experience-section">
            <h3 className="subsection-title">{t('about.experience')}</h3>
            <div className="timeline">
                <motion.div
                    className="timeline-energy"
                    initial={{ scaleY: 0 }}
                    animate={expInView ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                />
                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        className="timeline-item"
                        variants={fadeUp}
                        initial="hidden"
                        animate={expInView ? 'visible' : 'hidden'}
                        custom={i}
                    >
                        <motion.div
                            className="timeline-dot"
                            style={{ background: exp.accent, boxShadow: `0 0 12px ${exp.accent}60` }}
                            animate={expInView ? { scale: [0.8, 1.35, 1], opacity: [0.4, 1, 0.9] } : {}}
                            transition={{ delay: 0.12 + i * 0.12, duration: 0.7, ease: 'easeOut' }}
                        />
                        <motion.div
                            className="timeline-card"
                            whileHover={{ x: 8, rotateY: -2 }}
                        >
                            <motion.span className="timeline-card-beam" initial={{ scaleX: 0 }} animate={expInView ? { scaleX: 1 } : { scaleX: 0 }} transition={{ delay: 0.18 + i * 0.11, duration: 0.62, ease: [0.22, 1, 0.36, 1] }} />
                            <motion.span className="timeline-period" variants={cardParts} custom={0}>{pick(exp, 'period', lang)}</motion.span>
                            <motion.h4 className="timeline-role" variants={cardParts} custom={1}>{pick(exp, 'role', lang)}</motion.h4>
                            <motion.span className="timeline-company" style={{ color: exp.accent }} variants={cardParts} custom={2}>{exp.company}</motion.span>
                            <motion.p className="timeline-desc" variants={cardParts} custom={3}>{pick(exp, 'desc', lang)}</motion.p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
