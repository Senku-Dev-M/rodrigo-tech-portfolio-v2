import { motion } from 'framer-motion';
import GradientText from '../GradientText/GradientText';
import './Mentoring.css';

export default function Mentoring() {
    return (
        <section id="mentoring" className="mentoring">
            <div className="section-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <GradientText colors={['#10b981', '#38bdf8', '#7c5cfc', '#10b981']} animationSpeed={8}>
                        Mentorías
                    </GradientText>
                </motion.h2>

                <motion.div
                    className="mentoring-coming-soon"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <div className="coming-icon">🧑‍🏫</div>
                    <h3>Próximamente</h3>
                    <p>
                        Esta sección estará disponible pronto. Aquí compartiré información sobre mi trabajo
                        como mentor académico, cursos que imparto y recursos para estudiantes de software.
                    </p>
                    <div className="coming-tags">
                        <span>Programación I & II</span>
                        <span>Bases de Datos</span>
                        <span>Spring Boot</span>
                        <span>Clean Architecture</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
