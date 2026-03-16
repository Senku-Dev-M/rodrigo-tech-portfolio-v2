import { motion } from 'framer-motion';

export default function SDLCSim({ isPlaying }) {
    const phases = [
        { x: 130, y: 170, text: 'Planificación' },
        { x: 280, y: 80, text: 'Análisis' },
        { x: 500, y: 80, text: 'Diseño' },
        { x: 650, y: 170, text: 'Desarrollo' },
        { x: 500, y: 260, text: 'Pruebas' },
        { x: 280, y: 260, text: 'Despliegue' },
    ];

    const maintenance = { x: 390, y: 170, text: 'Mantenimiento' };

    const getPath = (p1, p2, curve = 0) => {
        if (!curve) return `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`;
        const mx = (p1.x + p2.x) / 2;
        const my = (p1.y + p2.y) / 2 - curve;
        return `M ${p1.x} ${p1.y} Q ${mx} ${my} ${p2.x} ${p2.y}`;
    };

    return (
        <svg
            viewBox="0 0 780 340"
            className="sim-svg"
            preserveAspectRatio="xMidYMid meet"
            style={{ width: '100%', height: 'auto', background: 'transparent' }}
        >
            <defs>
                <marker id="arrowhead" viewBox="0 0 10 10" markerWidth="7" markerHeight="7" refX="8.5" refY="5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="rgba(255,255,255,0.2)" />
                </marker>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {phases.map((phase, index) => {
                const next = phases[(index + 1) % phases.length];

                return (
                    <path
                        key={`line-${index}`}
                        d={getPath(phase, next)}
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="2"
                        fill="none"
                        markerEnd="url(#arrowhead)"
                    />
                );
            })}

            <path
                d={getPath(phases[5], maintenance)}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                markerEnd="url(#arrowhead)"
            />
            <path
                d={getPath(maintenance, phases[0])}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                markerEnd="url(#arrowhead)"
            />

            {isPlaying && (
                <motion.circle
                    r="6"
                    fill="#00d4ff"
                    filter="url(#glow)"
                    initial={{ cx: phases[0].x, cy: phases[0].y, opacity: 0 }}
                    animate={{
                        cx: [...phases.map((phase) => phase.x), maintenance.x, phases[0].x],
                        cy: [...phases.map((phase) => phase.y), maintenance.y, phases[0].y],
                        opacity: [0, 1, 1, 1, 1, 1, 1, 1, 0],
                    }}
                    transition={{
                        duration: 8,
                        ease: 'linear',
                        times: [0, 0.1, 0.25, 0.4, 0.55, 0.7, 0.85, 0.95, 1],
                    }}
                />
            )}

            {phases.map((phase, index) => (
                <g key={`node-${index}`}>
                    <motion.circle
                        cx={phase.x}
                        cy={phase.y}
                        r="25"
                        fill="#151515"
                        stroke={isPlaying ? 'rgba(0, 212, 255, 0.3)' : 'rgba(255,255,255,0.1)'}
                        strokeWidth="2"
                        initial={{ scale: 1 }}
                        animate={
                            isPlaying
                                ? {
                                      scale: [1, 1.2, 1],
                                      stroke: ['rgba(0, 212, 255, 0.3)', '#00d4ff', 'rgba(0, 212, 255, 0.3)'],
                                  }
                                : {}
                        }
                        transition={{
                            duration: 0.5,
                            delay: index === 0 ? 0.3 : index * 1.1 + 0.3,
                            ease: 'easeInOut',
                        }}
                    />
                    <text
                        x={phase.x}
                        y={phase.y + 42}
                        textAnchor="middle"
                        fill="rgba(255,255,255,0.8)"
                        fontSize="12"
                        fontWeight="500"
                    >
                        {phase.text}
                    </text>
                    <text x={phase.x} y={phase.y + 4} textAnchor="middle" fill="#00d4ff" fontSize="12" fontWeight="bold">
                        {index + 1}
                    </text>
                </g>
            ))}

            <g>
                <motion.circle
                    cx={maintenance.x}
                    cy={maintenance.y}
                    r="30"
                    fill="#151515"
                    stroke={isPlaying ? 'rgba(56, 189, 248, 0.3)' : 'rgba(255,255,255,0.1)'}
                    strokeWidth="2"
                    initial={{ scale: 1 }}
                    animate={
                        isPlaying
                            ? {
                                  scale: [1, 1.2, 1],
                                  stroke: ['rgba(56, 189, 248, 0.3)', '#7dd3fc', 'rgba(56, 189, 248, 0.3)'],
                              }
                            : {}
                    }
                    transition={{ duration: 0.5, delay: 7.2, ease: 'easeInOut' }}
                />
                <text
                    x={maintenance.x}
                    y={maintenance.y + 48}
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.8)"
                    fontSize="12"
                    fontWeight="500"
                >
                    {maintenance.text}
                </text>
                <text x={maintenance.x} y={maintenance.y + 4} textAnchor="middle" fill="#7dd3fc" fontSize="12" fontWeight="bold">
                    ∞
                </text>
            </g>
        </svg>
    );
}
