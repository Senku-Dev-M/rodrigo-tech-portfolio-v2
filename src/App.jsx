import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { I18nProvider } from './i18n/i18n';
import { HOME_ROUTE, MENTORING_ROUTE, PORTFOLIO_ROUTE, FORMACION_ROUTE } from './constants/routes';
import HomePage from './pages/HomePage';
import MentoriasPage from './pages/MentoriasPage';
import PortafolioPage from './pages/PortafolioPage';
import FormacionPage from './pages/FormacionPage';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

function AnimatedRoutes() {
    const location = useLocation();
    const reduceMotion = useReducedMotion();

    // Key by top-level section only, so lesson/subject navigation inside
    // Mentorías doesn't remount the whole page.
    const sectionKey = location.pathname.split('/')[1] || 'home';

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={sectionKey}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
                <Routes location={location}>
                    <Route path={HOME_ROUTE} element={<HomePage />} />
                    <Route path={MENTORING_ROUTE} element={<MentoriasPage />} />
                    <Route path={`${MENTORING_ROUTE}/:subjectId`} element={<MentoriasPage />} />
                    <Route path={`${MENTORING_ROUTE}/:subjectId/:lessonId`} element={<MentoriasPage />} />
                    <Route path={PORTFOLIO_ROUTE} element={<PortafolioPage />} />
                    <Route path={FORMACION_ROUTE} element={<FormacionPage />} />
                </Routes>
            </motion.div>
        </AnimatePresence>
    );
}

function App() {
    return (
        <I18nProvider>
            <BrowserRouter>
                <AnimatedRoutes />
                <WhatsAppButton />
            </BrowserRouter>
        </I18nProvider>
    );
}

export default App;
