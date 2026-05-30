import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Layers3, Link2, ServerCog, Sparkles } from 'lucide-react';
import { pick, useI18n } from '../../i18n/i18n';
import ProjectIcon from '../Icon/ProjectIcon';

const reveal = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { delay: i * 0.12, duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    }),
};

function ProjectPreview({ project, lang }) {
    const preview = project.preview;

    if (project.name === 'GymFlow AI') {
        return (
            <div className="project-preview project-preview--browser">
                <div className="browser-mockup">
                    <div className="browser-mockup__bar">
                        <div className="browser-mockup__dots">
                            <span className="dot dot--red" />
                            <span className="dot dot--yellow" />
                            <span className="dot dot--green" />
                        </div>
                        <div className="browser-mockup__tab">
                            <span className="tab-icon">🏋️</span>
                            <span className="tab-title">GymFlow AI Admin</span>
                        </div>
                        <div className="browser-mockup__address">
                            <span className="address-lock">🔒</span>
                            <span className="address-url">gymflow-frontend.vercel.app</span>
                        </div>
                    </div>
                    <div className="browser-mockup__screen">
                        <div className="browser-mockup__screen-scroll">
                            <img src={preview.image} alt={pick(preview, 'alt', lang)} loading="lazy" />
                        </div>
                        <div className="browser-mockup__glare" />
                        
                        {/* Interactive floating badges for dashboard realism */}
                        <div className="browser-float-badge browser-float-badge--accuracy">
                            <span className="pulse-green-dot" />
                            <strong>98.7%</strong>
                            <span>Accuracy</span>
                        </div>
                        <div className="browser-float-badge browser-float-badge--status">
                            <span className="badge-bg-glow" />
                            <strong>JWT ACTIVE</strong>
                            <span>RBAC Secure</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (project.name === 'TeToca') {
        return (
            <div className="project-preview project-preview--phone">
                <div className="phone-mockup">
                    <div className="phone-mockup__outer">
                        <div className="phone-mockup__bezel">
                            <div className="phone-mockup__camera-island">
                                <span className="camera-lens" />
                                <span className="camera-sensor" />
                            </div>
                            <div className="phone-mockup__speaker" />
                            <div className="phone-mockup__screen">
                                <img src={preview.image} alt={pick(preview, 'alt', lang)} loading="lazy" />
                                <div className="phone-mockup__glass-shine" />
                                
                                {/* Floating UX badges */}
                                <div className="phone-float-badge phone-float-badge--ux">
                                    <Sparkles size={12} />
                                    <span>UX Prototypes</span>
                                </div>
                                <div className="phone-float-badge phone-float-badge--figma">
                                    <span className="figma-color-dot" />
                                    <span>Figma High-Fi</span>
                                </div>
                            </div>
                            <div className="phone-mockup__home-bar" />
                        </div>
                        <div className="phone-mockup__btn phone-mockup__btn--volume-up" />
                        <div className="phone-mockup__btn phone-mockup__btn--volume-down" />
                        <div className="phone-mockup__btn phone-mockup__btn--power" />
                    </div>
                </div>
            </div>
        );
    }

    if (project.name === 'PixPro') {
        return (
            <div className="project-preview project-preview--architecture" aria-label={pick(preview, 'caption', lang)}>
                <div className="project-window project-window--diagram">
                    <div className="project-window__bar">
                        <span />
                        <span />
                        <span />
                        <strong>{pick(preview, 'caption', lang)}</strong>
                    </div>
                    <div className="architecture-board">
                        {/* SVG Connection Pipelines */}
                        <svg className="architecture-pipelines" viewBox="0 0 450 340" preserveAspectRatio="none">
                            {/* Angular -> Node API */}
                            <path d="M 65,65 L 140,65 L 140,165" className="pipeline-path" />
                            <path d="M 65,65 L 140,65 L 140,165" className="pipeline-pulse" />

                            {/* Node API -> Supabase */}
                            <path d="M 225,120 L 225,65" className="pipeline-path" style={{ strokeDasharray: '4 4' }} />
                            <path d="M 225,120 L 225,65" className="pipeline-pulse-vertical" />

                            {/* Node API -> RabbitMQ */}
                            <path d="M 285,175 L 375,175" className="pipeline-path" />
                            <path d="M 285,175 L 375,175" className="pipeline-pulse" style={{ animationDelay: '0.8s' }} />

                            {/* RabbitMQ -> Python Worker */}
                            <path d="M 375,175 L 375,285 L 285,285" className="pipeline-path" />
                            <path d="M 375,175 L 375,285 L 285,285" className="pipeline-pulse" style={{ animationDelay: '1.6s' }} />

                            {/* Python Worker -> MySQL */}
                            <path d="M 165,285 L 65,285" className="pipeline-path" />
                            <path d="M 165,285 L 65,285" className="pipeline-pulse" style={{ animationDelay: '2.4s' }} />
                        </svg>

                        {/* Top Row Nodes */}
                        <div className="arch-node arch-node--angular" style={{ gridArea: '1 / 1 / 2 / 2' }}>
                            <span className="node-status node-status--online">ONLINE</span>
                            <span className="node-icon">💻</span>
                            <strong>Angular UI</strong>
                            <span className="node-sub">Modular & Lazy</span>
                        </div>

                        <div className="arch-node arch-node--supabase" style={{ gridArea: '1 / 2 / 2 / 3' }}>
                            <span className="node-status node-status--active">SUPABASE</span>
                            <span className="node-icon">🔑</span>
                            <strong>Auth Core</strong>
                        </div>

                        {/* Middle Row Core */}
                        <div className="arch-node arch-node--core" style={{ gridArea: '2 / 1 / 3 / 3', justifySelf: 'center' }}>
                            <span className="node-status node-status--core">CLEAN ARCH</span>
                            <div className="core-icon-container">
                                <ServerCog size={20} className="spin-slow" />
                                <strong>Node.js API</strong>
                            </div>
                            <span className="node-sub">TypeScript Gateway</span>
                        </div>

                        {/* Right / Queue and Worker */}
                        <div className="arch-node arch-node--rabbitmq" style={{ gridArea: '2 / 3 / 3 / 4' }}>
                            <span className="node-status node-status--queue">QUEUED</span>
                            <span className="node-icon">📨</span>
                            <strong>RabbitMQ</strong>
                            <div className="mini-progress"><div className="mini-progress-bar" /></div>
                        </div>

                        <div className="arch-node arch-node--worker" style={{ gridArea: '3 / 2 / 4 / 3' }}>
                            <span className="node-status node-status--processing">PROCESSING</span>
                            <span className="node-icon">⚙️</span>
                            <strong>Python Worker</strong>
                            <span className="node-sub">Image Optimizer</span>
                        </div>

                        <div className="arch-node arch-node--mysql" style={{ gridArea: '3 / 1 / 4 / 2' }}>
                            <span className="node-status node-status--db">SQL</span>
                            <span className="node-icon">🗄️</span>
                            <strong>MySQL DB</strong>
                            <span className="node-sub">Storage Layer</span>
                        </div>

                        {/* Bottom flow banner */}
                        <div className="architecture-board__flow">
                            <span>Upload</span>
                            <i />
                            <span>Optimize</span>
                            <i />
                            <span>Deliver</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}

export default function ProjectShowcaseCard({ project, index }) {
    const { t, lang } = useI18n();
    const highlights = pick(project, 'highlights', lang) || [];
    const links = project.links || [];
    const isReversed = index % 2 === 1;

    const cardRef = useRef(null);
    const [tiltStyles, setTiltStyles] = useState({
        '--tilt-x': '0deg',
        '--tilt-y': '0deg',
        '--mouse-x': '50%',
        '--mouse-y': '50%',
        '--active': 0,
    });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        // Skip tilt calculations on touch-only mobile devices to avoid performance hit
        if (window.matchMedia('(hover: none)').matches) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const normalizedX = (x / rect.width) - 0.5;
        const normalizedY = (y / rect.height) - 0.5;

        // Subtle 3D tilt (8 degrees maximum)
        const maxTiltX = 8;
        const maxTiltY = 8;

        const tiltX = -normalizedY * maxTiltX;
        const tiltY = normalizedX * maxTiltY;

        setTiltStyles({
            '--tilt-x': `${tiltX.toFixed(2)}deg`,
            '--tilt-y': `${tiltY.toFixed(2)}deg`,
            '--mouse-x': `${x.toFixed(1)}px`,
            '--mouse-y': `${y.toFixed(1)}px`,
            '--active': 1,
        });
    };

    const handleMouseLeave = () => {
        setTiltStyles({
            '--tilt-x': '0deg',
            '--tilt-y': '0deg',
            '--mouse-x': '50%',
            '--mouse-y': '50%',
            '--active': 0,
        });
    };

    return (
        <motion.article
            ref={cardRef}
            className={`project-showcase ${isReversed ? 'project-showcase--reverse' : ''}`}
            style={{
                '--accent': project.accent,
                ...tiltStyles,
            }}
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            custom={index}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Specular glowing orb behind the card for visual depth */}
            <div className="project-showcase__ambient-orb" />

            <div className="project-showcase__content">
                <div className="project-showcase__topline">
                    <span className="project-showcase__icon">
                        <ProjectIcon name={project.icon} size={22} />
                    </span>
                    <span className="project-showcase__type">{project.type}</span>
                    <span className="project-showcase__period">{pick(project, 'period', lang)}</span>
                </div>

                <h2>{project.name}</h2>

                <p className="project-showcase__impact">
                    <Sparkles size={16} />
                    <span>{pick(project, 'impact', lang)}</span>
                </p>

                <p className="project-showcase__desc">{pick(project, 'desc', lang)}</p>

                <div className="project-showcase__highlights">
                    <span>
                        <Layers3 size={15} />
                        {t('portfolio.highlights')}
                    </span>
                    <ul>
                        {highlights.slice(0, 5).map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                        ))}
                    </ul>
                </div>

                <div className="project-showcase__tags">
                    {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>

                {links.length > 0 && (
                    <div className="project-showcase__links" aria-label={t('portfolio.liveLinks')}>
                        <span>
                            <Link2 size={14} />
                            {t('portfolio.liveLinks')}
                        </span>
                        <div className="project-showcase__actions-wrapper">
                            {links.map((link) => (
                                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                                    {pick(link, 'label', lang)}
                                    <ArrowUpRight size={16} />
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <ProjectPreview project={project} lang={lang} />
        </motion.article>
    );
}
