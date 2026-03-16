export const LAB_DIFFICULTY_COLORS = {
    Inicial: '#67e8f9',
    Introductorio: '#67e8f9',
    Principiante: '#38bdf8',
    Básico: '#22d3ee',
    'Básico / Intermedio': '#0ea5e9',
    Intermedio: '#0ea5e9',
    'Intermedio Inicial': '#38bdf8',
    Avanzado: '#0369a1',
};

export const LAB_THEORY_TYPE = 'Teoría';

export function getLabTypeColor(type) {
    return type === LAB_THEORY_TYPE ? '#7dd3fc' : '#00d4ff';
}
