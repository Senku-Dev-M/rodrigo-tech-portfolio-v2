import { useI18n } from '../../i18n/i18n';
import Icon from '../Icon/Icon';

export default function MentoringStats() {
    const { t } = useI18n();

    const stats = [
        { iconName: 'calendar', value: '2+', label: t('mentoring.stat1') },
        { iconName: 'book', value: '6+', label: t('mentoring.stat2') },
        { iconName: 'users', value: '50+', label: t('mentoring.stat3') },
        { iconName: 'star', value: '3×', label: t('mentoring.stat4') },
    ];

    return (
        <div className="stats-row">
            {stats.map((s, i) => (
                <div key={s.label} className="stat-card">
                    <span className="stat-card__index" aria-hidden="true">0{i + 1}</span>
                    <span className="stat-card__icon">
                        <Icon name={s.iconName} size={19} color="currentColor" />
                    </span>
                    <span className="stat-value">{s.value}</span>
                    <span className="stat-label">{s.label}</span>
                </div>
            ))}
        </div>
    );
}
