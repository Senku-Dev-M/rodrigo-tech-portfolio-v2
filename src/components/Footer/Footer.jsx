import { useNavigate } from 'react-router-dom';
import { useI18n } from '../../i18n/i18n';
import { Github, Gitlab, Linkedin, Instagram, Mail, Award, ArrowUp } from 'lucide-react';
import Tiktok from '../Icons/Tiktok';
import { EXTERNAL_LINKS } from '../../constants/externalLinks';
import { HOME_ROUTE, MENTORING_ROUTE, PORTFOLIO_ROUTE, FORMACION_ROUTE } from '../../constants/routes';
import { scrollToSelector, scrollToTop } from '../../utils/scroll';
import './Footer.css';

export default function Footer() {
    const { t } = useI18n();
    const navigate = useNavigate();

    const socialLinks = [
        { label: 'GitHub', href: EXTERNAL_LINKS.github, icon: <Github size={18} aria-hidden="true" /> },
        { label: 'GitLab', href: EXTERNAL_LINKS.gitlab, icon: <Gitlab size={18} aria-hidden="true" /> },
        { label: 'LinkedIn', href: EXTERNAL_LINKS.linkedin, icon: <Linkedin size={18} aria-hidden="true" /> },
        { label: 'Instagram', href: EXTERNAL_LINKS.instagram, icon: <Instagram size={18} aria-hidden="true" /> },
        { label: 'TikTok', href: EXTERNAL_LINKS.tiktok, icon: <Tiktok size={18} /> },
        { label: 'Email', href: EXTERNAL_LINKS.email, icon: <Mail size={18} aria-hidden="true" /> },
        { label: t('footer.certificates'), href: EXTERNAL_LINKS.certifications, icon: <Award size={18} aria-hidden="true" /> },
    ];

    const navLinks = [
        { label: t('nav.about'), action: () => { navigate(HOME_ROUTE); setTimeout(() => scrollToSelector('#about'), 150); } },
        { label: t('nav.mentoring'), action: () => navigate(MENTORING_ROUTE) },
        { label: t('nav.portfolio'), action: () => navigate(PORTFOLIO_ROUTE) },
        { label: t('nav.formacion'), action: () => navigate(FORMACION_ROUTE) },
        { label: t('nav.contact'), action: () => { navigate(HOME_ROUTE); setTimeout(() => scrollToSelector('#contact'), 150); } },
    ];

    return (
        <footer className="footer">
            <div className="footer-inner">
                {/* Logo */}
                <div className="footer-brand">
                    <span className="footer-logo" aria-label="Rodrigo Machaca">
                        <span className="logo-bracket" aria-hidden="true">&lt;</span>
                        <span className="logo-name">RM</span>
                        <span className="logo-bracket" aria-hidden="true">/&gt;</span>
                    </span>
                    <p className="footer-tagline">Full Stack Developer &amp; Mentor</p>
                </div>

                {/* Navigation */}
                <nav className="footer-nav" aria-label={t('footer.nav')}>
                    <span className="footer-col-title">{t('footer.nav')}</span>
                    {navLinks.map((l, i) => (
                        <button key={i} className="footer-nav-btn" onClick={l.action}>
                            {l.label}
                        </button>
                    ))}
                </nav>

                {/* Social links */}
                <nav className="footer-socials" aria-label={t('footer.connect')}>
                    <span className="footer-col-title">{t('footer.connect')}</span>
                    <div className="footer-social-grid">
                        {socialLinks.map((l, i) => (
                            <a key={i} href={l.href} target="_blank" rel="noopener noreferrer"
                               className="footer-social-link" aria-label={l.label}>
                                {l.icon}
                                <span>{l.label}</span>
                            </a>
                        ))}
                    </div>
                </nav>
            </div>

            {/* Bottom bar */}
            <div className="footer-bottom">
                <p className="footer-copy">© {new Date().getFullYear()} Rodrigo Machaca · La Paz, Bolivia</p>
                <button
                    className="footer-back-top"
                    onClick={() => { navigate(HOME_ROUTE); scrollToTop(); }}
                    aria-label={t('footer.backTop')}
                >
                    <ArrowUp size={16} aria-hidden="true" />
                    <span>{t('footer.backTop')}</span>
                </button>
            </div>
        </footer>
    );
}
