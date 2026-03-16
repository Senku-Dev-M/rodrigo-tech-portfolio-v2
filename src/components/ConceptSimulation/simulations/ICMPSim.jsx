import Icon from '../../Icon/Icon';
import { AnimatedMotionGroup } from './NetworkAnimationPrimitives';

export default function ICMPSim({ isPlaying }) {
    return (
        <svg viewBox="0 0 500 300" className="sim-svg" preserveAspectRatio="xMidYMid meet">
            <path d="M 120 150 L 380 150" className="sim-path" />

            {isPlaying && (
                <>
                    <AnimatedMotionGroup begin="0.25s" dur="1.35s" path="M 120 150 L 380 150">
                        <circle cx="0" cy="0" r="6" fill="#ff79c6" className="sim-packet" />
                        <rect x="-45" y="-35" width="90" height="22" rx="4" fill="rgba(255, 121, 198, 0.1)" stroke="#ff79c6" strokeWidth="1" />
                        <text x="0" y="-20" className="sim-label" fill="#ff79c6">Echo Request</text>
                    </AnimatedMotionGroup>

                    <AnimatedMotionGroup begin="2s" dur="1.35s" path="M 380 150 L 120 150">
                        <circle cx="0" cy="0" r="6" fill="#8be9fd" className="sim-packet" />
                        <rect x="-45" y="16" width="90" height="22" rx="4" fill="rgba(139, 233, 253, 0.1)" stroke="#8be9fd" strokeWidth="1" />
                        <text x="0" y="31" className="sim-label" fill="#8be9fd">Echo Reply</text>
                    </AnimatedMotionGroup>
                </>
            )}

            <g transform="translate(120, 150)">
                <circle cx="0" cy="0" r="30" className="sim-node sim-node--client" />
                <foreignObject x="-12" y="-12" width="24" height="24">
                    <div style={{ color: '#fff' }}><Icon name="monitor" size={24} /></div>
                </foreignObject>
                <text x="0" y="50" className="sim-label">Tu VM</text>
            </g>
            <g transform="translate(380, 150)">
                <circle cx="0" cy="0" r="30" className="sim-node sim-node--server" />
                <foreignObject x="-12" y="-12" width="24" height="24">
                    <div style={{ color: '#00d4ff' }}><Icon name="server" size={24} /></div>
                </foreignObject>
                <text x="0" y="50" className="sim-label">debian.org</text>
            </g>
        </svg>
    );
}
