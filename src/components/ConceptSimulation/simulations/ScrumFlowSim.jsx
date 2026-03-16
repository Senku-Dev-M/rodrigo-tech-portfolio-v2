import { motion, AnimatePresence } from 'framer-motion';

const STAGES = [
    { id: 'backlog', label: 'Product\nBacklog', color: '#38bdf8', icon: '📋' },
    { id: 'planning', label: 'Sprint\nPlanning', color: '#7dd3fc', icon: '🗓' },
    { id: 'sprint', label: 'Sprint\n(1-4 sem)', color: '#00d4ff', icon: '⚡' },
    { id: 'review', label: 'Sprint\nReview', color: '#00ff88', icon: '✅' },
    { id: 'retro', label: 'Retro-\nspectiva', color: '#fb7185', icon: '🔄' },
];

function FlowDot({ isPlaying, color, delay }) {
    return (
        <AnimatePresence>
            {isPlaying && (
                <motion.circle
                    r={7}
                    fill={color}
                    filter="url(#scrumGlow)"
                    initial={{ cx: '0%', opacity: 0 }}
                    animate={{ cx: '100%', opacity: [0, 1, 1, 0] }}
                    exit={{ opacity: 0 }}
                    transition={{ delay, duration: 1.2, ease: 'easeInOut' }}
                />
            )}
        </AnimatePresence>
    );
}

export default function ScrumFlowSim({ isPlaying }) {
    const boxW = 110;
    const boxH = 90;
    const gapX = 75;
    const total = STAGES.length * boxW + (STAGES.length - 1) * gapX;
    const startX = (980 - total) / 2;
    const cy = 120;

    const bx = (index) => startX + index * (boxW + gapX);
    const bcx = (index) => bx(index) + boxW / 2;

    return (
        <svg
            viewBox="0 0 980 260"
            preserveAspectRatio="xMidYMid meet"
            style={{ width: '100%', height: 'auto', display: 'block' }}
            aria-label="Flujo de Scrum"
        >
            <defs>
                <filter id="scrumGlow">
                    <feGaussianBlur stdDeviation="3" result="b" />
                    <feMerge>
                        <feMergeNode in="b" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <marker id="arrowDown" viewBox="0 0 8 8" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                    <polygon points="0,0 8,4 0,8" fill="rgba(255,255,255,0.2)" />
                </marker>
            </defs>

            <rect
                width="980"
                height="260"
                rx="12"
                fill="rgba(255,255,255,0.02)"
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="1"
            />

            {STAGES.slice(0, -1).map((stage, index) => {
                const x1 = bx(index) + boxW + 2;
                const x2 = bx(index + 1) - 2;
                const mid = cy;

                return (
                    <g key={`arrow-${stage.id}`}>
                        <line
                            x1={x1}
                            y1={mid}
                            x2={x2}
                            y2={mid}
                            stroke="rgba(255,255,255,0.12)"
                            strokeWidth="2"
                            strokeDasharray="5 4"
                        />
                        <polygon points={`${x2},${mid} ${x2 - 9},${mid - 5} ${x2 - 9},${mid + 5}`} fill="rgba(255,255,255,0.18)" />
                        <svg x={x1} y={mid - 7} width={x2 - x1} height="14" overflow="visible">
                            <FlowDot isPlaying={isPlaying} color={STAGES[index + 1].color} delay={index * 1.4} />
                        </svg>
                    </g>
                );
            })}

            <path
                d={`M ${bx(4) + boxW / 2} ${cy + boxH / 2 + 2}
                    Q ${bcx(4) + 20} ${cy + boxH / 2 + 44}
                      ${(bcx(0) + bcx(4)) / 2} ${cy + boxH / 2 + 44}
                    Q ${bcx(0) - 20} ${cy + boxH / 2 + 44}
                      ${bx(0) + boxW / 2} ${cy + boxH / 2 + 2}`}
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="2"
                strokeDasharray="6 5"
                markerEnd="url(#arrowDown)"
            />
            <text
                x={(bcx(0) + bcx(4)) / 2}
                y={cy + boxH / 2 + 62}
                textAnchor="middle"
                fontSize="10"
                fill="rgba(255,255,255,0.3)"
                fontFamily="sans-serif"
            >
                nuevo Sprint
            </text>

            {STAGES.map((stage, index) => (
                <g key={stage.id}>
                    <rect
                        x={bx(index)}
                        y={cy - boxH / 2}
                        width={boxW}
                        height={boxH}
                        rx="10"
                        fill="rgba(255,255,255,0.04)"
                        stroke={stage.color}
                        strokeWidth="1.5"
                        strokeOpacity="0.5"
                    />

                    <AnimatePresence>
                        {isPlaying && (
                            <motion.rect
                                x={bx(index)}
                                y={cy - boxH / 2}
                                width={boxW}
                                height={boxH}
                                rx="10"
                                fill={stage.color}
                                fillOpacity="0"
                                stroke={stage.color}
                                strokeWidth="2"
                                initial={{ strokeOpacity: 0, fillOpacity: 0 }}
                                animate={{
                                    strokeOpacity: [0, 0.9, 0.9, 0],
                                    fillOpacity: [0, 0.1, 0.1, 0],
                                }}
                                transition={{ delay: index * 1.4, duration: 1.4, ease: 'easeInOut' }}
                            />
                        )}
                    </AnimatePresence>

                    <text x={bcx(index)} y={cy - 14} textAnchor="middle" fontSize="18">
                        {stage.icon}
                    </text>

                    {stage.label.split('\n').map((line, lineIndex) => (
                        <text
                            key={`${stage.id}-${lineIndex}`}
                            x={bcx(index)}
                            y={cy + 10 + lineIndex * 15}
                            textAnchor="middle"
                            fontSize="10.5"
                            fontWeight="600"
                            fontFamily="sans-serif"
                            fill="#fff"
                        >
                            {line}
                        </text>
                    ))}
                </g>
            ))}
        </svg>
    );
}
