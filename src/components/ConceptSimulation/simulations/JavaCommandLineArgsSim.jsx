import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useCompactSimulationLayout from '../useCompactSimulationLayout';

export default function JavaCommandLineArgsSim() {
    const [step, setStep] = useState(0);
    const isCompact = useCompactSimulationLayout();

    const steps = [
        'Escribes `java`, el nombre de la clase y luego los datos separados por espacios.',
        'La JVM parte esos datos y crea el arreglo `args[]`.',
        'Ahora el programa extrae `args[0]` y `args[1]`.',
        'Luego convierte esos textos en numeros reales con `Integer.parseInt()`.',
        'Finalmente llama al metodo que hace la suma y muestra el resultado.',
    ];

    return (
        <div
            style={{
                padding: isCompact ? '1.35rem 1rem' : '2.5rem 2rem',
                background: 'rgba(20,20,20,0.8)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center',
            }}
        >
            <h3 style={{ color: '#00d4ff', marginBottom: '0.5rem' }}>Simulador: linea de comandos</h3>
            <p
                style={{
                    color: 'var(--text-grey)',
                    marginBottom: '1.5rem',
                    fontSize: isCompact ? '0.84rem' : '0.9rem',
                    minHeight: isCompact ? 'auto' : '40px',
                }}
            >
                {steps[step]}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'center' }}>
                <div
                    style={{
                        background: '#000',
                        padding: isCompact ? '1rem' : '1.35rem',
                        borderRadius: '8px',
                        border: '1px solid #333',
                        textAlign: 'left',
                        fontFamily: 'monospace',
                        fontSize: isCompact ? '0.9rem' : '1.05rem',
                        color: '#00ff00',
                        width: '100%',
                        maxWidth: '600px',
                        boxShadow: 'inset 0 0 10px rgba(0,255,0,0.1)',
                        overflowWrap: 'anywhere',
                    }}
                >
                    <span>C:\\Usuario\\Proyectos&gt; </span>
                    <span style={{ color: '#fff' }}>java CalculadoraArgs</span>
                    <span
                        style={{
                            marginLeft: '0.45rem',
                            padding: '0.12rem 0.35rem',
                            borderRadius: '4px',
                            background: step <= 1 ? 'rgba(255,255,255,0.16)' : 'transparent',
                            color: step >= 1 ? '#38bdf8' : '#fff',
                        }}
                    >
                        12
                    </span>
                    <span
                        style={{
                            marginLeft: '0.2rem',
                            padding: '0.12rem 0.35rem',
                            borderRadius: '4px',
                            background: step <= 1 ? 'rgba(255,255,255,0.16)' : 'transparent',
                            color: step >= 1 ? '#00d4ff' : '#fff',
                        }}
                    >
                        8
                    </span>
                    <motion.span animate={{ opacity: [0, 1] }} transition={{ repeat: Infinity }} style={{ fontWeight: 'bold' }}>
                        _
                    </motion.span>
                </div>

                <div
                    style={{
                        background: '#111',
                        padding: isCompact ? '1rem' : '1.35rem',
                        borderRadius: '8px',
                        border: '1px solid rgba(255,255,255,0.05)',
                        textAlign: 'left',
                        fontFamily: 'monospace',
                        fontSize: isCompact ? '0.82rem' : '0.96rem',
                        color: '#e5e7eb',
                        width: '100%',
                        maxWidth: '600px',
                    }}
                >
                    <div
                        style={{
                            margin: '0.35rem 0',
                            background: step === 1 ? 'rgba(103, 232, 249, 0.1)' : 'transparent',
                            borderLeft: step === 1 ? '4px solid #67e8f9' : '4px solid transparent',
                            paddingLeft: '0.55rem',
                        }}
                    >
                        public static void main(String[] <span style={{ color: step === 1 ? '#67e8f9' : '#61afef', fontWeight: step === 1 ? 'bold' : 'normal' }}>args</span>) {'{'}
                    </div>

                    <AnimatePresence>
                        {(step === 1 || step === 2) && (
                            <motion.div
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                style={{
                                    margin: '0.6rem 0 0.9rem',
                                    display: 'inline-flex',
                                    flexWrap: 'wrap',
                                    gap: '0.35rem',
                                    padding: '0.38rem 0.6rem',
                                    borderRadius: '8px',
                                    background: 'rgba(0,0,0,0.65)',
                                    border: '1px solid #67e8f9',
                                    color: '#fff',
                                    fontSize: isCompact ? '0.76rem' : '0.82rem',
                                }}
                            >
                                <span>args =</span>
                                <span>[</span>
                                <span style={{ color: '#38bdf8' }}>"12"</span>
                                <span>,</span>
                                <span style={{ color: '#00d4ff' }}>"8"</span>
                                <span>]</span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div
                        style={{
                            paddingLeft: isCompact ? '1rem' : '1.5rem',
                            margin: '0.45rem 0',
                            opacity: step >= 2 ? 1 : 0.35,
                            background: step === 2 || step === 3 ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                            borderLeft: step === 2 || step === 3 ? '4px solid #38bdf8' : '4px solid transparent',
                            overflowWrap: 'anywhere',
                        }}
                    >
                        <span style={{ color: '#67e8f9' }}>int</span> n1 = Integer.parseInt(
                        <span style={{ color: step === 2 ? '#38bdf8' : '#e06c75', fontWeight: step === 2 ? 'bold' : 'normal' }}> args[0] </span>);
                    </div>

                    <div
                        style={{
                            paddingLeft: isCompact ? '1rem' : '1.5rem',
                            margin: '0.45rem 0',
                            opacity: step >= 2 ? 1 : 0.35,
                            background: step === 2 || step === 3 ? 'rgba(0, 212, 255, 0.1)' : 'transparent',
                            borderLeft: step === 2 || step === 3 ? '4px solid #00d4ff' : '4px solid transparent',
                            overflowWrap: 'anywhere',
                        }}
                    >
                        <span style={{ color: '#67e8f9' }}>int</span> n2 = Integer.parseInt(
                        <span style={{ color: step === 2 ? '#00d4ff' : '#e06c75', fontWeight: step === 2 ? 'bold' : 'normal' }}> args[1] </span>);
                    </div>

                    {step === 3 && (
                        <div
                            style={{
                                margin: '0.8rem 0',
                                padding: '0.45rem 0.7rem',
                                borderRadius: '8px',
                                background: 'rgba(39, 174, 96, 0.12)',
                                border: '1px solid rgba(39, 174, 96, 0.35)',
                                color: '#86efac',
                                fontSize: isCompact ? '0.76rem' : '0.82rem',
                            }}
                        >
                            parseInt() traduce "12" y "8" desde texto hacia enteros.
                        </div>
                    )}

                    <div
                        style={{
                            paddingLeft: isCompact ? '1rem' : '1.5rem',
                            margin: '0.45rem 0',
                            opacity: step >= 4 ? 1 : 0.35,
                            background: step === 4 ? 'rgba(39, 174, 96, 0.1)' : 'transparent',
                            borderLeft: step === 4 ? '4px solid #27ae60' : '4px solid transparent',
                        }}
                    >
                        <span style={{ color: '#67e8f9' }}>int</span> resul = <span style={{ color: '#61afef' }}>sumarValores</span>(n1, n2);
                    </div>

                    <div style={{ paddingLeft: isCompact ? '1rem' : '1.5rem', margin: '0.45rem 0', opacity: step >= 4 ? 1 : 0.35 }}>
                        <span style={{ color: '#56b6c2' }}>System</span>.out.println(resul);
                    </div>

                    {step === 4 && (
                        <div
                            style={{
                                marginTop: '0.8rem',
                                background: '#000',
                                padding: '0.55rem 0.75rem',
                                borderRadius: '6px',
                                border: '1px solid #333',
                                color: '#00ff00',
                                display: 'inline-block',
                                fontSize: isCompact ? '0.8rem' : '0.88rem',
                            }}
                        >
                            {'>'} Consola: 20
                        </div>
                    )}

                    <div style={{ marginTop: '0.55rem' }}>{'}'}</div>
                </div>
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button
                    onClick={() => setStep(Math.max(0, step - 1))}
                    disabled={step === 0}
                    style={{
                        background: 'rgba(255,255,255,0.1)',
                        color: '#fff',
                        border: 'none',
                        padding: '0.58rem 1rem',
                        borderRadius: '6px',
                        cursor: step === 0 ? 'not-allowed' : 'pointer',
                        opacity: step === 0 ? 0.5 : 1,
                    }}
                >
                    Atras
                </button>
                <button
                    onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
                    disabled={step === steps.length - 1}
                    style={{
                        background: '#00d4ff',
                        color: '#000',
                        border: 'none',
                        padding: '0.62rem 1rem',
                        borderRadius: '8px',
                        cursor: step === steps.length - 1 ? 'not-allowed' : 'pointer',
                        fontWeight: 'bold',
                        opacity: step === steps.length - 1 ? 0.5 : 1,
                    }}
                >
                    Avanzar ejecucion
                </button>
            </div>
        </div>
    );
}
