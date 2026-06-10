import { useState } from 'react';

export default function JavaDeskcheckSim() {
    const [step, setStep] = useState(0);

    // Manual DeskCheck table logic steps
    const deskCheckSteps = [
        { desc: 'Línea 4: Inicialización', i: '-', num: '-', suma: 0, promedio: '-', log: '-' },
        { desc: 'Línea 6: Entramos al For (num=10)', i: 0, num: 10, suma: 0, promedio: '-', log: '-' },
        { desc: 'Línea 7: Suma = 0 + 10', i: 0, num: 10, suma: 10, promedio: '-', log: '-' },
        { desc: 'Línea 6: Siguiente ciclo (num=20)', i: 1, num: 20, suma: 10, promedio: '-', log: '-' },
        { desc: 'Línea 7: Suma = 10 + 20', i: 1, num: 20, suma: 30, promedio: '-', log: '-' },
        { desc: 'Línea 6: Siguiente ciclo (num=30)', i: 2, num: 30, suma: 30, promedio: '-', log: '-' },
        { desc: 'Línea 7: Suma = 30 + 30', i: 2, num: 30, suma: 60, promedio: '-', log: '-' },
        { desc: 'Línea 6: Siguiente ciclo (num=40)', i: 3, num: 40, suma: 60, promedio: '-', log: '-' },
        { desc: 'Línea 7: Suma = 60 + 40', i: 3, num: 40, suma: 100, promedio: '-', log: '-' },
        { desc: 'Línea 6: Último ciclo (num=50)', i: 4, num: 50, suma: 100, promedio: '-', log: '-' },
        { desc: 'Línea 7: Suma = 100 + 50', i: 4, num: 50, suma: 150, promedio: '-', log: '-' },
        { desc: 'Línea 6: (Fin del Array) Sale del bucle', i: '-', num: '-', suma: 150, promedio: '-', log: '-' },
        { desc: 'Línea 10: Promedio = 150 / 5', i: '-', num: '-', suma: 150, promedio: '30.0', log: '-' },
        { desc: 'Línea 12: Imprimir resultado', i: '-', num: '-', suma: 150, promedio: '30.0', log: 'Promedio: 30.0' },
    ];

    const currentData = deskCheckSteps[step];
    // Generate the history list sliced up to the current step
    const visibleHistory = deskCheckSteps.slice(0, step + 1);

    return (
        <div style={{ padding: '2.5rem 2rem', background: 'rgba(20,20,20,0.8)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <h3 style={{ color: '#FF5A1F', marginBottom: '0.5rem' }}>DeskCheck Interactivo: Ciclo For-Each</h3>
            <p style={{ color: 'var(--text-grey)', marginBottom: '2rem', fontSize: '0.9rem' }}>
                Avanza paso a paso por el código y observa cómo una computadora evalúa los cambios de memoria línea por línea.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'start' }}>
                
                {/* Editor Principal */}
                <div style={{ background: '#111', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'left', fontFamily: 'monospace', fontSize: '0.95rem', color: '#e5e7eb', lineHeight: '1.7' }}>
                    <div style={{ color: '#5c6370', marginBottom: '0.5rem' }}>// PromedioArray.java</div>
                    <div style={{ opacity: step >= 0 ? 1 : 0.3 }}><span style={{ color: '#4b5563', marginRight: '1rem' }}> 2</span><span style={{ color: '#FF8A5C' }}>int</span>[] numeros = {'{'}10,20,30,40,50{'}'};</div>
                    <div style={{ background: step === 0 ? 'rgba(255, 90, 31, 0.1)' : 'transparent', borderLeft: step === 0 ? '2px solid #FF5A1F' : '2px solid transparent', paddingLeft: step === 0 ? '0.5rem' : '0' }}>
                        <span style={{ color: '#4b5563', marginRight: step === 0 ? '0.5rem' : '1rem' }}> 4</span><span style={{ color: '#FF8A5C' }}>int</span> suma = <span style={{ color: '#d19a66' }}>0</span>;
                    </div>
                    <div><span style={{ color: '#4b5563', marginRight: '1rem' }}> 5</span></div>
                    <div style={{ background: [1,3,5,7,9,11].includes(step) ? 'rgba(255, 138, 92, 0.1)' : 'transparent', borderLeft: [1,3,5,7,9,11].includes(step) ? '2px solid #FF8A5C' : '2px solid transparent', paddingLeft: [1,3,5,7,9,11].includes(step) ? '0.5rem' : '0' }}>
                        <span style={{ color: '#4b5563', marginRight: [1,3,5,7,9,11].includes(step) ? '0.5rem' : '1rem' }}> 6</span><span style={{ color: '#FF8A5C' }}>for</span>(<span style={{ color: '#FF8A5C' }}>int</span> num : numeros) {'{'}
                    </div>
                    <div style={{ background: [2,4,6,8,10].includes(step) ? 'rgba(39, 174, 96, 0.1)' : 'transparent', borderLeft: [2,4,6,8,10].includes(step) ? '2px solid #27ae60' : '2px solid transparent', paddingLeft: [2,4,6,8,10].includes(step) ? '1.5rem' : '1rem' }}>
                        <span style={{ color: '#4b5563', marginRight: [2,4,6,8,10].includes(step) ? '0.5rem' : '1rem' }}> 7</span>suma += num;
                    </div>
                    <div><span style={{ color: '#4b5563', marginRight: '1rem' }}> 8</span>{'}'}</div>
                    <div><span style={{ color: '#4b5563', marginRight: '1rem' }}> 9</span></div>
                    <div style={{ background: step === 12 ? 'rgba(255, 90, 31, 0.1)' : 'transparent', borderLeft: step === 12 ? '2px solid #FF5A1F' : '2px solid transparent', paddingLeft: step === 12 ? '0.5rem' : '0' }}>
                        <span style={{ color: '#4b5563', marginRight: step === 12 ? '0.5rem' : '1rem' }}>10</span><span style={{ color: '#FF8A5C' }}>double</span> promedio = (<span style={{ color: '#FF8A5C' }}>double</span>)suma / numeros.length;
                    </div>
                    <div><span style={{ color: '#4b5563', marginRight: '1rem' }}>11</span></div>
                    <div style={{ background: step === 13 ? 'rgba(255, 90, 31, 0.1)' : 'transparent', borderLeft: step === 13 ? '2px solid #FF5A1F' : '2px solid transparent', paddingLeft: step === 13 ? '0.5rem' : '0' }}>
                        <span style={{ color: '#4b5563', marginRight: step === 13 ? '0.5rem' : '1rem' }}>12</span><span style={{ color: '#56b6c2' }}>System</span>.out.println(<span style={{ color: '#98c379' }}>"Promedio: "</span> + promedio);
                    </div>
                </div>

                {/* Tabla de Prueba de Escritorio */}
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '8px', border: '1px dashed rgba(255,255,255,0.15)', maxHeight: '380px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ color: '#FF5A1F', marginBottom: '1rem', fontWeight: 'bold' }}>Registro de Variables de Memoria RAM</div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1.5fr', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem', fontSize: '0.85rem', color: '#FF8A5C', fontWeight: 'bold' }}>
                        <div>i(idx)</div>
                        <div>num</div>
                        <div>suma</div>
                        <div>promedio</div>
                        <div>Consola</div>
                    </div>

                    <div style={{ overflowY: 'auto', flex: 1, paddingRight: '0.5rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {visibleHistory.map((row, index) => (
                            <div key={index} style={{ 
                                display: 'grid', 
                                gridTemplateColumns: '1fr 1fr 1fr 1fr 1.5fr', 
                                padding: '0.3rem 0',
                                fontSize: '0.85rem',
                                color: index === step ? '#fff' : 'var(--text-grey)',
                                background: index === step ? 'rgba(255, 90, 31, 0.1)' : 'transparent',
                                borderRadius: '4px'
                            }}>
                                <div>{row.i}</div>
                                <div style={{ color: index === step && row.num !== '-' ? '#FF8A5C' : undefined }}>{row.num}</div>
                                <div style={{ color: index === step && row.suma !== '-' ? '#27ae60' : undefined }}>{row.suma}</div>
                                <div>{row.promedio}</div>
                                <div style={{ fontStyle: 'italic', fontSize: '0.8rem' }}>{row.log}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem', alignItems: 'center' }}>
                <button 
                    onClick={() => setStep(Math.max(0, step - 1))}
                    disabled={step === 0}
                    style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: step === 0 ? 'not-allowed' : 'pointer', opacity: step === 0 ? 0.5 : 1 }}
                >
                    Retroceder Paso
                </button>
                <button 
                    onClick={() => setStep(Math.min(deskCheckSteps.length - 1, step + 1))}
                    disabled={step === deskCheckSteps.length - 1}
                    style={{ background: '#FF5A1F', color: '#000', border: 'none', padding: '0.6rem 2rem', borderRadius: '8px', cursor: step === deskCheckSteps.length - 1 ? 'not-allowed' : 'pointer', fontWeight: 'bold', fontSize: '1.1rem', opacity: step === deskCheckSteps.length - 1 ? 0.5 : 1, transition: 'transform 0.1s' }}
                >
                    Ejecutar Siguiente Línea
                </button>
                
                {step === deskCheckSteps.length - 1 && (
                    <button 
                        onClick={() => setStep(0)}
                        style={{ background: 'transparent', color: '#e74c3c', border: '1px solid #e74c3c', padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: 'pointer' }}
                    >
                        Resetear Programa
                    </button>
                )}
            </div>
            
            <div style={{ marginTop: '1rem', color: 'var(--text-grey)', fontStyle: 'italic', fontSize: '0.85rem' }}>
                Observación actual: {currentData.desc}
            </div>
        </div>
    );
}

