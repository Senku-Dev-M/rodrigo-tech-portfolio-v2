import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import useCompactSimulationLayout from '../useCompactSimulationLayout';

const pillars = [
    {
        id: 'encapsulamiento',
        title: 'Encapsulamiento',
        color: '#FF8A5C',
        desc: 'El objeto protege sus datos internos y obliga a interactuar con ellos mediante operaciones controladas.',
        example: 'Ejemplo: `saldo` privado + `depositar()`',
    },
    {
        id: 'abstraccion',
        title: 'Abstracción',
        color: '#d19a66',
        desc: 'Quien usa el objeto se queda con la intención principal y no necesita conocer todos los detalles internos.',
        example: 'Ejemplo: `cuenta.depositar(50)` sin ver la lógica interna',
    },
    {
        id: 'herencia',
        title: 'Herencia',
        color: '#61afef',
        desc: 'Permite construir clases nuevas aprovechando una base común cuando comparten estructura o comportamiento.',
        example: 'Ejemplo: `CuentaAhorro` hereda de `CuentaBancaria`',
    },
    {
        id: 'polimorfismo',
        title: 'Polimorfismo',
        color: '#98c379',
        desc: 'El mismo mensaje puede resolverse de formas distintas según el objeto que lo reciba.',
        example: 'Ejemplo: `calcularInteres()` cambia según el tipo de cuenta',
    },
];

export default function JavaOOPPillarsSim({ isPlaying }) {
    const isCompact = useCompactSimulationLayout();
    const [phase, setPhase] = useState(0);
    const [selectedPillarId, setSelectedPillarId] = useState(null);

    useEffect(() => {
        setPhase(0);
        setSelectedPillarId(null);

        if (!isPlaying) {
            return undefined;
        }

        const timers = [
            window.setTimeout(() => setPhase(1), 900),
            window.setTimeout(() => setPhase(2), 1900),
            window.setTimeout(() => setPhase(3), 3300),
            window.setTimeout(() => setPhase(4), 4700),
            window.setTimeout(() => setPhase(5), 6100),
        ];

        return () => timers.forEach((timer) => window.clearTimeout(timer));
    }, [isPlaying]);

    const autoPillarId = useMemo(() => {
        if (phase < 2) {
            return null;
        }

        return pillars[Math.min(phase - 2, pillars.length - 1)].id;
    }, [phase]);

    const activePillarId = selectedPillarId ?? autoPillarId;

    const detail = useMemo(() => {
        if (!activePillarId) {
            return {
                title: 'Mapa inicial',
                color: '#FF8A5C',
                desc: 'Primero observa la relación entre una clase y el objeto concreto que nace a partir de ella. Después aparecen los cuatro pilares uno por uno.',
                example: 'Clase → Objeto → Diseño orientado a objetos',
            };
        }

        return pillars.find((pillar) => pillar.id === activePillarId) ?? pillars[0];
    }, [activePillarId]);

    return (
        <div
            style={{
                padding: isCompact ? '1.25rem 0.95rem' : '2.25rem 1.8rem',
                background: 'rgba(20,20,20,0.8)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
            }}
        >
            <h3
                style={{
                    color: '#FF5A1F',
                    margin: '0 0 0.5rem',
                    textAlign: 'center',
                    fontSize: isCompact ? '1.35rem' : '1.7rem',
                }}
            >
                De clase a objeto y pilares
            </h3>
            <p
                style={{
                    color: 'var(--text-grey)',
                    margin: '0 auto 1.5rem',
                    textAlign: 'center',
                    maxWidth: '46rem',
                    fontSize: isCompact ? '0.86rem' : '0.95rem',
                    lineHeight: 1.55,
                }}
            >
                {phase === 0 &&
                    'Una clase funciona como una plantilla. Todavía no es una cosa real en memoria, pero ya define qué datos y acciones existirán.'}
                {phase === 1 &&
                    'Ahora aparece un objeto concreto creado con `new`. Ya hay una instancia con valores propios y comportamiento disponible.'}
                {phase >= 2 &&
                    `Sobre esa relación se apoyan los pilares. En este momento está resaltado: ${detail.title}.`}
            </p>

            <div
                style={{
                    display: 'grid',
                    gap: isCompact ? '1rem' : '1.1rem',
                }}
            >
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: isCompact ? '1fr' : 'minmax(0, 1fr) auto minmax(0, 1fr)',
                        alignItems: 'center',
                        gap: isCompact ? '0.9rem' : '0.95rem',
                    }}
                >
                    <motion.div
                        animate={{
                            boxShadow:
                                phase === 0 || phase >= 2
                                    ? '0 0 0 1px rgba(103,232,249,0.35), 0 18px 32px rgba(0, 0, 0, 0.24)'
                                    : '0 14px 28px rgba(0, 0, 0, 0.16)',
                            y: phase === 0 ? -4 : 0,
                        }}
                        transition={{ duration: 0.35 }}
                        style={{
                            width: '100%',
                            background: 'rgba(8, 20, 28, 0.9)',
                            borderRadius: '14px',
                            border: '1px solid rgba(103,232,249,0.24)',
                            padding: isCompact ? '1rem' : '1.15rem',
                            minHeight: isCompact ? 'auto' : '220px',
                        }}
                    >
                        <div
                            style={{
                                display: 'inline-flex',
                                padding: '0.28rem 0.65rem',
                                borderRadius: '999px',
                                background: 'rgba(103,232,249,0.14)',
                                color: '#FF8A5C',
                                fontSize: '0.78rem',
                                fontWeight: 700,
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                marginBottom: '0.9rem',
                            }}
                        >
                            Clase
                        </div>

                        <div
                            style={{
                                fontFamily: 'monospace',
                                color: '#f8fafc',
                                lineHeight: 1.7,
                                fontSize: isCompact ? '0.94rem' : '1rem',
                            }}
                        >
                            <div style={{ color: '#FF8A5C', fontWeight: 700 }}>class Vehiculo {'{'}</div>
                            <div style={{ paddingLeft: '1rem', color: '#f9a8d4' }}>private String marca;</div>
                            <div style={{ paddingLeft: '1rem', color: '#f9a8d4' }}>private int velocidad;</div>
                            <div style={{ paddingLeft: '1rem', color: '#93c5fd' }}>void acelerar() {'{'} ... {'}'}</div>
                            <div style={{ color: '#FF8A5C', fontWeight: 700 }}>{'}'}</div>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{
                            scale: phase >= 1 ? 1 : 0.94,
                            opacity: phase >= 1 ? 1 : 0.65,
                        }}
                        transition={{ duration: 0.3 }}
                        style={{
                            padding: isCompact ? '0.5rem 0.9rem' : '0.58rem 1rem',
                            borderRadius: '999px',
                            border: '1px solid rgba(255,255,255,0.12)',
                            background: 'rgba(255,255,255,0.05)',
                            color: '#e5e7eb',
                            fontFamily: 'monospace',
                            fontSize: isCompact ? '0.78rem' : '0.82rem',
                            textAlign: 'center',
                            justifySelf: 'center',
                        }}
                    >
                        Instanciar con `new`
                    </motion.div>

                    <motion.div
                        initial={false}
                        animate={{
                            boxShadow:
                                phase >= 1
                                    ? '0 0 0 1px rgba(255,90,31,0.32), 0 18px 32px rgba(0, 0, 0, 0.24)'
                                    : '0 14px 28px rgba(0, 0, 0, 0.16)',
                            scale: phase >= 1 ? 1 : 0.96,
                            opacity: phase >= 1 ? 1 : 0.7,
                        }}
                        transition={{ duration: 0.35 }}
                        style={{
                            width: '100%',
                            background: 'rgba(255,255,255,0.04)',
                            borderRadius: '14px',
                            border: '1px solid rgba(255,255,255,0.12)',
                            padding: isCompact ? '1rem' : '1.15rem',
                            minHeight: isCompact ? 'auto' : '220px',
                        }}
                    >
                        <div
                            style={{
                                display: 'inline-flex',
                                padding: '0.28rem 0.65rem',
                                borderRadius: '999px',
                                background: 'rgba(255,90,31,0.14)',
                                color: '#FF5A1F',
                                fontSize: '0.78rem',
                                fontWeight: 700,
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                marginBottom: '0.9rem',
                            }}
                        >
                            Objeto
                        </div>

                        <div
                            style={{
                                display: 'grid',
                                gap: '0.7rem',
                                fontFamily: 'monospace',
                                fontSize: isCompact ? '0.9rem' : '0.98rem',
                                color: '#f8fafc',
                            }}
                        >
                            <div style={{ color: '#FF5A1F', fontWeight: 700 }}>Vehiculo miAuto</div>
                            <div
                                style={{
                                    padding: '0.7rem 0.8rem',
                                    borderRadius: '10px',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                }}
                            >
                                creado desde Vehiculo
                            </div>
                            <div
                                style={{
                                    padding: '0.7rem 0.8rem',
                                    borderRadius: '10px',
                                    background: 'rgba(103,232,249,0.08)',
                                    border: '1px solid rgba(103,232,249,0.15)',
                                }}
                            >
                                marca = "Azul"
                            </div>
                            <div
                                style={{
                                    padding: '0.7rem 0.8rem',
                                    borderRadius: '10px',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                }}
                            >
                                velocidad = 0
                            </div>
                            <div style={{ color: '#93c5fd' }}>miAuto.acelerar()</div>
                        </div>
                    </motion.div>
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: isCompact ? '1fr' : 'repeat(2, minmax(0, 1fr))',
                        gap: '0.7rem',
                    }}
                >
                    {pillars.map((pillar) => {
                        const isActive = phase >= 2 && detail.id === pillar.id;

                        return (
                            <motion.button
                                key={pillar.id}
                                type="button"
                                onMouseEnter={() => setSelectedPillarId(pillar.id)}
                                onFocus={() => setSelectedPillarId(pillar.id)}
                                onClick={() => setSelectedPillarId(pillar.id)}
                                initial={false}
                                animate={{
                                    opacity: 1,
                                    scale: isActive ? 1.01 : 1,
                                    y: 0,
                                }}
                                transition={{ duration: 0.22 }}
                                style={{
                                    borderRadius: '12px',
                                    border: `1px solid ${isActive ? pillar.color : 'rgba(255,255,255,0.08)'}`,
                                    background: isActive ? `${pillar.color}14` : 'rgba(255,255,255,0.03)',
                                    padding: '0.85rem 0.8rem',
                                    minHeight: isCompact ? '132px' : '144px',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    appearance: 'none',
                                }}
                            >
                                    <div
                                        style={{
                                            color: pillar.color,
                                        fontWeight: 700,
                                        fontSize: isCompact ? '0.9rem' : '0.94rem',
                                        marginBottom: '0.35rem',
                                    }}
                                >
                                    {pillar.title}
                                </div>
                                <div
                                    style={{
                                        color: '#d1d5db',
                                        fontSize: isCompact ? '0.77rem' : '0.8rem',
                                        lineHeight: 1.45,
                                        marginBottom: '0.45rem',
                                    }}
                                >
                                    {pillar.id === 'encapsulamiento' && 'Protege el estado'}
                                    {pillar.id === 'abstraccion' && 'Muestra lo esencial'}
                                    {pillar.id === 'herencia' && 'Reutiliza una base'}
                                    {pillar.id === 'polimorfismo' && 'Mismo mensaje, distinta respuesta'}
                                </div>
                                <div
                                    style={{
                                        color: '#f3f4f6',
                                        fontSize: isCompact ? '0.74rem' : '0.77rem',
                                        lineHeight: 1.45,
                                        marginBottom: '0.4rem',
                                    }}
                                >
                                    {pillar.desc}
                                </div>
                                <div
                                    style={{
                                        color: '#cbd5e1',
                                        fontFamily: 'monospace',
                                        fontSize: isCompact ? '0.7rem' : '0.73rem',
                                        opacity: 0.9,
                                    }}
                                >
                                    {pillar.example}
                                </div>
                            </motion.button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
