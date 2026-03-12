import { useI18n } from '../../i18n/i18n';
import Icon from '../Icon/Icon';

export default function MentoringApproach() {
    const { t } = useI18n();

    return (
        <section className="mentorias-section">
            <h2 className="section-heading">{t('mentoring.approachTitle')}</h2>
            <div className="approach-card">
                <p dangerouslySetInnerHTML={{ __html: t('mentoring.approachDesc') }} />
                <ul className="approach-list">
                    <li><Icon name="search" size={15} color="#00d4ff" /> {t('mentoring.approach1')}</li>
                    <li><Icon name="tool" size={15} color="#00d4ff" /> {t('mentoring.approach2')}</li>
                    <li><Icon name="book" size={15} color="#00d4ff" /> {t('mentoring.approach3')}</li>
                    <li><Icon name="chat" size={15} color="#00d4ff" /> {t('mentoring.approach4')}</li>
                    <li><Icon name="rocket" size={15} color="#00d4ff" /> {t('mentoring.approach5')}</li>
                </ul>
            </div>
        </section>
    );
}
