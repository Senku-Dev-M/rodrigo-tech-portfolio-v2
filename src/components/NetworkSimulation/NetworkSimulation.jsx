import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../Icon/Icon';
import './NetworkSimulation.css';

export default function NetworkSimulation({ type = 'client-server' }) {
    const [isPlaying, setIsPlaying] = useState(false);

    // Auto-stop simulation to reset state
    useEffect(() => {
        if (isPlaying) {
            let timeout = 4000;
            if (type === 'dhcp') timeout = 8500;
            if (type === 'tcp-http') timeout = 10000; // Handshake takes longer

            const timer = setTimeout(() => setIsPlaying(false), timeout);
            return () => clearTimeout(timer);
        }
    }, [isPlaying, type]);

    return (
        <div className="network-sim">
            <div className="network-sim__canvas">
                {type === 'client-server' && <ClientServerSim isPlaying={isPlaying} />}
                {type === 'p2p' && <P2PSim isPlaying={isPlaying} />}
                {type === 'dhcp' && <DHCPSim isPlaying={isPlaying} />}
                {type === 'icmp' && <ICMPSim isPlaying={isPlaying} />}
                {type === 'dns' && <DNSSim isPlaying={isPlaying} />}
                {type === 'tcp-http' && <TCPHTTPSim isPlaying={isPlaying} />}
            </div>

            <button
                className={`network-sim__btn ${isPlaying ? 'network-sim__btn--active' : ''}`}
                onClick={() => setIsPlaying(true)}
                disabled={isPlaying}
            >
                {isPlaying ? 'Simulando...' : 'Iniciar simulación'}
                {!isPlaying && <Icon name="rocket" size={16} />}
            </button>
        </div>
    );
}

function ClientServerSim({ isPlaying }) {
    return (
        <svg viewBox="0 0 400 300" className="sim-svg">
            {/* Connections */}
            <path id="path-c1" d="M 100 220 L 200 80" className="sim-path" />
            <path id="path-c2" d="M 200 250 L 200 80" className="sim-path" />
            <path id="path-c3" d="M 300 220 L 200 80" className="sim-path" />

            {/* Packets (Requests: Up) */}
            <circle cx="0" cy="0" r="4" className={`sim-packet ${isPlaying ? 'sim-packet--req-1' : ''}`} fill="#00d4ff" opacity={0} />
            <circle cx="0" cy="0" r="4" className={`sim-packet ${isPlaying ? 'sim-packet--req-2' : ''}`} fill="#00d4ff" opacity={0} />
            <circle cx="0" cy="0" r="4" className={`sim-packet ${isPlaying ? 'sim-packet--req-3' : ''}`} fill="#00d4ff" opacity={0} />

            {/* Packets (Responses: Down) */}
            <circle cx="0" cy="0" r="4" className={`sim-packet ${isPlaying ? 'sim-packet--res-1' : ''}`} fill="#b4dcf0" opacity={0} />
            <circle cx="0" cy="0" r="4" className={`sim-packet ${isPlaying ? 'sim-packet--res-2' : ''}`} fill="#b4dcf0" opacity={0} />
            <circle cx="0" cy="0" r="4" className={`sim-packet ${isPlaying ? 'sim-packet--res-3' : ''}`} fill="#b4dcf0" opacity={0} />

            {/* Nodes */}
            {/* Server */}
            <g transform="translate(200, 80)">
                <circle cx="0" cy="0" r="30" className="sim-node sim-node--server" />
                <foreignObject x="-12" y="-12" width="24" height="24">
                    <div style={{ color: '#00d4ff' }}><Icon name="server" size={24} /></div>
                </foreignObject>
                <text x="0" y="45" className="sim-label">Servidor</text>
            </g>

            {/* Clients */}
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

function P2PSim({ isPlaying }) {
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

function DHCPSim({ isPlaying }) {
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

function ICMPSim({ isPlaying }) {
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

function DNSSim({ isPlaying }) {
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

function TCPHTTPSim({ isPlaying }) {
    return (
        <svg viewBox="0 0 500 400" className="sim-svg">
            {/* Lifelines */}
            <line x1="120" y1="40" x2="120" y2="360" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="380" y1="40" x2="380" y2="360" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="5,5" />

            <text x="120" y="25" className="sim-label" fill="#fff" fontSize="14">Cliente</text>
            <text x="380" y="25" className="sim-label" fill="#00d4ff" fontSize="14">Servidor</text>

            <g style={{ opacity: isPlaying ? 1 : 0 }} className="tcp-arrows">
                {/* SYN */}
                <path d="M 120 70 L 370 100" stroke="#ffb86c" strokeWidth="2" markerEnd="url(#arrow-syn)" className={`tcp-arrow ${isPlaying ? 'tcp-arrow--1' : ''}`} opacity={0} />
                <text x="250" y="80" className={`sim-label ${isPlaying ? 'tcp-arrow--1' : ''}`} opacity={0} fill="#ffb86c">[SYN]</text>

                {/* SYN-ACK */}
                <path d="M 380 120 L 130 150" stroke="#8be9fd" strokeWidth="2" markerEnd="url(#arrow-synack)" className={`tcp-arrow ${isPlaying ? 'tcp-arrow--2' : ''}`} opacity={0} />
                <text x="250" y="130" className={`sim-label ${isPlaying ? 'tcp-arrow--2' : ''}`} opacity={0} fill="#8be9fd">[SYN, ACK]</text>

                {/* ACK */}
                <path d="M 120 170 L 370 200" stroke="#50fa7b" strokeWidth="2" markerEnd="url(#arrow-ack)" className={`tcp-arrow ${isPlaying ? 'tcp-arrow--3' : ''}`} opacity={0} />
                <text x="250" y="180" className={`sim-label ${isPlaying ? 'tcp-arrow--3' : ''}`} opacity={0} fill="#50fa7b">[ACK]</text>

                {/* HTTP GET */}
                <path d="M 120 230 L 370 260" stroke="#bd93f9" strokeWidth="3" markerEnd="url(#arrow-http)" className={`tcp-arrow ${isPlaying ? 'tcp-arrow--4' : ''}`} opacity={0} />
                <text x="250" y="235" className={`sim-label ${isPlaying ? 'tcp-arrow--4' : ''}`} opacity={0} fill="#bd93f9">HTTP GET /</text>

                {/* HTTP Res */}
                <path d="M 380 280 L 130 310" stroke="#ff79c6" strokeWidth="3" markerEnd="url(#arrow-res)" className={`tcp-arrow ${isPlaying ? 'tcp-arrow--5' : ''}`} opacity={0} />
                <text x="250" y="285" className={`sim-label ${isPlaying ? 'tcp-arrow--5' : ''}`} opacity={0} fill="#ff79c6">HTTP 200 OK</text>
            </g>

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
