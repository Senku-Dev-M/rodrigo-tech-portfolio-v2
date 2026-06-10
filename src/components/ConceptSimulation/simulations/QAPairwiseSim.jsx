import { useState } from 'react';

const ROWS = [
    {
        id: 't1',
        values: ['Chrome', 'USD', 'Tarjeta'],
        pairs: ['Chrome-USD', 'Chrome-Tarjeta', 'USD-Tarjeta'],
    },
    {
        id: 't2',
        values: ['Firefox', 'USD', 'PayPal'],
        pairs: ['Firefox-USD', 'Firefox-PayPal', 'USD-PayPal'],
    },
    {
        id: 't3',
        values: ['Safari', 'EUR', 'Tarjeta'],
        pairs: ['Safari-EUR', 'Safari-Tarjeta', 'EUR-Tarjeta'],
    },
    {
        id: 't4',
        values: ['Chrome', 'EUR', 'PayPal'],
        pairs: ['Chrome-EUR', 'Chrome-PayPal', 'EUR-PayPal'],
    },
];

const rowButtonStyle = {
    width: '100%',
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'all 220ms ease',
    appearance: 'none',
    font: 'inherit',
};

export default function QAPairwiseSim() {
    const [activeIndex, setActiveIndex] = useState(0);

    const coveredPairs = Array.from(new Set(ROWS.slice(0, activeIndex + 1).flatMap((row) => row.pairs)));

    return (
        <div style={{ width: '100%', display: 'grid', gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 0.9fr)', gap: '1rem' }}>
            <div style={{ borderRadius: '18px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)', overflow: 'hidden' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '0.6fr 1fr 1fr 1fr', background: 'rgba(255,255,255,0.04)', padding: '0.8rem 0.9rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    <span>caso</span>
                    <span>Navegador</span>
                    <span>Moneda</span>
                    <span>Pago</span>
                </div>
                {ROWS.map((row, index) => {
                    const current = index === activeIndex;
                    return (
                        <button
                            key={row.id}
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            aria-pressed={current}
                            style={{
                                ...rowButtonStyle,
                                display: 'grid',
                                gridTemplateColumns: '0.6fr 1fr 1fr 1fr',
                                padding: '0.85rem 0.9rem',
                                background: current ? 'rgba(255,255,255,0.06)' : 'transparent',
                                borderTop: '1px solid rgba(255,255,255,0.06)',
                                color: '#fff',
                            }}
                        >
                            <strong style={{ color: current ? '#FF8A5C' : '#fff' }}>{row.id}</strong>
                            {row.values.map((cell) => (
                                <span key={`${row.id}-${cell}`}>{cell}</span>
                            ))}
                        </button>
                    );
                })}
            </div>

            <div style={{ display: 'grid', gap: '0.8rem' }}>
                <div style={{ borderRadius: '16px', background: 'rgba(255,255,255,0.04)', padding: '1rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ color: '#FF8A5C', fontSize: '0.74rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        cobertura acumulada
                    </div>
                    <div style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 800, marginTop: '0.3rem' }}>{coveredPairs.length} pares</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '0.8rem' }}>
                        {coveredPairs.map((pair) => (
                            <span
                                key={pair}
                                style={{
                                    padding: '0.35rem 0.6rem',
                                    borderRadius: '999px',
                                    background: 'rgba(103,232,249,0.14)',
                                    border: '1px solid rgba(103,232,249,0.24)',
                                    color: '#fff',
                                    fontSize: '0.78rem',
                                }}
                            >
                                {pair}
                            </span>
                        ))}
                    </div>
                </div>
                <div style={{ borderRadius: '16px', background: 'rgba(255,255,255,0.04)', padding: '1rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <p style={{ margin: 0, color: 'rgba(255,255,255,0.66)', lineHeight: 1.55 }}>
                        Cada fila agrega interacciones nuevas sin generar el producto cartesiano completo. La tecnica reduce casos, pero sigue exigiendo decidir bien variables, valores y restricciones.
                    </p>
                </div>
            </div>
        </div>
    );
}
