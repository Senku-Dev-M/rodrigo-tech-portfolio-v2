import { motion } from 'framer-motion';
import { useI18n } from '../../i18n/i18n';

export default function EducationSection() {
    const { t } = useI18n();

    return (
        <div className="education-section">
            <h3 className="subsection-title">{t('about.education')}</h3>
            <div className="education-grid">
                <motion.div
                    className="education-card"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="edu-icon">🎓</div>
                    <div>
                        <h4>{t('about.edu1Title')}</h4>
                        <p className="edu-school">{t('about.edu1School')}</p>
                        <p className="edu-desc">{t('about.edu1Desc')}</p>
                    </div>
                </motion.div>
                <motion.div
                    className="education-card"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="edu-icon">🏭</div>
                    <div>
                        <h4>{t('about.edu2Title')}</h4>
                        <p className="edu-school">{t('about.edu2School')}</p>
                        <p className="edu-desc">{t('about.edu2Desc')}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
