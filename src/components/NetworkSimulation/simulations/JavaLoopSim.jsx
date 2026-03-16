import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function JavaLoopSim() {
    const [i, setI] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const maxIterations = 5;

    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setI(prev => {
                    if (prev >= maxIterations - 1) {
                        setIsPlaying(false);
                        return prev + 1; // Reaches 5 and stops
                    }
                    return prev + 1;
                });
            }, 1200); // 1.2s per iteration for visual pacing
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    const handleRestart = () => {
        setIsPlaying(false);
        setI(0);
    };

    return (
        <div style={{ padding: '2.5rem 2rem', background: 'rgba(20,20,20,0.8)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <h3 style={{ color: '#00d4ff', marginBottom: '0.5rem' }}>Simulación: Ciclo for en Acción</h3>
            <p style={{ color: 'var(--text-grey)', marginBottom: '2rem', fontSize: '0.9rem', height: '40px' }}>
                Observa cómo la variable iteradora <code>i</code> aumenta su valor hasta que la condición se vuelve falsa.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3rem', flexWrap: 'wrap', minHeight: '220px' }}>
                
                {/* Panel de Código en vivo */}
                <div style={{ background: '#111', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'left', fontFamily: 'monospace', fontSize: '1.1rem', color: '#e5e7eb' }}>
                    <div>
                        <span style={{ color: '#67e8f9' }}>for</span> (
                        <span style={{ color: '#00d4ff' }}>int i = 0</span>; 
                        <span style={{ color: i < maxIterations ? '#27ae60' : '#e74c3c', fontWeight: i === maxIterations ? 'bold' : 'normal' }}> i &lt; 5</span>; 
                        <span style={{ color: '#e06c75' }}> i++</span>) {'{'}
                    </div>
                    <div style={{ paddingLeft: '2rem', margin: '0.8rem 0' }}>
                        <span style={{ color: '#56b6c2' }}>System</span>.out.println(
                        <motion.span 
                            key={i} 
                            initial={{ scale: 1.5, color: '#38bdf8' }} 
                            animate={{ scale: 1, color: '#98c379' }} 
                            style={{ display: 'inline-block' }}
                        >
                            "Iteración " + i
                        </motion.span>
                        );
                    </div>
                    <div>{'}'}</div>
                    
                    {/* Consola Virtual Simulada */}
                    <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.85rem', color: 'var(--text-grey)' }}>
                        <span style={{ color: '#5c6370' }}>// Salida en consola:</span>
                        <div style={{ height: '80px', overflowY: 'hidden', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                            <AnimatePresence>
                                {[...Array(Math.min(i + (isPlaying ? 1 : 0), maxIterations))].map((_, index) => (
                                    <motion.div 
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        style={{ color: '#98c379' }}
                                    >
                                        &gt; Iteración {index}
                                    </motion.div>
                                ))}
                                {i >= maxIterations && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#e74c3c', marginTop: '4px' }}>
                                        [Proceso Finalizado]
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Visualizador de Variables */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(0, 212, 255, 0.05)', border: `4px solid ${i < maxIterations ? '#00d4ff' : '#e74c3c'}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: i < maxIterations ? '0 0 20px rgba(0,212,255,0.2)' : 'none', transition: 'all 0.4s' }}>
                        <span style={{ color: 'var(--text-grey)', fontSize: '0.9rem', marginBottom: '4px' }}>Valor de i</span>
                        <motion.span 
                            key={`val-${i}`}
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            style={{ color: '#fff', fontSize: '2.5rem', fontWeight: 'bold' }}
                        >
                            {i}
                        </motion.span>
                    </div>
                    <div style={{ textAlign: 'center', fontSize: '0.85rem' }}>
                        Estado de Condición:<br/>
                        <strong style={{ color: i < maxIterations ? '#27ae60' : '#e74c3c' }}>
                            {i} &lt; 5 es {i < maxIterations ? 'TRUE' : 'FALSE'}
                        </strong>
                    </div>
                </div>

            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                {!isPlaying && i < maxIterations && (
                    <button 
                        onClick={() => setIsPlaying(true)}
                        style={{ background: '#00d4ff', color: '#000', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                        ▶ Ejecutar Loop Automático
                    </button>
                )}
                
                {isPlaying && (
                    <button 
                        onClick={() => setIsPlaying(false)}
                        style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: 'pointer' }}
                    >
                        ⏸ Pausar Animación
                    </button>
                )}

                {(i > 0 || isPlaying) && (
                    <button 
                        onClick={handleRestart}
                        style={{ background: 'transparent', color: '#e74c3c', border: '1px solid #e74c3c', padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: 'pointer' }}
                    >
                        ↻ Reiniciar
                    </button>
                )}
            </div>
        </div>
    );
}

