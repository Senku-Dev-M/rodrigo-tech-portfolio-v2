import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function JavaReferenceSim() {
    const [step, setStep] = useState(0);

    const steps = [
        { title: 'Tipos Primitivos', desc: 'Los tipos primitivos (como int, double) almacenan su valor DIRECTAMENTE en la memoria.' },
        { title: 'Tipos de Referencia', desc: 'Los objetos (como String) almacenan una DIRECCIÓN que apunta a otra zona de la memoria (el Heap).' },
        { title: 'El Puntero (Referencia)', desc: 'La variable realmente guarda la dirección (Ej. 0x1A4) donde vive el objeto complejo.' }
    ];

    return (
        <div style={{ padding: '2.5rem 2rem', background: 'rgba(20,20,20,0.8)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <h3 style={{ color: '#00d4ff', marginBottom: '0.5rem' }}>Primitivos vs Referencias</h3>
            <p style={{ color: 'var(--text-grey)', marginBottom: '2rem', fontSize: '0.9rem', height: '40px' }}>
                {steps[step].desc}
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '4rem', flexWrap: 'wrap', minHeight: '220px', width: '100%' }}>
                
                {/* ZONA STACK (Primitivos y Referencias) */}
                <div style={{ width: '220px', padding: '1.5rem', border: '2px solid rgba(255,255,255,0.1)', borderRadius: '12px', background: 'rgba(0,0,0,0.4)', position: 'relative' }}>
                    <h4 style={{ color: '#fff', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem' }}>Memoria Stack</h4>
                    
                    {/* Variable Primitiva */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                        <span style={{ color: '#e06c75', fontFamily: 'monospace' }}>int a</span>
                        <motion.div 
                            initial={false}
                            animate={{ 
                                borderColor: step === 0 ? '#00d4ff' : 'rgba(255,255,255,0.2)',
                                boxShadow: step === 0 ? '0 0 15px rgba(0,212,255,0.3)' : 'none'
                            }}
                            style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', border: '2px solid', color: '#d19a66', fontWeight: 'bold' }}
                        >
                            10
                        </motion.div>
                    </div>

                    {/* Variable Referencia */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
                        <span style={{ color: '#e06c75', fontFamily: 'monospace' }}>String s</span>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: step >= 1 ? 1 : 0.3 }}
                            style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', border: step >= 1 ? '2px solid #c678dd' : '2px solid rgba(255,255,255,0.2)', color: '#c678dd', fontSize: '0.8rem', width: '70px', textAlign: 'center' }}
                        >
                            {step >= 2 ? '0x1A4' : '(ref)'}
                        </motion.div>

                        {/* Flecha apuntadora */}
                        {step >= 1 && (
                            <motion.svg 
                                initial={{ opacity: 0, pathLength: 0 }}
                                animate={{ opacity: 1, pathLength: 1 }}
                                transition={{ duration: 0.8 }}
                                style={{ position: 'absolute', right: '-120px', top: '15px', width: '120px', height: '100px', overflow: 'visible', zIndex: 10 }}
                            >
                                <defs>
                                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="#c678dd" />
                                    </marker>
                                </defs>
                                <motion.path 
                                    d="M 0 0 Q 60 0, 100 40" 
                                    fill="transparent" 
                                    stroke="#c678dd" 
                                    strokeWidth="3" 
                                    strokeDasharray="5,5"
                                    markerEnd="url(#arrowhead)" 
                                />
                            </motion.svg>
                        )}
                    </div>
                </div>

                {/* ZONA HEAP (Objetos) */}
                <div style={{ width: '220px', padding: '1.5rem', border: '2px solid rgba(255,255,255,0.1)', borderRadius: '12px', background: 'rgba(0,0,0,0.4)', position: 'relative', opacity: step >= 1 ? 1 : 0.3, transition: 'opacity 0.5s' }}>
                    <h4 style={{ color: '#fff', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem' }}>Memoria Heap</h4>
                    
                    <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: step >= 1 ? 1 : 0 }}
                        style={{ marginTop: '2.5rem', padding: '1rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '8px', border: '2px dashed #c678dd', textAlign: 'center' }}
                    >
                        <span style={{ fontSize: '0.7rem', color: '#c678dd', display: 'block', marginBottom: '0.5rem' }}>Dir: 0x1A4</span>
                        <span style={{ color: '#98c379', fontSize: '1.2rem', fontWeight: 'bold' }}>"Hola"</span>
                    </motion.div>
                </div>

            </div>

            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
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
