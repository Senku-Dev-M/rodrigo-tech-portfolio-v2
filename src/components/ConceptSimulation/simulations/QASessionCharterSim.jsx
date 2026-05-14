import { useState } from 'react';

const STAGES = [
    {
        name: 'Charter',
        note: 'Mision, alcance y riesgo sospechado',
        artifact: 'Objetivo: explorar login con tokens expirados y reenvio de correo',
        color: '#67e8f9',
    },
    {
        name: 'Sesion',
        note: 'Exploracion focalizada y adaptativa',
        artifact: 'Variacion de navegador, expiracion, reintentos y links viejos',
        color: '#38bdf8',
    },
    {
        name: 'Notas',
        note: 'Datos, pasos, preguntas y evidencias',
        artifact: 'Build v2.8.1 - token vencido no informa causa y redirige al dashboard',
        color: '#22d3ee',
    },
    {
        name: 'Hallazgos',
        note: 'Defectos, riesgos o huecos funcionales',
        artifact: 'Bug potencial en manejo de expiracion + duda de negocio sobre tiempos',
        color: '#f59e0b',
    },
    {
        name: 'Debrief',
        note: 'Aprendizaje compartido y siguiente accion',
        artifact: 'Abrir bug, aclarar criterio con PO y crear nueva sesion sobre reenvio',
        color: '#fb7185',
    },
];

const stageButtonStyle = {
    width: '100%',
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'all 220ms ease',
    appearance: 'none',
    font: 'inherit',
};

export default function QASessionCharterSim() {
    const [activeIndex, setActiveIndex] = useState(0);

    const active = STAGES[activeIndex];

    return (
        <div style={{ width: '100%', display: 'grid', gap: '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: '0.7rem' }}>
                {STAGES.map((stage, index) => {
                    const current = index === activeIndex;
                    return (
                        <button
                            key={stage.name}
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            aria-pressed={current}
                            style={{
                                ...stageButtonStyle,
                                borderRadius: '16px',
                                border: `1px solid ${current ? stage.color : 'rgba(255,255,255,0.12)'}`,
                                background: current ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
                                padding: '0.9rem 0.8rem',
                                minHeight: '7.4rem',
                                transition: 'all 220ms ease',
                                boxShadow: current ? `0 12px 28px ${stage.color}18` : 'none',
                            }}
                        >
                            <div style={{ color: current ? stage.color : 'rgba(255,255,255,0.54)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                                etapa {index + 1}
                            </div>
                            <div style={{ color: '#fff', fontWeight: 700, marginTop: '0.45rem' }}>{stage.name}</div>
                            <p style={{ margin: '0.45rem 0 0', color: 'rgba(255,255,255,0.64)', fontSize: '0.83rem', lineHeight: 1.45 }}>
                                {stage.note}
                            </p>
                        </button>
                    );
                })}
            </div>

            <div style={{ borderRadius: '18px', border: `1px solid ${active.color}44`, padding: '1.05rem', background: 'rgba(255,255,255,0.04)' }}>
                <div style={{ color: active.color, fontSize: '0.74rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    evidencia que se genera
                </div>
                <p style={{ color: '#fff', fontSize: '1rem', lineHeight: 1.65, margin: '0.55rem 0 0' }}>
                    {active.artifact}
                </p>
            </div>
        </div>
    );
}
