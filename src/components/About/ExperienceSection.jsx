import { motion } from 'framer-motion';
import { experiences } from '../../data/about';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6, ease: 'easeOut' } }),
};

export default function ExperienceSection({ expRef, expInView }) {
    return (
        <div ref={expRef} className="experience-section">
            <h3 className="subsection-title">Experiencia Laboral</h3>
            <div className="timeline">
                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        className="timeline-item"
                        variants={fadeUp}
                        initial="hidden"
                        animate={expInView ? 'visible' : 'hidden'}
                        custom={i}
                    >
                        <div className="timeline-dot" style={{ background: exp.accent, boxShadow: `0 0 12px ${exp.accent}60` }} />
                        <div className="timeline-card">
                            <span className="timeline-period">{exp.period}</span>
                            <h4 className="timeline-role">{exp.role}</h4>
                            <span className="timeline-company" style={{ color: exp.accent }}>{exp.company}</span>
                            <p className="timeline-desc">{exp.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
