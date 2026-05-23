import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle2, Clock3, MonitorPlay, RotateCcw, Sparkles, Target } from 'lucide-react';
import Icon from '../Icon/Icon';
import LessonProgress from './LessonProgress';
import './CourseExperience.css';

export default function CourseDashboard({ course, progress, lastLesson, onReset }) {
    const completed = progress?.completedCount || 0;
    const viewed = progress?.viewedCount || 0;
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

            <div className="course-dashboard__grid">
                <div className="course-dashboard__panel course-dashboard__panel--progress">
                    <LessonProgress completed={completed} total={total} label="Lecciones completadas" />
                    <div className="course-dashboard__mini-stats">
                        <span><CheckCircle2 size={15} /> {completed} completadas</span>
                        <span><Sparkles size={15} /> {viewed} vistas</span>
                    </div>
                </div>

                <div className="course-dashboard__panel">
                    <span className="course-dashboard__label"><Target size={15} /> Resultado visible</span>
                    <p>{course.learningPath?.outcomes?.[0] || course.description}</p>
                </div>

                <div className="course-dashboard__panel">
                    <span className="course-dashboard__label"><Clock3 size={15} /> Carga estimada</span>
                    <p>{course.stats.duration}</p>
                </div>

                <div className="course-dashboard__panel">
                    <span className="course-dashboard__label"><BookOpen size={15} /> Formato</span>
                    <p>{course.stats.theory} teorías, {course.stats.labs} laboratorios, {course.stats.simulations} simulaciones.</p>
                </div>
            </div>
        </section>
    );
}
