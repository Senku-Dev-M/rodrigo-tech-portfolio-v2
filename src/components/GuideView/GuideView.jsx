import { motion } from 'framer-motion';
import Icon from '../Icon/Icon';
import NetworkSimulation from '../NetworkSimulation/NetworkSimulation';
import './GuideView.css';

// ── Reusable code block ─────────────────────────────────────
function CodeBlock({ code }) {
    return (
        <pre className="guide-code">
            <code>{code}</code>
        </pre>
    );
}

// ── Individual step ─────────────────────────────────────────
function Step({ step, index }) {
    return (
        <motion.div
            className="guide-step"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
        >
            <div className="guide-step__header">
                <span className="guide-step__num">{step.id || String(index + 1).padStart(2, '0')}</span>
                <div>
                    <h3 className="guide-step__title">{step.title}</h3>
                    <span className="guide-step__vm">{step.vm}</span>
                </div>
            </div>

            {step.text && <p className="guide-step__text" style={{ marginBottom: '1rem' }}>{step.text}</p>}
            {step.explanation && <p className="guide-step__text">{step.explanation}</p>}

            {step.steps && (
                <ul className="guide-step__list">
                    {step.steps.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
            )}

            {step.command && <CodeBlock code={`$ ${step.command}`} />}

            {step.commands && step.commands.map((c, i) => (
                <div key={i} className="guide-step__multi-cmd">
                    <CodeBlock code={`$ ${c.cmd}`} />
                    <p className="guide-step__cmd-desc">{c.desc}</p>
                </div>
            ))}

            {step.codeblock && (
                <>
                    <CodeBlock code={step.codeblock} />
                    <p className="guide-step__text">{step.codeExplanation}</p>
                </>
            )}

            {step.expectedOutput && (
                <div className="guide-step__result">
                    <span className="guide-step__result-label">Salida esperada</span>
                    <CodeBlock code={step.expectedOutput} />
                    <p className="guide-step__result-text">{step.outputExplanation}</p>
                </div>
            )}

            {step.tablePrompt && (
                <div className="guide-step__table-prompt">
                    <p className="guide-step__text guide-step__text--prompt">Completar la siguiente tabla según el análisis en Wireshark:</p>
                    <div className="guide-table-wrapper">
                        <table className="guide-table">
                            <thead>
                                <tr>
                                    <th>Dato Solicitado</th>
                                    <th>Respuesta / Valor Capturado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {step.tablePrompt.fields.map((field, i) => (
                                    <tr key={i}>
                                        <td className="guide-table__label">
                                            <strong>{field.label}</strong>
                                            <span>{field.desc}</span>
                                        </td>
                                        <td className="guide-table__input">
                                            <input
                                                type="text"
                                                className="guide-table__input-field"
                                                placeholder="Ingresa tu respuesta..."
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {step.simulationLink && (
                <div className="guide-step__sim">
                    <NetworkSimulation type={step.simulationLink} />
                </div>
            )}
        </motion.div>
    );
}

// ── Section wrapper ─────────────────────────────────────────
function Section({ title, desc, children, id }) {
    return (
        <section className="guide-section" id={id}>
            <h2 className="guide-section__title">{title}</h2>
            {desc && <p className="guide-section__desc">{desc}</p>}
            {children}
        </section>
    );
}

// ── Intro card config ───────────────────────────────────────
const introCards = [
    { icon: 'signal', title: '¿Qué es NFS?', key: 'whatIsNFS' },
    { icon: 'target', title: '¿Para qué sirve?', key: 'whatFor' },
    { icon: 'lightbulb', title: '¿Cuándo es útil?', key: 'whenUseful' },
    { icon: 'layers', title: 'Arquitectura cliente-servidor', key: 'architecture' },
];

// ── Main component ──────────────────────────────────────────
export default function GuideView({ lab }) {
    const { guide } = lab;

    return (
        <div className="guide-view">

            {/* ── HEADER ─────────────────────────────────────── */}
            <div className="guide-header">
                <div className="guide-header__meta">
                    <span className="guide-type-badge">{lab.type}</span>
                    <span className="guide-difficulty">{lab.difficulty}</span>
                    <span className="guide-duration">{lab.duration}</span>
                </div>
                <h1 className="guide-title">{lab.title}</h1>
                <p className="guide-subtitle">{lab.subtitle}</p>
                <div className="guide-tags">
                    {lab.tags.map(t => <span key={t} className="guide-tag">{t}</span>)}
                </div>
            </div>

            {/* ── INTRODUCCIÓN ───────────────────────────────── */}
            <Section title="Introducción">
                {typeof guide.intro === 'string' ? (
                    <p className="guide-step__text" style={{ fontSize: '0.95rem' }}>{guide.intro}</p>
                ) : (
                    <div className="guide-intro-grid">
                        {introCards.map(c => (
                            <div key={c.key} className="guide-intro-card">
                                <Icon name={c.icon} size={22} color="#00d4ff" />
                                <h3>{c.title}</h3>
                                <p style={{ whiteSpace: 'pre-line' }}>{guide.intro[c.key]}</p>
                            </div>
                        ))}
                    </div>
                )}
            </Section>

            {/* ── TECNOLOGÍAS ────────────────────────────────── */}
            {guide.technologies && (
                <Section title="Tecnologías Utilizadas">
                    <div className="guide-tech-grid">
                        {guide.technologies.map(t => (
                            <div key={t.name} className="guide-tech-item">
                                <span className="guide-tech-name">{t.name}</span>
                                <span className="guide-tech-cat">{t.category}</span>
                            </div>
                        ))}
                    </div>
                </Section>
            )}

            {/* ── ESCENARIO ──────────────────────────────────── */}
            {guide.scenario && (
                <Section title="Escenario del Laboratorio" desc={guide.scenario.description}>
                    <div className="guide-scenario">
                        {guide.scenario.vms.map((vm, i) => (
                            <div key={vm.name} className="guide-vm-card">
                                <div className="guide-vm-card__header">
                                    <div className="guide-vm-card__left">
                                        <Icon name={i === 0 ? 'monitor' : 'server'} size={18} color="#00d4ff" />
                                        <span className="guide-vm-card__name">{vm.name}</span>
                                    </div>
                                    <span className="guide-vm-card__ip">{vm.ip}</span>
                                </div>
                                <p className="guide-vm-card__role">{vm.role}</p>
                                <p className="guide-vm-card__desc">{vm.desc}</p>
                            </div>
                        ))}
                        <div className="guide-vm-connector">
                            <div className="guide-vm-connector__line" />
                            <span className="guide-vm-connector__label">Red NFS · TCP/IP</span>
                            <div className="guide-vm-connector__line" />
                        </div>
                    </div>
                </Section>
            )}

            {/* ── ARQUITECTURA ───────────────────────────────── */}
            {guide.labArchitecture && (
                <Section title="Arquitectura del Laboratorio" desc={guide.labArchitecture.desc}>
                    <div className="guide-arch">
                        {guide.labArchitecture.client ? (
                            <>
                                {/* Client node */}
                                <div className="guide-arch-node guide-arch-node--client">
                                    <div className="guide-arch-node__icon">
                                        <Icon name="monitor" size={24} color="#00d4ff" />
                                    </div>
                                    <div className="guide-arch-node__body">
                                        <span className="guide-arch-node__label">Cliente</span>
                                        <strong className="guide-arch-node__name">{guide.labArchitecture.client.name}</strong>
                                        <code className="guide-arch-node__ip">{guide.labArchitecture.client.ip}</code>
                                        <div className="guide-arch-node__pkgs">
                                            {guide.labArchitecture.client.packages.map(p => (
                                                <span key={p} className="guide-arch-pkg">{p}</span>
                                            ))}
                                        </div>
                                        <div className="guide-arch-node__mount">
                                            <span className="guide-arch-node__mount-label">Monta en:</span>
                                            <code>{guide.labArchitecture.client.mounts}</code>
                                        </div>
                                    </div>
                                </div>

                                {/* Connection arrow */}
                                <div className="guide-arch-conn">
                                    <div className="guide-arch-conn__line" />
                                    <div className="guide-arch-conn__arrow">↕</div>
                                    <span className="guide-arch-conn__label">{guide.labArchitecture.connection}</span>
                                    <div className="guide-arch-conn__line" />
                                </div>

                                {/* Server node */}
                                <div className="guide-arch-node guide-arch-node--server">
                                    <div className="guide-arch-node__icon">
                                        <Icon name="server" size={24} color="#00d4ff" />
                                    </div>
                                    <div className="guide-arch-node__body">
                                        <span className="guide-arch-node__label">Servidor</span>
                                        <strong className="guide-arch-node__name">{guide.labArchitecture.server.name}</strong>
                                        <code className="guide-arch-node__ip">{guide.labArchitecture.server.ip}</code>
                                        <div className="guide-arch-node__pkgs">
                                            {guide.labArchitecture.server.packages.map(p => (
                                                <span key={p} className="guide-arch-pkg">{p}</span>
                                            ))}
                                        </div>
                                        <div className="guide-arch-node__mount">
                                            <span className="guide-arch-node__mount-label">Exporta:</span>
                                            <code>{guide.labArchitecture.server.exports}</code>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="guide-arch-simple" style={{ width: '100%', textAlign: 'center', padding: '2rem', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px dashed rgba(255,255,255,0.1)' }}>
                                <code style={{ color: '#50fa7b', fontSize: '1rem' }}>{guide.labArchitecture.diagram}</code>
                            </div>
                        )}
                    </div>
                </Section>
            )}

            {/* ── OBJETIVOS ──────────────────────────────────── */}
            {guide.objectives && (
                <Section title="Objetivos del Laboratorio"
                    desc="Al completar este laboratorio, el estudiante será capaz de:">
                    <ul className="guide-objectives">
                        {guide.objectives.map((obj, i) => (
                            <motion.li key={i} className="guide-objective-item"
                                initial={{ opacity: 0, x: -12 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}>
                                <span className="guide-obj-num">{String(i + 1).padStart(2, '0')}</span>
                                <span>{obj}</span>
                            </motion.li>
                        ))}
                    </ul>
                </Section>
            )}

            {/* ── GUÍA PASO A PASO ───────────────────────────── */}
            <Section title="Guía Paso a Paso"
                desc="Sigue los pasos en orden. Cada paso indica en qué máquina ejecutar el comando.">
                <div className="guide-steps">
                    {guide.steps.map((step, i) => (
                        <Step key={step.id} step={step} index={i} />
                    ))}
                </div>
            </Section>

            {/* ── VERIFICACIÓN ───────────────────────────────── */}
            {guide.verification && (
                <Section title="Verificación del Sistema"
                    desc="Usa estos comandos para confirmar que NFS está funcionando correctamente.">
                    <div className="guide-verification">
                        {guide.verification.map((v, i) => (
                            <motion.div key={i} className="guide-verify-item"
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}>
                                <div className="guide-verify-header">
                                    <Icon name="checkCircle" size={16} color="#00d4ff" />
                                    <h3 className="guide-verify-title">{v.title}</h3>
                                    <span className="guide-step__vm">{v.vm}</span>
                                </div>
                                <p className="guide-step__text">{v.explanation}</p>
                                <CodeBlock code={`$ ${v.command}`} />
                                <div className="guide-step__result">
                                    <span className="guide-step__result-label">Salida esperada</span>
                                    <CodeBlock code={v.expectedOutput} />
                                    <p className="guide-step__result-text">{v.outputExplanation}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Section>
            )}

            {/* ── PROBLEMAS COMUNES ──────────────────────────── */}
            {guide.troubleshooting && (
                <Section title="Problemas Comunes y Soluciones"
                    desc="Si algo no funciona como se espera, revisa estas situaciones frecuentes.">
                    <div className="guide-troubles">
                        {guide.troubleshooting.map((t, i) => (
                            <motion.div key={i} className="guide-trouble-card"
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}>
                                <div className="guide-trouble-error">
                                    <span className="guide-trouble-label">Error</span>
                                    <code className="guide-trouble-msg">{t.error}</code>
                                </div>
                                <div className="guide-trouble-cause">
                                    <span className="guide-trouble-label">Causa probable</span>
                                    <p>{t.cause}</p>
                                </div>
                                <div className="guide-trouble-fix">
                                    <span className="guide-trouble-label guide-trouble-label--fix">Solución</span>
                                    <p>{t.fix.description}</p>
                                    <CodeBlock code={t.fix.command} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Section>
            )}

            {/* ── APRENDIZAJE ────────────────────────────────── */}
            {guide.learnings && (
                <Section title="Aprendizaje Obtenido"
                    desc="Los siguientes conceptos fueron aplicados y reforzados durante este laboratorio.">
                    <div className="guide-learnings">
                        {guide.learnings.map((l, i) => (
                            <motion.div key={i} className="guide-learning-item"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}>
                                <div className="guide-learning-dot" />
                                <div>
                                    {typeof l === 'string' ? (
                                        <p className="guide-learning-desc" style={{ color: '#E2E8F0', marginTop: 0 }}>{l}</p>
                                    ) : (
                                        <>
                                            <strong className="guide-learning-concept">{l.concept}</strong>
                                            <p className="guide-learning-desc">{l.desc}</p>
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Section>
            )}

            {/* ── EXTENSIÓN ──────────────────────────────────── */}
            {guide.extensions && (
                <Section title="Extensión del Laboratorio"
                    desc="Una vez completado el laboratorio, puedes profundizar con estos retos adicionales.">
                    <div className="guide-extensions">
                        {guide.extensions.map((e, i) => (
                            <motion.div key={i} className="guide-ext-card"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}>
                                <div className="guide-ext-header">
                                    <span className="guide-ext-num">{String(i + 1).padStart(2, '0')}</span>
                                    <strong className="guide-ext-title">{e.title}</strong>
                                </div>
                                <p className="guide-ext-desc">{e.desc}</p>
                                {e.command && <CodeBlock code={e.command} />}
                            </motion.div>
                        ))}
                    </div>
                </Section>
            )}

            {/* ── CONCLUSIÓN ─────────────────────────────────── */}
            <section className="guide-section guide-conclusion">
                <Icon name="checkCircle" size={36} color="#00d4ff" />
                <h2>Laboratorio completado</h2>
                <p>
                    Has finalizado exitosamente todas las actividades de esta guía.
                    Revisa que hayas respondido a todos los prompts solicitados y exporta la documentación
                    si es requerido por tu instructor.
                </p>
            </section>

        </div>
    );
}
