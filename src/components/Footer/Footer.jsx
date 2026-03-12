import { useI18n } from '../../i18n/i18n';
import { Github, Linkedin, Instagram, Mail, Award } from 'lucide-react';
import './Footer.css';

const footerLinks = [
    { labelKey: null, label: 'GitHub', href: 'https://github.com/Senku-Dev-M', icon: <Github size={18} /> },
    { labelKey: null, label: 'LinkedIn', href: 'https://www.linkedin.com/in/beimar-rodrigo-machaca-aruquipa-2052b1267/', icon: <Linkedin size={18} /> },
    { labelKey: null, label: 'Instagram', href: 'https://www.instagram.com/rodrigo_ml_1/', icon: <Instagram size={18} /> },
    { labelKey: null, label: 'Email', href: 'mailto:beimar090@gmail.com', icon: <Mail size={18} /> },
    { labelKey: 'footer.certificates', label: null, href: 'https://drive.google.com/drive/folders/1ZjpmZptWPuFE_2xwMWTj7qRChAecPDzH', icon: <Award size={18} /> },
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
