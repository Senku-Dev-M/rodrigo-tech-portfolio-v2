import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award } from 'lucide-react';
import { EXTERNAL_LINKS } from '../../constants/externalLinks';
import { certificationEntries } from '../../data/about';
import { useI18n } from '../../i18n/i18n';

const categoryIconColors = {
    jala: '#00d4ff',
    platzi: '#10b981',
    codefacilito: '#f59e0b',
    udemy: '#a78bfa',
    salesiana: '#ec4899',
    feyalegria: '#38bdf8',
    others: '#94a3b8'
};

export default function CertificationsSection() {
    const { t } = useI18n();
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Filter categories definitions
    const categories = [
        { id: 'all', labelKey: 'about.certFilterAll' },
        { id: 'jala', labelKey: 'about.certFilterJala' },
        { id: 'platzi', labelKey: 'about.certFilterPlatzi' },
        { id: 'codefacilito', labelKey: 'about.certFilterCodeFacilito' },
        { id: 'udemy', labelKey: 'about.certFilterUdemy' },
        { id: 'salesiana', labelKey: 'about.certFilterSalesiana' },
        { id: 'feyalegria', labelKey: 'about.certFilterFeyAlegria' },
        { id: 'others', labelKey: 'about.certFilterOthers' }
    ];

    // Filter list based on selected tab
    const filteredCerts = selectedCategory === 'all' 
        ? certificationEntries 
        : certificationEntries.filter(c => c.category === selectedCategory);

    return (
        <div className="certs-section">
            <h3 className="subsection-title">{t('about.certifications')}</h3>
            
            {/* dynamic interactive filter tabs */}
            <div className="certs-filter-tabs">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`certs-filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                    >
                        {t(cat.labelKey)}
                        {selectedCategory === cat.id && (
                            <motion.span 
                                layoutId="activeTabGlow"
                                className="active-tab-glow"
                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* animated responsive grid with AnimatePresence */}
            <motion.div 
                layout 
                className="certs-grid"
            >
                <AnimatePresence mode="popLayout">
                    {filteredCerts.map((certification, index) => (
                        <motion.div
                            layout
                            key={`${certification.name}-${certification.years}`}
                            className="cert-card"
                            initial={{ opacity: 0, scale: 0.9, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: -10 }}
                            transition={{ 
                                duration: 0.35, 
                                delay: index * 0.04,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                            whileHover={{ 
                                y: -5,
                                borderColor: 'rgba(0, 212, 255, 0.4)',
                                boxShadow: '0 8px 24px rgba(0, 212, 255, 0.08)'
                            }}
                        >
                            <span className="cert-icon" style={{ 
                                color: categoryIconColors[certification.category] || '#00d4ff'
                            }}>
                                <Award size={18} />
                            </span>
                            <div>
                                <p className="cert-name">{certification.name}</p>
                                <p className="cert-meta">
                                    {certification.issuer} · {certification.years}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            <div className="certs-link-row">
                <a
                    href={EXTERNAL_LINKS.certifications}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                >
                    {t('about.viewAllCerts')}
                </a>
            </div>
        </div>
    );
}
