import { useState } from 'react';

const VALUES = [
    { value: 17, status: 'Invalido', reason: 'Justo por debajo del minimo permitido', color: '#fb7185' },
    { value: 18, status: 'Valido', reason: 'Minimo permitido', color: '#67e8f9' },
    { value: 19, status: 'Valido', reason: 'Inmediatamente dentro del rango', color: '#22d3ee' },
    { value: 64, status: 'Valido', reason: 'Inmediatamente antes del maximo', color: '#22d3ee' },
    { value: 65, status: 'Valido', reason: 'Maximo permitido', color: '#67e8f9' },
    { value: 66, status: 'Invalido', reason: 'Justo por encima del maximo', color: '#fb7185' },
];

export default function QABoundaryValuesSim() {
    const [activeIndex, setActiveIndex] = useState(0);

    const active = VALUES[activeIndex];

    return (
        <div style={{ width: '100%', display: 'grid', gap: '1rem' }}>
            <div style={{ borderRadius: '18px', padding: '1.1rem 1rem 1.5rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ position: 'relative', marginTop: '1rem', height: '4.5rem' }}>
                    <div style={{ position: 'absolute', inset: '1.8rem 0 auto', height: '4px', borderRadius: '999px', background: 'rgba(255,255,255,0.14)' }} />
                    {VALUES.map((entry, index) => {
                        const left = `${(index / (VALUES.length - 1)) * 100}%`;
                        const current = index === activeIndex;
                        return (
                            <div key={entry.value} style={{ position: 'absolute', left, top: 0, transform: 'translateX(-50%)', textAlign: 'center' }}>
                                <button
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    aria-pressed={current}
                                    style={{
                                        width: current ? '1.5rem' : '1.25rem',
                                        height: current ? '1.5rem' : '1.25rem',
                                        margin: '1rem auto 0',
                                        borderRadius: '999px',
                                        background: current ? entry.color : 'rgba(255,255,255,0.3)',
                                        boxShadow: current ? `0 0 18px ${entry.color}` : 'none',
                                        transition: 'all 180ms ease',
                                        border: current ? `1px solid ${entry.color}` : '1px solid rgba(255,255,255,0.18)',
                                        cursor: 'pointer',
                                        appearance: 'none',
                                    }}
                                />
                                <div style={{ color: current ? '#fff' : 'rgba(255,255,255,0.62)', marginTop: '0.55rem', fontWeight: 700 }}>
                                    {entry.value}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div style={{ borderRadius: '18px', border: `1px solid ${active.color}44`, background: 'rgba(255,255,255,0.04)', padding: '1rem' }}>
                <div style={{ color: active.color, fontSize: '0.74rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {active.status}
                </div>
                <p style={{ color: '#fff', margin: '0.45rem 0 0', lineHeight: 1.6 }}>
                    El valor <strong>{active.value}</strong> se prueba porque esta en una zona especialmente sensible del dominio: {active.reason}.
                </p>
            </div>
        </div>
    );
}
