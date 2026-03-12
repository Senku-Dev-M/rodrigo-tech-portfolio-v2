import { motion } from 'framer-motion';

export default function GithubCTA() {
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
                    <h3>Más proyectos en GitHub</h3>
                    <p>Explora mi código, contribuciones y repos públicos.</p>
                </div>
                <a
                    href="https://github.com/Senku-Dev-M"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                >
                    Ver GitHub →
                </a>
            </div>
        </motion.div>
    );
}
