import React from 'react';
import './StadiumBanner.css';

export default function StadiumBanner({
    items = [],
    speed = 30, // seconds for full loop
    direction = 'left', // 'left' or 'right'
    className = '',
}) {
    const scrollClass = direction === 'right' ? 'stadium-scroll-reverse' : 'stadium-scroll';

    // Duplicate the items to make the infinite scrolling seamless with zero gaps
    const doubleItems = [...items, ...items, ...items, ...items];

    return (
        <div className={`stadium-banner-wrapper ${className}`}>
            <div className="stadium-banner-track">
                <div
                    className={`stadium-banner-content ${scrollClass}`}
                    style={{ animationDuration: `${speed}s` }}
                >
                    {doubleItems.map((item, idx) => (
                        <div key={idx} className="stadium-banner-item">
                            <span className="stadium-sep" aria-hidden="true">●</span>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
