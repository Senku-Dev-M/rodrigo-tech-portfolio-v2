import Icon from '../../Icon/Icon';

export default function DNSSim({ isPlaying }) {
    return (
        <svg viewBox="0 0 500 300" className="sim-svg">
            <path id="path-dns" d="M 120 150 L 380 150" className="sim-path" />

            {/* Query */}
            <g className={`dns-msg ${isPlaying ? 'dns-msg--query' : ''}`} style={{ opacity: 0 }} transform="translate(120, 150)">
                <circle cx="0" cy="0" r="6" fill="#f1fa8c" className="sim-packet" />
                <rect x="-65" y="-35" width="130" height="22" rx="4" fill="rgba(241, 250, 140, 0.1)" stroke="#f1fa8c" strokeWidth="1" />
                <text x="0" y="-20" className="sim-label" fill="#f1fa8c">¿IP de debian.org?</text>
            </g>

            {/* Response */}
            <g className={`dns-msg ${isPlaying ? 'dns-msg--res' : ''}`} style={{ opacity: 0 }} transform="translate(380, 150)">
                <circle cx="0" cy="0" r="6" fill="#50fa7b" className="sim-packet" />
                <rect x="-65" y="15" width="130" height="22" rx="4" fill="rgba(80, 250, 123, 0.1)" stroke="#50fa7b" strokeWidth="1" />
                <text x="0" y="30" className="sim-label" fill="#50fa7b">Es 128.31.0.62</text>
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
                <text x="0" y="50" className="sim-label">DNS Server (8.8.8.8)</text>
            </g>
        </svg>
    );
}
