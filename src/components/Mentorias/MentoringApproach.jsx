import Icon from '../Icon/Icon';

export default function MentoringApproach() {
    return (
        <section className="mentorias-section">
            <h2 className="section-heading">Mi Enfoque</h2>
            <div className="approach-card">
                <p>Me caracterizo por un acompañamiento técnico <strong>personalizado</strong>, con revisiones de código, explicaciones paso a paso y ejemplos reales.</p>
                <ul className="approach-list">
                    <li><Icon name="search" size={15} color="#00d4ff" /> Revisiones de código con feedback específico</li>
                    <li><Icon name="tool" size={15} color="#00d4ff" /> Guía en arquitectura y buenas prácticas</li>
                    <li><Icon name="book" size={15} color="#00d4ff" /> Apoyo en proyectos académicos y personales</li>
                    <li><Icon name="chat" size={15} color="#00d4ff" /> Sesiones adaptadas al nivel del estudiante</li>
                    <li><Icon name="rocket" size={15} color="#00d4ff" /> Enfoque en resultados: aprobar, aprender y crecer</li>
                </ul>
            </div>
        </section>
    );
}
