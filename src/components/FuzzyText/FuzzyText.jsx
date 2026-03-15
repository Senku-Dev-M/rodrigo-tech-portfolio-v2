import React, { useEffect, useRef } from 'react';

const FuzzyText = ({
    children,
    fontSize = 'clamp(2rem, 10vw, 10rem)',
    fontWeight = 900,
    fontFamily = 'inherit',
    color = '#fff',
    enableHover = true,
    baseIntensity = 0.18,
    hoverIntensity = 0.5,
    fuzzRange = 30,
    fps = 60,
    direction = 'horizontal',
    transitionDuration = 0,
    clickEffect = false,
    glitchMode = false,
    glitchInterval = 2000,
    glitchDuration = 200,
    gradient = null,
    letterSpacing = 0,
    className = ''
}) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        let animationFrameId;
        let isCancelled = false;
        let glitchTimeoutId;
        let glitchEndTimeoutId;
        let clickTimeoutId;
        let isIntersecting = true;
        const canvas = canvasRef.current;
        if (!canvas) return;

        const init = async () => {
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            const computedFontFamily =
                fontFamily === 'inherit'
                    ? window.getComputedStyle(canvas).fontFamily || 'sans-serif'
                    : fontFamily;

            const fontSizeStr = typeof fontSize === 'number' ? `${fontSize}px` : fontSize;
            const fontString = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;

            try {
                await document.fonts.load(fontString);
            } catch {
                await document.fonts.ready;
            }
            if (isCancelled) return;

            let numericFontSize;
            if (typeof fontSize === 'number') {
                numericFontSize = fontSize;
            } else {
                const temp = document.createElement('span');
                temp.style.fontSize = fontSize;
                document.body.appendChild(temp);
                numericFontSize = parseFloat(window.getComputedStyle(temp).fontSize);
                document.body.removeChild(temp);
            }

            const text = React.Children.toArray(children).join('');

            const offscreen = document.createElement('canvas');
            const offCtx = offscreen.getContext('2d');
            if (!offCtx) return;

            offCtx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;
            offCtx.textBaseline = 'alphabetic';

            let totalWidth = 0;
            if (letterSpacing !== 0) {
                for (const char of text) {
                    totalWidth += offCtx.measureText(char).width + letterSpacing;
                }
                totalWidth -= letterSpacing;
            } else {
                totalWidth = offCtx.measureText(text).width;
            }

            const metrics = offCtx.measureText(text);
            const actualLeft = metrics.actualBoundingBoxLeft ?? 0;
            const actualRight =
                letterSpacing !== 0 ? totalWidth : metrics.actualBoundingBoxRight ?? metrics.width;
            const actualAscent = metrics.actualBoundingBoxAscent ?? numericFontSize;
            const actualDescent = metrics.actualBoundingBoxDescent ?? numericFontSize * 0.2;

            const textBoundingWidth = Math.ceil(
                letterSpacing !== 0 ? totalWidth : actualLeft + actualRight
            );
            const tightHeight = Math.ceil(actualAscent + actualDescent);

            const extraWidthBuffer = 10;
            const offscreenWidth = textBoundingWidth + extraWidthBuffer;

            offscreen.width = offscreenWidth;
            offscreen.height = tightHeight;

            const xOffset = extraWidthBuffer / 2;
            offCtx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;
            offCtx.textBaseline = 'alphabetic';

            if (gradient && Array.isArray(gradient) && gradient.length >= 2) {
                const grad = offCtx.createLinearGradient(0, 0, offscreenWidth, 0);
                gradient.forEach((c, i) => grad.addColorStop(i / (gradient.length - 1), c));
                offCtx.fillStyle = grad;
            } else {
                offCtx.fillStyle = color;
            }

            if (letterSpacing !== 0) {
                let xPos = xOffset;
                for (const char of text) {
                    offCtx.fillText(char, xPos, actualAscent);
                    xPos += offCtx.measureText(char).width + letterSpacing;
                }
            } else {
                offCtx.fillText(text, xOffset - actualLeft, actualAscent);
            }

            const horizontalMargin = fuzzRange + 20;
            canvas.width = offscreenWidth + horizontalMargin * 2;
            canvas.height = tightHeight;
            ctx.translate(horizontalMargin, 0);

            const interactiveLeft = horizontalMargin + xOffset;
            const interactiveTop = 0;
            const interactiveRight = interactiveLeft + textBoundingWidth;
            const interactiveBottom = tightHeight;

            let isHovering = false;
            let isClicking = false;
            let isGlitching = false;
            let currentIntensity = baseIntensity;
            let targetIntensity = baseIntensity;
            let lastFrameTime = 0;
            const frameDuration = 1000 / fps;

            const startGlitchLoop = () => {
                if (!glitchMode || isCancelled) return;
                glitchTimeoutId = setTimeout(() => {
                    if (isCancelled) return;
                    isGlitching = true;
                    glitchEndTimeoutId = setTimeout(() => {
                        isGlitching = false;
                        startGlitchLoop();
                    }, glitchDuration);
                }, glitchInterval);
            };

            if (glitchMode) startGlitchLoop();

            const run = timestamp => {
                if (isCancelled) return;
                if (!isIntersecting) {
                    animationFrameId = window.requestAnimationFrame(run);
                    return;
                }
                
                if (timestamp - lastFrameTime < frameDuration) {
                    animationFrameId = window.requestAnimationFrame(run);
                    return;
                }
                lastFrameTime = timestamp;

                ctx.clearRect(
                    -fuzzRange - 20, -fuzzRange - 10,
                    offscreenWidth + 2 * (fuzzRange + 20), tightHeight + 2 * (fuzzRange + 10)
                );

                if (isClicking) targetIntensity = 1;
                else if (isGlitching) targetIntensity = 1;
                else if (isHovering) targetIntensity = hoverIntensity;
                else targetIntensity = baseIntensity;

                if (transitionDuration > 0) {
                    const step = 1 / (transitionDuration / frameDuration);
                    currentIntensity = currentIntensity < targetIntensity
                        ? Math.min(currentIntensity + step, targetIntensity)
                        : Math.max(currentIntensity - step, targetIntensity);
                } else {
                    currentIntensity = targetIntensity;
                }

                if (currentIntensity < 0.001) {
                    // Fast path for when no fuzz is applied
                    ctx.drawImage(offscreen, 0, 0);
                } else {
                    // Handle mobile performance - step by 2 on small screens if needed, but for now just single rows
                    const stepSize = window.innerWidth < 768 ? 2 : 1;
                    for (let j = 0; j < tightHeight; j += stepSize) {
                        const dx = Math.floor(currentIntensity * (Math.random() - 0.5) * fuzzRange);
                        ctx.drawImage(offscreen, 0, j, offscreenWidth, stepSize, dx, j, offscreenWidth, stepSize);
                    }
                }

                animationFrameId = window.requestAnimationFrame(run);
            };

            animationFrameId = window.requestAnimationFrame(run);

            const isInsideTextArea = (x, y) =>
                x >= interactiveLeft && x <= interactiveRight &&
                y >= interactiveTop && y <= interactiveBottom;

            const handleMouseMove = e => {
                if (!enableHover) return;
                const rect = canvas.getBoundingClientRect();
                isHovering = isInsideTextArea(e.clientX - rect.left, e.clientY - rect.top);
            };
            const handleMouseLeave = () => { isHovering = false; };
            const handleClick = () => {
                if (!clickEffect) return;
                isClicking = true;
                clearTimeout(clickTimeoutId);
                clickTimeoutId = setTimeout(() => { isClicking = false; }, 150);
            };

            if (enableHover) {
                canvas.addEventListener('mousemove', handleMouseMove);
                canvas.addEventListener('mouseleave', handleMouseLeave);
            }
            if (clickEffect) canvas.addEventListener('click', handleClick);

            canvas.cleanupFuzzyText = () => {
                window.cancelAnimationFrame(animationFrameId);
                clearTimeout(glitchTimeoutId);
                clearTimeout(glitchEndTimeoutId);
                clearTimeout(clickTimeoutId);
                if (enableHover) {
                    canvas.removeEventListener('mousemove', handleMouseMove);
                    canvas.removeEventListener('mouseleave', handleMouseLeave);
                }
                if (clickEffect) canvas.removeEventListener('click', handleClick);
            };

            const observer = new IntersectionObserver((entries) => {
                isIntersecting = entries[0].isIntersecting;
            }, { rootMargin: '50px' });
            observer.observe(canvas);
            
            canvas.cleanupObserver = () => observer.disconnect();
        };

        init();

        return () => {
            isCancelled = true;
            window.cancelAnimationFrame(animationFrameId);
            clearTimeout(glitchTimeoutId);
            clearTimeout(glitchEndTimeoutId);
            clearTimeout(clickTimeoutId);
            if (canvas && canvas.cleanupFuzzyText) canvas.cleanupFuzzyText();
            if (canvas && canvas.cleanupObserver) canvas.cleanupObserver();
        };
    }, [
        children, fontSize, fontWeight, fontFamily, color,
        enableHover, baseIntensity, hoverIntensity, fuzzRange,
        fps, direction, transitionDuration, clickEffect,
        glitchMode, glitchInterval, glitchDuration, gradient, letterSpacing
    ]);

    return <canvas ref={canvasRef} className={className} />;
};

export default FuzzyText;
