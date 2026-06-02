import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import EducationSection from '../components/About/EducationSection';
import CertificationsSection from '../components/About/CertificationsSection';
import GradientText from '../components/GradientText/GradientText';
import { useI18n } from '../i18n/i18n';
import { HOME_ROUTE } from '../constants/routes';
import { scrollToTop } from '../utils/scroll';
import './FormacionPage.css';

export default function FormacionPage() {
    const { t } = useI18n();
    const navigate = useNavigate();

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <>
            <Navbar />
            <main className="formacion-page">
                <div className="formacion-container">
                    {/* Header */}
                    <motion.div
                        className="formacion-header"
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <button
                            className="formacion-back"
                            onClick={() => { navigate(HOME_ROUTE); }}
                            aria-label={t('formacion.backHome')}
                        >
                            <ArrowLeft size={16} aria-hidden="true" />
                            <span>{t('formacion.backHome')}</span>
                        </button>

                        <h1 className="formacion-title">
                            <GradientText colors={['#22D3EE', '#0ea5e9', '#67e8f9', '#22D3EE']} animationSpeed={8}>
                                {t('formacion.title')}
                            </GradientText>
                        </h1>
                        <p className="formacion-subtitle">{t('formacion.subtitle')}</p>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <EducationSection />
                        <CertificationsSection />
                    </motion.div>
                </div>
            </main>
            <Footer />
        </>
    );
}
