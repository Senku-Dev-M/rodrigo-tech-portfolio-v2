import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function JavaForEachSim() {
    const array = [10, 25, 50, 80, 100];
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setCurrentIndex(prev => {
                    if (prev >= array.length - 1) {
                        setIsPlaying(false);
                        return prev + 1; // Terminamos
                    }
                    return prev + 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isPlaying, array.length]);

    const handleRestart = () => {
        setIsPlaying(false);
        setCurrentIndex(-1);
    };

    return (
        <div style={{ padding: '2.5rem 2rem', background: 'rgba(20,20,20,0.8)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <h3 style={{ color: '#FF5A1F', marginBottom: '0.5rem' }}>Iterando con For-Each</h3>
            <p style={{ color: 'var(--text-grey)', marginBottom: '2rem', fontSize: '0.9rem', height: '40px' }}>
                En cada repetición, la variable <code>num</code> toma mágicamente el valor del siguiente elemento del arreglo, de izquierda a derecha sin necesidad de usar un contador manual.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', minHeight: '220px' }}>
                
                {/* Código */}
                <div style={{ background: '#111', padding: '1rem 2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'left', fontFamily: 'monospace', fontSize: '1.1rem', color: '#e5e7eb' }}>
                    <div>
                        <span style={{ color: '#FF8A5C' }}>int[]</span> <span style={{ color: '#e06c75' }}>numeros</span> = {'{'}10, 25, 50, 80, 100{'}'};
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <span style={{ color: '#FF8A5C' }}>for</span> (<span style={{ color: '#FF8A5C' }}>int</span> <span style={{ color: '#FF5A1F' }}>num</span> : <span style={{ color: '#e06c75' }}>numeros</span>) {'{'}
                    </div>
                    <div style={{ paddingLeft: '2rem', margin: '0.5rem 0' }}>
                        <span style={{ color: '#56b6c2' }}>System</span>.out.println(
                        <motion.span 
                            key={currentIndex} 
                            initial={currentIndex >= 0 && currentIndex < array.length ? { scale: 1.5, color: '#FF8A5C' } : false} 
                            animate={{ scale: 1, color: '#FF5A1F' }} 
                            style={{ display: 'inline-block' }}
                        >
                            num
                        </motion.span>
                        );
                    </div>
                    <div>{'}'}</div>
                </div>

                {/* Arreglo Visual */}
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', position: 'relative' }}>
                    {array.map((val, idx) => {
                        const isActive = currentIndex === idx;
                        const isPast = currentIndex > idx;
                        
                        return (
                            <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                                <motion.div 
                                    animate={{ 
                                        y: isActive ? -10 : 0,
                                        background: isActive ? 'rgba(255, 90, 31, 0.2)' : isPast ? 'rgba(39, 174, 96, 0.1)' : 'rgba(255,255,255,0.05)',
                                        borderColor: isActive ? '#FF5A1F' : isPast ? '#27ae60' : 'rgba(255,255,255,0.1)',
                                        scale: isActive ? 1.1 : 1
                                    }}
                                    style={{ 
                                        width: '60px', 
                                        height: '60px', 
                                        borderRadius: '8px', 
                                        border: '2px solid',
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center',
                                        fontSize: '1.2rem',
                                        fontWeight: 'bold',
                                        color: isActive ? '#FF5A1F' : isPast ? '#27ae60' : '#fff',
                                        boxShadow: isActive ? '0 0 15px rgba(255,90,31,0.3)' : 'none'
                                    }}
                                >
                                    {val}
                                </motion.div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-grey)' }}>índice [{idx}]</div>
                                
                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div 
                                            key="label"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            style={{ position: 'absolute', bottom: '-30px', color: '#FF5A1F', fontSize: '0.8rem', fontWeight: 'bold' }}
                                        >
                                            num = {val}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

            </div>

            <div style={{ marginTop: '3.5rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                {!isPlaying && currentIndex < array.length && (
                    <button 
                        onClick={() => setIsPlaying(true)}
                        style={{ background: '#FF5A1F', color: '#000', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                        {currentIndex === -1 ? 'Iniciar Recorrido' : 'Continuar Recorrido'}
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

                {(currentIndex > -1 || isPlaying) && (
                    <button 
                        onClick={handleRestart}
                        style={{ background: 'transparent', color: '#e74c3c', border: '1px solid #e74c3c', padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: 'pointer' }}
                    >
                        Reiniciar Arreglo
                    </button>
                )}
            </div>
        </div>
    );
}

