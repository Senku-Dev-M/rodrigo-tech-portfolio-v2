import { motion } from 'framer-motion';
import Icon from '../Icon/Icon';
import './SubjectCard.css';

export default function SubjectCard({ subject, onClick }) {
    return (
        <motion.div
            className="subject-card"
            style={{ '--accent': subject.color }}
            onClick={() => onClick(subject)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
        >
            <div className="subject-card__header">
                <Icon name={subject.icon} size={28} color={subject.color} />
                <span className="subject-card__code">{subject.code}</span>
            </div>

            <h3 className="subject-card__title">{subject.title}</h3>
            <p className="subject-card__desc">{subject.description}</p>

            <div className="subject-card__topics">
                {subject.topics.map(t => (
                    <span key={t} className="subject-card__topic">{t}</span>
                ))}
            </div>

            <div className="subject-card__footer">
                <span className="subject-card__labs">{subject.labs.length} laboratorio{subject.labs.length !== 1 ? 's' : ''}</span>
                <span className="subject-card__arrow">→</span>
            </div>
        </motion.div>
    );
}
