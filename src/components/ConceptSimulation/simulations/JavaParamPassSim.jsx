import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function MemoryCard({ title, accent, code, value, footer, active = false, faded = false, valueColor = '#fff' }) {
    return (
        <div
            style={{
                width: '100%',
                maxWidth: '270px',
                background: `${accent}12`,
                padding: '1.35rem 1.2rem',
                borderRadius: '12px',
                border: `2px dashed ${accent}55`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.85rem',
                opacity: faded ? 0.45 : 1,
                boxShadow: active ? `0 0 0 1px ${accent}44` : 'none',
            }}
        >
            <div style={{ color: accent, fontWeight: '800', fontSize: '0.96rem' }}>{title}</div>
            <div style={{ fontSize: '0.92rem', color: '#e5e7eb', fontFamily: 'monospace' }}>{code}</div>
            <div
                style={{
                    width: '86px',
                    height: '86px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.06)',
                    border: `2px solid ${active ? accent : 'rgba(255,255,255,0.22)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: valueColor,
                    fontSize: '2.05rem',
                    fontWeight: '800',
                    boxShadow: active ? `0 0 18px ${accent}55` : 'none',
                }}
            >
                {value}
            </div>
            <div style={{ fontSize: '0.84rem', color: active ? accent : 'var(--text-grey)', textAlign: 'center', lineHeight: 1.35 }}>
                {footer}
            </div>
        </div>
    );
}

export default function JavaParamPassSim() {
    const [step, setStep] = useState(0);

    const steps = useMemo(
        () => [
            {
                code: 'int precio = 100;',
                desc: 'main crea la variable original precio y guarda el valor 100.',
            },
            {
                code: 'aplicarImpuesto(precio);',
                desc: 'Al invocar el metodo, Java envia una copia del valor, no la caja original.',
            },
            {
                code: 'public static void aplicarImpuesto(int monto)',
                desc: 'El metodo recibe esa copia dentro de su parametro local monto.',
            },
            {
                code: 'monto = monto + 15;',
                desc: 'El metodo modifica solo su propia variable local: monto pasa a valer 115.',
            },
            {
                code: 'System.out.println(precio); // Imprime 100',
                desc: 'Al volver a main, precio sigue intacto. Eso es paso por valor.',
            },
        ],
        []
    );

    const methodValue = step < 2 ? '?' : step < 3 ? '100' : '115';
    const connectorAccent = step === 1 || step === 2 ? '#FF8A5C' : step === 4 ? '#f97316' : 'rgba(255,255,255,0.35)';
    const connectorLabel =
        step === 1
            ? 'Copia del 100 baja al metodo'
            : step === 2
              ? 'monto recibe la copia'
              : step === 4
                ? 'precio original no cambia'
                : 'Paso por valor';

    const pillTarget = step === 1 ? 54 : step === 2 ? 74 : 54;

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
            <h3 style={{ color: '#FF5A1F', marginBottom: '0.5rem' }}>Paso de parametros por valor</h3>
            <p style={{ color: 'var(--text-grey)', marginBottom: '2rem', fontSize: '0.92rem', minHeight: '44px' }}>
                {steps[step].desc}
            </p>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.95rem',
                    minHeight: '540px',
                }}
            >
                <MemoryCard
                    title="MAIN MEMORY"
                    accent="#FF5A1F"
                    code="int precio;"
                    value="100"
                    footer={step === 4 ? 'La variable original sigue con 100.' : 'Caja original creada en main.'}
                    active={step === 0 || step === 1 || step === 4}
                />

                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '180px',
                        minHeight: '108px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: '8px',
                            bottom: '8px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '2px',
                            borderRadius: '999px',
                            background: step >= 1 ? `${connectorAccent}66` : 'rgba(255,255,255,0.18)',
                        }}
                    />

                    <motion.div
                        initial={false}
                        animate={{
                            background: step >= 1 ? `${connectorAccent}1f` : 'rgba(255,255,255,0.06)',
                            borderColor: connectorAccent,
                            color: connectorAccent,
                        }}
                        style={{
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            padding: '0.42rem 0.9rem',
                            borderRadius: '999px',
                            border: '1px dashed rgba(255,255,255,0.25)',
                            fontSize: '0.8rem',
                            fontWeight: '700',
                            whiteSpace: 'nowrap',
                            background: 'rgba(255,255,255,0.06)',
                        }}
                    >
                        {connectorLabel}
                    </motion.div>

                    {(step === 1 || step === 2) && (
                        <motion.div
                            initial={false}
                            animate={{ top: `${pillTarget}px` }}
                            transition={{ duration: 1.1, ease: 'easeInOut' }}
                            style={{
                                position: 'absolute',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                padding: '0.26rem 0.62rem',
                                borderRadius: '999px',
                                border: '1px solid rgba(255,255,255,0.4)',
                                background: '#FF8A5C',
                                color: '#06283d',
                                fontSize: '0.76rem',
                                fontWeight: '800',
                                boxShadow: '0 0 18px rgba(255, 138, 92, 0.45)',
                            }}
                        >
                            100
                        </motion.div>
                    )}
                </div>

                <MemoryCard
                    title="METHOD MEMORY"
                    accent="#FF8A5C"
                    code="int monto;"
                    value={methodValue}
                    footer={step >= 3 ? 'Esta caja local cambia sin tocar a precio.' : 'Aqui vive solo la copia recibida.'}
                    active={step >= 2}
                    faded={step < 2}
                    valueColor={step >= 3 ? '#fca5a5' : '#fff'}
                />

                <AnimatePresence>
                    {step === 3 && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.45rem',
                                padding: '0.4rem 0.8rem',
                                borderRadius: '999px',
                                border: '1px solid rgba(249, 115, 22, 0.35)',
                                background: 'rgba(249, 115, 22, 0.12)',
                                color: '#fdba74',
                                fontSize: '0.82rem',
                                fontWeight: '700',
                            }}
                        >
                            Se suma +15 solo dentro del metodo
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div style={{ marginTop: '2.3rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                    onClick={() => setStep(Math.max(0, step - 1))}
                    disabled={step === 0}
                    style={{
                        background: 'rgba(255,255,255,0.1)',
                        color: '#fff',
                        border: 'none',
                        padding: '0.6rem 1.2rem',
                        borderRadius: '6px',
                        cursor: step === 0 ? 'not-allowed' : 'pointer',
                        opacity: step === 0 ? 0.5 : 1,
                    }}
                >
                    Retroceder
                </button>
                <button
                    onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
                    disabled={step === steps.length - 1}
                    style={{
                        background: '#FF5A1F',
                        color: '#000',
                        border: 'none',
                        padding: '0.6rem 2rem',
                        borderRadius: '8px',
                        cursor: step === steps.length - 1 ? 'not-allowed' : 'pointer',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        opacity: step === steps.length - 1 ? 0.5 : 1,
                    }}
                >
                    Avanzar flujo
                </button>

                {step === steps.length - 1 && (
                    <button
                        onClick={() => setStep(0)}
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

            <div
                style={{
                    marginTop: '1.4rem',
                    fontFamily: 'monospace',
                    fontSize: '1.02rem',
                    color: '#e5e7eb',
                    background: '#111',
                    padding: '0.95rem 1.1rem',
                    borderRadius: '8px',
                    display: 'inline-block',
                    border: '1px solid rgba(255,255,255,0.08)',
                }}
            >
                {steps[step].code}
            </div>
        </div>
    );
}
