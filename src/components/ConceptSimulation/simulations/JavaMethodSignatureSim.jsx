import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useCompactSimulationLayout from '../useCompactSimulationLayout';

function Part({ active, color, children, onActivate }) {
    return (
        <motion.button
            type="button"
            onHoverStart={onActivate}
            onFocus={onActivate}
            onClick={onActivate}
            style={{
                cursor: 'pointer',
                padding: '0.22rem 0.5rem',
                borderRadius: '6px',
                background: active ? `${color}22` : 'transparent',
                color,
                border: 'none',
                borderBottom: active ? `2px solid ${color}` : '2px solid transparent',
                font: 'inherit',
            }}
        >
            {children}
        </motion.button>
    );
}

export default function JavaMethodSignatureSim() {
    const [activePart, setActivePart] = useState('modifier');
    const isCompact = useCompactSimulationLayout();

    const signatureParts = {
        modifier: {
            label: 'Modificador de acceso',
            color: '#67e8f9',
            desc: 'Define quien puede usar el metodo. `public` lo deja visible y `static` indica que pertenece a la clase.',
        },
        returnType: {
            label: 'Tipo de retorno',
            color: '#e06c75',
            desc: 'La firma promete que el metodo devolvera un entero al terminar. Si fuera `void`, no devolveria nada.',
        },
        name: {
            label: 'Nombre del metodo',
            color: '#61afef',
            desc: 'Es la etiqueta con la que luego invocas al metodo desde otra parte del programa.',
        },
        params: {
            label: 'Parametros',
            color: '#d19a66',
            desc: 'Son los datos de entrada que el metodo necesita para poder trabajar internamente.',
        },
    };

    const current = signatureParts[activePart];

    return (
        <div
            style={{
                padding: isCompact ? '1.35rem 1rem' : '2.5rem 2rem',
                background: 'rgba(20,20,20,0.8)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center',
            }}
        >
            <h3 style={{ color: '#00d4ff', marginBottom: '0.5rem' }}>Anatomia de la Signature</h3>
            <p
                style={{
                    color: 'var(--text-grey)',
                    marginBottom: '1.5rem',
                    fontSize: isCompact ? '0.85rem' : '0.9rem',
                    maxWidth: '32rem',
                    marginInline: 'auto',
                }}
            >
                Toca o pasa el cursor sobre cada bloque del metodo para entender que papel cumple en la firma.
            </p>

            <div
                style={{
                    background: '#111',
                    padding: isCompact ? '1.3rem 0.9rem' : '2rem 1.5rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    fontFamily: 'monospace',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '0.35rem',
                        flexWrap: 'wrap',
                        fontSize: isCompact ? '0.95rem' : '1.35rem',
                        lineHeight: 1.6,
                    }}
                >
                    <Part active={activePart === 'modifier'} color={signatureParts.modifier.color} onActivate={() => setActivePart('modifier')}>
                        public static
                    </Part>
                    <Part active={activePart === 'returnType'} color={signatureParts.returnType.color} onActivate={() => setActivePart('returnType')}>
                        int
                    </Part>
                    <Part active={activePart === 'name'} color={signatureParts.name.color} onActivate={() => setActivePart('name')}>
                        sumarNumeros
                    </Part>
                    <span>(</span>
                    <Part active={activePart === 'params'} color={signatureParts.params.color} onActivate={() => setActivePart('params')}>
                        int a, int b
                    </Part>
                    <span>) {'{'}</span>
                </div>

                <div style={{ color: 'rgba(255,255,255,0.28)', fontSize: isCompact ? '0.82rem' : '1rem' }}>
                    // ... bloque de logica interna ...
                </div>
                <div style={{ color: '#fff', fontSize: isCompact ? '0.95rem' : '1.2rem' }}>{'}'}</div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activePart}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18 }}
                        style={{
                            background: 'rgba(0,0,0,0.7)',
                            padding: isCompact ? '0.9rem' : '1rem',
                            borderRadius: '8px',
                            borderLeft: `4px solid ${current.color}`,
                            textAlign: 'left',
                        }}
                    >
                        <h4 style={{ color: current.color, margin: '0 0 0.45rem', fontSize: isCompact ? '0.96rem' : '1.05rem' }}>
                            {current.label}
                        </h4>
                        <p style={{ color: '#e5e7eb', fontSize: isCompact ? '0.84rem' : '0.9rem', lineHeight: 1.55, margin: 0 }}>
                            {current.desc}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
