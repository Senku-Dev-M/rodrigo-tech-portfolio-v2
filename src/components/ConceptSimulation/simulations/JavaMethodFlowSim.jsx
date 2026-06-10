import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const cpuDotStyle = {
    position: 'absolute',
    left: '0.35rem',
    top: '0.42rem',
    width: '10px',
    height: '10px',
    borderRadius: '999px',
    background: '#FF8A5C',
    boxShadow: '0 0 10px rgba(255, 138, 92, 0.8)',
};

function CodeLine({ active, children, tone = '#FF8A5C' }) {
    return (
        <div
            style={{
                position: 'relative',
                padding: '0.35rem 0.75rem 0.35rem 1.65rem',
                borderRadius: '8px',
                background: active ? 'rgba(255, 90, 31, 0.12)' : 'transparent',
                color: '#e5e7eb',
            }}
        >
            {active && <motion.div layoutId="method-flow-dot" style={cpuDotStyle} />}
            <span style={{ color: tone }}>{children}</span>
        </div>
    );
}

export default function JavaMethodFlowSim() {
    const [step, setStep] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        let interval;

        if (isPlaying) {
            interval = setInterval(() => {
                setStep((prev) => {
                    if (prev >= 6) {
                        setIsPlaying(false);
                        return prev;
                    }

                    return prev + 1;
                });
            }, 1800);
        }

        return () => clearInterval(interval);
    }, [isPlaying]);

    const descriptions = useMemo(
        () => [
            'La ejecucion comienza en main y avanza linea por linea.',
            'main encuentra la llamada a duplicar(a) y transfiere el control.',
            'La ejecucion baja al metodo auxiliar para calcular el resultado.',
            'El metodo prepara su respuesta con return.',
            'El valor 10 regresa al punto exacto donde se invoco duplicar(a).',
            'main retoma el flujo normal y usa el valor devuelto.',
            'El programa termina despues de imprimir el resultado.',
        ],
        []
    );

    const connector = useMemo(() => {
        if (step >= 1 && step <= 3) {
            return {
                label: 'Llamada a duplicar(a)',
                accent: '#22c55e',
                pillBackground: 'rgba(34, 197, 94, 0.14)',
                lineBackground: 'rgba(34, 197, 94, 0.3)',
                start: 6,
                end: 54,
            };
        }

        if (step === 4) {
            return {
                label: 'return 10',
                accent: '#FF8A5C',
                pillBackground: 'rgba(255, 138, 92, 0.14)',
                lineBackground: 'rgba(255, 138, 92, 0.3)',
                start: 54,
                end: 6,
            };
        }

        return {
            label: 'main controla el flujo',
            accent: 'rgba(255,255,255,0.55)',
            pillBackground: 'rgba(255,255,255,0.06)',
            lineBackground: 'rgba(255,255,255,0.18)',
            start: 30,
            end: 30,
        };
    }, [step]);

    return (
        <div
            style={{
                padding: '2.5rem 2rem',
                background: 'rgba(20,20,20,0.8)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center',
            }}
        >
            <h3 style={{ color: '#FF5A1F', marginBottom: '0.5rem' }}>El salto de ejecucion</h3>
            <p style={{ color: 'var(--text-grey)', marginBottom: '2rem', fontSize: '0.92rem', minHeight: '44px' }}>
                {descriptions[step]}
            </p>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.85rem',
                    minHeight: '520px',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        maxWidth: '430px',
                        background: '#111',
                        padding: '1.35rem 1.25rem',
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.08)',
                        textAlign: 'left',
                        fontFamily: 'monospace',
                        color: '#e5e7eb',
                    }}
                >
                    <div style={{ color: '#94a3b8', marginBottom: '0.55rem', fontSize: '0.92rem' }}>// Archivo principal</div>
                    <div style={{ color: '#FF8A5C', marginBottom: '0.7rem' }}>public static void main(...) {'{'}</div>
                    <CodeLine active={step === 0 || step === 6}>
                        <span>int</span> a = <span style={{ color: '#d19a66' }}>5</span>;
                    </CodeLine>
                    <CodeLine active={step === 1 || step === 4} tone="#e5e7eb">
                        <span style={{ color: '#FF8A5C' }}>int</span> b = <span style={{ color: '#61afef' }}>duplicar</span>(a);
                    </CodeLine>
                    <CodeLine active={step === 5} tone="#e5e7eb">
                        <span style={{ color: '#56b6c2' }}>System</span>.out.println(b);
                    </CodeLine>

                    <AnimatePresence>
                        {step === 4 && (
                            <motion.div
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                style={{
                                    marginTop: '0.7rem',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.45rem',
                                    padding: '0.35rem 0.7rem',
                                    borderRadius: '999px',
                                    border: '1px solid rgba(255, 138, 92, 0.35)',
                                    background: 'rgba(255, 138, 92, 0.1)',
                                    color: '#FF8A5C',
                                    fontSize: '0.82rem',
                                    fontWeight: '700',
                                }}
                            >
                                Valor recibido: 10
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div style={{ color: '#FF8A5C', marginTop: '0.75rem' }}>{'}'}</div>
                </div>

                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '160px',
                        minHeight: '96px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: '10px',
                            bottom: '10px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '2px',
                            borderRadius: '999px',
                            background: connector.lineBackground,
                        }}
                    />
                    <motion.div
                        key={connector.label}
                        initial={false}
                        animate={{
                            background: connector.pillBackground,
                            borderColor: connector.accent,
                            color: connector.accent,
                        }}
                        style={{
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            padding: '0.45rem 0.9rem',
                            borderRadius: '999px',
                            border: '1px dashed rgba(255,255,255,0.25)',
                            fontSize: '0.82rem',
                            fontWeight: '700',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {connector.label}
                    </motion.div>

                    {(step >= 1 && step <= 4) && (
                        <motion.div
                            initial={false}
                            animate={{ top: `${connector.end}px` }}
                            transition={{ duration: 1.1, ease: 'easeInOut' }}
                            style={{
                                position: 'absolute',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '14px',
                                height: '14px',
                                borderRadius: '999px',
                                background: connector.accent,
                                boxShadow: `0 0 16px ${connector.accent}`,
                            }}
                        />
                    )}
                </div>

                <div
                    style={{
                        width: '100%',
                        maxWidth: '430px',
                        background: '#111',
                        padding: '1.35rem 1.25rem',
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.08)',
                        textAlign: 'left',
                        fontFamily: 'monospace',
                        color: '#e5e7eb',
                        opacity: step >= 2 && step <= 4 ? 1 : 0.5,
                        transition: 'opacity 0.25s ease',
                    }}
                >
                    <div style={{ color: '#4ade80', marginBottom: '0.55rem', fontSize: '0.92rem' }}>// Metodo auxiliar</div>
                    <div style={{ color: '#FF8A5C', marginBottom: '0.7rem' }}>
                        public static <span style={{ color: '#e06c75' }}>int</span> <span style={{ color: '#61afef' }}>duplicar</span>(<span style={{ color: '#e06c75' }}>int</span> <span style={{ color: '#d19a66' }}>num</span>) {'{'}
                    </div>
                    <CodeLine active={step === 2} tone="#e5e7eb">
                        <span style={{ color: '#FF8A5C' }}>int</span> calc = num * <span style={{ color: '#d19a66' }}>2</span>;
                    </CodeLine>
                    <CodeLine active={step === 3} tone="#e5e7eb">
                        <span style={{ color: '#FF8A5C' }}>return</span> calc;
                    </CodeLine>
                    <div style={{ color: '#FF8A5C', marginTop: '0.75rem' }}>{'}'}</div>
                </div>
            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                {!isPlaying && step < 6 && (
                    <button
                        onClick={() => setIsPlaying(true)}
                        style={{
                            background: '#FF5A1F',
                            color: '#000',
                            border: 'none',
                            padding: '0.6rem 1.2rem',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                        }}
                    >
                        {step === 0 ? 'Iniciar animacion' : 'Continuar flujo'}
                    </button>
                )}

                {isPlaying && (
                    <button
                        onClick={() => setIsPlaying(false)}
                        style={{
                            background: 'rgba(255,255,255,0.1)',
                            color: '#fff',
                            border: '1px solid rgba(255,255,255,0.2)',
                            padding: '0.6rem 1.2rem',
                            borderRadius: '6px',
                            cursor: 'pointer',
                        }}
                    >
                        Pausar
                    </button>
                )}

                {(step > 0 || isPlaying) && (
                    <button
                        onClick={() => {
                            setIsPlaying(false);
                            setStep(0);
                        }}
                        style={{
                            background: 'transparent',
                            color: '#ff8a65',
                            border: '1px solid #ff8a65',
                            padding: '0.6rem 1.2rem',
                            borderRadius: '6px',
                            cursor: 'pointer',
                        }}
                    >
                        Reiniciar
                    </button>
                )}
            </div>
        </div>
    );
}
