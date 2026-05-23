import { useMemo } from 'react';
import { motion } from 'framer-motion';
import Icon from '../Icon/Icon';
import ContentHeader from '../MentoringContent/ContentHeader';
import CodeBlock from './CodeBlock';
import Step from './Step';
import Section from './Section';
import ConceptSimulation from '../ConceptSimulation/ConceptSimulation';
import './GuideView.css';

const defaultIntroCards = [
    { icon: 'signal', title: '¿Qué es?', key: 'whatIsNFS' },
    { icon: 'target', title: '¿Para qué sirve?', key: 'whatFor' },
    { icon: 'lightbulb', title: '¿Cuándo es útil?', key: 'whenUseful' },
    { icon: 'layers', title: 'Arquitectura', key: 'architecture' },
];

function toSectionId(title, index) {
    return `${title || 'seccion'}-${index}`
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

function renderParagraphs(text) {
    return text
        .split('\n\n')
        .filter(Boolean)
        .map((paragraph, index) => (
            <p key={index} className="guide-step__text guide-step__text--lead">
                {paragraph}
            </p>
        ));
}

function resolveIntroCards(guide) {
    if (guide.introCards?.length) {
        return guide.introCards;
    }

    if (guide.intro && typeof guide.intro === 'object') {
        return defaultIntroCards
            .filter((card) => Boolean(guide.intro[card.key]))
            .map((card) => ({
                icon: card.icon,
                title: card.title,
                text: guide.intro[card.key],
            }));
    }

    return [];
}

function GuideCompass({ items }) {
    const navigateTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className="guide-compass">
            <div className="guide-compass__intro">
                <div className="guide-compass__eyebrow">Ruta de lectura</div>
                <h2 className="guide-compass__title">Recorre la guía como una clase guiada</h2>
                <p className="guide-compass__desc">
                    Usa el índice para avanzar por contexto, arquitectura, práctica y verificación.
                </p>
            </div>

            <div className="guide-compass__chips">
                {items.map((item) => (
                    <button
                        key={item.id}
                        type="button"
                        className="guide-chip"
                        onClick={() => navigateTo(item.id)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </section>
    );
}

function GuideExercise({ exercise }) {
    return (
        <article className="guide-exercise">
            <div className="guide-exercise__header">
                <div>
                    <div className="guide-compass__eyebrow">Práctica guiada</div>
                    <h3 className="guide-exercise__title">{exercise.title}</h3>
                </div>
                <span className="guide-exercise__icon">
                    <Icon name="rocket" size={22} color="#00d4ff" />
                </span>
            </div>

            <p className="guide-step__text guide-step__text--lead">{exercise.prompt}</p>

            {exercise.hints?.length > 0 && (
                <div className="guide-exercise__block">
                    <h4 className="guide-exercise__subtitle">Pistas</h4>
                    <ul className="guide-step__list">
                        {exercise.hints.map((hint) => (
                            <li key={hint}>{hint}</li>
                        ))}
                    </ul>
                </div>
            )}

            {exercise.expectedOutput && (
                <div className="guide-step__result">
                    <span className="guide-step__result-label">Resultado esperado</span>
                    <p className="guide-step__result-text">{exercise.expectedOutput}</p>
                </div>
            )}

            {exercise.reflection && (
                <div className="guide-reflection">
                    <Icon name="lightbulb" size={18} color="#00d4ff" />
                    <p>{exercise.reflection}</p>
                </div>
            )}
        </article>
    );
}

export default function GuideView({ lab, showHeader = true, showSidebar = true }) {
    const { guide } = lab;
    const introCards = useMemo(() => resolveIntroCards(guide), [guide]);
    const introText = typeof guide.intro === 'string' ? guide.intro : null;
    const sectionItems = useMemo(() => {
        const items = [{ id: 'guide-intro', label: 'Introducción' }];

        if (guide.technologies?.length) items.push({ id: 'guide-tech', label: 'Tecnologías' });
        if (guide.scenario) items.push({ id: 'guide-scenario', label: 'Escenario' });
        if (guide.labArchitecture) items.push({ id: 'guide-architecture', label: 'Arquitectura' });
        if (guide.objectives?.length) items.push({ id: 'guide-objectives', label: 'Objetivos' });
        if (guide.steps?.length) items.push({ id: 'guide-steps', label: 'Paso a paso' });
        if (guide.verification?.length) items.push({ id: 'guide-verification', label: 'Verificación' });
        if (guide.troubleshooting?.length) items.push({ id: 'guide-troubleshooting', label: 'Errores comunes' });
        if (guide.learnings?.length) items.push({ id: 'guide-learnings', label: 'Resumen' });
        if (guide.extensions?.length) items.push({ id: 'guide-extensions', label: 'Extensión' });
        if (guide.exercise) items.push({ id: 'guide-exercise', label: 'Ejercicio' });
        items.push({ id: 'guide-conclusion', label: 'Cierre' });

        return items;
    }, [guide]);

    return (
        <div className="guide-view">
            {showHeader && <ContentHeader lab={lab} variant="guide" />}

            <div className={`guide-layout ${!showSidebar ? 'guide-layout--single' : ''}`}>
                {showSidebar && (
                    <aside className="guide-sidebar">
                        <GuideCompass items={sectionItems} />
                    </aside>
                )}

                <div className="guide-main">
                    <Section id="guide-intro" title="Introducción">
                        {introText && renderParagraphs(introText)}

                        {introCards.length > 0 && (
                            <div className="guide-intro-grid">
                                {introCards.map((card, index) => (
                                    <article key={`${card.title}-${index}`} className="guide-intro-card">
                                        <Icon name={card.icon || 'book'} size={22} color="#00d4ff" />
                                        <h3>{card.title}</h3>
                                        <p style={{ whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{ __html: card.text }} />
                                    </article>
                                ))}
                            </div>
                        )}

                        {guide.quickNotes?.length > 0 && (
                            <div className="guide-callout-grid">
                                {guide.quickNotes.map((note, index) => (
                                    <article key={`${note.title}-${index}`} className="guide-callout">
                                        <div className="guide-callout__header">
                                            <span className="guide-callout__icon">
                                                <Icon name={note.icon || 'lightbulb'} size={18} color="#00d4ff" />
                                            </span>
                                            <h3 className="guide-callout__title">{note.title}</h3>
                                        </div>
                                        <p className="guide-callout__text">{note.text}</p>
                                    </article>
                                ))}
                            </div>
                        )}
                    </Section>

                    {guide.technologies?.length > 0 && (
                        <Section id="guide-tech" title="Tecnologías Utilizadas">
                            <div className="guide-tech-grid">
                                {guide.technologies.map((tech) => (
                                    <div key={tech.name} className="guide-tech-item">
                                        <span className="guide-tech-name">{tech.name}</span>
                                        <span className="guide-tech-cat">{tech.category || tech.icon}</span>
                                    </div>
                                ))}
                            </div>
                        </Section>
                    )}

                    {guide.scenario && (
                        <Section id="guide-scenario" title="Escenario del Laboratorio" desc={guide.scenario.description}>
                            <div className="guide-scenario">
                                {guide.scenario.vms.map((vm, index) => (
                                    <div key={vm.name} className="guide-vm-card">
                                        <div className="guide-vm-card__header">
                                            <div className="guide-vm-card__left">
                                                <Icon name={index === 0 ? 'monitor' : 'server'} size={18} color="#00d4ff" />
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
                                    <span className="guide-vm-connector__label">{guide.scenario.connectorLabel || 'Conectividad de laboratorio'}</span>
                                    <div className="guide-vm-connector__line" />
                                </div>
                            </div>
                        </Section>
                    )}

                    {guide.labArchitecture && (
                        <Section id="guide-architecture" title="Arquitectura del Laboratorio" desc={guide.labArchitecture.desc}>
                            <div className="guide-arch">
                                {guide.labArchitecture.simulationLink ? (
                                    <ConceptSimulation type={guide.labArchitecture.simulationLink} />
                                ) : guide.labArchitecture.client ? (
                                    <>
                                        <div className="guide-arch-node guide-arch-node--client">
                                            <div className="guide-arch-node__icon">
                                                <Icon name="monitor" size={24} color="#00d4ff" />
                                            </div>
                                            <div className="guide-arch-node__body">
                                                <span className="guide-arch-node__label">Cliente</span>
                                                <strong className="guide-arch-node__name">{guide.labArchitecture.client.name}</strong>
                                                <code className="guide-arch-node__ip">{guide.labArchitecture.client.ip}</code>
                                                <div className="guide-arch-node__pkgs">
                                                    {guide.labArchitecture.client.packages.map((pkg) => (
                                                        <span key={pkg} className="guide-arch-pkg">{pkg}</span>
                                                    ))}
                                                </div>
                                                <div className="guide-arch-node__mount">
                                                    <span className="guide-arch-node__mount-label">Monta en:</span>
                                                    <code>{guide.labArchitecture.client.mounts}</code>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="guide-arch-conn">
                                            <div className="guide-arch-conn__line" />
                                            <div className="guide-arch-conn__arrow">↕</div>
                                            <span className="guide-arch-conn__label">{guide.labArchitecture.connection}</span>
                                            <div className="guide-arch-conn__line" />
                                        </div>

                                        <div className="guide-arch-node guide-arch-node--server">
                                            <div className="guide-arch-node__icon">
                                                <Icon name="server" size={24} color="#00d4ff" />
                                            </div>
                                            <div className="guide-arch-node__body">
                                                <span className="guide-arch-node__label">Servidor</span>
                                                <strong className="guide-arch-node__name">{guide.labArchitecture.server.name}</strong>
                                                <code className="guide-arch-node__ip">{guide.labArchitecture.server.ip}</code>
                                                <div className="guide-arch-node__pkgs">
                                                    {guide.labArchitecture.server.packages.map((pkg) => (
                                                        <span key={pkg} className="guide-arch-pkg">{pkg}</span>
                                                    ))}
                                                </div>
                                                <div className="guide-arch-node__mount">
                                                    <span className="guide-arch-node__mount-label">Exporta:</span>
                                                    <code>{guide.labArchitecture.server.exports}</code>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : guide.labArchitecture.image ? (
                                    <div className="guide-arch-image">
                                        <img src={guide.labArchitecture.image} alt="Topología Lab" />
                                        {guide.labArchitecture.diagram && (
                                            <code className="guide-arch-image__caption">{guide.labArchitecture.diagram}</code>
                                        )}
                                    </div>
                                ) : (
                                    <div className="guide-arch-simple">
                                        <code>{guide.labArchitecture.diagram}</code>
                                    </div>
                                )}
                            </div>
                        </Section>
                    )}

                    {guide.objectives?.length > 0 && (
                        <Section
                            id="guide-objectives"
                            title="Objetivos del Laboratorio"
                            desc="Al completar esta mentoría deberías poder explicar y ejecutar lo siguiente:"
                        >
                            <ul className="guide-objectives">
                                {guide.objectives.map((objective, index) => (
                                    <motion.li
                                        key={objective}
                                        className="guide-objective-item"
                                        initial={{ opacity: 0, x: -12 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.06 }}
                                    >
                                        <span className="guide-obj-num">{String(index + 1).padStart(2, '0')}</span>
                                        <span>{objective}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </Section>
                    )}

                    {guide.steps?.length > 0 && (
                        <Section
                            id="guide-steps"
                            title="Guía Paso a Paso"
                            desc={guide.stepsDesc || 'Sigue los pasos en orden y valida cada resultado antes de pasar al siguiente.'}
                        >
                            <div className="guide-steps">
                                {guide.steps.map((step, index) => (
                                    <Step key={step.id || toSectionId(step.title, index)} step={step} index={index} />
                                ))}
                            </div>
                        </Section>
                    )}

                    {guide.verification?.length > 0 && (
                        <Section
                            id="guide-verification"
                            title="Verificación del Sistema"
                            desc={guide.verificationDesc || 'Usa estas comprobaciones para asegurarte de que el laboratorio quedó realmente operativo.'}
                        >
                            <div className="guide-verification">
                                {guide.verification.map((item, index) => (
                                    <motion.div
                                        key={`${item.title}-${index}`}
                                        className="guide-verify-item"
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.08 }}
                                    >
                                        <div className="guide-verify-header">
                                            <Icon name="checkCircle" size={16} color="#00d4ff" />
                                            <h3 className="guide-verify-title">{item.title}</h3>
                                            {item.vm && <span className="guide-step__vm">{item.vm}</span>}
                                        </div>
                                        <p className="guide-step__text">{item.explanation}</p>
                                        <CodeBlock code={`$ ${item.command}`} />
                                        <div className="guide-step__result">
                                            <span className="guide-step__result-label">Salida esperada</span>
                                            <CodeBlock code={item.expectedOutput} />
                                            <p className="guide-step__result-text">{item.outputExplanation}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </Section>
                    )}

                    {guide.troubleshooting?.length > 0 && (
                        <Section
                            id="guide-troubleshooting"
                            title="Errores Comunes"
                            desc="Si algo falla, usa esta sección como diagnóstico rápido antes de repetir comandos a ciegas."
                        >
                            <div className="guide-troubles">
                                {guide.troubleshooting.map((item, index) => (
                                    <motion.div
                                        key={`${item.error}-${index}`}
                                        className="guide-trouble-card"
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.07 }}
                                    >
                                        <div className="guide-trouble-error">
                                            <span className="guide-trouble-label">Error</span>
                                            <code className="guide-trouble-msg">{item.error}</code>
                                        </div>
                                        <div className="guide-trouble-cause">
                                            <span className="guide-trouble-label">Causa probable</span>
                                            <p>{item.cause}</p>
                                        </div>
                                        <div className="guide-trouble-fix">
                                            <span className="guide-trouble-label guide-trouble-label--fix">Solución</span>
                                            <p>{item.fix.description}</p>
                                            <CodeBlock code={item.fix.command} />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </Section>
                    )}

                    {guide.learnings?.length > 0 && (
                        <Section
                            id="guide-learnings"
                            title="Resumen de Aprendizaje"
                            desc="Estos conceptos deberían quedarte claros al terminar la mentoría."
                        >
                            <div className="guide-learnings">
                                {guide.learnings.map((learning, index) => (
                                    <motion.div
                                        key={typeof learning === 'string' ? learning : learning.concept}
                                        className="guide-learning-item"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.07 }}
                                    >
                                        <div className="guide-learning-dot" />
                                        <div>
                                            {typeof learning === 'string' ? (
                                                <p className="guide-learning-desc guide-learning-desc--plain">{learning}</p>
                                            ) : (
                                                <>
                                                    <strong className="guide-learning-concept">{learning.concept}</strong>
                                                    <p className="guide-learning-desc">{learning.desc}</p>
                                                </>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </Section>
                    )}

                    {guide.extensions?.length > 0 && (
                        <Section
                            id="guide-extensions"
                            title="Extensión del Laboratorio"
                            desc="Cuando lo principal ya funciona, estos retos te obligan a pensar un nivel más arriba."
                        >
                            <div className="guide-extensions">
                                {guide.extensions.map((extension, index) => (
                                    <motion.div
                                        key={`${extension.title}-${index}`}
                                        className="guide-ext-card"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.07 }}
                                    >
                                        <div className="guide-ext-header">
                                            <span className="guide-ext-num">{String(index + 1).padStart(2, '0')}</span>
                                            <strong className="guide-ext-title">{extension.title}</strong>
                                        </div>
                                        <p className="guide-ext-desc">{extension.desc}</p>
                                        {extension.command && <CodeBlock code={extension.command} />}
                                    </motion.div>
                                ))}
                            </div>
                        </Section>
                    )}

                    {guide.exercise && (
                        <Section id="guide-exercise" title={null}>
                            <GuideExercise exercise={guide.exercise} />
                        </Section>
                    )}

                    <Section id="guide-conclusion" title="Cierre">
                        <section className="guide-section guide-conclusion">
                            <Icon name="checkCircle" size={36} color="#00d4ff" />
                            <h2>Mentoría completada</h2>
                            <p>
                                {guide.conclusion ||
                                    'Has finalizado esta guía. Revisa resultados, verifica conceptos clave y documenta tus observaciones antes de pasar a la siguiente mentoría.'}
                            </p>
                        </section>
                    </Section>
                </div>
            </div>
        </div>
    );
}
