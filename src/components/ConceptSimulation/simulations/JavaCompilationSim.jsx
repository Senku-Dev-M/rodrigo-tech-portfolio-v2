import { useState } from 'react';
import { motion } from 'framer-motion';

export default function JavaCompilationSim() {
    const [step, setStep] = useState(0);

    const steps = [
        {
            title: 'Código fuente',
            label: 'HolaMundo.java',
            token: '.java',
            accent: '#2563eb',
            desc: 'Escribes instrucciones legibles por humanos dentro del archivo fuente.',
        },
        {
            title: 'Compilador',
            label: 'javac',
            token: 'javac',
            accent: '#E84D14',
            desc: 'El compilador traduce ese texto a bytecode.',
        },
        {
            title: 'Bytecode',
            label: 'HolaMundo.class',
            token: '.class',
            accent: '#7c3aed',
            desc: 'Se genera un archivo intermedio portable entre sistemas.',
        },
        {
            title: 'JVM',
            label: 'Java Virtual Machine',
            token: 'JVM',
            accent: '#dc2626',
            desc: 'La máquina virtual interpreta el bytecode para la plataforma actual.',
        },
        {
            title: 'Ejecución final',
            label: 'Windows / Linux / macOS',
            token: 'OS',
            accent: '#16a34a',
            desc: 'El programa corre sobre el sistema operativo disponible.',
        },
    ];

    return (
        <div
            style={{
                padding: '2.5rem 3rem',
                background: 'rgba(20,20,20,0.8)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center',
            }}
        >
            <h3 style={{ color: '#FF5A1F', marginBottom: '0.5rem' }}>El ciclo de vida del código Java</h3>
            <p style={{ color: 'var(--text-grey)', marginBottom: '2rem', fontSize: '0.9rem' }}>
                {steps[step].desc}
            </p>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    width: '100%',
                    maxWidth: '560px',
                    margin: '0 auto',
                    padding: '0.5rem 0',
                }}
            >
                {steps.map((item, index) => {
                    const isVisible = step >= index;
                    const isCurrent = step === index;
                    const isCompleted = step > index;

                    return (
                        <div
                            key={item.title}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '0.75rem',
                            }}
                        >
                            <motion.div
                                initial={false}
                                animate={{
                                    opacity: isVisible ? 1 : 0.35,
                                    scale: isCurrent ? 1.02 : 1,
                                    borderColor: isCurrent ? '#FF5A1F' : 'rgba(255,255,255,0.08)',
                                    boxShadow: isCurrent ? '0 0 0 1px rgba(255,90,31,0.18)' : 'none',
                                }}
                                transition={{ duration: 0.2 }}
                                style={{
                                    width: '100%',
                                    display: 'grid',
                                    gridTemplateColumns: '88px 1fr 44px',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    padding: '1rem 1.1rem',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    background: isVisible ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
                                }}
                            >
                                <div
                                    style={{
                                        height: '64px',
                                        borderRadius: '14px',
                                        background: item.accent,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#fff',
                                        fontWeight: '800',
                                        letterSpacing: '0.02em',
                                    }}
                                >
                                    {item.token}
                                </div>

                                <div style={{ textAlign: 'left' }}>
                                    <div style={{ color: '#fff', fontWeight: 700, marginBottom: '0.2rem' }}>{item.title}</div>
                                    <div style={{ color: 'var(--text-grey)', fontSize: '0.88rem', lineHeight: 1.4 }}>
                                        {item.label}
                                    </div>
                                </div>

                                <div
                                    style={{
                                        width: '2.1rem',
                                        height: '2.1rem',
                                        borderRadius: '999px',
                                        border: `1px solid ${isVisible ? item.accent : 'rgba(255,255,255,0.12)'}`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: isVisible ? item.accent : 'var(--text-grey)',
                                        fontWeight: '700',
                                    }}
                                >
                                    {index + 1}
                                </div>
                            </motion.div>

                            {index < steps.length - 1 && (
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '0.3rem',
                                        minHeight: '28px',
                                    }}
                                >
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            background: isCompleted ? '#FF5A1F' : 'rgba(255,255,255,0.16)',
                                            opacity: isVisible ? 1 : 0.4,
                                        }}
                                        style={{ width: '2px', height: '18px', borderRadius: '999px' }}
                                    />
                                    <motion.div
                                        initial={false}
                                        animate={{ opacity: isCompleted ? 1 : 0.35 }}
                                        style={{
                                            width: '8px',
                                            height: '8px',
                                            borderRadius: '999px',
                                            background: isCompleted ? '#FF5A1F' : 'rgba(255,255,255,0.16)',
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                    onClick={() => setStep(Math.max(0, step - 1))}
                    disabled={step === 0}
                    style={{
                        background: 'rgba(255,255,255,0.1)',
                        color: '#fff',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '6px',
                        cursor: step === 0 ? 'not-allowed' : 'pointer',
                        opacity: step === 0 ? 0.5 : 1,
                    }}
                >
                    Atrás
                </button>
                <button
                    onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
                    disabled={step === steps.length - 1}
                    style={{
                        background: '#FF5A1F',
                        color: '#000',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '6px',
                        cursor: step === steps.length - 1 ? 'not-allowed' : 'pointer',
                        fontWeight: 'bold',
                        opacity: step === steps.length - 1 ? 0.5 : 1,
                    }}
                >
                    Siguiente paso
                </button>

                {step === steps.length - 1 && (
                    <button
                        onClick={() => setStep(0)}
                        style={{
                            background: 'transparent',
                            color: '#FF5A1F',
                            border: '1px solid #FF5A1F',
                            padding: '0.5rem 1rem',
                            borderRadius: '6px',
                            cursor: 'pointer',
                        }}
                    >
                        Reiniciar
                    </button>
                )}
            </div>
        </div>
    );
}
