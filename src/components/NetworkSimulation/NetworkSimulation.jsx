import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../Icon/Icon';
import './NetworkSimulation.css';

export default function NetworkSimulation({ type = 'client-server' }) {
    const [isPlaying, setIsPlaying] = useState(false);

    // Auto-stop simulation after 4 seconds to reset state
    useEffect(() => {
        if (isPlaying) {
            const timer = setTimeout(() => setIsPlaying(false), 4000);
            return () => clearTimeout(timer);
        }
    }, [isPlaying]);

    return (
        <div className="network-sim">
            <div className="network-sim__canvas">
                {type === 'client-server' && <ClientServerSim isPlaying={isPlaying} />}
                {type === 'p2p' && <P2PSim isPlaying={isPlaying} />}
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
