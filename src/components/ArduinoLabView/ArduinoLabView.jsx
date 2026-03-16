import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../Icon/Icon';
import arduinoImg from '../../assets/arduinoplaca.png';
import './ArduinoLabView.css';

const accentColor = 'var(--mentor-accent)';
const accentStrong = 'var(--mentor-accent-strong)';

// ── Data ────────────────────────────────────────────────────────
const objectives = [
    { icon: 'cpu',        text: 'Comprender qué es un microcontrolador y sus funciones.' },
    { icon: 'layers',     text: 'Conocer la arquitectura básica de la placa Arduino UNO.' },
    { icon: 'tool',       text: 'Conectar componentes electrónicos básicos en una protoboard.' },
    { icon: 'book',       text: 'Programar Arduino usando el IDE en lenguaje C++.' },
    { icon: 'zap',        text: 'Controlar un actuador (LED) mediante código embebido.' },
];

const components = [
    { name: 'Arduino UNO',     emoji: '🟦', desc: 'Microcontrolador principal.',     role: 'Cerebro del sistema' },
    { name: 'LED',             emoji: '💡', desc: 'Diodo emisor de luz.',            role: 'Actuador de salida' },
    { name: 'Resistencia',     emoji: '🟫', desc: '220Ω — limita la corriente.',       role: 'Protección del LED' },
    { name: 'Protoboard',      emoji: '🔲', desc: 'Placa de pruebas sin soldadura.',  role: 'Base del circuito' },
    { name: 'Cables Jumper',   emoji: '🔌', desc: 'Cables de conexión macho/macho.',  role: 'Interconexión' },
    { name: 'Cable USB',       emoji: '🖇️', desc: 'USB tipo B para programar.',       role: 'Comunicación + energía' },
];

const codeLines = [
    { code: 'void setup() {',          id: 0, explanation: 'setup() se ejecuta UNA SOLA VEZ al encender Arduino. Aquí inicializamos pines y configuraciones.' },
    { code: '  pinMode(13, OUTPUT);',  id: 1, explanation: 'pinMode() configura el pin 13 como SALIDA (OUTPUT), permitiendo enviar voltaje hacia él.' },
    { code: '}',                        id: 2, explanation: null },
    { code: '',                         id: 3, explanation: null },
    { code: 'void loop() {',           id: 4, explanation: 'loop() se ejecuta INFINITAMENTE después de setup(). Es el corazón del programa.' },
    { code: '  digitalWrite(13, HIGH);', id: 5, explanation: 'digitalWrite(13, HIGH) envía 5V al pin 13 → el LED se enciende.' },
    { code: '  delay(1000);',          id: 6, explanation: 'delay(1000) pausa la ejecución por 1000 milisegundos (1 segundo).' },
    { code: '  digitalWrite(13, LOW);', id: 7, explanation: 'digitalWrite(13, LOW) pone a 0V el pin 13 → el LED se apaga.' },
    { code: '  delay(1000);',          id: 8, explanation: 'Otro delay de 1 segundo. Al terminar, loop() vuelve a empezar.' },
    { code: '}',                        id: 9, explanation: null },
];

const trafficCode = `void setup() {
  pinMode(8, OUTPUT);   // Rojo
  pinMode(9, OUTPUT);   // Amarillo
  pinMode(10, OUTPUT);  // Verde
}

void loop() {
  digitalWrite(8, HIGH);  // Rojo: 3s
  delay(3000);
  digitalWrite(8, LOW);

  digitalWrite(9, HIGH);  // Amarillo: 1s
  delay(1000);
  digitalWrite(9, LOW);

  digitalWrite(10, HIGH); // Verde: 3s
  delay(3000);
  digitalWrite(10, LOW);
}`;

const experiments = [
    { title: 'Cambiar velocidad de parpadeo', desc: 'Modifica los valores de delay() para hacer el LED parpadear más rápido o lento. ¿Qué sucede con delay(100)?', icon: 'zap' },
    { title: 'Encender múltiples LEDs',       desc: 'Agrega más LEDs en los pines 12, 11 y 10. Enciéndelos en secuencia con diferentes tiempos.', icon: 'layers' },
    { title: 'Controlar LED con botón',       desc: 'Conecta un pulsador al pin 2 (INPUT). Usa digitalRead() para encender el LED solo cuando se presione.', icon: 'target' },
];

// ── Arduino Board (real photo + CSS hotspots) ────────────────────
const hotspots = [
    { id: 'mcu',     top: '60%', left: '56%', label: 'Microcontrolador ATmega328P',  desc: 'El cerebro de Arduino. Un chip de 28 pines que ejecuta tu sketch a 16 MHz. Tiene 32 KB de Flash, 2 KB de RAM y 1 KB de EEPROM.' },
    { id: 'digital', top: '10%', left: '62%', label: 'Pines Digitales 0–13',          desc: 'Entrada o salida de señales HIGH/LOW (5V / 0V). Los pines 3,5,6,9,10,11 también soportan PWM (~). Pin 13 tiene LED integrado.' },
    { id: 'analog',  top: '94%', left: '62%', label: 'Pines Analógicos A0–A5',        desc: 'Leen voltajes de 0 a 5V con resolución de 10 bits (0–1023). Perfectos para sensores de luz, temperatura, potenciómetros, etc.' },
    { id: 'power',   top: '94%', left: '36%', label: 'Pines de Alimentación',          desc: 'Incluye GND (tierra), 5V, 3.3V, Vin (entrada externa 7-12V) y RESET. GND cierra el circuito del LED en este laboratorio.' },
    { id: 'usb',     top: '35%', left: '3%',  label: 'Puerto USB tipo B',              desc: 'Conecta al PC para cargar el sketch y alimentar la placa. También permite comunicación Serial para depuración.' },
    { id: 'power_dc',top: '85%', left: '3%',  label: 'Jack de Alimentación',           desc: 'Acepta un adaptador DC de 7–12V cuando no quieres usar el USB. Útil para proyectos autónomos sin PC.' },
    { id: 'crystal', top: '50%', left: '30%', label: 'Cristal Oscilador 16 MHz',       desc: 'Marca el ritmo del microcontrolador a 16 millones de ciclos por segundo. Determina la velocidad de ejecución del código.' },
];

function ArduinoBoardPhoto() {
    const [active, setActive] = useState(null);
    const spot = hotspots.find(h => h.id === active);

    return (
        <div className="ard-board-wrap">
            <div className="ard-photo-container">
                <img
                    src={arduinoImg}
                    alt="Arduino UNO R3 real"
                    className="ard-photo"
                    draggable={false}
                />
                {/* Hotspot overlays positioned on top of the photo */}
                {hotspots.map(h => (
                    <button
                        key={h.id}
                        className={`ard-pin ${active === h.id ? 'ard-pin--active' : ''}`}
                        style={{ top: h.top, left: h.left }}
                        onClick={() => setActive(active === h.id ? null : h.id)}
                        title={h.label}
                        aria-label={h.label}
                    >
                        <span className="ard-pin__pulse" />
                        <span className="ard-pin__dot">i</span>
                    </button>
                ))}
            </div>

            <AnimatePresence>
                {spot && (
                    <motion.div
                        className="ard-tooltip"
                        key={spot.id}
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <button className="ard-tooltip__close" onClick={() => setActive(null)}>✕</button>
                        <h4 className="ard-tooltip__title">{spot.label}</h4>
                        <p className="ard-tooltip__desc">{spot.desc}</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <p className="ard-board-hint">
                <Icon name="target" size={13} color={accentColor} />
                Haz clic en los puntos <strong>celestes</strong> para explorar cada componente de la placa
            </p>
        </div>
    );
}

// ── Circuit SVG — Fritzing-style compact diagram ──────────────────
function CircuitSVG() {
    // Grid helpers: 10 active columns, 5 rows per half
    const ox = 195, oy = 60;      // breadboard origin
    const cp = 32, rp = 24;       // col-pitch, row-pitch
    const cols = 10, halfRows = 5;
    const bw = (cols - 1) * cp + 44;
    const gap = 18;                // center gap height
    const bh = halfRows * rp + gap + halfRows * rp + 16;

    // Convert grid position to SVG pixel
    const hx = (c) => ox + 22 + c * cp;
    const hy = (r) => r < halfRows
        ? oy + 16 + r * rp
        : oy + 16 + halfRows * rp + gap + (r - halfRows) * rp;

    // Resistor band colors for 220Ω (Red-Red-Brown-Gold)
    const bands = ['#cc2929', '#cc2929', '#6b3a1f', '#d4a800'];

    return (
        <div className="ard-circuit-wrap">
            <svg viewBox="0 0 560 310" className="ard-circuit-svg" aria-label="Circuito LED con Arduino">

                {/* ── Background ── */}
                <rect width="560" height="310" fill="#111827" rx="12" />

                {/* ══════════════════════════════════════════════════════
                    ARDUINO UNO — schematic box (left side)
                ══════════════════════════════════════════════════════ */}
                <g transform="translate(14, 55)">
                    {/* PCB body */}
                    <rect x="0" y="0" width="155" height="200" rx="8"
                        fill="#00706f" stroke="#004f4e" strokeWidth="2" />

                    {/* Silk-screen traces */}
                    <line x1="20" y1="25" x2="130" y2="25" stroke="rgba(255,220,80,0.1)" strokeWidth="1" />
                    <line x1="60" y1="10" x2="60" y2="190" stroke="rgba(255,220,80,0.08)" strokeWidth="1" />

                    {/* ATmega chip */}
                    <rect x="72" y="95" width="58" height="80" rx="3" fill="#111" stroke="#333" strokeWidth="1.2" />
                    {[0,1,2,3,4,5,6,7].map(i => (
                        <g key={i}>
                            <rect x="67" y={100 + i*8} width="5" height="3.5" rx="0.5" fill="#aaa" />
                            <rect x="130" y={100 + i*8} width="5" height="3.5" rx="0.5" fill="#aaa" />
                        </g>
                    ))}
                    <path d="M84,95 A5,5 0 0,1 98,95" fill="none" stroke="#555" strokeWidth="1.2" />
                    <text x="101" y="132" textAnchor="middle" fontSize="5.5" fill="#ccc" fontFamily="monospace">ATmega</text>
                    <text x="101" y="140" textAnchor="middle" fontSize="5.5" fill="#ccc" fontFamily="monospace">328P</text>

                    {/* Crystal */}
                    <rect x="30" y="108" width="26" height="10" rx="4.5" fill="#c8c8c8" stroke="#999" strokeWidth="1" />
                    <text x="43" y="116" textAnchor="middle" fontSize="4" fill="#444" fontFamily="monospace">16 MHz</text>

                    {/* Capacitors */}
                    <rect x="18" y="148" width="10" height="16" rx="2.5" fill="#101010" stroke="#555" strokeWidth="0.9" />
                    <rect x="32" y="148" width="10" height="16" rx="2.5" fill="#101010" stroke="#555" strokeWidth="0.9" />
                    <text x="23" y="172" fontSize="4" fill="#888" fontFamily="monospace">47µ 47µ</text>

                    {/* USB connector */}
                    <rect x="-14" y="18" width="18" height="26" rx="2.5" fill="#999" stroke="#666" strokeWidth="1.5" />
                    <rect x="-12" y="21" width="13" height="20" rx="1.5" fill="#ccc" />
                    <text x="-3" y="52" textAnchor="middle" fontSize="4.5" fill="#9dd" fontFamily="monospace">USB</text>

                    {/* DC Jack */}
                    <circle cx="18" cy="190" r="9" fill="#2a2a2a" stroke="#555" strokeWidth="1.5" />
                    <circle cx="18" cy="190" r="3.5" fill="#111" />
                    <text x="18" y="206" textAnchor="middle" fontSize="4" fill="#888" fontFamily="monospace">DC</text>

                    {/* Reset button */}
                    <rect x="40" y="68" width="18" height="18" rx="4" fill="#111" stroke="#444" strokeWidth="1" />
                    <circle cx="49" cy="77" r="5.5" fill="#cc1111" />
                    <circle cx="49" cy="77" r="2.5" fill="#ff3a3a" />
                    <text x="49" y="92" textAnchor="middle" fontSize="4" fill="#888" fontFamily="monospace">RST</text>

                    {/* Status LEDs */}
                    <circle cx="130" cy="72" r="3.5" fill="#00cc00">
                        <animate attributeName="fill" values="#00cc00;#00ff88;#00cc00" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="120" cy="72" r="2.8" fill="#ff9900" opacity="0.45" />
                    <circle cx="112" cy="72" r="2.8" fill="#ff9900" opacity="0.35" />
                    <text x="121" y="84" textAnchor="middle" fontSize="3.5" fill="#9dd" fontFamily="monospace">ON TX RX</text>

                    {/* Brand */}
                    <text x="77" y="64" textAnchor="middle" fontSize="10" fill="white" fontFamily="sans-serif" fontWeight="800" opacity="0.9">ARDUINO</text>
                    <text x="77" y="76" textAnchor="middle" fontSize="6.5" fill="white" fontFamily="sans-serif" opacity="0.6">UNO R3</text>
                    <text x="77" y="50" textAnchor="middle" fontSize="14" fill="rgba(255,255,255,0.3)">∞</text>

                    {/* Digital pins top */}
                    {Array.from({length:10}).map((_,i) => (
                        <g key={`dp${i}`}>
                            <rect x={8 + i*14} y="-12" width="9" height="14" rx="1.5" fill="#1f1f1f" stroke="#c8a500" strokeWidth="0.9" />
                            <circle cx={12.5 + i*14} cy="-5" r="2" fill="#c8a500" />
                        </g>
                    ))}
                    <text x="120" y="-16" textAnchor="middle" fontSize="5.5" fill="#e74c3c" fontFamily="monospace" fontWeight="bold">13</text>

                    {/* Analog + power pins bottom */}
                    {Array.from({length:8}).map((_,i) => (
                        <g key={`ap${i}`}>
                            <rect x={8 + i*17} y="200" width="9" height="14" rx="1.5" fill="#1f1f1f" stroke="#c8a500" strokeWidth="0.9" />
                            <circle cx={12.5 + i*17} cy="207" r="2" fill="#c8a500" />
                        </g>
                    ))}
                    <text x="25" y="220" textAnchor="middle" fontSize="5.5" fill="#2980b9" fontFamily="monospace" fontWeight="bold">GND</text>
                </g>


                {/* ══════════════════════════════════════════════════════
                    MINI BREADBOARD — 10 active columns, compact
                ══════════════════════════════════════════════════════ */}
                {(() => {
                    const ox = 195, oy = 50;
                    const cp = 30, rp = 26;
                    const cols = 10, halfR = 5;
                    const bw = (cols - 1) * cp + 50;
                    const gapH = 20;
                    const bh = halfR * rp + gapH + halfR * rp + 30;
                    const hx = (c) => ox + 24 + c * cp;
                    const hy = (r) => r < halfR
                        ? oy + 26 + r * rp
                        : oy + 26 + halfR * rp + gapH + (r - halfR) * rp;

                    return (
                        <g>
                            <rect x={ox} y={oy} width={bw} height={bh} rx="10"
                                fill="#ede0c0" stroke="#c0a860" strokeWidth="2.5" />
                            <rect x={ox} y={oy + 26 + halfR * rp} width={bw} height={gapH} fill="#b89840" />
                            <text x={ox + bw / 2} y={oy + 26 + halfR * rp + 14}
                                textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.3)" fontFamily="monospace">— GAP —</text>

                            {['a','b','c','d','e'].map((l,i) => (
                                <text key={l} x={ox + 10} y={hy(i) + 5} fontSize="8" fill="#888" fontFamily="monospace" fontWeight="bold" textAnchor="middle">{l}</text>
                            ))}
                            {['f','g','h','i','j'].map((l,i) => (
                                <text key={l} x={ox + 10} y={hy(i + halfR) + 5} fontSize="8" fill="#888" fontFamily="monospace" fontWeight="bold" textAnchor="middle">{l}</text>
                            ))}
                            {Array.from({length: cols}).map((_, c) => (
                                <text key={c} x={hx(c)} y={oy + 16} textAnchor="middle" fontSize="8" fill="#b0a060" fontFamily="monospace">{c + 1}</text>
                            ))}

                            {/* All holes */}
                            {Array.from({length: cols}).map((_, c) =>
                                Array.from({length: halfR * 2}).map((_, r) => (
                                    <circle key={`h-${c}-${r}`} cx={hx(c)} cy={hy(r)} r="5"
                                        fill="#cfc0a0" stroke="#a89060" strokeWidth="1" />
                                ))
                            )}

                            {/* RESISTOR 220Ω cols 1→4 row b */}
                            <line x1={hx(1)} y1={hy(1)} x2={hx(1)+10} y2={hy(1)} stroke="#bbb" strokeWidth="3" strokeLinecap="round" />
                            <rect x={hx(1)+10} y={hy(1)-9} width={hx(4)-hx(1)-10} height="18" rx="8" fill="#d4a843" stroke="#a07820" strokeWidth="1.5" />
                            {[{x:12,c:'#cc2929'},{x:21,c:'#cc2929'},{x:30,c:'#6b3a1f'},{x:38,c:'#d4a800'}].map(({x,c},i)=>(
                                <rect key={i} x={hx(1)+x} y={hy(1)-9} width="6" height="18" fill={c} />
                            ))}
                            <line x1={hx(4)-2} y1={hy(1)} x2={hx(4)} y2={hy(1)} stroke="#bbb" strokeWidth="3" strokeLinecap="round" />
                            <text x={(hx(1)+hx(4))/2} y={hy(1)+24} textAnchor="middle" fontSize="10" fill="#7a5020" fontFamily="monospace" fontWeight="800">220 Ω</text>

                            {/* LED col 6 rows b-c */}
                            <line x1={hx(6)} y1={hy(1)} x2={hx(6)} y2={hy(1)+9} stroke="#bbb" strokeWidth="3" strokeLinecap="round" />
                            <line x1={hx(6)} y1={hy(2)} x2={hx(6)} y2={hy(2)-7} stroke="#bbb" strokeWidth="3" strokeLinecap="round" />
                            <circle cx={hx(6)} cy={(hy(1)+hy(2))/2} r="16" fill="#ff3500" stroke="#cc2000" strokeWidth="1.8" opacity="0.94" />
                            <line x1={hx(6)-16} y1={(hy(1)+hy(2))/2+10} x2={hx(6)+16} y2={(hy(1)+hy(2))/2+10} stroke="#cc2000" strokeWidth="3" strokeLinecap="round" />
                            <ellipse cx={hx(6)-5} cy={(hy(1)+hy(2))/2-5} rx="5.5" ry="4.5" fill="rgba(255,255,255,0.5)" />
                            <circle cx={hx(6)} cy={(hy(1)+hy(2))/2} r="20" fill="#ff5500" opacity="0">
                                <animate attributeName="opacity" values="0;0.35;0" dur="1.8s" repeatCount="indefinite" />
                                <animate attributeName="r" values="20;30;20" dur="1.8s" repeatCount="indefinite" />
                            </circle>
                            <text x={hx(6)-22} y={(hy(1)+hy(2))/2+5} fontSize="13" fill="rgba(255,255,255,0.55)" fontFamily="monospace">+</text>
                            <text x={hx(6)+14} y={(hy(1)+hy(2))/2+5} fontSize="13" fill="rgba(255,255,255,0.55)" fontFamily="monospace">−</text>
                            <text x={hx(6)} y={hy(2)+32} textAnchor="middle" fontSize="10" fill="#cc4400" fontFamily="monospace" fontWeight="800">LED</text>

                            {/* Occupied holes */}
                            {[[0,1,'r'],[1,1,'r'],[4,1,'r'],[5,1,'r'],[6,1,'r'],[6,2,'b'],[7,2,'b']].map(([c,r,clr],i)=>(
                                <circle key={i} cx={hx(c)} cy={hy(r)} r="5"
                                    fill={clr==='r'?'#e74c3c':'#2980b9'}
                                    stroke={clr==='r'?'#aa1100':'#1a5890'} strokeWidth="1.2" />
                            ))}

                            {/* Internal wires */}
                            <path d={`M${hx(4)},${hy(1)} L${hx(5)},${hy(1)} L${hx(6)},${hy(1)}`}
                                stroke="#e74c3c" strokeWidth="4" fill="none" strokeLinecap="round">
                                <animate attributeName="stroke" values="#e74c3c;#ff6b35;#e74c3c" dur="1.4s" repeatCount="indefinite" />
                            </path>
                            <line x1={hx(6)} y1={hy(2)} x2={hx(7)} y2={hy(2)} stroke="#2980b9" strokeWidth="4" fill="none" strokeLinecap="round" />
                        </g>
                    );
                })()}

                {/* External wires */}
                <path d="M134,43 L134,28 L219,28 L219,76"
                    stroke="#e74c3c" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <animate attributeName="stroke" values="#e74c3c;#ff6b35;#e74c3c" dur="1.4s" repeatCount="indefinite" />
                </path>
                <path d="M25,269 L25,288 L429,288 L429,128"
                    stroke="#2980b9" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                <text x="138" y="26" fontSize="9.5" fill="#e74c3c" fontFamily="monospace" fontWeight="800">Pin 13</text>
                <text x="30" y="287" fontSize="9.5" fill="#2980b9" fontFamily="monospace" fontWeight="800">GND</text>

                {/* Legend */}
                <g transform="translate(14, 298)">
                    <circle cx="6" cy="5" r="6" fill="#e74c3c" />
                    <text x="17" y="9" fontSize="9.5" fill="rgba(255,255,255,0.65)" fontFamily="monospace">+5V / Pin 13</text>
                    <circle cx="168" cy="5" r="6" fill="#2980b9" />
                    <text x="179" y="9" fontSize="9.5" fill="rgba(255,255,255,0.65)" fontFamily="monospace">GND (0 V)</text>
                    <circle cx="300" cy="5" r="5" fill="#cfc0a0" stroke="#a89060" strokeWidth="1" />
                    <text x="310" y="9" fontSize="9.5" fill="rgba(255,255,255,0.4)" fontFamily="monospace">Hueco libre</text>
                </g>

            </svg>
        </div>
    );
}

// ── LED Simulation ───────────────────────────────────────────────
function LedSimulation() {
    const [running, setRunning] = useState(false);
    const [on, setOn] = useState(false);
    const [phase, setPhase] = useState('idle'); // idle | on | off
    const [cycle, setCycle] = useState(0);
    const timerRef = useRef(null);

    function startSim() {
        setRunning(true);
        setOn(true);
        setPhase('on');
    }

    function stopSim() {
        setRunning(false);
        clearTimeout(timerRef.current);
    }

    function resetSim() {
        stopSim();
        setOn(false);
        setPhase('idle');
        setCycle(0);
    }

    useEffect(() => {
        if (!running) return;
        let t;
        if (phase === 'on') {
            setOn(true);
            t = setTimeout(() => setPhase('off'), 1000);
        } else if (phase === 'off') {
            setOn(false);
            t = setTimeout(() => {
                setCycle(c => c + 1);
                setPhase('on');
            }, 1000);
        }
        timerRef.current = t;
        return () => clearTimeout(t);
    }, [running, phase]);

    return (
        <div className="ard-sim-wrap">
            <div className="ard-sim-board">
                {/* Mini Arduino */}
                <div className="ard-sim-arduino">
                    <span className="ard-sim-arduino-label">Arduino</span>
                    <div className="ard-sim-pin">
                        <span className="ard-sim-pin-label">Pin 13</span>
                        <div className={`ard-sim-wire ${on ? 'ard-sim-wire--hot' : ''}`} />
                    </div>
                    <div className="ard-sim-pin">
                        <span className="ard-sim-pin-label">GND</span>
                        <div className="ard-sim-wire ard-sim-wire--gnd" />
                    </div>
                </div>

                {/* Circuit */}
                <div className="ard-sim-circuit-line">
                    <div className={`ard-sim-current ${on && running ? 'ard-sim-current--flowing' : ''}`} title="Resistencia 220Ω">
                        <div className="ard-sim-resistor">220Ω</div>
                    </div>
                    <div className={`ard-sim-led ${on && running ? 'ard-sim-led--on' : ''}`} title="LED">
                        <div className="ard-sim-led-glow" />
                        <span className="ard-sim-led-label">LED</span>
                    </div>
                </div>
            </div>

            <div className="ard-sim-status">
                <div className={`ard-sim-state ${on && running ? 'ard-sim-state--on' : 'ard-sim-state--off'}`}>
                    {running ? (on ? '🔴 LED encendido — HIGH (5V)' : '⚫ LED apagado — LOW (0V)') : '⏸ Simulación pausada'}
                </div>
                {running && (
                    <div className="ard-sim-cycle">
                        Ciclo <strong>#{cycle + 1}</strong> · {on ? 'delay(1000)...' : 'delay(1000)...'}
                    </div>
                )}
            </div>

            <div className="ard-sim-controls">
                <button className={`ard-btn ${running ? 'ard-btn--secondary' : 'ard-btn--primary'}`}
                    onClick={running ? stopSim : startSim}>
                    {running ? '⏸ Pausar' : '▶ Iniciar simulación'}
                </button>
                <button className="ard-btn ard-btn--ghost" onClick={resetSim}>↺ Reiniciar</button>
            </div>

            <div className="ard-sim-code-trace">
                <div className={`ard-trace-line ${on && running ? 'ard-trace-line--active' : ''}`}>
                    → <code>digitalWrite(13, HIGH);</code>
                </div>
                <div className={`ard-trace-line ${!on && running ? 'ard-trace-line--active' : ''}`}>
                    → <code>delay(1000);</code> → <code>digitalWrite(13, LOW);</code>
                </div>
            </div>
        </div>
    );
}

// ── Flow Diagram ─────────────────────────────────────────────────
function FlowDiagram() {
    return (
        <div className="ard-flow-wrap">
            <div className="ard-flow">
                <motion.div className="ard-flow-node ard-flow-node--start"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}>
                    <span>⚡</span> Inicio (encendido)
                </motion.div>
                <div className="ard-flow-arrow ard-flow-arrow--animated" />
                <motion.div className="ard-flow-node ard-flow-node--setup"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 }}>
                    <code>void setup()</code>
                    <span className="ard-flow-node__sub">Se ejecuta 1 vez</span>
                    <div className="ard-flow-node__detail">pinMode(13, OUTPUT);</div>
                </motion.div>
                <div className="ard-flow-arrow ard-flow-arrow--animated" style={{animationDelay:'0.3s'}} />
                <motion.div className="ard-flow-node ard-flow-node--loop"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}>
                    <code>void loop()</code>
                    <span className="ard-flow-node__sub">Se repite ∞</span>
                    <div className="ard-flow-node__steps">
                        <div className="ard-flow-step ard-flow-step--on">HIGH → LED 💡</div>
                        <div className="ard-flow-step ard-flow-step--wait">delay(1000)</div>
                        <div className="ard-flow-step ard-flow-step--off">LOW → LED ⚫</div>
                        <div className="ard-flow-step ard-flow-step--wait">delay(1000)</div>
                    </div>
                </motion.div>
                <div className="ard-flow-return">
                    <div className="ard-flow-return__line" />
                    <span className="ard-flow-return__label">↩ vuelve a loop()</span>
                    <div className="ard-flow-return__line" />
                </div>
            </div>
        </div>
    );
}

// ── Main Component ───────────────────────────────────────────────
export default function ArduinoLabView({ lab }) {
    const [selectedLine, setSelectedLine] = useState(null);
    const [openExp, setOpenExp] = useState(null);
    const [showSolution, setShowSolution] = useState(false);

    const selLine = codeLines.find(l => l.id === selectedLine);

    return (
        <div className="ard-view">

            {/* ── HEADER ─────────────────────────────────────────── */}
            <div className="guide-header">
                <div className="guide-header__meta">
                    <span className="guide-type-badge">{lab.type}</span>
                    <span className="guide-difficulty" style={{ color: accentStrong }}>{lab.difficulty}</span>
                    <span className="guide-duration">{lab.duration}</span>
                </div>
                <h1 className="guide-title">{lab.title}</h1>
                <p className="guide-subtitle">{lab.subtitle}</p>
                <div className="guide-tags">
                    {lab.tags.map(t => <span key={t} className="guide-tag">{t}</span>)}
                </div>
            </div>

            {/* ── INTRODUCCIÓN ────────────────────────────────────── */}
            <section className="guide-section">
                <h2 className="guide-section__title">Introducción</h2>
                <p className="ard-intro-text">
                    La <strong>robótica</strong> es la rama de la tecnología que diseña, construye y programa máquinas capaces de
                    interactuar con el entorno físico de forma autónoma o asistida. Arduino es una plataforma de hardware y software
                    de código abierto que permite a estudiantes y makers construir proyectos electrónicos de forma sencilla, económica
                    y didáctica. Gracias a sus <strong>pines digitales y analógicos</strong>, Arduino puede leer datos de sensores y
                    enviar señales a actuadores, convirtiéndose en el punto de unión entre el <em>mundo del código</em> y el
                    <em> mundo físico</em>.
                </p>
                <div className="ard-intro-grid">
                    {[
                        { icon: 'cpu', title: 'Microcontrolador', desc: 'Arduino es un microcontrolador: un pequeño computador en un chip que ejecuta tu código y controla los pines.' },
                        { icon: 'layers', title: 'Plataforma educativa', desc: 'Diseñado para aprendizaje. Comunidad enorme, miles de tutoriales, librerías gratuitas y proyectos abiertos.' },
                        { icon: 'zap', title: 'Sensores y Actuadores', desc: 'Los sensores leen el mundo (luz, temperatura, distancia) y los actuadores actúan sobre él (motores, LEDs, buzzers).' },
                        { icon: 'rocket', title: 'Proyectos reales', desc: 'Brazos robóticos, drones, estaciones meteorológicas, domótica, vehículos autónomos... todo empieza aquí.' },
                    ].map((c, i) => (
                        <motion.div key={i} className="ard-intro-card"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}>
                            <Icon name={c.icon} size={22} color={accentColor} />
                            <h4>{c.title}</h4>
                            <p>{c.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── OBJETIVOS ───────────────────────────────────────── */}
            <section className="guide-section">
                <h2 className="guide-section__title">Objetivos de Aprendizaje</h2>
                <div className="ard-objectives">
                    {objectives.map((obj, i) => (
                        <motion.div key={i} className="ard-objective-card"
                            initial={{ opacity: 0, x: -14 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}>
                            <div className="ard-objective-icon">
                                <Icon name={obj.icon} size={18} color={accentColor} />
                            </div>
                            <span>{obj.text}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── QUÉ ES ARDUINO ─────────────────────────────── */}
            <section className="guide-section">
                <h2 className="guide-section__title">1. ¿Qué es Arduino?</h2>
                <p className="ard-section-desc">
                    Arduino es una plataforma de prototipado electrónico de código abierto basada en hardware y software fácil de usar.
                    Se utiliza en proyectos desde el encendido de un LED hasta robots industriales, impresoras 3D y sistemas IoT.
                    Explora los componentes de la placa haciendo clic en los puntos interactivos:
                </p>
                <ArduinoBoardPhoto />
            </section>

            {/* ── COMPONENTES ─────────────────────────────────────── */}
            <section className="guide-section">
                <h2 className="guide-section__title">2. Componentes del Laboratorio</h2>
                <p className="ard-section-desc">Estos son los componentes que necesitarás para el primer circuito:</p>
                <div className="ard-components-grid">
                    {components.map((c, i) => (
                        <motion.div key={i} className="ard-component-card"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                            whileHover={{ y: -3 }}>
                            <div className="ard-component-emoji">{c.emoji}</div>
                            <h4 className="ard-component-name">{c.name}</h4>
                            <p className="ard-component-desc">{c.desc}</p>
                            <span className="ard-component-role">{c.role}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── CIRCUITO ─────────────────────────────────────────── */}
            <section className="guide-section">
                <h2 className="guide-section__title">3. Construcción del Circuito</h2>
                <p className="ard-section-desc">
                    El circuito más básico es conectar un LED al pin 13 de Arduino a través de una resistencia (que protege el LED de
                    recibir demasiada corriente):
                </p>
                <div className="ard-connections">
                    {[
                        { from: 'Pin 13', to: 'Resistencia 220Ω', color: '#e74c3c' },
                        { from: 'Resistencia', to: 'Ánodo (+) del LED', color: '#e74c3c' },
                        { from: 'Cátodo (−) del LED', to: 'GND de Arduino', color: '#3498db' },
                    ].map((conn, i) => (
                        <div key={i} className="ard-connection-row">
                            <span className="ard-connection-from" style={{ color: conn.color }}>{conn.from}</span>
                            <span className="ard-connection-arrow" style={{ color: conn.color }}>→</span>
                            <span className="ard-connection-to">{conn.to}</span>
                        </div>
                    ))}
                </div>
                <CircuitSVG />
            </section>

            {/* ── PRIMER PROGRAMA ───────────────────────────────────── */}
            <section className="guide-section">
                <h2 className="guide-section__title">4. Primer Programa en Arduino</h2>
                <p className="ard-section-desc">
                    Haz clic en cualquier línea del código para ver su explicación detallada:
                </p>
                <div className="ard-code-wrap">
                    <div className="ard-code-header">
                        <span className="ard-code-lang">Arduino C++</span>
                        <span className="ard-code-hint">← clic para explicar</span>
                    </div>
                    <div className="ard-code-block">
                        {codeLines.map(line => (
                            <div key={line.id}
                                className={`ard-code-line ${line.explanation ? 'ard-code-line--clickable' : ''} ${selectedLine === line.id ? 'ard-code-line--selected' : ''}`}
                                onClick={() => line.explanation && setSelectedLine(selectedLine === line.id ? null : line.id)}>
                                <span className="ard-code-linenum">{line.id + 1}</span>
                                <code className={`ard-code-content ${line.code.includes('void') ? 'ard-kw--fn' : ''} ${line.code.includes('pinMode') || line.code.includes('digitalWrite') || line.code.includes('delay') ? 'ard-kw--call' : ''}`}>
                                    {line.code || '\u00a0'}
                                </code>
                                {line.explanation && <span className="ard-code-indicator">{selectedLine === line.id ? '▲' : '▼'}</span>}
                            </div>
                        ))}
                    </div>
                    <AnimatePresence>
                        {selLine?.explanation && (
                            <motion.div className="ard-code-explanation"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25 }}>
                                <Icon name="lightbulb" size={16} color={accentColor} />
                                <p>{selLine.explanation}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* ── SIMULACIÓN LED ────────────────────────────────────── */}
            <section className="guide-section">
                <h2 className="guide-section__title">5. Simulación: LED Parpadeando</h2>
                <p className="ard-section-desc">
                    Observa cómo se comporta el programa en tiempo real. La simulación reproduce exactamente el ciclo HIGH/LOW
                    con el ciclo de 1 segundo que define el código:
                </p>
                <LedSimulation />
            </section>

            {/* ── FLUJO DEL PROGRAMA ────────────────────────────────── */}
            <section className="guide-section">
                <h2 className="guide-section__title">6. Flujo del Programa</h2>
                <p className="ard-section-desc">
                    Todo programa Arduino sigue siempre este flujo: primero <code className="ard-inline-code">setup()</code> una sola vez,
                    luego <code className="ard-inline-code">loop()</code> infinitamente:
                </p>
                <FlowDiagram />
            </section>

            {/* ── EXPERIMENTOS ─────────────────────────────────────── */}
            <section className="guide-section">
                <h2 className="guide-section__title">7. Experimentos Sugeridos</h2>
                <p className="ard-section-desc">Una vez que el LED parpadee, prueba estas variaciones:</p>
                <div className="ard-experiments">
                    {experiments.map((exp, i) => (
                        <motion.div key={i} className={`ard-experiment-card ${openExp === i ? 'ard-experiment-card--open' : ''}`}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            onClick={() => setOpenExp(openExp === i ? null : i)}>
                            <div className="ard-experiment-header">
                                <div className="ard-experiment-icon">
                                    <Icon name={exp.icon} size={18} color={accentColor} />
                                </div>
                                <h4 className="ard-experiment-title">{exp.title}</h4>
                                <span className="ard-experiment-toggle">{openExp === i ? '▲' : '▼'}</span>
                            </div>
                            <AnimatePresence>
                                {openExp === i && (
                                    <motion.p className="ard-experiment-desc"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.22 }}>
                                        {exp.desc}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── EJERCICIO PRÁCTICO ────────────────────────────────── */}
            <section className="guide-section">
                <h2 className="guide-section__title">8. Ejercicio Práctico: Semáforo</h2>
                <div className="ard-challenge">
                    <div className="ard-challenge-header">
                        <Icon name="trophy" size={22} color={accentColor} />
                        <div>
                            <h3 className="ard-challenge-title">Desafío: Semáforo con 3 LEDs</h3>
                            <p className="ard-challenge-desc">
                                Conecta tres LEDs (rojo en pin 8, amarillo en pin 9, verde en pin 10) y programá
                                la secuencia de un semáforo: verde 3s → amarillo 1s → rojo 3s → repetir.
                            </p>
                        </div>
                    </div>

                    {/* Traffic visualization */}
                    <div className="ard-traffic-light">
                        <div className="ard-tl-housing">
                            <div className="ard-tl-led ard-tl-led--red" title="Pin 8 — Rojo">
                                <div className="ard-tl-glow ard-tl-glow--red" />
                            </div>
                            <div className="ard-tl-led ard-tl-led--yellow" title="Pin 9 — Amarillo">
                                <div className="ard-tl-glow ard-tl-glow--yellow" />
                            </div>
                            <div className="ard-tl-led ard-tl-led--green" title="Pin 10 — Verde">
                                <div className="ard-tl-glow ard-tl-glow--green" />
                            </div>
                        </div>
                        <div className="ard-tl-labels">
                            <span>Pin 8</span>
                            <span>Pin 9</span>
                            <span>Pin 10</span>
                        </div>
                    </div>

                    <button className="ard-btn ard-btn--ghost ard-solution-btn"
                        onClick={() => setShowSolution(s => !s)}>
                        {showSolution ? '🙈 Ocultar solución' : '💡 Ver solución'}
                    </button>

                    <AnimatePresence>
                        {showSolution && (
                            <motion.div className="ard-solution"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}>
                                <div className="ard-code-header">
                                    <span className="ard-code-lang">Solución — Semáforo</span>
                                </div>
                                <pre className="ard-solution-code">{trafficCode}</pre>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* ── CONCLUSIÓN ───────────────────────────────────────── */}
            <section className="guide-section guide-conclusion">
                <Icon name="checkCircle" size={36} color={accentColor} />
                <h2>¡Laboratorio completado!</h2>
                <p>
                    Has construido tu primer circuito electrónico con Arduino, programado el microcontrolador y
                    explorado los conceptos fundamentales de la robótica: sensores, actuadores y lógica de control.
                    Este es el punto de partida para construir sistemas robóticos más complejos.
                </p>
            </section>

        </div>
    );
}
