import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowDownRight, ArrowUpRight, Download } from 'lucide-react';
import { useI18n } from '../../i18n/i18n';
import cvEs from '../../assets/CV BEIMAR RODRIGO MACHACA ARUQUIPA 2026.pdf';
import cvEn from '../../assets/CV_BEIMAR_RODRIGO_MACHACA_ARUQUIPA_2026_EN.pdf';
import { EXTERNAL_LINKS } from '../../constants/externalLinks';
import { MENTORING_ROUTE, PORTFOLIO_ROUTE } from '../../constants/routes';
import { scrollToSelector, scrollToTop } from '../../utils/scroll';
import './Hero.css';

const textLinks = [
    { label: 'GitHub', href: EXTERNAL_LINKS.github },
    { label: 'GitLab', href: EXTERNAL_LINKS.gitlab },
    { label: 'LinkedIn', href: EXTERNAL_LINKS.linkedin },
    { label: 'Instagram', href: EXTERNAL_LINKS.instagram },
    { label: 'TikTok', href: EXTERNAL_LINKS.tiktok },
];

const reveal = {
    hidden: { y: '110%' },
    visible: (i = 0) => ({
        y: 0,
        transition: { delay: 0.1 + i * 0.12, duration: 0.85, ease: [0.22, 1, 0.36, 1] }
    }),
};

const fade = {
    hidden: { opacity: 0, y: 18 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { delay: 0.45 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }),
};

export default function Hero() {
    const { t } = useI18n();
    const navigate = useNavigate();

    const indexItems = [
        { num: '01', label: t('nav.about'), onClick: () => scrollToSelector('#about') },
        { num: '02', label: t('nav.portfolio'), onClick: () => { navigate(PORTFOLIO_ROUTE); scrollToTop(); } },
        { num: '03', label: t('nav.mentoring'), onClick: () => { navigate(MENTORING_ROUTE); scrollToTop(); } },
        { num: '04', label: t('nav.contact'), onClick: () => scrollToSelector('#contact') },
    ];

    return (
        <section id="hero" className="hero">
            <div className="hero-frame">

                {/* Meta row — spec-sheet header */}
                <motion.div className="hero-meta" variants={fade} initial="hidden" animate="visible" custom={0}>
                    <span className="hero-meta-item">La Paz, Bolivia — GMT−4</span>
                    <span className="hero-meta-item hero-meta-status">
                        <span className="status-dot" aria-hidden="true" />
                        {t('hero.availability')}
                    </span>
                    <span className="hero-meta-item hero-meta-right">Portfolio — 2026</span>
                </motion.div>

                {/* Giant name */}
                <h1 className="hero-name">
                    <span className="hero-name-line">
                        <motion.span className="hero-name-text" variants={reveal} initial="hidden" animate="visible" custom={0}>
                            Rodrigo
                        </motion.span>
                    </span>
                    <span className="hero-name-line">
                        <motion.span className="hero-name-text hero-name-outline" variants={reveal} initial="hidden" animate="visible" custom={1}>
                            Machaca<span className="hero-name-dot">.</span>
                        </motion.span>
                    </span>
                </h1>

                {/* Statement + index */}
                <div className="hero-grid">
                    <motion.div className="hero-statement" variants={fade} initial="hidden" animate="visible" custom={1}>
                        <p className="hero-role">
                            {t('hero.role1')} <span className="hero-role-sep">/</span> {t('hero.role2')}
                        </p>
                        <p className="hero-bio">{t('hero.bio')}</p>

                        <div className="hero-actions">
                            <a
                                href="#contact"
                                className="btn-primary"
                                onClick={(e) => { e.preventDefault(); scrollToSelector('#contact'); }}
                            >
                                {t('hero.ctaContact')} <ArrowDownRight size={15} aria-hidden="true" />
                            </a>
                            <a href={cvEs} download="CV_Beimar_Rodrigo_Machaca_ES.pdf" className="btn-secondary" aria-label="Descargar CV en español">
                                CV — ES <Download size={14} aria-hidden="true" />
                            </a>
                            <a href={cvEn} download="CV_Beimar_Rodrigo_Machaca_EN.pdf" className="btn-secondary" aria-label="Download English resume">
                                CV — EN <Download size={14} aria-hidden="true" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Table of contents */}
                    <motion.nav className="hero-index" aria-label="Índice del sitio" variants={fade} initial="hidden" animate="visible" custom={2}>
                        {indexItems.map(item => (
                            <button key={item.num} className="hero-index-item" onClick={item.onClick}>
                                <span className="hero-index-num">{item.num}</span>
                                <span className="hero-index-label">{item.label}</span>
                                <ArrowDownRight size={16} className="hero-index-arrow" aria-hidden="true" />
                            </button>
                        ))}
                    </motion.nav>
                </div>

                {/* Footer row — text links */}
                <motion.div className="hero-links" variants={fade} initial="hidden" animate="visible" custom={3}>
                    {textLinks.map(link => (
                        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="hero-link">
                            {link.label} <ArrowUpRight size={13} aria-hidden="true" />
                        </a>
                    ))}
                    <a href={EXTERNAL_LINKS.email} className="hero-link hero-link--email">
                        beimar090@gmail.com
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
