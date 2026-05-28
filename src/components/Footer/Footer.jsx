import { useI18n } from '../../i18n/i18n';
import { Github, Gitlab, Linkedin, Instagram, Mail, Award } from 'lucide-react';
import { EXTERNAL_LINKS } from '../../constants/externalLinks';
import './Footer.css';

const footerLinks = [
    { labelKey: null, label: 'GitHub', href: EXTERNAL_LINKS.github, icon: <Github size={18} /> },
    { labelKey: null, label: 'GitLab', href: EXTERNAL_LINKS.gitlab, icon: <Gitlab size={18} /> },
    { labelKey: null, label: 'LinkedIn', href: EXTERNAL_LINKS.linkedin, icon: <Linkedin size={18} /> },
    { labelKey: null, label: 'Instagram', href: EXTERNAL_LINKS.instagram, icon: <Instagram size={18} /> },
    { labelKey: null, label: 'Email', href: EXTERNAL_LINKS.email, icon: <Mail size={18} /> },
    { labelKey: 'footer.certificates', label: null, href: EXTERNAL_LINKS.certifications, icon: <Award size={18} /> },
];

export default function Footer() {
    const { t } = useI18n();

    return (
        <footer className="footer">
            <div className="footer-inner">
                <span className="footer-logo">
                    <span className="logo-bracket">&lt;</span>
                    <span className="logo-name">RM</span>
                    <span className="logo-bracket">/&gt;</span>
                </span>

                <nav className="footer-links">
                    {footerLinks.map((l, i) => (
                        <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" className="footer-link-item">
                            {l.icon}
                            <span>{l.labelKey ? t(l.labelKey) : l.label}</span>
                        </a>
                    ))}
                </nav>

                <p className="footer-copy">© {new Date().getFullYear()} Rodrigo Machaca</p>
            </div>
        </footer>
    );
}
