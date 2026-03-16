import { useEffect, useState } from 'react';
import { useI18n } from '../../i18n/i18n';
import Icon from '../Icon/Icon';
import { getSimulationConfig } from './simulationRegistry';
import './ConceptSimulation.css';

export default function ConceptSimulation({ type = 'client-server' }) {
    const { t } = useI18n();
    const [isPlaying, setIsPlaying] = useState(false);
    const [instanceKey, setInstanceKey] = useState(0);
    const { Component, duration = 4000, isAuto = false, isWide = false } = getSimulationConfig(type);
    const showControls = !isAuto;

    useEffect(() => {
        if (!isPlaying || !showControls) {
            return undefined;
        }

        const timer = setTimeout(() => setIsPlaying(false), duration);
        return () => clearTimeout(timer);
    }, [duration, isPlaying, showControls]);

    return (
        <div className="concept-sim">
            <div className="concept-sim__toolbar">
                <div className="concept-sim__meta">
                    <span className="concept-sim__eyebrow">{t('sim.visualGuide', 'Simulación visual')}</span>
                    <p className="concept-sim__hint">
                        {t(
                            'sim.visualHint',
                            'Úsala para observar el concepto en movimiento y luego vuelve al texto para reforzar la idea.'
                        )}
                    </p>
                </div>

                <div className="concept-sim__actions">
                    {showControls && (
                        <button
                            className={`concept-sim__btn ${isPlaying ? 'concept-sim__btn--active' : ''}`}
                            onClick={() => setIsPlaying(true)}
                            disabled={isPlaying}
                        >
                            {isPlaying ? t('sim.running') : t('sim.start')}
                            {!isPlaying && <Icon name="rocket" size={16} />}
                        </button>
                    )}

                    <button
                        className="concept-sim__btn concept-sim__btn--ghost"
                        onClick={() => {
                            setIsPlaying(false);
                            setInstanceKey((value) => value + 1);
                        }}
                    >
                        {t('sim.restart', 'Repetir')}
                        <Icon name="refresh-cw" size={16} />
                    </button>
                </div>
            </div>

            <div
                className={[
                    'concept-sim__canvas',
                    isWide ? 'concept-sim__canvas--wide' : '',
                    isAuto ? 'concept-sim__canvas--auto' : '',
                ].filter(Boolean).join(' ')}
            >
                <Component key={instanceKey} isPlaying={isPlaying} />
            </div>
        </div>
    );
}
