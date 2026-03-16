import { useState } from 'react';
import { motion } from 'framer-motion';
import useCompactSimulationLayout from '../useCompactSimulationLayout';

export default function JavaArrayMemorySim() {
    const [step, setStep] = useState(0);
    const isCompact = useCompactSimulationLayout();

    const steps = [
        { desc: 'Java reserva un bloque de 5 espacios enteros contiguos en memoria.' },
        { desc: 'Tambien puedes inicializar todos los valores del arreglo desde el inicio.' },
        { desc: 'Para leer un valor, apuntas a un indice exacto como numeros[2].' },
        { desc: 'Para escribir, eliges una posicion y reemplazas lo que habia alli.' },
    ];

    const currentArray = step === 0 ? [0, 0, 0, 0, 0] : step === 3 ? [99, 20, 30, 40, 50] : [10, 20, 30, 40, 50];
    const activeIndex = step === 2 ? 2 : step === 3 ? 0 : null;

    const codeByStep = [
        <>int[] numeros = new int[5];</>,
        <>int[] numeros = {'{'} 10, 20, 30, 40, 50 {'}'};</>,
        <>int valor = numeros[<span style={{ color: '#00d4ff', fontWeight: 'bold' }}>2</span>];</>,
        <>numeros[<span style={{ color: '#e74c3c', fontWeight: 'bold' }}>0</span>] = <span style={{ color: '#e74c3c' }}>99</span>;</>,
    ];

    return (
        <div
            style={{
                padding: isCompact ? '1.35rem 1rem' : '2.5rem 2rem',
                background: 'rgba(20,20,20,0.8)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center',
            }}
        >
            <h3 style={{ color: '#00d4ff', marginBottom: '0.5rem' }}>Simulacion: Arreglos en memoria</h3>
            <p
                style={{
                    color: 'var(--text-grey)',
                    marginBottom: '1.4rem',
                    fontSize: isCompact ? '0.84rem' : '0.9rem',
                    minHeight: isCompact ? 'auto' : '40px',
                }}
            >
                {steps[step].desc}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
                <div
                    style={{
                        width: '100%',
                        maxWidth: '560px',
                        background: '#111',
                        padding: isCompact ? '0.9rem' : '1rem',
                        borderRadius: '8px',
                        border: '1px solid rgba(255,255,255,0.05)',
                        fontFamily: 'monospace',
                        fontSize: isCompact ? '0.92rem' : '1.08rem',
                        color: '#fff',
                        overflowWrap: 'anywhere',
                    }}
                >
                    <span style={{ color: '#67e8f9' }}>{codeByStep[step]}</span>
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${isCompact ? 3 : 5}, minmax(0, 1fr))`,
                        gap: '0.55rem',
                        width: '100%',
                        maxWidth: isCompact ? '280px' : '420px',
                        background: 'rgba(0,0,0,0.4)',
                        padding: '0.7rem',
                        borderRadius: '12px',
                        border: '1px dashed rgba(255,255,255,0.1)',
                    }}
                >
                    {currentArray.map((value, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.45rem' }}>
                                <div
                                    style={{
                                        fontSize: '0.72rem',
                                        color: isActive ? (step === 2 ? '#00d4ff' : '#e74c3c') : 'var(--text-grey)',
                                        fontWeight: isActive ? '700' : '500',
                                    }}
                                >
                                    idx [{index}]
                                </div>
                                <motion.div
                                    animate={{
                                        scale: isActive ? 1.06 : 1,
                                        y: isActive ? -4 : 0,
                                        background: isActive
                                            ? step === 2
                                                ? 'rgba(0, 212, 255, 0.2)'
                                                : 'rgba(231, 76, 60, 0.2)'
                                            : 'rgba(255,255,255,0.05)',
                                        borderColor: isActive
                                            ? step === 2
                                                ? '#00d4ff'
                                                : '#e74c3c'
                                            : 'rgba(255,255,255,0.1)',
                                    }}
                                    style={{
                                        width: isCompact ? '64px' : '70px',
                                        height: isCompact ? '56px' : '60px',
                                        borderRadius: '10px',
                                        border: '2px solid rgba(255,255,255,0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#fff',
                                        fontWeight: '800',
                                        fontSize: isCompact ? '1rem' : '1.1rem',
                                    }}
                                >
                                    {value}
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button
                    onClick={() => setStep(Math.max(0, step - 1))}
                    disabled={step === 0}
                    style={{
                        background: 'rgba(255,255,255,0.1)',
                        color: '#fff',
                        border: 'none',
                        padding: '0.58rem 0.95rem',
                        borderRadius: '6px',
                        cursor: step === 0 ? 'not-allowed' : 'pointer',
                        opacity: step === 0 ? 0.5 : 1,
                    }}
                >
                    Atras
                </button>
                <button
                    onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
                    disabled={step === steps.length - 1}
                    style={{
                        background: '#00d4ff',
                        color: '#000',
                        border: 'none',
                        padding: '0.62rem 1rem',
                        borderRadius: '6px',
                        cursor: step === steps.length - 1 ? 'not-allowed' : 'pointer',
                        fontWeight: 'bold',
                        opacity: step === steps.length - 1 ? 0.5 : 1,
                    }}
                >
                    Siguiente etapa
                </button>
            </div>
        </div>
    );
}
