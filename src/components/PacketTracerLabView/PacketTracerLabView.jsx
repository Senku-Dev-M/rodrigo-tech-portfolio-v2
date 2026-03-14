import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../Icon/Icon';
import Step from '../GuideView/Step';
import '../TheoryView/TheoryView.css'; // Reusing some base styles
import red1lab3img from '../../assets/red1lab3.png';

export default function PacketTracerLabView({ lab }) {
    const [activeTab, setActiveTab] = useState('dhcp');

    return (
        <div className="theory-view">
            {/* ── HEADER ─────────────────────────────────────── */}
            <header className="theory-header">
                <div className="theory-header__meta">
                    <span className="theory-type-badge theory-type-badge--lab">{lab.type}</span>
                    <span className="theory-difficulty">{lab.difficulty}</span>
                    <span className="theory-duration">{lab.duration}</span>
                </div>
                <h1 className="theory-title">{lab.title}</h1>
                <div className="theory-tags">
                    {lab.tags?.map(t => <span key={t} className="theory-tag">{t}</span>)}
                </div>
            </header>

            <div className="theory-content">
                {/* Intro & Objectives */}
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '12px', marginBottom: '2rem' }}>
                    <h3 style={{ color: '#00d4ff', marginBottom: '1rem' }}>Introducción al Laboratorio</h3>
                    <p style={{ color: 'var(--text-grey)', lineHeight: 1.6, marginBottom: '2rem' }}>
                        {lab.labData.intro}
                    </p>

                    <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Objetivos de Aprendizaje</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                        {lab.labData.objectives.map((obj, i) => (
                            <div key={i} style={{ padding: '1rem', background: 'rgba(0, 212, 255, 0.05)', borderRadius: '8px', borderLeft: '4px solid #00d4ff', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <Icon name="check-circle" size={20} color="#00d4ff" />
                                <span style={{ fontSize: '0.9rem', color: '#e5e7eb' }}>{obj}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Topology Map */}
                <div style={{ background: '#0a0a0a', padding: '2rem', borderRadius: '12px', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                        <Icon name="git-merge" size={24} color="#f39c12" />
                        <h3 style={{ margin: 0, color: '#f39c12' }}>Topología de Red</h3>
                    </div>
                    <p style={{ color: 'var(--text-grey)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                        Replica exactamente esta arquitectura física y lógica en Cisco Packet Tracer antes de comenzar la configuración.
                    </p>
                    
                    <div style={{ width: '100%', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#fff', textAlign: 'center', padding: '1rem' }}>
                        <img src={red1lab3img} alt="Topología LAN" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>

                    <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '0.5rem' }}>
                        {['DHCP Server (172.16.0.10)', 'DNS Server (172.16.0.11)', 'Web Jala (172.16.0.20)', 'Web Pruebas (172.16.0.30)', 'Email Server (172.16.0.40)', 'PC1, PC2 (DHCP)', 'PC3 (172.16.0.90)', 'Switches x3'].map(dev => (
                            <div key={dev} style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '4px', fontSize: '0.8rem', color: '#e5e7eb', textAlign: 'center' }}>
                                {dev}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. Preparación del ambiente */}
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '12px', marginBottom: '2rem' }}>
                    <h3 style={{ color: '#00d4ff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Icon name="tool" size={24} color="#00d4ff" /> 4. Preparación del Entorno
                    </h3>
                    
                    <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '8px', border: '1px dashed rgba(255,255,255,0.2)' }}>
                            <h4 style={{ color: '#fff', marginBottom: '1rem' }}>4.1 Puesta en marcha</h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-grey)', fontSize: '0.9rem', lineHeight: 1.8 }}>
                                <li><Icon name="chevron-right" size={16} color="#f39c12" /> Abre Cisco Packet Tracer.</li>
                                <li><Icon name="chevron-right" size={16} color="#f39c12" /> Arrastra y suelta todos los dispositivos mostrados.</li>
                                <li><Icon name="chevron-right" size={16} color="#f39c12" /> Conecta los cables correspondientes según la tabla de cableado inferior.</li>
                            </ul>
                        </div>
                        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '8px', border: '1px dashed rgba(255,255,255,0.2)' }}>
                            <h4 style={{ color: '#fff', marginBottom: '1rem' }}>4.2 Opciones del Simulador</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#50fa7b', cursor: 'pointer' }}>
                                    <input type="checkbox" defaultChecked style={{ accentColor: '#50fa7b' }} /> <span>Modo: Tiempo Real (Realtime) activado</span>
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#50fa7b', cursor: 'pointer' }}>
                                    <input type="checkbox" defaultChecked style={{ accentColor: '#50fa7b' }} /> <span>Options &gt; Preferences &gt; Show Link Lights</span>
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#50fa7b', cursor: 'pointer' }}>
                                    <input type="checkbox" defaultChecked style={{ accentColor: '#50fa7b' }} /> <span>Options &gt; Preferences &gt; Show Device Name Labels</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {lab.labData.wiring && (
                        <div style={{ marginTop: '2rem' }}>
                            <h4 style={{ color: '#fff', marginBottom: '1rem' }}>4.3 Cableado Físico Requerido</h4>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                {lab.labData.wiring.map((w, i) => (
                                    <div key={i} style={{ flex: 1, minWidth: '200px', background: 'rgba(198, 120, 221, 0.1)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(198, 120, 221, 0.3)' }}>
                                        <div style={{ color: '#c678dd', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.3rem' }}>{w.from}</div>
                                        <div style={{ color: '#fff', fontSize: '0.95rem' }}>{w.cable}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* 5. Configuración de Dispositivos */}
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '12px', marginBottom: '2rem' }}>
                    <h3 style={{ color: '#00d4ff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Icon name="settings" size={24} color="#00d4ff" /> 5. Configuración de Dispositivos
                    </h3>
                    <p style={{ color: 'var(--text-grey)', fontSize: '0.9rem', marginBottom: '2rem' }}>Selecciona cada dispositivo para ver sus parámetros exactos de configuración en Packet Tracer.</p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingBottom: '1rem' }}>
                        {lab.labData.steps?.map((st, i) => (
                            <Step key={st.id || i} step={st} stepNumber={i + 1} />
                        ))}
                    </div>
                </div>

                {/* 6. Pruebas Tiempo Real */}
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '12px', marginBottom: '2rem' }}>
                    <h3 style={{ color: '#00d4ff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Icon name="activity" size={24} color="#00d4ff" /> 6. Pruebas Requeridas en Modo Tiempo Real
                    </h3>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #f39c12' }}><strong style={{ color: '#f39c12', display: 'block', marginBottom: '0.5rem' }}>1. Ping (ICMP)</strong>Desde Fast Forward Time, abre Command Prompt en PC1 y ejecuta <code>ping 172.16.0.20</code></div>
                        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #00d4ff' }}><strong style={{ color: '#00d4ff', display: 'block', marginBottom: '0.5rem' }}>2. Navegación (HTTP)</strong>Abre Web Browser y accede a <code>jala.university</code> y <code>www.pruebas.com</code></div>
                        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #c678dd' }}><strong style={{ color: '#c678dd', display: 'block', marginBottom: '0.5rem' }}>3. Email (SMTP/POP3)</strong>Redacta un correo desde PC1 y envíalo a tu propio usuario o a user2.</div>
                    </div>

                    <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Registro de Evidencias (Modo Real)</h4>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', color: '#ccc' }}>
                            <thead>
                                <tr style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', borderBottom: '1px solid #333' }}>
                                    <th style={{ padding: '0.8rem 1rem' }}>Tipo de prueba</th>
                                    <th style={{ padding: '0.8rem 1rem' }}>Origen</th>
                                    <th style={{ padding: '0.8rem 1rem' }}>Destino</th>
                                    <th style={{ padding: '0.8rem 1rem' }}>Resultado / Observaciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[ { t: 'Ping ICMP', o: 'PC1', d: 'Servidor Web Jala' }, { t: 'HTTP Web', o: 'PC2', d: 'www.pruebas.com' }, { t: 'Enviar Email', o: 'PC1', d: 'PC3' } ].map((row, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid #222' }}>
                                        <td style={{ padding: '0.8rem 1rem' }}>{row.t}</td>
                                        <td style={{ padding: '0.8rem 1rem' }}>{row.o}</td>
                                        <td style={{ padding: '0.8rem 1rem' }}>{row.d}</td>
                                        <td style={{ padding: '0.8rem 1rem' }}>
                                            <input type="text" placeholder="Ej: Ping exitoso, 0% loss" style={{ width: '100%', background: 'transparent', border: 'none', color: '#50fa7b', outline: 'none' }} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 7. Pruebas Modo Simulación */}
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '12px', marginBottom: '2rem' }}>
                    <h3 style={{ color: '#00d4ff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Icon name="eye" size={24} color="#00d4ff" /> 7. Pruebas de Análisis en Modo Simulación
                    </h3>
                    <p style={{ color: 'var(--text-grey)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Activa el panel de Simulación (Shift + S). Aplica los filtros para mostrar únicamente: <strong style={{color: '#fff'}}>DHCP, ICMP, HTTP, DNS, HTTPS, SMTP</strong>. Abre los sobres (PDU Information) al hacer Play.</p>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', color: '#ccc' }}>
                            <thead>
                                <tr style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', borderBottom: '1px solid #333' }}>
                                    <th style={{ padding: '0.8rem 1rem' }}>Tipo de prueba</th>
                                    <th style={{ padding: '0.8rem 1rem' }}>Origen</th>
                                    <th style={{ padding: '0.8rem 1rem' }}>Destino</th>
                                    <th style={{ padding: '0.8rem 1rem' }}>Protocolo Obseravdo (Paises/Layers)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[ { t: 'ipconfig /renew', o: 'PC1', d: 'DHCP Server' }, { t: 'Ping ICMP', o: 'PC1', d: 'PC2' }, { t: 'HTTP Access', o: 'PC3', d: 'Web Jala' } ].map((row, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid #222' }}>
                                        <td style={{ padding: '0.8rem 1rem' }}>{row.t}</td>
                                        <td style={{ padding: '0.8rem 1rem' }}>{row.o}</td>
                                        <td style={{ padding: '0.8rem 1rem' }}>{row.d}</td>
                                        <td style={{ padding: '0.8rem 1rem' }}>
                                            <input type="text" placeholder="Ej: ARP -> DHCP (UDP 67/68)" style={{ width: '100%', background: 'transparent', border: 'none', color: '#c678dd', outline: 'none' }} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 8. Cuestionario */}
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '12px', marginBottom: '2rem' }}>
                    <h3 style={{ color: '#00d4ff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Icon name="help-circle" size={24} color="#00d4ff" /> 8. Análisis Técnico
                    </h3>
                    
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {lab.labData.questions.map((q, i) => (
                            <div key={i} style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
                                <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#fff', fontSize: '0.95rem', whiteSpace: 'pre-line', lineHeight: '1.6' }}>
                                    {String(i + 1).padStart(2, '0')}. <span style={{color: '#e5e7eb'}}>{q}</span>
                                </div>
                                <div style={{ padding: '0.8rem 1rem' }}>
                                    <textarea 
                                        placeholder="Escribe tu respuesta técnica aquí basado en lo extraído de Packet Tracer..." 
                                        style={{ width: '100%', minHeight: '60px', background: 'transparent', border: 'none', color: '#50fa7b', outline: 'none', resize: 'vertical', fontFamily: 'inherit', fontSize: '0.9rem' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    );
}
