import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, Compass, Trophy } from 'lucide-react';
import ArduinoLabView from '../ArduinoLabView/ArduinoLabView';
import GuideView from '../GuideView/GuideView';
import PacketTracerLabView from '../PacketTracerLabView/PacketTracerLabView';
import TheoryView from '../TheoryView/TheoryView';
import ContentQualityBadge from './ContentQualityBadge';
import LessonProgress from './LessonProgress';
import { getAdjacentLessons, getLessonSections } from '../../utils/mentoringCourse';
import './CourseExperience.css';

function renderLessonEngine(lesson) {
    if (lesson.isArduinoLab) return <ArduinoLabView lab={lesson} showHeader={false} />;
    if (lesson.isPacketTracerLab) return <PacketTracerLabView lab={lesson} showHeader={false} />;
    if (lesson.content) return <TheoryView lab={lesson} showHeader={false} showSidebar={false} />;
    return <GuideView lab={lesson} showHeader={false} showSidebar={false} />;
}

export default function LessonPlayer({ course, lesson, progressApi }) {
    const { getLessonStatus, getSubjectProgress, markViewed, toggleCompleted } = progressApi;
    const status = getLessonStatus(course.id, lesson.id);
    const courseProgress = getSubjectProgress(course);
    const adjacent = getAdjacentLessons(course, lesson.id);
    const sections = getLessonSections(lesson);

    useEffect(() => {
        markViewed(course.id, lesson.id);
    }, [course.id, lesson.id, markViewed]);

    const navigateTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <article
            className="lesson-player"
            style={{ '--course-accent': course.accent, '--course-accent-2': course.accent2 }}
        >
            <header className="lesson-player__header">
                <Link className="lesson-player__back" to={`/mentorias/${course.id}`}>
                    <ArrowLeft size={16} /> Volver al curso
                </Link>
                <div className="lesson-player__titlebar">
                    <div>
                        <span className="lesson-player__eyebrow">
                            Paso {lesson.order} · {lesson.module.title} · {lesson.type}
                        </span>
                        <h1>{lesson.title}</h1>
                        <p>{lesson.subtitle}</p>
                    </div>
                    <button
                        type="button"
                        className={`lesson-complete ${status.completed ? 'lesson-complete--done' : ''}`}
                        onClick={() => toggleCompleted(course.id, lesson.id)}
                    >
                        {status.completed ? <CheckCircle2 size={18} /> : <Circle size={18} />}
                        {status.completed ? 'Completada' : 'Marcar completada'}
                    </button>
                </div>

                <div className="lesson-player__meta">
                    <span>{lesson.difficulty}</span>
                    <span>{lesson.duration}</span>
                    <ContentQualityBadge quality={lesson.quality} />
                </div>
            </header>

            <div className="lesson-player__layout">
                <aside className="lesson-player__sidebar">
                    <div className="lesson-side-panel">
                        <LessonProgress
                            completed={courseProgress.completedCount}
                            total={course.stats.lessons}
                            label="Progreso del curso"
                        />
                    </div>

                    <nav className="lesson-side-panel lesson-outline" aria-label="Índice de la lección">
                        <span className="lesson-side-panel__label"><Compass size={15} /> Índice</span>
                        {sections.map((section) => (
                            <button key={section.id} type="button" onClick={() => navigateTo(section.id)}>
                                {section.label}
                            </button>
                        ))}
                    </nav>
                </aside>

                <div className="lesson-player__main">
                    <section id="lesson-content" className="lesson-engine">
                        {renderLessonEngine(lesson)}
                    </section>

                    <footer id="lesson-finish" className="lesson-player__footer">
                        <div>
                            <span><Trophy size={16} /> Cierre</span>
                            <p>Marca la lección como completada cuando puedas explicar el concepto y producir la evidencia mínima.</p>
                        </div>
                        <div className="lesson-player__nav">
                            {adjacent.previous && (
                                <Link to={`/mentorias/${course.id}/${adjacent.previous.id}`}>
                                    <ArrowLeft size={15} /> Anterior
                                </Link>
                            )}
                            {adjacent.next && (
                                <Link to={`/mentorias/${course.id}/${adjacent.next.id}`}>
                                    Siguiente <ArrowRight size={15} />
                                </Link>
                            )}
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
}
