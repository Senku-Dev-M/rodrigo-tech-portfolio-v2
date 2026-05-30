import React from 'react';
import './StadiumBanner.css';

export default function StadiumBanner({
    items = [],
    speed = 30, // seconds for full loop
    direction = 'left', // 'left' or 'right'
    className = '',
    glowColor = 'var(--led-glow-default, rgba(0, 212, 255, 0.45))'
}) {
    const scrollClass = direction === 'right' ? 'stadium-scroll-reverse' : 'stadium-scroll';
    
    // Duplicate the items to make the infinite scrolling seamless with zero gaps
    const doubleItems = [...items, ...items, ...items, ...items];

    return (
        <div 
            className={`stadium-banner-wrapper ${className}`}
            style={{ '--glow-color': glowColor }}
        >
            {/* Physics simulation overlay of an LED dot matrix grid */}
            <div className="stadium-led-matrix" />
            
            {/* High-tech glass glare overlay */}
            <div className="stadium-glass-sheen" />
            
            {/* The infinite scrolling tracks */}
            <div className="stadium-banner-track">
                <div 
                    className={`stadium-banner-content ${scrollClass}`}
                    style={{ animationDuration: `${speed}s` }}
                >
                    {doubleItems.map((item, idx) => (
                        <div key={idx} className="stadium-banner-item">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
