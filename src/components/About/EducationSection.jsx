import { motion } from 'framer-motion';

export default function EducationSection() {
    return (
        <div className="education-section">
            <h3 className="subsection-title">Formación</h3>
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
                        <h4>Ingeniería en Software Comercial</h4>
                        <p className="edu-school">Jala University · 2023 – Actualidad</p>
                        <p className="edu-desc">Formación intensiva Full Stack & QA Automation. Estudiante Destacado 3 semestres consecutivos.</p>
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
                        <h4>Técnico Superior en Informática Industrial</h4>
                        <p className="edu-school">Escuela Industrial Superior Pedro Domingo Murillo · 2020 – 2024</p>
                        <p className="edu-desc">Formación técnica en informática industrial, programación y sistemas computacionales.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
