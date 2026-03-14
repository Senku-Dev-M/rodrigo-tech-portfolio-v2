import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function JavaArrayMemorySim() {
    const defaultArray = [null, null, null, null, null];
    const initializedArray = [10, 20, 30, 40, 50];
    
    const [step, setStep] = useState(0);

    const steps = [
        { title: '1. Declaración Vacía', code: 'int[] numeros = new int[5];', desc: 'Java reserva un bloque de 5 espacios enteros contiguos en memoria, inicializados secretamente en ceros o nulos.' },
        { title: '2. Inicialización Directa', code: 'int[] numeros = { 10, 20, 30, 40, 50 };', desc: 'Podemos inyectar los valores directamente al nacer. Los índices se auto-asignan de izquierda a derecha (0 a 4).' },
        { title: '3. Acceso Lectura (GET)', code: 'int valor = numeros[2];', desc: 'Para leer el tercer vagón, le pedimos a Java que busque en el tren "numeros" la posición exacta del Índice [2].' },
        { title: '4. Acceso Escritura (SET)', code: 'numeros[0] = 99;', desc: 'De forma similar, apuntamos a un índice existente (ej. el Cero) e inyectamos un nuevo valor directo en esa celda.' }
    ];

    const currentArray = step === 0 ? defaultArray : step === 3 ? [99, 20, 30, 40, 50] : initializedArray;
    
    // Highlight states
    const activeIndex = step === 2 ? 2 : step === 3 ? 0 : null;

    return (
        <div style={{ padding: '2.5rem 2rem', background: 'rgba(20,20,20,0.8)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <h3 style={{ color: '#00d4ff', marginBottom: '0.5rem' }}>Simulación: Arreglos en Memoria</h3>
            <p style={{ color: 'var(--text-grey)', marginBottom: '1.5rem', fontSize: '0.9rem', height: '40px' }}>
                {steps[step].desc}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', minHeight: '200px' }}>
                
                {/* Código */}
                <div style={{ background: '#111', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', fontFamily: 'monospace', fontSize: '1.1rem', color: '#fff', minWidth: '350px' }}>
                    {step === 0 && <><span style={{ color: '#c678dd' }}>int</span><span style={{ color: '#e06c75' }}>[]</span> numeros = <span style={{ color: '#c678dd' }}>new int</span>[<span style={{ color: '#d19a66' }}>5</span>];</>}
                    {step === 1 && <><span style={{ color: '#c678dd' }}>int</span><span style={{ color: '#e06c75' }}>[]</span> numeros = {'{'} <span style={{ color: '#d19a66' }}>10, 20, 30, 40, 50</span> {'}'};</>}
                    {step === 2 && <><span style={{ color: '#c678dd' }}>int</span> valor = numeros[<span style={{ color: '#00d4ff', fontWeight: 'bold' }}>2</span>]; // Extrae 30</>}
                    {step === 3 && <>numeros[<span style={{ color: '#e74c3c', fontWeight: 'bold' }}>0</span>] = <span style={{ color: '#e74c3c' }}>99</span>;</>}
                </div>

                {/* Arreglo Visual (El Tren) */}
                <div style={{ display: 'flex', gap: '0', background: 'rgba(0,0,0,0.4)', padding: '0.5rem', borderRadius: '12px', border: '1px dashed rgba(255,255,255,0.1)', position: 'relative' }}>
                    {currentArray.map((val, idx) => {
                        const isHighlight = activeIndex === idx;
                        
                        return (
                            <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <motion.div 
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ 
                                        scale: isHighlight ? 1.1 : 1, 
                                        opacity: 1,
                                        y: isHighlight ? -10 : 0,
                                        background: isHighlight ? (step === 2 ? 'rgba(0, 212, 255, 0.2)' : 'rgba(231, 76, 60, 0.2)') : 'rgba(255,255,255,0.05)',
                                        borderColor: isHighlight ? (step === 2 ? '#00d4ff' : '#e74c3c') : 'rgba(255,255,255,0.1)'
                                    }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                    style={{ 
                                        width: '60px', 
                                        height: '60px', 
                                        border: '2px solid',
                                        borderRightWidth: idx < currentArray.length - 1 ? '1px' : '2px',
                                        borderLeftWidth: idx > 0 ? '1px' : '2px',
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center',
                                        fontSize: '1.2rem',
                                        fontWeight: 'bold',
                                        color: val === null ? 'var(--text-grey)' : '#fff',
                                        boxShadow: isHighlight ? `0 0 15px ${step === 2 ? 'rgba(0,212,255,0.3)' : 'rgba(231,76,60,0.3)'}` : 'none',
                                        zIndex: isHighlight ? 10 : 1
                                    }}
                                >
                                    {val === null ? '0' : val}
                                </motion.div>
                                <div style={{ 
                                    marginTop: '0.5rem', 
                                    fontSize: '0.8rem', 
                                    color: isHighlight ? (step === 2 ? '#00d4ff' : '#e74c3c') : 'var(--text-grey)',
                                    fontWeight: isHighlight ? 'bold' : 'normal',
                                    transition: 'color 0.3s'
                                }}>
                                    idx [{idx}]
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
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
                    Siguiente Etapa
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
