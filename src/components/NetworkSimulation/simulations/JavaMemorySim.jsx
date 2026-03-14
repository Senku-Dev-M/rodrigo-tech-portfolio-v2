import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function JavaMemorySim() {
    const [step, setStep] = useState(0);

    const steps = [
        { title: 'Declaración', desc: 'Se reserva un espacio en memoria RAM con un tipo específico (int) y un nombre (edad).' },
        { title: 'Asignación', desc: 'El valor (20) viaja hacia el espacio reservado para esa variable en memoria.' },
        { title: 'Almacenamiento', desc: 'El dato queda almacenado en la RAM y puede ser consultado usando su nombre.' }
    ];

    return (
        <div style={{ padding: '2.5rem 3rem', background: 'rgba(20,20,20,0.8)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <h3 style={{ color: '#00d4ff', marginBottom: '0.5rem' }}>Simulación: Variables en Memoria</h3>
            <p style={{ color: 'var(--text-grey)', marginBottom: '2rem', fontSize: '0.9rem', height: '40px' }}>
                {steps[step].desc}
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', flexWrap: 'nowrap', minHeight: '200px', width: '100%', overflow: 'visible', padding: '1.5rem 0', position: 'relative' }}>
                
                {/* Código de origen */}
                <div style={{ padding: '1rem', background: '#111', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', fontFamily: 'monospace', fontSize: '1.2rem', color: '#fff' }}>
                    <span style={{ color: '#c678dd' }}>int</span> <span style={{ color: '#e06c75' }}>edad</span> {step >= 1 && <span style={{ color: '#56b6c2' }}>=</span>} {step >= 1 && <span style={{ color: '#d19a66' }}>20</span>};
                </div>

                {/* Flecha animada */}
                {step >= 1 ? (
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 60, opacity: 1 }}
                        style={{ height: '3px', background: '#00d4ff', flexShrink: 0, position: 'relative' }}
                    >
                        <motion.div 
                            initial={{ x: 0, opacity: 1 }}
                            animate={step === 1 ? { x: 50, opacity: 0 } : { x: 50, opacity: 0 }}
                            transition={{ repeat: Infinity, duration: 1 }}
                            style={{ position: 'absolute', top: '-10px', left: '0', background: '#00d4ff', color: '#000', padding: '2px 6px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}
                        >
                            20
                        </motion.div>
                    </motion.div>
                ) : (
                    <div style={{ width: '60px', flexShrink: 0 }} />
                )}

                {/* Memoria RAM (Caja) */}
                <div style={{ width: '200px', height: '150px', border: '2px dashed rgba(255,255,255,0.2)', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <span style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', color: 'var(--text-grey)', fontSize: '0.8rem', letterSpacing: '2px' }}>MEMORIA RAM</span>
                    
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={step >= 0 ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                        style={{ 
                            width: '120px', 
                            height: '80px', 
                            background: step >= 2 ? 'rgba(0, 212, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)', 
                            border: `2px solid ${step >= 2 ? '#00d4ff' : 'rgba(255,255,255,0.2)'}`, 
                            borderRadius: '8px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: step >= 2 ? '0 0 20px rgba(0, 212, 255, 0.4)' : 'none',
                            transition: 'all 0.5s ease'
                        }}
                    >
                        <span style={{ color: '#e06c75', fontSize: '0.9rem', marginBottom: '8px', fontWeight: 'bold' }}>edad (int)</span>
                        
                        <AnimatePresence>
                            {step >= 2 && (
                                <motion.span
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    style={{ color: '#d19a66', fontSize: '1.5rem', fontWeight: 'bold' }}
                                >
                                    20
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>

            </div>

            <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                <button 
                    onClick={() => setStep(Math.max(0, step - 1))}
                    disabled={step === 0}
                    style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', cursor: step === 0 ? 'not-allowed' : 'pointer', opacity: step === 0 ? 0.5 : 1 }}
                >
                    Atrás
                </button>
                <button 
                    onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
                    disabled={step === steps.length - 1}
                    style={{ background: '#00d4ff', color: '#000', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', cursor: step === steps.length - 1 ? 'not-allowed' : 'pointer', fontWeight: 'bold', opacity: step === steps.length - 1 ? 0.5 : 1 }}
                >
                    Siguiente Paso
                </button>
                
                {step === steps.length - 1 && (
                    <button 
                        onClick={() => setStep(0)}
                        style={{ background: 'transparent', color: '#00d4ff', border: '1px solid #00d4ff', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer' }}
                    >
                        Reiniciar
                    </button>
                )}
            </div>
        </div>
    );
}
