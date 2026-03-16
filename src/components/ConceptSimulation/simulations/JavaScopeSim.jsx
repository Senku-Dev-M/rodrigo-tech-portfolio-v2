import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function JavaScopeSim() {
    const [activeBlock, setActiveBlock] = useState('main'); // 'main', 'if', 'method'
    const [hoverVar, setHoverVar] = useState(null); // 'global', 'local', 'external'

    const vars = {
        global: { name: 'numero', val: 10, declaredIn: 'main', accessibleIn: ['main', 'if'] },
        local: { name: 'temporal', val: 20, declaredIn: 'if', accessibleIn: ['if'] },
        external: { name: 'otro', val: 50, declaredIn: 'method', accessibleIn: ['method'] }
    };

    const isAccessible = (varKey, blockKey) => {
        return vars[varKey].accessibleIn.includes(blockKey);
    };

    return (
        <div style={{ padding: '2.5rem 2rem', background: 'rgba(20,20,20,0.8)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <h3 style={{ color: '#00d4ff', marginBottom: '0.5rem' }}>Ámbito de Variable (Scope)</h3>
            <p style={{ color: 'var(--text-grey)', marginBottom: '2rem', fontSize: '0.9rem' }}>
                Selecciona la variable para ver en qué bloques de las llaves {'{ }'} puede sobrevivir. El hilo de ejecución actual finge estar parado en el fondo iluminado.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', minHeight: '340px' }}>
                
                {/* Visualizador de Código con Bloques */}
                <div style={{ background: '#111', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'left', fontFamily: 'monospace', fontSize: '1rem', color: '#e5e7eb', position: 'relative' }}>
                    
                    {/* Bloque MAIN */}
                    <motion.div 
                        onHoverStart={() => setActiveBlock('main')}
                        animate={{ background: activeBlock === 'main' ? 'rgba(255, 255, 255, 0.05)' : 'transparent', borderLeft: activeBlock === 'main' ? '4px solid #67e8f9' : '4px solid transparent' }}
                        style={{ padding: '0.5rem', borderRadius: '0 4px 4px 0', transition: 'background 0.3s' }}
                    >
                        <div style={{ color: '#67e8f9' }}>public static void main() {'{'}</div>
                        
                        <div 
                            onMouseEnter={() => setHoverVar('global')} onMouseLeave={() => setHoverVar(null)}
                            style={{ paddingLeft: '1.5rem', margin: '0.5rem 0', cursor: 'pointer', background: hoverVar === 'global' ? 'rgba(0, 212, 255, 0.2)' : 'transparent', borderRadius: '4px', borderLeft: isAccessible('global', activeBlock) && hoverVar==='global' ? '2px solid #00d4ff' : '2px solid transparent' }}
                        >
                            <span style={{ color: '#67e8f9' }}>int</span> <span style={{ color: '#00d4ff', fontWeight: 'bold' }}>numero</span> = <span style={{ color: '#d19a66' }}>10</span>;
                        </div>

                        {/* Bloque IF */}
                        <motion.div 
                            onHoverStart={(e) => { e.stopPropagation(); setActiveBlock('if'); }}
                            onHoverEnd={() => setActiveBlock('main')}
                            animate={{ background: activeBlock === 'if' ? 'rgba(39, 174, 96, 0.1)' : 'transparent', borderLeft: activeBlock === 'if' ? '4px solid #27ae60' : '4px solid rgba(255,255,255,0.1)' }}
                            style={{ marginLeft: '1.5rem', padding: '0.5rem', borderRadius: '0 4px 4px 0', marginTop: '1rem', marginBottom: '1rem' }}
                        >
                            <div style={{ color: '#67e8f9' }}>if (numero &gt; 5) {'{'}</div>
                            
                            <div 
                                onMouseEnter={(e) => { setHoverVar('local'); }} onMouseLeave={() => setHoverVar(null)}
                                style={{ paddingLeft: '1.5rem', margin: '0.5rem 0', cursor: 'pointer', background: hoverVar === 'local' ? 'rgba(39, 174, 96, 0.3)' : 'transparent', borderRadius: '4px', borderLeft: isAccessible('local', activeBlock) && hoverVar==='local' ? '2px solid #27ae60' : '2px solid transparent' }}
                            >
                                <span style={{ color: '#67e8f9' }}>int</span> <span style={{ color: '#27ae60', fontWeight: 'bold' }}>temporal</span> = <span style={{ color: '#d19a66' }}>20</span>;
                            </div>

                            <div style={{ paddingLeft: '1.5rem', margin: '0.5rem 0', opacity: 0.5 }}>System.out.println(numero); // OK</div>
                            <div style={{ paddingLeft: '1.5rem', margin: '0.5rem 0', opacity: 0.5 }}>System.out.println(temporal); // OK</div>

                            <div style={{ color: '#67e8f9' }}>{'}'} <span style={{ color: '#5c6370', fontSize: '0.8rem' }}>// 'temporal' muere aquí</span></div>
                        </motion.div>

                        <div style={{ paddingLeft: '1.5rem', margin: '0.5rem 0', position: 'relative' }}>
                            <span style={{ opacity: 0.5 }}>System.out.println(numero); // OK</span><br/>
                            <span style={{ color: '#e74c3c', textDecoration: 'line-through' }}>System.out.println(temporal);</span> <span style={{ color: '#e74c3c' }}>// ERROR!</span>
                        </div>

                        <div style={{ color: '#67e8f9' }}>{'}'} <span style={{ color: '#5c6370', fontSize: '0.8rem' }}>// 'numero' muere aquí</span></div>
                    </motion.div>

                    {/* Bloque EXTERNO */}
                    <motion.div 
                        onHoverStart={() => setActiveBlock('method')}
                        animate={{ background: activeBlock === 'method' ? 'rgba(56, 189, 248, 0.1)' : 'transparent', borderLeft: activeBlock === 'method' ? '4px solid #38bdf8' : '4px solid transparent' }}
                        style={{ padding: '0.5rem', borderRadius: '0 4px 4px 0', marginTop: '1.5rem', borderTop: '1px dashed rgba(255,255,255,0.1)' }}
                    >
                        <div style={{ color: '#67e8f9' }}>public static void aislar() {'{'}</div>
                        
                        <div 
                            onMouseEnter={() => setHoverVar('external')} onMouseLeave={() => setHoverVar(null)}
                            style={{ paddingLeft: '1.5rem', margin: '0.5rem 0', cursor: 'pointer', background: hoverVar === 'external' ? 'rgba(56, 189, 248, 0.2)' : 'transparent', borderRadius: '4px', borderLeft: isAccessible('external', activeBlock) && hoverVar==='external' ? '2px solid #38bdf8' : '2px solid transparent' }}
                        >
                            <span style={{ color: '#67e8f9' }}>int</span> <span style={{ color: '#38bdf8', fontWeight: 'bold' }}>otro</span> = <span style={{ color: '#d19a66' }}>50</span>;
                        </div>

                        <div style={{ paddingLeft: '1.5rem', margin: '0.5rem 0' }}>
                            <span style={{ color: '#e74c3c', textDecoration: 'line-through' }}>System.out.println(numero);</span> <span style={{ color: '#e74c3c' }}>// ERROR! Ni idea quién es</span>
                        </div>

                        <div style={{ color: '#67e8f9' }}>{'}'}</div>
                    </motion.div>

                </div>

                {/* Status Box Lateral */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '8px', border: '1px dashed rgba(255,255,255,0.1)' }}>
                        <h4 style={{ margin: 0, color: 'var(--text-grey)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Bloque Actual</h4>
                        <div style={{ fontSize: '1.6rem', fontWeight: 'bold', color: activeBlock === 'main' ? '#67e8f9' : activeBlock === 'if' ? '#27ae60' : '#38bdf8', marginTop: '0.5rem', textTransform: 'uppercase' }}>
                            {activeBlock}
                        </div>
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '8px', border: '1px dashed rgba(255,255,255,0.1)', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        {!hoverVar ? (
                            <div style={{ color: 'var(--text-grey)', fontSize: '0.95rem', fontStyle: 'italic' }}>
                                Pasa el mouse sobre las variables creadas (`numero`, `temporal`, `otro`) para probar si el bloque actual ({activeBlock}) tiene permiso para leerlas.
                            </div>
                        ) : (
                            <AnimatePresence mode="wait">
                                <motion.div 
                                    key={`${activeBlock}-${hoverVar}`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}
                                >
                                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: isAccessible(hoverVar, activeBlock) ? '#27ae60' : '#e74c3c' }}>
                                        {isAccessible(hoverVar, activeBlock) ? '✅ ACCESIBLE' : '❌ INACCESIBLE'}
                                    </div>
                                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#e5e7eb' }}>
                                        La variable <strong style={{ color: hoverVar === 'global' ? '#00d4ff' : hoverVar === 'local' ? '#27ae60' : '#38bdf8' }}>{vars[hoverVar].name}</strong>
                                        {' '}fue creada en el bloque <strong>'{vars[hoverVar].declaredIn}'</strong>. 
                                        {isAccessible(hoverVar, activeBlock) 
                                            ? ` Como estamos en el bloque '${activeBlock}' que está dentro de su jurisdicción, podemos leer su valor (${vars[hoverVar].val}).` 
                                            : ` El bloque actual '${activeBlock}' está fuera de su jurisdicción (las llaves donde nació ya se cerraron, o son de otro mundo). El compilador lanzará error de "Variable no encontrada".`}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}

