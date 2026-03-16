export function AnimatedMotionGroup({ begin, dur = '1.2s', path, children, opacityValues = '0;1;1;0' }) {
    return (
        <g opacity="0">
            {children}
            <animate attributeName="opacity" values={opacityValues} dur={dur} begin={begin} fill="freeze" />
            <animateMotion dur={dur} begin={begin} fill="freeze" path={path} />
        </g>
    );
}

export function FadeGroup({ begin, dur = '1.2s', children, opacityValues = '0;0;1;1;0' }) {
    return (
        <g opacity="0">
            {children}
            <animate attributeName="opacity" values={opacityValues} dur={dur} begin={begin} fill="freeze" />
        </g>
    );
}
