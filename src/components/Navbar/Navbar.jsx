import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useI18n } from '../../i18n/i18n';
import { HOME_ROUTE, MENTORING_ROUTE, PORTFOLIO_ROUTE, FORMACION_ROUTE } from '../../constants/routes';
import { scrollToSelector, scrollToTop } from '../../utils/scroll';
import LangSwitch from './LangSwitch';
import './Navbar.css';

export default function Navbar() {
    const { t } = useI18n();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const navLinks = [
        { label: t('nav.about'), href: '#about', route: HOME_ROUTE, section: '#about' },
        { label: t('nav.mentoring'), href: MENTORING_ROUTE, route: MENTORING_ROUTE, section: null },
        { label: t('nav.portfolio'), href: PORTFOLIO_ROUTE, route: PORTFOLIO_ROUTE, section: null },
        { label: t('nav.formacion'), href: FORMACION_ROUTE, route: FORMACION_ROUTE, section: null },
        { label: t('nav.contact'), href: '#contact', route: HOME_ROUTE, section: '#contact' },
    ];

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    const handleNav = (e, link) => {
        e.preventDefault();
        setMenuOpen(false);

        if (link.section) {
            if (location.pathname !== HOME_ROUTE) {
                navigate(HOME_ROUTE);
                setTimeout(() => {
                    scrollToSelector(link.section);
                }, 200);
            } else {
                scrollToSelector(link.section);
            }
        } else {
            navigate(link.route);
            scrollToTop();
        }
    };

    const goHome = (e) => {
        e.preventDefault();
        setMenuOpen(false);
        navigate(HOME_ROUTE);
        scrollToTop();
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-inner">
                <a href={HOME_ROUTE} className="navbar-logo" onClick={goHome}>
                    <span className="logo-bracket">&lt;</span>
                    <span className="logo-name">RM</span>
                    <span className="logo-bracket">/&gt;</span>
                </a>

                <ul id="navbar-menu" className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={e => handleNav(e, link)}
                                className={location.pathname === link.route && !link.section ? 'active' : ''}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}

                    <li className="navbar-lang-item">
                        <LangSwitch />
                    </li>
                </ul>

                <div className="navbar-right-group">
                    <LangSwitch />
                    <button
                        className={`hamburger ${menuOpen ? 'active' : ''}`}
                        onClick={() => setMenuOpen(v => !v)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                        aria-controls="navbar-menu"
                    >
                        <span /><span /><span />
                    </button>
                </div>
            </div>
        </nav>
    );
}
