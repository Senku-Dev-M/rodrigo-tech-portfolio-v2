import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '../../i18n/i18n';
import Icon from '../Icon/Icon';
import ContentHeader from '../MentoringContent/ContentHeader';
import ConceptSimulation from '../ConceptSimulation/ConceptSimulation';
import InteractiveCodeBlock from './InteractiveCodeBlock';
import './TheoryView.css';

function toSectionId(title, index) {
    const slug = title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

    return `${slug || 'seccion'}-${index}`;
}

function renderHtmlParagraphs(content, className = 'theory-text') {
    return content
        .split('\n\n')
        .filter(Boolean)
        .map((paragraph, index) => (
            <p
                key={index}
                className={className}
                dangerouslySetInnerHTML={{ __html: paragraph }}
            />
        ));
}

function Section({ id, title, desc, children }) {
    return (
        <motion.section
            id={id}
            className="theory-section"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            {title && <h2 className="theory-section__title">{title}</h2>}
            {desc && <p className="theory-section__desc">{desc}</p>}
            {children}
        </motion.section>
    );
}

function SectionNav({ items, introLabel, conclusionLabel }) {
    const navigateTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className="theory-compass">
            <div className="theory-compass__intro">
                <div className="theory-compass__eyebrow">Ruta de lectura</div>
                <h2 className="theory-compass__title">Explora la mentoría como un mini curso</h2>
                <p className="theory-compass__desc">
                    Sigue la secuencia sugerida o entra directamente al bloque que necesites revisar.
                </p>
            </div>
            <div className="theory-compass__chips">
                <button type="button" className="theory-chip" onClick={() => navigateTo('theory-intro')}>
                    {introLabel}
                </button>
                {items.map((item) => (
                    <button
                        key={item.id}
                        type="button"
                        className="theory-chip"
                        onClick={() => navigateTo(item.id)}
                    >
                        {item.title}
                    </button>
                ))}
                <button type="button" className="theory-chip" onClick={() => navigateTo('theory-conclusion')}>
                    {conclusionLabel}
                </button>
            </div>
        </section>
    );
}

function ObjectivesGrid({ objectives, title }) {
    return (
        <div className="theory-objectives-card">
            <div className="theory-card__eyebrow">{title}</div>
            <div className="theory-objectives-grid">
                {objectives.map((objective, index) => (
                    <div key={objective} className="theory-objective">
                        <span className="theory-objective__index">{index + 1}</span>
                        <p className="theory-objective__text">{objective}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function CalloutGroup({ title, items, variant = 'info' }) {
    return (
        <div className={`theory-callout-group theory-callout-group--${variant}`}>
            {title && (
                <div className="theory-card__eyebrow">
                    {title}
                </div>
            )}
            <div className="theory-callout-grid">
                {items.map((item, index) => (
                    <article key={`${item.title}-${index}`} className={`theory-callout theory-callout--${variant}`}>
                        <div className="theory-callout__header">
                            {item.icon && (
                                <span className="theory-callout__icon">
                                    <Icon name={item.icon} size={18} />
                                </span>
                            )}
                            <h3 className="theory-callout__title">{item.title}</h3>
                        </div>
                        <div
                            className="theory-callout__text"
                            dangerouslySetInnerHTML={{ __html: item.text }}
                        />
                    </article>
                ))}
            </div>
        </div>
    );
}

function FeatureCards({ items }) {
    return (
        <div className="theory-card-grid">
            {items.map((item, index) => (
                <article
                    key={`${item.title}-${index}`}
                    className="theory-info-card"
                    style={item.color ? { '--theory-card-accent': item.color } : undefined}
                >
                    <div className="theory-info-card__header">
                        <span className="theory-info-card__icon">
                            <Icon name={item.icon || 'star'} size={22} />
                        </span>
                        <h3 className="theory-info-card__title">{item.title}</h3>
                    </div>
                    <div
                        className="theory-info-card__desc"
                        dangerouslySetInnerHTML={{ __html: item.desc || item.text || '' }}
                    />
                </article>
            ))}
        </div>
    );
}

function Checklist({ items, ordered = false }) {
    const Wrapper = ordered ? 'ol' : 'ul';

    return (
        <Wrapper className={`theory-checklist ${ordered ? 'theory-checklist--ordered' : ''}`}>
            {items.map((item, index) => (
                <li key={`${item}-${index}`} className="theory-checklist__item">
                    <span className="theory-checklist__marker">
                        {ordered ? index + 1 : <Icon name="checkCircle" size={16} />}
                    </span>
                    <span className="theory-checklist__text">{item}</span>
                </li>
            ))}
        </Wrapper>
    );
}

function Exercise({ section }) {
    return (
        <article className="theory-exercise">
            <div className="theory-exercise__header">
                <div>
                    <div className="theory-card__eyebrow">Práctica guiada</div>
                    <h3 className="theory-exercise__title">{section.title}</h3>
                </div>
                <span className="theory-exercise__icon">
                    <Icon name="rocket" size={22} />
                </span>
            </div>
            <p className="theory-exercise__prompt">{section.prompt}</p>

            {section.starterCode && (
                <pre className="theory-code-preview">
                    <code>{section.starterCode}</code>
                </pre>
            )}

            {section.hints?.length > 0 && (
                <div className="theory-exercise__block">
                    <h4 className="theory-subtitle">Pistas</h4>
                    <Checklist items={section.hints} />
                </div>
            )}

            {section.expectedOutput && (
                <div className="theory-exercise__block">
                    <h4 className="theory-subtitle">Resultado esperado</h4>
                    <p className="theory-text">{section.expectedOutput}</p>
                </div>
            )}

            {section.reflection && (
                <div className="theory-reflection">
                    <span className="theory-reflection__icon">
                        <Icon name="lightbulb" size={18} />
                    </span>
                    <p>{section.reflection}</p>
                </div>
            )}
        </article>
    );
}

function ProcessBlock({ section, observeTitle }) {
    return (
        <div className={`theory-process ${section.simLayout === 'stacked' ? 'theory-process--stacked' : ''}`}>
            <div className="theory-process__content">
                {section.steps?.length > 0 && (
                    <div className="theory-process__steps">
                        {section.steps.map((step, index) => (
                            <article key={`${step.name}-${index}`} className="theory-step">
                                <span className="theory-step__num">{index + 1}</span>
                                <div className="theory-step__body">
                                    <h3 className="theory-step__title">
                                        {step.name}
                                        {step.sender && (
                                            <span className="theory-step__sender">({step.sender})</span>
                                        )}
                                    </h3>
                                    <p className="theory-step__text">{step.action}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                )}

                {section.observe?.length > 0 && (
                    <aside className="theory-observe">
                        <div className="theory-card__eyebrow">{observeTitle}</div>
                        <Checklist items={section.observe} />
                    </aside>
                )}
            </div>

            <div className="theory-process__sim">
                {section.simType && <ConceptSimulation type={section.simType} />}
            </div>
        </div>
    );
}

function ComparisonTable({ section }) {
    return (
        <div className="theory-table-shell">
            <table className="theory-table">
                <thead>
                    <tr>
                        {section.headers.map((header) => (
                            <th key={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {section.rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={`${cellIndex}-${cell}`}
                                    className={cellIndex === 0 ? 'theory-table__primary' : ''}
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function ProsConsCard({ title, pros, cons, t }) {
    return (
        <article className="theory-proscons">
            <h3 className="theory-proscons__title">{title}</h3>
            <div className="theory-proscons__grid">
                <div className="theory-proscons__column theory-proscons__column--pros">
                    <div className="theory-proscons__heading">
                        <Icon name="checkCircle" size={18} />
                        <span>{t('theory.pros', 'Ventajas')}</span>
                    </div>
                    <Checklist items={pros} />
                </div>
                <div className="theory-proscons__column theory-proscons__column--cons">
                    <div className="theory-proscons__heading">
                        <Icon name="xCircle" size={18} />
                        <span>{t('theory.cons', 'Desventajas')}</span>
                    </div>
                    <Checklist items={cons} />
                </div>
            </div>
        </article>
    );
}

function ModelsSection({ section, t }) {
    return (
        <div className="theory-models-stack">
            {section.models.map((model, index) => (
                <article key={`${model.title}-${index}`} className="theory-model-card">
                    <h3 className="theory-model-card__title">{model.title}</h3>
                    <div className="theory-model-card__body">
                        <div>
                            <div className="theory-card__eyebrow">{t('theory.whatIs', '¿Qué es?')}</div>
                            <p className="theory-text">{model.whatIs}</p>
                        </div>
                        <div>
                            <div className="theory-card__eyebrow">{t('theory.howWorks', '¿Cómo funciona?')}</div>
                            <p className="theory-text">{model.howWorks}</p>
                        </div>
                        {model.examples?.length > 0 && (
                            <div>
                                <div className="theory-card__eyebrow">{t('theory.examples', 'Ejemplos de uso')}</div>
                                <Checklist items={model.examples} />
                            </div>
                        )}
                    </div>
                    {model.pros && model.cons && (
                        <ProsConsCard
                            title={`${t('theory.analysis', 'Análisis de')} ${model.title}`}
                            pros={model.pros}
                            cons={model.cons}
                            t={t}
                        />
                    )}
                </article>
            ))}
        </div>
    );
}

export default function TheoryView({ lab }) {
    const { t } = useI18n();
    const { content } = lab;

    const sectionEntries = useMemo(
        () =>
            (content.sections || []).map((section, index) => ({
                ...section,
                _sectionId: toSectionId(section.title || section.type || 'section', index),
            })),
        [content.sections]
    );

    const sectionNavItems = useMemo(
        () =>
            sectionEntries
                .filter((section) => Boolean(section.title))
                .map((section) => ({ id: section._sectionId, title: section.title })),
        [sectionEntries]
    );

    const renderSection = (section) => {
        if (section.type === 'text') {
            return renderHtmlParagraphs(section.content);
        }

        if (section.type === 'calloutGroup') {
            return <CalloutGroup title={section.title} items={section.items} variant={section.variant} />;
        }

        if (section.type === 'checklist') {
            return <Checklist items={section.items} ordered={section.ordered} />;
        }

        if (section.type === 'exercise') {
            return <Exercise section={section} />;
        }

        if (section.type === 'process') {
            return <ProcessBlock section={section} observeTitle={t('theory.observe', 'Qué debes observar')} />;
        }

        if (section.type === 'interactiveCode') {
            return (
                <InteractiveCodeBlock
                    code={section.code}
                    explanations={section.explanations}
                    output={section.output}
                />
            );
        }

        if (section.type === 'featureCards' || section.type === 'useCases' || section.type === 'grid-cards') {
            return <FeatureCards items={section.features || section.cases || section.cards || []} />;
        }

        if (section.type === 'comparisonTable') {
            return <ComparisonTable section={section} />;
        }

        if (section.type === 'models') {
            return <ModelsSection section={section} t={t} />;
        }

        if (section.type === 'proscons') {
            return <ProsConsCard title={section.title} pros={section.pros} cons={section.cons} t={t} />;
        }

        return null;
    };

    return (
        <div className="theory-view">
            <ContentHeader lab={lab} variant="theory" />
            <div className="theory-layout">
                <aside className="theory-sidebar">
                    <SectionNav
                        items={sectionNavItems}
                        introLabel={t('theory.intro', 'Introducción')}
                        conclusionLabel={t('theory.conclusion', 'Conclusión')}
                    />
                </aside>

                <div className="theory-main">
                    <Section id="theory-intro" title={t('theory.intro', 'Introducción')}>
                        <div className="theory-hero-card">
                            <div className="theory-card__eyebrow">Contexto del tema</div>
                            {renderHtmlParagraphs(content.intro, 'theory-text theory-text--lead')}
                        </div>
                        {content.objectives?.length > 0 && (
                            <ObjectivesGrid
                                objectives={content.objectives}
                                title={t('theory.learningObjectives', 'Objetivos de aprendizaje')}
                            />
                        )}
                    </Section>

                    {content.models &&
                        Object.entries(content.models).map(([key, model], index) => (
                            <Section key={key} id={`theory-model-${index}`} title={model.title}>
                                <div className="theory-model-layout">
                                    <div className="theory-model-layout__copy">
                                        <div>
                                            <div className="theory-card__eyebrow">{t('theory.whatIs', '¿Qué es?')}</div>
                                            <p className="theory-text">{model.whatIs}</p>
                                        </div>
                                        <div>
                                            <div className="theory-card__eyebrow">{t('theory.howWorks', '¿Cómo funciona?')}</div>
                                            <p className="theory-text">{model.howWorks}</p>
                                        </div>
                                        {model.examples?.length > 0 && (
                                            <div>
                                                <div className="theory-card__eyebrow">{t('theory.examples', 'Ejemplos de uso')}</div>
                                                <Checklist items={model.examples} />
                                            </div>
                                        )}
                                    </div>
                                    <div className="theory-model-layout__sim">
                                        <ConceptSimulation
                                            type={
                                                key === 'clientServer'
                                                    ? 'client-server'
                                                    : key === 'p2p'
                                                        ? 'p2p'
                                                        : 'dhcp'
                                            }
                                        />
                                    </div>
                                </div>
                                {model.pros && model.cons && (
                                    <ProsConsCard
                                        title={`${t('theory.analysis', 'Análisis de')} ${model.title}`}
                                        pros={model.pros}
                                        cons={model.cons}
                                        t={t}
                                    />
                                )}
                            </Section>
                        ))}

                    {content.dhcpProcess && (
                        <Section
                            id="theory-dhcp-process"
                            title={content.dhcpProcess.title}
                            desc={content.dhcpProcess.desc}
                        >
                            <ProcessBlock
                                section={{
                                    steps: content.dhcpProcess.steps,
                                    simType: 'dhcp',
                                    observe: content.dhcpProcess.observe,
                                }}
                                observeTitle={t('theory.observe', 'Qué debes observar')}
                            />
                        </Section>
                    )}

                    {content.dhcpConfig && (
                        <Section id="theory-dhcp-config" title={content.dhcpConfig.title}>
                            <Checklist items={content.dhcpConfig.items} />
                        </Section>
                    )}

                    {content.comparison && (
                        <Section id="theory-comparison" title={t('theory.comparisonTitle', 'Tabla comparativa')}>
                            <div className="theory-table-shell">
                                <table className="theory-table">
                                    <thead>
                                        <tr>
                                            <th>{t('theory.aspect', 'Aspecto')}</th>
                                            <th>Cliente-Servidor</th>
                                            <th>Peer-to-Peer (P2P)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {content.comparison.map((row) => (
                                            <tr key={row.aspect}>
                                                <td className="theory-table__primary">{row.aspect}</td>
                                                <td>{row.cs}</td>
                                                <td>{row.p2p}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Section>
                    )}

                    {sectionEntries.map((section) => (
                        <Section
                            key={section._sectionId}
                            id={section._sectionId}
                            title={
                                ['calloutGroup', 'exercise', 'proscons'].includes(section.type)
                                    ? null
                                    : section.title
                            }
                            desc={section.desc}
                        >
                            {renderSection(section)}
                        </Section>
                    ))}

                    <Section id="theory-conclusion" title={t('theory.conclusion', 'Conclusión')}>
                        <article className="theory-conclusion">
                            <span className="theory-conclusion__icon">
                                <Icon name="book" size={26} />
                            </span>
                            <div className="theory-conclusion__content">
                                {renderHtmlParagraphs(content.conclusion)}
                            </div>
                        </article>
                    </Section>
                </div>
            </div>
        </div>
    );
}
