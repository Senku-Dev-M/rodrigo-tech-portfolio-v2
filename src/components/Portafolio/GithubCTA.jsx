import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { EXTERNAL_LINKS } from '../../constants/externalLinks';
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
                <span className="github-icon"><Code2 size={28} /></span>
                <div>
                    <h3>{t('portfolio.githubTitle')}</h3>
                    <p>{t('portfolio.githubDesc')}</p>
                </div>
                <div className="github-cta-actions">
                    <a
                        href={EXTERNAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-cta-button github-cta-button--primary"
                    >
                        {t('portfolio.githubCta')}
                    </a>
                    <a
                        href={EXTERNAL_LINKS.gitlab}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-cta-button github-cta-button--secondary"
                    >
                        {t('portfolio.gitlabCta')}
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
