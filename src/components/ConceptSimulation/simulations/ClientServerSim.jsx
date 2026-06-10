import Icon from '../../Icon/Icon';
import { AnimatedMotionGroup } from './NetworkAnimationPrimitives';

export default function ClientServerSim({ isPlaying }) {
    const requestColor = '#FF5A1F';
    const responseColor = '#b4dcf0';

    return (
        <svg viewBox="0 0 400 300" className="sim-svg" preserveAspectRatio="xMidYMid meet">
            <path d="M 100 220 L 200 80" className="sim-path" />
            <path d="M 200 250 L 200 80" className="sim-path" />
            <path d="M 300 220 L 200 80" className="sim-path" />

            {isPlaying && (
                <>
                    <AnimatedMotionGroup begin="0.2s" dur="1s" path="M 100 220 L 200 80">
                        <circle cx="0" cy="0" r="5" fill={requestColor} className="sim-packet" />
                    </AnimatedMotionGroup>
                    <AnimatedMotionGroup begin="0.8s" dur="1s" path="M 200 250 L 200 80">
                        <circle cx="0" cy="0" r="5" fill={requestColor} className="sim-packet" />
                    </AnimatedMotionGroup>
                    <AnimatedMotionGroup begin="1.4s" dur="1s" path="M 300 220 L 200 80">
                        <circle cx="0" cy="0" r="5" fill={requestColor} className="sim-packet" />
                    </AnimatedMotionGroup>

                    <AnimatedMotionGroup begin="2.2s" dur="1s" path="M 200 80 L 100 220">
                        <circle cx="0" cy="0" r="5" fill={responseColor} className="sim-packet" />
                    </AnimatedMotionGroup>
                    <AnimatedMotionGroup begin="2.8s" dur="1s" path="M 200 80 L 200 250">
                        <circle cx="0" cy="0" r="5" fill={responseColor} className="sim-packet" />
                    </AnimatedMotionGroup>
                    <AnimatedMotionGroup begin="3.4s" dur="1s" path="M 200 80 L 300 220">
                        <circle cx="0" cy="0" r="5" fill={responseColor} className="sim-packet" />
                    </AnimatedMotionGroup>
                </>
            )}

            <g transform="translate(200, 80)">
                <circle cx="0" cy="0" r="30" className="sim-node sim-node--server" />
                <foreignObject x="-12" y="-12" width="24" height="24">
                    <div style={{ color: '#FF5A1F' }}><Icon name="server" size={24} /></div>
                </foreignObject>
                <text x="0" y="45" className="sim-label">Servidor</text>
            </g>

            <g transform="translate(100, 220)">
                <circle cx="0" cy="0" r="24" className="sim-node sim-node--client" />
                <foreignObject x="-10" y="-10" width="20" height="20">
                    <div style={{ color: '#fff' }}><Icon name="monitor" size={20} /></div>
                </foreignObject>
                <text x="0" y="38" className="sim-label">Cliente A</text>
            </g>
            <g transform="translate(200, 250)">
                <circle cx="0" cy="0" r="24" className="sim-node sim-node--client" />
                <foreignObject x="-10" y="-10" width="20" height="20">
                    <div style={{ color: '#fff' }}><Icon name="monitor" size={20} /></div>
                </foreignObject>
                <text x="0" y="38" className="sim-label">Cliente B</text>
            </g>
            <g transform="translate(300, 220)">
                <circle cx="0" cy="0" r="24" className="sim-node sim-node--client" />
                <foreignObject x="-10" y="-10" width="20" height="20">
                    <div style={{ color: '#fff' }}><Icon name="monitor" size={20} /></div>
                </foreignObject>
                <text x="0" y="38" className="sim-label">Cliente C</text>
            </g>
        </svg>
    );
}
