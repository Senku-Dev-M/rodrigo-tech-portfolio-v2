import { motion } from 'framer-motion';
import { EXTERNAL_LINKS } from '../../constants/externalLinks';
import { MENTORING_CERTIFICATIONS } from '../../data/mentoringMeta';
import { useI18n } from '../../i18n/i18n';
import Icon from '../Icon/Icon';

export default function MentoringCertifications() {
    const { t } = useI18n();

    return (
        <section className="mentorias-section">
            <h2 className="section-heading">{t('mentoring.certsTitle')}</h2>
            <div className="cert-list">
                {MENTORING_CERTIFICATIONS.map((certification, index) => (
                    <motion.div
                        key={certification}
                        className="cert-row"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.06 }}
                    >
                        <span className="cert-check">
                            <Icon name="check" size={14} color="#FF5A1F" />
                        </span>
                        <span>{certification}</span>
                    </motion.div>
                ))}
            </div>
            <div className="cta-row">
                <a
                    href={EXTERNAL_LINKS.certifications}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                >
                    {t('mentoring.certsViewAll')}
                </a>
            </div>
        </section>
    );
}
