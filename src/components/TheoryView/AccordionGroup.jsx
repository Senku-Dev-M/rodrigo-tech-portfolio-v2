import { ChevronDown, TriangleAlert } from 'lucide-react';

export default function AccordionGroup({ items = [] }) {
    return (
        <div className="theory-accordion-group">
            {items.map((item, index) => (
                <details key={`${item.title}-${index}`} className="theory-accordion">
                    <summary>
                        <span className="theory-accordion__number">{String(index + 1).padStart(2, '0')}</span>
                        <span className="theory-accordion__title">
                            <TriangleAlert size={17} /> {item.title}
                        </span>
                        <ChevronDown className="theory-accordion__chevron" size={18} aria-hidden="true" />
                    </summary>
                    <div className="theory-accordion__body">
                        <p>{item.problem || item.text}</p>
                        {item.solution && (
                            <div>
                                <strong>Cómo resolverlo</strong>
                                <p>{item.solution}</p>
                            </div>
                        )}
                    </div>
                </details>
            ))}
        </div>
    );
}
