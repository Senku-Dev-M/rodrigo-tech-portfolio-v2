import { motion } from 'framer-motion';
import Icon from '../Icon/Icon';

const certifications = [
    'Programación 1 – Jala University Mentor U (Ene. 2026)',
    'Computer Networks 1 – Jala University Mentor U (Oct. 2025)',
    'Programación 3 – Jala University Mentor U (Ago. 2025)',
    'Desarrollo de Software I – Jala University Mentor U (May. 2025)',
    'Base de Datos 2 – Jala University Mentor U (Abr. 2025)',
    'Programación 2 – Jala University Mentor U (Feb. 2025)',
];

export default function MentoringCertifications() {
    return (
        <section className="mentorias-section">
            <h2 className="section-heading">Certificados como Mentor</h2>
            <div className="cert-list">
                {certifications.map((cert, i) => (
                    <motion.div key={i} className="cert-row" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                        <span className="cert-check"><Icon name="check" size={14} color="#00d4ff" /></span>
                        <span>{cert}</span>
                    </motion.div>
                ))}
            </div>
            <div className="cta-row">
                <a href="https://drive.google.com/drive/folders/1ZjpmZptWPuFE_2xwMWTj7qRChAecPDzH" target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Ver certificados completos →
                </a>
            </div>
        </section>
    );
}
