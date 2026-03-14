import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function JavaMethodFlowSim() {
    const [step, setStep] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    // Sequence of steps:
    // 0: start at main line 1
    // 1: main line 2 (call method)
    // 2: jump to method line 1
    // 3: method line 2 (return)
    // 4: back to main line 2 (assign value)
    // 5: main line 3 (print)
    // 6: end

    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setStep(prev => {
                    if (prev >= 6) {
                        setIsPlaying(false);
                        return prev;
                    }
                    return prev + 1;
                });
            }, 1800);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    return (
        <div style={{ padding: '2.5rem 2rem', background: 'rgba(20,20,20,0.8)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <h3 style={{ color: '#00d4ff', marginBottom: '0.5rem' }}>El Salto de Ejecución</h3>
            <p style={{ color: 'var(--text-grey)', marginBottom: '2rem', fontSize: '0.9rem', height: '40px' }}>
                {step === 0 && 'Iniciando en el bloque principal (main).'}
                {step === 1 && 'El código encuentra una llamada a un Método. ¡Prepárate para saltar!'}
                {step === 2 && 'El hilo de CPU viaja en memoria hacia la ubicación del Método asilado.'}
                {step === 3 && 'El Método hace su trabajo y prepara un valor de Retorno (return).'}
                {step === 4 && 'El CPU "regresa en el tiempo" a la línea original, depositando allí la respuesta.'}
                {step === 5 && 'El código principal reanuda su bajada vertical estándar hacia el final.'}
                {step === 6 && 'El hilo de ejecución ha finalizado exitosamente.'}
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', minHeight: '300px' }}>
                
                {/* Main Method Panel */}
                <div style={{ position: 'relative', background: '#111', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'left', fontFamily: 'monospace', fontSize: '1rem', color: '#e5e7eb', width: '320px', zIndex: 2 }}>
                    <div style={{ color: '#5c6370', marginBottom: '0.5rem' }}>// Archivo Principal</div>
                    <div style={{ color: '#c678dd', marginBottom: '1rem' }}>public static void main(...) {'{'}</div>
                    
                    <div style={{ position: 'relative', paddingLeft: '1.5rem', margin: '0.5rem 0' }}>
                        {step === 0 && <motion.div layoutId="cpu-thread" style={{ position: 'absolute', left: 0, top: '4px', width: '10px', height: '10px', borderRadius: '50%', background: '#00d4ff', boxShadow: '0 0 10px #00d4ff' }} />}
                        <span style={{ color: '#c678dd' }}>int</span> a = <span style={{ color: '#d19a66' }}>5</span>;
                    </div>

                    <div style={{ position: 'relative', paddingLeft: '1.5rem', margin: '0.5rem 0', background: (step === 1 || step === 4) ? 'rgba(0, 212, 255, 0.1)' : 'transparent', borderRadius: '4px' }}>
                        {(step === 1 || step === 4) && <motion.div layoutId="cpu-thread" style={{ position: 'absolute', left: 0, top: '4px', width: '10px', height: '10px', borderRadius: '50%', background: '#00d4ff', boxShadow: '0 0 10px #00d4ff' }} />}
                        <span style={{ color: '#c678dd' }}>int</span> b = <span style={{ color: '#61afef', fontWeight: step === 1 ? 'bold' : 'normal' }}>duplicar</span>(a);
                        
                        <AnimatePresence>
                            {step === 4 && (
                                <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} style={{ position: 'absolute', right: '10px', color: '#f39c12', fontWeight: 'bold' }}>
                                    ← Recibe: 10
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </div>

                    <div style={{ position: 'relative', paddingLeft: '1.5rem', margin: '0.5rem 0' }}>
                        {step === 5 && <motion.div layoutId="cpu-thread" style={{ position: 'absolute', left: 0, top: '4px', width: '10px', height: '10px', borderRadius: '50%', background: '#00d4ff', boxShadow: '0 0 10px #00d4ff' }} />}
                        <span style={{ color: '#56b6c2' }}>System</span>.out.println(b);
                    </div>

                    <div style={{ position: 'relative', paddingLeft: '1.5rem', margin: '0.5rem 0' }}>
                        {step === 6 && <motion.div layoutId="cpu-thread" style={{ position: 'absolute', left: 0, top: '4px', width: '10px', height: '10px', borderRadius: '50%', background: '#e74c3c', boxShadow: '0 0 10px #e74c3c' }} />}
                        <span style={{ color: '#5c6370' }}>// Fin del programa</span>
                    </div>

                    <div style={{ color: '#c678dd', marginTop: '1rem' }}>{'}'}</div>
                </div>

                {/* Arrow / Connector */}
                <div style={{ width: '60px', height: '100px', position: 'relative' }}>
                    <AnimatePresence>
                        {step >= 2 && step <= 3 && (
                            <motion.svg initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} width="100%" height="100%" style={{ position: 'absolute', top: '-15px', left: 0, zIndex: 1 }}>
                                <path d="M 0 50 Q 30 20 60 50" fill="none" stroke="#27ae60" strokeWidth="3" strokeDasharray="5,5" />
                                <polygon points="60 50, 50 45, 50 55" fill="#27ae60" />
                            </motion.svg>
                        )}
                        {step === 4 && (
                            <motion.svg initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
                                <path d="M 60 50 Q 30 80 0 50" fill="none" stroke="#f39c12" strokeWidth="3" strokeDasharray="5,5" />
                                <polygon points="0 50, 10 45, 10 55" fill="#f39c12" />
                            </motion.svg>
                        )}
                    </AnimatePresence>
                </div>

                {/* External Method Panel */}
                <div style={{ position: 'relative', background: '#111', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'left', fontFamily: 'monospace', fontSize: '1rem', color: '#e5e7eb', width: '320px', opacity: (step >= 2 && step <= 4) ? 1 : 0.4, transition: 'opacity 0.3s', zIndex: 2 }}>
                    <div style={{ color: '#27ae60', marginBottom: '0.5rem' }}>// Módulo Externo</div>
                    <div style={{ color: '#c678dd', marginBottom: '1rem' }}>
                        public static <span style={{ color: '#e06c75' }}>int</span> <span style={{ color: '#61afef' }}>duplicar</span>(<span style={{ color: '#e06c75' }}>int</span> <span style={{ color: '#d19a66' }}>num</span>) {'{'}
                    </div>
                    
                    <div style={{ position: 'relative', paddingLeft: '1.5rem', margin: '0.5rem 0', background: step === 2 ? 'rgba(39, 174, 96, 0.1)' : 'transparent', borderRadius: '4px' }}>
                        {step === 2 && <motion.div layoutId="cpu-thread" style={{ position: 'absolute', left: 0, top: '4px', width: '10px', height: '10px', borderRadius: '50%', background: '#27ae60', boxShadow: '0 0 10px #27ae60' }} />}
                        <span style={{ color: '#c678dd' }}>int</span> calc = num * <span style={{ color: '#d19a66' }}>2</span>;
                    </div>

                    <div style={{ position: 'relative', paddingLeft: '1.5rem', margin: '0.5rem 0', background: step === 3 ? 'rgba(243, 156, 18, 0.1)' : 'transparent', borderRadius: '4px' }}>
                        {step === 3 && <motion.div layoutId="cpu-thread" style={{ position: 'absolute', left: 0, top: '4px', width: '10px', height: '10px', borderRadius: '50%', background: '#f39c12', boxShadow: '0 0 10px #f39c12' }} />}
                        <span style={{ color: '#c678dd' }}>return</span> calc;
                    </div>

                    <div style={{ color: '#c678dd', marginTop: '1rem' }}>{'}'}</div>
                </div>

            </div>

            <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                {!isPlaying && step < 6 && (
                    <button 
                        onClick={() => setIsPlaying(true)}
                        style={{ background: '#00d4ff', color: '#000', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                        {step === 0 ? 'Iniciar Animación' : 'Continuar Flujo'}
                    </button>
                )}
                
                {isPlaying && (
                    <button 
                        onClick={() => setIsPlaying(false)}
                        style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: 'pointer' }}
                    >
                        Pausar
                    </button>
                )}

                {(step > 0 || isPlaying) && (
                    <button 
                        onClick={() => { setIsPlaying(false); setStep(0); }}
                        style={{ background: 'transparent', color: '#e74c3c', border: '1px solid #e74c3c', padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: 'pointer' }}
                    >
                        Reiniciar
                    </button>
                )}
            </div>
        </div>
    );
}
