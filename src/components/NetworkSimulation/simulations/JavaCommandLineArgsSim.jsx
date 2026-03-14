import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function JavaCommandLineArgsSim() {
    const [step, setStep] = useState(0);

    const steps = [
        { title: '1. Comando Terminal', desc: 'Escribimos "java" para invocar la JVM, seguido del nombre de la clase compilada, y luego añadimos nuestros datos separados por espacios.' },
        { title: '2. Recepción en args[]', desc: 'La JVM milagrosamente agarra todo el texto, lo pica usando los espacios vacíos, y crea un arreglo de Strings inyectándolo en "args".' },
        { title: '3. Extracción de Datos', desc: 'Nos metemos al arreglo args para sacar el texto "12" referenciando la posición/índice [0] y luego la [1].' },
        { title: '4. Parseo a Matemáticas', desc: 'Como "12" es texto, sumar "12"+"8" daría "128" (concatenación). Usamos Integer.parseInt() para traducir el texto al número matemático real 12 y 8.' },
        { title: '5. Ejecución Metódica', desc: 'Llamamos a nuestro método utilitario aislado enviándole clones matemáticos (Paso por Valor) para que sume y devuelva el gran total.' }
    ];

    return (
        <div style={{ padding: '2.5rem 2rem', background: 'rgba(20,20,20,0.8)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <h3 style={{ color: '#00d4ff', marginBottom: '0.5rem' }}>Simulador: Inyección por Línea de Comandos (CLI)</h3>
            <p style={{ color: 'var(--text-grey)', marginBottom: '2rem', fontSize: '0.9rem', height: '40px' }}>
                {steps[step].desc}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', minHeight: '340px' }}>
                
                {/* Terminal Falsa */}
                <div style={{ background: '#000', padding: '1.5rem', borderRadius: '8px', border: '1px solid #333', textAlign: 'left', fontFamily: 'monospace', fontSize: '1.2rem', color: '#00ff00', width: '100%', maxWidth: '600px', boxShadow: 'inset 0 0 10px rgba(0,255,0,0.1)' }}>
                    <span>C:\Usuario\Proyectos&gt; </span>
                    <span style={{ color: '#fff' }}>java CalculadoraArgs</span>
                    
                    {/* Inyección visual */}
                    <motion.span 
                        animate={{ background: (step === 0 || step === 1) ? 'rgba(255, 255, 255, 0.2)' : 'transparent', color: (step === 1 || step === 2) ? '#f39c12' : '#fff' }}
                        style={{ padding: '0 0.5rem', borderRadius: '4px', marginLeft: '0.5rem' }}
                    >
                        12
                    </motion.span>
                    
                    <motion.span 
                        animate={{ background: (step === 0 || step === 1) ? 'rgba(255, 255, 255, 0.2)' : 'transparent', color: (step === 1 || step === 2) ? '#00d4ff' : '#fff' }}
                        style={{ padding: '0 0.5rem', borderRadius: '4px' }}
                    >
                        8
                    </motion.span>
                    
                    <motion.span animate={{ opacity: [0, 1] }} transition={{ repeat: Infinity }} style={{ fontWeight: 'bold' }}>_</motion.span>
                </div>

                {/* Código Híbrido Visual */}
                <div style={{ background: '#111', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'left', fontFamily: 'monospace', fontSize: '1rem', color: '#e5e7eb', width: '100%', maxWidth: '600px', position: 'relative' }}>
                    
                    {/* Visualización inyección a firma args */}
                    <div style={{ position: 'relative', margin: '0.5rem 0', background: step === 1 ? 'rgba(198, 120, 221, 0.1)' : 'transparent', borderLeft: step === 1 ? '4px solid #c678dd' : '4px solid transparent', paddingLeft: '0.5rem' }}>
                        public static void main(String[] <span style={{ color: step === 1 ? '#c678dd' : '#61afef', fontWeight: step === 1 ? 'bold' : 'normal' }}>args</span>) {'{'}
                        
                        <AnimatePresence>
                            {(step === 1 || step === 2) && (
                                <motion.div 
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{ position: 'absolute', right: '10px', top: '-15px', background: 'rgba(0,0,0,0.8)', border: '1px solid #c678dd', padding: '0.2rem 0.5rem', borderRadius: '4px', color: '#fff', fontSize: '0.8rem', display: 'flex', gap: '0.5rem' }}
                                >
                                    <span>args = </span>
                                    <span>[ <span style={{ color: '#f39c12' }}>"12"</span>, <span style={{ color: '#00d4ff' }}>"8"</span> ]</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div style={{ paddingLeft: '2rem', margin: '0.5rem 0', position: 'relative', opacity: step >= 2 ? 1 : 0.3, background: step === 2 || step === 3 ? 'rgba(243, 156, 18, 0.1)' : 'transparent', borderLeft: step === 2 || step === 3 ? '4px solid #f39c12' : '4px solid transparent' }}>
                        <span style={{ color: '#c678dd' }}>int</span> n1 = Integer.parseInt( <span style={{ color: step === 2 ? '#f39c12' : '#e06c75', fontWeight: step === 2 ? 'bold' : 'normal' }}>args[0]</span> ); 
                        
                        <AnimatePresence>
                            {step === 3 && (
                                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#27ae60', fontSize: '0.8rem', fontWeight: 'bold', marginLeft: '1rem' }}>
                                    → Parseo: String "12" a int '12'
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </div>

                    <div style={{ paddingLeft: '2rem', margin: '0.5rem 0', position: 'relative', opacity: step >= 2 ? 1 : 0.3, background: step === 2 || step === 3 ? 'rgba(0, 212, 255, 0.1)' : 'transparent', borderLeft: step === 2 || step === 3 ? '4px solid #00d4ff' : '4px solid transparent' }}>
                        <span style={{ color: '#c678dd' }}>int</span> n2 = Integer.parseInt( <span style={{ color: step === 2 ? '#00d4ff' : '#e06c75', fontWeight: step === 2 ? 'bold' : 'normal' }}>args[1]</span> );
                        
                        <AnimatePresence>
                            {step === 3 && (
                                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#27ae60', fontSize: '0.8rem', fontWeight: 'bold', marginLeft: '1rem' }}>
                                    → Parseo: String "8" a int '8'
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </div>

                    <div style={{ paddingLeft: '2rem', margin: '0.5rem 0', opacity: step >= 4 ? 1 : 0.3, background: step === 4 ? 'rgba(39, 174, 96, 0.1)' : 'transparent', borderLeft: step === 4 ? '4px solid #27ae60' : '4px solid transparent' }}>
                        <span style={{ color: '#c678dd' }}>int</span> resul = <span style={{ color: '#61afef' }}>sumarValores</span>(n1, n2);
                    </div>

                    <div style={{ paddingLeft: '2rem', margin: '0.5rem 0', opacity: step >= 4 ? 1 : 0.3 }}>
                        <span style={{ color: '#56b6c2' }}>System</span>.out.println(resul);
                        
                        <AnimatePresence>
                            {step === 4 && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ color: '#00ff00', fontWeight: 'bold', marginTop: '0.5rem', background: '#000', padding: '0.5rem', borderRadius: '4px', border: '1px solid #333', display: 'inline-block' }}>
                                    &gt; Consola real imprime: 20
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div style={{ marginTop: '0.5rem' }}>{'}'}</div>
                </div>

            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                <button 
                    onClick={() => setStep(Math.max(0, step - 1))}
                    disabled={step === 0}
                    style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: step === 0 ? 'not-allowed' : 'pointer', opacity: step === 0 ? 0.5 : 1 }}
                >
                    Atrás
                </button>
                <button 
                    onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
                    disabled={step === steps.length - 1}
                    style={{ background: '#00d4ff', color: '#000', border: 'none', padding: '0.6rem 2rem', borderRadius: '8px', cursor: step === steps.length - 1 ? 'not-allowed' : 'pointer', fontWeight: 'bold', fontSize: '1rem', opacity: step === steps.length - 1 ? 0.5 : 1 }}
                >
                    Avanzar Ejecución JVM
                </button>
                
                {step === steps.length - 1 && (
                    <button 
                        onClick={() => setStep(0)}
                        style={{ background: 'transparent', color: '#e74c3c', border: '1px solid #e74c3c', padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: 'pointer' }}
                    >
                        Reiniciar
                    </button>
                )}
            </div>
        </div>
    );
}
