import { useI18n } from '../../i18n/i18n';
import './LangSwitch.css';

export default function LangSwitch() {
    const { lang, setLang } = useI18n();

    return (
        <div className="lang-switch" role="group" aria-label="Language selector">
            <button
                className={`lang-switch__btn ${lang === 'es' ? 'lang-switch__btn--active' : ''}`}
                onClick={() => setLang('es')}
                aria-pressed={lang === 'es'}
            >
                ES
            </button>
            <button
                className={`lang-switch__btn ${lang === 'en' ? 'lang-switch__btn--active' : ''}`}
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
            >
                EN
            </button>
        </div>
    );
}
