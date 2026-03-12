import { useI18n } from '../../i18n/i18n';

export default function Breadcrumb({ view, subject, lab, onNavigate }) {
    const { t } = useI18n();

    return (
        <nav className="breadcrumb">
            <button className={`bc-item ${view === 'subjects' ? 'bc-item--active' : ''}`} onClick={() => onNavigate('subjects')}>
                {t('mentoring.breadcrumbRoot')}
            </button>
            {subject && (
                <>
                    <span className="bc-sep">›</span>
                    <button className={`bc-item ${view === 'labs' ? 'bc-item--active' : ''}`} onClick={() => onNavigate('labs')}>
                        {subject.title}
                    </button>
                </>
            )}
            {lab && (
                <>
                    <span className="bc-sep">›</span>
                    <span className="bc-item bc-item--active">{lab.title}</span>
                </>
            )}
        </nav>
    );
}
