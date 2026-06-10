import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import useCompactSimulationLayout from '../useCompactSimulationLayout';

const layers = [
    {
        id: 'aplicacion',
        title: 'Aplicación',
        color: '#FF8A5C',
        protocols: 'HTTP, HTTPS, DNS, SMTP',
        pdu: 'Datos de aplicación',
        devices: 'Navegador, servidor web, cliente de correo',
        desc: 'Aquí nace el mensaje útil para el usuario o la aplicación, por ejemplo una solicitud HTTP.',
    },
    {
        id: 'transporte',
        title: 'Transporte',
        color: '#d19a66',
        protocols: 'TCP, UDP, puertos',
        pdu: 'Segmento / datagrama',
        devices: 'Puertos, control de flujo, confiabilidad',
        desc: 'Esta capa divide la información y se encarga de la comunicación extremo a extremo entre procesos.',
    },
    {
        id: 'red',
        title: 'Red',
        color: '#61afef',
        protocols: 'IP, ICMP',
        pdu: 'Paquete IP',
        devices: 'Routers, gateway, subredes',
        desc: 'Aquí se decide cómo llegar al destino a través de distintas redes usando direccionamiento lógico.',
    },
    {
        id: 'enlace',
        title: 'Enlace de Datos',
        color: '#8A8F98',
        protocols: 'Ethernet, Wi-Fi, ARP',
        pdu: 'Trama',
        devices: 'Switches, MAC, NIC',
        desc: 'Organiza el envío local entre nodos vecinos y usa direcciones MAC para el salto dentro del segmento.',
    },
    {
        id: 'fisica',
        title: 'Física',
        color: '#98c379',
        protocols: 'Señales y medio',
        pdu: 'Bits',
        devices: 'UTP, fibra, radio, conectores',
        desc: 'Convierte la información en señales reales que viajan por cable, fibra o aire.',
    },
];

export default function HybridLayersSim({ isPlaying }) {
    const isCompact = useCompactSimulationLayout();
    const [activeLayerId, setActiveLayerId] = useState(layers[0].id);

    useEffect(() => {
        setActiveLayerId(layers[0].id);

        if (!isPlaying) {
            return undefined;
        }

        const timers = layers.map((layer, index) =>
            window.setTimeout(() => setActiveLayerId(layer.id), index * 1350 + 900)
        );

        return () => timers.forEach((timer) => window.clearTimeout(timer));
    }, [isPlaying]);

    const activeLayer = useMemo(
        () => layers.find((layer) => layer.id === activeLayerId) ?? layers[0],
        [activeLayerId]
    );

    return (
        <div
            style={{
                padding: isCompact ? '1.2rem 0.95rem' : '2.1rem 1.75rem',
                background: 'rgba(20,20,20,0.82)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
            }}
        >
            <h3
                style={{
                    color: '#FF5A1F',
                    margin: '0 0 0.45rem',
                    textAlign: 'center',
                    fontSize: isCompact ? '1.25rem' : '1.55rem',
                }}
            >
                Viaje de una solicitud web por el modelo híbrido
            </h3>
            <p
                style={{
                    color: 'var(--text-grey)',
                    textAlign: 'center',
                    lineHeight: 1.55,
                    maxWidth: '46rem',
                    margin: '0 auto 1.25rem',
                    fontSize: isCompact ? '0.84rem' : '0.92rem',
                }}
            >
                Escenario: un estudiante abre una página web. La solicitud nace en Aplicación y va
                descendiendo hasta convertirse en bits sobre el medio físico.
            </p>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: isCompact ? '1fr' : 'minmax(0, 1.05fr) minmax(280px, 0.95fr)',
                    gap: isCompact ? '1rem' : '1.1rem',
                    alignItems: 'start',
                }}
            >
                <div
                    style={{
                        display: 'grid',
                        gap: '0.7rem',
                    }}
                >
                    {layers.map((layer, index) => {
                        const isActive = activeLayerId === layer.id;

                        return (
                            <motion.button
                                key={layer.id}
                                type="button"
                                onMouseEnter={() => setActiveLayerId(layer.id)}
                                onFocus={() => setActiveLayerId(layer.id)}
                                onClick={() => setActiveLayerId(layer.id)}
                                initial={false}
                                animate={{
                                    scale: isActive ? 1.01 : 1,
                                    boxShadow: isActive ? `0 0 0 1px ${layer.color}44` : 'none',
                                }}
                                transition={{ duration: 0.2 }}
                                style={{
                                    width: '100%',
                                    textAlign: 'left',
                                    padding: isCompact ? '0.85rem 0.9rem' : '0.95rem 1rem',
                                    borderRadius: '12px',
                                    border: `1px solid ${isActive ? layer.color : 'rgba(255,255,255,0.08)'}`,
                                    background: isActive ? `${layer.color}12` : 'rgba(255,255,255,0.03)',
                                    cursor: 'pointer',
                                    appearance: 'none',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        gap: '0.8rem',
                                        marginBottom: '0.35rem',
                                    }}
                                >
                                    <div
                                        style={{
                                            color: layer.color,
                                            fontWeight: 700,
                                            fontSize: isCompact ? '0.96rem' : '1rem',
                                        }}
                                    >
                                        {index + 1}. {layer.title}
                                    </div>
                                    <span
                                        style={{
                                            color: '#d1d5db',
                                            fontSize: '0.73rem',
                                            fontFamily: 'monospace',
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                                        {layer.pdu}
                                    </span>
                                </div>
                                <div
                                    style={{
                                        color: '#d1d5db',
                                        fontSize: isCompact ? '0.75rem' : '0.8rem',
                                        lineHeight: 1.45,
                                    }}
                                >
                                    {layer.protocols}
                                </div>
                            </motion.button>
                        );
                    })}
                </div>

                <div
                    style={{
                        background: 'rgba(255,255,255,0.04)',
                        borderRadius: '14px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        padding: isCompact ? '0.95rem' : '1rem',
                        display: 'grid',
                        gap: '0.75rem',
                    }}
                >
                    <div
                        style={{
                            display: 'inline-flex',
                            alignSelf: 'start',
                            padding: '0.28rem 0.65rem',
                            borderRadius: '999px',
                            background: `${activeLayer.color}18`,
                            color: activeLayer.color,
                            fontSize: '0.74rem',
                            fontWeight: 700,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                        }}
                    >
                        Paso activo
                    </div>

                    <div
                        style={{
                            color: activeLayer.color,
                            fontSize: isCompact ? '1.05rem' : '1.18rem',
                            fontWeight: 700,
                        }}
                    >
                        {activeLayer.title}
                    </div>

                    <p
                        style={{
                            color: '#f3f4f6',
                            lineHeight: 1.58,
                            fontSize: isCompact ? '0.82rem' : '0.88rem',
                            margin: 0,
                        }}
                    >
                        {activeLayer.desc}
                    </p>

                    <div
                        style={{
                            display: 'grid',
                            gap: '0.55rem',
                        }}
                    >
                        <div
                            style={{
                                padding: '0.72rem 0.8rem',
                                borderRadius: '10px',
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.08)',
                            }}
                        >
                            <div style={{ color: '#94a3b8', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                                Protocolos / conceptos
                            </div>
                            <div style={{ color: '#e5e7eb', marginTop: '0.25rem', fontSize: isCompact ? '0.78rem' : '0.82rem' }}>
                                {activeLayer.protocols}
                            </div>
                        </div>

                        <div
                            style={{
                                padding: '0.72rem 0.8rem',
                                borderRadius: '10px',
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.08)',
                            }}
                        >
                            <div style={{ color: '#94a3b8', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                                PDU / unidad de datos
                            </div>
                            <div style={{ color: '#e5e7eb', marginTop: '0.25rem', fontFamily: 'monospace', fontSize: isCompact ? '0.78rem' : '0.82rem' }}>
                                {activeLayer.pdu}
                            </div>
                        </div>

                        <div
                            style={{
                                padding: '0.72rem 0.8rem',
                                borderRadius: '10px',
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.08)',
                            }}
                        >
                            <div style={{ color: '#94a3b8', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                                Dispositivos / ideas asociadas
                            </div>
                            <div style={{ color: '#e5e7eb', marginTop: '0.25rem', fontSize: isCompact ? '0.78rem' : '0.82rem', lineHeight: 1.45 }}>
                                {activeLayer.devices}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
