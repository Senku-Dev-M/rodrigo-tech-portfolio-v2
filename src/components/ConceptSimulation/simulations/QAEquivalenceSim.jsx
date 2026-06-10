import { useState } from 'react';

const PARTITIONS = [
    {
        label: 'Invalida',
        rule: '0 a 4 caracteres',
        sample: 'Ana',
        expected: 'Rechazar por longitud insuficiente',
        color: '#fb7185',
    },
    {
        label: 'Valida',
        rule: '5 a 20 caracteres alfabeticos',
        sample: 'Mariana',
        expected: 'Aceptar y continuar con el registro',
        color: '#FF5A1F',
    },
    {
        label: 'Invalida',
        rule: 'Mas de 20 caracteres',
        sample: 'superusuariointernoqa',
        expected: 'Rechazar por longitud excedida',
        color: '#f59e0b',
    },
    {
        label: 'Invalida',
        rule: 'Numericos o especiales',
        sample: 'Juan99',
        expected: 'Rechazar por formato no permitido',
        color: '#8A8F98',
    },
];

const partitionButtonStyle = {
    width: '100%',
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'all 220ms ease',
    appearance: 'none',
    font: 'inherit',
};

export default function QAEquivalenceSim() {
    const [activeIndex, setActiveIndex] = useState(0);

    const active = PARTITIONS[activeIndex];

    return (
        <div style={{ width: '100%', display: 'grid', gap: '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '0.7rem' }}>
                {PARTITIONS.map((partition, index) => {
                    const current = index === activeIndex;
                    return (
                        <button
                            key={partition.rule}
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            aria-pressed={current}
                            style={{
                                ...partitionButtonStyle,
                                borderRadius: '16px',
                                border: `1px solid ${current ? partition.color : 'rgba(255,255,255,0.1)'}`,
                                background: current ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
                                padding: '0.95rem',
                            }}
                        >
                            <div style={{ color: partition.color, fontSize: '0.74rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                                {partition.label}
                            </div>
                            <div style={{ color: '#fff', fontWeight: 700, marginTop: '0.45rem' }}>{partition.rule}</div>
                            <div style={{ marginTop: '0.6rem', color: 'rgba(255,255,255,0.64)', fontSize: '0.84rem' }}>
                                Representante: <strong style={{ color: '#fff' }}>{partition.sample}</strong>
                            </div>
                        </button>
                    );
                })}
            </div>

            <div style={{ borderRadius: '18px', padding: '1rem', border: `1px solid ${active.color}44`, background: 'rgba(255,255,255,0.04)' }}>
                <div style={{ color: active.color, fontSize: '0.74rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    comportamiento esperado de la clase
                </div>
                <p style={{ margin: '0.5rem 0 0', color: '#fff', lineHeight: 1.6 }}>
                    Para el valor <strong>{active.sample}</strong>, el sistema deberia: {active.expected}.
                </p>
            </div>
        </div>
    );
}
