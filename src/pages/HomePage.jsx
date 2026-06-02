import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import StadiumBanner from '../components/StadiumBanner/StadiumBanner';
import About from '../components/About/About';
import MentoringTeaser from '../components/MentoringTeaser/MentoringTeaser';
import ContactSection from '../components/Contact/ContactSection';
import Footer from '../components/Footer/Footer';
import Antigravity from '../components/Antigravity/Antigravity';
import useWindowWidthBelow from '../hooks/useWindowWidthBelow';
import { useI18n } from '../i18n/i18n';

export default function HomePage() {
    const { lang } = useI18n();
    const isMobile = useWindowWidthBelow(768);

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
                    glowColor="rgba(34, 211, 238, 0.45)"
                />
                {/* Wrapper with shared Antigravity background */}
                <div className="home-content-wrapper">
                    {!isMobile && (
                        <div className="home-antigravity">
                            <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
                                <Antigravity
                                    count={130} magnetRadius={8} ringRadius={9} waveSpeed={0.3}
                                    waveAmplitude={0.8} particleSize={0.45} lerpSpeed={0.04}
                                    color="#22D3EE" autoAnimate={true} particleVariance={0.8}
                                    rotationSpeed={0.05} depthFactor={0.6} pulseSpeed={2}
                                    particleShape="tetrahedron" fieldStrength={12}
                                />
                            </div>
                        </div>
                    )}
                    <About />
                    <MentoringTeaser />
                    <ContactSection />
                </div>
            </main>
            <Footer />
        </>
    );
}
