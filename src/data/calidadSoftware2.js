const calidadSoftware2Subject = {
    id: 'ingenieria-calidad-software-2',
    code: 'SQE-II',
    title: 'Ingenieria de Calidad de Software 2',
    description:
        'Diseno de pruebas, testing exploratorio y guiado, analisis de riesgo, domain testing, combinatoria y gestion profesional de defectos en equipos QA.',
    icon: 'shield',
    color: '#f59e0b',
    topics: ['QA', 'Software Testing', 'Exploratory Testing', 'Domain Testing', 'Bug Reporting'],
    learningPath: {
        title: 'Ruta de aprendizaje sugerida',
        summary:
            'La materia avanza desde la observacion exploratoria hasta la gestion operacional de calidad. Primero aprendes a investigar un producto, luego a formalizar evidencia, despues a elegir tecnicas segun riesgo y entradas, y finalmente a comunicar defectos y operar el trabajo de QA con criterio profesional.',
        estimatedDuration: '5 h 20 min - 7 h 10 min',
        outcomes: [
            'Distinguir con criterio cuando conviene explorar, cuando conviene guiar y cuando conviene formalizar.',
            'Diseñar casos de prueba, particiones, limites y combinaciones sin depender de intuiciones vagas.',
            'Priorizar el esfuerzo de prueba segun riesgo, robustez esperada y relevancia de negocio.',
            'Reportar, validar y gestionar defectos de forma util para desarrollo, producto y stakeholders.',
        ],
        stages: [
            {
                title: '1. Explorar y observar',
                desc: 'Construir una mentalidad investigativa para aprender del producto antes de rigidizar la prueba.',
            },
            {
                title: '2. Formalizar evidencia',
                desc: 'Convertir hallazgos y escenarios en casos de prueba repetibles, trazables y revisables.',
            },
            {
                title: '3. Elegir tecnica adecuada',
                desc: 'Entender taxonomias, riesgo y robustez para decidir que probar primero y con que enfoque.',
            },
            {
                title: '4. Diseñar entradas con criterio',
                desc: 'Reducir espacios de entrada enormes mediante particiones, limites y cobertura combinatoria.',
            },
            {
                title: '5. Comunicar y operar QA',
                desc: 'Transformar observaciones en defectos accionables y gestionar su seguimiento con disciplina.',
            },
            {
                title: '6. Integrar y repasar',
                desc: 'Cerrar el recorrido conectando tecnicas, artefactos y decisiones operativas en una estrategia unica.',
            },
        ],
    },
    labs: [
        {
            id: 'sqe2-exploratory-fundamentos',
            title: 'Exploratory Testing: fundamentos y proposito',
            subtitle: 'Mentalidad investigativa para descubrir informacion util antes de formalizar pruebas',
            type: 'Teoría',
            difficulty: 'Básico',
            duration: '20-30 min',
            tags: ['QA', 'Exploratory Testing', 'Semana 1', 'Software Testing'],
            learningFeatures: ['Comparativa', 'Buenas practicas', 'Ejercicio'],
            content: {
                intro:
                    'Cuando un equipo todavia no entiende del todo el comportamiento de un producto, intentar escribir primero una bateria exhaustiva de test cases suele producir papeles correctos pero pruebas pobres. <strong>Exploratory testing</strong> nace para resolver ese problema: combina aprendizaje, diseno y ejecucion en una misma actividad para que el tester observe el sistema, formule hipotesis, siga pistas y produzca informacion valiosa con rapidez. No es improvisacion sin criterio; es un enfoque disciplinado para descubrir donde conviene profundizar.',
                objectives: [
                    'Comprender que problema resuelve exploratory testing dentro del proceso de QA.',
                    'Distinguir aprendizaje, diseno de prueba y ejecucion como actividades que en este enfoque ocurren en paralelo.',
                    'Reconocer situaciones en las que explorar agrega mas valor que ejecutar guiones rigidos.',
                    'Identificar limites reales del enfoque y errores frecuentes al aplicarlo.',
                ],
                sections: [
                    {
                        type: 'calloutGroup',
                        title: 'Antes de empezar',
                        variant: 'info',
                        items: [
                            {
                                icon: 'lightbulb',
                                title: 'Idea central',
                                text: 'Explorar no significa <strong>probar sin pensar</strong>; significa investigar de forma activa para producir conocimiento verificable sobre el producto.',
                            },
                            {
                                icon: 'target',
                                title: 'Pregunta correcta',
                                text: 'No preguntes solo <em>que bug encuentro</em>, sino tambien <em>que estoy aprendiendo del sistema</em> y <em>que areas merecen pruebas mas profundas</em>.',
                            },
                            {
                                icon: 'activity',
                                title: 'Valor que genera',
                                text: 'Permite detectar riesgos tempranos, zonas confusas, huecos funcionales y comportamientos no documentados antes de invertir demasiado en formalizacion.',
                            },
                        ],
                    },
                    {
                        type: 'text',
                        title: 'Que es exploratory testing',
                        content:
                            'Exploratory testing es un enfoque en el que el tester <strong>aprende sobre el producto mientras prueba</strong>. A diferencia de un esquema completamente guiado por pasos predefinidos, aqui el conocimiento obtenido en una accion modifica la siguiente. Esa realimentacion rapida es clave: el sistema revela pistas, el tester interpreta, ajusta la hipotesis y decide el siguiente movimiento.\n\nEste enfoque es especialmente valioso cuando el producto esta cambiando, cuando la documentacion todavia es incompleta o cuando existe sospecha de que los riesgos reales no estan bien entendidos por el equipo. En esos contextos, explorar produce una capa de inteligencia que luego alimenta mejores test cases, mejor priorizacion y mejores conversaciones con desarrollo y producto.',
                    },
                    {
                        type: 'comparisonTable',
                        title: 'Explorar no es ejecutar a ciegas',
                        headers: ['Aspecto', 'Exploratory testing', 'Ejecucion mecanica'],
                        rows: [
                            ['Objetivo principal', 'Aprender y descubrir informacion relevante', 'Confirmar un flujo ya definido'],
                            ['Secuencia', 'Se adapta segun hallazgos', 'Sigue pasos fijos'],
                            ['Valor temprano', 'Alto cuando el producto es ambiguo o nuevo', 'Limitado si los pasos fueron mal diseniados'],
                            ['Riesgo principal', 'Perder foco si no hay disciplina', 'Confirmar solo lo esperado y omitir zonas no guionadas'],
                        ],
                    },
                    {
                        type: 'featureCards',
                        title: 'Cuando conviene usarlo',
                        features: [
                            {
                                icon: 'search',
                                title: 'Producto poco entendido',
                                desc: 'Cuando el equipo todavia no domina reglas de negocio, estados del sistema o dependencias relevantes.',
                            },
                            {
                                icon: 'refresh-cw',
                                title: 'Cambios frecuentes',
                                desc: 'Cuando la interfaz, el flujo o las reglas cambian demasiado rapido como para congelar casos de prueba estables.',
                            },
                            {
                                icon: 'shield',
                                title: 'Sospecha de riesgo oculto',
                                desc: 'Cuando existen areas aparentemente simples que pueden esconder errores de usabilidad, consistencia o negocio.',
                            },
                            {
                                icon: 'users',
                                title: 'Discovery QA',
                                desc: 'Cuando QA necesita generar preguntas utiles para PO, desarrollo y stakeholders antes de formalizar cobertura.',
                            },
                        ],
                    },
                    {
                        type: 'proscons',
                        title: 'Ventajas y limites',
                        pros: [
                            'Descubre informacion valiosa muy temprano, incluso sin documentacion completa.',
                            'Favorece pensamiento critico en lugar de simple ejecucion operativa.',
                            'Ayuda a revelar riesgos, huecos funcionales y comportamientos inesperados.',
                            'Produce insumos de alto valor para futuros test cases y para conversaciones con el equipo.',
                        ],
                        cons: [
                            'Sin foco, puede convertirse en navegacion desordenada y dificil de explicar.',
                            'Es menos repetible si no se documenta charter, alcance y hallazgos.',
                            'No reemplaza la necesidad de cobertura formal cuando el producto madura.',
                        ],
                    },
                    {
                        type: 'checklist',
                        title: 'Como decidir si conviene explorar primero',
                        ordered: true,
                        items: [
                            'Pregunta si el equipo realmente entiende la regla de negocio o solo cree entenderla.',
                            'Evalua si la funcionalidad cambia con frecuencia o si todavia esta en discovery.',
                            'Revisa si el mayor riesgo actual es descubrir huecos o repetir regresiones conocidas.',
                            'Define un foco acotado: modulo, rol, regla, dato o integracion concreta.',
                            'Aclara que evidencia te haria decir luego: esto ya merece convertirse en test case o criterio formal.',
                        ],
                    },
                    {
                        type: 'comparisonTable',
                        title: 'Ejemplo guiado: explorar primero vs formalizar demasiado pronto',
                        headers: ['Decision', 'Situacion', 'Resultado habitual'],
                        rows: [
                            ['Explorar primero', 'Nueva app de reservas con reglas aun poco claras para reprogramacion y cancelacion', 'QA descubre dependencias, preguntas abiertas y escenarios criticos antes de congelar casos'],
                            ['Formalizar demasiado pronto', 'El equipo escribe 20 casos de cancelacion sin haber validado bien las politicas del negocio', 'Los casos quedan elegantes, pero repiten supuestos incorrectos y luego deben rehacerse'],
                            ['Explorar con disciplina', 'Se define un objetivo, se toman notas y se decide que hallazgos vale la pena formalizar', 'La exploracion produce aprendizaje y ademas deja insumos concretos para cobertura futura'],
                        ],
                    },
                    {
                        type: 'calloutGroup',
                        title: 'Tips para exploracion util y review rapido',
                        variant: 'example',
                        items: [
                            {
                                icon: 'search',
                                title: 'Haz preguntas pequenas',
                                text: 'Es mejor investigar <strong>que pasa al cancelar una reserva confirmada con pago parcial</strong> que navegar todo el producto sin hipotesis.',
                            },
                            {
                                icon: 'camera',
                                title: 'Captura evidencia en el momento',
                                text: 'Anota datos usados, estado del sistema y pasos relevantes apenas encuentres algo interesante. Esperar al final suele borrar contexto clave.',
                            },
                            {
                                icon: 'checkCircle',
                                title: 'Review de calidad',
                                text: 'Si al terminar puedes explicar <strong>que aprendiste, que riesgo viste y que deberia probarse despues</strong>, la exploracion fue util. Si solo puedes decir <em>toque varias pantallas</em>, fue pobre.',
                            },
                        ],
                    },
                    {
                        type: 'calloutGroup',
                        title: 'Errores frecuentes',
                        variant: 'warning',
                        items: [
                            {
                                icon: 'helpCircle',
                                title: 'Confundir exploracion con improvisacion',
                                text: 'Explorar no es hacer clics al azar. Debe existir un objetivo, un foco y observaciones registrables.',
                            },
                            {
                                icon: 'helpCircle',
                                title: 'No capturar evidencia',
                                text: 'Si encuentras un comportamiento interesante pero no registras contexto, datos y pasos, el hallazgo pierde valor para el equipo.',
                            },
                            {
                                icon: 'xCircle',
                                title: 'Quedarse solo explorando',
                                text: 'Exploratory testing descubre conocimiento. Ese conocimiento luego debe alimentar casos, criterios y decisiones de cobertura.',
                            },
                        ],
                    },
                    {
                        type: 'exercise',
                        title: 'Ejercicio opcional: define una primera sesion exploratoria',
                        prompt:
                            'Imagina una app nueva de reservas medicas. Define tres preguntas exploratorias iniciales que usarías para aprender del producto antes de escribir test cases formales.',
                        hints: [
                            'Piensa en estados del sistema, reglas de negocio y riesgo para el usuario.',
                            'Evita preguntas demasiado grandes; formula focos concretos de observacion.',
                            'Considera al menos una pregunta sobre errores o limites del flujo.',
                        ],
                        expectedOutput:
                            'Una buena respuesta podria incluir preguntas como: que ocurre si el usuario reprograma una cita ya pagada, como responde el sistema si no hay disponibilidad justo al confirmar y que evidencia recibe el paciente cuando falla el envio del recordatorio. Observa que cada pregunta apunta a un riesgo concreto y no a una exploracion vaga.',
                        reflection:
                            'Si tus preguntas llevan naturalmente a descubrir riesgos, dependencias o reglas implicitas, vas en la direccion correcta. Si todavia suenan como titulo general de modulo, reduce el foco y vuelve a escribirlas.',
                    },
                ],
                conclusion:
                    'Exploratory testing abre la materia porque te obliga a pensar como ingeniero de calidad y no solo como ejecutor de pasos. Primero aprendes a observar; luego ya tendra sentido decidir que formalizar, como priorizarlo y con que tecnica cubrirlo.',
            },
        },
        {
            id: 'sqe2-tour-based-exploratory',
            title: 'Tour-Based Exploratory Testing',
            subtitle: 'Usa recorridos deliberados para explorar un producto con foco y cobertura visible',
            type: 'Teoría',
            difficulty: 'Básico / Intermedio',
            duration: '25-35 min',
            tags: ['Exploratory Testing', 'Tour-Based', 'Semana 1', 'QA'],
            learningFeatures: ['Simulacion', 'Cobertura', 'Ejemplo'],
            content: {
                intro:
                    'Uno de los mayores problemas del exploratory testing es que, si no se estructura, puede dejar la sensacion de haber navegado mucho y aprendido poco. Los <strong>tours</strong> resuelven eso. La metafora del turista transforma la exploracion en recorridos intencionales: mirar funciones, datos, transacciones, estructura o variaciones concretas. Cada tour obliga al tester a observar el sistema desde un angulo distinto y hace la cobertura mucho mas explicable.',
                objectives: [
                    'Entender la metafora del turista y por que ayuda a disciplinar la exploracion.',
                    'Diferenciar los principales tours y el tipo de defectos que suelen revelar.',
                    'Elegir un tour segun el foco de investigacion del producto.',
                    'Aplicar los tours a un ejemplo funcional y traducir el recorrido a hallazgos utiles.',
                ],
                sections: [
                    {
                        type: 'calloutGroup',
                        title: 'Como pensar los tours',
                        variant: 'info',
                        items: [
                            {
                                icon: 'globe',
                                title: 'Metafora util',
                                text: 'Un turista no mira una ciudad siempre igual: puede recorrer barrios, rutas, monumentos o zonas ocultas. En testing pasa lo mismo.',
                            },
                            {
                                icon: 'layers',
                                title: 'Cobertura con intencion',
                                text: 'El tour te dice <strong>desde que angulo observar</strong>, evitando recorridos caoticos y repeticiones inutiles.',
                            },
                            {
                                icon: 'book',
                                title: 'Lenguaje comun',
                                text: 'Decir <em>hice un transaction tour</em> o <em>hice un data tour</em> comunica mucho mejor el enfoque seguido y el tipo de hallazgos esperables.',
                            },
                        ],
                    },
                    {
                        type: 'text',
                        title: 'La metafora del turista aplicada a testing',
                        content:
                            'Tour-Based Exploratory Testing propone que el tester explore el producto como si recorriera una ciudad con distintos objetivos. Un recorrido puede centrarse en las <strong>funcionalidades visibles</strong>, otro en las <strong>variaciones de datos</strong>, otro en la <strong>secuencia de transacciones</strong> y otro en la <strong>estructura interna o navegacional</strong> del sistema.\n\nLa fuerza del enfoque es doble: por un lado reduce la arbitrariedad, y por otro hace mucho mas facil explicar que cobertura se intento lograr. No reemplaza el juicio del tester; le da una estructura liviana para orientarlo.',
                    },
                    {
                        type: 'process',
                        title: 'Selector visual de tours',
                        desc: 'Observa como cambia el foco de la exploracion cuando el mismo producto se recorre desde distintos tours.',
                        simType: 'qa-tour-based',
                        simLayout: 'stacked',
                        observe: [
                            'Cada tour hace visible una familia distinta de riesgos.',
                            'No todos los tours sirven igual para todos los modulos.',
                            'Un buen recorrido exploratorio suele combinar dos o mas tours complementarios.',
                        ],
                        steps: [
                            {
                                name: 'Feature Tour',
                                sender: 'Tester',
                                action: 'Recorre funcionalidades visibles, pantallas y capacidades principales del producto para entender que hace y donde podria romperse.',
                            },
                            {
                                name: 'Variable Tour',
                                sender: 'Tester',
                                action: 'Mantiene el flujo relativamente estable y cambia datos, configuraciones, perfiles o estados de entrada.',
                            },
                            {
                                name: 'Transaction Tour',
                                sender: 'Tester',
                                action: 'Sigue de punta a punta una secuencia de negocio para observar consistencia, persistencia y transiciones.',
                            },
                            {
                                name: 'Data Tour',
                                sender: 'Tester',
                                action: 'Inspecciona como el sistema crea, transforma, valida, persiste o muestra datos en distintos puntos.',
                            },
                            {
                                name: 'Structural Tour',
                                sender: 'Tester',
                                action: 'Observa menus, enlaces, modulos, dependencias y posibles zonas ocultas o poco transitadas del producto.',
                            },
                        ],
                    },
                    {
                        type: 'grid-cards',
                        title: 'Que busca cada tour',
                        cards: [
                            {
                                title: 'Feature Tour',
                                color: '#7dd3fc',
                                text: 'Sirve para construir mapa del producto: capacidades principales, areas visibles, zonas criticas y huecos funcionales obvios.'
                            },
                            {
                                title: 'Variable Tour',
                                color: '#38bdf8',
                                text: 'Busca fallos provocados por cambios en inputs, perfiles, configuraciones, permisos, idioma, formato o volumen.'
                            },
                            {
                                title: 'Transaction Tour',
                                color: '#22d3ee',
                                text: 'Se enfoca en secuencias de negocio: crear, editar, confirmar, revertir, cancelar, pagar, notificar, sincronizar.'
                            },
                            {
                                title: 'Data Tour',
                                color: '#f59e0b',
                                text: 'Sirve para descubrir transformaciones incorrectas, inconsistencias, validaciones debiles o problemas de integridad.'
                            },
                            {
                                title: 'Structural Tour',
                                color: '#fb7185',
                                text: 'Revela rutas ocultas, modulos olvidados, enlaces rotos, dependencias internas o comportamientos incoherentes entre areas.'
                            }
                        ],
                    },
                    {
                        type: 'comparisonTable',
                        title: 'Tour y tipo de defecto que suele revelar',
                        headers: ['Tour', 'Pregunta dominante', 'Defectos frecuentes'],
                        rows: [
                            ['Feature', 'Que hace el producto y donde estan sus zonas principales?', 'Flujos faltantes, funciones rotas, incoherencia visible'],
                            ['Variable', 'Que cambia si altero datos o contexto?', 'Validaciones debiles, reglas inconsistentes, problemas de formato'],
                            ['Transaction', 'Que pasa durante una secuencia completa?', 'Estados corruptos, persistencia fallida, pasos que se rompen'],
                            ['Data', 'Como viajan y se transforman los datos?', 'Calculos incorrectos, truncamiento, desincronizacion'],
                            ['Structural', 'Que partes del producto quedan fuera del camino feliz?', 'Navegacion rota, dependencias ocultas, modulos olvidados'],
                        ],
                    },
                    {
                        type: 'text',
                        title: 'Ejemplo aplicado: una plataforma de viajes',
                        content:
                            'Imagina un sistema de reservas tipo <strong>Mercury Tours</strong>. Un <strong>feature tour</strong> te ayudaria a identificar login, busqueda, seleccion y checkout. Un <strong>variable tour</strong> cambiaria origen, destino, idioma, clase de viaje, tipo de pasajero o metodo de pago. Un <strong>transaction tour</strong> seguiria el flujo completo desde busqueda hasta confirmacion. Un <strong>data tour</strong> observaria montos, tasas, moneda, fechas y datos del pasajero. Un <strong>structural tour</strong> miraria menus secundarios, ayuda, enlaces, historial o configuraciones menos visibles.\n\nLa clave no es hacer todos siempre, sino elegir el que mas evidencia promete segun la pregunta que tienes sobre el producto.',
                    },
                    {
                        type: 'comparisonTable',
                        title: 'Tour adecuado segun objetivo',
                        headers: ['Objetivo de QA', 'Tour inicial recomendado', 'Por que'],
                        rows: [
                            ['Entender rapidamente que hace el producto', 'Feature Tour', 'Da un mapa funcional base antes de profundizar'],
                            ['Forzar variaciones de perfil, idioma o configuracion', 'Variable Tour', 'Mantiene el flujo y cambia el contexto para revelar inconsistencias'],
                            ['Comprobar una secuencia de negocio completa', 'Transaction Tour', 'Permite validar persistencia, estados y transiciones'],
                            ['Revisar integridad de montos, fechas o persistencia', 'Data Tour', 'Centra la observacion en transformaciones y consistencia'],
                            ['Buscar rutas olvidadas o modulos poco transitados', 'Structural Tour', 'Sirve para sacar a la luz navegacion oculta y dependencias'],
                        ],
                    },
                    {
                        type: 'calloutGroup',
                        title: 'Malo vs mejor al elegir tours',
                        variant: 'example',
                        items: [
                            {
                                icon: 'xCircle',
                                title: 'Malo',
                                text: 'Elegir tours por costumbre: <em>siempre arranco con feature tour aunque lo que me preocupa son combinaciones de datos</em>.',
                            },
                            {
                                icon: 'checkCircle',
                                title: 'Mejor',
                                text: 'Elegir el tour por la pregunta dominante: <em>quiero ver como cambian las reglas al alternar moneda, cupon y tipo de pasajero, asi que empiezo con variable y data tour</em>.',
                            },
                            {
                                icon: 'lightbulb',
                                title: 'Tip operativo',
                                text: 'Si dudas entre dos tours, declara uno como principal y otro como complemento. Eso mantiene foco sin perder cobertura lateral.',
                            },
                        ],
                    },
                    {
                        type: 'exercise',
                        title: 'Ejercicio opcional: escoge el tour correcto',
                        prompt:
                            'Para una app de delivery con registro, carrito, cupones y seguimiento de pedido, propone que tour usarías primero para cada uno de estos objetivos: entender el producto, forzar errores de validacion y revisar el flujo completo de compra.',
                        hints: [
                            'Relaciona el objetivo con la pregunta dominante del tour.',
                            'Puedes repetir un mismo tour si justificas bien por que es el mejor primero.',
                        ],
                        expectedOutput:
                            'Una resolucion razonable seria: para entender el producto, empezar con Feature Tour; para forzar errores de validacion, usar Variable Tour y apoyarse en Data Tour; para revisar el flujo completo de compra, usar Transaction Tour. Si el estudiante justifica otra secuencia con buena logica de observacion, tambien puede ser valida.',
                        reflection:
                            'Elegir un tour correcto vale mas que recorrer el producto sin una hipotesis clara. Lo importante no es el nombre del tour, sino la relacion entre objetivo, recorrido y hallazgos esperables.',
                    },
                ],
                conclusion:
                    'Los tours vuelven visible la disciplina dentro de la exploracion. Cuando los dominas, ya no solo exploras: explicas cobertura, justificas foco y produces evidencia mas util para transformar exploracion en estrategia.',
            },
        },
        {
            id: 'sqe2-session-based-charters',
            title: 'Session-Based Exploratory Testing y Test Charters',
            subtitle: 'Estructura sesiones exploratorias con foco, evidencia y debrief util para el equipo',
            type: 'Teoría',
            difficulty: 'Intermedio Inicial',
            duration: '25-35 min',
            tags: ['Session Based Testing', 'Test Charter', 'Semana 1', 'QA'],
            learningFeatures: ['Simulacion', 'Plantilla mental', 'Ejercicio'],
            content: {
                intro:
                    'Explorar bien no solo exige curiosidad; tambien exige control. <strong>Session-Based Exploratory Testing</strong> agrega esa capa operativa. En lugar de una exploracion abierta sin marco temporal, se trabaja en sesiones con un objetivo concreto, tiempo acotado, evidencia capturada y un cierre tipo <em>debrief</em> para convertir observaciones en aprendizaje compartido. En el centro de esa dinamica aparece el <strong>test charter</strong>, que define la mision de la sesion sin convertirla en un script rigido.',
                objectives: [
                    'Comprender como una sesion exploratoria bien definida evita perdida de foco.',
                    'Distinguir test charter, notas de sesion, hallazgos y debrief como piezas distintas.',
                    'Saber redactar un charter lo bastante claro para orientar, pero no tan rigido que bloquee la exploracion.',
                    'Reconocer que informacion minima debe conservarse para que los hallazgos sean reutilizables.',
                ],
                sections: [
                    {
                        type: 'calloutGroup',
                        title: 'Que aporta el enfoque por sesiones',
                        variant: 'info',
                        items: [
                            {
                                icon: 'calendar',
                                title: 'Tiempo delimitado',
                                text: 'La sesion obliga a concentrar esfuerzo en un objetivo durante un periodo concreto, en lugar de navegar indefinidamente.',
                            },
                            {
                                icon: 'book',
                                title: 'Evidencia mas util',
                                text: 'Al existir un charter y notas, es mucho mas facil explicar que se intento cubrir, que se encontro y que queda abierto.',
                            },
                            {
                                icon: 'users',
                                title: 'Aprendizaje compartido',
                                text: 'El debrief permite convertir experiencia individual del tester en conocimiento util para QA, desarrollo y producto.',
                            },
                        ],
                    },
                    {
                        type: 'text',
                        title: 'Que es una sesion exploratoria',
                        content:
                            'Una sesion exploratoria es un bloque de trabajo deliberado donde el tester recibe o define una <strong>mision</strong>, explora el sistema durante un tiempo acotado y registra observaciones sobre comportamiento, riesgos, dudas y defectos. No busca demostrar cobertura exhaustiva por si sola; busca generar informacion de alta calidad en torno a un objetivo.\n\nEse objetivo vive en el <strong>test charter</strong>. El charter no enumera clic por clic. En cambio, indica que parte del producto se investigara, bajo que perspectiva, que riesgo se sospecha y que evidencia seria valiosa obtener. Por eso se parece mas a una brujula que a un libreto.',
                    },
                    {
                        type: 'process',
                        title: 'Flujo de una sesion con charter',
                        desc: 'Sigue el ciclo completo desde la definicion de la mision hasta el debrief del hallazgo.',
                        simType: 'qa-session-charter',
                        simLayout: 'stacked',
                        observe: [
                            'El charter alinea el foco antes de tocar el producto.',
                            'Las notas no sustituyen el bug report; preparan la evidencia para decidir que vale la pena formalizar.',
                            'El debrief convierte una exploracion individual en una conversacion de equipo.',
                        ],
                        steps: [
                            {
                                name: 'Definir charter',
                                sender: 'QA / Lead',
                                action: 'Se especifica el objetivo de la sesion, el alcance, los riesgos sospechados y el tipo de evidencia esperada.',
                            },
                            {
                                name: 'Ejecutar la exploracion',
                                sender: 'Tester',
                                action: 'Se navega el producto siguiendo el foco del charter, ajustando hipotesis segun lo observado.',
                            },
                            {
                                name: 'Tomar notas',
                                sender: 'Tester',
                                action: 'Se registran datos usados, pasos relevantes, ideas, preguntas, defectos y zonas que requieren seguimiento.',
                            },
                            {
                                name: 'Consolidar hallazgos',
                                sender: 'Tester',
                                action: 'Se decide que hallazgos ameritan bug, test case futuro, aclaracion de negocio o nueva sesion.',
                            },
                            {
                                name: 'Debrief',
                                sender: 'Equipo',
                                action: 'Se revisa que se cubrio, que se aprendio, que riesgo queda abierto y que acciones siguientes se recomiendan.',
                            },
                        ],
                    },
                    {
                        type: 'grid-cards',
                        title: 'Campos utiles dentro de un charter',
                        cards: [
                            {
                                title: 'Mision',
                                color: '#67e8f9',
                                text: 'Describe en una frase que se quiere investigar. Debe ser concreta y observable.'
                            },
                            {
                                title: 'Alcance',
                                color: '#38bdf8',
                                text: 'Aclara modulos, roles, navegadores, datos o restricciones que delimitan la sesion.'
                            },
                            {
                                title: 'Riesgos sospechados',
                                color: '#f59e0b',
                                text: 'Expresa que podria salir mal o por que esa zona merece atencion especial.'
                            },
                            {
                                title: 'Oraculos o referencias',
                                color: '#22d3ee',
                                text: 'Indica contra que comparar el comportamiento: requisitos, reglas de negocio, versiones previas, criterio del PO.'
                            },
                            {
                                title: 'Evidencia esperada',
                                color: '#fb7185',
                                text: 'Aclara que tipo de salida seria util: hallazgos, preguntas, bugs, riesgos, capturas o notas de comportamiento.'
                            }
                        ],
                    },
                    {
                        type: 'comparisonTable',
                        title: 'Buena nota de sesion vs nota inutil',
                        headers: ['Aspecto', 'Nota util', 'Nota debil'],
                        rows: [
                            ['Contexto', 'Incluye build, entorno, datos y foco del charter', 'No aclara ni entorno ni alcance'],
                            ['Observacion', 'Describe comportamiento y evidencia', 'Dice solo “algo fallo”'],
                            ['Accion siguiente', 'Sugiere bug, aclaracion o nueva sesion', 'No deja claro que hacer despues'],
                            ['Reutilizacion', 'Sirve para debrief y seguimiento', 'No ayuda a nadie salvo al tester que la tomo'],
                        ],
                    },
                    {
                        type: 'calloutGroup',
                        title: 'Tips para redactar charters',
                        variant: 'example',
                        items: [
                            {
                                icon: 'target',
                                title: 'Hazlo verificable',
                                text: '“Explorar errores del checkout con cupones y cambio de moneda” es mucho mejor que “probar checkout”.',
                            },
                            {
                                icon: 'search',
                                title: 'Enfoca un riesgo',
                                text: 'Un charter gana calidad cuando explicita que sospecha: persistencia, validacion, permisos, estados, integraciones o UX.',
                            },
                            {
                                icon: 'box',
                                title: 'No lo conviertas en script',
                                text: 'Si el charter define cada clic exacto, deja de orientar y empieza a reemplazar la exploracion.',
                            },
                        ],
                    },
                    {
                        type: 'comparisonTable',
                        title: 'Review rapido: charter debil vs charter fuerte',
                        headers: ['Aspecto', 'Charter debil', 'Charter fuerte'],
                        rows: [
                            ['Mision', 'Probar recuperacion de contrasena', 'Explorar recuperacion de contrasena con tokens expirados, reenvio de correo y sesion previa activa'],
                            ['Riesgo', 'No se menciona', 'Sospecha de reuso incorrecto de token y mensajes ambiguos para el usuario'],
                            ['Evidencia esperada', 'No definida', 'Notas de comportamiento, pasos clave, capturas del mensaje y decision de si amerita bug o nuevo caso'],
                            ['Uso posterior', 'Dificil de revisar en debrief', 'Facilita entender que se cubrio, que se encontro y que queda abierto'],
                        ],
                    },
                    {
                        type: 'text',
                        title: 'Ejemplo guiado de sesion',
                        content:
                            'Supongamos una sesion de 45 minutos sobre recuperacion de contrasena. La <strong>mision</strong> es explorar expiracion de token y reenvio de correo. El <strong>alcance</strong> incluye web desktop y cuentas activas con correo valido. El <strong>riesgo sospechado</strong> es que el sistema permita reutilizar enlaces vencidos o muestre mensajes inconsistentes entre pantalla y correo. Durante la sesion, el tester genera un token, espera su vencimiento, solicita un segundo correo, intenta reutilizar el primero y documenta que el producto invalida el enlace anterior pero conserva una pantalla cacheada con mensaje confuso. En el <strong>debrief</strong>, el equipo decide abrir un bug por claridad del mensaje y crear un test case formal para expiracion de enlaces.',
                    },
                    {
                        type: 'exercise',
                        title: 'Ejercicio opcional: redacta un charter',
                        prompt:
                            'Escribe un test charter para explorar el flujo de recuperacion de contrasena de una plataforma educativa. Incluye mision, alcance, riesgo sospechado y evidencia esperada.',
                        hints: [
                            'Piensa en correo no recibido, tokens expirados, mensajes ambiguos o sesiones previas abiertas.',
                            'Haz que el charter sea breve, pero suficientemente concreto.',
                        ],
                        expectedOutput:
                            'Una respuesta fuerte deberia verse asi: mision, explorar recuperacion de contrasena cuando el token expira y el usuario solicita reenvio; alcance, cuentas activas en web con correo valido; riesgo sospechado, enlaces reutilizables o mensajes ambiguos; evidencia esperada, notas, capturas y decision sobre bugs o casos formales. No hace falta copiar ese texto literal, pero si cubrir esas cuatro piezas.',
                        reflection:
                            'Un charter fuerte dirige la exploracion sin quitarle capacidad de descubrir. Si tu texto ya parece una lista de clics, lo rigidizaste demasiado; si parece un titulo generico, quedo demasiado abierto.',
                    },
                ],
                conclusion:
                    'Session-Based Exploratory Testing convierte una buena intuicion exploratoria en un trabajo gestionable. Con charters y debrief, la exploracion deja de depender de memoria individual y empieza a integrarse con el proceso formal de QA.',
            },
        },
        {
            id: 'sqe2-scripted-transition',
            title: 'Scripted Testing y transicion a Test Cases',
            subtitle: 'Del aprendizaje exploratorio a la ejecucion repetible y auditable',
            type: 'Teoría',
            difficulty: 'Básico / Intermedio',
            duration: '20-30 min',
            tags: ['Scripted Testing', 'Test Cases', 'Semana 2', 'QA'],
            learningFeatures: ['Comparativa', 'Checklist', 'Ejemplo'],
            content: {
                intro:
                    'A medida que el producto madura, el equipo necesita mas que hallazgos interesantes: necesita <strong>repetibilidad</strong>, trazabilidad y una forma clara de verificar regresiones. Ahi entra el <strong>scripted testing</strong>. No reemplaza el valor de explorar; lo complementa. La transicion correcta consiste en convertir conocimiento descubierto en escenarios ejecutables por cualquier tester con el mismo criterio de aceptacion.',
                objectives: [
                    'Comprender que problema operativo resuelve scripted testing.',
                    'Comparar exploratory y scripted sin caricaturizar ninguno de los dos enfoques.',
                    'Entender como un hallazgo exploratorio se transforma en prueba repetible.',
                    'Reconocer cuando conviene usar estrategia hibrida en lugar de elegir un unico enfoque.',
                ],
                sections: [
                    {
                        type: 'calloutGroup',
                        title: 'Idea de fondo',
                        variant: 'info',
                        items: [
                            {
                                icon: 'refresh-cw',
                                title: 'Repetibilidad',
                                text: 'Si un flujo debe validarse en cada build o release, depender solo de memoria exploratoria es insuficiente.',
                            },
                            {
                                icon: 'users',
                                title: 'Trabajo en equipo',
                                text: 'El scripted testing permite que varias personas ejecuten el mismo criterio, comparen resultados y mantengan historial.',
                            },
                            {
                                icon: 'shield',
                                title: 'Control de regresion',
                                text: 'Cuando una funcionalidad ya es critica y estable, conviene formalizarla para vigilarla release tras release.',
                            },
                        ],
                    },
                    {
                        type: 'text',
                        title: 'Que es scripted testing',
                        content:
                            'Scripted testing es un enfoque donde la prueba se ejecuta siguiendo pasos, datos, precondiciones y resultados esperados previamente definidos. Su gran ventaja es la <strong>consistencia operativa</strong>: permite repetir validaciones, comparar ejecuciones, entrenar nuevos testers y sostener evidencia auditada.\n\nEl problema aparece cuando se usa demasiado pronto o como unica estrategia. Si el producto aun es ambiguo, un script puede formalizar supuestos equivocados. Por eso, una practica madura suele recorrer este camino: <strong>exploro para aprender, luego formalizo para repetir</strong>.',
                    },
                    {
                        type: 'comparisonTable',
                        title: 'Exploratory vs Scripted',
                        headers: ['Aspecto', 'Exploratory', 'Scripted'],
                        rows: [
                            ['Pregunta principal', 'Que puedo aprender o descubrir?', 'Cumple exactamente con lo esperado?'],
                            ['Secuencia', 'Adaptativa', 'Predefinida'],
                            ['Mejor momento de uso', 'Etapas tempranas, ambiguedad, descubrimiento', 'Regresion, estabilidad, compliance, seguimiento'],
                            ['Artefacto central', 'Notas, charter, hallazgos', 'Test case, suite, evidencia de ejecucion'],
                        ],
                    },
                    {
                        type: 'checklist',
                        title: 'Como pasar de exploracion a script',
                        ordered: true,
                        items: [
                            'Identifica un flujo que se repite y cuya verificacion ya no deberia depender de intuicion individual.',
                            'Extrae de la exploracion las precondiciones, datos clave y observaciones estables.',
                            'Define pasos reproducibles, resultados esperados y criterio de exito o fallo.',
                            'Aclara que parte del comportamiento sigue abierta a exploracion futura y que parte queda formalizada.',
                            'Ejecuta el caso con otra persona o en otro entorno para comprobar que realmente es repetible.',
                        ],
                    },
                    {
                        type: 'featureCards',
                        title: 'Indicadores de que ya debes formalizar',
                        features: [
                            {
                                icon: 'checkCircle',
                                title: 'Flujo de alto valor',
                                desc: 'Checkout, login, facturacion, aprobacion o cualquier ruta de negocio que no puedes dejar sin cobertura estable.',
                            },
                            {
                                icon: 'calendar',
                                title: 'Ejecucion recurrente',
                                desc: 'Si el mismo flujo se verifica en cada build, sprint o release, conviene convertirlo en caso reutilizable.',
                            },
                            {
                                icon: 'tool',
                                title: 'Colaboracion multirol',
                                desc: 'Cuando QA, desarrollo o stakeholders necesitan evidencias comparables y seguimiento de estado.',
                            },
                            {
                                icon: 'activity',
                                title: 'Definicion de done',
                                desc: 'Cuando el equipo necesita criterios claros para decidir si una funcionalidad esta lista o no.',
                            },
                        ],
                    },
                    {
                        type: 'text',
                        title: 'Estrategia hibrida: la opcion madura',
                        content:
                            'Un equipo fuerte rara vez elige solo un extremo. Puede iniciar un sprint con exploracion focalizada para descubrir riesgos y, una vez que entiende mejor el flujo, convertir los escenarios mas valiosos en casos de prueba estables. Tambien puede ejecutar una suite guiada de regresion y reservar tiempo exploratorio para areas nuevas o sospechosas.\n\nLa pregunta madura no es <em>exploratory o scripted?</em>, sino <em>que parte del problema necesita aprendizaje y que parte necesita repeticion controlada?</em>.',
                    },
                    {
                        type: 'checklist',
                        title: 'Como formalizar una observacion en un test case util',
                        ordered: true,
                        items: [
                            'Limpia las notas exploratorias y separa hechos observados de ideas o sospechas.',
                            'Agrupa observaciones en escenarios: que condicion se prueba, con que datos y que riesgo cubre.',
                            'Formaliza solo aquello que vale la pena repetir en build, release o regresion.',
                            'Convierte cada escenario en pasos ejecutables y resultados observables.',
                            'Revisa si el caso es atomico o si mezcla demasiadas validaciones que deberian dividirse.',
                        ],
                    },
                    {
                        type: 'comparisonTable',
                        title: 'Ejemplo guiado: de notas exploratorias a test case',
                        headers: ['Fase', 'Contenido', 'Mejora obtenida'],
                        rows: [
                            ['Nota exploratoria', 'Con cupon vencido el checkout muestra error raro y a veces deja seguir', 'Hay hallazgo, pero todavia esta mezclado y poco repetible'],
                            ['Escenario formalizable', 'Usuario aplica cupon vencido durante checkout con carrito valido', 'Se define mejor la condicion dominante a repetir'],
                            ['Test case', 'Aplicar cupon vencido, validar rechazo, mensaje explicito y que el total no cambie', 'El comportamiento esperado ya es verificable y reusable'],
                        ],
                    },
                    {
                        type: 'calloutGroup',
                        title: 'Review de una mala transicion',
                        variant: 'warning',
                        items: [
                            {
                                icon: 'copy',
                                title: 'Duplicar hallazgos',
                                text: 'Copiar cada nota exploratoria como test case independiente suele inflar la suite con ruido y casos repetidos.',
                            },
                            {
                                icon: 'helpCircle',
                                title: 'Formalizar supuestos vagos',
                                text: 'Si todavia no sabes cual es la regla de negocio correcta, primero aclara esa duda antes de congelarla en un caso.',
                            },
                            {
                                icon: 'checkCircle',
                                title: 'Senal de buena formalizacion',
                                text: 'Otro tester puede ejecutar el caso y llegar a la misma conclusion sin necesitar que quien lo creo se lo explique en vivo.',
                            },
                        ],
                    },
                    {
                        type: 'exercise',
                        title: 'Ejercicio opcional: decide que formalizar',
                        prompt:
                            'Piensa en una app de banca movil. Elige dos flujos que mantendrias exploratorios por ahora y dos que convertirias de inmediato en scripted testing. Justifica cada decision.',
                        hints: [
                            'Relaciona tu respuesta con riesgo, estabilidad del flujo y necesidad de repeticion.',
                            'No olvides considerar impacto de negocio y posibilidad de regresion.',
                        ],
                        expectedOutput:
                            'En banca movil normalmente se formalizan pronto login, transferencias y pago de servicios porque concentran riesgo, uso recurrente y necesidad de regresion. En cambio, exploraciones sobre nueva personalizacion visual o una feature aun inestable de descubrimiento pueden quedarse un tiempo en modo exploratorio. Lo importante es justificar cada decision con riesgo, estabilidad y repetibilidad.',
                        reflection:
                            'Si tu respuesta formaliza todo de inmediato o deja todo exploratorio, probablemente te falta distinguir entre aprendizaje y control operativo.',
                    },
                ],
                conclusion:
                    'Scripted testing no compite con exploratory testing; llega despues de el y lo convierte en control operacional. Entender esa transicion es clave para producir cobertura real y no solo documentacion bonita.',
            },
        },
        {
            id: 'sqe2-test-cases-anatomia',
            title: 'Casos de prueba: anatomia, ciclo de vida y calidad',
            subtitle: 'Disena test cases claros, utiles y mantenibles para ejecucion y seguimiento',
            type: 'Teoría',
            difficulty: 'Intermedio',
            duration: '30-40 min',
            tags: ['Test Cases', 'TCMS', 'Semana 2', 'Semana 7', 'QA'],
            learningFeatures: ['Tabla', 'Checklist', 'Calidad'],
            content: {
                intro:
                    'Un test case bien escrito no es un formulario rellenado por costumbre. Es un artefacto de trabajo que debe ayudar a ejecutar, revisar, validar, reportar y aprender. Si esta mal escrito, desperdicia tiempo, confunde al equipo y vuelve opaca la calidad real del producto. Por eso conviene mirar un caso de prueba como una pieza de ingenieria: tiene estructura, ciclo de vida, criterios de calidad y uso operativo en herramientas de gestion.',
                objectives: [
                    'Reconocer los campos esenciales y opcionales de un test case profesional.',
                    'Comprender el ciclo de vida del caso de prueba desde su creacion hasta su mantenimiento.',
                    'Distinguir entre un caso claro y uno ambiguo o dificil de ejecutar.',
                    'Relacionar ejecucion, notas de validacion y trazabilidad dentro de una herramienta de gestion.',
                ],
                sections: [
                    {
                        type: 'calloutGroup',
                        title: 'Que debe lograr un buen test case',
                        variant: 'info',
                        items: [
                            {
                                icon: 'book',
                                title: 'Guiar sin ambiguedad',
                                text: 'Cualquier tester con el contexto correcto deberia poder ejecutar el caso y llegar a una conclusion comparable.',
                            },
                            {
                                icon: 'target',
                                title: 'Conectar con negocio',
                                text: 'No prueba pasos aislados porque si; prueba comportamientos ligados a reglas, requisitos o riesgos reales.',
                            },
                            {
                                icon: 'refresh-cw',
                                title: 'Resistir mantenimiento',
                                text: 'Debe poder actualizarse cuando el producto cambia sin obligar a reescribirlo desde cero cada sprint.',
                            },
                        ],
                    },
                    {
                        type: 'text',
                        title: 'Anatomia de un test case',
                        content:
                            'Aunque las herramientas varian, un caso de prueba suele incluir <strong>titulo, descripcion, requerimientos asociados, prioridad, precondiciones, pasos, datos de prueba, resultado esperado, estado y notas</strong>. Cada campo responde a una necesidad distinta.\n\nEl titulo identifica el objetivo del caso. La descripcion da contexto. Los requerimientos conectan el caso con negocio o especificacion. La prioridad ayuda a decidir que ejecutar primero. Los pasos permiten repetir la accion. El resultado esperado define el criterio de aceptacion. El estado y las notas capturan la vida operativa del caso a traves del tiempo.',
                    },
                    {
                        type: 'grid-cards',
                        title: 'Campos mas importantes',
                        cards: [
                            {
                                title: 'Titulo',
                                color: '#67e8f9',
                                text: 'Debe ser breve, especifico y entendible. En esta materia se recomienda que <strong>empiece con un verbo</strong>, por ejemplo verificar, validar o comprobar, y luego comunique objeto y condicion relevante.'
                            },
                            {
                                title: 'Descripcion',
                                color: '#38bdf8',
                                text: 'Aporta contexto y objetivo del caso. No repite el titulo; explica que pretende validar y por que importa.'
                            },
                            {
                                title: 'Requerimientos',
                                color: '#22d3ee',
                                text: 'Vinculan el caso con historias, reglas o criterios de aceptacion para sostener trazabilidad.'
                            },
                            {
                                title: 'Pasos',
                                color: '#f59e0b',
                                text: 'Deben ser claros, secuenciales y ejecutables. Si un paso es ambiguo, la ejecucion deja de ser comparable.'
                            },
                            {
                                title: 'Resultado esperado',
                                color: '#fb7185',
                                text: 'Especifica que debe observarse si el sistema se comporta correctamente. Debe ser verificable, no subjetivo.'
                            },
                            {
                                title: 'Estado y notas',
                                color: '#a78bfa',
                                text: 'Permiten registrar ejecucion, validacion y contexto historico, especialmente en ciclos continuos.'
                            }
                        ],
                    },
                    {
                        type: 'checklist',
                        title: 'Ciclo de vida de un test case',
                        ordered: true,
                        items: [
                            'Identificacion de la necesidad de prueba a partir de requisito, riesgo o hallazgo.',
                            'Diseno y redaccion inicial del caso.',
                            'Revision por QA lead, peer o stakeholder segun proceso del equipo.',
                            'Ejecucion durante sprint, build o release.',
                            'Registro del resultado: passed, failed, blocked u otro estado definido por la herramienta.',
                            'Mantenimiento del caso cuando cambia la funcionalidad, el entorno o la estrategia.',
                        ],
                    },
                    {
                        type: 'comparisonTable',
                        title: 'Resultado esperado util vs resultado esperado debil',
                        headers: ['Tipo', 'Ejemplo', 'Problema o ventaja'],
                        rows: [
                            ['Debil', '“El sistema funciona bien”', 'No define que observar ni como decidir si paso o fallo'],
                            ['Debil', '“Muestra mensaje correcto”', 'No dice cual es el mensaje ni bajo que condicion'],
                            ['Fuerte', '“El sistema muestra “Pago aprobado” y registra la orden con estado Confirmada”', 'Entrega criterio claro y verificable'],
                            ['Fuerte', '“El total cambia de 50 a 70 al agregar un segundo producto de 20”', 'Permite validar comportamiento especifico'],
                        ],
                    },
                    {
                        type: 'featureCards',
                        title: 'Heuristicas de calidad para test cases',
                        features: [
                            {
                                icon: 'checkCircle',
                                title: 'Atomico',
                                desc: 'Cada caso deberia probar una idea dominante y no mezclar demasiados objetivos en una sola ejecucion.',
                            },
                            {
                                icon: 'layers',
                                title: 'Trazable',
                                desc: 'Debe vincularse a requisito, historia, bug o riesgo para evitar pruebas huerfanas.',
                            },
                            {
                                icon: 'eye',
                                title: 'Observable',
                                desc: 'El resultado esperado debe poder verificarse con evidencia real, no con percepciones vagas.',
                            },
                            {
                                icon: 'tool',
                                title: 'Mantenible',
                                desc: 'Debe sobrevivir cambios razonables del producto sin volverse inutil o carisimo de actualizar.',
                            },
                        ],
                    },
                    {
                        type: 'comparisonTable',
                        title: 'Titulos de test case: mal titulo vs titulo aceptable vs buen titulo',
                        headers: ['Nivel', 'Ejemplo', 'Por que'],
                        rows: [
                            ['Malo', 'Login', 'No empieza con verbo y no aclara que comportamiento concreto se valida'],
                            ['Aceptable', 'Validar login con credenciales validas', 'Ya empieza con verbo y menciona accion y condicion, pero aun puede ser demasiado amplio'],
                            ['Bueno', 'Verificar que el usuario activo acceda al dashboard con correo y contrasena validos', 'Empieza con verbo y deja claro condicion y resultado dominante'],
                            ['Bueno', 'Comprobar que el carrito recalcule el total al eliminar un item con cupon aplicado', 'Empieza con verbo y permite entender exactamente que se valida antes de leer los pasos'],
                        ],
                    },
                    {
                        type: 'calloutGroup',
                        title: 'Regla practica para nombrar test cases',
                        variant: 'example',
                        items: [
                            {
                                icon: 'checkCircle',
                                title: 'Empieza con verbo',
                                text: 'Para mantener consistencia con la metodologia de la materia, el titulo debe arrancar con un verbo de accion como <strong>verificar</strong>, <strong>validar</strong> o <strong>comprobar</strong>.',
                            },
                            {
                                icon: 'target',
                                title: 'Luego describe el comportamiento',
                                text: 'Despues del verbo, nombra que comportamiento esperas validar y bajo que condicion importante.',
                            },
                            {
                                icon: 'xCircle',
                                title: 'Evita verbos vagos o titulos nominales',
                                text: 'Titulos como <em>Login</em>, <em>Carrito</em> o <em>Probar modulo X</em> no ayudan porque no expresan una validacion precisa.',
                            },
                        ],
                    },
                    {
                        type: 'text',
                        title: 'Ejemplos guiados de test cases bien escritos',
                        content:
                            '<strong>Login:</strong> titulo, <em>Verificar que el usuario activo acceda al dashboard con credenciales validas</em>; precondicion, usuario activo existente; pasos, ingresar correo y contrasena validos y presionar iniciar sesion; esperado, redireccion al dashboard, sesion creada y nombre visible en header.\n\n<strong>Validacion:</strong> titulo, <em>Validar que el registro rechace telefonos con menos de 8 digitos</em>; esperado, mensaje especifico y bloqueo del envio.\n\n<strong>Regla de negocio:</strong> titulo, <em>Comprobar que el checkout aplique el cupon del 10 por ciento solo a productos elegibles</em>; esperado, descuento parcial correcto y total actualizado.\n\n<strong>Error handling:</strong> titulo, <em>Verificar que la transferencia conserve el formulario cuando la API de confirmacion responde timeout</em>; esperado, mensaje claro, sin duplicar debito y con opcion de reintento.\n\n<strong>Flujo multiestado:</strong> titulo, <em>Validar que la solicitud pase de borrador a enviada solo cuando los adjuntos requeridos estan presentes</em>; esperado, cambio de estado, registro en historial y bloqueo si falta evidencia.',
                    },
                    {
                        type: 'checklist',
                        title: 'Checklist de calidad antes de subir un test case',
                        ordered: true,
                        items: [
                            'El titulo comunica modulo, condicion y comportamiento dominante.',
                            'La precondicion evita ambiguedades sobre estado del sistema o datos.',
                            'Los pasos son ejecutables y no esconden validaciones criticas.',
                            'El resultado esperado es observable, especifico y verificable.',
                            'El caso cubre una idea principal y no mezcla demasiados objetivos.',
                            'Existe trazabilidad con requisito, riesgo, historia o bug relacionado.',
                        ],
                    },
                    {
                        type: 'calloutGroup',
                        title: 'Review linea por linea de un caso debil',
                        variant: 'warning',
                        items: [
                            {
                                icon: 'xCircle',
                                title: 'Titulo pobre',
                                text: '<em>Verificar que el carrito funciona</em> empieza con verbo, pero sigue siendo pobre porque no delimita que comportamiento se esta evaluando.',
                            },
                            {
                                icon: 'helpCircle',
                                title: 'Pasos demasiado amplios',
                                text: 'Si un paso dice <em>hacer checkout</em>, esconde varias acciones y vuelve dificil comparar ejecuciones.',
                            },
                            {
                                icon: 'checkCircle',
                                title: 'Version mejorada',
                                text: 'Mejor seria: <em>Comprobar que el carrito actualice el total al eliminar un item con cupon activo</em>, con pasos breves y esperado que indique total anterior, nuevo total y persistencia del cupon.',
                            },
                        ],
                    },
                    {
                        type: 'calloutGroup',
                        title: 'Errores frecuentes al escribir casos',
                        variant: 'warning',
                        items: [
                            {
                                icon: 'xCircle',
                                title: 'Titulos genericos',
                                text: '“Probar login” cumple la regla de empezar con verbo, pero sigue siendo demasiado generico. El titulo debe arrancar con verbo y ademas apuntar al comportamiento concreto.',
                            },
                            {
                                icon: 'helpCircle',
                                title: 'Pasos escondiendo validaciones',
                                text: 'Si el criterio de aceptacion no aparece explicito en el resultado esperado, el caso queda incompleto.',
                            },
                            {
                                icon: 'helpCircle',
                                title: 'Olvidar notas de validacion',
                                text: 'En ejecuciones continuas, las notas ayudan a conservar build, entorno, variaciones y observaciones relevantes.',
                            },
                        ],
                    },
                    {
                        type: 'exercise',
                        title: 'Ejercicio opcional: mejora un caso debil',
                        prompt:
                            'Reescribe un test case pobre como “Verificar que el carrito funciona” para convertirlo en un caso profesional con titulo, pasos resumidos y resultado esperado verificable.',
                        hints: [
                            'Escoge un comportamiento puntual, por ejemplo actualizar total, eliminar item o aplicar cupon.',
                            'No mezcles varias validaciones grandes en el mismo caso.',
                        ],
                        expectedOutput:
                            'Una solucion modelo podria ser: titulo, Comprobar que el carrito actualice el total al eliminar un item con cupon activo; pasos, agregar dos productos, aplicar cupon, eliminar uno; esperado, el total se recalcula manteniendo el descuento valido y sin eliminar el item restante. La clave es convertir una frase vaga en un comportamiento puntual y verificable, empezando por un verbo claro.',
                        reflection:
                            'Si tu version mejorada todavia obliga al lector a adivinar que observar, el caso aun no esta listo para una suite profesional.',
                    },
                ],
                conclusion:
                    'Los test cases son memoria operacional del equipo. Cuando estan bien escritos, permiten ejecutar, revisar, validar y aprender. Cuando estan mal escritos, solo ocupan espacio en la herramienta. Por eso la calidad del caso importa tanto como la funcionalidad que intenta cubrir.',
            },
        },
        {
            id: 'sqe2-taxonomia-tecnicas',
            title: 'Taxonomia de tecnicas de prueba',
            subtitle: 'Mapa conceptual para elegir el enfoque correcto segun objetivo, riesgo y contexto',
            type: 'Teoría',
            difficulty: 'Intermedio',
            duration: '30-40 min',
            tags: ['Testing Techniques', 'Taxonomia', 'Semana 2', 'QA'],
            learningFeatures: ['Mapa conceptual', 'Tabla', 'Criterio de seleccion'],
            content: {
                intro:
                    'Uno de los errores mas comunes en QA es hablar de “hacer pruebas” como si todo testeo fuera una sola cosa. La realidad es distinta: existen multiples <strong>tecnicas y enfoques</strong>, y cada una responde mejor a determinadas preguntas. Una taxonomia de tecnicas no es una lista academica para memorizar; es un mapa para decidir con criterio que conviene usar y por que.',
                objectives: [
                    'Organizar mentalmente las principales tecnicas vistas en la materia.',
                    'Diferenciar tecnicas estaticas y dinamicas, funcionales y no funcionales, positivas y negativas.',
                    'Relacionar cada enfoque con la pregunta que intenta responder.',
                    'Evitar mezclar categorias distintas como si fueran equivalentes.',
                ],
                sections: [
                    {
                        type: 'calloutGroup',
                        title: 'Por que importa una taxonomia',
                        variant: 'info',
                        items: [
                            {
                                icon: 'layers',
                                title: 'Orden conceptual',
                                text: 'Te ayuda a no tratar todas las pruebas como la misma actividad con distinto nombre.',
                            },
                            {
                                icon: 'target',
                                title: 'Eleccion mas precisa',
                                text: 'Cuando entiendes la categoria, eliges mejor la tecnica y justificas mejor la cobertura.',
                            },
                            {
                                icon: 'users',
                                title: 'Lenguaje comun',
                                text: 'Facilita conversaciones entre QA, desarrollo, liderazgo tecnico y negocio.',
                            },
                        ],
                    },
                    {
                        type: 'text',
                        title: 'La idea base: cada tecnica responde una pregunta distinta',
                        content:
                            'Una tecnica de prueba es una forma sistematica de seleccionar condiciones, datos o actividades para evaluar un producto. Algunas se enfocan en <strong>inspeccionar artefactos sin ejecutar software</strong>; otras en <strong>ejecutar y observar comportamiento</strong>. Algunas verifican funcionalidad; otras rendimiento, seguridad, accesibilidad o usabilidad. Algunas buscan confirmar comportamiento esperado; otras fuerzan condiciones negativas o inesperadas.\n\nEl error conceptual tipico es comparar categorias que viven en planos distintos. Por ejemplo, “funcional” y “estatica” no son opuestos directos; una describe que se valida, la otra como se trabaja.',
                    },
                    {
                        type: 'comparisonTable',
                        title: 'Tecnicas estaticas vs dinamicas',
                        headers: ['Aspecto', 'Estaticas', 'Dinamicas'],
                        rows: [
                            ['Ejecucion del software', 'No requieren ejecutar el sistema', 'Observan comportamiento durante ejecucion'],
                            ['Artefactos tipicos', 'Requisitos, codigo, diseno, documentos', 'Aplicacion, API, entorno, datos, resultados'],
                            ['Objetivo frecuente', 'Detectar defectos tempranos, inconsistencias y huecos', 'Verificar comportamiento real y efectos en tiempo de ejecucion'],
                            ['Ejemplos', 'Review, inspeccion, analisis de documentos', 'Funcionales, no funcionales, exploratorias, domain testing'],
                        ],
                    },
                    {
                        type: 'featureCards',
                        title: 'Categorias practicas que debes dominar',
                        features: [
                            {
                                icon: 'checkCircle',
                                title: 'Funcionales',
                                desc: 'Validan que el sistema haga lo que deberia hacer segun requisitos, reglas de negocio o criterios de aceptacion.',
                            },
                            {
                                icon: 'activity',
                                title: 'No funcionales',
                                desc: 'Validan atributos como rendimiento, seguridad, accesibilidad, confiabilidad o usabilidad.',
                            },
                            {
                                icon: 'target',
                                title: 'Positivas y negativas',
                                desc: 'Las positivas confirman caminos validos; las negativas fuerzan errores, rechazos o manejo anomalo.',
                            },
                            {
                                icon: 'lightbulb',
                                title: 'Basadas en experiencia',
                                desc: 'Se apoyan en intuicion profesional, patrones de falla, tours, heuristicas y conocimiento del dominio.',
                            },
                            {
                                icon: 'book',
                                title: 'Basadas en uso',
                                desc: 'Casos de uso, escenarios, journeys y flujos de negocio completos.',
                            },
                        ],
                    },
                    {
                        type: 'comparisonTable',
                        title: 'Que pregunta responde cada enfoque',
                        headers: ['Enfoque', 'Pregunta dominante', 'Cuando aporta mas valor'],
                        rows: [
                            ['Funcional', 'Hace lo correcto?', 'Reglas de negocio, flujos principales, acceptance'],
                            ['No funcional', 'Lo hace con la calidad operativa esperada?', 'Carga, seguridad, UX, estabilidad'],
                            ['Positiva', 'El camino valido funciona?', 'Smoke, happy paths, confirmacion base'],
                            ['Negativa', 'Reacciona bien ante error o uso invalido?', 'Validaciones, robustez, seguridad, manejo de errores'],
                            ['Escenarios / casos de uso', 'El flujo real del usuario se sostiene de punta a punta?', 'Procesos de negocio y journeys completos'],
                        ],
                    },
                    {
                        type: 'checklist',
                        title: 'Preguntas para escoger tecnica',
                        ordered: true,
                        items: [
                            'Que riesgo intento reducir: funcional, tecnico, operativo, de negocio o de experiencia?',
                            'Necesito descubrir, confirmar, comparar o estresar el sistema?',
                            'Estoy evaluando un artefacto antes de ejecutar o un comportamiento ya corriendo?',
                            'El problema dominante es la entrada, la secuencia, el entorno, la carga o la robustez?',
                            'La evidencia que necesito es de cumplimiento, de aprendizaje o de priorizacion?',
                        ],
                    },
                    {
                        type: 'calloutGroup',
                        title: 'Confusiones tipicas',
                        variant: 'warning',
                        items: [
                            {
                                icon: 'helpCircle',
                                title: 'Creer que positiva = suficiente',
                                text: 'Confirmar el camino feliz no dice nada serio sobre validaciones, robustez ni comportamiento bajo error.',
                            },
                            {
                                icon: 'helpCircle',
                                title: 'Usar no funcional como categoria residual',
                                text: 'No funcional no significa “lo otro”. Incluye atributos con enorme impacto real como rendimiento y seguridad.',
                            },
                            {
                                icon: 'xCircle',
                                title: 'Elegir tecnica por costumbre',
                                text: 'La tecnica debe responder una necesidad concreta, no una preferencia del tester.',
                            },
                        ],
                    },
                    {
                        type: 'comparisonTable',
                        title: 'Si tu problema es X, tecnica recomendada Y',
                        headers: ['Problema dominante', 'Tecnica o enfoque base', 'Por que ayuda'],
                        rows: [
                            ['El producto es ambiguo y aun no conoces sus riesgos reales', 'Exploratory testing', 'Permite aprender antes de congelar cobertura'],
                            ['Debes repetir validaciones criticas en cada release', 'Scripted testing con test cases', 'Aporta repetibilidad, trazabilidad y comparacion'],
                            ['Tienes poco tiempo y no puedes probar todo', 'Risk-Based Testing', 'Ordena el esfuerzo segun probabilidad e impacto'],
                            ['Una regla depende de rangos, formatos o valores validos', 'Equivalencia y BVA', 'Reduce el dominio y concentra prueba en bordes utiles'],
                            ['Las fallas aparecen por interaccion de varias variables', 'Pairwise o combinatoria con restricciones', 'Cubre combinaciones relevantes sin explosion total'],
                        ],
                    },
                    {
                        type: 'calloutGroup',
                        title: 'Tips para elegir tecnica con criterio',
                        variant: 'example',
                        items: [
                            {
                                icon: 'target',
                                title: 'Empieza por la pregunta',
                                text: 'Primero define que quieres responder: descubrir, repetir, priorizar, cubrir entradas o comunicar un defecto. La tecnica sale de ahi.',
                            },
                            {
                                icon: 'xCircle',
                                title: 'Evita usar tecnicas por moda',
                                text: 'Aplicar pairwise o exploratory porque suena avanzado no sirve si el problema real es una regresion basica no formalizada.',
                            },
                            {
                                icon: 'checkCircle',
                                title: 'Mira el artefacto de salida',
                                text: 'Una buena eleccion tambien considera que necesitas producir: notas, test cases, matriz de riesgo, tabla de limites o bug report.',
                            },
                        ],
                    },
                    {
                        type: 'exercise',
                        title: 'Ejercicio opcional: clasifica con criterio',
                        prompt:
                            'Para una plataforma de aprendizaje online, clasifica cinco pruebas distintas en la taxonomia correcta: login exitoso, bloqueo por password invalido, carga de dashboard con 20 mil registros, inspeccion de criterios de aceptacion y recorrido completo de compra de curso.',
                        hints: [
                            'Una misma prueba puede pertenecer a mas de una dimension de clasificacion.',
                            'Explica no solo la etiqueta, sino la pregunta que responde.',
                        ],
                        expectedOutput:
                            'Una clasificacion fuerte podria verse asi: login exitoso, funcional y positiva; bloqueo por password invalido, funcional y negativa; carga de dashboard con 20 mil registros, no funcional de rendimiento; inspeccion de criterios de aceptacion, estatica; compra completa de curso, basada en escenario o caso de uso. El punto no es solo etiquetar, sino justificar que pregunta responde cada una.',
                        reflection:
                            'Si una prueba te parece imposible de clasificar, revisa si estas mezclando dimension, objetivo y tecnica como si fueran lo mismo.',
                    },
                ],
                conclusion:
                    'La taxonomia no es teoria decorativa: es lo que te permite elegir mejor. Cuando sabes que pregunta responde cada tecnica, dejas de “hacer pruebas” en abstracto y empiezas a construir una estrategia con intencion.',
            },
        },
        {
            id: 'sqe2-risk-based-testing',
            title: 'Risk-Based Testing (RBT)',
            subtitle: 'Prioriza cobertura donde la probabilidad y el impacto de falla importan mas',
            type: 'Teoría',
            difficulty: 'Intermedio',
            duration: '30-40 min',
            tags: ['RBT', 'Risk Based Testing', 'Semana 3', 'QA'],
            learningFeatures: ['Simulacion', 'Matriz', 'Trazabilidad'],
            content: {
                intro:
                    'El tiempo de testing nunca es infinito. Por eso QA necesita una forma defendible de decidir donde poner primero su energia. <strong>Risk-Based Testing</strong> resuelve justamente eso: prioriza actividades, tecnicas y casos de prueba segun la <strong>probabilidad</strong> de que algo falle y el <strong>impacto</strong> que esa falla tendria sobre producto, usuarios o proyecto. RBT no busca probar menos por comodidad; busca probar con mas sentido.',
                objectives: [
                    'Entender riesgo como combinacion de probabilidad e impacto dentro del testing.',
                    'Diferenciar riesgo de proyecto y riesgo de producto.',
                    'Aplicar el flujo de identificacion, analisis, priorizacion, mitigacion y trazabilidad de riesgos.',
                    'Traducir una evaluacion de riesgo a decisiones concretas de cobertura y secuencia de ejecucion.',
                ],
                sections: [
                    {
                        type: 'calloutGroup',
                        title: 'Punto de partida',
                        variant: 'info',
                        items: [
                            {
                                icon: 'target',
                                title: 'Idea clave',
                                text: 'RBT no dice “que es importante en abstracto”, sino <strong>que vale la pena probar primero dadas las consecuencias del fallo</strong>.',
                            },
                            {
                                icon: 'activity',
                                title: 'Dos ejes',
                                text: 'El riesgo aparece cuando se combinan probabilidad de ocurrencia e impacto del dano si efectivamente ocurre.',
                            },
                            {
                                icon: 'shield',
                                title: 'Meta realista',
                                text: 'No existe riesgo cero; el objetivo es reducir el <em>riesgo residual</em> del producto a un nivel aceptable para el negocio.',
                            },
                        ],
                    },
                    {
                        type: 'text',
                        title: 'Que es riesgo en testing',
                        content:
                            'En testing, el riesgo representa la posibilidad de que ocurra un evento adverso y el impacto negativo que ese evento tendria sobre objetivos como calidad, cronograma, presupuesto, reputacion, seguridad o experiencia del usuario. Por eso, una funcionalidad no solo importa por lo compleja que sea tecnicamente; importa tambien por el dano que generaria si falla.\n\nRBT toma esa idea y la convierte en plan de accion: identifica riesgos, los analiza, los prioriza y luego decide donde conviene concentrar tecnicas, tipos de pruebas, esfuerzo de ejecucion y profundidad de los test cases.',
                    },
                    {
                        type: 'featureCards',
                        title: 'Tipos de riesgo que debes separar',
                        features: [
                            {
                                icon: 'briefcase',
                                title: 'Riesgo de proyecto',
                                desc: 'Problemas que afectan calendario, presupuesto, recursos, experiencia del equipo o viabilidad de entrega.',
                            },
                            {
                                icon: 'package',
                                title: 'Riesgo de producto',
                                desc: 'Problemas que afectan funcionalidad, rendimiento, seguridad, accesibilidad, integracion o experiencia del usuario final.',
                            },
                            {
                                icon: 'users',
                                title: 'Riesgo de negocio',
                                desc: 'Consecuencias sobre ingresos, cumplimiento, clientes, reputacion o compromisos con stakeholders.',
                            },
                            {
                                icon: 'tool',
                                title: 'Riesgo tecnico',
                                desc: 'Integraciones complejas, deuda tecnica, experiencia limitada del equipo, entornos nuevos o componentes sensibles.',
                            },
                        ],
                    },
                    {
                        type: 'process',
                        title: 'Flujo basico de RBT',
                        desc: 'Observa como el riesgo deja de ser una intuicion vaga y se convierte en decisiones concretas de prueba.',
                        simType: 'qa-risk-matrix',
                        simLayout: 'stacked',
                        observe: [
                            'Identificar sin priorizar todavia solo crea listas; la matriz convierte la lista en decisiones.',
                            'RBT conecta riesgo con tecnicas, no solo con colores de semaforo.',
                            'Es un proceso iterativo: cambia si cambia el producto o si aparecen nuevos hallazgos.',
                        ],
                        steps: [
                            {
                                name: 'Identificacion',
                                sender: 'QA + equipo',
                                action: 'Se listan riesgos revisando requisitos, historias, arquitectura, contexto de negocio, experiencia previa y opinion de expertos.',
                            },
                            {
                                name: 'Analisis',
                                sender: 'QA / stakeholders',
                                action: 'Se evalua probabilidad e impacto usando criterios cualitativos o cuantitativos.',
                            },
                            {
                                name: 'Priorizacion',
                                sender: 'Equipo',
                                action: 'Se decide que riesgos merecen mayor esfuerzo, profundidad y urgencia de prueba.',
                            },
                            {
                                name: 'Mitigacion',
                                sender: 'QA + desarrollo',
                                action: 'Se definen tecnicas, tipos de pruebas, cobertura y acciones adicionales para reducir los riesgos mas altos.',
                            },
                            {
                                name: 'Trazabilidad',
                                sender: 'QA',
                                action: 'Se vincula cada riesgo con test cases, actividades y resultados para revisar que quedo cubierto y que no.',
                            },
                        ],
                    },
                    {
                        type: 'comparisonTable',
                        title: 'Ejemplo de lectura de una matriz de riesgo',
                        headers: ['Riesgo', 'Probabilidad', 'Impacto', 'Decision de testing'],
                        rows: [
                            ['Calculo incorrecto de montos en facturacion', 'Alta', 'Alta', 'Cobertura funcional profunda, limites, combinaciones y regression prioritaria'],
                            ['UI lenta en dashboard con grandes volumenes', 'Media', 'Alta', 'Pruebas de rendimiento y seguimiento de tiempos de carga'],
                            ['Equipo sin experiencia con biometria', 'Alta', 'Media/Alta', 'Plan detallado de integracion y escenarios reales de dispositivo'],
                            ['Feature cosmético poco usado', 'Baja', 'Baja', 'Cobertura minima o diferida segun capacidad del sprint'],
                        ],
                    },
                    {
                        type: 'checklist',
                        title: 'Como convertir riesgo en cobertura',
                        ordered: true,
                        items: [
                            'Define criterios comunes para probabilidad e impacto; sin eso la matriz se vuelve opinion pura.',
                            'Relaciona cada riesgo con el componente y requisito afectados.',
                            'Decide que tipo de prueba reduce mejor ese riesgo: funcional, rendimiento, seguridad, accesibilidad, integracion, etc.',
                            'Prioriza test cases y ejecucion segun el nivel de riesgo, no solo segun comodidad del equipo.',
                            'Mantiene una matriz de trazabilidad para no perder de vista que riesgo quedo cubierto y con que evidencia.',
                        ],
                    },
                    {
                        type: 'text',
                        title: 'MoSCoW y trazabilidad como apoyo',
                        content:
                            'Ademas de la matriz probabilidad-impacto, un equipo puede usar clasificaciones como <strong>MoSCoW</strong> para decidir que debe probarse obligatoriamente, que deberia probarse y que podria diferirse. La ventaja practica es que la priorizacion deja de ser difusa.\n\nEl paso clave despues es la <strong>trazabilidad</strong>: cada riesgo importante debe vincularse a alguna medida de mitigacion, ya sea un tipo de prueba, una suite concreta, un conjunto de test cases o incluso una accion fuera del testing, como capacitacion del equipo o ajuste arquitectonico.',
                    },
                    {
                        type: 'text',
                        title: 'Caso guiado: priorizacion de un release',
                        content:
                            'Imagina un release con autenticacion biometrica, facturacion automatica, dashboard de reportes y cambio cosmetico del perfil. QA revisa impacto y probabilidad. La <strong>facturacion automatica</strong> queda alta-alta por dano economico y complejidad; recibe pruebas funcionales profundas, limites y regresion prioritaria. La <strong>biometria</strong> queda media-alta por novedad tecnica y sensibilidad del acceso; recibe integracion y pruebas en dispositivo real. El <strong>dashboard</strong> queda media-media y se cubre con rendimiento focalizado. El <strong>cambio cosmetico</strong> queda bajo-bajo y se valida de forma ligera. El valor de RBT aparece cuando esta decision ya no depende de intuicion aislada sino de un criterio explicable.',
                    },
                    {
                        type: 'calloutGroup',
                        title: 'Review de una matriz util',
                        variant: 'example',
                        items: [
                            {
                                icon: 'checkCircle',
                                title: 'Senal de calidad',
                                text: 'Cada riesgo termina conectado con una accion concreta: suite, tecnica, profundidad o incluso decision de diferir cobertura.',
                            },
                            {
                                icon: 'helpCircle',
                                title: 'Falla comun',
                                text: 'Llenar una matriz con colores sin traducirlos a casos, ambientes o ejecucion real deja el trabajo a medias.',
                            },
                            {
                                icon: 'target',
                                title: 'Tip operativo',
                                text: 'Usa el lenguaje del negocio al explicar impacto y el lenguaje de QA al explicar mitigacion. Eso hace el RBT mas defendible en triage o release.',
                            },
                        ],
                    },
                    {
                        type: 'exercise',
                        title: 'Ejercicio opcional: prioriza un release',
                        prompt:
                            'Imagina un release de una app de pagos con modulo de autenticacion, facturacion, reportes y configuracion visual. Elige los dos riesgos mas altos y explica que tecnicas usarías primero para mitigarlos.',
                        hints: [
                            'No mires solo complejidad tecnica; incorpora impacto de negocio y exposicion al usuario.',
                            'Relaciona explicitamente el riesgo con la tecnica elegida.',
                        ],
                        expectedOutput:
                            'Una respuesta fuerte suele priorizar autenticacion y facturacion, porque combinan impacto alto, riesgo de seguridad o dano economico y visibilidad directa para el usuario. La tecnica podria incluir pruebas funcionales profundas, casos de limites, validaciones de error handling y regression prioritaria. Si el estudiante prioriza otro modulo, debe defenderlo con una lectura clara de probabilidad e impacto.',
                        reflection:
                            'Si tu priorizacion no cambia aunque cambie el impacto del negocio, entonces todavia estas pensando en cobertura plana y no en riesgo.',
                    },
                ],
                conclusion:
                    'RBT te obliga a dejar de pensar en cobertura como lista plana. Cuando priorizas segun riesgo, el testing se vuelve mas defensible, mas alineado con negocio y mucho mas util para decidir que liberar y con que confianza.',
            },
        },
        {
            id: 'sqe2-fault-tolerance-error-handling',
            title: 'Fault Tolerance y Error Handling Testing',
            subtitle: 'Evalua si el sistema resiste fallos, degrada con criterio y comunica errores adecuadamente',
            type: 'Teoría',
            difficulty: 'Intermedio',
            duration: '30-40 min',
            tags: ['Fault Tolerance', 'Error Handling', 'Semana 3', 'QA'],
            learningFeatures: ['Simulacion', 'Robustez', 'Ejemplo'],
            content: {
                intro:
                    'Muchos sistemas no fallan porque una funcionalidad principal este mal en el camino feliz, sino porque no saben reaccionar cuando el entorno se vuelve hostil. Se cae la red, una integracion no responde, el almacenamiento se llena, una validacion no estaba prevista o un componente entra en un estado inconsistente. <strong>Fault tolerance</strong> y <strong>error handling testing</strong> miden justamente esa madurez: no solo si el sistema funciona, sino si <strong>sigue siendo util, estable y comprensible cuando algo sale mal</strong>.',
                objectives: [
                    'Distinguir tolerancia a fallos de manejo de errores aunque ambos conceptos esten relacionados.',
                    'Reconocer estrategias como prevencion, enmascaramiento, recuperacion y degradacion elegante.',
                    'Diseñar pruebas que validen no solo deteccion de error, sino reaccion adecuada del sistema.',
                    'Relacionar robustez con riesgo, experiencia de usuario y operacion del negocio.',
                ],
                sections: [
                    {
                        type: 'calloutGroup',
                        title: 'Idea de fondo',
                        variant: 'info',
                        items: [
                            {
                                icon: 'shield',
                                title: 'Tolerar no es ignorar',
                                text: 'Un sistema tolerante no finge que nada paso; detecta, contiene y sigue operando de la forma mas segura posible.',
                            },
                            {
                                icon: 'activity',
                                title: 'Error handling no es solo mensaje',
                                text: 'Incluye validaciones, excepciones, logs, monitoreo, rollback, mensajes claros y decisiones de continuidad.',
                            },
                            {
                                icon: 'users',
                                title: 'Impacto visible',
                                text: 'Una mala respuesta ante fallo destruye confianza del usuario aunque el camino feliz haya funcionado durante meses.',
                            },
                        ],
                    },
                    {
                        type: 'text',
                        title: 'Fault tolerance y error handling: dos capas relacionadas',
                        content:
                            '<strong>Fault tolerance</strong> describe la capacidad del sistema para seguir ofreciendo funcionalidad aceptable aun en presencia de fallos. Puede implicar redundancia, failover, recuperacion, modos degradados o sincronizacion posterior.\n\n<strong>Error handling</strong>, en cambio, se centra en identificar, gestionar y responder a errores o excepciones. Incluye validar si una operacion es posible, atrapar condiciones anormales, registrar evidencia operativa y comunicar al usuario que ocurrio y que puede hacer.\n\nEn sistemas maduros ambos conceptos se conectan: el sistema detecta el error, responde con control y, si puede, mantiene el servicio en modo degradado o recupera estado sin interrumpir completamente el proceso.',
                    },
                    {
                        type: 'process',
                        title: 'Flujo de reaccion ante fallo',
                        desc: 'Observa como un sistema robusto detecta el fallo, cambia de estrategia y sigue protegiendo la operacion.',
                        simType: 'qa-fault-tolerance',
                        simLayout: 'stacked',
                        observe: [
                            'Un fallo bien manejado puede interrumpir menos al usuario que un pequeno bug mal comunicado.',
                            'La transicion a modo degradado sigue necesitando consistencia, logs y mensajes utiles.',
                            'La prueba no termina al ver el error: hay que validar recuperacion, integridad y efectos secundarios.',
                        ],
                        steps: [
                            {
                                name: 'Detectar anomalia',
                                sender: 'Sistema',
                                action: 'El sistema reconoce una condicion anormal: timeout, recurso ausente, error de integracion, dato invalido o fallo de infraestructura.',
                            },
                            {
                                name: 'Contener el dano',
                                sender: 'Sistema',
                                action: 'Se evita que el fallo propague corrupcion de estado, perdida de datos o caida global.',
                            },
                            {
                                name: 'Aplicar estrategia',
                                sender: 'Sistema',
                                action: 'Puede activar retry, fallback, failover, rollback, cola offline o modo degradado segun el contexto.',
                            },
                            {
                                name: 'Comunicar y registrar',
                                sender: 'Sistema',
                                action: 'Se informa al usuario lo necesario y se generan logs o eventos suficientes para diagnostico y seguimiento.',
                            },
                            {
                                name: 'Recuperar o sincronizar',
                                sender: 'Sistema',
                                action: 'Cuando las condiciones mejoran, el sistema restaura operacion normal o sincroniza datos pendientes.',
                            },
                        ],
                    },
                    {
                        type: 'featureCards',
                        title: 'Estrategias frecuentes de tolerancia a fallos',
                        features: [
                            {
                                icon: 'shield',
                                title: 'Prevencion',
                                desc: 'Diseno, validaciones tempranas, redundancia y controles que evitan que el fallo ocurra.',
                            },
                            {
                                icon: 'checkCircle',
                                title: 'Eliminacion',
                                desc: 'Depuracion, correccion y mantenimiento para remover fallas conocidas del sistema.',
                            },
                            {
                                icon: 'layers',
                                title: 'Enmascaramiento',
                                desc: 'Compensacion, votacion o mecanismos que ocultan el fallo al usuario final mientras preservan la operacion.',
                            },
                            {
                                icon: 'refresh-cw',
                                title: 'Recuperacion',
                                desc: 'Reinicio controlado, reconfiguracion, rollback o failover hacia componentes de respaldo.',
                            },
                        ],
                    },
                    {
                        type: 'comparisonTable',
                        title: 'Que deberia validarse en estas pruebas',
                        headers: ['Foco', 'Pregunta de prueba', 'Ejemplo'],
                        rows: [
                            ['Redundancia / failover', 'Otro componente toma control a tiempo?', 'Servidor secundario asume trafico sin perdida visible'],
                            ['Degradacion elegante', 'El sistema sigue siendo util aunque pierda capacidad?', 'La app desactiva reportes pesados pero permite operacion critica'],
                            ['Manejo de errores', 'El usuario recibe mensaje claro y accion posible?', 'Se informa modo offline y luego sincronizacion'],
                            ['Observabilidad', 'Queda suficiente evidencia para diagnostico?', 'Logs, codigos de error y eventos de monitoreo'],
                        ],
                    },
                    {
                        type: 'text',
                        title: 'Ejemplo aplicado: app de inventario con conectividad limitada',
                        content:
                            'Una app movil de inventario usada en almacenes puede perder red mientras el usuario registra movimientos. Un enfoque de <strong>fault tolerance testing</strong> valida que la app cambie a base local, preserve operaciones y sincronice al volver la conectividad. Un enfoque de <strong>error handling testing</strong> verifica ademas que el usuario sea notificado del modo offline, que la reconexion se comunique con claridad y que la sincronizacion no genere duplicados ni inconsistencias.\n\nLo importante aqui es que el “error” no se reduce a un mensaje. Importan tambien integridad de datos, continuidad operativa y experiencia del usuario bajo condicion adversa.',
                    },
                    {
                        type: 'comparisonTable',
                        title: 'Que revisar en escenarios de fallo concretos',
                        headers: ['Escenario', 'Que valida un QA debil', 'Que valida un QA fuerte'],
                        rows: [
                            ['Timeout de API', 'Solo que aparezca mensaje de error', 'Mensaje, retry, estado del formulario, duplicados y evidencia operativa'],
                            ['Dependencia caida', 'Que el flujo se bloquee', 'Si existe fallback, modo degradado o al menos contencion segura del dano'],
                            ['Dato inconsistente', 'Que el sistema rechace', 'Rechazo, logs, persistencia intacta y ausencia de corrupcion colateral'],
                            ['Recuperacion de conectividad', 'Que el sistema vuelva a abrir', 'Sincronizacion correcta, sin perdida ni duplicado de operaciones pendientes'],
                        ],
                    },
                    {
                        type: 'calloutGroup',
                        title: 'Patron de revision para error handling',
                        variant: 'example',
                        items: [
                            {
                                icon: 'eye',
                                title: 'Observa la experiencia',
                                text: 'El usuario debe entender que paso, que riesgo existe y que accion puede tomar ahora.',
                            },
                            {
                                icon: 'database',
                                title: 'Observa la integridad',
                                text: 'Confirma que no queden datos a medio guardar, cargos duplicados o estados incoherentes despues del error.',
                            },
                            {
                                icon: 'activity',
                                title: 'Observa la recuperacion',
                                text: 'La prueba no termina al ver el fallo. Revisa que ocurre despues del retry, reconexion o restauracion del servicio.',
                            },
                        ],
                    },
                    {
                        type: 'calloutGroup',
                        title: 'Malas practicas frecuentes',
                        variant: 'warning',
                        items: [
                            {
                                icon: 'xCircle',
                                title: 'Mostrar mensajes vacios o culpar al usuario',
                                text: '“Algo salio mal” sin contexto ni accion util no es manejo de errores de calidad.',
                            },
                            {
                                icon: 'helpCircle',
                                title: 'No probar efectos secundarios',
                                text: 'Validar que aparecio el mensaje no basta; hay que revisar integridad, estado, retry y recuperacion.',
                            },
                            {
                                icon: 'helpCircle',
                                title: 'No observar logs ni monitoreo',
                                text: 'Si el sistema falla bien hacia afuera pero no deja evidencia operativa, el soporte y el mantenimiento quedan ciegos.',
                            },
                        ],
                    },
                    {
                        type: 'exercise',
                        title: 'Ejercicio opcional: diseña una prueba de robustez',
                        prompt:
                            'Propone un escenario para probar una API de pagos cuando el servicio de impuestos externo responde lento o no responde. Explica que validarías en deteccion, contencion, mensaje y recuperacion.',
                        hints: [
                            'Piensa en timeouts, retries, fallback y consistencia del total mostrado al usuario.',
                            'No olvides monitoreo y evidencia para diagnostico.',
                        ],
                        expectedOutput:
                            'Una respuesta modelo deberia verificar al menos cuatro cosas: deteccion del timeout, contencion para no duplicar el pago, comunicacion clara al usuario y recuperacion consistente cuando el servicio vuelve. Si ademas contempla logs, codigo de error o correlacion para soporte, esta en muy buen nivel.',
                        reflection:
                            'Si tu escenario solo describe el mensaje visible y no menciona integridad ni recuperacion, el diseno de la prueba aun es superficial.',
                    },
                ],
                conclusion:
                    'La calidad real aparece cuando el sistema deja el camino feliz. Fault tolerance y error handling testing miden esa madurez: si algo falla, el producto no solo debe sobrevivir; debe hacerlo de una forma segura, explicable y util para usuario, negocio y operacion.',
            },
        },
        {
            id: 'sqe2-domain-equivalencia',
            title: 'Domain Testing: particion de equivalencia',
            subtitle: 'Reduce espacios de entrada enormes a clases representativas con sentido de negocio',
            type: 'Teoría',
            difficulty: 'Intermedio',
            duration: '30-40 min',
            tags: ['Domain Testing', 'Equivalence Partitioning', 'Semana 4', 'QA'],
            learningFeatures: ['Simulacion', 'Tabla', 'Ejemplo resuelto'],
            content: {
                intro:
                    'Ningun equipo puede probar todos los valores posibles de entrada en un sistema real. <strong>Domain testing</strong> existe precisamente para lidiar con esa imposibilidad. En lugar de mirar el dominio completo como una masa inmanejable, lo divide en subconjuntos significativos y elige representantes utiles. La tecnica mas conocida dentro de este enfoque es la <strong>particion de equivalencia</strong>, que permite cubrir muchas posibilidades sin caer en prueba exhaustiva inviable.',
                objectives: [
                    'Comprender domain testing como tecnica para reducir esfuerzo sin perder sentido de cobertura.',
                    'Definir clases de equivalencia validas e invalidas con criterio.',
                    'Elegir representantes utiles de cada particion y no solo cualquier valor al azar.',
                    'Relacionar reglas de negocio, tipo de dato y dominio con el diseno de casos de prueba.',
                ],
                sections: [
                    {
                        type: 'calloutGroup',
                        title: 'Idea central del enfoque',
                        variant: 'info',
                        items: [
                            {
                                icon: 'layers',
                                title: 'Dividir y vencer',
                                text: 'El dominio completo es demasiado grande. La clave es fraccionarlo en grupos donde se espera comportamiento equivalente.',
                            },
                            {
                                icon: 'target',
                                title: 'Representacion inteligente',
                                text: 'No pruebas todos los miembros de la clase; eliges <strong>representantes</strong> con buena probabilidad de revelar errores.',
                            },
                            {
                                icon: 'activity',
                                title: 'Riesgo reducido',
                                text: 'La tecnica no garantiza perfeccion, pero reduce esfuerzo y hace la cobertura mucho mas sistematica que probar por intuicion.',
                            },
                        ],
                    },
                    {
                        type: 'text',
                        title: 'Que es una clase de equivalencia',
                        content:
                            'Una clase de equivalencia es un subconjunto del dominio de entrada para el cual se espera el mismo comportamiento del sistema. Si el sistema trata de forma equivalente a todos los valores de esa clase, no hace falta probarlos todos; basta con escoger uno o unos pocos representantes.\n\nLa tecnica se aplica tanto a <strong>clases validas</strong> como a <strong>clases invalidas</strong>. Las validas representan lo que el sistema deberia aceptar y procesar. Las invalidas ayudan a comprobar rechazo, robustez y manejo correcto de entradas no esperadas.',
                    },
                    {
                        type: 'process',
                        title: 'Visualizador de clases de equivalencia',
                        desc: 'Observa como un dominio amplio se separa en particiones validas e invalidas antes de elegir valores concretos.',
                        simType: 'qa-equivalence',
                        simLayout: 'stacked',
                        observe: [
                            'Primero se entiende la regla; recien despues se eligen representantes.',
                            'Las clases invalidas son tan importantes como las validas para probar robustez.',
                            'La tecnica no sustituye otras; prepara una base ordenada para combinarlas.',
                        ],
                        steps: [
                            {
                                name: 'Entender la variable',
                                sender: 'Tester',
                                action: 'Se identifica que tipo de dato es, que representa y que regla de negocio la limita.',
                            },
                            {
                                name: 'Definir clases',
                                sender: 'Tester',
                                action: 'Se separan grupos con comportamiento esperado equivalente, incluyendo aceptacion y rechazo.',
                            },
                            {
                                name: 'Elegir representantes',
                                sender: 'Tester',
                                action: 'Se escogen valores plausibles para cada clase, preferiblemente aquellos con mayor poder para revelar error.',
                            },
                            {
                                name: 'Conectar con escenario',
                                sender: 'Tester',
                                action: 'Se define el contexto en que cada valor sera probado y el resultado esperado correspondiente.',
                            },
                        ],
                    },
                    {
                        type: 'checklist',
                        title: 'Como comenzar una particion de equivalencia',
                        ordered: true,
                        items: [
                            'Identifica la variable o condicion de entrada que realmente importa en el comportamiento.',
                            'Determina su tipo y la dimension primaria del analisis: longitud, rango, formato, enumeracion, etc.',
                            'Agrupa valores que deberian producir el mismo resultado.',
                            'Separa explicitamente clases validas e invalidas.',
                            'Elige representantes pensando en potencia de deteccion, no solo en comodidad.',
                            'Conecta cada clase con un resultado esperado y un contexto de prueba.',
                        ],
                    },
                    {
                        type: 'comparisonTable',
                        title: 'Ejemplo: nombre de usuario de 5 a 20 caracteres alfabeticos',
                        headers: ['Clase', 'Tipo', 'Representante', 'Comportamiento esperado'],
                        rows: [
                            ['0-4 caracteres', 'Invalida', 'Ana', 'Rechazar por longitud insuficiente'],
                            ['5-20 caracteres alfabeticos', 'Valida', 'Mariana', 'Aceptar y continuar'],
                            ['Mas de 20 caracteres', 'Invalida', 'superusuariointernoqa', 'Rechazar por exceder longitud'],
                            ['Caracteres numericos o especiales', 'Invalida', 'Juan99', 'Rechazar por formato invalido'],
                        ],
                    },
                    {
                        type: 'text',
                        title: 'Una buena particion depende del dominio',
                        content:
                            'La misma tecnica cambia segun la naturaleza de la variable. En un campo numerico importa el rango. En una enumeracion importan los valores permitidos. En una cadena puede importar longitud, composicion o ambas. En un dato de negocio, como limite de credito o antiguedad de reserva, la clase correcta surge de la regla del dominio, no del gusto del tester.\n\nPor eso esta tecnica exige comprender el negocio y no solo “ver un input”. Una mala lectura del dominio genera clases artificiales y cobertura engañosa.',
                    },
                    {
                        type: 'comparisonTable',
                        title: 'Como derivar test cases desde las particiones',
                        headers: ['Clase', 'Valor elegido', 'Test case derivado', 'Esperado'],
                        rows: [
                            ['Valida', '1200', 'Solicitud: acepta monto dentro del rango permitido', 'El sistema permite continuar con la solicitud'],
                            ['Invalida inferior', '250', 'Solicitud: rechaza monto por debajo del minimo', 'Mensaje explicito y bloqueo del envio'],
                            ['Invalida superior', '60000', 'Solicitud: rechaza monto por encima del maximo', 'Mensaje de limite maximo y sin persistencia'],
                            ['Invalida secundaria', 'texto', 'Solicitud: rechaza entrada no numerica en limite deseado', 'Validacion de formato y conservacion segura del formulario'],
                        ],
                    },
                    {
                        type: 'calloutGroup',
                        title: 'Tips para particionar mejor',
                        variant: 'example',
                        items: [
                            {
                                icon: 'target',
                                title: 'Nombra la regla antes de partir',
                                text: 'Si no puedes expresar la regla del negocio en una frase, dificilmente vas a construir buenas clases.',
                            },
                            {
                                icon: 'layers',
                                title: 'Separa la dimension secundaria',
                                text: 'Primero define el rango o conjunto principal y luego registra tipos extranos, null, espacios o formatos contaminados.',
                            },
                            {
                                icon: 'checkCircle',
                                title: 'Review rapido',
                                text: 'Si dos clases terminan con el mismo comportamiento y misma razon, probablemente las duplicaste sin necesidad.',
                            },
                        ],
                    },
                    {
                        type: 'calloutGroup',
                        title: 'Errores comunes',
                        variant: 'warning',
                        items: [
                            {
                                icon: 'helpCircle',
                                title: 'Elegir cualquier representante',
                                text: 'No todos los valores de una clase son igual de utiles. Conviene elegir los que mas probablemente hagan fallar al sistema.',
                            },
                            {
                                icon: 'xCircle',
                                title: 'Olvidar clases invalidas',
                                text: 'Probar solo lo que deberia entrar confirma poco sobre robustez y validacion.',
                            },
                            {
                                icon: 'helpCircle',
                                title: 'Ignorar reglas de negocio',
                                text: 'Una particion basada solo en tipo de dato puede ser pobre si no considera restricciones del dominio real.',
                            },
                        ],
                    },
                    {
                        type: 'exercise',
                        title: 'Ejercicio opcional: particiona una variable',
                        prompt:
                            'En una app financiera, un cliente puede solicitar un limite deseado entre 400 y 40000 dolares. Define clases validas e invalidas y elige un representante de cada una.',
                        hints: [
                            'Distingue rango valido, por debajo del minimo y por encima del maximo.',
                            'Piensa si ademas conviene anotar clases de dimension secundaria como texto, null o formatos extraños.',
                        ],
                    },
                    {
                        type: 'calloutGroup',
                        title: 'Guia de correccion para la practica',
                        variant: 'example',
                        items: [
                            {
                                icon: 'checkCircle',
                                title: 'Respuesta base esperada',
                                text: 'Como minimo deberian aparecer tres clases: menor que 400, entre 400 y 40000 y mayor que 40000.',
                            },
                            {
                                icon: 'layers',
                                title: 'Respuesta mas fuerte',
                                text: 'Ademas de las clases principales, conviene mencionar dimension secundaria como null, texto o formato invalido cuando el dominio lo justifique.',
                            },
                            {
                                icon: 'target',
                                title: 'Como revisar tu trabajo',
                                text: 'Si elegiste valores pero no explicaste que clase representan ni que comportamiento esperas, aun no convertiste datos en diseno de prueba.',
                            },
                        ],
                    },
                ],
                conclusion:
                    'La particion de equivalencia transforma un espacio de entrada intimidante en una cobertura razonable y defendible. Es una de las primeras tecnicas que realmente enseña a probar con criterio en lugar de probar por acumulacion.',
            },
        },
        {
            id: 'sqe2-domain-boundaries',
            title: 'Domain Testing: Boundary Value Analysis y combinaciones',
            subtitle: 'Prueba bordes, valores adyacentes y dimensiones secundarias donde mas aparecen los defectos',
            type: 'Teoría',
            difficulty: 'Intermedio',
            duration: '30-40 min',
            tags: ['Boundary Value Analysis', 'Domain Testing', 'Semana 4', 'QA'],
            learningFeatures: ['Simulacion', 'Tabla', 'Combinacion de tecnicas'],
            content: {
                intro:
                    'La experiencia muestra que muchisimos defectos viven en los <strong>bordes</strong>: justo donde un valor deja de ser permitido, donde un rango cambia de regla o donde una comparacion usa > en lugar de >=. Por eso la particion de equivalencia suele combinarse con <strong>Boundary Value Analysis (BVA)</strong>. Mientras la primera reduce el dominio a clases, BVA concentra el esfuerzo en los puntos donde el sistema tiene mas probabilidad de equivocarse.',
                objectives: [
                    'Comprender por que los errores aparecen con tanta frecuencia en los limites.',
                    'Aplicar BVA sobre rangos validos e invalidos usando valores en el borde, dentro y fuera del borde.',
                    'Combinar limites con clases de equivalencia y con dimensiones secundarias.',
                    'Reconocer cuando el dominio exige algo mas que solo rango numerico simple.',
                ],
                sections: [
                    {
                        type: 'calloutGroup',
                        title: 'Que hace especial a los limites',
                        variant: 'info',
                        items: [
                            {
                                icon: 'target',
                                title: 'Cambio de comportamiento',
                                text: 'En los bordes suelen cambiar reglas, validaciones o ramas del codigo. Por eso los defectos tienden a concentrarse ahi.',
                            },
                            {
                                icon: 'activity',
                                title: 'Dentro y fuera',
                                text: 'No basta probar el valor limite. Tambien importa el valor inmediatamente valido y el inmediatamente invalido.',
                            },
                            {
                                icon: 'layers',
                                title: 'Tecnica complementaria',
                                text: 'BVA rara vez trabaja sola; funciona mucho mejor cuando ya tienes definidas las clases de equivalencia.',
                            },
                        ],
                    },
                    {
                        type: 'text',
                        title: 'Que es Boundary Value Analysis',
                        content:
                            'Boundary Value Analysis es una tecnica de diseno de pruebas que se enfoca en los valores ubicados en los extremos de las particiones de equivalencia. La intuicion empirica detras de la tecnica es fuerte: el software suele manejar peor el cambio de estado en los bordes que los valores del centro.\n\nCuando un rango permitido va, por ejemplo, de 18 a 65, los puntos interesantes no son solo 30 o 40. Son especialmente 17, 18, 19, 64, 65 y 66. Ahi aparecen comparaciones mal implementadas, limites mal entendidos o conversiones inesperadas.',
                    },
                    {
                        type: 'process',
                        title: 'Visualizador de valores limite',
                        desc: 'Observa como el mismo dominio genera una bateria mucho mas potente cuando se prueban sus bordes y adyacencias.',
                        simType: 'qa-boundary-values',
                        simLayout: 'stacked',
                        observe: [
                            'El borde importa, pero tambien el valor inmediato interno y externo.',
                            'BVA ayuda especialmente cuando el dominio es continuo o discretamente ordenado.',
                            'Si el sistema tiene varias variables, los limites no deben pensarse de forma aislada para siempre.',
                        ],
                        steps: [
                            {
                                name: 'Identificar limites',
                                sender: 'Tester',
                                action: 'Se detectan minimo, maximo y cualquier punto donde cambie el comportamiento esperado.',
                            },
                            {
                                name: 'Elegir adyacentes',
                                sender: 'Tester',
                                action: 'Se seleccionan valores en el borde, justo dentro y justo fuera de cada limite.',
                            },
                            {
                                name: 'Ejecutar y comparar',
                                sender: 'Tester',
                                action: 'Se verifica aceptacion, rechazo, mensaje, calculo o cualquier cambio funcional asociado al borde.',
                            },
                            {
                                name: 'Combinar con otras dimensiones',
                                sender: 'Tester',
                                action: 'Se revisa si ademas del rango hay formato, nullabilidad, tipo o dependencia con otras variables.',
                            },
                        ],
                    },
                    {
                        type: 'comparisonTable',
                        title: 'Ejemplo clasico: licencia entre 18 y 65 anos',
                        headers: ['Valor', 'Clase', 'Razon de prueba'],
                        rows: [
                            ['17', 'Invalido', 'Justo por debajo del minimo'],
                            ['18', 'Valido', 'Minimo permitido'],
                            ['19', 'Valido', 'Valor inmediatamente dentro del rango'],
                            ['64', 'Valido', 'Valor inmediatamente antes del maximo'],
                            ['65', 'Valido', 'Maximo permitido'],
                            ['66', 'Invalido', 'Justo por encima del maximo'],
                        ],
                    },
                    {
                        type: 'featureCards',
                        title: 'Cuando necesitas ir mas alla del rango',
                        features: [
                            {
                                icon: 'type',
                                title: 'Dimension secundaria',
                                desc: 'Valores no numericos, null, espacios, tabs, caracteres especiales, formulas o formatos inesperados.',
                            },
                            {
                                icon: 'database',
                                title: 'Precision y escala',
                                desc: 'Montos, decimales, redondeos o diferencias entre entero y real pueden crear bordes adicionales.',
                            },
                            {
                                icon: 'layers',
                                title: 'Variables dependientes',
                                desc: 'A veces el borde solo cobra sentido en relacion con otra variable o regla de negocio.',
                            },
                            {
                                icon: 'activity',
                                title: 'Salidas y no solo entradas',
                                desc: 'Tambien puedes analizar limites de salidas, calculos o estados resultantes del sistema.',
                            },
                        ],
                    },
                    {
                        type: 'text',
                        title: 'La combinacion con equivalencia es donde gana fuerza',
                        content:
                            'La particion de equivalencia te dice <strong>que clases existen</strong>. BVA te dice <strong>donde mirar con lupa dentro de esas clases</strong>. Juntas producen una cobertura mucho mas fuerte que cualquiera por separado.\n\nAdemas, en sistemas reales suele aparecer una <strong>dimension secundaria</strong>: no basta con saber que el rango valido es 0 a 99. Tambien importa que sucede con valores como 1.5, null, texto, espacios, expresiones, numeros gigantes o formatos ruidosos. Esa dimension secundaria no siempre esta en la regla principal, pero en productos reales suele ser fuente frecuente de defectos.',
                    },
                    {
                        type: 'checklist',
                        title: 'Que mas probar ademas del borde principal',
                        ordered: true,
                        items: [
                            'Valores nulos o vacios.',
                            'Tipos inesperados o formatos contaminados.',
                            'Valores con espacios, simbolos o ruido alrededor.',
                            'Decimales, redondeo y precision si el dominio lo permite.',
                            'Dependencias con otras variables o reglas del negocio.',
                        ],
                    },
                    {
                        type: 'comparisonTable',
                        title: 'Review de valores utiles vs valores redundantes',
                        headers: ['Valor', 'Aporta?', 'Razon'],
                        rows: [
                            ['399.99', 'Si', 'Justo debajo del minimo monetario'],
                            ['400.00', 'Si', 'Minimo permitido'],
                            ['400.01', 'Si', 'Primer valor claramente dentro del rango'],
                            ['12000.00', 'No necesariamente', 'Sirve como valor interno, pero no agrega tanto como los bordes si el set es minimo'],
                            ['40000.00', 'Si', 'Maximo permitido'],
                            ['40000.01', 'Si', 'Justo por encima del maximo'],
                        ],
                    },
                    {
                        type: 'text',
                        title: 'Ejemplo guiado: combinar equivalencia y limites',
                        content:
                            'Para un credito entre 400.00 y 40000.00, equivalencia define clases valida, invalida inferior e invalida superior. BVA toma esas clases y concentra esfuerzo en 399.99, 400.00, 400.01, 39999.99, 40000.00 y 40000.01. Si ademas el sistema acepta solo dos decimales, tambien conviene anotar casos como 400.001 o texto con espacios. Ese paso adicional convierte una prueba correcta en una prueba realmente fuerte.',
                    },
                    {
                        type: 'exercise',
                        title: 'Ejercicio opcional: diseña un set minimo de bordes',
                        prompt:
                            'Un sistema permite solicitar un credito entre 400.00 y 40000.00 dolares. Propone un conjunto minimo de valores para BVA y explica por que cada uno esta ahi.',
                        hints: [
                            'Incluye borde inferior, superior y sus adyacentes.',
                            'Piensa si el hecho de que sea un valor monetario introduce decimales relevantes.',
                        ],
                    },
                    {
                        type: 'calloutGroup',
                        title: 'Guia de correccion para la practica',
                        variant: 'example',
                        items: [
                            {
                                icon: 'checkCircle',
                                title: 'Set minimo razonable',
                                text: 'Una respuesta fuerte suele incluir 399.99, 400.00, 400.01, 39999.99, 40000.00 y 40000.01.',
                            },
                            {
                                icon: 'layers',
                                title: 'Respuesta mas madura',
                                text: 'Ademas del borde primario, considera null, texto o exceso de decimales si el dominio o el input lo permiten.',
                            },
                            {
                                icon: 'target',
                                title: 'Como revisar tu set',
                                text: 'Si llenaste la lista con valores del centro del rango y dejaste pocos bordes, no estas usando BVA con suficiente criterio.',
                            },
                        ],
                    },
                ],
                conclusion:
                    'BVA te enseña a desconfiar del centro del rango y a mirar donde el sistema cambia de criterio. Cuando la combinas con clases de equivalencia y dimension secundaria, tus pruebas de dominio dejan de ser superficiales y empiezan a capturar defectos mucho mas reales.',
            },
        },
        {
            id: 'sqe2-combinatorial-pairwise',
            title: 'Combinatorial Testing y Pairwise',
            subtitle: 'Cubre interacciones de variables sin caer en una explosion incontrolable de combinaciones',
            type: 'Teoría',
            difficulty: 'Intermedio',
            duration: '30-40 min',
            tags: ['Combinatorial Testing', 'Pairwise', 'Semana 5', 'QA'],
            learningFeatures: ['Simulacion', 'Cobertura', 'Herramientas'],
            content: {
                intro:
                    'Muchos defectos no aparecen cuando miras una variable aislada, sino cuando <strong>dos o mas condiciones interactuan</strong>. Ese es el territorio del <strong>combinatorial testing</strong>. El problema es evidente: si intentas cubrir todas las combinaciones posibles, la cantidad de casos se dispara muy rapido. Pairwise surge como una respuesta pragmatica: no probar todo, sino asegurar cobertura sistematica de pares de valores, partiendo de la observacion de que muchas fallas nacen de interacciones relativamente pequenas.',
                objectives: [
                    'Comprender por que los defectos de interaccion exigen tecnicas distintas a las de dominio simple.',
                    'Distinguir combinatoria exhaustiva, diseno ortogonal y pairwise/all-pairs.',
                    'Entender la logica de cobertura por pares y sus limites.',
                    'Saber cuando usar herramientas y restricciones para evitar combinaciones irreales.',
                ],
                sections: [
                    {
                        type: 'calloutGroup',
                        title: 'El problema que intenta resolver',
                        variant: 'info',
                        items: [
                            {
                                icon: 'layers',
                                title: 'Complejidad creciente',
                                text: 'Cada variable adicional multiplica el numero de combinaciones posibles y vuelve impracticable el barrido completo.',
                            },
                            {
                                icon: 'activity',
                                title: 'Fallas de interaccion',
                                text: 'Muchas fallas aparecen solo cuando ciertos valores coexisten, aunque por separado cada uno parezca inocuo.',
                            },
                            {
                                icon: 'tool',
                                title: 'Necesidad real',
                                text: 'Se busca reducir combinaciones sin perder la cobertura mas valiosa para revelar defectos de interaccion.',
                            },
                        ],
                    },
                    {
                        type: 'text',
                        title: 'Que es combinatorial testing',
                        content:
                            'Combinatorial testing es una tecnica de diseno de pruebas de caja negra que selecciona combinaciones de valores de distintos parametros o variables de entrada para revelar defectos producidos por su interaccion. No necesita conocer los detalles internos del SUT; necesita comprender el espacio de variables y sus valores posibles.\n\nEl punto critico es que la combinacion total crece muy rapido. Con pocas variables y pocos valores ya aparecen docenas o cientos de escenarios. Por eso, salvo en casos pequenos, la cobertura exhaustiva deja de ser razonable y conviene usar tecnicas de reduccion.',
                    },
                    {
                        type: 'process',
                        title: 'Cobertura pairwise en accion',
                        desc: 'Observa como un conjunto reducido de casos puede cubrir todos los pares relevantes sin generar todas las combinaciones posibles.',
                        simType: 'qa-pairwise',
                        simLayout: 'stacked',
                        observe: [
                            'Pairwise no elimina el razonamiento; solo optimiza la cobertura de interacciones pequenas.',
                            'Las restricciones importan: no todas las combinaciones generadas son factibles en el negocio.',
                            'La tecnica es poderosa, pero no reemplaza el juicio sobre riesgo y relevancia.',
                        ],
                        steps: [
                            {
                                name: 'Seleccionar variables',
                                sender: 'Tester',
                                action: 'Se eligen parametros que realmente pueden influir en el comportamiento del sistema.',
                            },
                            {
                                name: 'Listar valores',
                                sender: 'Tester',
                                action: 'Se define que valores posibles tendra cada variable dentro del analisis.',
                            },
                            {
                                name: 'Aplicar tecnica',
                                sender: 'Herramienta / tester',
                                action: 'Se generan combinaciones usando pairwise, all-pairs, diseno ortogonal u otro enfoque equivalente.',
                            },
                            {
                                name: 'Aplicar restricciones',
                                sender: 'Tester',
                                action: 'Se eliminan combinaciones imposibles y se repara la cobertura afectada cuando haga falta.',
                            },
                            {
                                name: 'Ejecutar y analizar',
                                sender: 'Tester',
                                action: 'Se observan defectos de interaccion, patrones y areas donde podrian requerirse combinaciones mas profundas.',
                            },
                        ],
                    },
                    {
                        type: 'featureCards',
                        title: 'Formas frecuentes de abordarlo',
                        features: [
                            {
                                icon: 'layers',
                                title: 'Exhaustivo',
                                desc: 'Prueba todas las combinaciones posibles. Solo es razonable cuando el espacio es muy pequeño.',
                            },
                            {
                                icon: 'book',
                                title: 'Diseno ortogonal',
                                desc: 'Organiza combinaciones de forma balanceada para cubrir interacciones relevantes con menos casos.',
                            },
                            {
                                icon: 'checkCircle',
                                title: 'Pairwise / All-pairs',
                                desc: 'Asegura que todo par de valores de dos variables aparezca al menos una vez en el conjunto generado.',
                            },
                            {
                                icon: 'shield',
                                title: 'Con restricciones',
                                desc: 'Incorpora reglas para remover combinaciones imposibles o irreales del dominio del negocio.',
                            },
                        ],
                    },
                    {
                        type: 'comparisonTable',
                        title: 'Beneficios, limites y retos',
                        headers: ['Aspecto', 'Valor', 'Riesgo si se usa mal'],
                        rows: [
                            ['Beneficio', 'Reduce fuertemente el numero de casos manteniendo cobertura de interacciones relevantes', 'Confiar ciegamente en la reduccion y olvidar riesgos concretos'],
                            ['Limite', 'No todas las fallas viven en interacciones de dos variables', 'Perder defectos que requieren 3-way o mas profundidad'],
                            ['Reto', 'Elegir variables y valores realmente significativos', 'Generar un set elegante pero irrelevante para el negocio'],
                            ['Reto', 'Gestionar restricciones y combinaciones no factibles', 'Cubrir escenarios imposibles mientras omites los reales'],
                        ],
                    },
                    {
                        type: 'text',
                        title: 'Herramientas y criterio practico',
                        content:
                            'Herramientas como <strong>PICT</strong>, soluciones online de pairwise y generadores de arreglos de cobertura ayudan a producir suites combinatorias mucho mejor de lo que seria razonable a mano. Aun asi, ninguna herramienta sustituye la decision humana sobre <strong>que variables incluir, que valores son relevantes y que restricciones existen</strong>.\n\nLa automatizacion ayuda mucho aqui porque el valor de la tecnica crece cuando las combinaciones generadas pueden ejecutarse, registrarse y mantenerse con disciplina. Pero incluso automatizado, el diseño sigue necesitando criterio de QA.',
                    },
                    {
                        type: 'text',
                        title: 'Ejemplo guiado: de variables crudas a cobertura pairwise',
                        content:
                            'Supongamos cuatro variables para reservas: tipo de usuario (nuevo, frecuente), metodo de pago (tarjeta, billetera), canal (web, mobile) y equipaje (sin maleta, con maleta). El espacio exhaustivo tiene 16 combinaciones. Un enfoque pairwise puede reducirlo a un set mucho mas pequeno siempre que cada par de valores aparezca al menos una vez. El trabajo serio no termina al generar la matriz: QA debe revisar si alguna combinacion es imposible, si falta algun riesgo relevante y si existe un punto donde convenga profundizar a 3-way por sensibilidad del negocio.',
                    },
                    {
                        type: 'calloutGroup',
                        title: 'Review de combinaciones utiles',
                        variant: 'example',
                        items: [
                            {
                                icon: 'checkCircle',
                                title: 'Buena decision',
                                text: 'Elegir variables que de verdad cambian el comportamiento, como canal, metodo de pago o perfil del usuario.',
                            },
                            {
                                icon: 'xCircle',
                                title: 'Mala decision',
                                text: 'Llenar el modelo con variables decorativas que casi no afectan el sistema y luego creer que el set reducido ya cubre el riesgo real.',
                            },
                            {
                                icon: 'shield',
                                title: 'Cuando pairwise no basta',
                                text: 'Si sabes que tres condiciones juntas disparan una regla critica, documenta esa excepcion y agrega cobertura puntual aunque no salga del generador pairwise.',
                            },
                        ],
                    },
                    {
                        type: 'checklist',
                        title: 'Consejos antes de generar combinaciones',
                        ordered: true,
                        items: [
                            'Escoge variables con probabilidad real de interactuar.',
                            'Define valores representativos, no listas infinitas sin priorizacion.',
                            'Anota restricciones de negocio o de entorno lo antes posible.',
                            'Prioriza combinaciones segun riesgo cuando no todo puede ejecutarse de inmediato.',
                            'Documenta que cobertura pairwise se logro y que profundidad quedo fuera.',
                        ],
                    },
                    {
                        type: 'exercise',
                        title: 'Ejercicio opcional: define variables para pairwise',
                        prompt:
                            'Para un sistema de reservas de vuelos, propone al menos cuatro variables para generar pruebas pairwise y explica por que cada una puede interactuar con las otras.',
                        hints: [
                            'Piensa en clase de vuelo, antelacion, equipaje, metodo de pago, perfil de usuario o canal.',
                            'Evita listar variables triviales que no cambien el comportamiento.',
                        ],
                    },
                    {
                        type: 'calloutGroup',
                        title: 'Guia de correccion para la practica',
                        variant: 'example',
                        items: [
                            {
                                icon: 'checkCircle',
                                title: 'Variables esperables',
                                text: 'Canal, metodo de pago, tipo de usuario, equipaje o tarifa suelen ser mejores candidatas que campos puramente decorativos.',
                            },
                            {
                                icon: 'layers',
                                title: 'Lo importante no es la lista',
                                text: 'La calidad de la respuesta depende de explicar la interaccion, por ejemplo como cambia el comportamiento de pago entre web y mobile o entre tarifas con y sin equipaje.',
                            },
                            {
                                icon: 'target',
                                title: 'Como revisar tu modelo',
                                text: 'Si tus variables no cambian reglas, integraciones ni estados del sistema, probablemente no elegiste buen material para pairwise.',
                            },
                        ],
                    },
                ],
                conclusion:
                    'Combinatorial testing te obliga a pensar en interacciones, no solo en valores aislados. Pairwise es una herramienta poderosa precisamente porque acepta una realidad dura: no puedes probarlo todo, pero si puedes cubrir de forma inteligente aquello que mas probablemente revele fallas de interaccion.',
            },
        },
        {
            id: 'sqe2-defectos-bug-reporting',
            title: 'Defectos y Bug Reporting profesional',
            subtitle: 'Convierte observaciones tecnicas en defectos claros, reproducibles y utiles para el equipo',
            type: 'Teoría',
            difficulty: 'Intermedio',
            duration: '35-45 min',
            tags: ['Bug Reporting', 'Defects', 'Semana 6', 'QA'],
            learningFeatures: ['Tabla', 'Buenas practicas', 'Ejemplo'],
            content: {
                intro:
                    'Encontrar un bug es solo la mitad del trabajo. La otra mitad es <strong>comunicarlo de forma que el equipo pueda reproducirlo, entenderlo, priorizarlo y resolverlo</strong>. Un bug report pobre desperdicia hallazgos; un bug report fuerte acelera aprendizaje, correccion y toma de decisiones. Esta parte de la materia se mete en esa profesion de detalle: distinguir error, defecto y falla; entender que campos importan; y reportar con el nivel de claridad que un equipo serio necesita.',
                objectives: [
                    'Distinguir los conceptos de error, defecto y falla dentro de testing.',
                    'Comprender el valor del bug report como artefacto central de comunicacion y seguimiento.',
                    'Dominar la anatomia de un bug report util y reproducible.',
                    'Separar severidad y prioridad sin mezclar criterio tecnico con urgencia de negocio.',
                ],
                sections: [
                    {
                        type: 'calloutGroup',
                        title: 'La idea importante',
                        variant: 'info',
                        items: [
                            {
                                icon: 'book',
                                title: 'El bug report refleja tu criterio',
                                text: 'Cada informe de bug habla tanto del producto como del nivel de observacion del tester que lo redacto.',
                            },
                            {
                                icon: 'users',
                                title: 'Es una herramienta de comunicacion',
                                text: 'No se escribe para uno mismo: se escribe para desarrollo, QA, liderazgo y negocio.',
                            },
                            {
                                icon: 'target',
                                title: 'Debe mover accion',
                                text: 'Su proposito es permitir reproducir, evaluar impacto, asignar prioridad y avanzar hacia una resolucion.',
                            },
                        ],
                    },
                    {
                        type: 'text',
                        title: 'Error, defecto y falla',
                        content:
                            '<strong>Error</strong> suele referirse a la accion humana incorrecta: analisis defectuoso, malinterpretacion del requisito, decision de diseno equivocada o implementacion errada.\n\n<strong>Defecto</strong> es la imperfeccion introducida en el artefacto de software: codigo, configuracion, datos o diseno que contiene el problema.\n\n<strong>Falla</strong> es el comportamiento observable cuando el software no realiza la funcion esperada. En QA normalmente vemos la falla y, a partir de ella, inferimos la posible existencia de un defecto originado por algun error humano.',
                    },
                    {
                        type: 'grid-cards',
                        title: 'Anatomia de un bug report',
                        cards: [
                            {
                                title: 'Issue Type',
                                color: '#67e8f9',
                                text: 'Clasifica el problema: funcional, UI/UX, rendimiento, seguridad, datos, documentacion, cosmetico u otra taxonomia del equipo.'
                            },
                            {
                                title: 'Title',
                                color: '#38bdf8',
                                text: 'Debe ser breve, claro y sin ambiguedad. Idealmente menciona area impactada y comportamiento incorrecto.'
                            },
                            {
                                title: 'Description',
                                color: '#22d3ee',
                                text: 'Explica el problema, sintomas, contexto e impacto sin copiar el titulo ni especular de mas.'
                            },
                            {
                                title: 'Steps',
                                color: '#f59e0b',
                                text: 'Secuencia reproducible y precisa para que otra persona vea el mismo comportamiento.'
                            },
                            {
                                title: 'Actual / Expected',
                                color: '#fb7185',
                                text: 'Diferencia claramente lo que ocurrio de lo que debia ocurrir segun requisito, diseno o criterio de negocio.'
                            },
                            {
                                title: 'Severity / Priority',
                                color: '#a78bfa',
                                text: 'Una mide impacto tecnico; la otra orden de resolucion. No son lo mismo aunque esten relacionadas.'
                            }
                        ],
                    },
                    {
                        type: 'checklist',
                        title: 'Principios utiles de bug advocacy',
                        ordered: true,
                        items: [
                            'Describe el problema claramente y con lenguaje comprensible.',
                            'Proporciona contexto suficiente: build, entorno, datos, evidencia y condiciones relevantes.',
                            'Explica impacto sobre usuario, producto o negocio.',
                            'Colabora con desarrollo para que el defecto se entienda y se investigue con rapidez.',
                            'Evita el tono emocional; el objetivo es persuadir con claridad, no con dramatismo.',
                        ],
                    },
                    {
                        type: 'comparisonTable',
                        title: 'Severidad vs prioridad',
                        headers: ['Aspecto', 'Severidad', 'Prioridad'],
                        rows: [
                            ['Que mide', 'Impacto tecnico o gravedad del defecto', 'Urgencia y orden de resolucion'],
                            ['Quien suele definirla', 'Frecuentemente QA o criterio tecnico compartido', 'PM, PO, stakeholders o triage'],
                            ['Depende de', 'Perdida de datos, seguridad, bloqueo funcional, impacto operativo', 'Valor de negocio, release, recursos, workaround disponible'],
                            ['Puede cambiar con el tiempo?', 'Normalmente poco', 'Si, segun contexto, fechas y estrategia de producto'],
                        ],
                    },
                    {
                        type: 'text',
                        title: 'Ejemplos de buen reporte',
                        content:
                            'Un buen titulo seria: <strong>Checkout: incorrect total amount calculated in shopping cart</strong>. En cambio, “Software broken” o “Something wrong in login” no ayudan a nadie. Lo mismo ocurre con resultados esperados y actuales: deben permitir ver la desviacion exacta, no una sensacion vaga.\n\nAdemas, el bug report gana mucha fuerza cuando adjunta evidencia: imagenes, video, logs, datos usados, ordenes generadas, respuestas API o cualquier material que reduzca ambiguedad y acelere reproduccion.',
                    },
                    {
                        type: 'comparisonTable',
                        title: 'Titulos de defectos: malo vs aceptable vs fuerte',
                        headers: ['Nivel', 'Ejemplo', 'Por que'],
                        rows: [
                            ['Malo', 'Software broken', 'No informa modulo, condicion ni efecto observable'],
                            ['Aceptable', 'Login fails for some users', 'Da una pista, pero sigue siendo ambiguo'],
                            ['Fuerte', 'Login: active user remains on sign-in page after valid credentials on Safari', 'Expresa area, condicion y comportamiento incorrecto reproducible'],
                            ['Fuerte', 'Checkout: total includes shipping twice when coupon and express delivery are combined', 'Permite priorizar y reproducir mucho mas rapido'],
                        ],
                    },
                    {
                        type: 'calloutGroup',
                        title: 'Review linea por linea de un bug report',
                        variant: 'example',
                        items: [
                            {
                                icon: 'book',
                                title: 'Title',
                                text: 'Debe comunicar area impactada y desviacion concreta. Si suena emocional o demasiado amplia, rehacelo.',
                            },
                            {
                                icon: 'list',
                                title: 'Steps + actual + expected',
                                text: 'Los pasos reproducen; el actual describe el fallo; el expected explica la regla correcta. Si uno falta, el reporte pierde fuerza.',
                            },
                            {
                                icon: 'camera',
                                title: 'Evidencia + severidad',
                                text: 'Adjunta capturas, video, logs o respuestas API y justifica la severidad con impacto observable, no con dramatismo.',
                            },
                        ],
                    },
                    {
                        type: 'calloutGroup',
                        title: 'Errores frecuentes al reportar',
                        variant: 'warning',
                        items: [
                            {
                                icon: 'xCircle',
                                title: 'Titulos emocionales o vagos',
                                text: 'Un reporte no es un desahogo. El titulo debe informar, no dramatizar.',
                            },
                            {
                                icon: 'helpCircle',
                                title: 'Pasos insuficientes',
                                text: 'Si otro tester no puede reproducir el comportamiento, el hallazgo pierde fuerza rapidamente.',
                            },
                            {
                                icon: 'helpCircle',
                                title: 'Confundir severidad con prioridad',
                                text: 'Un bug puede ser grave y aun asi no ser lo primero en arreglarse, o ser de alta prioridad por contexto aunque tecnicamente no sea severo.',
                            },
                        ],
                    },
                    {
                        type: 'exercise',
                        title: 'Ejercicio opcional: redacta un bug report',
                        prompt:
                            'Redacta un bug report breve para un carrito de compra cuyo total no coincide con la suma de subtotales cuando se mezclan dos productos y un cupon de descuento.',
                        hints: [
                            'Incluye al menos titulo, pasos, resultado actual, esperado y una nota sobre impacto.',
                            'Evita explicar la posible causa tecnica si no tienes evidencia suficiente.',
                        ],
                    },
                    {
                        type: 'calloutGroup',
                        title: 'Guia de correccion para la practica',
                        variant: 'example',
                        items: [
                            {
                                icon: 'checkCircle',
                                title: 'Estructura minima esperada',
                                text: 'La respuesta deberia incluir titulo claro, pasos reproducibles, actual, expected y nota breve de impacto.',
                            },
                            {
                                icon: 'layers',
                                title: 'Version mas profesional',
                                text: 'Ademas del texto base, conviene mencionar build, datos, evidencia y una justificacion breve de severidad o prioridad sugerida.',
                            },
                            {
                                icon: 'target',
                                title: 'Como revisar tu reporte',
                                text: 'Si otra persona no podria reproducir el bug leyendo tu texto, aun no esta listo para triage.',
                            },
                        ],
                    },
                ],
                conclusion:
                    'El bug report es uno de los entregables mas importantes de QA porque transforma observacion en accion. Reportar bien es una habilidad de ingenieria, no un trabajo administrativo: exige precision, criterio, evidencia y una comunicacion que ayude al equipo a decidir mejor.',
            },
        },
        {
            id: 'sqe2-gestion-operativa-qa',
            title: 'Gestion operativa de QA: test cases, bugs, triage y herramientas',
            subtitle: 'Opera el trabajo de calidad con suites, validaciones, reuniones de decision y herramientas de soporte',
            type: 'Teoría',
            difficulty: 'Intermedio',
            duration: '35-45 min',
            tags: ['QA Operations', 'Triage', 'TCMS', 'Semana 7', 'QA'],
            learningFeatures: ['Simulacion', 'Herramientas', 'Buenas practicas'],
            content: {
                intro:
                    'QA no termina cuando se escribe un caso o se reporta un bug. En equipos reales, la calidad vive dentro de un sistema operativo de trabajo: suites, estados, notas de validacion, herramientas de gestion, triage, war meetings, criterios comunes de severidad y artefactos que permiten seguir el flujo completo hasta la resolucion. Esta capa operativa es la que convierte pruebas aisladas en una practica sostenible.',
                objectives: [
                    'Entender como se gestionan casos de prueba y defectos dentro de un flujo de equipo.',
                    'Reconocer el valor de notas de validacion, suites y estados dentro de herramientas de gestion.',
                    'Comprender triage, war meeting y seguimiento como espacios de decision compartida.',
                    'Identificar herramientas y marcos como TCMS, bug tracking, RIMGEA y utilities de apoyo al analisis.',
                ],
                sections: [
                    {
                        type: 'calloutGroup',
                        title: 'Capa operacional de QA',
                        variant: 'info',
                        items: [
                            {
                                icon: 'tool',
                                title: 'Gestion integral',
                                text: 'No basta con tener casos o bugs; hay que organizarlos, ejecutarlos, validarlos y mantener su historico.',
                            },
                            {
                                icon: 'users',
                                title: 'Decision colaborativa',
                                text: 'Triage y war meetings existen porque prioridad, asignacion y release risk no se deciden de forma aislada.',
                            },
                            {
                                icon: 'checkCircle',
                                title: 'Seguimiento real',
                                text: 'La tarea de QA no termina con el reporte, sino con el seguimiento hasta una resolucion aceptada, rechazada, diferida o cerrada.',
                            },
                        ],
                    },
                    {
                        type: 'text',
                        title: 'De artefacto individual a sistema de trabajo',
                        content:
                            'Una vez que los test cases y bug reports existen, deben entrar en un sistema de gestion. En el caso de los test cases, aparecen suites, estados de ejecucion, notas de validacion y reportes de avance. En el caso de los bugs, aparecen seguimiento, ownership, validacion del fix, test around, cierre, posposicion o rechazo.\n\nLa calidad madura exige que esos objetos no queden sueltos. Deben vivir en herramientas y procesos que hagan visible que se probo, que fallo, quien lo tiene, cual es el riesgo del release y que evidencia sostiene cada decision.',
                    },
                    {
                        type: 'process',
                        title: 'Flujo operativo de bug y triage',
                        desc: 'Observa como un bug fuerte atraviesa evaluacion, asignacion, validacion y cierre con soporte de notas y criterios de equipo.',
                        simType: 'qa-bug-triage',
                        simLayout: 'stacked',
                        observe: [
                            'El triage no solo ordena; traduce impacto tecnico en decision de negocio y release.',
                            'La validacion del fix debe acompañarse de test around y actualizacion de casos asociados.',
                            'Un bug puede resolverse de distintas formas: fix, workaround, diferido, rechazado o aceptado segun proceso.',
                        ],
                        steps: [
                            {
                                name: 'Registro',
                                sender: 'QA',
                                action: 'Se crea el bug con evidencia, contexto y clasificacion suficiente para evaluacion.',
                            },
                            {
                                name: 'Triage',
                                sender: 'PO + PM + Dev + QA',
                                action: 'Se evalua impacto, prioridad, propietario, target release y si el defecto requiere atencion inmediata.',
                            },
                            {
                                name: 'Correccion',
                                sender: 'Desarrollo',
                                action: 'Se implementa fix, workaround o decision de diferimiento segun el acuerdo alcanzado.',
                            },
                            {
                                name: 'Validacion',
                                sender: 'QA',
                                action: 'Se verifica el fix, se hace test around y se actualizan notas de validacion y casos relacionados.',
                            },
                            {
                                name: 'Cierre o seguimiento',
                                sender: 'Equipo',
                                action: 'El bug se acepta, rechaza, reabre o pospone con soporte documental suficiente.',
                            },
                        ],
                    },
                    {
                        type: 'featureCards',
                        title: 'Piezas operativas que debes dominar',
                        features: [
                            {
                                icon: 'book',
                                title: 'TCMS',
                                desc: 'Sistemas de gestion de casos de prueba que soportan planificacion, ejecucion, seguimiento y reportes de estado.',
                            },
                            {
                                icon: 'shield',
                                title: 'Bug tracking',
                                desc: 'Herramientas para registrar, clasificar, asignar y rastrear defectos a lo largo del tiempo.',
                            },
                            {
                                icon: 'layers',
                                title: 'Suites y estados',
                                desc: 'Agrupan cobertura por modulo, release o objetivo y permiten visibilidad operacional de avance.',
                            },
                            {
                                icon: 'users',
                                title: 'Triage y war meeting',
                                desc: 'Espacios de decision para bugs severos, blockers o situaciones que ponen en riesgo la entrega.',
                            },
                        ],
                    },
                    {
                        type: 'comparisonTable',
                        title: 'Herramientas y para que sirven',
                        headers: ['Categoria', 'Proposito', 'Ejemplos o notas'],
                        rows: [
                            ['TCMS', 'Gestionar test cases, ejecuciones y reportes', 'Herramientas integradas o separadas del bug tracking'],
                            ['Bug tracking', 'Registrar y seguir defectos', 'Base historica para tendencias, ownership y validacion'],
                            ['Project tools', 'Gestionar trabajo aunque no hayan nacido para QA', 'Jira u otras plataformas usadas para bugs y casos'],
                            ['Utilities de analisis', 'Aislar mejor defectos y entender causas', 'DevTools, logs, JSON viewers, API platforms'],
                        ],
                    },
                    {
                        type: 'text',
                        title: 'RIMGEA y buenas practicas de validacion',
                        content:
                            'Un marco muy util antes de enviar un bug es <strong>RIMGEA</strong>: <strong>Replicate, Isolate, Maximize, Generalize, Externalize</strong> and say it clearly and dispassionately. La idea es poderosa: reproducir el problema, aislar condiciones minimas, ampliar pruebas para entender si es sintoma de algo mayor, demostrar si ocurre en condiciones normales y poner el defecto en perspectiva con impacto real.\n\nEn paralelo, la validacion del fix tambien necesita disciplina: comprender el bug, reproducirlo si es posible, confirmar que la solucion esta en el build actual, probar funcionalidad relacionada, validar en multiples entornos cuando aplique y documentar resultado en una nota de validacion clara.',
                    },
                    {
                        type: 'text',
                        title: 'Mini caso operativo: QA owner cerca de release',
                        content:
                            'El equipo entra a la ultima semana del release con una suite de regresion parcial, tres bugs abiertos y varios test cases sin validar. Un QA owner fuerte no se limita a correr casos: revisa que defectos necesitan triage urgente, confirma que los test cases criticos esten claros y actualizados, exige evidencia minima para cada decision y deja visible que riesgos siguen abiertos. La operacion madura consiste en convertir artefactos sueltos en una vista coherente de estado del release.',
                    },
                    {
                        type: 'calloutGroup',
                        title: 'Tips para operar QA con criterio',
                        variant: 'example',
                        items: [
                            {
                                icon: 'users',
                                title: 'Discute prioridad con evidencia',
                                text: 'Llega a triage con impacto, pasos, evidencia y relacion con release risk. Sin eso la conversacion se vuelve opinion pura.',
                            },
                            {
                                icon: 'checkCircle',
                                title: 'Valida el fix con test around',
                                text: 'Cerrar un bug sin revisar funcionalidad cercana es una de las formas mas comunes de perder regresiones.',
                            },
                            {
                                icon: 'book',
                                title: 'Documenta el seguimiento',
                                text: 'Las notas de validacion deben explicar que build se valido, que resultado se obtuvo y que cobertura relacionada se toco.',
                            },
                        ],
                    },
                    {
                        type: 'checklist',
                        title: 'Buenas practicas operativas',
                        ordered: true,
                        items: [
                            'Asignar bugs con criterio o segun proceso formal de triage.',
                            'Acompanhar todo cierre con nota de validacion y evidencia suficiente.',
                            'Hacer test around para confirmar que el fix no rompio funcionalidad cercana.',
                            'Actualizar el estado de test cases asociados cuando el bug cambia de situacion.',
                            'Evitar duplicados revisando historial, tags y contexto antes de reportar.',
                            'Adjuntar imagenes, videos, logs o evidencias que aceleren reproduccion y decision.',
                            'Ser objetivo al reportar y al discutir severidad, prioridad o diferimiento.',
                        ],
                    },
                    {
                        type: 'calloutGroup',
                        title: 'Riesgos si la operacion QA es debil',
                        variant: 'warning',
                        items: [
                            {
                                icon: 'helpCircle',
                                title: 'Bugs sin seguimiento',
                                text: 'Si el bug se reporta pero no se triagea ni se valida, la informacion se pierde y el release risk se vuelve opaco.',
                            },
                            {
                                icon: 'xCircle',
                                title: 'Casos desconectados',
                                text: 'Sin suites, tags y trazabilidad, los casos dejan de representar cobertura real del producto.',
                            },
                            {
                                icon: 'helpCircle',
                                title: 'Herramienta sin criterio',
                                text: 'La mejor plataforma no arregla una mala disciplina de reporte, validacion o priorizacion.',
                            },
                        ],
                    },
                    {
                        type: 'exercise',
                        title: 'Ejercicio opcional: diseña un mini flujo de triage',
                        prompt:
                            'Propon un flujo simple de triage para un equipo Scrum que esta cerca de release y acaba de recibir tres bugs: uno blocker en login, uno visual en mobile y uno intermitente en reportes.',
                        hints: [
                            'Define participantes, criterio de prioridad y que evidencia pedirias antes de decidir.',
                            'Piensa si alguno justifica war meeting.',
                        ],
                    },
                    {
                        type: 'calloutGroup',
                        title: 'Guia de correccion para la practica',
                        variant: 'example',
                        items: [
                            {
                                icon: 'checkCircle',
                                title: 'Respuesta base esperada',
                                text: 'Debe aparecer al menos quien participa, como se decide prioridad y que evidencia minima se exige antes de decidir.',
                            },
                            {
                                icon: 'layers',
                                title: 'Respuesta mas madura',
                                text: 'Una solucion fuerte distingue el tratamiento del bug blocker, el visual y el intermitente, y explica si alguno escala a war meeting.',
                            },
                            {
                                icon: 'target',
                                title: 'Como revisar tu flujo',
                                text: 'Si tu propuesta no deja claro quien decide, quien valida y como se cierra el seguimiento, el flujo todavia esta incompleto.',
                            },
                        ],
                    },
                ],
                conclusion:
                    'La operacion de QA es lo que convierte tecnica en capacidad sostenida. Suites, notas, triage, herramientas y validaciones no son burocracia cuando estan bien usadas; son el mecanismo por el cual el equipo mantiene visibilidad, orden y criterio sobre la calidad real del producto.',
            },
        },
        {
            id: 'sqe2-modulo-integrador',
            title: 'Modulo integrador de cierre',
            subtitle: 'Conecta enfoques, tecnicas y decisiones de QA en una estrategia unica de repaso',
            type: 'Teoría',
            difficulty: 'Intermedio',
            duration: '25-35 min',
            tags: ['Repaso', 'Semana 8', 'QA Strategy', 'Integracion'],
            learningFeatures: ['Tabla comparativa', 'Casos integradores', 'Cierre'],
            content: {
                intro:
                    'Cerrar la materia no consiste en repetir definiciones, sino en <strong>integrar decisiones</strong>. Ya recorriste exploracion, formalizacion, taxonomia, riesgo, dominio, combinatoria, defectos y operacion QA. El verdadero cierre aparece cuando puedes mirar un problema nuevo y decidir con criterio: que explorar, que formalizar, que priorizar por riesgo, que tecnica de diseno usar y como transformar hallazgos en gestion accionable.',
                objectives: [
                    'Conectar los temas de la materia en un mapa de decisiones coherente.',
                    'Saber seleccionar enfoque y tecnica segun contexto del producto y del riesgo.',
                    'Reconocer artefactos de salida esperables de cada etapa del trabajo QA.',
                    'Preparar una base de repaso util para examen, proyecto o trabajo en equipo.',
                ],
                sections: [
                    {
                        type: 'calloutGroup',
                        title: 'Como repasar con criterio',
                        variant: 'info',
                        items: [
                            {
                                icon: 'layers',
                                title: 'No memorices aislado',
                                text: 'Piensa la materia como una cadena: explorar, formalizar, priorizar, diseñar entradas, comunicar y gestionar.',
                            },
                            {
                                icon: 'target',
                                title: 'Pregunta dominante',
                                text: 'Ante cada tecnica, recuerda siempre que pregunta intenta responder y que artefacto produce.',
                            },
                            {
                                icon: 'checkCircle',
                                title: 'Señal de dominio',
                                text: 'Si puedes justificar por que elegiste una tecnica y no otra, ya no estas repitiendo teoria: la estas usando.',
                            },
                        ],
                    },
                    {
                        type: 'comparisonTable',
                        title: 'Mapa rapido de seleccion',
                        headers: ['Situacion', 'Enfoque base', 'Complemento util', 'Artefacto de salida'],
                        rows: [
                            ['Producto nuevo o ambiguo', 'Exploratory testing', 'Tours o sesiones con charter', 'Hallazgos, preguntas, riesgos iniciales'],
                            ['Flujo critico ya entendido', 'Scripted testing', 'Casos de prueba trazables', 'Test cases y evidencia de ejecucion'],
                            ['Tiempo limitado y release sensible', 'Risk-Based Testing', 'Matriz y trazabilidad', 'Prioridades de cobertura y mitigacion'],
                            ['Rango o validacion de entrada', 'Equivalencia + BVA', 'Dimension secundaria', 'Tabla de clases y limites'],
                            ['Interaccion de varias variables', 'Combinatorial / Pairwise', 'Restricciones y riesgo', 'Set reducido de combinaciones'],
                            ['Hallazgo reproducible', 'Bug reporting', 'Triage y validacion', 'Defecto gestionado y seguimiento'],
                        ],
                    },
                    {
                        type: 'featureCards',
                        title: 'Mini casos integradores',
                        features: [
                            {
                                icon: 'smartphone',
                                title: 'App de salud',
                                desc: 'Explora riesgos clinicos, prioriza por impacto, prueba limites de dosificacion y reporta defectos con severidad consistente.',
                            },
                            {
                                icon: 'briefcase',
                                title: 'E-commerce',
                                desc: 'Formaliza checkout, aplica RBT a pagos, usa domain testing en cupones y combinatoria en metodos de envio y moneda.',
                            },
                            {
                                icon: 'database',
                                title: 'Sistema financiero',
                                desc: 'Combina BVA, datos invalidos, robustez, logs y triage estricto para bugs de alto impacto regulatorio.',
                            },
                            {
                                icon: 'globe',
                                title: 'Producto SaaS',
                                desc: 'Balancea exploracion continua en features nuevas con suites guiadas de regresion y gestion operativa en TCMS/bug tools.',
                            },
                        ],
                    },
                    {
                        type: 'checklist',
                        title: 'Preguntas de consolidacion',
                        ordered: true,
                        items: [
                            'Cuando conviene explorar antes de escribir casos y cuando conviene formalizar de inmediato?',
                            'Como distinguir una tecnica de seleccion de entradas de una tecnica de priorizacion?',
                            'Que cambia entre severidad y prioridad y por que el triage necesita ambas miradas?',
                            'Que valor agregan las notas de validacion sobre test cases y bugs?',
                            'Como se conectan riesgo, tolerancia a fallos y manejo de errores dentro de una estrategia de calidad?',
                        ],
                    },
                    {
                        type: 'text',
                        title: 'Como se veria una estrategia minima de QA',
                        content:
                            'Una estrategia minima y madura podria empezar con exploratory testing focalizado para comprender el producto y sus riesgos. Luego formalizaria los flujos criticos en test cases. Priorizaria la ejecucion con RBT. Diseñaria entradas con equivalencia, BVA y pairwise donde corresponda. Finalmente, gestionaria defectos y ejecucion mediante herramientas, triage y validaciones consistentes.\n\nEse encadenamiento es el hilo conductor de la materia. Las tecnicas no compiten entre si; se complementan para resolver preguntas distintas en momentos distintos.',
                    },
                    {
                        type: 'comparisonTable',
                        title: 'Problema -> tecnica -> artefacto esperado',
                        headers: ['Problema', 'Tecnica dominante', 'Artefacto esperado'],
                        rows: [
                            ['No entiendes aun el comportamiento real del producto', 'Exploratory testing con tours o charter', 'Notas, preguntas, riesgos y hallazgos iniciales'],
                            ['Necesitas repetir un flujo critico en cada build', 'Scripted testing', 'Test case claro y evidencia de ejecucion'],
                            ['No hay tiempo para cubrir todo el release', 'Risk-Based Testing', 'Matriz y orden de prioridad de cobertura'],
                            ['Una regla depende de rangos y formatos', 'Equivalencia + BVA', 'Tabla de clases, limites y casos derivados'],
                            ['Las fallas parecen surgir por interaccion', 'Pairwise o combinatoria', 'Set reducido de combinaciones relevantes'],
                            ['Ya existe un comportamiento incorrecto reproducible', 'Bug reporting + triage', 'Defecto bien reportado y seguimiento operativo'],
                        ],
                    },
                    {
                        type: 'text',
                        title: 'Caso integrador unico',
                        content:
                            'Piensa en una plataforma de telemedicina con agenda, videollamada, recetas y pagos. Primero conviene explorar agenda y pagos para descubrir reglas, integraciones y riesgo. Despues formalizar citas, cobro y emision de receta como test cases criticos. Luego priorizar por RBT aquello que mas dano causaria si falla, como pagos y acceso a consulta. Para inputs sensibles, aplicar equivalencia y BVA sobre horarios, montos o vencimiento de receta. Si aparecen hallazgos reproducibles, convertirlos en defectos completos y llevarlos a triage con evidencia y severidad defendible.',
                    },
                    {
                        type: 'exercise',
                        title: 'Ejercicio opcional: diseña una estrategia breve',
                        prompt:
                            'Te entregan una nueva plataforma de telemedicina con agenda, videollamada, recetas y pagos. Describe en un parrafo que harías primero como QA usando al menos cuatro conceptos de la materia y justificando el orden.',
                        hints: [
                            'Empieza por comprender riesgo y ambiguedad antes de saltar a cobertura mecanica.',
                            'Nombra tecnicas concretas y el artefacto que produciria cada una.',
                        ],
                        reflection:
                            'Si tu respuesta conecta aprendizaje, formalizacion, priorizacion y gestion, ya estas pensando la materia como un sistema y no como una lista.',
                    },
                    {
                        type: 'calloutGroup',
                        title: 'Guia de correccion para la practica',
                        variant: 'example',
                        items: [
                            {
                                icon: 'checkCircle',
                                title: 'Respuesta base esperada',
                                text: 'La estrategia deberia conectar al menos exploracion, formalizacion, priorizacion y gestion de defectos.',
                            },
                            {
                                icon: 'layers',
                                title: 'Respuesta mas madura',
                                text: 'Una solucion fuerte explica el orden: primero aprender, luego estabilizar cobertura critica, despues priorizar y finalmente operar seguimiento con evidencia.',
                            },
                            {
                                icon: 'target',
                                title: 'Como revisar tu cierre',
                                text: 'Si tu parrafo nombra tecnicas pero no dice que problema resuelve cada una ni que artefacto deja, todavia falta integracion real.',
                            },
                        ],
                    },
                ],
                conclusion:
                    'El cierre real de Ingeniería de Calidad de Software 2 no es saber mas terminos, sino saber tomar mejores decisiones. Si ahora puedes justificar por que explorar, que formalizar, donde priorizar y como comunicar hallazgos, entonces la materia ya esta trabajando a tu favor como criterio profesional.',
            },
        },
    ],
};

export default calidadSoftware2Subject;
