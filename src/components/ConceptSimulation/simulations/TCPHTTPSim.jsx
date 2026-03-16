export default function TCPHTTPSim({ isPlaying }) {
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
