import { motion } from 'framer-motion';
import { useI18n } from '../../i18n/i18n';

export default function GithubCTA() {
    const { t } = useI18n();

    return (
        <motion.div
            className="github-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
        >
            <div className="github-cta-inner">
                <span className="github-icon">⌨</span>
                <div>
                    <h3>{t('portfolio.githubTitle')}</h3>
                    <p>{t('portfolio.githubDesc')}</p>
                </div>
                <a
                    href="https://github.com/Senku-Dev-M"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                >
                    {t('portfolio.githubCta')}
                </a>
            </div>
        </motion.div>
    );
}
