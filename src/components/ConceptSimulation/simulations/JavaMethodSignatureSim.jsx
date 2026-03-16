import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function JavaMethodSignatureSim() {
    const [hoveredPart, setHoveredPart] = useState(null);

    const signatureParts = {
        modifier: { label: 'Modificador de Acceso', color: '#67e8f9', desc: 'Define quién puede "ver" y ejecutar este método. "public" significa que cualquier parte del proyecto puede llamarlo. "static" significa que pertenece a la clase globalmente.' },
        returnType: { label: 'Tipo de Retorno', color: '#e06c75', desc: 'La promesa matemática del método. En este caso "int", promete que pase lo que pase adentro, devolverá como respuesta un número entero crudo al terminal que lo invocó. ("void" si no devuelve nada).' },
        name: { label: 'Nombre Identificador', color: '#61afef', desc: 'Así bautizamos al método para invocarlo desde otras partes del código. Sigue reglas cainelCase (minúscula inicial).' },
        params: { label: 'Parámetros (Input)', color: '#d19a66', desc: 'Variables "vacías" de recepción. El método enlista qué tipo exacto de datos necesita que le entreguen como materia prima para poder funcionar de puertas para adentro.' }
    };

    return (
        <div style={{ padding: '2.5rem 2rem', background: 'rgba(20,20,20,0.8)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <h3 style={{ color: '#00d4ff', marginBottom: '0.5rem' }}>Anatomía de la "Signature"</h3>
            <p style={{ color: 'var(--text-grey)', marginBottom: '2rem', fontSize: '0.9rem' }}>
                Pasa el mouse / presiona sobre cada bloque luminoso del código para comprender el protocolo estricto que requiere un Método.
            </p>

            <div style={{ background: '#111', padding: '3rem 2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', fontFamily: 'monospace', fontSize: '1.4rem', color: '#fff', position: 'relative', overflow: 'hidden' }}>
                
                {/* Method Signature Blocks */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', position: 'relative', zIndex: 2 }}>
                    
                    <motion.div 
                        onHoverStart={() => setHoveredPart('modifier')}
                        onHoverEnd={() => setHoveredPart(null)}
                        style={{ cursor: 'pointer', padding: '0.2rem 0.5rem', borderRadius: '4px', background: hoveredPart === 'modifier' ? 'rgba(103, 232, 249, 0.2)' : 'transparent', color: '#67e8f9', borderBottom: hoveredPart === 'modifier' ? '2px solid #67e8f9' : '2px solid transparent' }}
                    >
                        public static
                    </motion.div>

                    <motion.div 
                        onHoverStart={() => setHoveredPart('returnType')}
                        onHoverEnd={() => setHoveredPart(null)}
                        style={{ cursor: 'pointer', padding: '0.2rem 0.5rem', borderRadius: '4px', background: hoveredPart === 'returnType' ? 'rgba(224, 108, 117, 0.2)' : 'transparent', color: '#e06c75', borderBottom: hoveredPart === 'returnType' ? '2px solid #e06c75' : '2px solid transparent' }}
                    >
                        int
                    </motion.div>

                    <motion.div 
                        onHoverStart={() => setHoveredPart('name')}
                        onHoverEnd={() => setHoveredPart(null)}
                        style={{ cursor: 'pointer', padding: '0.2rem 0.5rem', borderRadius: '4px', background: hoveredPart === 'name' ? 'rgba(97, 175, 239, 0.2)' : 'transparent', color: '#61afef', borderBottom: hoveredPart === 'name' ? '2px solid #61afef' : '2px solid transparent' }}
                    >
                        sumarNumeros
                    </motion.div>

                    <div style={{ padding: '0.2rem 0' }}>(</div>

                    <motion.div 
                        onHoverStart={() => setHoveredPart('params')}
                        onHoverEnd={() => setHoveredPart(null)}
                        style={{ cursor: 'pointer', padding: '0.2rem 0.5rem', borderRadius: '4px', background: hoveredPart === 'params' ? 'rgba(209, 154, 102, 0.2)' : 'transparent', color: '#d19a66', borderBottom: hoveredPart === 'params' ? '2px solid #d19a66' : '2px solid transparent' }}
                    >
                        int a, int b
                    </motion.div>

                    <div style={{ padding: '0.2rem 0' }}>) {'{'}</div>

                </div>
                
                <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: '1rem', marginTop: '1rem' }}>
                    // ... bloque de lógica interna ...
                </div>
                <div style={{ color: '#fff', marginTop: '0.5rem' }}>
                    {'}'}
                </div>

                {/* Info Display Overlay */}
                <AnimatePresence>
                    {hoveredPart && (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            exit={{ opacity: 0, y: 10 }}
                            style={{ position: 'absolute', bottom: '1rem', left: '2rem', right: '2rem', background: 'rgba(0,0,0,0.85)', padding: '1rem', borderRadius: '8px', borderLeft: `4px solid ${signatureParts[hoveredPart].color}`, zIndex: 10 }}
                        >
                            <h4 style={{ color: signatureParts[hoveredPart].color, marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                                {signatureParts[hoveredPart].label}
                            </h4>
                            <p style={{ color: '#e5e7eb', fontSize: '0.9rem', lineHeight: '1.5', textAlign: 'left', margin: 0 }}>
                                {signatureParts[hoveredPart].desc}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    );
}

