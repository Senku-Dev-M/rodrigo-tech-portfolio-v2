import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle2, Clock3, FlaskConical, MonitorPlay, Target } from 'lucide-react';
import Icon from '../Icon/Icon';
import LessonProgress from './LessonProgress';
import './CourseExperience.css';

export default function CourseCard({ course, progress }) {
    const completed = progress?.completedCount || 0;
    const total = course.stats.lessons;

    return (
        <Link
            className="course-card"
            to={`/mentorias/${course.id}`}
            style={{ '--course-accent': course.accent, '--course-accent-2': course.accent2 }}
            aria-label={`Abrir curso ${course.title}`}
        >
            <div className="course-card__top">
                <span className="course-card__icon">
                    <Icon name={course.icon} size={28} />
                </span>
                <span className="course-card__code">{course.code}</span>
            </div>

            <div className="course-card__body">
                <span className="course-card__audience">{course.audience}</span>
                <h3>{course.title}</h3>
                <p>{course.promise}</p>
            </div>

            <div className="course-card__outcome">
                <Target size={16} />
                <span>{course.learningPath?.outcomes?.[0] || course.description}</span>
            </div>

            <div className="course-card__metrics">
                <span><BookOpen size={15} /> {course.stats.lessons} lecciones</span>
                <span><MonitorPlay size={15} /> {course.stats.simulations} simulaciones</span>
                <span><FlaskConical size={15} /> {course.stats.labs} labs</span>
                <span><Clock3 size={15} /> {course.stats.duration}</span>
            </div>

            <LessonProgress completed={completed} total={total} label={`${completed}/${total} completadas`} compact />

            <div className="course-card__footer">
                <span className="course-card__level"><CheckCircle2 size={14} /> {course.level}</span>
                <span className="course-card__cta">Abrir curso <ArrowRight size={16} /></span>
            </div>
        </Link>
    );
}
