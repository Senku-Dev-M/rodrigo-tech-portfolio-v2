import { useState } from 'react';
import { motion } from 'framer-motion';

export default function JavaMatrixSim() {
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    
    // El state guarda [fila, columna] seleccionada. -1 si no hay selección.
    const [selectedCell, setSelectedCell] = useState([-1, -1]);

    return (
        <div style={{ padding: '2.5rem 2rem', background: 'rgba(20,20,20,0.8)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <h3 style={{ color: '#FF5A1F', marginBottom: '0.5rem' }}>Simulación: Matriz Bidimensional</h3>
            <p style={{ color: 'var(--text-grey)', marginBottom: '2rem', fontSize: '0.9rem', height: '40px' }}>
                Haz clic en cualquier celda para ver cómo acceder a ella programáticamente cruzando su fila y su columna.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4rem', flexWrap: 'wrap', minHeight: '260px' }}>
                
                {/* Cuadrícula Visual */}
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    
                    {/* Headers de Columnas (j) */}
                    <div style={{ display: 'flex', gap: '0.5rem', marginLeft: '50px' }}>
                        {matrix[0].map((_, colIdx) => (
                            <div key={`header-col-${colIdx}`} style={{ width: '60px', textAlign: 'center', color: '#FF8A5C', fontSize: '0.85rem', fontWeight: 'bold' }}>
                                Col [{colIdx}]
                            </div>
                        ))}
                    </div>

                    {matrix.map((row, rowIdx) => (
                        <div key={`row-${rowIdx}`} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                            {/* Header de Fila (i) */}
                            <div style={{ width: '45px', textAlign: 'right', color: '#FF8A5C', fontSize: '0.85rem', fontWeight: 'bold' }}>
                                Fila [{rowIdx}]
                            </div>

                            {/* Celdas de la fila */}
                            {row.map((val, colIdx) => {
                                const isSelected = selectedCell[0] === rowIdx && selectedCell[1] === colIdx;
                                const isSameRow = selectedCell[0] === rowIdx;
                                const isSameCol = selectedCell[1] === colIdx;

                                return (
                                    <motion.div 
                                        key={`cell-${rowIdx}-${colIdx}`}
                                        onClick={() => setSelectedCell([rowIdx, colIdx])}
                                        whileHover={{ scale: 1.05 }}
                                        animate={{ 
                                            background: isSelected ? 'rgba(255, 90, 31, 0.3)' : (isSameRow || isSameCol) ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
                                            borderColor: isSelected ? '#FF5A1F' : (isSameRow || isSameCol) ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
                                            scale: isSelected ? 1.1 : 1
                                        }}
                                        style={{ 
                                            width: '60px', 
                                            height: '60px', 
                                            borderRadius: '6px', 
                                            border: '2px solid',
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            justifyContent: 'center',
                                            fontSize: '1.2rem',
                                            fontWeight: 'bold',
                                            color: isSelected ? '#fff' : 'var(--text-grey)',
                                            boxShadow: isSelected ? '0 0 15px rgba(255,90,31,0.4)' : 'none',
                                            cursor: 'pointer',
                                            zIndex: isSelected ? 10 : 1
                                        }}
                                    >
                                        {val}
                                    </motion.div>
                                );
                            })}
                        </div>
                    ))}
                </div>

                {/* Panel Lógico */}
                <div style={{ background: '#111', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'left', fontFamily: 'monospace', fontSize: '1.1rem', color: '#e5e7eb', minWidth: '300px' }}>
                    <div style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: '#5c6370' }}>// Código Java Equivalente</div>
                    
                    {selectedCell[0] === -1 ? (
                        <div style={{ color: 'var(--text-grey)', fontStyle: 'italic', textAlign: 'center', margin: '2rem 0' }}>
                            (Selecciona una celda)
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <span style={{ color: '#FF8A5C' }}>int</span> valor = matriz[<span style={{ color: '#FF8A5C', fontWeight: 'bold' }}>{selectedCell[0]}</span>][<span style={{ color: '#FF8A5C', fontWeight: 'bold' }}>{selectedCell[1]}</span>];
                            </div>
                            <div style={{ color: '#56b6c2' }}>
                                System.out.println(valor);
                            </div>
                            <div style={{ borderTop: '1px dashed rgba(255,255,255,0.2)', paddingTop: '1rem', marginTop: '0.5rem' }}>
                                &gt; Imprime: <span style={{ color: '#FF5A1F', fontSize: '1.5rem', fontWeight: 'bold' }}>{matrix[selectedCell[0]][selectedCell[1]]}</span>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

