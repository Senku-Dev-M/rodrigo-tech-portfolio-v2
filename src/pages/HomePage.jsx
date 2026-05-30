import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import StadiumBanner from '../components/StadiumBanner/StadiumBanner';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import { useI18n } from '../i18n/i18n';

export default function HomePage() {
    const { lang } = useI18n();

    const bannerItems = lang === 'es' ? [
        <span>★ Full Stack Software Developer</span>,
        <span>⚡ Architecture & Backend</span>,
        <span>★ Mentor de Ingeniería de Software</span>,
        <span>⚡ Estudiante Destacado ×3</span>,
        <span>★ Clean Architecture & DevOps</span>,
        <span>⚡ Soluciones Escalables y QR Check-in</span>
    ] : [
        <span>★ Full Stack Software Developer</span>,
        <span>⚡ Architecture & Backend</span>,
        <span>★ Software Engineering Mentor</span>,
        <span>⚡ Outstanding Student ×3</span>,
        <span>★ Clean Architecture & DevOps</span>,
        <span>⚡ Scalable Solutions & QR Check-in</span>
    ];

    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <StadiumBanner 
                    items={bannerItems} 
                    speed={26}
                    direction="left"
                    glowColor="rgba(0, 212, 255, 0.45)"
                />
                <About />
            </main>
            <Footer />
        </>
    );
}
