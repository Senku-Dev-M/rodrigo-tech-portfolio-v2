import Icon from '../Icon/Icon';

const stats = [
    { iconName: 'calendar', value: '2+', label: 'Años mentoreando' },
    { iconName: 'book', value: '6+', label: 'Cursos impartidos' },
    { iconName: 'users', value: '100+', label: 'Estudiantes apoyados' },
    { iconName: 'star', value: '3×', label: 'Estudiante Destacado' },
];

export default function MentoringStats() {
    return (
        <div className="stats-row">
            {stats.map((s, i) => (
                <div key={i} className="stat-card">
                    <Icon name={s.iconName} size={20} color="rgba(0,212,255,0.5)" />
                    <span className="stat-value">{s.value}</span>
                    <span className="stat-label">{s.label}</span>
                </div>
            ))}
        </div>
    );
}
