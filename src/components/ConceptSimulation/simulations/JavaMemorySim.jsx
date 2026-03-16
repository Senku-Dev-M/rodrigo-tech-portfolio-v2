import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useCompactSimulationLayout from '../useCompactSimulationLayout';

export default function JavaMemorySim() {
    const [step, setStep] = useState(0);
    const isCompact = useCompactSimulationLayout();

    const steps = [
        { desc: 'Se reserva un espacio en memoria RAM con un tipo especifico (int) y un nombre (edad).' },
        { desc: 'El valor (20) viaja hacia el espacio reservado para esa variable en memoria.' },
        { desc: 'El dato queda almacenado en la RAM y puede ser consultado usando su nombre.' },
    ];

    return (
        <div
            style={{
                padding: isCompact ? '1.35rem 1rem' : '2.5rem 3rem',
                background: 'rgba(20,20,20,0.8)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center',
            }}
        >
            <h3 style={{ color: '#00d4ff', marginBottom: '0.5rem' }}>Simulacion: Variables en Memoria</h3>
            <p
                style={{
                    color: 'var(--text-grey)',
                    marginBottom: isCompact ? '1.2rem' : '2rem',
                    fontSize: isCompact ? '0.84rem' : '0.9rem',
                    minHeight: isCompact ? 'auto' : '40px',
                }}
            >
                {steps[step].desc}
            </p>

            <div
                style={{
                    display: 'flex',
                    flexDirection: isCompact ? 'column' : 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: isCompact ? '0.95rem' : '2rem',
                    minHeight: isCompact ? 'auto' : '200px',
                    width: '100%',
                    padding: isCompact ? '0.4rem 0 0.2rem' : '1.5rem 0',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        maxWidth: isCompact ? '230px' : 'none',
                        padding: isCompact ? '0.9rem' : '1rem',
                        background: '#111',
                        borderRadius: '8px',
                        border: '1px solid rgba(255,255,255,0.05)',
                        fontFamily: 'monospace',
                        fontSize: isCompact ? '1.05rem' : '1.2rem',
                        color: '#fff',
                    }}
                >
                    <span style={{ color: '#67e8f9' }}>int</span> <span style={{ color: '#e06c75' }}>edad</span>{' '}
                    {step >= 1 && <span style={{ color: '#56b6c2' }}>=</span>}{' '}
                    {step >= 1 && <span style={{ color: '#d19a66' }}>20</span>};
                </div>

                {step >= 1 ? (
                    <motion.div
                        initial={isCompact ? { height: 0, opacity: 0 } : { width: 0, opacity: 0 }}
                        animate={isCompact ? { height: 44, opacity: 1 } : { width: 60, opacity: 1 }}
                        style={{
                            width: isCompact ? '3px' : '60px',
                            height: isCompact ? '44px' : '3px',
                            background: '#00d4ff',
                            position: 'relative',
                            flexShrink: 0,
                        }}
                    >
                        <motion.div
                            initial={false}
                            animate={isCompact ? { y: 34, opacity: 0 } : { x: 50, opacity: 0 }}
                            transition={{ repeat: Infinity, duration: 1 }}
                            style={{
                                position: 'absolute',
                                top: isCompact ? '-2px' : '-10px',
                                left: isCompact ? '-14px' : '0',
                                background: '#00d4ff',
                                color: '#000',
                                padding: '2px 6px',
                                borderRadius: '4px',
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                            }}
                        >
                            20
                        </motion.div>
                    </motion.div>
                ) : (
                    <div style={{ width: isCompact ? '3px' : '60px', height: isCompact ? '28px' : '3px', flexShrink: 0 }} />
                )}

                <div
                    style={{
                        width: '100%',
                        maxWidth: isCompact ? '240px' : '200px',
                        height: isCompact ? '132px' : '150px',
                        border: '2px dashed rgba(255,255,255,0.2)',
                        borderRadius: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        marginTop: isCompact ? '0.45rem' : 0,
                    }}
                >
                    <span
                        style={{
                            position: 'absolute',
                            top: isCompact ? '-20px' : '-25px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'var(--text-grey)',
                            fontSize: '0.78rem',
                            letterSpacing: '2px',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        MEMORIA RAM
                    </span>

                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        style={{
                            width: isCompact ? '110px' : '120px',
                            height: isCompact ? '74px' : '80px',
                            background: step >= 2 ? 'rgba(0, 212, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                            border: `2px solid ${step >= 2 ? '#00d4ff' : 'rgba(255,255,255,0.2)'}`,
                            borderRadius: '8px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: step >= 2 ? '0 0 20px rgba(0, 212, 255, 0.4)' : 'none',
                            transition: 'all 0.5s ease',
                        }}
                    >
                        <span style={{ color: '#e06c75', fontSize: '0.9rem', marginBottom: '8px', fontWeight: 'bold' }}>
                            edad (int)
                        </span>

                        <AnimatePresence>
                            {step >= 2 && (
                                <motion.span
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    style={{ color: '#d19a66', fontSize: '1.4rem', fontWeight: 'bold' }}
                                >
                                    20
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>

            <div
                style={{
                    marginTop: isCompact ? '1.4rem' : '3rem',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    flexWrap: 'wrap',
                }}
            >
                <button
                    onClick={() => setStep(Math.max(0, step - 1))}
                    disabled={step === 0}
                    style={{
                        background: 'rgba(255,255,255,0.1)',
                        color: '#fff',
                        border: 'none',
                        padding: isCompact ? '0.58rem 0.9rem' : '0.5rem 1rem',
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
                        padding: isCompact ? '0.68rem 1rem' : '0.5rem 1rem',
                        borderRadius: '6px',
                        cursor: step === steps.length - 1 ? 'not-allowed' : 'pointer',
                        fontWeight: 'bold',
                        opacity: step === steps.length - 1 ? 0.5 : 1,
                    }}
                >
                    Siguiente paso
                </button>
            </div>
        </div>
    );
}
