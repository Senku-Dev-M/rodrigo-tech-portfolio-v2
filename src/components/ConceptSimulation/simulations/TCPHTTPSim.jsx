import { AnimatedMotionGroup, FadeGroup } from './NetworkAnimationPrimitives';

const STEPS = [
    {
        begin: '0.2s',
        dur: '1.2s',
        path: 'M 120 70 L 370 100',
        stroke: '#ffb86c',
        label: '[SYN]',
        labelX: 250,
        labelY: 80,
        marker: 'url(#arrow-syn)',
    },
    {
        begin: '1.8s',
        dur: '1.2s',
        path: 'M 380 120 L 130 150',
        stroke: '#8be9fd',
        label: '[SYN, ACK]',
        labelX: 250,
        labelY: 130,
        marker: 'url(#arrow-synack)',
    },
    {
        begin: '3.4s',
        dur: '1.2s',
        path: 'M 120 170 L 370 200',
        stroke: '#50fa7b',
        label: '[ACK]',
        labelX: 250,
        labelY: 180,
        marker: 'url(#arrow-ack)',
    },
    {
        begin: '5s',
        dur: '1.5s',
        path: 'M 120 230 L 370 260',
        stroke: '#bd93f9',
        label: 'HTTP GET /',
        labelX: 250,
        labelY: 235,
        marker: 'url(#arrow-http)',
        strokeWidth: 3,
    },
    {
        begin: '7.1s',
        dur: '1.5s',
        path: 'M 380 280 L 130 310',
        stroke: '#ff79c6',
        label: 'HTTP 200 OK',
        labelX: 250,
        labelY: 285,
        marker: 'url(#arrow-res)',
        strokeWidth: 3,
    },
];

export default function TCPHTTPSim({ isPlaying }) {
    return (
        <svg viewBox="0 0 500 400" className="sim-svg" preserveAspectRatio="xMidYMid meet">
            <line x1="120" y1="40" x2="120" y2="360" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="380" y1="40" x2="380" y2="360" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="5,5" />

            <text x="120" y="25" className="sim-label" fill="#fff" fontSize="14">Cliente</text>
            <text x="380" y="25" className="sim-label" fill="#00d4ff" fontSize="14">Servidor</text>

            {isPlaying && STEPS.map((step) => (
                <g key={step.label}>
                    <FadeGroup begin={step.begin} dur={step.dur}>
                        <path
                            d={step.path}
                            stroke={step.stroke}
                            strokeWidth={step.strokeWidth ?? 2}
                            markerEnd={step.marker}
                            fill="none"
                        />
                        <text x={step.labelX} y={step.labelY} className="sim-label" fill={step.stroke}>
                            {step.label}
                        </text>
                    </FadeGroup>

                    <AnimatedMotionGroup begin={step.begin} dur={step.dur} path={step.path}>
                        <circle cx="0" cy="0" r="5" fill={step.stroke} className="sim-packet" />
                    </AnimatedMotionGroup>
                </g>
            ))}

            <defs>
                <marker id="arrow-syn" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#ffb86c" />
                </marker>
                <marker id="arrow-synack" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#8be9fd" />
                </marker>
                <marker id="arrow-ack" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#50fa7b" />
                </marker>
                <marker id="arrow-http" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#bd93f9" />
                </marker>
                <marker id="arrow-res" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#ff79c6" />
                </marker>
            </defs>
        </svg>
    );
}
