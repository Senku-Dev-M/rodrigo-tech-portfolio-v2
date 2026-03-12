import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button after a short delay so it doesn't distract on initial load
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    const phoneNumber = '59176234058';
    const message = 'Hola, me gustaría contactarme contigo.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="Contactar por WhatsApp"
                    aria-label="Contactar por WhatsApp"
                >
                    {/* Ring pulse animation */}
                    <div className="whatsapp-pulse"></div>
                    <MessageCircle size={28} className="whatsapp-icon" />
                </motion.a>
            )}
        </AnimatePresence>
    );
}
