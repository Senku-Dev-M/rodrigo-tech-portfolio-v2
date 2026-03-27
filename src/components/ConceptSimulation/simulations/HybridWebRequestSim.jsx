import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import useCompactSimulationLayout from '../useCompactSimulationLayout';

const layers = [
    { id: 'aplicacion', title: 'Aplicación', color: '#67e8f9', packet: 'HTTP GET /index.html' },
    { id: 'transporte', title: 'Transporte', color: '#d19a66', packet: 'TCP Segmento · puerto 80/443' },
    { id: 'red', title: 'Red', color: '#61afef', packet: 'IP Paquete · origen/destino' },
    { id: 'enlace', title: 'Enlace', color: '#a78bfa', packet: 'Ethernet Trama · MAC origen/destino' },
    { id: 'fisica', title: 'Física', color: '#98c379', packet: 'Bits / señales sobre el medio' },
];

const sequence = [
    {
        key: 'cliente-app',
        side: 'client',
        layerId: 'aplicacion',
        title: '1. La aplicación genera la solicitud',
        desc: 'El navegador del cliente construye un mensaje HTTP con la petición de la página.',
    },
    {
        key: 'cliente-transport',
        side: 'client',
        layerId: 'transporte',
        title: '2. Transporte encapsula',
        desc: 'TCP agrega control extremo a extremo, puertos y confiabilidad para la sesión.',
    },
    {
        key: 'cliente-red',
        side: 'client',
        layerId: 'red',
        title: '3. Red direcciona',
        desc: 'IP añade las direcciones lógicas para que el paquete pueda viajar entre redes distintas.',
    },
    {
        key: 'cliente-enlace',
        side: 'client',
        layerId: 'enlace',
        title: '4. Enlace prepara el salto local',
        desc: 'La NIC y Ethernet/Wi-Fi convierten el paquete en una trama válida dentro de la red local.',
    },
    {
        key: 'medio',
        side: 'center',
        layerId: 'fisica',
        title: '5. Física transmite',
        desc: 'La información viaja como bits o señales eléctricas, ópticas o de radio por el medio.',
    },
    {
        key: 'servidor-fisica',
        side: 'server',
        layerId: 'fisica',
        title: '6. El servidor recibe la señal',
        desc: 'El adaptador del servidor interpreta las señales y reconstruye la información binaria.',
    },
    {
        key: 'servidor-enlace',
        side: 'server',
        layerId: 'enlace',
        title: '7. Enlace valida la trama',
        desc: 'Se revisa la trama local y se entrega la carga útil al siguiente nivel.',
    },
    {
        key: 'servidor-red',
        side: 'server',
        layerId: 'red',
        title: '8. Red revisa IP',
        desc: 'La capa de red confirma que el destino lógico es correcto y pasa el paquete hacia Transporte.',
    },
    {
        key: 'servidor-transporte',
        side: 'server',
        layerId: 'transporte',
        title: '9. Transporte entrega al proceso correcto',
        desc: 'TCP usa puertos y control de sesión para entregar la solicitud al servicio web correcto.',
    },
    {
        key: 'servidor-app',
        side: 'server',
        layerId: 'aplicacion',
        title: '10. Aplicación procesa la petición',
        desc: 'El servidor web interpreta el HTTP GET y queda listo para responder con el recurso solicitado.',
    },
];

function Stack({ title, activeLayerId, side, isCompact }) {
    return (
        <div
            style={{
                display: 'grid',
                gap: '0.55rem',
                width: '100%',
                minWidth: 0,
            }}
        >
            <div
                style={{
                    color: side === 'client' ? '#f8fafc' : '#00d4ff',
                    fontWeight: 700,
                    textAlign: 'center',
                    fontSize: isCompact ? '0.88rem' : '0.92rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                }}
            >
                {title}
            </div>

            {layers.map((layer) => {
                const isActive = activeLayerId === layer.id;

                return (
                    <motion.div
                        key={`${side}-${layer.id}`}
                        initial={false}
                        animate={{
                            scale: isActive ? 1.015 : 1,
                            boxShadow: isActive ? `0 0 0 1px ${layer.color}44` : 'none',
                        }}
                        transition={{ duration: 0.18 }}
                        style={{
                            borderRadius: '12px',
                            border: `1px solid ${isActive ? layer.color : 'rgba(255,255,255,0.08)'}`,
                            background: isActive ? `${layer.color}14` : 'rgba(255,255,255,0.03)',
                            padding: isCompact ? '0.72rem 0.78rem' : '0.78rem 0.85rem',
                        }}
                    >
                        <div
                            style={{
                                color: layer.color,
                                fontWeight: 700,
                                fontSize: isCompact ? '0.84rem' : '0.88rem',
                                marginBottom: '0.18rem',
                            }}
                        >
                            {layer.title}
                        </div>
                        <div
                            style={{
                                color: '#cbd5e1',
                                fontSize: isCompact ? '0.7rem' : '0.74rem',
                                lineHeight: 1.35,
                            }}
                        >
                            {layer.packet}
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}

export default function HybridWebRequestSim({ isPlaying }) {
    const isCompact = useCompactSimulationLayout();
    const [stepIndex, setStepIndex] = useState(0);

    useEffect(() => {
        setStepIndex(0);
    }, [isPlaying]);

    const current = useMemo(() => sequence[stepIndex] ?? sequence[0], [stepIndex]);
    const activeLayer = useMemo(
        () => layers.find((layer) => layer.id === current.layerId) ?? layers[0],
        [current.layerId]
    );

    const packetPosition = useMemo(() => {
        if (current.side === 'client') return { x: isCompact ? 0 : -10, y: 0 };
        if (current.side === 'server') return { x: isCompact ? 0 : 10, y: 0 };
        return { x: 0, y: 0 };
    }, [current.side, isCompact]);

    return (
        <div
            style={{
                padding: isCompact ? '0.9rem 0.85rem' : '1.2rem 1.1rem',
                background: 'rgba(20,20,20,0.82)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
            }}
        >
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: isCompact ? '1fr' : 'minmax(0, 1fr) minmax(210px, 0.72fr) minmax(0, 1fr)',
                    gap: isCompact ? '0.9rem' : '1rem',
                    alignItems: 'start',
                }}
            >
                <Stack title="Cliente" activeLayerId={current.side === 'client' ? current.layerId : null} side="client" isCompact={isCompact} />

                <div
                    style={{
                        display: 'grid',
                        gap: '0.8rem',
                        alignSelf: 'stretch',
                    }}
                >
                    <div
                        style={{
                            borderRadius: '14px',
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            padding: isCompact ? '0.9rem' : '1rem',
                            minHeight: isCompact ? 'auto' : '250px',
                            display: 'grid',
                            alignContent: 'center',
                            gap: '0.75rem',
                        }}
                    >
                        <div
                            style={{
                                display: 'inline-flex',
                                justifySelf: 'center',
                                padding: '0.28rem 0.65rem',
                                borderRadius: '999px',
                                background: `${activeLayer.color}18`,
                                color: activeLayer.color,
                                fontSize: '0.72rem',
                                fontWeight: 700,
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                            }}
                        >
                            {current.side === 'center' ? 'En tránsito' : current.side === 'client' ? 'Encapsulación' : 'Desencapsulación'}
                        </div>

                        <motion.div
                            initial={false}
                            animate={{
                                x: packetPosition.x,
                                y: packetPosition.y,
                                scale: 1,
                            }}
                            transition={{ duration: 0.35 }}
                            style={{
                                justifySelf: 'center',
                                width: '100%',
                                maxWidth: '180px',
                                padding: '0.9rem 0.8rem',
                                borderRadius: '14px',
                                border: `1px solid ${activeLayer.color}`,
                                background: `${activeLayer.color}14`,
                                boxShadow: `0 0 24px ${activeLayer.color}22`,
                            }}
                        >
                            <div
                                style={{
                                    color: activeLayer.color,
                                    fontSize: '0.72rem',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.08em',
                                    marginBottom: '0.35rem',
                                }}
                            >
                                Unidad actual
                            </div>
                            <div
                                style={{
                                    color: '#f8fafc',
                                    fontFamily: 'monospace',
                                    fontSize: isCompact ? '0.76rem' : '0.8rem',
                                    lineHeight: 1.4,
                                }}
                            >
                                {activeLayer.packet}
                            </div>
                        </motion.div>

                        <div
                            style={{
                                color: '#f8fafc',
                                textAlign: 'center',
                                fontWeight: 700,
                                fontSize: isCompact ? '0.88rem' : '0.92rem',
                                lineHeight: 1.4,
                            }}
                        >
                            {current.title}
                        </div>

                        <p
                            style={{
                                color: '#cbd5e1',
                                textAlign: 'center',
                                fontSize: isCompact ? '0.77rem' : '0.8rem',
                                lineHeight: 1.5,
                                margin: 0,
                            }}
                        >
                            {current.desc}
                        </p>

                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '0.7rem',
                                flexWrap: 'wrap',
                            }}
                        >
                            <button
                                type="button"
                                className="concept-sim__btn concept-sim__btn--ghost"
                                onClick={() => setStepIndex(0)}
                                disabled={stepIndex === 0}
                            >
                                Reiniciar
                            </button>
                            <button
                                type="button"
                                className="concept-sim__btn"
                                onClick={() => setStepIndex((currentIndex) => Math.min(sequence.length - 1, currentIndex + 1))}
                                disabled={stepIndex >= sequence.length - 1}
                            >
                                Siguiente capa
                            </button>
                        </div>

                        <div
                            style={{
                                color: '#94a3b8',
                                textAlign: 'center',
                                fontSize: isCompact ? '0.73rem' : '0.76rem',
                                fontFamily: 'monospace',
                            }}
                        >
                            Paso {stepIndex + 1} de {sequence.length}
                        </div>
                    </div>
                </div>

                <Stack title="Servidor" activeLayerId={current.side === 'server' ? current.layerId : null} side="server" isCompact={isCompact} />
            </div>
        </div>
    );
}
