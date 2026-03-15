import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useI18n } from '../../i18n/i18n';
import LangSwitch from './LangSwitch';
import './Navbar.css';

export default function Navbar() {
    const { t } = useI18n();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const navLinks = [
        { label: t('nav.about'), href: '#about', route: '/', section: '#about' },
        { label: t('nav.mentoring'), href: '/mentorias', route: '/mentorias', section: null },
        { label: t('nav.portfolio'), href: '/portafolio', route: '/portafolio', section: null },
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
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    document.querySelector(link.section)?.scrollIntoView({ behavior: 'smooth' });
                }, 200);
            } else {
                document.querySelector(link.section)?.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate(link.route);
            window.scrollTo(0, 0);
        }
    };

    const goHome = (e) => {
        e.preventDefault();
        setMenuOpen(false);
        navigate('/');
        window.scrollTo(0, 0);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-inner">
                <a href="/" className="navbar-logo" onClick={goHome}>
                    <span className="logo-bracket">&lt;</span>
                    <span className="logo-name">RM</span>
                    <span className="logo-bracket">/&gt;</span>
                </a>

                <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
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
                    >
                        <span /><span /><span />
                    </button>
                </div>
            </div>
        </nav>
    );
}
