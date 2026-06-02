import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nProvider } from './i18n/i18n';
import { HOME_ROUTE, MENTORING_ROUTE, PORTFOLIO_ROUTE, FORMACION_ROUTE } from './constants/routes';
import HomePage from './pages/HomePage';
import MentoriasPage from './pages/MentoriasPage';
import PortafolioPage from './pages/PortafolioPage';
import FormacionPage from './pages/FormacionPage';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<HomePage />} />
          <Route path={MENTORING_ROUTE} element={<MentoriasPage />} />
          <Route path={`${MENTORING_ROUTE}/:subjectId`} element={<MentoriasPage />} />
          <Route path={`${MENTORING_ROUTE}/:subjectId/:lessonId`} element={<MentoriasPage />} />
          <Route path={PORTFOLIO_ROUTE} element={<PortafolioPage />} />
          <Route path={FORMACION_ROUTE} element={<FormacionPage />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </I18nProvider>
  );
}

export default App;
