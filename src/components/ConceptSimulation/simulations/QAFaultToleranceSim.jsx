import { useState } from 'react';

const PHASES = [
    {
        name: 'Operacion nominal',
        from: 'Cliente',
        to: 'API principal',
        note: 'La solicitud entra por el camino esperado y el sistema responde normalmente.',
        highlight: 'primary',
        color: '#67e8f9',
    },
    {
        name: 'Fallo detectado',
        from: 'API principal',
        to: 'Timeout',
        note: 'Se detecta una anomalia antes de que el fallo corrompa la operacion completa.',
        highlight: 'failure',
        color: '#fb7185',
    },
    {
        name: 'Fallback / degradacion',
        from: 'Orquestador',
        to: 'Servicio respaldo',
        note: 'El sistema activa una ruta alternativa y conserva la funcionalidad critica.',
        highlight: 'fallback',
        color: '#f59e0b',
    },
    {
        name: 'Recuperacion',
        from: 'Sistema',
        to: 'Estado consistente',
        note: 'Se registran eventos, se informa al usuario y se prepara sincronizacion o retorno.',
        highlight: 'recover',
        color: '#22d3ee',
    },
];

const nodeStyle = (active, color) => ({
    borderRadius: '18px',
    padding: '0.95rem 0.9rem',
    border: `1px solid ${active ? color : 'rgba(255,255,255,0.12)'}`,
    background: active ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
    color: '#fff',
    minHeight: '5.3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
});

const phaseButtonBase = {
    width: '100%',
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'all 220ms ease',
    appearance: 'none',
    font: 'inherit',
};

export default function QAFaultToleranceSim() {
    const [phaseIndex, setPhaseIndex] = useState(0);

    const active = PHASES[phaseIndex];

    return (
        <div style={{ width: '100%', display: 'grid', gap: '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '0.7rem', alignItems: 'center' }}>
                <button
                    type="button"
                    onClick={() => setPhaseIndex(0)}
                    aria-pressed={phaseIndex === 0}
                    style={{ ...phaseButtonBase, ...nodeStyle(active.highlight === 'primary', '#67e8f9') }}
                >
                    <strong>Cliente</strong>
                    <span style={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.83rem' }}>Solicitud inicia</span>
                </button>
                <button
                    type="button"
                    onClick={() => setPhaseIndex(1)}
                    aria-pressed={phaseIndex === 1}
                    style={{ ...phaseButtonBase, ...nodeStyle(active.highlight === 'failure' || active.highlight === 'primary', '#fb7185') }}
                >
                    <strong>API principal</strong>
                    <span style={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.83rem' }}>Puede responder o fallar</span>
                </button>
                <button
                    type="button"
                    onClick={() => setPhaseIndex(2)}
                    aria-pressed={phaseIndex === 2}
                    style={{ ...phaseButtonBase, ...nodeStyle(active.highlight === 'fallback', '#f59e0b') }}
                >
                    <strong>Servicio respaldo</strong>
                    <span style={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.83rem' }}>Fallback / modo degradado</span>
                </button>
                <button
                    type="button"
                    onClick={() => setPhaseIndex(3)}
                    aria-pressed={phaseIndex === 3}
                    style={{ ...phaseButtonBase, ...nodeStyle(active.highlight === 'recover', '#22d3ee') }}
                >
                    <strong>Observabilidad</strong>
                    <span style={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.83rem' }}>Logs, aviso y recuperacion</span>
                </button>
            </div>

            <div style={{ borderRadius: '18px', border: `1px solid ${active.color}44`, background: 'rgba(255,255,255,0.04)', padding: '1rem' }}>
                <div style={{ color: active.color, fontSize: '0.74rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {active.from} {'->'} {active.to}
                </div>
                <div style={{ color: '#fff', fontSize: '1.02rem', fontWeight: 700, marginTop: '0.45rem' }}>{active.name}</div>
                <p style={{ margin: '0.5rem 0 0', color: 'rgba(255,255,255,0.66)', lineHeight: 1.55 }}>{active.note}</p>
            </div>
        </div>
    );
}
