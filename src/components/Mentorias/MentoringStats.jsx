import { useI18n } from '../../i18n/i18n';
import Icon from '../Icon/Icon';

export default function MentoringStats() {
    const { t } = useI18n();

    const stats = [
        { iconName: 'calendar', value: '2+', label: t('mentoring.stat1') },
        { iconName: 'book', value: '6+', label: t('mentoring.stat2') },
        { iconName: 'users', value: '100+', label: t('mentoring.stat3') },
        { iconName: 'star', value: '3×', label: t('mentoring.stat4') },
    ];

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
