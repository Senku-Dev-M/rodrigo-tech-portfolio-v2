import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { EXTERNAL_LINKS } from '../../constants/externalLinks';
import { certificationEntries } from '../../data/about';
import { useI18n } from '../../i18n/i18n';

export default function CertificationsSection() {
    const { t } = useI18n();

    return (
        <div className="certs-section">
            <h3 className="subsection-title">{t('about.certifications')}</h3>
            <div className="certs-grid">
                {certificationEntries.map((certification, index) => (
                    <motion.div
                        key={`${certification.name}-${certification.years}`}
                        className="cert-card"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.07 }}
                        whileHover={{ y: -4 }}
                    >
                        <span className="cert-icon">
                            <Award size={18} />
                        </span>
                        <div>
                            <p className="cert-name">{certification.name}</p>
                            <p className="cert-meta">
                                {certification.issuer} · {certification.years}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="certs-link-row">
                <a
                    href={EXTERNAL_LINKS.certifications}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                >
                    {t('about.viewAllCerts')}
                </a>
            </div>
        </div>
    );
}
