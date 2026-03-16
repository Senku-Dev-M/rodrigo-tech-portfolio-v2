const HEADER_VARIANTS = {
    guide: {
        header: 'guide-header',
        meta: 'guide-header__meta',
        typeBadge: 'guide-type-badge',
        difficulty: 'guide-difficulty',
        duration: 'guide-duration',
        title: 'guide-title',
        subtitle: 'guide-subtitle',
        tags: 'guide-tags',
        tag: 'guide-tag',
    },
    theory: {
        header: 'theory-header',
        meta: 'theory-header__meta',
        typeBadge: 'theory-type-badge',
        difficulty: 'theory-difficulty',
        duration: 'theory-duration',
        title: 'theory-title',
        subtitle: 'theory-subtitle',
        tags: 'theory-tags',
        tag: 'theory-tag',
    },
};

export default function ContentHeader({
    lab,
    variant = 'guide',
    difficultyStyle,
    typeBadgeClassName = '',
}) {
    const classes = HEADER_VARIANTS[variant] ?? HEADER_VARIANTS.guide;
    const typeBadgeClassNames = [classes.typeBadge, typeBadgeClassName].filter(Boolean).join(' ');

    return (
        <div className={classes.header}>
            <div className={classes.meta}>
                <span className={typeBadgeClassNames}>{lab.type}</span>
                <span className={classes.difficulty} style={difficultyStyle}>
                    {lab.difficulty}
                </span>
                <span className={classes.duration}>{lab.duration}</span>
            </div>
            <h1 className={classes.title}>{lab.title}</h1>
            {lab.subtitle && <p className={classes.subtitle}>{lab.subtitle}</p>}
            <div className={classes.tags}>
                {lab.tags?.map((tag) => (
                    <span key={tag} className={classes.tag}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}
