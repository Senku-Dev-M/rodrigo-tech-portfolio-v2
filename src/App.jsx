import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nProvider } from './i18n/i18n';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import MentoriasPage from './pages/MentoriasPage';
import PortafolioPage from './pages/PortafolioPage';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mentorias" element={<MentoriasPage />} />
          <Route path="/portafolio" element={<PortafolioPage />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </I18nProvider>
  );
}

export default App;
