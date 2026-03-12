import './Footer.css';

const footerLinks = [
    { label: 'GitHub', href: 'https://github.com/Senku-Dev-M' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/beimar-rodrigo-machaca-aruquipa-2052b1267/' },
    { label: 'Instagram', href: 'https://www.instagram.com/rodrigo_ml_1/' },
    { label: 'Email', href: 'mailto:beimar090@gmail.com' },
    { label: 'Certificados', href: 'https://drive.google.com/drive/folders/1ZjpmZptWPuFE_2xwMWTj7qRChAecPDzH' },
];

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <span className="footer-logo">
                    <span className="logo-bracket">&lt;</span>
                    <span className="logo-name">RM</span>
                    <span className="logo-bracket">/&gt;</span>
                </span>

                <nav className="footer-links">
                    {footerLinks.map(l => (
                        <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
                            {l.label}
                        </a>
                    ))}
                </nav>

                <p className="footer-copy">© {new Date().getFullYear()} Rodrigo Machaca</p>
            </div>
        </footer>
    );
}
