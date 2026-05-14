import { useEffect, useState } from 'react';
import { useI18n } from '../../i18n/i18n';
import Icon from '../Icon/Icon';
import { getSimulationConfig } from './simulationRegistry';
import './ConceptSimulation.css';

export default function ConceptSimulation({ type = 'client-server' }) {
    const { t } = useI18n();
    const [isPlaying, setIsPlaying] = useState(false);
    const [instanceKey, setInstanceKey] = useState(0);
    const {
        Component,
        duration = 4000,
        isAuto = false,
        isWide = false,
        hasInternalControls = false,
        hintKey,
        hintText,
    } = getSimulationConfig(type);
    const showControls = !isAuto && !hasInternalControls;
    const simulationIsPlaying = hasInternalControls ? true : isPlaying;
    const usesFlexibleCanvas = isAuto || hasInternalControls;

    useEffect(() => {
        if (!isAuto || hasInternalControls) {
            return undefined;
        }

        const timer = window.setTimeout(() => {
            setInstanceKey(1);
            setIsPlaying(true);
        }, 80);

        return () => window.clearTimeout(timer);
    }, [hasInternalControls, isAuto, type]);

    useEffect(() => {
        if (!isPlaying || hasInternalControls) {
            return undefined;
        }

        const timer = window.setTimeout(() => {
            setIsPlaying(false);
            setInstanceKey((value) => value + 1);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, hasInternalControls, isPlaying]);

    return (
        <div className="concept-sim">
            <div className="concept-sim__toolbar">
                <div className="concept-sim__meta">
                    <span className="concept-sim__eyebrow">{t('sim.visualGuide', 'Simulación visual')}</span>
                    <p className="concept-sim__hint">
                        {t(
                            hintKey || 'sim.visualHint',
                            hintText || 'Úsala para observar el concepto en movimiento y luego vuelve al texto para reforzar la idea.'
                        )}
                    </p>
                </div>

                {showControls && (
                    <div className="concept-sim__actions">
                        <button
                            className={`concept-sim__btn ${isPlaying ? 'concept-sim__btn--active' : ''}`}
                            onClick={() => {
                                setInstanceKey((value) => value + 1);
                                window.setTimeout(() => setIsPlaying(true), 40);
                            }}
                            disabled={isPlaying}
                        >
                            {isPlaying ? t('sim.running') : t('sim.start')}
                            {!isPlaying && <Icon name="rocket" size={16} />}
                        </button>
                    </div>
                )}
            </div>

            <div
                className={[
                    'concept-sim__canvas',
                    isWide ? 'concept-sim__canvas--wide' : '',
                    usesFlexibleCanvas ? 'concept-sim__canvas--auto' : '',
                ].filter(Boolean).join(' ')}
            >
                <Component key={instanceKey} isPlaying={simulationIsPlaying} />
            </div>
        </div>
    );
}
