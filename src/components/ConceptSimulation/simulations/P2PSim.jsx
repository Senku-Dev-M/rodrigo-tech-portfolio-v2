import Icon from '../../Icon/Icon';

export default function P2PSim({ isPlaying }) {
    return (
        <svg viewBox="0 0 400 300" className="sim-svg">
            {/* Connections */}
            <path id="path-p1" d="M 200 60 L 100 230" className="sim-path" />
            <path id="path-p2" d="M 100 230 L 300 230" className="sim-path" />
            <path id="path-p3" d="M 300 230 L 200 60" className="sim-path" />

            {/* Packets */}
            {/* A -> B */}
            <circle cx="0" cy="0" r="4" className={`sim-packet ${isPlaying ? 'sim-packet--p2p-1' : ''}`} fill="#00d4ff" opacity={0} />
            {/* B -> C */}
            <circle cx="0" cy="0" r="4" className={`sim-packet ${isPlaying ? 'sim-packet--p2p-2' : ''}`} fill="#b4dcf0" opacity={0} />
            {/* C -> A */}
            <circle cx="0" cy="0" r="4" className={`sim-packet ${isPlaying ? 'sim-packet--p2p-3' : ''}`} fill="#00d4ff" opacity={0} />
            {/* B -> A */}
            <circle cx="0" cy="0" r="4" className={`sim-packet ${isPlaying ? 'sim-packet--p2p-4' : ''}`} fill="#b4dcf0" opacity={0} />

            {/* Nodes */}
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
