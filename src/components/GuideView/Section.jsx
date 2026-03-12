export default function Section({ title, desc, children, id }) {
    return (
        <section className="guide-section" id={id}>
            <h2 className="guide-section__title">{title}</h2>
            {desc && <p className="guide-section__desc">{desc}</p>}
            {children}
        </section>
    );
}
