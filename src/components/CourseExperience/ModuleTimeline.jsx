import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle2, Circle, Code2, FlaskConical, MonitorPlay } from 'lucide-react';
import ContentQualityBadge from './ContentQualityBadge';
import './CourseExperience.css';

function getLessonIcon(lesson) {
    if (lesson.hasInteractiveCode) return Code2;
    if (lesson.hasSimulation) return MonitorPlay;
    if (lesson.type !== 'Teoría') return FlaskConical;
    return BookOpen;
}

export default function ModuleTimeline({ course, lessons, progressApi }) {
    const visibleIds = new Set(lessons.map((lesson) => lesson.id));
    const modules = course.modules
        .map((module) => ({
            ...module,
            lessons: module.lessons.filter((lesson) => visibleIds.has(lesson.id)),
        }))
        .filter((module) => module.lessons.length > 0);

    if (!modules.length) {
        return (
            <div className="module-empty">
                <strong>Sin resultados</strong>
                <span>Prueba con otro término, tipo o nivel.</span>
            </div>
        );
    }

    return (
        <div className="module-timeline">
            {modules.map((module) => (
                <section key={module.id} className="module-block">
                    <div className="module-block__header">
                        <span className="module-block__index">{String(module.index + 1).padStart(2, '0')}</span>
                        <div>
                            <h2>{module.title}</h2>
                            <p>{module.desc}</p>
                        </div>
                    </div>

                    <div className="module-block__lessons">
                        {module.lessons.map((lesson) => {
                            const status = progressApi.getLessonStatus(course.id, lesson.id);
                            const LessonIcon = getLessonIcon(lesson);

                            return (
                                <Link
                                    key={lesson.id}
                                    className={`lesson-row ${status.completed ? 'lesson-row--completed' : ''}`}
                                    to={`/mentorias/${course.id}/${lesson.id}`}
                                >
                                    <span className="lesson-row__status">
                                        {status.completed ? <CheckCircle2 size={18} /> : <Circle size={18} />}
                                    </span>
                                    <span className="lesson-row__icon">
                                        <LessonIcon size={18} />
                                    </span>
                                    <span className="lesson-row__main">
                                        <span className="lesson-row__meta">Paso {lesson.order} · {lesson.type} · {lesson.difficulty}</span>
                                        <strong>{lesson.title}</strong>
                                        <span>{lesson.subtitle}</span>
                                    </span>
                                    <span className="lesson-row__extras">
                                        <ContentQualityBadge quality={lesson.quality} />
                                        <span>{lesson.duration}</span>
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </section>
            ))}
        </div>
    );
}
