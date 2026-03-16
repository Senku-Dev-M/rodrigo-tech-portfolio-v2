import PageHero from '../components/PageShell/PageHero';
import PageLayout from '../components/PageShell/PageLayout';
import GithubCTA from '../components/Portafolio/GithubCTA';
import PortafolioProjectCard from '../components/Portafolio/PortafolioProjectCard';
import { useI18n } from '../i18n/i18n';
import { projects } from '../data/portfolio';
import './PortafolioPage.css';

export default function PortafolioPage() {
    const { t } = useI18n();

    return (
        <PageLayout mainClassName="portafolio-page">
            <PageHero
                backLabel={t('portfolio.backHome')}
                title={t('portfolio.title')}
                subtitle={t('portfolio.subtitle')}
            />

            <div className="page-container">
                <div className="projects-list">
                    {projects.map((project, index) => (
                        <PortafolioProjectCard key={project.name} project={project} index={index} />
                    ))}
                </div>

                <GithubCTA />
            </div>
        </PageLayout>
    );
}
