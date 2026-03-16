import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function JavaCompilationSim() {
    const [step, setStep] = useState(0);

    const steps = [
        { title: 'Source Code', desc: 'Escribes el código en HolaMundo.java' },
        { title: 'Compiler (javac)', desc: 'javac compila el texto a Bytecode' },
        { title: 'Bytecode', desc: 'Se genera HolaMundo.class (Instrucciones universales)' },
        { title: 'JVM', desc: 'La Máquina Virtual de Java interpreta el Bytecode' },
        { title: 'OS Execution', desc: 'Se ejecuta en Windows/Mac/Linux' }
    ];

    return (
        <div style={{ padding: '2.5rem 3rem', background: 'rgba(20,20,20,0.8)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <h3 style={{ color: '#00d4ff', marginBottom: '0.5rem' }}>El Ciclo de Vida del Código Java</h3>
            <p style={{ color: 'var(--text-grey)', marginBottom: '2rem', fontSize: '0.9rem' }}>
                {steps[step].desc}
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', flexWrap: 'nowrap', minHeight: '140px', width: '100%', overflowX: 'auto', padding: '1rem 0' }}>
                <AnimatePresence mode="popLayout">
                    {step >= 0 && (
                        <motion.div
                            key="source"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            style={{ width: '65px', height: '75px', background: '#2c3e50', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', border: step === 0 ? '2px solid #00d4ff' : '1px solid transparent', flexShrink: 0 }}
                        >
                            <span style={{ fontSize: '1.7rem' }}>📄</span>
                            <span style={{ fontSize: '0.8rem', color: '#fff', marginTop: '6px', fontWeight: 'bold' }}>.java</span>
                        </motion.div>
                    )}

                    {step >= 1 && (
                        <motion.div
                            key="arrow1"
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 60, opacity: 1 }}
                            style={{ height: '3px', background: '#00d4ff', flexShrink: 0 }}
                        />
                    )}

                    {step >= 1 && (
                        <motion.div
                            key="compiler"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            style={{ width: '65px', height: '75px', background: '#38bdf8', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', border: step === 1 ? '2px solid #00d4ff' : '1px solid transparent', flexShrink: 0 }}
                        >
                            <span style={{ fontSize: '1.7rem' }}>⚙️</span>
                            <span style={{ fontSize: '0.8rem', color: '#fff', marginTop: '6px', fontWeight: 'bold' }}>javac</span>
                        </motion.div>
                    )}

                    {step >= 2 && (
                        <motion.div
                            key="arrow2"
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 60, opacity: 1 }}
                            style={{ height: '3px', background: '#00d4ff', flexShrink: 0 }}
                        />
                    )}

                    {step >= 2 && (
                        <motion.div
                            key="bytecode"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            style={{ width: '55px', height: '65px', background: '#8e44ad', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', border: step === 2 ? '2px solid #00d4ff' : '1px solid transparent', flexShrink: 0 }}
                        >
                            <span style={{ fontSize: '1.5rem' }}>🧩</span>
                            <span style={{ fontSize: '0.8rem', color: '#fff', marginTop: '6px', fontWeight: 'bold' }}>.class</span>
                        </motion.div>
                    )}

                    {step >= 3 && (
                        <motion.div
                            key="arrow3"
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 60, opacity: 1 }}
                            style={{ height: '3px', background: '#00d4ff', flexShrink: 0 }}
                        />
                    )}

                    {step >= 3 && (
                        <motion.div
                            key="jvm"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            style={{ width: '65px', height: '75px', background: '#c0392b', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', border: step === 3 ? '2px solid #00d4ff' : '1px solid transparent', flexShrink: 0 }}
                        >
                            <span style={{ fontSize: '1.7rem' }}>☕</span>
                            <span style={{ fontSize: '0.8rem', color: '#fff', marginTop: '6px', fontWeight: 'bold' }}>JVM</span>
                        </motion.div>
                    )}

                    {step >= 4 && (
                        <motion.div
                            key="arrow4"
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 60, opacity: 1 }}
                            style={{ height: '3px', background: '#00d4ff', flexShrink: 0 }}
                        />
                    )}

                    {step >= 4 && (
                        <motion.div
                            key="os"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            style={{ width: '65px', height: '75px', background: '#27ae60', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', border: step === 4 ? '2px solid #00d4ff' : '1px solid transparent', flexShrink: 0 }}
                        >
                            <span style={{ fontSize: '1.7rem' }}>💻</span>
                            <span style={{ fontSize: '0.8rem', color: '#fff', marginTop: '6px', fontWeight: 'bold' }}>OS</span>
                        </motion.div>
                    )}
                </AnimatePresence>
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

