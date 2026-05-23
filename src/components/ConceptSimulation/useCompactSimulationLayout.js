import { useCallback, useEffect, useState } from 'react';

export default function useCompactSimulationLayout(breakpoint = 680) {
    const getIsCompact = useCallback(() => {
        if (typeof window === 'undefined') {
            return false;
        }

        return window.innerWidth <= breakpoint;
    }, [breakpoint]);

    const [isCompact, setIsCompact] = useState(getIsCompact);

    useEffect(() => {
        const update = () => setIsCompact(getIsCompact());

        update();
        window.addEventListener('resize', update);

        return () => window.removeEventListener('resize', update);
    }, [getIsCompact]);

    return isCompact;
}
