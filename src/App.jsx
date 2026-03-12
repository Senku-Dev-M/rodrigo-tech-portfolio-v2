import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import MentoriasPage from './pages/MentoriasPage';
import PortafolioPage from './pages/PortafolioPage';

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mentorias" element={<MentoriasPage />} />
        <Route path="/portafolio" element={<PortafolioPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
