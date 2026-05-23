import './CourseExperience.css';

export default function LessonProgress({ completed = 0, total = 1, label = 'Progreso', compact = false }) {
    const safeTotal = Math.max(total, 1);
    const percent = Math.round((completed / safeTotal) * 100);

    return (
        <div className={`lesson-progress ${compact ? 'lesson-progress--compact' : ''}`}>
            <div className="lesson-progress__meta">
                <span>{label}</span>
                <strong>{percent}%</strong>
            </div>
            <div className="lesson-progress__track" aria-hidden="true">
                <span style={{ width: `${percent}%` }} />
            </div>
        </div>
    );
}
