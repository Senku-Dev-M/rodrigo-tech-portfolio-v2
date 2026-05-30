import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GradientText from '../GradientText/GradientText';
import { PAGE_TITLE_GRADIENT } from '../../constants/page';
import { HOME_ROUTE } from '../../constants/routes';

export default function PageHero({
    backLabel,
    title,
    subtitle,
    subtitleIsHtml = false,
}) {
    return (
        <header className="page-hero">
            <motion.div
                className="page-back"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
            >
                <Link to={HOME_ROUTE} className="back-link">
                    {backLabel}
                </Link>
            </motion.div>

            <motion.h1
                className="page-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <GradientText colors={PAGE_TITLE_GRADIENT} animationSpeed={7}>
                    {title}
                </GradientText>
            </motion.h1>

            {subtitle && (subtitleIsHtml ? (
                <motion.p
                    className="page-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    dangerouslySetInnerHTML={{ __html: subtitle }}
                />
            ) : (
                <motion.p
                    className="page-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {subtitle}
                </motion.p>
            ))}
        </header>
    );
}
