import { motion, AnimatePresence } from 'framer-motion';

// Sprint cycle stages
const STAGES = [
    { id: 'backlog',  label: 'Product\nBacklog',  color: '#f59e0b', icon: '📋' },
    { id: 'planning', label: 'Sprint\nPlanning',  color: '#a78bfa', icon: '🗓' },
    { id: 'sprint',   label: 'Sprint\n(1-4 sem)', color: '#00d4ff', icon: '⚡' },
    { id: 'review',   label: 'Sprint\nReview',    color: '#00ff88', icon: '✅' },
    { id: 'retro',    label: 'Retro-\nspectiva',  color: '#fb7185', icon: '🔄' },
];

// The flowing particle moves through stages 0→1→2→3→4
function FlowDot({ isPlaying, fromIdx, color, delay }) {
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
    // viewBox 980×240
    const boxW = 110, boxH = 90;
    const gapX  = 75;
    const total  = STAGES.length * boxW + (STAGES.length - 1) * gapX;
    const startX = (980 - total) / 2;
    const cy     = 120;

    const bx = (i) => startX + i * (boxW + gapX);      // left edge of box i
    const bcx = (i) => bx(i) + boxW / 2;               // center x of box i

    return (
        <svg viewBox="0 0 980 240" style={{ width: '100%', height: 'auto', display: 'block' }}
             aria-label="Flujo de Scrum">
            <defs>
                <filter id="scrumGlow">
                    <feGaussianBlur stdDeviation="3" result="b"/>
                    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
            </defs>

            {/* Background */}
            <rect width="980" height="240" rx="12"
                  fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>

            {/* Arrows between boxes + flowing dots */}
            {STAGES.slice(0, -1).map((s, i) => {
                const x1 = bx(i) + boxW + 2;
                const x2 = bx(i + 1) - 2;
                const mid = cy;
                return (
                    <g key={`arrow-${i}`}>
                        {/* Static dashed line */}
                        <line x1={x1} y1={mid} x2={x2} y2={mid}
                              stroke="rgba(255,255,255,0.12)" strokeWidth="2" strokeDasharray="5 4"/>
                        {/* Arrow head */}
                        <polygon points={`${x2},${mid} ${x2-9},${mid-5} ${x2-9},${mid+5}`}
                                 fill="rgba(255,255,255,0.18)"/>
                        {/* Animated dot */}
                        <svg x={x1} y={mid - 7} width={x2 - x1} height="14" overflow="visible">
                            <FlowDot isPlaying={isPlaying} fromIdx={i} color={STAGES[i + 1].color} delay={i * 1.4}/>
                        </svg>
                    </g>
                );
            })}

            {/* Curved "new sprint" return arrow at bottom */}
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
            <defs>
                <marker id="arrowDown" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                    <polygon points="0,0 8,4 0,8" fill="rgba(255,255,255,0.2)"/>
                </marker>
            </defs>
            <text x={(bcx(0) + bcx(4)) / 2} y={cy + boxH / 2 + 58}
                  textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.3)" fontFamily="sans-serif">
                nuevo Sprint
            </text>

            {/* Stage boxes */}
            {STAGES.map((s, i) => (
                <g key={s.id}>
                    {/* Box */}
                    <rect x={bx(i)} y={cy - boxH / 2}
                          width={boxW} height={boxH} rx="10"
                          fill="rgba(255,255,255,0.04)"
                          stroke={s.color} strokeWidth="1.5" strokeOpacity="0.5"/>

                    {/* Glow pulse when active */}
                    <AnimatePresence>
                        {isPlaying && (
                            <motion.rect
                                x={bx(i)} y={cy - boxH / 2}
                                width={boxW} height={boxH} rx="10"
                                fill={s.color} fillOpacity="0"
                                stroke={s.color} strokeWidth="2"
                                initial={{ strokeOpacity: 0, fillOpacity: 0 }}
                                animate={{ strokeOpacity: [0, 0.9, 0.9, 0], fillOpacity: [0, 0.1, 0.1, 0] }}
                                transition={{ delay: i * 1.4, duration: 1.4, ease: 'easeInOut' }}
                            />
                        )}
                    </AnimatePresence>

                    {/* Icon */}
                    <text x={bcx(i)} y={cy - 14} textAnchor="middle" fontSize="18">{s.icon}</text>

                    {/* Label (multiline) */}
                    {s.label.split('\n').map((line, li) => (
                        <text key={li} x={bcx(i)} y={cy + 10 + li * 15}
                              textAnchor="middle" fontSize="10.5" fontWeight="600"
                              fontFamily="sans-serif" fill="#fff">
                            {line}
                        </text>
                    ))}
                </g>
            ))}
        </svg>
    );
}
