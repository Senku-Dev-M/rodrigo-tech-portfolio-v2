import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function JavaParamPassSim() {
    const [step, setStep] = useState(0);

    const steps = [
        { title: '1. Variable Original', code: 'int precio = 100;', desc: 'En Main, creamos una celda de memoria real llamada "precio" con el valor 100.' },
        { title: '2. Invocación de Método', code: 'aplicarImpuesto(precio);', desc: 'Llamamos al método enviándole "precio". PERO Java no envía la celda real, sino que fotocopia el 100 y lo manda por cable.' },
        { title: '3. Parámetro Local', code: 'public static void aplicarImpuesto(int monto)', desc: 'El método receptor crea en su propia memoria una NUEVA variable llamada "monto" (parámetro) y guarda la fotocopia del 100.' },
        { title: '4. Mutación Aislada', code: 'monto = monto + 15;', desc: 'El método modifica su propia variable local "monto" sumando 15. Ahora la caja "monto" vale 115.' },
        { title: '5. Retorno al Main', code: 'System.out.println(precio); // Imprime 100', desc: 'A pesar del cambio, al regresar al código principal, nuestro "precio" original intacto sigue valiendo 100. ¡Paso por Valor!' }
    ];

    return (
        <div style={{ padding: '2.5rem 2rem', background: 'rgba(20,20,20,0.8)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <h3 style={{ color: '#00d4ff', marginBottom: '0.5rem' }}>Paso de Parámetros por Valor</h3>
            <p style={{ color: 'var(--text-grey)', marginBottom: '2rem', fontSize: '0.9rem', height: '40px' }}>
                {steps[step].desc}
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3rem', flexWrap: 'wrap', minHeight: '280px' }}>
                
                {/* Panel de Memoria Main */}
                <div style={{ background: 'rgba(0, 212, 255, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '2px dashed rgba(0, 212, 255, 0.2)', width: '220px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', opacity: (step >= 0 && step !== 3) ? 1 : 0.4, transition: 'opacity 0.3s' }}>
                    <div style={{ color: '#00d4ff', fontWeight: 'bold' }}>MAIN MEMORY</div>
                    <div style={{ fontSize: '0.85rem', color: '#e5e7eb', fontFamily: 'monospace' }}>
                        int precio;
                    </div>
                    
                    {/* Caja Variable */}
                    <div style={{ width: '80px', height: '80px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', color: '#fff', position: 'relative' }}>
                        100
                        <div style={{ position: 'absolute', bottom: '-25px', fontSize: '0.8rem', color: 'var(--text-grey)' }}>[Caja 1x]</div>
                    </div>
                </div>

                {/* Puente Animado de Clonación */}
                <div style={{ width: '120px', height: '100px', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    
                    {/* Cable */}
                    <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', position: 'absolute', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }} />

                    {/* Animación del viaje */}
                    <AnimatePresence>
                        {step === 1 && (
                            <motion.div 
                                initial={{ x: -60, scale: 0.8, opacity: 0 }}
                                animate={{ x: 60, scale: 1, opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity }}
                                style={{ position: 'absolute', zIndex: 10, background: '#f39c12', color: '#000', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', border: '2px solid #fff' }}
                            >
                                Clon(100) →
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Escudo Mutación */}
                    <AnimatePresence>
                        {step === 4 && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                style={{ zIndex: 5, background: 'rgba(231, 76, 60, 0.2)', padding: '0.4rem', borderRadius: '50%', border: '2px solid #e74c3c' }}
                            >
                                🛡️
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Panel de Memoria del Método Externo */}
                <div style={{ background: 'rgba(243, 156, 18, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '2px dashed rgba(243, 156, 18, 0.2)', width: '220px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', opacity: step >= 2 ? 1 : 0.2, transition: 'opacity 0.3s' }}>
                    <div style={{ color: '#f39c12', fontWeight: 'bold' }}>METHOD MEMORY</div>
                    <div style={{ fontSize: '0.85rem', color: '#e5e7eb', fontFamily: 'monospace' }}>
                        int monto;
                    </div>
                    
                    {/* Caja Variable Local Módulo */}
                    <div style={{ width: '80px', height: '80px', borderRadius: '8px', background: 'rgba(243, 156, 18, 0.1)', border: '2px solid #f39c12', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', color: step === 4 ? '#e74c3c' : '#fff', position: 'relative', boxShadow: step === 3 ? '0 0 20px rgba(243, 156, 18, 0.4)' : 'none' }}>
                        {step < 2 ? '?' : step < 3 ? '100' : '115'}
                        <div style={{ position: 'absolute', bottom: '-25px', fontSize: '0.8rem', color: '#f39c12' }}>[Caja 2y (Aislada)]</div>
                    </div>
                    <AnimatePresence>
                        {step === 3 && (
                            <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} style={{ color: '#e74c3c', fontSize: '0.85rem', fontWeight: 'bold' }}>
                                + 15 local mutation
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                <button 
                    onClick={() => setStep(Math.max(0, step - 1))}
                    disabled={step === 0}
                    style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: step === 0 ? 'not-allowed' : 'pointer', opacity: step === 0 ? 0.5 : 1 }}
                >
                    Retroceder
                </button>
                <button 
                    onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
                    disabled={step === steps.length - 1}
                    style={{ background: '#00d4ff', color: '#000', border: 'none', padding: '0.6rem 2rem', borderRadius: '8px', cursor: step === steps.length - 1 ? 'not-allowed' : 'pointer', fontWeight: 'bold', fontSize: '1rem', opacity: step === steps.length - 1 ? 0.5 : 1 }}
                >
                    Avanzar Flujo
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
            
            <div style={{ marginTop: '1.5rem', fontFamily: 'monospace', fontSize: '1.1rem', color: '#e5e7eb', background: '#111', padding: '1rem', borderRadius: '6px', display: 'inline-block', border: '1px solid rgba(255,255,255,0.05)' }}>
                {steps[step].code}
            </div>
        </div>
    );
}
