import Icon from '../../Icon/Icon';

export default function ICMPSim({ isPlaying }) {
    return (
        <svg viewBox="0 0 500 300" className="sim-svg">
            <path id="path-icmp" d="M 120 150 L 380 150" className="sim-path" />

            {/* Echo Request */}
            <g className={`icmp-msg ${isPlaying ? 'icmp-msg--req' : ''}`} style={{ opacity: 0 }} transform="translate(120, 150)">
                <circle cx="0" cy="0" r="6" fill="#ff79c6" className="sim-packet" />
                <rect x="-45" y="-35" width="90" height="22" rx="4" fill="rgba(255, 121, 198, 0.1)" stroke="#ff79c6" strokeWidth="1" />
                <text x="0" y="-20" className="sim-label" fill="#ff79c6">Echo Request</text>
            </g>

            {/* Echo Reply */}
            <g className={`icmp-msg ${isPlaying ? 'icmp-msg--rep' : ''}`} style={{ opacity: 0 }} transform="translate(380, 150)">
                <circle cx="0" cy="0" r="6" fill="#8be9fd" className="sim-packet" />
                <rect x="-45" y="15" width="90" height="22" rx="4" fill="rgba(139, 233, 253, 0.1)" stroke="#8be9fd" strokeWidth="1" />
                <text x="0" y="30" className="sim-label" fill="#8be9fd">Echo Reply</text>
            </g>

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
