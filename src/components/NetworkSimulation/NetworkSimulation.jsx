import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../Icon/Icon';
import ClientServerSim from './simulations/ClientServerSim';
import P2PSim from './simulations/P2PSim';
import DHCPSim from './simulations/DHCPSim';
import ICMPSim from './simulations/ICMPSim';
import DNSSim from './simulations/DNSSim';
import TCPHTTPSim from './simulations/TCPHTTPSim';
import SDLCSim from './simulations/SDLCSim';
import GitFlowSim from './simulations/GitFlowSim';
import ScrumFlowSim from './simulations/ScrumFlowSim';
import ScrumBoardSim from './simulations/ScrumBoardSim';
import './NetworkSimulation.css';

export default function NetworkSimulation({ type = 'client-server' }) {
    const [isPlaying, setIsPlaying] = useState(false);

    // Auto-stop simulation to reset state
    useEffect(() => {
        if (isPlaying) {
            let timeout = 4000;
            if (type === 'dhcp') timeout = 8500;
            if (type === 'sdlc') timeout = 8500;
            if (type === 'git-flow') timeout = 7000;
            if (type === 'scrum-flow') timeout = 9000;
            if (type === 'scrum-board') timeout = 9000;
            if (type === 'tcp-http') timeout = 10000; // Handshake takes longer

            const timer = setTimeout(() => setIsPlaying(false), timeout);
            return () => clearTimeout(timer);
        }
    }, [isPlaying, type]);

    const isWide = type === 'sdlc' || type === 'git-flow' || type === 'scrum-flow' || type === 'scrum-board';

    return (
        <div className="network-sim">
            <div className={`network-sim__canvas ${isWide ? 'network-sim__canvas--wide' : ''}`}>
                {type === 'client-server' && <ClientServerSim isPlaying={isPlaying} />}
                {type === 'p2p' && <P2PSim isPlaying={isPlaying} />}
                {type === 'dhcp' && <DHCPSim isPlaying={isPlaying} />}
                {type === 'icmp' && <ICMPSim isPlaying={isPlaying} />}
                {type === 'dns' && <DNSSim isPlaying={isPlaying} />}
                {type === 'tcp-http' && <TCPHTTPSim isPlaying={isPlaying} />}
                {type === 'sdlc' && <SDLCSim isPlaying={isPlaying} />}
                {type === 'git-flow' && <GitFlowSim isPlaying={isPlaying} />}
                {type === 'scrum-flow' && <ScrumFlowSim isPlaying={isPlaying} />}
                {type === 'scrum-board' && <ScrumBoardSim isPlaying={isPlaying} />}
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


