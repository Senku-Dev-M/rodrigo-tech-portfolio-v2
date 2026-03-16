import { useEffect, useState } from 'react';

function getMatches(threshold) {
    if (typeof window === 'undefined') {
        return false;
    }

    return window.innerWidth < threshold;
}

export default function useWindowWidthBelow(threshold) {
    const [matches, setMatches] = useState(() => getMatches(threshold));

    useEffect(() => {
        const handleResize = () => setMatches(getMatches(threshold));

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [threshold]);

    return matches;
}
