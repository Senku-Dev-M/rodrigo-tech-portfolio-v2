import { useState } from 'react';

const TOURS = [
    {
        name: 'Feature',
        focus: 'Capacidades visibles y flujo principal',
        asks: 'Que hace el producto y que se rompe en sus funciones mas evidentes?',
        finds: ['Huecos funcionales', 'Pantallas rotas', 'Controles incoherentes'],
        color: '#67e8f9',
    },
    {
        name: 'Variable',
        focus: 'Datos, perfiles y configuraciones',
        asks: 'Que cambia cuando altero entradas, formato, rol o contexto?',
        finds: ['Validaciones debiles', 'Reglas inconsistentes', 'Errores de formato'],
        color: '#38bdf8',
    },
    {
        name: 'Transaction',
        focus: 'Secuencia completa de negocio',
        asks: 'Que sucede de punta a punta cuando el usuario completa un proceso real?',
        finds: ['Estados corruptos', 'Persistencia fallida', 'Transiciones incompletas'],
        color: '#22d3ee',
    },
    {
        name: 'Data',
        focus: 'Transformacion y persistencia',
        asks: 'Como viajan y cambian los datos entre modulos y respuestas?',
        finds: ['Calculos incorrectos', 'Desincronizacion', 'Integridad rota'],
        color: '#f59e0b',
    },
    {
        name: 'Structural',
        focus: 'Menus, modulos y rutas ocultas',
        asks: 'Que partes del sistema quedan fuera del camino feliz?',
        finds: ['Enlaces rotos', 'Modulos olvidados', 'Dependencias ocultas'],
        color: '#fb7185',
    },
];

const shell = {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 280px) minmax(0, 1fr)',
    gap: '1rem',
    alignItems: 'stretch',
};

const buttonBase = {
    width: '100%',
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'all 220ms ease',
    appearance: 'none',
    font: 'inherit',
};

export default function QATourBasedSim() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeTour = TOURS[activeIndex];

    return (
        <div style={shell}>
            <div style={{ display: 'grid', gap: '0.65rem' }}>
                {TOURS.map((tour, index) => {
                    const active = index === activeIndex;
                    return (
                        <button
                            key={tour.name}
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            aria-pressed={active}
                            style={{
                                ...buttonBase,
                                border: `1px solid ${active ? tour.color : 'rgba(255,255,255,0.1)'}`,
                                background: active ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
                                borderRadius: '14px',
                                padding: '0.85rem 0.95rem',
                                boxShadow: active ? `0 0 0 1px ${tour.color}22, 0 12px 30px ${tour.color}14` : 'none',
                                transform: active ? 'translateY(-1px)' : 'none',
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem', alignItems: 'center' }}>
                                <strong style={{ color: '#fff', fontSize: '0.98rem' }}>{tour.name} Tour</strong>
                                <span
                                    style={{
                                        padding: '0.2rem 0.55rem',
                                        borderRadius: '999px',
                                        background: active ? `${tour.color}22` : 'rgba(255,255,255,0.05)',
                                        color: active ? tour.color : 'rgba(255,255,255,0.55)',
                                        fontSize: '0.74rem',
                                        fontWeight: 700,
                                    }}
                                >
                                    {active ? 'activo' : 'espera'}
                                </span>
                            </div>
                            <p style={{ margin: '0.45rem 0 0', color: 'rgba(255,255,255,0.64)', fontSize: '0.86rem', lineHeight: 1.45 }}>
                                {tour.focus}
                            </p>
                        </button>
                    );
                })}
            </div>

            <div
                style={{
                    borderRadius: '18px',
                    border: `1px solid ${activeTour.color}44`,
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                    padding: '1.1rem',
                    minHeight: 0,
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.85rem' }}>
                    <div
                        style={{
                            width: '0.78rem',
                            height: '0.78rem',
                            borderRadius: '999px',
                            background: activeTour.color,
                            boxShadow: `0 0 18px ${activeTour.color}`,
                        }}
                    />
                    <div>
                        <div style={{ color: activeTour.color, fontSize: '0.76rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                            foco del recorrido
                        </div>
                        <div style={{ color: '#fff', fontSize: '1.08rem', fontWeight: 700 }}>
                            {activeTour.name} Tour
                        </div>
                    </div>
                </div>

                <div style={{ display: 'grid', gap: '0.9rem' }}>
                    <div style={{ borderRadius: '14px', background: 'rgba(255,255,255,0.04)', padding: '0.9rem 1rem' }}>
                        <div style={{ color: 'rgba(255,255,255,0.58)', fontSize: '0.74rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                            pregunta dominante
                        </div>
                        <p style={{ margin: '0.45rem 0 0', color: '#fff', lineHeight: 1.55 }}>{activeTour.asks}</p>
                    </div>

                    <div style={{ borderRadius: '14px', background: 'rgba(255,255,255,0.04)', padding: '0.9rem 1rem' }}>
                        <div style={{ color: 'rgba(255,255,255,0.58)', fontSize: '0.74rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                            hallazgos tipicos
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem', marginTop: '0.65rem' }}>
                            {activeTour.finds.map((item) => (
                                <span
                                    key={item}
                                    style={{
                                        padding: '0.45rem 0.65rem',
                                        borderRadius: '999px',
                                        background: `${activeTour.color}16`,
                                        border: `1px solid ${activeTour.color}33`,
                                        color: '#fff',
                                        fontSize: '0.82rem',
                                    }}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
