import { useState } from 'react';

const PHASES = [
    {
        name: 'Registro',
        color: '#67e8f9',
        note: 'Bug creado con evidencia, entorno, pasos y resultado actual/esperado.',
    },
    {
        name: 'Triage',
        color: '#f59e0b',
        note: 'Equipo revisa impacto, prioridad, owner y target release.',
    },
    {
        name: 'Fix',
        color: '#38bdf8',
        note: 'Desarrollo implementa correccion o define workaround / diferimiento.',
    },
    {
        name: 'Validacion',
        color: '#22d3ee',
        note: 'QA hace test around, valida el fix y deja nota de validacion.',
    },
    {
        name: 'Cierre',
        color: '#fb7185',
        note: 'El bug queda aceptado, rechazado, reabierto o pospuesto con soporte documental.',
    },
];

const phaseButtonStyle = {
    width: '100%',
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'all 220ms ease',
    appearance: 'none',
    font: 'inherit',
};

export default function QABugTriageSim() {
    const [activeIndex, setActiveIndex] = useState(0);

    const active = PHASES[activeIndex];

    return (
        <div style={{ width: '100%', display: 'grid', gap: '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: '0.7rem' }}>
                {PHASES.map((phase, index) => {
                    const current = index === activeIndex;
                    return (
                        <button
                            key={phase.name}
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            aria-pressed={current}
                            style={{
                                ...phaseButtonStyle,
                                borderRadius: '16px',
                                border: `1px solid ${current ? phase.color : 'rgba(255,255,255,0.1)'}`,
                                background: current ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
                                padding: '0.85rem 0.8rem',
                            }}
                        >
                            <div style={{ color: current ? phase.color : 'rgba(255,255,255,0.55)', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                                fase {index + 1}
                            </div>
                            <div style={{ color: '#fff', fontWeight: 700, marginTop: '0.45rem' }}>{phase.name}</div>
                        </button>
                    );
                })}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)', gap: '1rem' }}>
                <div style={{ borderRadius: '18px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', padding: '1rem' }}>
                    <div style={{ color: '#fff', fontWeight: 700 }}>Bug: Cart total mismatch</div>
                    <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginTop: '0.7rem' }}>
                        {['Severity: High', 'Priority: High', 'Owner: QA/Dev'].map((chip) => (
                            <span
                                key={chip}
                                style={{
                                    padding: '0.35rem 0.6rem',
                                    borderRadius: '999px',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    color: 'rgba(255,255,255,0.72)',
                                    fontSize: '0.78rem',
                                }}
                            >
                                {chip}
                            </span>
                        ))}
                    </div>
                </div>

                <div style={{ borderRadius: '18px', border: `1px solid ${active.color}44`, background: 'rgba(255,255,255,0.04)', padding: '1rem' }}>
                    <div style={{ color: active.color, fontSize: '0.74rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        etapa activa
                    </div>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.06rem', marginTop: '0.45rem' }}>{active.name}</div>
                    <p style={{ margin: '0.5rem 0 0', color: 'rgba(255,255,255,0.66)', lineHeight: 1.58 }}>{active.note}</p>
                </div>
            </div>
        </div>
    );
}
