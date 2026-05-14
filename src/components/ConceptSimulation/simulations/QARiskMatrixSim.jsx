import { useState } from 'react';

const RISKS = [
    {
        id: 'r1',
        title: 'Facturacion incorrecta',
        probability: 4,
        impact: 5,
        action: 'Profundizar funcional, limites y combinaciones',
        color: '#fb7185',
    },
    {
        id: 'r2',
        title: 'Dashboard lento con datos masivos',
        probability: 3,
        impact: 4,
        action: 'Rendimiento y carga dirigida',
        color: '#f59e0b',
    },
    {
        id: 'r3',
        title: 'Modulo menor poco usado',
        probability: 2,
        impact: 2,
        action: 'Cobertura ligera o diferida',
        color: '#67e8f9',
    },
];

const riskButtonBase = {
    width: '100%',
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'all 220ms ease',
    appearance: 'none',
    font: 'inherit',
};

export default function QARiskMatrixSim() {
    const [activeIndex, setActiveIndex] = useState(0);

    const active = RISKS[activeIndex];

    return (
        <div style={{ width: '100%', display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.9fr)', gap: '1rem' }}>
            <div style={{ borderRadius: '18px', padding: '1rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.35rem' }}>
                    {Array.from({ length: 5 }).map((_, rowIndex) =>
                        Array.from({ length: 5 }).map((__, colIndex) => {
                            const probability = colIndex + 1;
                            const impact = 5 - rowIndex;
                            const matchingRiskIndex = RISKS.findIndex(
                                (risk) => risk.probability === probability && risk.impact === impact
                            );
                            const matched = matchingRiskIndex === activeIndex;
                            const clickable = matchingRiskIndex >= 0;

                            return (
                                <button
                                    key={`${rowIndex}-${colIndex}`}
                                    type="button"
                                    onClick={() => clickable && setActiveIndex(matchingRiskIndex)}
                                    disabled={!clickable}
                                    aria-pressed={matched}
                                    style={{
                                        aspectRatio: '1 / 1',
                                        borderRadius: '12px',
                                        border: `1px solid ${matched ? active.color : clickable ? 'rgba(255,255,255,0.16)' : 'rgba(255,255,255,0.08)'}`,
                                        background: matched ? `${active.color}22` : clickable ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.03)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: matched ? '#fff' : clickable ? 'rgba(255,255,255,0.72)' : 'rgba(255,255,255,0.42)',
                                        fontWeight: 700,
                                        boxShadow: matched ? `0 0 24px ${active.color}22 inset` : 'none',
                                        cursor: clickable ? 'pointer' : 'default',
                                        transition: 'all 180ms ease',
                                        appearance: 'none',
                                        font: 'inherit',
                                    }}
                                >
                                    {probability * impact}
                                </button>
                            );
                        })
                    )}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.7rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem' }}>
                    <span>Impacto alto arriba</span>
                    <span>Probabilidad alta a la derecha</span>
                </div>
            </div>

            <div style={{ display: 'grid', gap: '0.7rem' }}>
                {RISKS.map((risk, index) => {
                    const current = index === activeIndex;
                    return (
                        <button
                            key={risk.id}
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            aria-pressed={current}
                            style={{
                                ...riskButtonBase,
                                borderRadius: '16px',
                                padding: '0.95rem 1rem',
                                border: `1px solid ${current ? risk.color : 'rgba(255,255,255,0.1)'}`,
                                background: current ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem' }}>
                                <strong style={{ color: '#fff' }}>{risk.title}</strong>
                                <span style={{ color: risk.color, fontWeight: 800, fontSize: '0.8rem' }}>
                                    P{risk.probability} / I{risk.impact}
                                </span>
                            </div>
                            <p style={{ margin: '0.45rem 0 0', color: 'rgba(255,255,255,0.64)', fontSize: '0.84rem', lineHeight: 1.45 }}>
                                {risk.action}
                            </p>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
