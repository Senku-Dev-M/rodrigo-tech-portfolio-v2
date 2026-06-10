import { motion, AnimatePresence } from 'framer-motion';

// ── Zone config ────────────────────────────────────────────────
const ZONES = [
    { id: 'wd',    label: 'Working\nDirectory', icon: '📁', color: '#FF8A5C', desc: 'Editas archivos' },
    { id: 'stage', label: 'Staging\nArea',       icon: '📋', color: '#7dd3fc', desc: 'git add' },
    { id: 'local', label: 'Local\nRepository',   icon: '💾', color: '#FF5A1F', desc: 'git commit' },
    { id: 'remote',label: 'Remote\n(GitHub)',     icon: '☁️', color: '#00ff88', desc: 'git push' },
];

const ARROWS = [
    { from: 'wd',    to: 'stage', label: 'git add',    color: '#7dd3fc', delay: 0 },
    { from: 'stage', to: 'local', label: 'git commit', color: '#FF5A1F', delay: 1.8 },
    { from: 'local', to: 'remote',label: 'git push',   color: '#00ff88', delay: 3.6 },
];

// ── Animated dot that travels along an arrow ────────────────────
function TravelDot({ isPlaying, delay, color }) {
    return (
        <AnimatePresence>
            {isPlaying && (
                <motion.circle
                    r={7}
                    fill={color}
                    filter="url(#glow)"
                    initial={{ cx: '0%', opacity: 0 }}
                    animate={{ cx: '100%', opacity: [0, 1, 1, 0] }}
                    exit={{ opacity: 0 }}
                    transition={{ delay, duration: 1.4, ease: 'easeInOut' }}
                />
            )}
        </AnimatePresence>
    );
}

export default function GitFlowSim({ isPlaying }) {
    // Layout constants — viewBox 900×220
    const zoneW = 130;
    const zoneH = 100;
    const zoneY = 60;
    const gap   = 95;   // space between right edge of one zone and left of next
    const totalW = ZONES.length * zoneW + (ZONES.length - 1) * gap;
    const startX = (900 - totalW) / 2;

    // Precompute center-x for each zone
    const cx = ZONES.map((_, i) => startX + i * (zoneW + gap) + zoneW / 2);

    return (
        <svg
            viewBox="0 0 900 240"
            preserveAspectRatio="xMidYMid meet"
            style={{ width: '100%', height: 'auto', display: 'block' }}
            aria-label="Diagrama del flujo de Git"
        >
            <defs>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="3.5" result="blur"/>
                    <feMerge>
                        <feMergeNode in="blur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>

            {/* ── Background ─────────────────────────────── */}
            <rect width="900" height="240" rx="12" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

            {/* ── Arrows + labels ─────────────────────────── */}
            {ARROWS.map((a, i) => {
                const x1 = cx[i] + zoneW / 2 - 8;
                const x2 = cx[i + 1] - zoneW / 2 + 8;
                const midX = (x1 + x2) / 2;
                const lineY = zoneY + zoneH / 2;

                return (
                    <g key={a.from}>
                        {/* Static dashed line */}
                        <line
                            x1={x1} y1={lineY} x2={x2} y2={lineY}
                            stroke="rgba(255,255,255,0.12)"
                            strokeWidth="2"
                            strokeDasharray="6 4"
                        />
                        {/* Arrow head */}
                        <polygon
                            points={`${x2},${lineY} ${x2-10},${lineY-5} ${x2-10},${lineY+5}`}
                            fill="rgba(255,255,255,0.15)"
                        />
                        {/* Command label */}
                        <text
                            x={midX} y={lineY - 14}
                            textAnchor="middle"
                            fontSize="11"
                            fontFamily="monospace"
                            fill={a.color}
                            opacity="0.85"
                        >
                            {a.label}
                        </text>

                        {/* Animated traveling dot */}
                        <svg x={x1} y={lineY - 7} width={x2 - x1} height="14" overflow="visible">
                            <TravelDot isPlaying={isPlaying} delay={a.delay} color={a.color} />
                        </svg>
                    </g>
                );
            })}

            {/* ── Zone boxes ──────────────────────────────── */}
            {ZONES.map((z, i) => {
                const bx = cx[i] - zoneW / 2;
                return (
                    <g key={z.id}>
                        {/* Box background */}
                        <rect
                            x={bx} y={zoneY}
                            width={zoneW} height={zoneH}
                            rx="10"
                            fill="rgba(255,255,255,0.04)"
                            stroke={z.color}
                            strokeWidth="1.5"
                            strokeOpacity="0.5"
                        />

                        {/* Animated active glow when packet arrives */}
                        <AnimatePresence>
                            {isPlaying && (
                                <motion.rect
                                    x={bx} y={zoneY}
                                    width={zoneW} height={zoneH}
                                    rx="10"
                                    fill={z.color}
                                    fillOpacity={0}
                                    stroke={z.color}
                                    strokeWidth="2"
                                    initial={{ strokeOpacity: 0, fillOpacity: 0 }}
                                    animate={{
                                        strokeOpacity: [0, 0.9, 0.9, 0],
                                        fillOpacity:   [0, 0.08, 0.08, 0],
                                    }}
                                    transition={{
                                        delay: i * 1.8,
                                        duration: 1.6,
                                        ease: 'easeInOut',
                                    }}
                                />
                            )}
                        </AnimatePresence>

                        {/* Icon */}
                        <text
                            x={cx[i]} y={zoneY + 30}
                            textAnchor="middle"
                            fontSize="18"
                        >
                            {z.icon}
                        </text>

                        {/* Zone name (supports line break via dy) */}
                        {z.label.split('\n').map((line, li) => (
                            <text
                                key={li}
                                x={cx[i]}
                                y={zoneY + 54 + li * 15}
                                textAnchor="middle"
                                fontSize="11.5"
                                fontWeight="600"
                                fontFamily="sans-serif"
                                fill="#fff"
                            >
                                {line}
                            </text>
                        ))}

                        {/* Sub-descriptor */}
                        <text
                            x={cx[i]} y={zoneY + zoneH + 18}
                            textAnchor="middle"
                            fontSize="10"
                            fontFamily="monospace"
                            fill={z.color}
                            opacity="0.75"
                        >
                            {z.desc}
                        </text>
                    </g>
                );
            })}
        </svg>
    );
}

