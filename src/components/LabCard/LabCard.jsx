import { motion } from 'framer-motion';
import { getLabTypeColor, LAB_DIFFICULTY_COLORS, LAB_THEORY_TYPE } from '../../constants/labs';
import { useI18n } from '../../i18n/i18n';
import './LabCard.css';

export default function LabCard({ lab, onClick, index = 0 }) {
    const { t } = useI18n();
    const color = LAB_DIFFICULTY_COLORS[lab.difficulty] || '#00d4ff';
    const typeColor = getLabTypeColor(lab.type);

    return (
        <motion.div
            className="lab-card"
            style={{ '--accent': color }}
            onClick={() => onClick(lab)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -3 }}
        >
            <div className="lab-card__top">
                <span className="lab-card__type" style={{ color: typeColor }}>
                    {lab.type}
                </span>
                <span className="lab-card__difficulty" style={{ color }}>
                    {lab.difficulty}
                </span>
            </div>

            <h3 className="lab-card__title">{lab.title}</h3>
            <p className="lab-card__subtitle">{lab.subtitle}</p>

            <div className="lab-card__tags">
                {lab.tags.map((tag) => (
                    <span key={tag} className="lab-card__tag">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="lab-card__footer">
                <span className="lab-card__duration">⏱ {lab.duration}</span>
                <span className="lab-card__cta">
                    {lab.type === LAB_THEORY_TYPE ? t('lab.viewTheory') : t('lab.viewLab')}
                </span>
            </div>
        </motion.div>
    );
}
