import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MessageSquare, Github, Linkedin, Send, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { useI18n } from '../../i18n/i18n';
import { EXTERNAL_LINKS } from '../../constants/externalLinks';
import './ContactSection.css';

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }),
};

export default function ContactSection() {
    const { t } = useI18n();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        const subject = encodeURIComponent(`Contacto desde portafolio — ${form.name}`);
        const body = encodeURIComponent(
            `Nombre: ${form.name}\nEmail: ${form.email}\n\nMensaje:\n${form.message}`
        );

        setTimeout(() => {
            window.location.href = `${EXTERNAL_LINKS.email}?subject=${subject}&body=${body}`;
            setStatus('success');
            setForm({ name: '', email: '', message: '' });
        }, 600);
    };

    const available = [
        t('contact.available1'),
        t('contact.available2'),
        t('contact.available3'),
    ];

    return (
        <section id="contact" className="contact-section" ref={ref}>
            <div className="contact-container">
                {/* Left column — info */}
                <motion.div
                    className="contact-info"
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    custom={0}
                >
                    <span className="contact-tag">{t('nav.contact')}</span>
                    <h2 className="contact-title">{t('contact.title')}</h2>
                    <p className="contact-subtitle">{t('contact.subtitle')}</p>

                    <div className="contact-available">
                        <span className="available-label">{t('contact.availableLabel')}</span>
                        <ul className="available-list">
                            {available.map((item, i) => (
                                <li key={i} className="available-item">
                                    <span className="available-dot" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="contact-response">
                        <Clock size={14} aria-hidden="true" />
                        <span>{t('contact.responseTime')}</span>
                    </div>

                    <div className="contact-direct-links">
                        <a href={EXTERNAL_LINKS.email} className="contact-link" aria-label="Enviar email">
                            <Mail size={18} aria-hidden="true" />
                            <span>beimar090@gmail.com</span>
                        </a>
                        <a href={EXTERNAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="LinkedIn">
                            <Linkedin size={18} aria-hidden="true" />
                            <span>LinkedIn</span>
                        </a>
                        <a href={EXTERNAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="GitHub">
                            <Github size={18} aria-hidden="true" />
                            <span>GitHub</span>
                        </a>
                    </div>
                </motion.div>

                {/* Right column — form */}
                <motion.div
                    className="contact-form-wrapper"
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    custom={1}
                >
                    {status === 'success' ? (
                        <div className="contact-success" role="alert">
                            <CheckCircle size={40} className="success-icon" aria-hidden="true" />
                            <h3>{t('contact.successTitle')}</h3>
                            <p>{t('contact.successDesc')}</p>
                            <button className="btn-contact-reset" onClick={() => setStatus('idle')}>
                                <MessageSquare size={16} aria-hidden="true" />
                                {t('contact.send')}
                            </button>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit} noValidate>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="contact-name" className="form-label">
                                        {t('contact.namePlaceholder')}
                                    </label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        name="name"
                                        className="form-input"
                                        placeholder={t('contact.namePlaceholder')}
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        autoComplete="name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact-email" className="form-label">
                                        {t('contact.emailPlaceholder')}
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        name="email"
                                        className="form-input"
                                        placeholder={t('contact.emailPlaceholder')}
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        autoComplete="email"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="contact-message" className="form-label">
                                    {t('contact.messagePlaceholder')}
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    className="form-textarea"
                                    placeholder={t('contact.messagePlaceholder')}
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                />
                            </div>

                            {status === 'error' && (
                                <div className="form-error" role="alert">
                                    <AlertCircle size={16} aria-hidden="true" />
                                    <span>{t('contact.errorDesc')}</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                className="btn-contact-submit"
                                disabled={status === 'sending'}
                                aria-busy={status === 'sending'}
                            >
                                {status === 'sending' ? (
                                    <>
                                        <span className="btn-spinner" aria-hidden="true" />
                                        {t('contact.sending')}
                                    </>
                                ) : (
                                    <>
                                        <Send size={16} aria-hidden="true" />
                                        {t('contact.send')}
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
