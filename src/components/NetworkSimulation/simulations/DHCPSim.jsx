import { useState, useEffect } from 'react';
import Icon from '../../Icon/Icon';

export default function DHCPSim({ isPlaying }) {
    const [ip, setIp] = useState('0.0.0.0');

    useEffect(() => {
        if (isPlaying) {
            setIp('0.0.0.0');
            // La asignación de IP ocurre al final del proceso ACK (alrededor de los 7.5 segundos)
            const timer = setTimeout(() => {
                setIp('192.168.1.100');
            }, 7500);
            return () => clearTimeout(timer);
        }
    }, [isPlaying]);

    return (
        <svg viewBox="0 0 500 300" className="sim-svg">
            <defs>
                <linearGradient id="dhcp-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
                    <stop offset="100%" stopColor="rgba(0, 212, 255, 0.1)" />
                </linearGradient>
            </defs>

            {/* Background connection area */}
            <rect x="120" y="140" width="260" height="20" fill="url(#dhcp-grad)" rx="10" />
            <path id="path-dhcp" d="M 100 150 L 400 150" className="sim-path" />

            {/* Step 1. Discover: Client -> Broadcast */}
            <g className={`dhcp-msg ${isPlaying ? 'dhcp-msg--discover' : ''}`} style={{ opacity: 0 }} transform="translate(100, 150)">
                <circle cx="0" cy="0" r="6" fill="#ffb86c" className="sim-packet" />
                <rect x="-40" y="-35" width="80" height="22" rx="4" fill="rgba(255, 184, 108, 0.1)" stroke="#ffb86c" strokeWidth="1" />
                <text x="0" y="-20" className="sim-label" fill="#ffb86c">DISCOVER</text>
            </g>

            {/* Step 2. Offer: Server -> Client */}
            <g className={`dhcp-msg ${isPlaying ? 'dhcp-msg--offer' : ''}`} style={{ opacity: 0 }} transform="translate(400, 150)">
                <circle cx="0" cy="0" r="6" fill="#50fa7b" className="sim-packet" />
                <rect x="-35" y="15" width="70" height="22" rx="4" fill="rgba(80, 250, 123, 0.1)" stroke="#50fa7b" strokeWidth="1" />
                <text x="0" y="30" className="sim-label" fill="#50fa7b">OFFER</text>
            </g>

            {/* Step 3. Request: Client -> Server */}
            <g className={`dhcp-msg ${isPlaying ? 'dhcp-msg--request' : ''}`} style={{ opacity: 0 }} transform="translate(100, 150)">
                <circle cx="0" cy="0" r="6" fill="#8be9fd" className="sim-packet" />
                <rect x="-40" y="-35" width="80" height="22" rx="4" fill="rgba(139, 233, 253, 0.1)" stroke="#8be9fd" strokeWidth="1" />
                <text x="0" y="-20" className="sim-label" fill="#8be9fd">REQUEST</text>
            </g>

            {/* Step 4. ACK: Server -> Client */}
            <g className={`dhcp-msg ${isPlaying ? 'dhcp-msg--ack' : ''}`} style={{ opacity: 0 }} transform="translate(400, 150)">
                <circle cx="0" cy="0" r="6" fill="#bd93f9" className="sim-packet" />
                <rect x="-40" y="15" width="80" height="22" rx="4" fill="rgba(189, 147, 249, 0.1)" stroke="#bd93f9" strokeWidth="1" />
                <text x="0" y="30" className="sim-label" fill="#bd93f9">ACK (IP OK)</text>
            </g>

            {/* Nodes */}
            <g transform="translate(100, 150)">
                <circle cx="0" cy="0" r="30" className="sim-node sim-node--client" />
                <foreignObject x="-12" y="-12" width="24" height="24">
                    <div style={{ color: '#fff' }}><Icon name="monitor" size={24} /></div>
                </foreignObject>
                <text x="0" y="50" className="sim-label">Cliente ({ip})</text>
            </g>

            <g transform="translate(400, 150)">
                <circle cx="0" cy="0" r="36" className="sim-node sim-node--server" />
                <foreignObject x="-16" y="-16" width="32" height="32">
                    <div style={{ color: '#00d4ff' }}><Icon name="server" size={32} /></div>
                </foreignObject>
                <text x="0" y="55" className="sim-label">Servidor DHCP</text>
            </g>
        </svg>
    );
}
