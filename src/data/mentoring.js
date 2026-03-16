// -------------------------------------------------------------
// Mentoring Data - modular subjects
// -------------------------------------------------------------

import desarrolloSoftwareSubject from './desarrolloSoftware.js';
import programacion1Subject from './programacion1.js';
import redesSubject from './redes.js';

const rawSubjects = [
    {
        id: 'robotica-arduino',
        code: 'ROBO-I',
        title: 'Robótica con Arduino',
        description:
            'Introducción práctica a la robótica con microcontroladores Arduino. Sensores, actuadores, circuitos electrónicos y programación embebida para construir sistemas robóticos básicos desde cero.',
        icon: 'cpu',
        color: '#22d3ee',
        topics: ['Arduino', 'Electrónica', 'Sensores', 'Actuadores', 'C++'],
        learningPath: {
            title: 'Ruta de aprendizaje sugerida',
            summary:
                'Esta materia te lleva desde reconocer la placa y sus componentes hasta programar, simular y extender un pequeño sistema embebido con Arduino.',
            estimatedDuration: '1 h – 1 h 30 min',
            outcomes: [
                'Entender qué es un microcontrolador y cómo conecta código con hardware.',
                'Construir un circuito básico con LED y resistencia sin perder de vista la función de cada componente.',
                'Relacionar `setup()`, `loop()` y el comportamiento físico observado en la simulación.',
            ],
            stages: [
                {
                    title: '1. Hardware base',
                    desc: 'Reconocer placa, pines, alimentación y componentes del laboratorio.',
                },
                {
                    title: '2. Circuito y código',
                    desc: 'Conectar el LED, leer el sketch y entender qué hace cada instrucción.',
                },
                {
                    title: '3. Simulación y extensión',
                    desc: 'Observar el flujo del programa, proponer variaciones y resolver el desafío del semáforo.',
                },
            ],
        },
        labs: [
            {
                id: 'intro-arduino',
                title: 'Laboratorio: Introducción a Robótica con Arduino',
                subtitle: 'Construye tu primer sistema robótico básico con un microcontrolador',
                type: 'Laboratorio',
                difficulty: 'Principiante',
                duration: '60–90 min',
                tags: ['Arduino', 'Robótica', 'Electrónica básica', 'Sensores', 'Actuadores', 'Microcontroladores', 'Programación embebida'],
                learningFeatures: ['Hotspots', 'Código interactivo', 'Simulación'],
                isArduinoLab: true,
            },
        ],
    },
];

export const subjects = [
    redesSubject,
    desarrolloSoftwareSubject,
    programacion1Subject,
    ...rawSubjects,
];

export default subjects;
