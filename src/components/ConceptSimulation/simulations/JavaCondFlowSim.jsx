import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function JavaCondFlowSim() {
    const [step, setStep] = useState(0);

    const steps = [
        { title: 'Inicio', desc: 'El programa avanza linealmente hasta encontrar una estructura de decisión.' },
        { title: 'Evaluación', desc: 'Se evalúa la condición booleana. ¿Es verdadera o falsa?' },
        { title: 'Verdadero (True)', desc: 'Si es verdadera, el flujo se desvía y ejecuta las instrucciones dentro del bloque if.' },
        { title: 'Falso (False)', desc: 'Si es falsa, ignora el bloque if y continúa con el resto del programa.' }
    ];

    const isTruePath = step === 2;
    const isFalsePath = step === 3;

    return (
        <div style={{ padding: '2.5rem 2rem', background: 'rgba(20,20,20,0.8)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <h3 style={{ color: '#00d4ff', marginBottom: '0.5rem' }}>Estructura if-else</h3>
            <p style={{ color: 'var(--text-grey)', marginBottom: '2rem', fontSize: '0.9rem', height: '40px' }}>
                {steps[step].desc}
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '280px', position: 'relative', width: '100%' }}>
                
                {/* SVG Diagrama de Flujo */}
                <svg width="400" height="280" viewBox="0 0 400 280" style={{ overflow: 'visible' }}>
                    <defs>
                        <marker id="arrowCond" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#00d4ff" />
                        </marker>
                        <marker id="arrowCondOff" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="rgba(255,255,255,0.2)" />
                        </marker>
                    </defs>

                    {/* Línea Principal Top */}
                    <line x1="200" y1="0" x2="200" y2="50" stroke={step >= 0 ? '#00d4ff' : 'rgba(255,255,255,0.2)'} strokeWidth="3" markerEnd="url(#arrowCond)" />

                    {/* Rombo Condición */}
                    <motion.polygon 
                        initial={false}
                        animate={{ 
                            fill: step === 1 ? 'rgba(0, 212, 255, 0.2)' : 'rgba(255,255,255,0.05)',
                            stroke: step >= 1 ? '#00d4ff' : 'rgba(255,255,255,0.2)'
                        }}
                        points="200,50 260,95 200,140 140,95" 
                        strokeWidth="3"
                    />
                    <text x="200" y="100" fill="#fff" fontSize="12" textAnchor="middle" fontWeight="bold">¿Condición?</text>

                    {/* Ruta TRUE (Derecha) */}
                    <g opacity={step >= 1 ? 1 : 0.3}>
                        <motion.path 
                            animate={{ stroke: isTruePath ? '#27ae60' : 'rgba(255,255,255,0.2)' }}
                            d="M 260 95 L 320 95 L 320 140" fill="none" strokeWidth="3" markerEnd={isTruePath ? "url(#arrowCond)" : "url(#arrowCondOff)"} 
                        />
                        <text x="290" y="85" fill={isTruePath ? '#27ae60' : 'var(--text-grey)'} fontSize="12" fontWeight="bold">True</text>
                        
                        {/* Bloque de código True */}
                        <motion.rect 
                            animate={{ 
                                fill: isTruePath ? 'rgba(39, 174, 96, 0.2)' : 'rgba(255,255,255,0.05)',
                                stroke: isTruePath ? '#27ae60' : 'rgba(255,255,255,0.2)'
                            }}
                            x="270" y="140" width="100" height="50" rx="6" strokeWidth="2" 
                        />
                        <text x="320" y="170" fill={isTruePath ? '#fff' : 'var(--text-grey)'} fontSize="12" textAnchor="middle">Ejecutar IF</text>

                        {/* Retorno al flujo principal */}
                        <motion.path 
                            animate={{ stroke: isTruePath ? '#00d4ff' : 'rgba(255,255,255,0.2)' }}
                            d="M 320 190 L 320 220 L 205 220" fill="none" strokeWidth="3" markerEnd={isTruePath ? "url(#arrowCond)" : "url(#arrowCondOff)"} 
                        />
                    </g>

                    {/* Ruta FALSE (Abajo Directo) */}
                    <g opacity={step >= 1 ? 1 : 0.3}>
                        <motion.line 
                            animate={{ stroke: isFalsePath ? '#e74c3c' : 'rgba(255,255,255,0.2)' }}
                            x1="200" y1="140" x2="200" y2="215" strokeWidth="3" markerEnd={isFalsePath ? "url(#arrowCond)" : "url(#arrowCondOff)"} 
                        />
                        <text x="225" y="165" fill={isFalsePath ? '#e74c3c' : 'var(--text-grey)'} fontSize="12" fontWeight="bold">False</text>
                    </g>

                    {/* Línea Final Continuación */}
                    <line x1="200" y1="220" x2="200" y2="270" stroke={step >= 2 ? '#00d4ff' : 'rgba(255,255,255,0.2)'} strokeWidth="3" markerEnd="url(#arrowCond)" />
                    <text x="235" y="265" fill={step >= 2 ? '#fff' : 'var(--text-grey)'} fontSize="12">Continuar...</text>

                    {/* Partícula Animada de Flujo (Pill) */}
                    <AnimatePresence>
                        {step === 0 && (
                            <motion.circle initial={{ cy: 0 }} animate={{ cy: 45 }} transition={{ duration: 1, repeat: Infinity }} cx="200" r="6" fill="#00d4ff" />
                        )}
                        {step === 1 && (
                            <motion.circle initial={{ scale: 0 }} animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1, repeat: Infinity }} cx="200" cy="95" r="8" fill="#38bdf8" />
                        )}
                        {isTruePath && (
                            <motion.circle 
                                initial={{ cx: 200, cy: 95 }}
                                animate={{ cx: [200, 320, 320, 200], cy: [95, 95, 220, 220] }} 
                                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }} 
                                r="6" fill="#27ae60" 
                            />
                        )}
                        {isFalsePath && (
                            <motion.circle 
                                initial={{ cy: 140 }}
                                animate={{ cy: 260 }} 
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} 
                                cx="200" r="6" fill="#e74c3c" 
                            />
                        )}
                    </AnimatePresence>
                </svg>

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
                    onClick={() => setStep(step === 1 ? 2 : step === 2 ? 3 : step + 1)}
                    disabled={step === 3}
                    style={{ background: step === 1 ? '#27ae60' : step === 2 ? '#e74c3c' : '#00d4ff', color: step === 0 ? '#000' : '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', cursor: step === 3 ? 'not-allowed' : 'pointer', fontWeight: 'bold', opacity: step === 3 ? 0.5 : 1, transition: 'background 0.3s' }}
                >
                    {step === 0 ? 'Evaluar Condición' : step === 1 ? 'Simular TRUE' : step === 2 ? 'Simular FALSE' : 'Completado'}
                </button>
                
                {step === 3 && (
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

