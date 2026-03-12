import { motion } from 'framer-motion';
import { useI18n } from '../../i18n/i18n';

export default function CertificationsSection() {
    const { t } = useI18n();

    const certifications = [
        { name: "Dean's List Recognition", issuer: 'Jala University', years: '2024 – 2025' },
        { name: 'Programación 1 & 2 – Mentor U', issuer: 'Jala University', years: '2025' },
        { name: 'Curso Profesional de Java', issuer: 'Código Facilito', years: '2023' },
        { name: 'Java Spring Boot + JPA', issuer: 'Platzi', years: '2023' },
        { name: 'Patrones de Diseño con Java', issuer: 'Código Facilito', years: '2023' },
        { name: 'Python Essentials 1', issuer: 'Cisco Networking Academy', years: '2023' },
    ];

    return (
        <div className="certs-section">
            <h3 className="subsection-title">{t('about.certifications')}</h3>
            <div className="certs-grid">
                {certifications.map((cert, i) => (
                    <motion.div
                        key={i}
                        className="cert-card"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 }}
                        whileHover={{ y: -4 }}
                    >
                        <span className="cert-icon">🏆</span>
                        <div>
                            <p className="cert-name">{cert.name}</p>
                            <p className="cert-meta">{cert.issuer} · {cert.years}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="certs-link-row">
                <a
                    href="https://drive.google.com/drive/folders/1ZjpmZptWPuFE_2xwMWTj7qRChAecPDzH"
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
