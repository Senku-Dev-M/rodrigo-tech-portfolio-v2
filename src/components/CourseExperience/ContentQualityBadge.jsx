import { AlertTriangle, CheckCircle2, ClipboardCheck } from 'lucide-react';
import './CourseExperience.css';

const LABELS = {
    strong: {
        text: 'Contenido completo',
        icon: CheckCircle2,
    },
    partial: {
        text: 'Completar ficha',
        icon: ClipboardCheck,
    },
    warning: {
        text: 'Revisar texto',
        icon: AlertTriangle,
    },
};

export default function ContentQualityBadge({ quality }) {
    const status = quality?.status || 'partial';
    const config = LABELS[status] || LABELS.partial;
    const Icon = config.icon;

    return (
        <span className={`quality-badge quality-badge--${status}`} title={quality?.hasTextIssue ? 'Hay caracteres o texto que conviene revisar.' : undefined}>
            <Icon size={14} />
            {config.text}
        </span>
    );
}
