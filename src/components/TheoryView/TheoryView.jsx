import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '../../i18n/i18n';
import Icon from '../Icon/Icon';
import NetworkSimulation from '../NetworkSimulation/NetworkSimulation';
import './TheoryView.css';

// ── Section wrapper ─────────────────────────────────────────
function Section({ title, desc, children }) {
    return (
        <section className="theory-section">
            <h2 className="theory-section__title">{title}</h2>
            {desc && <p className="theory-section__desc">{desc}</p>}
            {children}
        </section>
    );
}

// ── Pros & Cons Card ───────────────────────────────────────
function ProsConsCard({ title, pros, cons, t }) {
    return (
        <div className="theory-proscons">
            <h3 className="theory-proscons__title">{title}</h3>
            <div className="theory-proscons__grid">
                <div className="theory-proscons__col theory-proscons__col--pros">
                    <h4><Icon name="checkCircle" size={16} color="#00ff88" /> {t('theory.pros')}</h4>
                    <ul>
                        {pros.map((p, i) => <li key={i}>{p}</li>)}
                    </ul>
                </div>
                <div className="theory-proscons__col theory-proscons__col--cons">
                    <h4><Icon name="xCircle" size={16} color="#ff4444" /> {t('theory.cons')}</h4>
                    <ul>
                        {cons.map((c, i) => <li key={i}>{c}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default function TheoryView({ lab }) {
    const { t } = useI18n();
    const { content } = lab;

    return (
        <div className="theory-view">
            {/* ── HEADER ─────────────────────────────────────── */}
            <div className="theory-header">
                <div className="theory-header__meta">
                    <span className="theory-type-badge">{lab.type}</span>
                    <span className="theory-difficulty">{lab.difficulty}</span>
                    <span className="theory-duration">{lab.duration}</span>
                </div>
                <h1 className="theory-title">{lab.title}</h1>
                <p className="theory-subtitle">{lab.subtitle}</p>
                <div className="theory-tags">
                    {lab.tags.map((t, i) => <span key={i} className="theory-tag">{t}</span>)}
                </div>
            </div>

            {/* ── INTRODUCCIÓN ───────────────────────────────── */}
            <Section title={t('theory.intro', 'Introducción')}>
                <p className="theory-text">{content.intro}</p>
            </Section>

            {/* ── SECCIONES DINÁMICAS ────────────────────────────── */}

            {/* Si existe la sección de Modelos (C/S vs P2P) */}
            {content.models && Object.entries(content.models).map(([key, model], idx) => (
                <Section key={key} title={model.title}>
                    <div className="theory-model">
                        <div className="theory-model__text">
                            <h3>¿Qué es?</h3>
                            <p>{model.whatIs}</p>

                            <h3>¿Cómo funciona?</h3>
                            <p>{model.howWorks}</p>

                            <h3>Ejemplos de uso</h3>
                            <ul className="theory-list theory-list--cyan">
                                {model.examples.map((ex, i) => <li key={i}>{ex}</li>)}
                            </ul>
                        </div>

                        {/* Simulación SVG */}
                        <div className="theory-model__sim">
                            {/* Renderizar simulaciones específicas según la key o type */}
                            <NetworkSimulation type={key === 'clientServer' ? 'client-server' : (key === 'p2p' ? 'p2p' : 'dhcp')} />
                        </div>
                    </div>

                    <ProsConsCard
                        title={`${t('theory.analysis', 'Análisis de')} ${model.title}`}
                        pros={model.pros}
                        cons={model.cons}
                        t={t}
                    />
                </Section>
            ))}

            {/* Si existe un proceso por pasos (ej. DORA Handshake en DHCP) */}
            {content.dhcpProcess && (
                <Section title={content.dhcpProcess.title} desc={content.dhcpProcess.desc}>
                    <div className="theory-process">
                        <div className="theory-process__steps">
                            {content.dhcpProcess.steps.map((step, idx) => (
                                <div key={idx} className="theory-step">
                                    <div className="theory-step__num">{idx + 1}</div>
                                    <div className="theory-step__content">
                                        <h4>{step.name} <span className="theory-step__sender">({step.sender})</span></h4>
                                        <p>{step.action}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="theory-process__sim">
                            <NetworkSimulation type="dhcp" />
                        </div>
                    </div>
                </Section>
            )}

            {/* Si existe lista de configuraciones / items (ej. DHCP config info) */}
            {content.dhcpConfig && (
                <Section title={content.dhcpConfig.title}>
                    <ul className="theory-list theory-list--cyan theory-list--large">
                        {content.dhcpConfig.items.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </Section>
            )}

            {/* ── TABLA COMPARATIVA (Opcional) ───────────────────── */}
            {content.comparison && (
                <Section title="Tabla Comparativa">
                    <div className="theory-table-wrapper">
                        <table className="theory-table">
                            <thead>
                                <tr>
                                    <th>Aspecto</th>
                                    <th>Cliente-Servidor</th>
                                    <th>Peer-to-Peer (P2P)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {content.comparison.map((row, i) => (
                                    <tr key={i}>
                                        <td className="theory-table__aspect">{row.aspect}</td>
                                        <td>{row.cs}</td>
                                        <td>{row.p2p}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Section>
            )}

            {/* ── SECCIONES GENÉRICAS (Escalabilidad) ─────────────── */}
            {content.sections && content.sections.map((section, sectionIdx) => {
                if (section.type === 'text') {
                    return (
                        <Section key={sectionIdx} title={section.title}>
                            {section.content.split('\n').map((paragraph, i) => (
                                <p 
                                    key={i} 
                                    className="theory-text" 
                                    style={{ marginBottom: '1rem' }}
                                    dangerouslySetInnerHTML={{ __html: paragraph }}
                                />
                            ))}
                        </Section>
                    );
                }

                if (section.type === 'process') {
                    return (
                        <Section key={sectionIdx} title={section.title} desc={section.desc}>
                            <div className={`theory-process ${section.simLayout === 'stacked' ? 'theory-process--stacked' : ''}`}>
                                <div className="theory-process__steps">
                                    {section.steps.map((step, idx) => (
                                        <div key={idx} className="theory-step">
                                            <div className="theory-step__num">{idx + 1}</div>
                                            <div className="theory-step__content">
                                                <h4>{step.name} <span className="theory-step__sender">({step.sender})</span></h4>
                                                <p>{step.action}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="theory-process__sim">
                                    {section.simType && <NetworkSimulation type={section.simType} />}
                                </div>
                            </div>
                        </Section>
                    );
                }

                if (section.type === 'grid-cards') {
                    return (
                        <Section key={sectionIdx} title={section.title} desc={section.desc}>
                            <div className="theory-grid-cards">
                                {section.cards.map((c, i) => (
                                    <div key={i} className="theory-card">
                                        <h3 style={{ color: c.color || '#00d4ff' }}>{c.title}</h3>
                                        <p dangerouslySetInnerHTML={{ __html: c.text }} />
                                    </div>
                                ))}
                            </div>
                        </Section>
                    );
                }

                if (section.type === 'models') {
                    return (
                        <div key={sectionIdx}>
                            <h2 className="theory-section__title" style={{ marginTop: '2.5rem', marginBottom: '1.5rem' }}>{section.title}</h2>
                            {section.models.map((model, idx) => (
                                <div key={idx} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '1.5rem' }}>
                                    <h3 style={{ color: '#00d4ff', fontSize: '1.25rem', marginBottom: '1rem' }}>{model.title}</h3>
                                    
                                    <div style={{ marginBottom: '1.25rem' }}>
                                        <strong style={{ color: '#fff' }}>¿Qué es?</strong>
                                        <p style={{ color: 'var(--text-grey)', marginTop: '0.25rem' }}>{model.whatIs}</p>
                                    </div>

                                    <div style={{ marginBottom: '1.25rem' }}>
                                        <strong style={{ color: '#fff' }}>¿Cómo funciona?</strong>
                                        <p style={{ color: 'var(--text-grey)', marginTop: '0.25rem' }}>{model.howWorks}</p>
                                    </div>
                                    
                                    {model.examples && (
                                        <div style={{ marginBottom: '1.25rem' }}>
                                            <strong style={{ color: '#fff' }}>Ejemplos de uso</strong>
                                            <ul className="theory-list theory-list--cyan" style={{ marginTop: '0.5rem' }}>
                                                {model.examples.map((ex, i) => <li key={i}>{ex}</li>)}
                                            </ul>
                                        </div>
                                    )}

                                    {(model.pros && model.cons) && (
                                        <ProsConsCard title={`${t('theory.analysis', 'Análisis de')} ${model.title}`} pros={model.pros} cons={model.cons} t={t} />
                                    )}
                                </div>
                            ))}
                        </div>
                    );
                }

                if (section.type === 'proscons') {
                    return (
                        <Section key={sectionIdx}>
                            <ProsConsCard title={section.title} pros={section.pros} cons={section.cons} t={t} />
                        </Section>
                    );
                }

                return null;
            })}

            {/* ── CONCLUSIÓN ─────────────────────────────────── */}
            <section className="theory-section theory-conclusion">
                <Icon name="book" size={36} color="#00d4ff" />
                <h2>{t('theory.conclusion')}</h2>
                <p>{content.conclusion}</p>
            </section>
        </div>
    );
}
