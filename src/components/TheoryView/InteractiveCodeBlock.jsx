import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InteractiveCodeBlock({ code, explanations }) {
    const [activeLine, setActiveLine] = useState(null);
    const lines = code.split('\n');

    const activeExplanation = explanations.find(e => e.line === activeLine);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'flex-start', marginTop: '1.5rem' }}>
            {/* Code Panel */}
            <div style={{ flex: '1.6 1 450px', background: '#111827', borderRadius: '12px', padding: '1.25rem', border: '1px solid rgba(255,255,255,0.05)', overflowX: 'auto', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.85rem', lineHeight: '1.6' }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
                </div>
                {lines.map((line, idx) => {
                    const lineNum = idx + 1;
                    const hasExplanation = explanations.some(e => e.line === lineNum);
                    const isActive = activeLine === lineNum;
                    
                    return (
                        <div 
                            key={idx} 
                            onMouseEnter={() => hasExplanation && setActiveLine(lineNum)}
                            onMouseLeave={() => setActiveLine(null)}
                            style={{ 
                                display: 'flex', 
                                whiteSpace: 'pre-wrap', 
                                wordBreak: 'break-word',
                                padding: '0.15rem 0.5rem',
                                borderRadius: '4px',
                                cursor: hasExplanation ? 'help' : 'default',
                                background: isActive ? 'rgba(0, 212, 255, 0.1)' : 'transparent',
                                borderLeft: isActive ? '2px solid #00d4ff' : '2px solid transparent',
                                transition: 'all 0.2s',
                                color: isActive ? '#00d4ff' : '#e5e7eb'
                            }}
                        >
                            <span style={{ color: '#4b5563', marginRight: '1rem', userSelect: 'none', width: '20px', textAlign: 'right' }}>{lineNum}</span>
                            <span>{line}</span>
                        </div>
                    );
                })}
            </div>

            {/* Explanation Panel */}
            <div style={{ flex: '1 1 280px', background: 'rgba(255,255,255,0.02)', padding: '1.25rem', borderRadius: '12px', border: '1px dashed rgba(255,255,255,0.15)', minHeight: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <AnimatePresence mode="wait">
                    {activeExplanation ? (
                        <motion.div
                            key={activeLine}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <h4 style={{ color: '#00d4ff', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ background: 'rgba(0,212,255,0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem' }}>Línea {activeLine}</span>
                            </h4>
                            <p style={{ color: '#d1d5db', lineHeight: '1.6', fontSize: '0.95rem' }}>{activeExplanation.text}</p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <p style={{ color: '#6b7280', textAlign: 'center', fontStyle: 'italic' }}>
                                Pasa el cursor sobre el código para ver la explicación línea por línea.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
