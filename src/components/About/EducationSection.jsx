import { motion } from 'framer-motion';
import { useI18n } from '../../i18n/i18n';
import { educationEntries } from '../../data/about';

export default function EducationSection() {
    const { t } = useI18n();

    return (
        <div className="education-section">
            <h3 className="subsection-title">{t('about.education')}</h3>
            <div className="education-grid">
                {educationEntries.map((entry, index) => (
                    <motion.div
                        key={entry.titleKey}
                        className="education-card"
                        initial={{ opacity: 0, x: index === 0 ? -42 : 42, rotateY: index === 0 ? -10 : 10 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: true, margin: '-90px' }}
                        transition={{ duration: 0.72, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{ y: -6, rotateX: 2 }}
                    >
                        <motion.span
                            className="education-card-line"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.18 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                        />
                        <motion.div
                            className="edu-icon"
                            initial={{ opacity: 0, scale: 0.65, rotate: -16 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 0.2 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <img src={entry.icon} alt={t(entry.schoolKey)} className="edu-logo-img" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.28 + index * 0.12, ease: 'easeOut' }}
                        >
                            <motion.h4 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.32 + index * 0.12 }}>{t(entry.titleKey)}</motion.h4>
                            <motion.p className="edu-school" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.38 + index * 0.12 }}>{t(entry.schoolKey)}</motion.p>
                            <motion.p className="edu-desc" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.44 + index * 0.12 }}>{t(entry.descriptionKey)}</motion.p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
