import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Users, Code2, ArrowRight } from 'lucide-react';
import { useI18n } from '../../i18n/i18n';
import { MENTORING_ROUTE } from '../../constants/routes';
import './MentoringTeaser.css';

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function MentoringTeaser() {
    const { t } = useI18n();
    const navigate = useNavigate();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    const stats = [
        { icon: <BookOpen size={20} aria-hidden="true" />, value: t('mentoringTeaser.stat1Value'), label: t('mentoringTeaser.stat1Label') },
        { icon: <Users size={20} aria-hidden="true" />, value: t('mentoringTeaser.stat2Value'), label: t('mentoringTeaser.stat2Label') },
        { icon: <Code2 size={20} aria-hidden="true" />, value: t('mentoringTeaser.stat3Value'), label: t('mentoringTeaser.stat3Label') },
    ];

    return (
        <section className="mentoring-teaser" aria-labelledby="mentoring-teaser-heading">
            <div className="mentoring-teaser-container" ref={ref}>
                <motion.div
                    className="teaser-content"
                    variants={container}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.span variants={item} className="teaser-tag">
                        {t('mentoringTeaser.tag')}
                    </motion.span>

                    <motion.h2 variants={item} id="mentoring-teaser-heading" className="teaser-title">
                        {t('mentoringTeaser.title')}
                    </motion.h2>

                    <motion.p variants={item} className="teaser-desc">
                        {t('mentoringTeaser.desc')}
                    </motion.p>

                    <motion.div variants={item} className="teaser-stats">
                        {stats.map((s, i) => (
                            <div key={i} className="teaser-stat">
                                <span className="teaser-stat-icon">{s.icon}</span>
                                <span className="teaser-stat-value">{s.value}</span>
                                <span className="teaser-stat-label">{s.label}</span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div variants={item}>
                        <button
                            className="btn-teaser-cta"
                            onClick={() => navigate(MENTORING_ROUTE)}
                        >
                            {t('mentoringTeaser.cta')}
                            <ArrowRight size={16} aria-hidden="true" />
                        </button>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="teaser-visual"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    aria-hidden="true"
                >
                    <div className="teaser-code-card">
                        <div className="code-card-header">
                            <span className="dot dot--red" />
                            <span className="dot dot--yellow" />
                            <span className="dot dot--green" />
                            <span className="code-card-title">Mentoring.java</span>
                        </div>
                        <pre className="code-card-body"><code>{`// Clean Architecture
@Service
public class MentorService {

  public void guide(Student s) {
    s.reviewCode();
    s.learnPatterns();
    s.buildConfidence();
  }
}`}</code></pre>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
