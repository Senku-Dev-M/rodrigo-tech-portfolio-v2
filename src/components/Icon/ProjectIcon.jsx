import {
    GraduationCap, Cpu, Award, Dumbbell, Image, Handshake, Code2, Terminal,
    Briefcase, Rocket, Palette, Database, Server, Globe, Shield, Zap
} from 'lucide-react';

const iconMap = {
    'graduation-cap': GraduationCap,
    'cpu': Cpu,
    'award': Award,
    'dumbbell': Dumbbell,
    'image': Image,
    'handshake': Handshake,
    'code2': Code2,
    'terminal': Terminal,
    'briefcase': Briefcase,
    'rocket': Rocket,
    'palette': Palette,
    'database': Database,
    'server': Server,
    'globe': Globe,
    'shield': Shield,
    'zap': Zap,
};

export default function ProjectIcon({ name, size = 20, className = '', ...props }) {
    const IconComponent = iconMap[name];
    if (!IconComponent) return null;
    return <IconComponent size={size} className={className} {...props} />;
}

export { iconMap };
