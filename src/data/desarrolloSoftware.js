const desarrolloSoftwareSubject = 
    {
        id: 'desarrollo-software',
        code: 'DEV-SOFT',
        title: 'Desarrollo de Software',
        description:
            'Fundamentos del desarrollo de software, metodologías, ciclo de vida del software, arquitectura de sistemas y buenas prácticas de ingeniería.',
        icon: 'code',
        color: '#38bdf8',
        topics: ['Software Engineering', 'SDLC', 'Programming', 'Software Design'],
        learningPath: {
            title: 'Ruta de aprendizaje sugerida',
            summary:
                'Esta materia conecta proceso, colaboración y entrega: primero entiendes cómo nace un producto de software, luego cómo se controla el cambio y finalmente cómo trabajan los equipos ágiles para moverlo.',
            estimatedDuration: '1 h 5 min – 1 h 35 min',
            outcomes: [
                'Entender el SDLC como un marco de ingeniería y no solo como una lista de fases.',
                'Dominar el flujo esencial de Git para trabajo individual y colaborativo.',
                'Reconocer roles, eventos y artefactos Scrum con criterio práctico.',
            ],
            stages: [
                {
                    title: '1. Ciclo de vida',
                    desc: 'Comprender cómo planificación, análisis, diseño, implementación, pruebas, despliegue y mantenimiento se conectan.',
                },
                {
                    title: '2. Control del cambio',
                    desc: 'Aprender Git como herramienta concreta para versionar, inspeccionar, ramificar y sincronizar trabajo.',
                },
                {
                    title: '3. Trabajo ágil',
                    desc: 'Entender Scrum como un sistema de coordinación, feedback y mejora continua en equipos reales.',
                },
            ],
        },
        labs: [
            {
                id: 'intro-sdlc',
                title: 'Introducción al SDLC — Software Development Life Cycle',
                subtitle: 'El proceso detrás de la creación de software profesional',
                type: 'Teoría',
                difficulty: 'Introductorio',
                duration: '15–20 min',
                tags: ['Software Engineering', 'SDLC', 'Programming', 'Software Design'],
                learningFeatures: ['Simulación', 'Resumen', 'Ejercicio'],
                content: {
                    intro: 'El desarrollo de software profesional no se trata solo de escribir código, sino de resolver problemas complejos mediante un proceso estructurado y repetible. A medida que los sistemas crecen en complejidad, realizar cambios sin planificación se vuelve propenso a errores y muy costoso. Para crear software robusto, mantenible y escalable, la industria de la ingeniería de software utiliza el Ciclo de Vida del Desarrollo de Software (SDLC).',
                    objectives: [
                        'Comprender qué es el SDLC y por qué existe como marco de ingeniería.',
                        'Reconocer las fases clásicas del ciclo y el rol que cumple cada una.',
                        'Comparar enfoques secuenciales e iterativos sin caricaturizarlos.',
                        'Relacionar el ciclo de vida con un producto real de software.',
                    ],
                    sections: [
                        {
                            type: 'calloutGroup',
                            title: 'Antes de entrar en fases',
                            variant: 'info',
                            items: [
                                {
                                    icon: 'target',
                                    title: 'Idea clave',
                                    text: 'SDLC no es burocracia por sí misma: es una forma de reducir incertidumbre cuando construir software deja de ser una tarea individual.',
                                },
                                {
                                    icon: 'box',
                                    title: 'Analogía simple',
                                    text: 'Construir software complejo sin ciclo de vida se parece a construir un edificio empezando por colocar ventanas sin planos, materiales ni inspecciones.',
                                },
                                {
                                    icon: 'activity',
                                    title: 'Qué debes observar',
                                    text: 'Cada fase responde una pregunta distinta: <strong>¿vale la pena?</strong>, <strong>¿qué necesita?</strong>, <strong>¿cómo se construye?</strong>, <strong>¿funciona?</strong>.',
                                },
                            ],
                        },
                        {
                            type: 'text',
                            title: '¿Qué es el SDLC?',
                            content: 'El <strong>Software Development Life Cycle (SDLC)</strong> es un marco estructurado que guía a los equipos de ingeniería a través de todas las fases necesarias para construir y mantener software de alta calidad. Define tareas, responsabilidades y entregables desde la concepción de una idea hasta el retiro final del sistema.\n\nContar con un proceso SDLC estructurado permite:\n⬢ Mejorar la calidad final del software construido.\n⬢ Reducir y anticipar errores técnicos o de diseño antes de que lleguen a producción.\n⬢ Organizar efectivamente el trabajo de equipos multidisciplinarios (devs, QA, producto, ops).\n⬢ Gestionar de forma predecible el tiempo, costo y alcance de los proyectos.',
                        },
                        {
                            type: 'process',
                            title: 'Fases del Ciclo de Vida del Software',
                            desc: 'Aunque existen diferentes metodologías, el ciclo de vida moderno generalmente se divide en 7 fases fundamentales interconectadas:',
                            simType: 'sdlc',
                            observe: [
                                'Las fases no son departamentos aislados: una decisión temprana mala encarece todo lo que viene después.',
                                'Mantenimiento no es un extra; suele ser la fase más larga del producto.',
                                'Agile no elimina estas preguntas, solo cambia cómo se recorren.',
                            ],
                            steps: [
                                {
                                    name: '1. Planificación',
                                    sender: 'Project Managers',
                                    action: 'Se define el alcance del proyecto, costos, viabilidad técnica, riesgos y el equipo necesario. Es la fase más estratégica del ciclo.',
                                },
                                {
                                    name: '2. Análisis de Requerimientos',
                                    sender: 'Analistas / Product Owners',
                                    action: 'Se recopila y documenta exactamente qué tiene que hacer el software, respondiendo a las necesidades del cliente y del negocio.',
                                },
                                {
                                    name: '3. Diseño del Sistema',
                                    sender: 'Arquitectos / Diseñadores',
                                    action: 'Se toman los requerimientos y se define la arquitectura de software, bases de datos e interfaces de usuario antes de escribir una sola línea de código.',
                                },
                                {
                                    name: '4. Implementación',
                                    sender: 'Desarrolladores',
                                    action: 'Los ingenieros escriben el código fuente real, traduciendo los diseños técnicos a un producto funcional organizado en módulos y componentes.',
                                },
                                {
                                    name: '5. Pruebas',
                                    sender: 'Ingenieros QA',
                                    action: 'Se detectan bugs y se verifica que el software cumpla estrictamente con los requerimientos definidos en el Análisis. Incluye pruebas unitarias, de integración y de aceptación.',
                                },
                                {
                                    name: '6. Despliegue',
                                    sender: 'DevOps / SysAdmins',
                                    action: 'El software empaquetado y probado se lanza a los entornos de producción donde los usuarios reales podrán utilizarlo por primera vez.',
                                },
                                {
                                    name: '7. Mantenimiento',
                                    sender: 'Soporte / Desarrolladores',
                                    action: 'La fase más larga de todas. Se resuelven problemas reportados por usuarios, se actualiza la seguridad y se añaden nuevas mejoras.',
                                },
                            ],
                        },
                        {
                            type: 'models',
                            title: 'Modelos Populares de SDLC',
                            models: [
                                {
                                    title: 'Modelo Waterfall (Cascada)',
                                    whatIs: 'Un enfoque lineal y secuencial donde cada fase depende por completo de los entregables de la fase anterior. Es el modelo más clásico de la ingeniería de software.',
                                    howWorks: 'No se puede avanzar a la fase de Diseño si la fase de Análisis no ha terminado al 100%. Los cambios tardíos son difíciles y muy costosos de implementar.',
                                    examples: [
                                        'Sistemas de misión crítica (Aeroespacial, Salud)',
                                        'Proyectos gubernamentales',
                                        'Sistemas con requerimientos 100% inmutables',
                                    ],
                                    pros: [
                                        'Fácil de entender y gestionar para equipos grandes.',
                                        'Todos los requerimientos se conocen y documentan desde el inicio.',
                                        'Documentación exhaustiva en cada etapa.',
                                    ],
                                    cons: [
                                        'Poca o nula flexibilidad para cambios una vez iniciado.',
                                        'El cliente no ve el producto real hasta el final del ciclo.',
                                        'Alto riesgo de que el producto final resulte irrelevante.',
                                    ],
                                },
                                {
                                    title: 'Modelo Agile',
                                    whatIs: 'Un enfoque iterativo e incremental donde el software se desarrolla y entrega en pequeños incrementos funcionales llamados Sprints.',
                                    howWorks: 'En lugar de planificar años de producto de una vez, el equipo trabaja en iteraciones cortas de 2 a 4 semanas. Al final de cada Sprint, se le entrega al cliente una pieza funcional de software para recibir feedback continuo.',
                                    examples: [
                                        'Startups tecnológicas',
                                        'Sistemas web modernos (Netflix, Spotify, etc.)',
                                        'Lanzamiento continuo de software SaaS',
                                    ],
                                    pros: [
                                        'Altísima capacidad de adaptación a cambios rápidos del negocio.',
                                        'Entrega temprana y continua de valor al cliente.',
                                        'Colaboración muy estrecha entre devs y clientes.',
                                    ],
                                    cons: [
                                        'Difícil predecir alcance y presupuesto exactos al inicio.',
                                        'Requiere mucha disciplina técnica y comunicativa.',
                                        'La documentación puede pasar a segundo plano.',
                                    ],
                                },
                            ],
                        },
                        {
                            type: 'proscons',
                            title: 'Ventajas de implementar un SDLC formal',
                            pros: [
                                'Establece un lenguaje y marco común de trabajo entre todos los ingenieros del equipo.',
                                'Permite escalar equipos y añadir nuevos desarrolladores rápidamente con documentación clara.',
                                'Reduce drásticamente la probabilidad de fallos catastróficos en producción.',
                                'Transforma el desarrollo de un arte empírico a un proceso predecible de ingeniería.',
                            ],
                            cons: [
                                'Puede añadir carga burocrática e inicial a proyectos muy pequeños.',
                                'Si se elige el modelo equivocado (ej. Cascada para una web dinámica), puede estancar al equipo.',
                                'Requiere un equipo educado en las metodologías y disciplinas correspondientes.',
                            ],
                        },
                        {
                            type: 'text',
                            title: 'Ejemplo Práctico',
                            content: 'Imagina que se quiere crear una <strong>Aplicación Web de E-commerce</strong>. En <strong>Planificación</strong> se definiría si es técnica y financieramente viable. En <strong>Análisis</strong>, se decidiría que necesita login, carrito y pasarela de pagos. En <strong>Diseño</strong>, se dibujarían las pantallas en Figma y se elegiría React con una base de datos Postgres e infraestructura en AWS. En <strong>Implementación</strong>, los desarrolladores programarían la aplicación componente por componente. Luego, los testers probarían la pasarela con tarjetas falsas (<strong>Pruebas</strong>). Al no encontrar bugs críticos, la subirían a AWS para acceso público (<strong>Despliegue</strong>) y finalmente pasarían a parchear errores menores que encuentren los usuarios en <strong>Mantenimiento</strong>.',
                        },
                        {
                            type: 'calloutGroup',
                            title: 'Errores frecuentes al aprender SDLC',
                            variant: 'warning',
                            items: [
                                {
                                    icon: 'alertTriangle',
                                    title: 'Creer que SDLC = Waterfall',
                                    text: 'El ciclo de vida describe preguntas y fases del trabajo; el modelo define cómo recorres esas fases.',
                                },
                                {
                                    icon: 'alertTriangle',
                                    title: 'Pensar que solo importa programar',
                                    text: 'Muchos fallos de producto nacen antes de que exista una línea de código: requisitos confusos, diseño débil o pruebas insuficientes.',
                                },
                            ],
                        },
                        {
                            type: 'exercise',
                            title: 'Ejercicio opcional: analiza un sistema cotidiano',
                            prompt: 'Toma una app conocida (por ejemplo banca móvil, delivery o streaming) y describe qué entregable esperas ver en al menos cuatro fases del SDLC.',
                            hints: [
                                'No describas solo código: incluye requerimientos, diseño, pruebas o despliegue.',
                                'Piensa quién participaría en cada fase.',
                            ],
                        },
                    ],
                    conclusion: 'El SDLC es el pilar de la ingeniería de software profesional. Conocer los fundamentos teóricos sobre cómo planificar, construir, probar y entregar sistemas diferencia a los programadores solitarios de los ingenieros de software capaces de operar en equipos de élite desarrollando sistemas de gran escala e impacto real.',
                },
            },
            // Git Guide
            {
                id: 'intro-git',
                title: 'Introducción a Git y Control de Versiones',
                subtitle: 'Domina el sistema de control de versiones más utilizado del mundo',
                type: 'Guía',
                difficulty: 'Básico / Intermedio',
                duration: '30–45 min',
                tags: ['Git', 'Version Control', 'Software Development', 'GitHub'],
                learningFeatures: ['Simulación', 'Paso a paso', 'Comandos'],
                guide: {
                    intro: 'En el desarrollo de software moderno, el código cambia constantemente. Sin un sistema que registre esos cambios, es imposible colaborar en equipo, revertir errores o entender la evolución del proyecto. Git resuelve exactamente este problema: es el sistema de control de versiones distribuido más utilizado del mundo y es una habilidad fundamental para cualquier desarrollador de software.',
                    introCards: [
                        {
                            icon: 'git-branch',
                            title: 'Qué problema resuelve',
                            text: 'Git convierte cambios dispersos y riesgosos en un historial verificable, reversible y compartible.',
                        },
                        {
                            icon: 'layers',
                            title: 'Modelo mental',
                            text: 'Piensa en Git como una máquina del tiempo del proyecto: puedes inspeccionar estados anteriores, crear ramas paralelas y volver a puntos seguros.',
                        },
                        {
                            icon: 'users',
                            title: 'Por qué importa en equipo',
                            text: 'Sin control de versiones, colaborar significa sobrescribir trabajo, perder contexto y no saber quién cambió qué.',
                        },
                    ],
                    quickNotes: [
                        {
                            icon: 'shield',
                            title: 'Diferencia crítica',
                            text: 'Git no es GitHub. Git vive en tu máquina y GitHub aloja repositorios remotos para colaboración y respaldo.',
                        },
                    ],
                    objectives: [
                        'Entender qué es el control de versiones y por qué es esencial en el trabajo en equipo.',
                        'Comprender los conceptos clave de Git: repositorio, commit, branch, merge y remote.',
                        'Instalar y configurar Git en un entorno Linux.',
                        'Ejecutar el flujo básico de trabajo: editar → staging → commit.',
                        'Trabajar con ramas para aislar funcionalidades.',
                        'Conectar un repositorio local con GitHub y sincronizar cambios.',
                    ],
                    technologies: [
                        { name: 'Git 2.x', category: 'Control de Versiones' },
                        { name: 'GitHub', category: 'Repositorio Remoto' },
                        { name: 'Terminal Bash', category: 'Entorno' },
                    ],
                    labArchitecture: {
                        desc: 'Git organiza el trabajo en cuatro zonas. Pulsa "Iniciar simulación" para ver cómo fluyen los cambios de zona en zona.',
                        simulationLink: 'git-flow',
                    },
                    stepsDesc: 'Recorre la guía como un flujo de trabajo real: configurar, crear repositorio, inspeccionar, ramificar y sincronizar.',
                    steps: [
                        {
                            id: '01',
                            title: '¿Qué es Git?',
                            text: 'Git es un sistema de control de versiones distribuido creado por Linus Torvalds en 2005. A diferencia de sistemas centralizados, cada desarrollador tiene una copia completa del historial del repositorio en su propia máquina.',
                            steps: [
                                'Git != GitHub: Git es la herramienta local; GitHub es una plataforma web para alojar repositorios Git remotos.',
                                'Distribuido: no depende de un servidor central para funcionar; puedes hacer commits offline.',
                                'Historial completo: cada repositorio contiene toda la historia de cambios del proyecto.',
                                'Ramas (branches): permiten desarrollar funcionalidades en paralelo sin interferir entre sí.',
                            ],
                        },
                        {
                            id: '02',
                            title: 'Conceptos fundamentales',
                            text: 'Antes de ejecutar comandos, es importante entender el vocabulario de Git:',
                            dataTable: {
                                headers: ['Concepto', 'Significado'],
                                rows: [
                                    ['Repositorio (repo)', 'Carpeta del proyecto más toda la historia de cambios de Git.'],
                                    ['Commit', 'Instantánea del estado del código en un momento dado, con un mensaje descriptivo.'],
                                    ['Branch', 'Línea de desarrollo independiente. La rama principal se llama main o master.'],
                                    ['Merge', 'Acción de integrar los cambios de una rama en otra.'],
                                    ['Remote', 'Versión del repositorio alojada en un servidor (ej. GitHub).'],
                                    ['Clone', 'Copia completa de un repositorio remoto en tu máquina local.'],
                                    ['Stage / Index', 'Zona intermedia donde preparas los cambios antes de hacer commit.'],
                                ],
                            },
                        },
                        {
                            id: '03',
                            title: 'Instalación de Git en Linux',
                            text: 'Para instalar Git en distribuciones basadas en Debian/Ubuntu, ejecuta los siguientes comandos:',
                            commands: [
                                { cmd: 'sudo apt update', desc: 'Actualiza la lista de paquetes disponibles en los repositorios.' },
                                { cmd: 'sudo apt install git -y', desc: 'Instala Git. La opción -y acepta la confirmación automáticamente.' },
                                { cmd: 'git --version', desc: 'Verifica que Git se instaló correctamente. Deberías ver algo como: git version 2.x.x' },
                            ],
                            expectedOutput: 'git version 2.43.0',
                            outputExplanation: 'La versión exacta puede variar, pero cualquier versión 2.x es completamente funcional. Ahora configura tu identidad para que Git sepa quién hace cada commit.',
                        },
                        {
                            id: '04',
                            title: 'Configuración inicial de Git',
                            text: 'Antes de usar Git, debes configurar tu nombre y correo. Esta información quedará registrada en cada commit que hagas:',
                            commands: [
                                { cmd: 'git config --global user.name "Tu Nombre"', desc: 'Establece tu nombre de usuario. Aparecerá en el historial de commits.' },
                                { cmd: 'git config --global user.email "tu@email.com"', desc: 'Establece tu correo. Debe coincidir con el de tu cuenta GitHub.' },
                                { cmd: 'git config --list', desc: 'Muestra toda la configuración activa para verificar que quedó guardada.' },
                            ],
                        },
                        {
                            id: '05',
                            title: 'Inicializar un repositorio',
                            text: 'Crea una carpeta de proyecto y conviértela en un repositorio Git:',
                            commands: [
                                { cmd: 'mkdir mi-proyecto && cd mi-proyecto', desc: 'Crea una carpeta llamada mi-proyecto y entra en ella.' },
                                { cmd: 'git init', desc: 'Inicializa un repositorio Git vacío. Crea una carpeta oculta .git que almacena toda la historia.' },
                            ],
                            expectedOutput: 'Initialized empty Git repository in /home/usuario/mi-proyecto/.git/',
                            outputExplanation: 'El repositorio está listo. Todavía no tiene commits; es una pizarra en blanco.',
                        },
                        {
                            id: '06',
                            title: 'El flujo básico: editar → add → commit',
                            text: 'El flujo de trabajo diario en Git siempre sigue este patrón de tres pasos:',
                            commands: [
                                { cmd: 'echo "# Mi Proyecto" > README.md', desc: 'Paso 1 — Editar: Crea un archivo README.md con contenido básico.' },
                                { cmd: 'git status', desc: 'Inspecciona el estado. Git mostrará README.md como un archivo sin rastrear (untracked).' },
                                { cmd: 'git add README.md', desc: 'Paso 2 — Staging: Agrega el archivo al área de preparación (staging area).' },
                                { cmd: 'git commit -m "Agrega README inicial"', desc: 'Paso 3 — Commit: Guarda la instantánea con un mensaje descriptivo.' },
                            ],
                            expectedOutput: '[main (root-commit) 1a2b3c4] Agrega README inicial\n 1 file changed, 1 insertion(+)',
                            outputExplanation: 'El commit fue creado exitosamente. El hash (1a2b3c4) es el identificador único de este punto en la historia del proyecto.',
                        },
                        {
                            id: '07',
                            title: 'Comandos de inspección esenciales',
                            text: 'Estos comandos te permiten entender el estado actual del repositorio en cualquier momento:',
                            commands: [
                                { cmd: 'git status', desc: 'Muestra qué archivos han cambiado, cuáles están en staging y cuáles sin rastrear.' },
                                { cmd: 'git log', desc: 'Muestra el historial completo de commits con autor, fecha y mensaje.' },
                                { cmd: 'git log --oneline', desc: 'Versión compacta del historial: un commit por línea con su hash corto y mensaje.' },
                                { cmd: 'git diff', desc: 'Muestra exactamente qué líneas de código cambiaron en los archivos modificados.' },
                            ],
                        },
                        {
                            id: '08',
                            title: 'Trabajo con ramas (branches)',
                            text: 'Las ramas permiten trabajar en nuevas funcionalidades de forma aislada, sin afectar el código estable de main. Una vez lista, la rama se fusiona (merge) de vuelta.',
                            commands: [
                                { cmd: 'git branch', desc: 'Lista todas las ramas del repositorio. La activa aparece con un asterisco (*).' },
                                { cmd: 'git checkout -b feature/login', desc: 'Crea una nueva rama llamada feature/login Y cambia a ella en un solo comando.' },
                                { cmd: 'git add . && git commit -m "Agrega módulo de login"', desc: 'Trabaja normalmente en la nueva rama: edita archivos, agrega y hace commit.' },
                                { cmd: 'git checkout main', desc: 'Regresa a la rama principal.' },
                                { cmd: 'git merge feature/login', desc: 'Fusiona los cambios de feature/login en main.' },
                            ],
                            expectedOutput: 'Updating 1a2b3c4..5d6e7f8\nFast-forward\n login.js | 24 ++++++++++++++++++++++++\n 1 file changed, 24 insertions(+)',
                            outputExplanation: 'Fast-forward significa que Git simplemente avanzó el puntero de main hasta el último commit de la rama, sin crear un commit de fusión extra.',
                        },
                        {
                            id: '09',
                            title: 'Conectar con GitHub (repositorio remoto)',
                            text: 'Una vez que tienes un repositorio local, puedes sincronizarlo con GitHub para respaldarlo, colaborar en equipo y publicarlo:',
                            steps: [
                                '1. Crea un repositorio en github.com (sin inicializar con README).',
                                '2. Copia la URL del repositorio (ejemplo: https://github.com/usuario/mi-proyecto.git).',
                                '3. En la terminal, ejecuta los comandos a continuación.',
                            ],
                            commands: [
                                { cmd: 'git remote add origin https://github.com/usuario/mi-proyecto.git', desc: 'Vincula tu repositorio local con el remoto. "origin" es el nombre convencional del remoto principal.' },
                                { cmd: 'git push -u origin main', desc: 'Envía los commits locales a GitHub. La opción -u guarda la configuración para que los futuros push/pull sean más simples.' },
                            ],
                            expectedOutput: 'Branch \'main\' set up to track remote branch \'main\' from \'origin\'.',
                            outputExplanation: 'Ahora tu repositorio local está vinculado con GitHub. Los próximos push solo necesitan git push.',
                        },
                        {
                            id: '10',
                            title: 'Actualizar desde el repositorio remoto',
                            text: 'Cuando trabajas en equipo, otros desarrolladores hacen push de sus cambios. Necesitas descargarlos a tu máquina local:',
                            commands: [
                                { cmd: 'git fetch origin', desc: 'Descarga los cambios del remoto PERO no los aplica todavía. Útil para revisar antes de integrar.' },
                                { cmd: 'git pull origin main', desc: 'Descarga los cambios de main en el servidor Y los fusiona automáticamente con tu rama local.' },
                            ],
                        },
                        {
                            id: '11',
                            title: 'Clonar un repositorio existente',
                            text: 'Para trabajar en un proyecto que ya existe en GitHub, usa git clone:',
                            commands: [
                                { cmd: 'git clone https://github.com/usuario/proyecto.git', desc: 'Descarga una copia completa del repositorio (todo el historial, ramas y archivos).' },
                                { cmd: 'cd proyecto', desc: 'Entra a la carpeta del proyecto clonado. Ya está listo para trabajar.' },
                            ],
                        },
                        {
                            id: '12',
                            title: 'Ejemplo práctico completo',
                            text: 'Flujo real de trabajo desde cero hasta GitHub:',
                            commands: [
                                { cmd: 'mkdir proyecto-demo && cd proyecto-demo', desc: 'Crea la carpeta del proyecto.' },
                                { cmd: 'git init', desc: 'Inicializa el repositorio Git.' },
                                { cmd: 'touch index.html', desc: 'Crea el archivo principal.' },
                                { cmd: 'git add index.html', desc: 'Agrega el archivo al staging area.' },
                                { cmd: 'git commit -m "Primer commit: agrega index.html"', desc: 'Crea el primer commit con un mensaje claro y descriptivo.' },
                                { cmd: 'git checkout -b feature/navbar', desc: 'Crea y cambia a una nueva rama para desarrollar la barra de navegación.' },
                                { cmd: 'git add . && git commit -m "Agrega navbar al index"', desc: 'Después de editar index.html, agrega y commitea los cambios en la rama.' },
                                { cmd: 'git checkout main && git merge feature/navbar', desc: 'Regresa a main y fusiona la función completada.' },
                                { cmd: 'git push origin main', desc: 'Sube todos los cambios a GitHub.' },
                            ],
                        },
                    ],
                    learnings: [
                        { concept: 'Control de versiones distribuido', desc: 'Cada desarrollador tiene una copia completa del historial del proyecto.' },
                        { concept: 'Flujo Working Directory → Staging → Repository', desc: 'Tres zonas que permiten preparar y revisar cambios antes de confirmarlos.' },
                        { concept: 'Ramas (branches)', desc: 'Permiten desarrollar funcionalidades en paralelo sin interferir con el código estable.' },
                        { concept: 'Sincronización con remoto', desc: 'git push y git pull sincronizan el repositorio local con GitHub.' },
                        { concept: 'Historial de commits', desc: 'git log proporciona una traza completa de todos los cambios del proyecto a lo largo del tiempo.' },
                    ],
                    extensions: [
                        {
                            title: '.gitignore — Ignorar archivos confidenciales',
                            desc: 'Crea un archivo .gitignore para excluir archivos que no deben subirse a GitHub (node_modules, .env, credenciales, etc.).',
                            command: 'echo "node_modules/\\n.env\\n*.log" > .gitignore && git add .gitignore && git commit -m "Agrega .gitignore"',
                        },
                        {
                            title: 'git stash — Guardar trabajo en progreso',
                            desc: 'Guarda temporalmente los cambios sin commitear cuando necesitas cambiar de rama urgentemente.',
                            command: 'git stash        # Guarda cambios\ngit stash pop    # Recupera los cambios guardados',
                        },
                        {
                            title: 'Revertir el último commit',
                            desc: 'Si cometiste un error en el último commit, puedes deshacerlo manteniendo los cambios en el Working Directory.',
                            command: 'git revert HEAD',
                        },
                    ],
                    exercise: {
                        title: 'Desafío opcional: narra el flujo completo',
                        prompt: 'Explica con tus palabras qué ocurre cuando editas un archivo, lo agregas al staging area, haces commit y luego lo subes a GitHub.',
                        hints: [
                            'Nombra las zonas Working Directory, Staging y Repository.',
                            'Aclara en qué momento interviene el remoto.',
                        ],
                    },
                    conclusion: 'Git deja de ser una lista de comandos cuando entiendes el flujo que protege: cambios locales, preparación, confirmación, ramas y sincronización. Dominar esa secuencia te vuelve mucho más confiable trabajando solo o en equipo.',
                },
            },
            // Scrum Theory
            {
                id: 'intro-scrum',
                title: 'Scrum — Metodología Ágil para el Desarrollo de Software',
                subtitle: 'Framework ágil para desarrollar productos complejos mediante iteraciones cortas y colaboración continua',
                type: 'Teoría',
                difficulty: 'Básico / Intermedio',
                duration: '20–30 min',
                tags: ['Scrum', 'Agile', 'Software Development', 'Project Management'],
                learningFeatures: ['Simulación', 'Tablero', 'Ejercicio'],
                content: {
                    intro: 'Los equipos de desarrollo de software durante décadas intentaron construir productos siguiendo planes rígidos y largos: definir todo, luego diseñar todo, luego programar todo. El problema: los requisitos cambian, los clientes cambian de opinión y el mundo cambia. Las <strong>metodologías ágiles</strong> nacieron como respuesta a este problema, priorizando la adaptabilidad, la colaboración y la entrega continua de valor sobre la documentación exhaustiva y los planes inflexibles. Scrum es el framework ágil más utilizado en la industria.',
                    objectives: [
                        'Comprender qué problema intenta resolver Scrum frente a procesos demasiado rígidos.',
                        'Identificar roles, eventos y artefactos básicos del framework.',
                        'Entender cómo un Sprint organiza trabajo, feedback y mejora continua.',
                        'Reconocer ventajas reales y límites operativos de Scrum.',
                    ],
                    sections: [
                        {
                            type: 'calloutGroup',
                            title: 'Antes de hablar de ceremonias',
                            variant: 'info',
                            items: [
                                {
                                    icon: 'target',
                                    title: 'Idea clave',
                                    text: 'Scrum no elimina la necesidad de pensar; solo crea un marco corto de inspección y adaptación para que el equipo aprenda más rápido.',
                                },
                                {
                                    icon: 'users',
                                    title: 'Mentalidad correcta',
                                    text: 'No es un esquema de jefes repartiendo tareas, sino un sistema donde el equipo gana visibilidad, coordinación y feedback frecuente.',
                                },
                            ],
                        },
                        {
                            type: 'text',
                            title: '¿Qué es Scrum?',
                            content: 'Scrum es un <strong>framework liviano</strong> para desarrollar y mantener productos complejos. No es una metodología completa ni un proceso rígido: es un conjunto de reglas, roles, eventos y artefactos diseñados para que los equipos puedan trabajar de forma iterativa, colaborativa y con capacidad de adaptación.\n\nFue definido formalmente por Jeff Sutherland y Ken Schwaber en la década de 1990. Su nombre proviene del rugby: en Scrum, todos los integrantes del equipo trabajan juntos, se apoyan mutuamente y avanzan como una unidad hacia el objetivo.\n\nLos cuatro principios clave de Scrum son: el <strong>trabajo iterativo</strong> (dividir el trabajo en ciclos cortos llamados Sprints), la <strong>colaboración continua</strong> (el equipo trabaja junto todos los días), las <strong>entregas incrementales</strong> (cada Sprint debe producir un incremento de producto funcional) y la <strong>mejora continua</strong> (el equipo reflexiona regularmente sobre cómo mejorar).',
                        },
                        {
                            type: 'grid-cards',
                            title: 'Roles en Scrum',
                            cards: [
                                {
                                    title: 'Product Owner (PO)',
                                    color: '#67e8f9',
                                    text: 'Es el responsable de <strong>maximizar el valor</strong> del producto. Define qué se va a construir y en qué orden. Gestiona el <em>Product Backlog</em>. Trabaja de puente entre el negocio y el equipo de desarrollo. No es jefe del equipo.'
                                },
                                {
                                    title: 'Scrum Master',
                                    color: '#38bdf8',
                                    text: 'Es el <strong>guardián del proceso</strong> Scrum. Se asegura de que el equipo entienda y aplique correctamente Scrum. Elimina impedimentos, facilita los eventos y protege al equipo de interrupciones externas. Es un <em>servant leader</em>.'
                                },
                                {
                                    title: 'Development Team',
                                    color: '#00d4ff',
                                    text: 'El equipo que construye el producto. Es <strong>auto-organizado</strong> (decide cómo hacer el trabajo) y <strong>multifuncional</strong> (cuenta con todas las habilidades necesarias como diseño, desarrollo y QA). El tamaño ideal es de 3 a 9 personas.'
                                }
                            ]
                        },
                        {
                            type: 'process',
                            title: 'Flujo del Sprint Scrum',
                            desc: 'Cada Sprint es un ciclo completo que pasa por cinco etapas. Pulsa "Iniciar simulación" para ver cómo fluye el trabajo.',
                            simType: 'scrum-flow',
                            simLayout: 'stacked',
                            observe: [
                                'El Sprint agrupa planificación, ejecución, revisión y mejora; no es solo programar dos semanas.',
                                'El feedback de Review y Retrospective alimenta el siguiente ciclo.',
                            ],
                            steps: [
                                {
                                    name: 'Product Backlog',
                                    sender: 'Product Owner',
                                    action: 'Lista priorizada de todo el trabajo pendiente del producto. El PO decide qué entra al siguiente Sprint.',
                                },
                                {
                                    name: 'Sprint Planning',
                                    sender: 'Todo el equipo',
                                    action: 'El equipo selecciona los ítems del Backlog que completará en el Sprint. Define el objetivo del Sprint y cómo lo va a lograr. Duración: 2-8 horas.',
                                },
                                {
                                    name: 'Sprint (1-4 semanas)',
                                    sender: 'Development Team',
                                    action: 'El equipo trabaja para cumplir el Sprint Goal. Cada día hay un Daily Scrum. El Sprint no se puede cancelar ni extender (salvo situaciones excepcionales).',
                                },
                                {
                                    name: 'Sprint Review',
                                    sender: 'Todo el equipo + stakeholders',
                                    action: 'El equipo presenta el incremento completado a los stakeholders. Se recibe feedback y se actualiza el Backlog según lo aprendido. Duración: 1-4 horas.',
                                },
                                {
                                    name: 'Sprint Retrospective',
                                    sender: 'Scrum Team',
                                    action: 'El equipo reflexiona sobre su proceso de trabajo: qué salió bien, qué puede mejorar y qué acciones concretas tomar en el siguiente Sprint. Duración: 45-180 min.',
                                },
                            ],
                        },
                        {
                            type: 'grid-cards',
                            title: 'Eventos de Scrum',
                            cards: [
                                {
                                    title: 'Sprint',
                                    color: '#00d4ff',
                                    text: 'El <strong>corazón de Scrum</strong>. Un ciclo de trabajo de duración fija (1 a 4 semanas, generalmente 2). Al terminar, debe existir un incremento de producto potencialmente entregable.'
                                },
                                {
                                    title: 'Sprint Planning',
                                    color: '#38bdf8',
                                    text: 'Primera reunión del Sprint. El equipo define el <strong>Sprint Goal</strong> y selecciona del Backlog los ítems que completará. Responden: ¿Qué entregaremos? y ¿Cómo lo haremos?'
                                },
                                {
                                    title: 'Daily Scrum',
                                    color: '#7dd3fc',
                                    text: 'Reunión diaria de <strong>15 minutos</strong> para el Development Team. Cada miembro responde: ¿Qué hice ayer? ¿Qué haré hoy? ¿Tengo algún impedimento? Es una sincronización, no un reporte.'
                                },
                                {
                                    title: 'Sprint Review',
                                    color: '#0ea5e9',
                                    text: 'Al final del Sprint, el equipo <strong>muestra el trabajo completado</strong> a los stakeholders. El objetivo es obtener feedback e inspeccionar el producto. El Backlog se adapta según lo aprendido.'
                                },
                                {
                                    title: 'Sprint Retrospective',
                                    color: '#67e8f9',
                                    text: 'Al final del Sprint, el equipo <strong>reflexiona sobre sí mismo</strong>: el proceso, las herramientas, las relaciones. Identifica mejoras concretas y procesables para el siguiente Sprint.'
                                }
                            ]
                        },
                        {
                            type: 'process',
                            title: 'Tablero Scrum — Simulación de un Sprint',
                            desc: 'Observa cómo las tareas avanzan desde el Backlog hasta Done durante el Sprint. Pulsa "Iniciar simulación" para verlo en acción.',
                            simType: 'scrum-board',
                            simLayout: 'stacked',
                            observe: [
                                'Mover una tarjeta no es progreso si no cumple la Definition of Done.',
                                'El tablero ayuda a hacer visible el cuello de botella del equipo.',
                            ],
                            steps: [
                                {
                                    name: 'Backlog',
                                    sender: 'Product Owner',
                                    action: 'Tareas definidas y priorizadas que esperan ser seleccionadas para el Sprint.',
                                },
                                {
                                    name: 'To Do',
                                    sender: 'Development Team',
                                    action: 'Tareas comprometidas para el Sprint actual, listas para comenzar.',
                                },
                                {
                                    name: 'In Progress',
                                    sender: 'Development Team',
                                    action: 'Tareas que se están desarrollando activamente por algún miembro del equipo.',
                                },
                                {
                                    name: 'Review',
                                    sender: 'Development Team + QA',
                                    action: 'Tareas completadas que están siendo revisadas o probadas antes de marcarse como Done.',
                                },
                                {
                                    name: 'Done',
                                    sender: 'Scrum Team',
                                    action: 'Tareas que cumplen la Definition of Done: desarrolladas, probadas y listas para entregar.',
                                },
                            ],
                        },
                        {
                            type: 'proscons',
                            title: 'Scrum — Ventajas y Desafíos',
                            pros: [
                                'Entrega rápida de valor: el cliente recibe software funcional desde el primer Sprint.',
                                'Adaptación al cambio: el Backlog puede reordenarse antes de cada Sprint.',
                                'Mayor transparencia: el tablero y el Daily Scrum hacen visible el avance del equipo.',
                                'Mejor comunicación: las ceremonias promueven la colaboración diaria.',
                                'Detección temprana de problemas gracias a ciclos cortos de feedback.',
                            ],
                            cons: [
                                'Mala gestión del Backlog: si el PO no prioriza bien, el equipo trabaja en lo incorrecto.',
                                'Roles mal definidos: confundir al Scrum Master con un gerente de proyecto rompe el proceso.',
                                'Falta de disciplina: los equipos sin experiencia tienden a saltarse retrospectivas o dailies.',
                                'Difícil escalar: Scrum funciona bien para equipos pequeños; sistemas grandes requieren marcos adicionales (SAFe, LeSS).',
                            ],
                        },
                        {
                            type: 'text',
                            title: 'Ejemplo práctico — Sprint de una App Web',
                            content: 'Imagina un equipo de 5 personas construyendo una aplicación de gestión de tareas. El <strong>Product Backlog</strong> incluye: Sistema de login, Registro de usuarios, Panel de usuario y Sistema de notificaciones.\n\nEn el <strong>Sprint Planning</strong>, el equipo selecciona "Sistema de login" y "Registro de usuarios" como objetivo del Sprint de 2 semanas. Durante el <strong>Sprint</strong>, cada día el equipo se sincroniza en el Daily Scrum (15 min). A mitad del Sprint, el PO sugiere agregar autenticación con Google; el equipo lo anota en el Backlog pero no lo agrega al Sprint actual.\n\nEn el <strong>Sprint Review</strong>, el equipo demuestra el login funcionando con usuarios reales. Los stakeholders dan feedback positivo y piden que el email de bienvenida sea más personalizado. En la <strong>Retrospectiva</strong>, el equipo identifica que los code reviews tardaban mucho; acordaron hacerlos en menos de 24 horas. El siguiente Sprint comienza con el Backlog actualizado.',
                        },
                        {
                            type: 'calloutGroup',
                            title: 'Errores frecuentes al aplicar Scrum',
                            variant: 'warning',
                            items: [
                                {
                                    icon: 'alertTriangle',
                                    title: 'Usar Daily como reporte al jefe',
                                    text: 'El Daily no es una reunión para controlar personas, sino para sincronizar trabajo y detectar bloqueos.',
                                },
                                {
                                    icon: 'alertTriangle',
                                    title: 'Meter cambios nuevos dentro del Sprint sin criterio',
                                    text: 'Si todo cambia todos los días, el Sprint pierde foco y deja de ser una promesa realista del equipo.',
                                },
                            ],
                        },
                        {
                            type: 'exercise',
                            title: 'Ejercicio opcional: diseña un Sprint',
                            prompt: 'Imagina un equipo pequeño construyendo una app de reservas. Propón un Sprint Goal, tres ítems del backlog y qué evidencia mostrarías en la Sprint Review.',
                            hints: [
                                'El objetivo del Sprint debe ser concreto, no una lista infinita.',
                                'Piensa en algo demostrable al final del ciclo.',
                            ],
                        },
                    ],
                    conclusion: 'Scrum no es una solución mágica ni una receta perfecta. Es un framework que ayuda a los equipos a aprender más rápido, adaptarse con agilidad y entregar valor de forma continua. Su poder real no está en sus reglas, sino en la cultura que fomenta: colaboración, transparencia y mejora constante. Dominar Scrum es una habilidad esencial para cualquier profesional que trabaje en equipos de desarrollo de software modernos.',
                },
            },
        ],
    };

export default desarrolloSoftwareSubject;
