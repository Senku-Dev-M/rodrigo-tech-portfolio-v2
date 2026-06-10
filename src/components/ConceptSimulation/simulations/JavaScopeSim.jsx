import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useCompactSimulationLayout from '../useCompactSimulationLayout';

export default function JavaScopeSim() {
    const [activeBlock, setActiveBlock] = useState('main');
    const [hoverVar, setHoverVar] = useState(null);
    const isCompact = useCompactSimulationLayout();

    const vars = {
        global: { name: 'numero', val: 10, declaredIn: 'main', accessibleIn: ['main', 'if'] },
        local: { name: 'temporal', val: 20, declaredIn: 'if', accessibleIn: ['if'] },
        external: { name: 'otro', val: 50, declaredIn: 'method', accessibleIn: ['method'] },
    };

    const isAccessible = (varKey, blockKey) => vars[varKey].accessibleIn.includes(blockKey);

    const selectVar = (varKey) => setHoverVar((current) => (current === varKey ? null : varKey));
    const activeVar = hoverVar ? vars[hoverVar] : null;

    return (
        <div
            style={{
                padding: isCompact ? '1.25rem 0.95rem' : '2.5rem 2rem',
                background: 'rgba(20,20,20,0.8)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center',
            }}
        >
            <h3 style={{ color: '#FF5A1F', marginBottom: '0.5rem' }}>Ambito de variable (scope)</h3>
            <p
                style={{
                    color: 'var(--text-grey)',
                    marginBottom: '1.4rem',
                    fontSize: isCompact ? '0.84rem' : '0.9rem',
                    lineHeight: 1.5,
                }}
            >
                Toca una variable para comprobar en que bloque vive y desde que zonas del codigo se puede leer.
            </p>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: isCompact ? '1fr' : 'minmax(0, 1.45fr) minmax(220px, 0.82fr)',
                    gap: isCompact ? '0.9rem' : '1.1rem',
                    alignItems: 'stretch',
                }}
            >
                <div
                    style={{
                        background: '#111',
                        padding: isCompact ? '0.9rem' : '1.25rem',
                        borderRadius: '8px',
                        border: '1px solid rgba(255,255,255,0.05)',
                        textAlign: 'left',
                        fontFamily: 'monospace',
                        fontSize: isCompact ? '0.82rem' : '0.98rem',
                        color: '#e5e7eb',
                        overflow: 'hidden',
                    }}
                >
                    <motion.div
                        onHoverStart={() => setActiveBlock('main')}
                        onClick={() => setActiveBlock('main')}
                        animate={{
                            background: activeBlock === 'main' ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                            borderLeft: activeBlock === 'main' ? '4px solid #FF8A5C' : '4px solid transparent',
                        }}
                        style={{ padding: '0.5rem', borderRadius: '0 6px 6px 0' }}
                    >
                        <div style={{ color: '#FF8A5C' }}>public static void main() {'{'}</div>

                        <div
                            onMouseEnter={() => setHoverVar('global')}
                            onClick={() => selectVar('global')}
                            style={{
                                paddingLeft: isCompact ? '1rem' : '1.4rem',
                                margin: '0.45rem 0',
                                cursor: 'pointer',
                                background: hoverVar === 'global' ? 'rgba(255, 90, 31, 0.2)' : 'transparent',
                                borderRadius: '4px',
                                borderLeft: hoverVar === 'global' ? '2px solid #FF5A1F' : '2px solid transparent',
                            }}
                        >
                            <span style={{ color: '#FF8A5C' }}>int</span> <span style={{ color: '#FF5A1F', fontWeight: 'bold' }}>numero</span> = <span style={{ color: '#d19a66' }}>10</span>;
                        </div>

                        <motion.div
                            onHoverStart={() => setActiveBlock('if')}
                            onHoverEnd={() => setActiveBlock('main')}
                            onClick={() => setActiveBlock((current) => (current === 'if' ? 'main' : 'if'))}
                            animate={{
                                background: activeBlock === 'if' ? 'rgba(39, 174, 96, 0.1)' : 'transparent',
                                borderLeft: activeBlock === 'if' ? '4px solid #27ae60' : '4px solid rgba(255,255,255,0.1)',
                            }}
                            style={{
                                marginLeft: isCompact ? '0.75rem' : '1.25rem',
                                padding: '0.5rem',
                                borderRadius: '0 6px 6px 0',
                                marginTop: '0.8rem',
                                marginBottom: '0.8rem',
                            }}
                        >
                            <div style={{ color: '#FF8A5C' }}>if (numero &gt; 5) {'{'}</div>

                            <div
                                onMouseEnter={() => setHoverVar('local')}
                                onClick={() => selectVar('local')}
                                style={{
                                    paddingLeft: isCompact ? '1rem' : '1.4rem',
                                    margin: '0.45rem 0',
                                    cursor: 'pointer',
                                    background: hoverVar === 'local' ? 'rgba(39, 174, 96, 0.28)' : 'transparent',
                                    borderRadius: '4px',
                                    borderLeft: hoverVar === 'local' ? '2px solid #27ae60' : '2px solid transparent',
                                }}
                            >
                                <span style={{ color: '#FF8A5C' }}>int</span> <span style={{ color: '#27ae60', fontWeight: 'bold' }}>temporal</span> = <span style={{ color: '#d19a66' }}>20</span>;
                            </div>

                            <div style={{ paddingLeft: isCompact ? '1rem' : '1.4rem', margin: '0.35rem 0', opacity: 0.6 }}>
                                System.out.println(numero); // OK
                            </div>
                            <div style={{ paddingLeft: isCompact ? '1rem' : '1.4rem', margin: '0.35rem 0', opacity: 0.6 }}>
                                System.out.println(temporal); // OK
                            </div>

                            <div style={{ color: '#FF8A5C' }}>{'}'} <span style={{ color: '#5c6370', fontSize: '0.82em' }}>// temporal muere aqui</span></div>
                        </motion.div>

                        <div style={{ paddingLeft: isCompact ? '1rem' : '1.4rem', margin: '0.45rem 0', overflowWrap: 'anywhere' }}>
                            <span style={{ opacity: 0.6 }}>System.out.println(numero); // OK</span>
                            <br />
                            <span style={{ color: '#e74c3c', textDecoration: 'line-through' }}>System.out.println(temporal);</span>{' '}
                            <span style={{ color: '#e74c3c' }}>// ERROR</span>
                        </div>

                        <div style={{ color: '#FF8A5C' }}>{'}'} <span style={{ color: '#5c6370', fontSize: '0.82em' }}>// numero muere aqui</span></div>
                    </motion.div>

                    <motion.div
                        onHoverStart={() => setActiveBlock('method')}
                        onClick={() => setActiveBlock('method')}
                        animate={{
                            background: activeBlock === 'method' ? 'rgba(255, 138, 92, 0.1)' : 'transparent',
                            borderLeft: activeBlock === 'method' ? '4px solid #FF8A5C' : '4px solid transparent',
                        }}
                        style={{
                            padding: '0.5rem',
                            borderRadius: '0 6px 6px 0',
                            marginTop: '1rem',
                            borderTop: '1px dashed rgba(255,255,255,0.1)',
                        }}
                    >
                        <div style={{ color: '#FF8A5C' }}>public static void aislar() {'{'}</div>

                        <div
                            onMouseEnter={() => setHoverVar('external')}
                            onClick={() => selectVar('external')}
                            style={{
                                paddingLeft: isCompact ? '1rem' : '1.4rem',
                                margin: '0.45rem 0',
                                cursor: 'pointer',
                                background: hoverVar === 'external' ? 'rgba(255, 138, 92, 0.2)' : 'transparent',
                                borderRadius: '4px',
                                borderLeft: hoverVar === 'external' ? '2px solid #FF8A5C' : '2px solid transparent',
                            }}
                        >
                            <span style={{ color: '#FF8A5C' }}>int</span> <span style={{ color: '#FF8A5C', fontWeight: 'bold' }}>otro</span> = <span style={{ color: '#d19a66' }}>50</span>;
                        </div>

                        <div style={{ paddingLeft: isCompact ? '1rem' : '1.4rem', margin: '0.45rem 0', overflowWrap: 'anywhere' }}>
                            <span style={{ color: '#e74c3c', textDecoration: 'line-through' }}>System.out.println(numero);</span>{' '}
                            <span style={{ color: '#e74c3c' }}>// ERROR</span>
                        </div>

                        <div style={{ color: '#FF8A5C' }}>{'}'}</div>
                    </motion.div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <div
                        style={{
                            background: 'rgba(255,255,255,0.02)',
                            padding: isCompact ? '1rem' : '1.2rem',
                            borderRadius: '8px',
                            border: '1px dashed rgba(255,255,255,0.1)',
                        }}
                    >
                        <h4 style={{ margin: 0, color: 'var(--text-grey)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                            Bloque actual
                        </h4>
                        <div
                            style={{
                                fontSize: isCompact ? '1.35rem' : '1.55rem',
                                fontWeight: 'bold',
                                color: activeBlock === 'main' ? '#FF8A5C' : activeBlock === 'if' ? '#27ae60' : '#FF8A5C',
                                marginTop: '0.45rem',
                                textTransform: 'uppercase',
                            }}
                        >
                            {activeBlock}
                        </div>
                    </div>

                    <div
                        style={{
                            background: 'rgba(255,255,255,0.02)',
                            padding: isCompact ? '1rem' : '1.2rem',
                            borderRadius: '8px',
                            border: '1px dashed rgba(255,255,255,0.1)',
                            minHeight: isCompact ? 'auto' : '220px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        {!activeVar ? (
                            <div style={{ color: 'var(--text-grey)', fontSize: isCompact ? '0.88rem' : '0.94rem', fontStyle: 'italic', lineHeight: 1.55 }}>
                                Toca una variable para comprobar si el bloque actual puede leerla.
                            </div>
                        ) : (
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`${activeBlock}-${hoverVar}`}
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', alignItems: 'stretch', textAlign: 'left' }}
                                >
                                    <div
                                        style={{
                                            fontSize: isCompact ? '1.05rem' : '1.25rem',
                                            fontWeight: 'bold',
                                            color: isAccessible(hoverVar, activeBlock) ? '#27ae60' : '#e74c3c',
                                            textAlign: 'center',
                                        }}
                                    >
                                        {isAccessible(hoverVar, activeBlock) ? 'Accesible' : 'Inaccesible'}
                                    </div>
                                    <p style={{ margin: 0, fontSize: isCompact ? '0.84rem' : '0.9rem', color: '#e5e7eb', lineHeight: 1.6 }}>
                                        La variable <strong style={{ color: hoverVar === 'global' ? '#FF5A1F' : hoverVar === 'local' ? '#27ae60' : '#FF8A5C' }}>{activeVar.name}</strong>{' '}
                                        fue creada en <strong>{activeVar.declaredIn}</strong>.
                                        {isAccessible(hoverVar, activeBlock)
                                            ? ` Como el bloque ${activeBlock} esta dentro de su alcance, puedes leer el valor ${activeVar.val}.`
                                            : ` El bloque ${activeBlock} queda fuera de su alcance, asi que Java marcaria error de variable no encontrada.`}
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
