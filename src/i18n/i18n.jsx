import { createContext, useContext, useState, useCallback, useMemo } from 'react';
import es from './es';
import en from './en';

const dictionaries = { es, en };
const STORAGE_KEY = 'portfolio-lang';
const DEFAULT_LANG = 'es';

const I18nContext = createContext(null);

/**
 * Resolve a dot-notated key from a nested object.
 *   t('hero.greeting')  →  dictionaries[lang].hero.greeting
 */
function resolve(obj, path) {
    return path.split('.').reduce((acc, part) => acc?.[part], obj);
}

export function I18nProvider({ children }) {
    const [lang, setLangState] = useState(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved && dictionaries[saved]) return saved;
        } catch { /* SSR / incognito */ }
        return DEFAULT_LANG;
    });

    const setLang = useCallback((next) => {
        if (!dictionaries[next]) return;
        setLangState(next);
        try { localStorage.setItem(STORAGE_KEY, next); } catch { /**/ }
    }, []);

    const t = useCallback((key, fallback) => {
        const val = resolve(dictionaries[lang], key);
        if (val !== undefined) return val;
        // Fallback to Spanish, then to raw key
        const fallbackVal = resolve(dictionaries[DEFAULT_LANG], key);
        return fallbackVal ?? fallback ?? key;
    }, [lang]);

    const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

/**
 * Hook to access i18n context.
 *   const { lang, setLang, t } = useI18n();
 *   t('nav.about')  →  "Sobre Mí" | "About Me"
 */
export function useI18n() {
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>');
    return ctx;
}

/**
 * Helper for bilingual data objects: pick(item, 'desc', lang)
 * If item.desc is a string → returns it as-is.
 * If item.desc is { es, en } → returns item.desc[lang].
 */
export function pick(obj, field, lang) {
    const val = obj?.[field];
    if (val == null) return '';
    if (typeof val === 'string') return val;
    return val[lang] ?? val.es ?? '';
}
