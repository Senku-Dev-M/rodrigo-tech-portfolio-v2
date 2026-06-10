import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function JavaArrayIterateSim() {
    const array = [8, 16, 32, 64];
    const [i, setI] = useState(-1);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setI(prev => {
                    if (prev >= array.length - 1) {
                        setIsPlaying(false);
                        return prev + 1; // Terminamos
                    }
                    return prev + 1;
                });
            }, 1200);
        }
        return () => clearInterval(interval);
    }, [isPlaying, array.length]);

    const handleRestart = () => {
        setIsPlaying(false);
        setI(-1); // Resetea fuera del arreglo
    };

    return (
        <div style={{ padding: '2.5rem 2rem', background: 'rgba(20,20,20,0.8)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <h3 style={{ color: '#FF5A1F', marginBottom: '0.5rem' }}>Recorriendo con un Ciclo FOR</h3>
            <p style={{ color: 'var(--text-grey)', marginBottom: '2rem', fontSize: '0.9rem', height: '40px' }}>
                El ciclo inicializa matemáticamente <code>i = 0</code>. Por cada repetición se lee el arreglo usando ese índice dinámico <code>datos[i]</code>.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3rem', flexWrap: 'wrap', minHeight: '220px' }}>
                
                {/* Código */}
                <div style={{ background: '#111', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'left', fontFamily: 'monospace', fontSize: '1rem', color: '#e5e7eb' }}>
                    <div>
                        <span style={{ color: '#FF8A5C' }}>int[]</span> <span style={{ color: '#e06c75' }}>datos</span> = {'{'}8, 16, 32, 64{'}'};
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <span style={{ color: '#FF8A5C' }}>for</span> (
                        <span style={{ color: '#FF5A1F' }}>int i = 0</span>; 
                        <span style={{ color: i < array.length ? '#27ae60' : '#e74c3c' }}> i &lt; datos.length</span>; 
                        <span style={{ color: '#e06c75' }}> i++</span>) {'{'}
                    </div>
                    <div style={{ paddingLeft: '2rem', margin: '0.8rem 0' }}>
                        <span style={{ color: '#56b6c2' }}>System</span>.out.println( <span style={{ color: '#e06c75' }}>datos[</span>
                        <motion.span 
                            key={`code-${i}`} 
                            initial={i >= 0 && i < array.length ? { scale: 1.5, color: '#FF8A5C' } : false} 
                            animate={{ scale: 1, color: '#FF5A1F' }} 
                            style={{ display: 'inline-block', fontWeight: 'bold' }}
                        >
                            {i >= 0 && i < array.length ? i : 'i'}
                        </motion.span>
                        <span style={{ color: '#e06c75' }}>]</span> );
                    </div>
                    <div>{'}'}</div>
                    
                    {/* Consola */}
                    <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.85rem', color: 'var(--text-grey)', position: 'relative' }}>
                        <span style={{ color: '#5c6370' }}>// Salida Consola:</span>
                        <div style={{ height: '60px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', marginTop: '4px' }}>
                            <AnimatePresence>
                                {[...Array(Math.max(0, Math.min(i + (isPlaying ? 1 : 0), array.length)))].map((_, index) => (
                                    <motion.div 
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        style={{ color: '#98c379' }}
                                    >
                                        &gt; Imprime el num {array[index]}
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Reloj y Arreglo */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                    
                    {/* Medidor variable i */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span style={{ color: 'var(--text-grey)', letterSpacing: '1px', fontSize: '0.85rem' }}>Iterador 'i':</span>
                        <div style={{ background: '#FF5A1F', color: '#000', padding: '0.5rem 1rem', borderRadius: '4px', fontWeight: 'bold', fontSize: '1.5rem', minWidth: '60px', textAlign: 'center' }}>
                            {i < 0 ? '?' : i}
                        </div>
                    </div>

                    {/* Array visual con puntero */}
                    <div style={{ display: 'flex', gap: '0.5rem', position: 'relative' }}>
                        {array.map((val, idx) => {
                            const isActive = i === idx;
                            return (
                                <div
                                    key={idx}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        position: 'relative',
                                        minWidth: '55px',
                                    }}
                                >
                                    <div style={{ fontSize: '0.75rem', color: isActive ? '#FF5A1F' : 'var(--text-grey)' }}>idx [{idx}]</div>
                                    <motion.div 
                                        animate={{ 
                                            background: isActive ? 'rgba(255, 90, 31, 0.2)' : 'rgba(255,255,255,0.05)',
                                            borderColor: isActive ? '#FF5A1F' : 'rgba(255,255,255,0.1)',
                                            scale: isActive ? 1.1 : 1
                                        }}
                                        style={{ 
                                            width: '55px', height: '55px', borderRadius: '8px', border: '2px solid',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: '1.1rem', fontWeight: 'bold', color: '#fff',
                                            boxShadow: isActive ? '0 0 15px rgba(255,90,31,0.3)' : 'none'
                                        }}
                                    >
                                        {val}
                                    </motion.div>
                                    
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div 
                                                key="pointer"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0 }}
                                                style={{
                                                    position: 'absolute',
                                                    bottom: '-25px',
                                                    left: '50%',
                                                    transform: 'translateX(-50%)',
                                                    color: '#FF5A1F',
                                                    fontSize: '1.2rem',
                                                }}
                                            >
                                                ↑
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>

            <div style={{ marginTop: '3.5rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                {!isPlaying && i < array.length && (
                    <button 
                        onClick={() => setIsPlaying(true)}
                        style={{ background: '#FF5A1F', color: '#000', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                        {i === -1 ? 'Iniciar FOR' : 'Continuar Loop'}
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

                {(i > -1 || isPlaying) && (
                    <button 
                        onClick={handleRestart}
                        style={{ background: 'transparent', color: '#e74c3c', border: '1px solid #e74c3c', padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: 'pointer' }}
                    >
                        Reiniciar
                    </button>
                )}
            </div>
        </div>
    );
}

