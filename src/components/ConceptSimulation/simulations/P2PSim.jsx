import Icon from '../../Icon/Icon';
import { AnimatedMotionGroup } from './NetworkAnimationPrimitives';

export default function P2PSim({ isPlaying }) {
    return (
        <svg viewBox="0 0 400 300" className="sim-svg" preserveAspectRatio="xMidYMid meet">
            <path d="M 200 60 L 100 230" className="sim-path" />
            <path d="M 100 230 L 300 230" className="sim-path" />
            <path d="M 300 230 L 200 60" className="sim-path" />

            {isPlaying && (
                <>
                    <AnimatedMotionGroup begin="0.2s" dur="0.95s" path="M 200 60 L 100 230">
                        <circle cx="0" cy="0" r="5" fill="#00d4ff" className="sim-packet" />
                    </AnimatedMotionGroup>
                    <AnimatedMotionGroup begin="1.1s" dur="0.95s" path="M 100 230 L 300 230">
                        <circle cx="0" cy="0" r="5" fill="#b4dcf0" className="sim-packet" />
                    </AnimatedMotionGroup>
                    <AnimatedMotionGroup begin="2s" dur="0.95s" path="M 300 230 L 200 60">
                        <circle cx="0" cy="0" r="5" fill="#00d4ff" className="sim-packet" />
                    </AnimatedMotionGroup>
                    <AnimatedMotionGroup begin="2.9s" dur="0.95s" path="M 100 230 L 200 60">
                        <circle cx="0" cy="0" r="5" fill="#b4dcf0" className="sim-packet" />
                    </AnimatedMotionGroup>
                </>
            )}

            <g transform="translate(200, 60)">
                <circle cx="0" cy="0" r="26" className="sim-node sim-node--peer" />
                <foreignObject x="-10" y="-10" width="20" height="20">
                    <div style={{ color: '#fff' }}><Icon name="users" size={20} /></div>
                </foreignObject>
                <text x="0" y="42" className="sim-label">Nodo A (Peer)</text>
            </g>
            <g transform="translate(100, 230)">
                <circle cx="0" cy="0" r="26" className="sim-node sim-node--peer" />
                <foreignObject x="-10" y="-10" width="20" height="20">
                    <div style={{ color: '#fff' }}><Icon name="users" size={20} /></div>
                </foreignObject>
                <text x="0" y="42" className="sim-label">Nodo B (Peer)</text>
            </g>
            <g transform="translate(300, 230)">
                <circle cx="0" cy="0" r="26" className="sim-node sim-node--peer" />
                <foreignObject x="-10" y="-10" width="20" height="20">
                    <div style={{ color: '#fff' }}><Icon name="users" size={20} /></div>
                </foreignObject>
                <text x="0" y="42" className="sim-label">Nodo C (Peer)</text>
            </g>
        </svg>
    );
}
