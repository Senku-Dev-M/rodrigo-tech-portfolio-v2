import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import StadiumBanner from '../components/StadiumBanner/StadiumBanner';
import About from '../components/About/About';
import MentoringTeaser from '../components/MentoringTeaser/MentoringTeaser';
import ContactSection from '../components/Contact/ContactSection';
import Footer from '../components/Footer/Footer';
import { useI18n } from '../i18n/i18n';

export default function HomePage() {
    const { lang } = useI18n();

    const bannerItems = lang === 'es' ? [
        <span>Full Stack Developer</span>,
        <span>Architecture &amp; Backend</span>,
        <span>Mentor de Ingeniería de Software</span>,
        <span>Estudiante Destacado ×3</span>,
        <span>Clean Architecture &amp; DevOps</span>,
        <span>Soluciones Escalables</span>
    ] : [
        <span>Full Stack Developer</span>,
        <span>Architecture &amp; Backend</span>,
        <span>Software Engineering Mentor</span>,
        <span>Outstanding Student ×3</span>,
        <span>Clean Architecture &amp; DevOps</span>,
        <span>Scalable Solutions</span>
    ];

    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <StadiumBanner
                    items={bannerItems}
                    speed={30}
                    direction="left"
                />
                <div className="home-content-wrapper">
                    <About />
                    <MentoringTeaser />
                    <ContactSection />
                </div>
            </main>
            <Footer />
        </>
    );
}
