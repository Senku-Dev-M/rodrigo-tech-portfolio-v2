import { motion } from 'framer-motion';
import NetworkSimulation from '../NetworkSimulation/NetworkSimulation';
import CodeBlock from './CodeBlock';

export default function Step({ step, index }) {
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

            {step.dataTable && (
                <div className="guide-table-wrapper guide-table-wrapper--readonly" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                    <table className="guide-table">
                        <thead>
                            <tr>
                                {step.dataTable.headers.map((h, i) => (
                                    <th key={i}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {step.dataTable.rows.map((row, i) => (
                                <tr key={i}>
                                    {row.map((cell, j) => (
                                        <td key={j} style={{ color: '#fff', fontSize: '0.9rem' }}>{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
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
