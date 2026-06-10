export const LAB_DIFFICULTY_COLORS = {
    Inicial: '#FF8A5C',
    Introductorio: '#FF8A5C',
    Principiante: '#FF8A5C',
    Básico: '#FF5A1F',
    'Básico / Intermedio': '#E84D14',
    Intermedio: '#E84D14',
    'Intermedio Inicial': '#FF8A5C',
    Avanzado: '#C2410C',
};

export const LAB_THEORY_TYPE = 'Teoría';

export function getLabTypeColor(type) {
    return type === LAB_THEORY_TYPE ? '#7dd3fc' : '#FF5A1F';
}
