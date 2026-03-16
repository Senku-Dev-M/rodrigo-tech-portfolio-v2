import { useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ArduinoLabView from '../components/ArduinoLabView/ArduinoLabView';
import GuideView from '../components/GuideView/GuideView';
import Icon from '../components/Icon/Icon';
import LabCard from '../components/LabCard/LabCard';
import LabsToolbar from '../components/LabsToolbar/LabsToolbar';
import Breadcrumb from '../components/Mentorias/Breadcrumb';
import MentoringApproach from '../components/Mentorias/MentoringApproach';
import MentoringCertifications from '../components/Mentorias/MentoringCertifications';
import MentoringStats from '../components/Mentorias/MentoringStats';
import PacketTracerLabView from '../components/PacketTracerLabView/PacketTracerLabView';
import PageHero from '../components/PageShell/PageHero';
import PageLayout from '../components/PageShell/PageLayout';
import SubjectCard from '../components/SubjectCard/SubjectCard';
import TheoryView from '../components/TheoryView/TheoryView';
import { MENTORING_VIEWS } from '../constants/mentoring';
import { subjects } from '../data/mentoring';
import useMentoringPageState from '../hooks/useMentoringPageState';
import { useI18n } from '../i18n/i18n';
import './MentoriasPage.css';

const slideVariants = {
    initial: { opacity: 0, x: 32 },
    animate: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
};

function LabsEmptyState({ t }) {
    return (
        <motion.div
            className="labs-empty"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <span className="labs-empty__icon">{'🔍'}</span>
            <p className="labs-empty__title">{t('mentoring.emptyTitle')}</p>
            <p className="labs-empty__desc">
                {t('mentoring.emptyDesc')}
                <br />
                {t('mentoring.emptyHint')}
            </p>
        </motion.div>
    );
}

function SubjectDetailHeader({ subject, t }) {
    return (
        <div className="subject-detail-header">
            <div className="subject-detail-icon">
                <Icon name={subject.icon} size={30} color={subject.color} />
            </div>
            <div>
                <span className="subject-detail-code">{subject.code}</span>
                <h2 className="subject-detail-title">{subject.title}</h2>
                <p className="subject-detail-desc">{subject.description}</p>
                <div className="subject-detail-meta">
                    <span className="subject-detail-count">
                        {subject.labs.length}{' '}
                        {subject.labs.length !== 1 ? t('subjectCard.labs') : t('subjectCard.lab')}
                    </span>
                </div>
                <div className="subject-detail-topics">
                    {subject.topics.map((topic) => (
                        <span key={topic} className="subject-detail-topic">
                            {topic}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

function LabContent({ lab }) {
    if (lab.isArduinoLab) {
        return <ArduinoLabView lab={lab} />;
    }

    if (lab.isPacketTracerLab) {
        return <PacketTracerLabView lab={lab} />;
    }

    if (lab.content) {
        return <TheoryView lab={lab} />;
    }

    return <GuideView lab={lab} />;
}

export default function MentoriasPage() {
    const { t } = useI18n();
    const { filteredLabs, lab, navigate, setFilteredLabs, subject, view } = useMentoringPageState();
    const handleFilterChange = useCallback((result) => setFilteredLabs(result), [setFilteredLabs]);

    return (
        <PageLayout mainClassName="mentorias-page">
            <PageHero
                backLabel={t('mentoring.backHome')}
                title={t('mentoring.title')}
                subtitle={t('mentoring.subtitle')}
                subtitleIsHtml
            />

            <div className="page-container">
                {view !== MENTORING_VIEWS.subjects && (
                    <Breadcrumb
                        view={view}
                        subject={subject}
                        lab={lab}
                        onNavigate={(nextView) => navigate(nextView)}
                    />
                )}

                <AnimatePresence mode="wait">
                    {view === MENTORING_VIEWS.subjects && (
                        <motion.div key="subjects" variants={slideVariants} initial="initial" animate="animate" exit="exit">
                            <MentoringStats />

                            <section className="mentorias-section">
                                <h2 className="section-heading">{t('mentoring.subjects')}</h2>
                                <div className="subjects-grid">
                                    {subjects.map((currentSubject) => (
                                        <SubjectCard
                                            key={currentSubject.id}
                                            subject={currentSubject}
                                            onClick={(selectedSubject) => navigate(MENTORING_VIEWS.labs, selectedSubject)}
                                        />
                                    ))}
                                </div>
                            </section>

                            <MentoringApproach />
                            <MentoringCertifications />
                        </motion.div>
                    )}

                    {view === MENTORING_VIEWS.labs && subject && (
                        <motion.div key="labs" variants={slideVariants} initial="initial" animate="animate" exit="exit">
                            <SubjectDetailHeader subject={subject} t={t} />

                            <section className="mentorias-section">
                                <h3 className="section-heading">{t('mentoring.labs')}</h3>

                                <LabsToolbar labs={subject.labs} onChange={handleFilterChange} />

                                {filteredLabs.length > 0 ? (
                                    <div className="labs-grid">
                                        {filteredLabs.map((currentLab, index) => (
                                            <LabCard
                                                key={currentLab.id}
                                                lab={currentLab}
                                                index={index}
                                                onClick={(selectedLab) => navigate(MENTORING_VIEWS.guide, subject, selectedLab)}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <LabsEmptyState t={t} />
                                )}
                            </section>
                        </motion.div>
                    )}

                    {view === MENTORING_VIEWS.guide && lab && (
                        <motion.div key="guide" variants={slideVariants} initial="initial" animate="animate" exit="exit">
                            <LabContent lab={lab} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </PageLayout>
    );
}
