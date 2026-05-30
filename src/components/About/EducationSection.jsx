import { motion } from 'framer-motion';
import { useI18n } from '../../i18n/i18n';
import { educationEntries } from '../../data/about';
import ProjectIcon from '../Icon/ProjectIcon';

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
                        initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="edu-icon">
                            <ProjectIcon name={entry.icon} size={22} />
                        </div>
                        <div>
                            <h4>{t(entry.titleKey)}</h4>
                            <p className="edu-school">{t(entry.schoolKey)}</p>
                            <p className="edu-desc">{t(entry.descriptionKey)}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
