import { Link } from 'react-router-dom';
import { ArrowRight, RotateCcw } from 'lucide-react';
import Icon from '../Icon/Icon';
import LessonProgress from './LessonProgress';
import './CourseExperience.css';

export default function CourseDashboard({ course, progress, lastLesson, onReset }) {
    const completed = progress?.completedCount || 0;
    const total = course.stats.lessons;
    const firstLesson = course.lessons[0];
    const continueLesson = lastLesson || firstLesson;

    return (
        <section
            className="course-dashboard"
            style={{ '--course-accent': course.accent, '--course-accent-2': course.accent2 }}
        >
            <div className="course-dashboard__hero">
                <div className="course-dashboard__identity">
                    <span className="course-dashboard__icon">
                        <Icon name={course.icon} size={34} />
                    </span>
                    <div>
                        <span className="course-dashboard__eyebrow">{course.code} · {course.audience}</span>
                        <h1>{course.title}</h1>
                        <p>{course.promise}</p>
                        <div className="course-dashboard__progress">
                            <LessonProgress
                                completed={completed}
                                total={total}
                                label={`${completed} de ${total} lecciones completadas`}
                                compact
                            />
                        </div>
                    </div>
                </div>

                <div className="course-dashboard__actions">
                    {continueLesson && (
                        <Link className="course-action course-action--primary" to={`/mentorias/${course.id}/${continueLesson.id}`}>
                            {progress?.lastLessonId ? 'Continuar' : 'Empezar'} <ArrowRight size={16} />
                        </Link>
                    )}
                    <button type="button" className="course-action course-action--ghost" onClick={onReset}>
                        <RotateCcw size={15} /> Reiniciar
                    </button>
                </div>
            </div>

        </section>
    );
}
