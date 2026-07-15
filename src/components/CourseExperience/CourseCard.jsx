import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Icon from '../Icon/Icon';
import './CourseExperience.css';

export default function CourseCard({ course, progress }) {
    const completed = progress?.completedCount || 0;
    const total = course.stats.lessons;
    const percent = Math.round((completed / Math.max(total, 1)) * 100);

    return (
        <Link
            className="course-card"
            to={`/mentorias/${course.id}`}
            style={{ '--course-accent': course.accent, '--course-accent-2': course.accent2 }}
            aria-label={`Abrir curso ${course.title}`}
        >
            <span className="course-card__icon" aria-hidden="true">
                <Icon name={course.icon} size={24} />
            </span>

            <h3>{course.title}</h3>

            <span
                className="course-card__progress"
                style={{ '--course-progress': `${percent}%` }}
                role="img"
                aria-label={`${percent}% completado`}
            >
                <span>{percent}%</span>
            </span>

            <ArrowRight className="course-card__arrow" size={20} aria-hidden="true" />
        </Link>
    );
}
