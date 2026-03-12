import { useState, useEffect, useMemo, useRef } from 'react';
import { useI18n } from '../../i18n/i18n';
import './LabsToolbar.css';

/**
 * LabsToolbar — search + type filter bar for the labs listing view.
 */
export default function LabsToolbar({ labs, onChange }) {
    const { t } = useI18n();
    const [query, setQuery]   = useState('');
    const [active, setActive] = useState('__all__');
    const inputRef = useRef(null);

    // Derive unique types dynamically from the current labs array
    const types = useMemo(() => {
        const seen = new Set();
        labs.forEach(l => { if (l.type) seen.add(l.type); });
        return ['__all__', ...Array.from(seen)];
    }, [labs]);

    // Recompute filtered list whenever query, active type, or labs change
    useEffect(() => {
        const q = query.trim().toLowerCase();
        const filtered = labs.filter(l => {
            const matchesType  = active === '__all__' || l.type === active;
            const matchesQuery = !q || l.title.toLowerCase().includes(q);
            return matchesType && matchesQuery;
        });
        onChange(filtered);
    }, [query, active, labs, onChange]);

    // Reset when the labs list changes (user navigated to a different subject)
    useEffect(() => {
        setQuery('');
        setActive('__all__');
    }, [labs]);

    return (
        <div className="labs-toolbar">
            {/* ── Search input ── */}
            <div className="labs-toolbar__search">
                <span className="labs-toolbar__search-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                        <circle cx="11" cy="11" r="8"/>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    </svg>
                </span>
                <input
                    ref={inputRef}
                    type="text"
                    className="labs-toolbar__input"
                    placeholder={t('mentoring.searchPlaceholder')}
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    aria-label={t('mentoring.searchAriaLabel')}
                />
                {query && (
                    <button
                        className="labs-toolbar__clear"
                        onClick={() => { setQuery(''); inputRef.current?.focus(); }}
                        aria-label={t('mentoring.clearSearch')}
                    >
                        ✕
                    </button>
                )}
            </div>

            {/* ── Type filter chips ── */}
            <div className="labs-toolbar__filters" role="group" aria-label={t('mentoring.filterByType')}>
                {types.map(tp => (
                    <button
                        key={tp}
                        className={`labs-toolbar__chip ${active === tp ? 'labs-toolbar__chip--active' : ''}`}
                        onClick={() => setActive(tp)}
                        aria-pressed={active === tp}
                    >
                        {tp === '__all__' ? t('mentoring.filterAll') : tp}
                    </button>
                ))}
            </div>
        </div>
    );
}
