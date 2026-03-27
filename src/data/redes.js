import red1lab2img from '../assets/red1lab2.png';

const redesSubject = {
    id: 'redes-computacionales-1',
    code: 'REDES-I',
    title: 'Redes Computacionales I',
    description:
        'Fundamentos de redes, servicios de red, protocolos de comunicación, laboratorios prácticos en Linux e infraestructura básica de servidores.',
    icon: 'network',
    color: '#00d4ff',
    topics: ['TCP/IP', 'Protocolos', 'Linux', 'Servidores', 'Networking'],
    learningPath: {
        title: 'Ruta de aprendizaje sugerida',
        summary:
            'Esta materia avanza desde los conceptos que permiten que una red funcione, pasando por modelos de comunicación y capas híbridas, hasta laboratorios donde configuras servicios, observas paquetes y construyes topologías completas.',
        estimatedDuration: '4 h 25 min – 6 h 20 min',
        outcomes: [
            'Entender cómo se asignan direcciones, se organizan roles y circulan los paquetes a través de las capas.',
            'Configurar servicios reales en Linux y validarlos con criterio técnico.',
            'Analizar tráfico y topologías con Wireshark y Packet Tracer sin quedarse solo en la interfaz.',
        ],
        stages: [
            {
                title: '1. Fundamentos de direccionamiento',
                desc: 'Comprender DHCP y la información mínima que un host necesita para entrar a la red.',
            },
            {
                title: '2. Modelos y capas de comunicación',
                desc: 'Distinguir cuándo conviene una arquitectura cliente-servidor o P2P y ubicar protocolos dentro del modelo híbrido.',
            },
            {
                title: '3. Configuración guiada',
                desc: 'Aplicar IP estática, NFS y servicios básicos en laboratorios paso a paso.',
            },
            {
                title: '4. Observación de tráfico',
                desc: 'Leer Wireshark y relacionar filtros, capas y paquetes con fenómenos reales.',
            },
            {
                title: '5. Integración de servicios',
                desc: 'Construir una LAN funcional en Packet Tracer combinando DHCP, DNS, HTTP, SMTP e ICMP.',
            },
        ],
    },
    labs: [
        {
            id: 'dhcp-teoria',
            title: 'DHCP — Asignación automática de direcciones IP',
            subtitle: 'Configuración de red sin intervención manual',
            type: 'Teoría',
            difficulty: 'Básico',
            duration: '15–20 min',
            tags: ['Teoría', 'DHCP', 'Redes', 'IPv4'],
            learningFeatures: ['Simulación', 'Checklist', 'Ejercicio'],
            content: {
                intro:
                    'En las redes modernas, la asignación manual de direcciones IP a cada dispositivo no es práctica ni escalable. DHCP (Dynamic Host Configuration Protocol) soluciona este problema permitiendo que los dispositivos obtengan automáticamente su configuración de red al conectarse. Esto no solo entrega direcciones IP, sino también información vital como la máscara de subred, el gateway predeterminado y los servidores DNS.',
                objectives: [
                    'Entender qué problema operativo resuelve DHCP dentro de una red real.',
                    'Reconocer la arquitectura cliente-servidor del protocolo y sus puertos.',
                    'Seguir el proceso DORA paso a paso relacionándolo con los paquetes intercambiados.',
                    'Identificar la configuración que recibe un host al obtener una concesión.',
                    'Detectar riesgos y errores frecuentes al mezclar DHCP con configuraciones manuales.',
                ],
                models: {
                    dhcpConcept: {
                        title: '¿Qué es DHCP?',
                        whatIs:
                            'El Protocolo de Configuración Dinámica de Host (DHCP) es un protocolo de red de tipo cliente-servidor que asigna dinámicamente direcciones IP y otros parámetros de configuración de red a los dispositivos, permitiéndoles comunicarse sin intervención de un administrador.',
                        howWorks:
                            'Opera en la Capa de Aplicación del modelo TCP/IP. Utiliza el protocolo UDP para la transferencia de datos, operando específicamente en los puertos 67 (para el Servidor DHCP) y 68 (para el Cliente DHCP).',
                        examples: [
                            'Redes domésticas (Routers WiFi)',
                            'Redes empresariales corporativas',
                            'Proveedores de Internet (ISP)',
                            'Centros de datos y Cloud',
                        ],
                        pros: [
                            'Automatización completa de la configuración de red.',
                            'Reducción drástica de errores humanos (ej. conflictos de IPs duplicadas).',
                            'Administración centralizada y simplificada.',
                            'Reutilización eficiente de direcciones IP (Garantía o Lease time).',
                        ],
                        cons: [
                            'Dependencia crítica del servidor DHCP (si cae, los nuevos clientes no obtienen red).',
                            'Riesgos de seguridad como el Rogue DHCP Server (un servidor DHCP malicioso asignando configuraciones falsas).',
                            'Posibles conflictos si se combina descuidadamente con IPs estáticas.',
                        ],
                    },
                },
                dhcpProcess: {
                    title: 'El proceso de asignación DORA',
                    desc:
                        'Cuando un cliente se conecta a la red sin una IP configurada estáticamente, inicia un proceso de negociación de 4 pasos conocido como DORA:',
                    observe: [
                        'El cliente empieza sin IP útil y por eso necesita enviar broadcast.',
                        'Offer y ACK son respuestas del servidor que convierten una red “muda” en una red utilizable.',
                        'El lease actúa como un préstamo temporal, no como una asignación eterna.',
                    ],
                    steps: [
                        {
                            name: 'Discover',
                            sender: 'Cliente',
                            action: 'El cliente envía un mensaje de difusión (broadcast) al puerto 67 buscando un servidor DHCP disponible.',
                        },
                        {
                            name: 'Offer',
                            sender: 'Servidor',
                            action: 'El servidor recibe el broadcast y responde (unicast o broadcast) con una oferta de dirección IP y configuración.',
                        },
                        {
                            name: 'Request',
                            sender: 'Cliente',
                            action: 'El cliente recibe la oferta y envía una petición formal (broadcast) al servidor para aceptar la IP ofrecida.',
                        },
                        {
                            name: 'Acknowledge',
                            sender: 'Servidor',
                            action: 'El servidor confirma la asignación (ACK) y registra la IP como "prestada" por un tiempo determinado (lease).',
                        },
                    ],
                },
                dhcpConfig: {
                    title: 'Información que entrega DHCP',
                    items: [
                        'Dirección IP asignada al dispositivo.',
                        'Máscara de subred (determina la red local).',
                        'Gateway predeterminado (enrutador para salir a Internet).',
                        'Servidores DNS (para resolver nombres de dominio).',
                        'Tiempo de concesión (Lease Time, duración del préstamo de la IP).',
                    ],
                },
                sections: [
                    {
                        type: 'calloutGroup',
                        title: 'Panorama rápido antes de la simulación',
                        variant: 'info',
                        items: [
                            {
                                icon: 'lightbulb',
                                title: 'Idea central',
                                text: 'DHCP evita que un administrador tenga que ir equipo por equipo configurando IP, máscara, gateway y DNS manualmente.',
                            },
                            {
                                icon: 'box',
                                title: 'Analogía útil',
                                text: 'Piensa en DHCP como la recepción de un hotel: cuando llegas, te asignan una habitación disponible y te dicen cuánto tiempo puedes usarla.',
                            },
                            {
                                icon: 'target',
                                title: 'Qué debes poder explicar',
                                text: 'Al terminar, debes poder contar con tus palabras qué hace cada letra de <strong>DORA</strong> y por qué todo empieza con broadcast.',
                            },
                        ],
                    },
                    {
                        type: 'calloutGroup',
                        title: 'Errores comunes al trabajar con DHCP',
                        variant: 'error',
                        items: [
                            {
                                icon: 'xCircle',
                                title: 'Mezclar IP estática sin plan',
                                text: 'Si reservas un rango DHCP que también usas para IPs manuales, aparecen conflictos difíciles de diagnosticar.',
                            },
                            {
                                icon: 'alertTriangle',
                                title: 'Ignorar el lease',
                                text: 'La IP no es permanente. Si el cliente renueva tarde o el servidor cambia políticas, la dirección puede variar.',
                            },
                            {
                                icon: 'shield',
                                title: 'No pensar en seguridad',
                                text: 'Un <em>rogue DHCP</em> puede entregar DNS o gateways falsos y redirigir tráfico de manera maliciosa.',
                            },
                        ],
                    },
                    {
                        type: 'exercise',
                        title: 'Ejercicio opcional: interpreta un caso real',
                        prompt:
                            'Imagina una sala con 35 laptops que se conectan a una red universitaria. Explica por qué DHCP es mejor que una configuración manual y describe qué pasaría si el servidor DHCP deja de estar disponible a mitad de clase.',
                        hints: [
                            'Piensa primero en el tiempo operativo que ahorra.',
                            'Distingue entre equipos que ya tenían lease activo y equipos nuevos que todavía no recibieron configuración.',
                            'Incluye al menos dos parámetros además de la dirección IP.',
                        ],
                        reflection:
                            'Responder bien este ejercicio implica entender DHCP como un servicio de operación de red, no solo como una palabra de teoría.',
                    },
                ],
                conclusion:
                    'DHCP es un pilar fundamental e invisible en la administración de redes modernas. Al automatizar la configuración del direccionamiento, permite que millones de dispositivos —desde smartphones hasta servidores cloud— se conecten a redes complejas de forma casi instantánea mediante el rápido proceso DORA (Discover, Offer, Request, Acknowledge).',
            },
        },
        {
            id: 'modelos-comunicacion',
            title: 'Modelos de Comunicación en Redes',
            subtitle: 'Cliente-Servidor vs Peer-to-Peer',
            type: 'Teoría',
            difficulty: 'Básico',
            duration: '15–25 min',
            tags: ['Teoría', 'Arquitectura', 'C/S', 'P2P'],
            learningFeatures: ['Comparación', 'Simulación', 'Ejercicio'],
            content: {
                intro:
                    'Los modelos de comunicación en redes definen cómo interactúan los diferentes dispositivos (nodos) dentro de una red para intercambiar información y servicios. Elegir el modelo adecuado es una de las decisiones arquitectónicas más importantes al diseñar sistemas distribuidos, ya que impacta directamente en la escalabilidad, seguridad, mantenimiento y tolerancia a fallos del sistema.',
                objectives: [
                    'Diferenciar claramente el modelo cliente-servidor del modelo peer-to-peer.',
                    'Relacionar cada modelo con casos de uso reales y restricciones técnicas.',
                    'Comparar centralización, tolerancia a fallos, costos y complejidad operativa.',
                    'Aprender a justificar una elección arquitectónica según el problema.',
                ],
                models: {
                    clientServer: {
                        title: 'Modelo Cliente-Servidor',
                        whatIs:
                            'Es una arquitectura distribuida donde los roles están claramente definidos y separados: algunos equipos actúan como proveedores exclusivos de recursos (Servidores) y otros actúan como consumidores (Clientes).',
                        howWorks:
                            'El nodo Cliente inicia la comunicación enviando una solicitud (Request) a través de la red hacia el nodo Servidor. El Servidor recibe la solicitud, la procesa de forma centralizada (ej. consultando una base de datos o generando un archivo), y devuelve una respuesta (Response) al Cliente.',
                        examples: [
                            'Navegación Web (HTTP)',
                            'Bases de Datos centralizadas',
                            'Correo electrónico (SMTP/IMAP)',
                            'APIs RESTful',
                        ],
                        pros: [
                            'Administración y seguridad centralizada.',
                            'Copias de seguridad fáciles de gestionar.',
                            'El rendimiento del servidor puede ser escalado (Scale-up).',
                        ],
                        cons: [
                            'Punto único de fallo: si el servidor cae, los clientes se quedan sin servicio.',
                            'Cuello de botella bajo alta concurrencia.',
                            'Altos costos de infraestructura inicial.',
                        ],
                    },
                    p2p: {
                        title: 'Modelo Peer-to-Peer (P2P)',
                        whatIs:
                            'Es una arquitectura descentralizada en la que todos los nodos o participantes (Peers) tienen los mismos privilegios y responsabilidades dentro de la red.',
                        howWorks:
                            'No hay un servidor central. Cada nodo actúa de forma dinámica y simultánea como Cliente (cuando solicita recursos) y como Servidor (cuando provee recursos a otros nodos). La comunicación es directa entre los equipos.',
                        examples: [
                            'Protocolo BitTorrent',
                            'Redes Blockchain (Bitcoin, Ethereum)',
                            'Sistemas de archivos distribuidos (IPFS)',
                            'Voz sobre IP distribuida (Skype clásico)',
                        ],
                        pros: [
                            'Altamente escalable: más usuarios = más ancho de banda global.',
                            'Tolerancia a fallos: no hay un punto único de falla.',
                            'Bajos costos iniciales al no requerir servidores dedicados costosos.',
                        ],
                        cons: [
                            'Administración compleja: seguridad y backups descentralizados.',
                            'Rendimiento impredecible (depende del nodo al que te conectes).',
                            'Dificultad para localizar archivos sin un directorio central.',
                        ],
                    },
                },
                comparison: [
                    { aspect: 'Arquitectura', cs: 'Centralizada', p2p: 'Descentralizada / Distribuida' },
                    { aspect: 'Roles', cs: 'Definidos y fijos (Cliente o Servidor)', p2p: 'Dinámicos (Actúa de ambos)' },
                    {
                        aspect: 'Escalabilidad',
                        cs: 'Limitada por recursos del Servidor (o requiere balanceadores)',
                        p2p: 'Altamente escalable por diseño (cada nodo suma recursos)',
                    },
                    {
                        aspect: 'Tolerancia a Fallos',
                        cs: 'Baja (si cae el servidor central, falla el sistema)',
                        p2p: 'Alta (si cae un nodo, la red sigue funcionando)',
                    },
                    {
                        aspect: 'Administración',
                        cs: 'Fácil, centralizada y estandarizada',
                        p2p: 'Compleja, las políticas deben replicarse por nodo',
                    },
                ],
                sections: [
                    {
                        type: 'calloutGroup',
                        title: 'Cómo pensar esta comparación',
                        variant: 'info',
                        items: [
                            {
                                icon: 'target',
                                title: 'Pregunta guía',
                                text: 'Antes de elegir un modelo, pregunta: <strong>¿quiero control central o resiliencia distribuida?</strong>',
                            },
                            {
                                icon: 'server',
                                title: 'Pista práctica',
                                text: 'La mayoría de aplicaciones web modernas viven cómodamente en cliente-servidor porque priorizan control, auditoría y seguridad.',
                            },
                            {
                                icon: 'globe',
                                title: 'Pista práctica 2',
                                text: 'P2P brilla cuando distribuir recursos entre muchos nodos hace al sistema más fuerte o más barato.',
                            },
                        ],
                    },
                    {
                        type: 'calloutGroup',
                        title: 'Errores comunes al comparar modelos',
                        variant: 'warning',
                        items: [
                            {
                                icon: 'alertTriangle',
                                title: 'Pensar que P2P siempre es “mejor” por ser distribuido',
                                text: 'Distribuir no elimina la complejidad: seguridad, descubrimiento de nodos y consistencia suelen volverse más difíciles.',
                            },
                            {
                                icon: 'alertTriangle',
                                title: 'Asumir que cliente-servidor no escala',
                                text: 'Sí escala, pero necesita recursos, replicación, balanceadores y una estrategia operativa sólida.',
                            },
                        ],
                    },
                    {
                        type: 'exercise',
                        title: 'Ejercicio opcional: elige arquitectura',
                        prompt:
                            'Tienes que diseñar dos sistemas: una API bancaria y una plataforma de intercambio masivo de archivos entre usuarios. Decide qué modelo usarías en cada caso y justifica tu respuesta con seguridad, escalabilidad y tolerancia a fallos.',
                        hints: [
                            'No basta con decir “porque sí”: nombra el tradeoff principal.',
                            'Piensa en quién controla los datos y quién aporta recursos.',
                            'Compara qué pasaría si un nodo central cae.',
                        ],
                    },
                ],
                conclusion:
                    'La elección entre Cliente-Servidor y P2P depende del caso de uso. El modelo Cliente-Servidor es el estándar de facto para aplicaciones web modernas, bases de datos y sistemas corporativos porque garantiza control y seguridad sobre los datos. Por otro lado, el modelo P2P brilla en aplicaciones donde la resistencia a la censura, la distribución masiva de archivos pesados y la reducción de costos de transferencia son las prioridades absolutas.',
            },
        },
        {
            id: 'modelo-capas-hibrido',
            title: 'Modelo de Capas Híbrido',
            subtitle: 'Puente práctico entre OSI y TCP/IP para interpretar tráfico real',
            type: 'Teoría',
            difficulty: 'Básico',
            duration: '20–30 min',
            tags: ['Redes 1', 'Modelo híbrido', 'OSI', 'TCP/IP', 'Capas', 'HTTP', 'TCP', 'IP'],
            learningFeatures: ['Simulación', 'Mapa por capas', 'Ejercicio'],
            content: {
                intro:
                    'Cuando estudias redes, pronto aparecen dos modelos de referencia muy conocidos: <strong>OSI</strong> y <strong>TCP/IP</strong>. El problema es que uno suele enseñarse con mucho detalle teórico y el otro se usa más en la práctica operativa. El <strong>modelo de capas híbrido</strong> nace precisamente para unir ambos enfoques: conserva la claridad pedagógica del OSI, pero organiza las capas de una forma más cercana a cómo se describen realmente los protocolos en redes modernas. Para un estudiante de Redes 1, este modelo es especialmente útil porque permite ubicar con rapidez dónde trabajan protocolos como HTTP, TCP, IP o Ethernet sin perderse entre demasiadas subdivisiones.',
                objectives: [
                    'Comprender qué es el modelo híbrido y por qué se usa como puente entre teoría y práctica.',
                    'Relacionar las capas del modelo OSI con las del modelo TCP/IP de forma ordenada.',
                    'Identificar las cinco capas del modelo híbrido y el rol principal de cada una.',
                    'Ubicar protocolos, dispositivos y conceptos clave dentro de la capa que les corresponde.',
                    'Aplicar el modelo híbrido al análisis de escenarios reales como navegación web y envío de datos.',
                ],
                sections: [
                    {
                        type: 'calloutGroup',
                        title: 'Antes de entrar capa por capa',
                        variant: 'info',
                        items: [
                            {
                                icon: 'layers',
                                title: 'Idea central',
                                text: 'El modelo híbrido no intenta reemplazar a OSI o TCP/IP, sino darte una <strong>herramienta mental más práctica</strong> para estudiar protocolos y tráfico real.',
                            },
                            {
                                icon: 'target',
                                title: 'Qué debes lograr',
                                text: 'Al terminar, deberías poder explicar por qué <strong>HTTP</strong> vive en Aplicación, <strong>TCP</strong> en Transporte e <strong>IP</strong> en Red sin dudar.',
                            },
                            {
                                icon: 'box',
                                title: 'Analogía útil',
                                text: 'Piensa en el modelo híbrido como un mapa simplificado del viaje de un dato: primero se genera el mensaje, luego se segmenta, se direcciona, se encapsula localmente y finalmente se convierte en señal física.',
                            },
                        ],
                    },
                    {
                        type: 'text',
                        title: '1. ¿Qué es el modelo híbrido y por qué se usa?',
                        content:
                            'El modelo híbrido es una forma de estudiar redes usando <strong>cinco capas</strong> que combinan la precisión conceptual del modelo OSI con la lógica operativa del modelo TCP/IP. Su valor está en que reduce complejidad sin perder sentido técnico.\n\nOSI fue creado como modelo de referencia y divide la comunicación en siete capas. TCP/IP, en cambio, describe la pila real usada en Internet y suele resumirse en cuatro capas. El modelo híbrido toma lo mejor de ambos: fusiona algunas capas del OSI cuando, en la práctica, suelen analizarse juntas, y mantiene una estructura lo bastante clara como para ubicar protocolos, dispositivos y problemas.\n\nPor eso se utiliza mucho en clases introductorias, análisis de tráfico y documentación técnica: <strong>te permite ver la red como una secuencia ordenada de responsabilidades</strong> en lugar de como una lista aislada de protocolos.',
                    },
                    {
                        type: 'comparisonTable',
                        title: '2. Relación entre OSI, TCP/IP y el modelo híbrido',
                        headers: ['Capa híbrida', 'Equivalencia en OSI', 'Equivalencia en TCP/IP', 'Ejemplos típicos'],
                        rows: [
                            ['Aplicación', 'Aplicación + Presentación + Sesión', 'Aplicación', 'HTTP, HTTPS, DNS, SMTP, FTP'],
                            ['Transporte', 'Transporte', 'Transporte', 'TCP, UDP, puertos'],
                            ['Red', 'Red', 'Internet', 'IP, ICMP, routers'],
                            ['Enlace de Datos', 'Enlace de Datos', 'Acceso a la red', 'Ethernet, Wi-Fi, ARP, switches, MAC'],
                            ['Física', 'Física', 'Acceso a la red (medio físico)', 'UTP, fibra óptica, señales eléctricas, ópticas o de radio'],
                        ],
                    },
                    {
                        type: 'process',
                        title: '3. Simulación: viaje de una solicitud por las 5 capas',
                        desc: 'Observa cómo un dato de aplicación se transforma a medida que desciende por la pila hasta convertirse en señal física, y cómo cada capa agrega su propia función.',
                        simType: 'hybrid-layers',
                        observe: [
                            'La Aplicación genera el mensaje útil para el usuario o la app.',
                            'Transporte segmenta y controla la comunicación extremo a extremo.',
                            'Red direcciona el paquete entre redes distintas usando IP.',
                            'Enlace y Física se ocupan del salto local y del medio real por donde viajan los bits.',
                        ],
                    },
                    {
                        type: 'featureCards',
                        title: '4. Las 5 capas del modelo híbrido',
                        features: [
                            {
                                icon: 'activity',
                                title: 'Física',
                                desc: '<strong>Qué hace:</strong> transporta bits como señales eléctricas, ópticas o de radio.<br/><strong>Ejemplos:</strong> cable UTP, fibra óptica, Wi-Fi, repetidores, conectores, modulación.<br/><strong>Idea clave:</strong> aquí todavía no hablamos de direcciones IP ni puertos; solo del medio y la señal.',
                            },
                            {
                                icon: 'network',
                                title: 'Enlace de Datos',
                                desc: '<strong>Qué hace:</strong> organiza el envío local en tramas y usa direcciones MAC para la comunicación dentro del mismo segmento.<br/><strong>Ejemplos:</strong> Ethernet, Wi-Fi, ARP, switches, control de acceso al medio.<br/><strong>Idea clave:</strong> esta capa permite que dos nodos vecinos se entiendan en la red local.',
                            },
                            {
                                icon: 'globe',
                                title: 'Red',
                                desc: '<strong>Qué hace:</strong> decide cómo enrutar paquetes entre redes diferentes usando direccionamiento lógico.<br/><strong>Ejemplos:</strong> IP, ICMP, routers, subredes, gateway predeterminado.<br/><strong>Idea clave:</strong> aquí importa la dirección IP y el camino hacia el destino.',
                            },
                            {
                                icon: 'server',
                                title: 'Transporte',
                                desc: '<strong>Qué hace:</strong> administra la comunicación extremo a extremo entre procesos de origen y destino.<br/><strong>Ejemplos:</strong> TCP, UDP, puertos, control de flujo, confiabilidad, retransmisión.<br/><strong>Idea clave:</strong> esta capa responde a preguntas como “¿llegó completo?” y “¿a qué aplicación va?”.',
                            },
                            {
                                icon: 'package',
                                title: 'Aplicación',
                                desc: '<strong>Qué hace:</strong> ofrece servicios de red directamente utilizables por programas y usuarios.<br/><strong>Ejemplos:</strong> HTTP, HTTPS, DNS, SMTP, POP3, FTP, DHCP.<br/><strong>Idea clave:</strong> aquí viven los protocolos que el usuario percibe como servicios concretos.',
                            },
                        ],
                    },
                    {
                        type: 'process',
                        title: '5. Ejemplo práctico: abrir una página web',
                        desc: 'Usa esta escena para conectar la teoría con una situación real: la solicitud HTTP baja por las cinco capas en el cliente, cruza el medio físico y luego sube por las cinco capas en el servidor hasta llegar al servicio web.',
                        simType: 'hybrid-web-request',
                        observe: [
                            'La solicitud nace como mensaje de Aplicación y se va encapsulando al bajar capa por capa.',
                            'TCP, IP y Ethernet/Wi-Fi no compiten entre sí: cada uno agrega información distinta sobre el mismo dato.',
                            'El medio físico no “entiende” HTTP; solo transporta bits o señales.',
                            'En el servidor ocurre el recorrido inverso: desencapsulación hasta entregar el mensaje a la Aplicación.',
                        ],
                    },
                    {
                        type: 'calloutGroup',
                        title: 'Errores comunes al estudiar el modelo híbrido',
                        variant: 'warning',
                        items: [
                            {
                                icon: 'alertTriangle',
                                title: 'Memorizar protocolos sin ubicarlos',
                                text: 'No basta con saber que existe TCP o DNS. Lo importante es entender <strong>qué responsabilidad cumple cada uno</strong> y en qué capa trabaja.',
                            },
                            {
                                icon: 'alertTriangle',
                                title: 'Confundir “capa” con “dispositivo”',
                                text: 'Un router no “es” la capa de red; más bien es un dispositivo cuya función principal trabaja sobre esa capa.',
                            },
                            {
                                icon: 'helpCircle',
                                title: 'Pensar que el modelo híbrido contradice a OSI',
                                text: 'En realidad, el modelo híbrido es una simplificación pedagógica. Sigue siendo compatible con la idea de encapsulación y separación por funciones.',
                            },
                        ],
                    },
                    {
                        type: 'checklist',
                        title: 'Resumen final',
                        items: [
                            'El modelo híbrido combina claridad teórica y utilidad práctica para estudiar redes.',
                            'OSI ofrece más detalle conceptual; TCP/IP describe la pila real de Internet; el híbrido conecta ambos mundos.',
                            'Las cinco capas del modelo híbrido son Física, Enlace de Datos, Red, Transporte y Aplicación.',
                            'HTTP, TCP, IP, Ethernet y el medio físico pueden entenderse mejor cuando los ubicas dentro de esta secuencia.',
                        ],
                    },
                    {
                        type: 'exercise',
                        title: 'Ejercicio opcional: ubica cada elemento en su capa',
                        prompt:
                            'Imagina que un estudiante abre un navegador, escribe una URL, el equipo resuelve el nombre por DNS y luego descarga una página web. Explica qué papel cumplen HTTP, TCP, IP, la MAC del adaptador y el medio físico dentro del modelo híbrido.',
                        hints: [
                            'Empieza por la Aplicación y baja capa por capa.',
                            'Distingue entre direccionamiento lógico (IP) y direccionamiento físico/local (MAC).',
                            'No olvides mencionar qué capa ve el usuario y cuáles trabajan “por debajo”.',
                        ],
                        expectedOutput:
                            'La respuesta debería ubicar cada protocolo o concepto dentro de la capa correcta y explicar brevemente qué aporta al proceso de comunicación.',
                        reflection:
                            'Si puedes reconstruir ese recorrido con orden, ya no estás memorizando protocolos: estás entendiendo cómo coopera la pila de red.',
                    },
                ],
                conclusion:
                    'El modelo de capas híbrido es especialmente valioso en Redes 1 porque convierte una lista abstracta de protocolos en un mapa lógico del viaje de los datos. Cuando lo dominas, analizar paquetes en Wireshark, entender una configuración IP o diagnosticar una navegación web deja de ser un conjunto de hechos sueltos y pasa a convertirse en una historia coherente capa por capa.',
            },
        },
        {
            id: 'nfs-ubuntu',
            title: 'Configuración de servidor NFS con Ubuntu',
            subtitle: 'Cliente y servidor usando dos máquinas virtuales',
            type: 'Laboratorio',
            difficulty: 'Intermedio',
            duration: '45–60 min',
            tags: ['Ubuntu', 'Linux', 'NFS', 'Networking', 'Virtual Machines'],
            learningFeatures: ['Arquitectura', 'Paso a paso', 'Troubleshooting'],
            guide: {
                intro:
                    'NFS (Network File System) es uno de los mecanismos clásicos para compartir directorios en entornos Linux y Unix. En este laboratorio pasarás de la idea general al montaje real de un recurso remoto, entendiendo qué exporta el servidor, qué monta el cliente y cómo verificar que ambos ven el mismo sistema de archivos.',
                introCards: [
                    {
                        icon: 'signal',
                        title: '¿Qué es NFS?',
                        text: 'NFS (Network File System) es un protocolo de sistema de archivos distribuido que permite a un equipo (cliente) acceder a archivos almacenados en otro equipo (servidor) a través de una red, como si estuvieran en su propio disco local.',
                    },
                    {
                        icon: 'target',
                        title: '¿Para qué sirve?',
                        text: 'Sirve para compartir directorios y archivos entre múltiples equipos de una red de forma transparente. Es ampliamente usado en entornos Linux/Unix para compartir recursos entre servidores, clusters y estaciones de trabajo.',
                    },
                    {
                        icon: 'lightbulb',
                        title: '¿Cuándo es útil?',
                        text: 'Es útil cuando necesitas compartir datos entre varias máquinas sin duplicarlos, centralizar el almacenamiento, o montar directorios remotos de forma automática al iniciar el sistema.',
                    },
                    {
                        icon: 'layers',
                        title: 'Arquitectura cliente-servidor',
                        text: 'NFS sigue una arquitectura cliente-servidor clásica:<br/>- El servidor exporta (comparte) uno o más directorios.<br/>- El cliente monta esos directorios en su sistema de archivos local.<br/>- La comunicación ocurre a través del protocolo NFS sobre TCP/IP.',
                    },
                ],
                quickNotes: [
                    {
                        icon: 'target',
                        title: 'Qué debes lograr',
                        text: 'Al final del laboratorio, un archivo creado desde el cliente debe aparecer físicamente en el servidor.',
                    },
                    {
                        icon: 'shield',
                        title: 'Buenas prácticas',
                        text: 'Este laboratorio usa permisos amplios para aprender rápido. En producción conviene restringir IPs, usuarios y permisos.',
                    },
                ],
                scenario: {
                    description: 'Para este laboratorio utilizaremos dos máquinas virtuales Ubuntu conectadas en la misma red:',
                    connectorLabel: 'Red NFS · TCP/IP',
                    vms: [
                        { name: 'VM1', role: 'Cliente NFS', ip: '192.168.1.10', desc: 'Accede a los archivos compartidos por el servidor.' },
                        { name: 'VM2', role: 'Servidor NFS', ip: '192.168.1.20', desc: 'Exporta directorios para que el cliente los monte.' },
                    ],
                },
                objectives: [
                    'Comprender el funcionamiento del protocolo NFS y su arquitectura cliente-servidor.',
                    'Configurar un servidor NFS en Ubuntu usando el paquete nfs-kernel-server.',
                    'Exportar directorios compartidos de forma controlada a través de /etc/exports.',
                    'Montar recursos NFS remotos en un cliente Linux y acceder a ellos como si fueran locales.',
                    'Verificar la comunicación bidireccional entre cliente y servidor.',
                    'Crear y modificar archivos en un sistema de archivos remoto en tiempo real.',
                ],
                technologies: [
                    { name: 'Ubuntu Linux', category: 'SO' },
                    { name: 'NFS — Network File System', category: 'Protocolo' },
                    { name: 'TCP/IP Networking', category: 'Red' },
                    { name: 'Virtual Machines', category: 'Infraestructura' },
                    { name: 'Bash / Linux CLI', category: 'Herramienta' },
                    { name: 'systemd services', category: 'Herramienta' },
                    { name: 'nfs-kernel-server', category: 'Paquete' },
                    { name: 'nfs-common', category: 'Paquete' },
                ],
                labArchitecture: {
                    client: {
                        name: 'VM1 — Cliente NFS',
                        ip: '192.168.1.10',
                        packages: ['Ubuntu', 'nfs-common'],
                        mounts: '/mnt/nfs/compartido',
                    },
                    server: {
                        name: 'VM2 — Servidor NFS',
                        ip: '192.168.1.20',
                        packages: ['Ubuntu', 'nfs-kernel-server'],
                        exports: '/srv/nfs/compartido',
                    },
                    connection: 'NFS sobre TCP/IP — Puerto 2049',
                    desc:
                        'La arquitectura es deliberadamente simple: un servidor exporta un directorio y un cliente lo monta como si fuera local. Ese recorrido te permite ver con claridad qué ocurre en cada extremo.',
                },
                stepsDesc:
                    'Sigue los pasos en orden. Cada comando cumple una función específica: conectividad, instalación, exportación, montaje y verificación final.',
                steps: [
                    {
                        id: 1,
                        title: 'Verificar conectividad entre las máquinas',
                        vm: 'VM1 (Cliente)',
                        command: 'ping 192.168.1.20 -c 4',
                        explanation:
                            'El comando `ping` envía 4 paquetes ICMP a la IP del servidor para verificar que ambas máquinas se comunican correctamente. La opción `-c 4` limita la prueba a 4 paquetes.',
                        expectedOutput: `PING 192.168.1.20 (192.168.1.20) 56(84) bytes of data.
64 bytes from 192.168.1.20: icmp_seq=1 ttl=64 time=0.5 ms
64 bytes from 192.168.1.20: icmp_seq=2 ttl=64 time=0.4 ms
64 bytes from 192.168.1.20: icmp_seq=3 ttl=64 time=0.6 ms
64 bytes from 192.168.1.20: icmp_seq=4 ttl=64 time=0.5 ms`,
                        outputExplanation:
                            'Si recibes respuestas de la IP del servidor para todos los paquetes, la conectividad es correcta. Si no hay respuesta, verifica la configuración de red de ambas VMs.',
                    },
                    {
                        id: 2,
                        title: 'Instalar NFS Server en VM2',
                        vm: 'VM2 (Servidor)',
                        commands: [
                            { cmd: 'sudo apt update', desc: 'Actualiza la lista de paquetes disponibles en los repositorios.' },
                            { cmd: 'sudo apt install nfs-kernel-server -y', desc: 'Instala el servidor NFS. La opción `-y` acepta automáticamente la confirmación.' },
                        ],
                        expectedOutput: `Reading package lists... Done
Building dependency tree... Done
The following NEW packages will be installed:
  nfs-kernel-server
...`,
                        outputExplanation:
                            'El sistema descarga e instala el servidor NFS junto con sus dependencias. Al finalizar, el servicio `nfs-kernel-server` quedará activo.',
                    },
                    {
                        id: 3,
                        title: 'Crear directorios compartidos',
                        vm: 'VM2 (Servidor)',
                        commands: [
                            { cmd: 'sudo mkdir -p /srv/nfs/compartido', desc: 'Crea el directorio que será compartido. La opción `-p` crea todos los directorios padres necesarios si no existen.' },
                        ],
                        expectedOutput: '(Sin salida — el directorio se crea silenciosamente si no hay errores)',
                        outputExplanation:
                            'Si no aparece ningún mensaje de error, el directorio fue creado exitosamente. Puedes verificarlo con `ls /srv/nfs/`.',
                    },
                    {
                        id: 4,
                        title: 'Asignar permisos al directorio',
                        vm: 'VM2 (Servidor)',
                        commands: [
                            { cmd: 'sudo chown nobody:nogroup /srv/nfs/compartido', desc: 'Asigna el directorio al usuario y grupo `nobody:nogroup`, recomendado para recursos NFS accesibles por múltiples clientes.' },
                            { cmd: 'sudo chmod 777 /srv/nfs/compartido', desc: 'Otorga permisos de lectura, escritura y ejecución a todos los usuarios. En producción se recomienda usar permisos más restrictivos.' },
                        ],
                        expectedOutput: '(Sin salida — los permisos se aplican silenciosamente)',
                        outputExplanation:
                            'Puedes verificar los permisos con `ls -la /srv/nfs/` y deberías ver `drwxrwxrwx` con propietario `nobody nogroup`.',
                    },
                    {
                        id: 5,
                        title: 'Configurar el archivo /etc/exports',
                        vm: 'VM2 (Servidor)',
                        command: 'sudo nano /etc/exports',
                        explanation:
                            'El archivo `/etc/exports` define qué directorios se comparten y con qué permisos. Agrega la siguiente línea al archivo:',
                        codeblock: '/srv/nfs/compartido    192.168.1.0/24(rw,sync,no_subtree_check)',
                        codeExplanation: `- \`/srv/nfs/compartido\` — directorio a exportar
- \`192.168.1.0/24\` — permite acceso a toda la subred (puedes especificar una IP concreta como 192.168.1.10)
- \`rw\` — permite lectura y escritura
- \`sync\` — escribe los cambios al disco antes de responder al cliente (más seguro)
- \`no_subtree_check\` — evita verificaciones de subdirectorios, mejora el rendimiento`,
                        expectedOutput: 'El archivo se guarda. Presiona Ctrl+O para guardar y Ctrl+X para salir de nano.',
                        outputExplanation:
                            'Cada vez que modifiques este archivo deberás recargar la configuración con `exportfs -ra`.',
                    },
                    {
                        id: 6,
                        title: 'Aplicar la configuración de exports',
                        vm: 'VM2 (Servidor)',
                        command: 'sudo exportfs -ra',
                        explanation:
                            '`exportfs` administra la tabla de exportaciones del servidor NFS. La opción `-r` recarga todos los directorios exportados, y `-a` aplica todos los cambios definidos en `/etc/exports`.',
                        expectedOutput: '(Sin salida si no hay errores)',
                        outputExplanation:
                            'Si hay errores de sintaxis en `/etc/exports`, aparecerán aquí. Puedes verificar los exports activos con `sudo exportfs -v`.',
                    },
                    {
                        id: 7,
                        title: 'Reiniciar el servicio NFS',
                        vm: 'VM2 (Servidor)',
                        command: 'sudo systemctl restart nfs-kernel-server',
                        explanation:
                            '`systemctl restart` detiene y vuelve a iniciar el servicio NFS para que tome los últimos cambios de configuración.',
                        expectedOutput: '(Sin salida si el servicio reinicia correctamente)',
                        outputExplanation:
                            'Verifica que el servicio está activo con `sudo systemctl status nfs-kernel-server`. Deberías ver `active (running)` en verde.',
                    },
                    {
                        id: 8,
                        title: 'Instalar el cliente NFS en VM1',
                        vm: 'VM1 (Cliente)',
                        commands: [
                            { cmd: 'sudo apt update', desc: 'Actualiza la lista de paquetes.' },
                            { cmd: 'sudo apt install nfs-common -y', desc: 'Instala el paquete cliente de NFS, que incluye las utilidades necesarias para montar recursos NFS remotos.' },
                        ],
                        expectedOutput: 'El sistema instala `nfs-common` con sus dependencias.',
                        outputExplanation:
                            'Este paquete instala herramientas como `showmount` y el soporte para montar sistemas de archivos NFS con el comando `mount`.',
                    },
                    {
                        id: 9,
                        title: 'Consultar recursos exportados por el servidor',
                        vm: 'VM1 (Cliente)',
                        command: 'showmount -e 192.168.1.20',
                        explanation:
                            '`showmount -e` muestra los directorios que el servidor NFS está exportando. La opción `-e` (export list) lista todos los recursos disponibles para montaje.',
                        expectedOutput: `Export list for 192.168.1.20:
/srv/nfs/compartido  192.168.1.0/24`,
                        outputExplanation:
                            'Verás el directorio que configuraste en `/etc/exports`. Si no aparece, verifica que el firewall no esté bloqueando el puerto 2049 (NFS) en el servidor.',
                    },
                    {
                        id: 10,
                        title: 'Crear punto de montaje en VM1',
                        vm: 'VM1 (Cliente)',
                        command: 'sudo mkdir -p /mnt/nfs/compartido',
                        explanation:
                            'Crea un directorio local vacío donde se montará el sistema de archivos remoto. Este directorio actúa como "punto de entrada" al contenido del servidor.',
                        expectedOutput: '(Sin salida)',
                        outputExplanation:
                            'El directorio `/mnt/nfs/compartido` ahora existe localmente y está listo para recibir el montaje NFS.',
                    },
                    {
                        id: 11,
                        title: 'Montar el recurso NFS',
                        vm: 'VM1 (Cliente)',
                        command: 'sudo mount 192.168.1.20:/srv/nfs/compartido /mnt/nfs/compartido',
                        explanation:
                            '`mount` conecta el directorio remoto del servidor (`192.168.1.20:/srv/nfs/compartido`) con el punto de montaje local (`/mnt/nfs/compartido`). A partir de este momento, todo lo que aparezca en `/mnt/nfs/compartido` proviene del servidor.',
                        expectedOutput: '(Sin salida si el montaje fue exitoso)',
                        outputExplanation:
                            'Verifica el montaje con `df -h`: deberías ver `192.168.1.20:/srv/nfs/compartido` en la lista de sistemas de archivos montados.',
                    },
                    {
                        id: 12,
                        title: 'Listar archivos del directorio remoto',
                        vm: 'VM1 (Cliente)',
                        command: 'ls /mnt/nfs/compartido',
                        explanation:
                            '`ls` lista el contenido del directorio montado. Cualquier archivo presente en el servidor aparecerá aquí.',
                        expectedOutput: '(Vacío si el directorio del servidor está vacío)',
                        outputExplanation:
                            'Si el directorio está vacío, es normal: aún no hemos creado archivos. Esto confirma que el montaje funciona correctamente.',
                    },
                    {
                        id: 13,
                        title: 'Crear un archivo desde el cliente',
                        vm: 'VM1 (Cliente)',
                        command: 'echo "Hola desde VM1 - cliente NFS" > /mnt/nfs/compartido/prueba.txt',
                        explanation:
                            '`echo` escribe texto y el operador `>` redirige la salida al archivo `prueba.txt` dentro del directorio montado. Este archivo se creará físicamente en el servidor (VM2).',
                        expectedOutput: '(Sin salida)',
                        outputExplanation:
                            'El archivo `prueba.txt` se ha creado en el servidor a través de la red. Puedes verificarlo listando el directorio: `ls /mnt/nfs/compartido`.',
                    },
                    {
                        id: 14,
                        title: 'Verificar el archivo en el servidor',
                        vm: 'VM2 (Servidor)',
                        commands: [
                            { cmd: 'ls /srv/nfs/compartido', desc: 'Lista el directorio compartido en el servidor.' },
                            { cmd: 'cat /srv/nfs/compartido/prueba.txt', desc: 'Muestra el contenido del archivo creado desde el cliente.' },
                        ],
                        expectedOutput: `# ls
prueba.txt

# cat
Hola desde VM1 - cliente NFS`,
                        outputExplanation:
                            'El archivo creado desde el cliente (VM1) aparece en el servidor (VM2). Esto confirma que la configuración NFS funciona correctamente en ambas direcciones.',
                    },
                ],
                verificationDesc:
                    'Usa estas comprobaciones para confirmar el montaje, los exports activos y el estado del servicio antes de dar el laboratorio por terminado.',
                verification: [
                    {
                        title: 'Verificar sistemas de archivos montados (VM1)',
                        vm: 'VM1 (Cliente)',
                        command: 'df -h | grep nfs',
                        explanation:
                            '`df -h` muestra el uso de espacio de todos los sistemas de archivos en formato legible. La tubería `| grep nfs` filtra únicamente las líneas que contienen "nfs", mostrando solo los montajes NFS activos.',
                        expectedOutput: '192.168.1.20:/srv/nfs/compartido   19G  5.2G   13G  30% /mnt/nfs/compartido',
                        outputExplanation:
                            'La salida muestra el servidor de origen, el tamaño total, el espacio usado, el disponible, el porcentaje de uso y el punto de montaje. Si no aparece, el montaje no está activo.',
                    },
                    {
                        title: 'Verificar exports activos (VM2)',
                        vm: 'VM2 (Servidor)',
                        command: 'sudo exportfs -v',
                        explanation:
                            '`exportfs -v` muestra en detalle todos los directorios que el servidor está exportando activamente, incluyendo los permisos y las opciones configuradas.',
                        expectedOutput:
                            '/srv/nfs/compartido\n    192.168.1.0/24(rw,wdelay,root_squash,no_subtree_check,sec=sys,rw,secure,root_squash,no_all_squash)',
                        outputExplanation:
                            'Confirma que el directorio está siendo exportado con las opciones correctas. `root_squash` es una medida de seguridad que evita que el usuario root del cliente tenga privilegios de root en el servidor.',
                    },
                    {
                        title: 'Verificar estado del servicio NFS (VM2)',
                        vm: 'VM2 (Servidor)',
                        command: 'sudo systemctl status nfs-kernel-server',
                        explanation:
                            '`systemctl status` muestra el estado actual del servicio NFS, incluyendo si está activo, desde cuándo, y los últimos registros del sistema.',
                        expectedOutput: `● nfs-server.service - NFS server and services
   Loaded: loaded (/lib/systemd/system/nfs-server.service; enabled)
   Active: active (running) since ...`,
                        outputExplanation:
                            'El estado "active (running)" confirma que el servicio está funcionando correctamente. Si aparece "failed" o "inactive", reinicia el servicio con `sudo systemctl restart nfs-kernel-server`.',
                    },
                ],
                troubleshooting: [
                    {
                        error: 'access denied by server',
                        cause: 'La IP del cliente no está autorizada en el archivo /etc/exports del servidor.',
                        fix: {
                            description: 'Editar /etc/exports y verificar que la IP o subred del cliente esté incluida. Luego recargar la configuración:',
                            command: '# Editar exports\nsudo nano /etc/exports\n\n# Recargar configuración\nsudo exportfs -ra',
                        },
                    },
                    {
                        error: 'mount: connection timed out',
                        cause: 'El firewall del servidor está bloqueando el puerto 2049 (NFS) o hay un problema de conectividad de red entre las VMs.',
                        fix: {
                            description: 'Verificar el estado del firewall en el servidor y permitir el tráfico NFS:',
                            command: '# Verificar firewall\nsudo ufw status\n\n# Permitir NFS\nsudo ufw allow nfs\n\n# Verificar conectividad\nping 192.168.1.20 -c 4',
                        },
                    },
                    {
                        error: 'No route to host',
                        cause: 'Las VMs no están en la misma red o la configuración de red no permite la comunicación entre ellas.',
                        fix: {
                            description:
                                'Verificar la configuración de red de ambas VMs. Deben estar en el mismo adaptador de red (por ejemplo, "Red interna" o "NAT Network" en VirtualBox):',
                            command: '# Ver interfaces de red\nip addr show\n\n# Ver tabla de rutas\nip route show',
                        },
                    },
                    {
                        error: 'mount.nfs: rpcbind failure',
                        cause: 'El servicio rpcbind (necesario para NFS) no está activo en el servidor.',
                        fix: {
                            description: 'Iniciar el servicio rpcbind en el servidor:',
                            command: 'sudo systemctl start rpcbind\nsudo systemctl enable rpcbind',
                        },
                    },
                ],
                learnings: [
                    {
                        concept: 'Arquitectura cliente-servidor',
                        desc: 'NFS implementa el patrón cliente-servidor donde un equipo ofrece recursos (servidor) y otros los consumen (clientes) a través de la red, sin necesidad de copiar archivos.',
                    },
                    {
                        concept: 'Sistemas de archivos distribuidos',
                        desc: 'Un sistema de archivos distribuido permite que múltiples equipos compartan un espacio de almacenamiento común, manteniendo la consistencia de datos a través de la red.',
                    },
                    {
                        concept: 'Administración de servicios en Linux',
                        desc: 'Se practicó el uso de systemd para controlar el ciclo de vida de un servicio (start, stop, restart, status), una habilidad fundamental en administración de sistemas Linux.',
                    },
                    {
                        concept: 'Montaje de sistemas de archivos remotos',
                        desc: 'El comando mount permite integrar recursos remotos en el árbol de directorios local de forma transparente, permitiendo a las aplicaciones acceder a archivos remotos con las mismas herramientas que usan localmente.',
                    },
                    {
                        concept: 'Compartición de recursos en red',
                        desc: 'Se comprendió cómo exportar directorios con permisos específicos a subredes o IPs determinadas, aplicando el principio de mínimo privilegio en el acceso a recursos compartidos.',
                    },
                ],
                extensions: [
                    {
                        title: 'Montaje automático con /etc/fstab',
                        desc: 'Configurar el montaje NFS para que se realice automáticamente al iniciar el sistema cliente, editando el archivo /etc/fstab.',
                        command: '# Agregar al final de /etc/fstab en VM1:\n192.168.1.20:/srv/nfs/compartido  /mnt/nfs/compartido  nfs  defaults  0  0',
                    },
                    {
                        title: 'Múltiples clientes NFS',
                        desc: 'Agregar una tercera VM (VM3) como segundo cliente NFS, repitiendo los pasos del cliente y verificando que todos acceden al mismo directorio compartido.',
                        command: '# En /etc/exports del servidor:\n/srv/nfs/compartido  192.168.1.0/24(rw,sync,no_subtree_check)',
                    },
                    {
                        title: 'Restricción por IP específica',
                        desc: 'En lugar de permitir toda la subred, restringir el acceso a una sola IP para mayor seguridad.',
                        command: '# En /etc/exports — solo VM1 puede acceder:\n/srv/nfs/compartido  192.168.1.10(rw,sync,no_subtree_check)',
                    },
                    {
                        title: 'Permisos más seguros',
                        desc: 'Reemplazar los permisos 777 por una configuración más restrictiva, usando usuarios y grupos específicos en lugar de nobody:nogroup.',
                        command: 'sudo chown 1000:1000 /srv/nfs/compartido\nsudo chmod 755 /srv/nfs/compartido',
                    },
                    {
                        title: 'Monitoreo en tiempo real',
                        desc: 'Usar nfsstat para monitorear estadísticas del servidor NFS en tiempo real, incluyendo número de peticiones, tiempos de respuesta y errores.',
                        command: 'sudo nfsstat -s   # estadísticas del servidor\nsudo nfsstat -c   # estadísticas del cliente',
                    },
                ],
                exercise: {
                    title: 'Desafío opcional: endurece la configuración',
                    prompt:
                        'Modifica mentalmente este laboratorio para que solo VM1 pueda montar el recurso y el directorio no tenga permisos 777. Describe qué cambiarías en `/etc/exports`, propiedad y permisos.',
                    hints: [
                        'Piensa en restringir la subred completa a una IP específica.',
                        'Busca un equilibrio entre aprendizaje y seguridad operacional.',
                        'Recuerda recargar exports después de editar la configuración.',
                    ],
                },
                conclusion:
                    'Has recorrido el ciclo completo de un laboratorio cliente-servidor en Linux: conectividad, instalación, exportación, montaje, escritura remota y verificación. La idea clave no es memorizar comandos sueltos, sino entender qué papel cumple cada extremo y cómo comprobar que el sistema realmente está funcionando.',
            },
        },
        {
            id: 'packet-tracer-lan',
            isPacketTracerLab: true,
            title: 'Laboratorio LAN en Cisco Packet Tracer: DHCP, DNS, HTTP, SMTP e ICMP',
            subtitle: 'Construye y analiza una LAN con múltiples servicios de red',
            type: 'Laboratorio',
            difficulty: 'Intermedio Inicial',
            duration: '60–90 min',
            tags: ['Redes 1', 'Cisco Packet Tracer', 'LAN', 'DHCP', 'DNS', 'HTTP', 'HTTPS', 'SMTP', 'POP3', 'ICMP', 'ARP', 'Switching', 'Topologías de Red'],
            learningFeatures: ['Topología', 'Servicios', 'Cuestionario'],
            labData: {
                intro:
                    'En este laboratorio íntegro, pasarás de la teoría a la práctica construyendo desde cero una topología de Red Lógica (LAN) operativa simulando una infraestructura de servidores corporativos. El objetivo primordial es aprender a configurar, interconectar y analizar tráfico de Capa 3, Capa 4 y Capa 7 utilizando el entorno de simulación emulado de Cisco Packet Tracer. Observaremos con una lupa virtual cómo los acuses de recibo y segmentos TCP/UDP viajan por los cables en tiempo real.',
                objectives: [
                    'Construir una red LAN funcional en Cisco Packet Tracer.',
                    'Configurar servicios de red básicos (DHCP, DNS, Web, Correo).',
                    'Comprobar conectividad entre hosts y servidores.',
                    'Analizar protocolos DHCP, DNS, HTTP, HTTPS, SMTP e ICMP mediante tablas PDU.',
                    'Interpretar paquetes y campos relevantes en modo Simulación paso a paso.',
                    'Aplicar análisis técnico sobre el tráfico real de red respondiendo al cuestionario final.',
                ],
                steps: [
                    {
                        id: '01',
                        title: 'Configurar el Servidor DHCP',
                        text: 'Haz clic en el Servidor DHCP en el área de trabajo para abrir su ventana de configuración principal.',
                        steps: [
                            'Ve a la pestaña Config > Global Settings, e ingresa la Puerta de Enlace (Gateway) 172.16.0.1.',
                            'En la misma pestaña Config, selecciona FastEthernet0, asigna la IP 172.16.0.10 y la Máscara 255.255.0.0.',
                            'Ve a la pestaña Services y asegúrate de deshabilitar explícitamente HTTP, HTTPS, DNS, SMTP y POP3.',
                            'Entra a Services > DHCP y enciéndelo (On).',
                            'Configura el Default Gateway en 172.16.0.1 y el DNS Server en 172.16.0.11.',
                            'Establece la Start IP Address en 172.16.0.100 y presiona Save.',
                        ],
                    },
                    {
                        id: '02',
                        title: 'Configurar el Servidor DNS',
                        text: 'Haz clic en el Servidor DNS en el área de topología lógica.',
                        steps: [
                            'Ve a Config > Global Settings, e ingresa el Gateway: 172.16.0.1.',
                            'En Config > FastEthernet0, asigna la IP 172.16.0.11 y la Máscara 255.255.0.0.',
                            'Ve a Services, y deshabilita HTTP, HTTPS, DHCP, SMTP y POP3.',
                            'Entra a Services > DNS y habilita el servicio (On).',
                            'Crea el primer dominio introduciendo Name: jala.university, Type: A Record, Address: 172.16.0.20, y haz clic en Add.',
                            'Crea el segundo dominio introduciendo Name: www.pruebas.com, Type: A Record, Address: 172.16.0.30, y presiona Add.',
                        ],
                    },
                    {
                        id: '03',
                        title: 'Configurar el Servidor Web Jala University',
                        text: 'Haz clic en el servidor etiquetado como Web Server: jala.university.',
                        steps: [
                            'En Config > Global Settings, asigna su Gateway: 172.16.0.1.',
                            'En Config > FastEthernet0, asigna su IP 172.16.0.20 y Máscara 255.255.0.0.',
                            'En Services, deshabilita DHCP, SMTP, POP3 y DNS.',
                            'Asegúrate de que HTTP y HTTPS estén encendidos (On).',
                            'En Services > HTTP, selecciona file manager, edita el archivo index.html sobrescribiendo con: <hr> Bienvenido a la página web de JALA University!',
                        ],
                    },
                    {
                        id: '04',
                        title: 'Configurar el Servidor Web Pruebas',
                        text: 'Haz clic en el servidor etiquetado como Web Server: www.pruebas.com.',
                        steps: [
                            'En Config > Global Settings, asigna el Gateway: 172.16.0.1.',
                            'En Config > FastEthernet0, introduce IP 172.16.0.30 y Máscara 255.255.0.0.',
                            'En Services, deshabilita DHCP, SMTP, POP3 y DNS.',
                            'Verifica que HTTP y HTTPS permanezcan en On.',
                            'En Services > HTTP, edita index.html e introduce: <hr> Esta es una página de pruebas!',
                        ],
                    },
                    {
                        id: '05',
                        title: 'Configurar el Servidor de Correo Electrónico',
                        text: 'Selecciona el Servidor Email (mail.jala.university) para configurar el buzón.',
                        steps: [
                            'En Config > Global Settings, configura Gateway: 172.16.0.1.',
                            'En Config > FastEthernet0, usa IP 172.16.0.40 y Máscara 255.255.0.0.',
                            'En Services, deshabilita DHCP, HTTP, HTTPS y DNS.',
                            'Ingresa a Services > Email y asegúrate de que SMTP y POP3 estén encendidos.',
                            'Escribe Domain Name: jala.com y haz clic en el botón Set.',
                            'En la sección de usuarios, añade el primero: User: user1, Password: datacom1 y haz clic en (+).',
                            'Añade el segundo: User: user2, Password: datacom2, (+).',
                            'Añade el tercero: User: <tu_nombre.apellido>, Password: <fecha DDMMAAAA>, (+).',
                        ],
                    },
                    {
                        id: '06',
                        title: 'Configurar PCs Dinámicas (Dynamic 1 y Dynamic 2)',
                        text: 'Configuraremos estas terminales para que soliciten la IP al Servidor DHCP autónomamente.',
                        steps: [
                            'Haz un solo clic en la PC1 llamada Dynamic 1.',
                            'Ve a la pestaña Desktop y abre la aplicación IP Configuration.',
                            'Cambia la burbuja de Static a DHCP.',
                            'Espera unos dos segundos a visualizar el mensaje "DHCP request successful" con los nuevos parámetros.',
                            'Cierra la ventana y repite los tres pasos anteriores para la PC2 (Dynamic 2).',
                        ],
                    },
                    {
                        id: '07',
                        title: 'Configurar PC Estática (Static)',
                        text: 'A diferencia de las demás, la PC3 necesita ser configurada a mano.',
                        steps: [
                            'Abre el panel de PC3 (Static).',
                            'Ve a Desktop > IP Configuration. Mantén la burbuja en modo Static.',
                            'Escribe IPv4 Address: 172.16.0.90',
                            'Subnet Mask: 255.255.0.0',
                            'Default Gateway: 172.16.0.1',
                            'DNS Server: 172.16.0.11',
                        ],
                    },
                    {
                        id: '08',
                        title: 'Enlazar los Clientes de Correo en las PCs',
                        text: 'Configura el protocolo de la bandeja de correo en los clientes para conectarse con mail.jala.university.',
                        steps: [
                            'Abre nuevamente PC1, entra a la pestaña Desktop y haz clic en la app Email.',
                            'Your Name: user1',
                            'Email Address: user1@jala.com',
                            'Incoming Mail Server: mail.jala.university',
                            'Outgoing Mail Server: mail.jala.university',
                            'Logon Information - Username: user1, Password: datacom1',
                            'Presiona el botón Save en la parte inferior.',
                            'Repite el proceso para PC2 emparejando sus datos (user2@jala.com, user2, datacom2).',
                            'Repite el proceso en PC3 usando la cuenta con tu nombre que creaste en el paso 5.',
                        ],
                    },
                ],
                wiring: [
                    { from: 'Conexión a servidores', cable: 'Cable Directo (Straight-through)' },
                    { from: 'Conexión a switches', cable: 'Cable Cruzado (Cross-over)' },
                    { from: 'Conexión a PCs', cable: 'Cable Directo (Straight-through)' },
                ],
                questions: [
                    '¿DHCP es un servicio orientado a la conexión?',
                    '¿DHCP utiliza TCP o UDP?',
                    '¿Cuál es el puerto utilizado por los Servidores DHCP?',
                    'Mencione 3 protocolos que usan el servicio TCP',
                    '¿Qué protocolo interviene antes de HTTP/HTTPS?',
                    '¿Cuál es el puerto de origen de los servidores HTTP?',
                    '¿Cuál es el puerto de origen de los servidores HTTPS?',
                    '¿Cuál es la diferencia a nivel de datos entre HTTP y HTTPS?',
                    '¿Qué protocolo interviene antes de SMTP?',
                    '¿Cuál es el puerto de origen de un servidor SMTP?',
                    'Identifique 3 campos propios de TCP, no presentes en UDP.',
                    '¿Qué protocolo interviene antes de ICMP?',
                    '¿Cuál es el puerto de origen de un servidor ICMP?',
                    'Al ejecutar arp -a, ¿qué direcciones IP y físicas se pueden observar?',
                    'Analizando el primer paquete ICMP, rellene los datos siguientes:\n\nDirección IP de origen:\nDirección IP de destino:\nTipo de ICMP:\nCódigo de ICMP:\nDirección Ethernet de origen:\nDirección Ethernet de destino:\nVersión de IP:\nTiempo de vida (TTL):',
                ],
            },
        },
        {
            id: 'wireshark-analisis',
            title: 'Análisis de Tráfico de Red con Wireshark',
            subtitle: 'Captura y comprensión de protocolos (DHCP, ICMP, DNS, HTTP)',
            type: 'Laboratorio',
            difficulty: 'Intermedio',
            duration: '60–90 min',
            tags: ['Wireshark', 'Packet Analysis', 'DHCP', 'ICMP', 'DNS', 'HTTP'],
            learningFeatures: ['Filtros', 'Simulaciones', 'Análisis'],
            guide: {
                intro:
                    'El análisis de tráfico de red es una habilidad esencial para diagnosticar problemas de conectividad, entender el comportamiento de las aplicaciones y detectar anomalías de seguridad. Wireshark es el analizador de protocolos de red (sniffer) más utilizado del mundo, permitiendo ver de forma microscópica lo que ocurre en los cables —o en el aire—. En este laboratorio aprenderás a capturar paquetes y a diseccionar el intercambio de mensajes de cuatro casos de uso fundamentales.',
                introCards: [
                    {
                        icon: 'search',
                        title: 'Qué hace Wireshark',
                        text: 'Captura tramas y paquetes para que puedas inspeccionar campos de Ethernet, IP, TCP/UDP y protocolos de aplicación.',
                    },
                    {
                        icon: 'filter',
                        title: 'Cómo se vuelve útil',
                        text: 'Un buen filtro reduce el ruido. En este laboratorio alternarás entre <code>bootp</code>, <code>icmp</code>, <code>dns</code> y puertos TCP para mirar exactamente el fenómeno que buscas.',
                    },
                    {
                        icon: 'activity',
                        title: 'Qué debes observar',
                        text: 'No se trata solo de “ver paquetes”. Debes conectar cada captura con una pregunta técnica: quién habla, a quién, por qué puerto y con qué secuencia.',
                    },
                    {
                        icon: 'shield',
                        title: 'Criterio operativo',
                        text: 'Capturar tráfico no es lo mismo que comprenderlo. El valor aparece cuando interpretas IPs, MACs, handshakes, tiempos y respuestas.',
                    },
                ],
                quickNotes: [
                    {
                        icon: 'monitor',
                        title: 'Antes de empezar',
                        text: 'Usa una VM en modo bridge para que el tráfico sea real respecto a tu red local y no quede oculto detrás de NAT.',
                    },
                    {
                        icon: 'target',
                        title: 'Resultado esperado',
                        text: 'Debes terminar con capturas, respuestas a tablas y evidencia visual del flujo DORA y del handshake TCP.',
                    },
                ],
                objectives: [
                    'Entender el proceso de captura de tráfico de red en un entorno virtualizado.',
                    'Diferenciar y filtrar el tráfico según protocolos (DHCP, ICMP, DNS, HTTP).',
                    'Analizar el interior de un paquete y extraer información útil (IPs, MACs, puertos).',
                    'Interpretar los handshakes y secuencias de mensajes cliente-servidor.',
                ],
                technologies: [
                    { name: 'Wireshark', category: 'Análisis' },
                    { name: 'VirtualBox / VMware', category: 'Virtualización' },
                    { name: 'Ubuntu / Debian', category: 'Sistema Operativo' },
                ],
                labArchitecture: {
                    diagram: 'Cliente Linux (VM) <==== Network Bridge ====> Internet/Router Local',
                    desc:
                        'Se utilizará una máquina virtual conectada en modo Bridge (Puente). Esto permite que la VM actúe como un equipo físico independiente en la misma red local que la máquina Host, solicitando su propia IP al router y enviando el tráfico directamente sin NAT.',
                },
                stepsDesc:
                    'Cada prueba está pensada como una pregunta de investigación. Ejecuta la acción, filtra el tráfico correcto y luego llena los datos solicitados.',
                steps: [
                    {
                        title: 'Preparación del ambiente de pruebas',
                        text: 'Antes de iniciar cualquier prueba, debemos configurar correctamente nuestra máquina virtual para que el tráfico se genere y capture efectivamente.',
                        steps: [
                            'Abre VirtualBox o VMware y dirígete a la configuración de red de tu máquina virtual Linux.',
                            'Cambia el adaptador a "Adaptador Puente" (Bridged Adapter). Esto conectará la VM directamente a tu router.',
                            'Enciende la máquina virtual e inicia sesión.',
                            'Abre y ejecuta Wireshark con privilegios de administrador: sudo wireshark',
                            'Selecciona la interfaz de red activa (usualmente enp0s3 o eth0) e inicia la captura presionando el icono de la aleta de tiburón azul.',
                        ],
                    },
                    {
                        title: 'Prueba 1 — Análisis del protocolo DHCP',
                        text: 'Vamos a forzar al sistema a pedir una nueva IP para interceptar el proceso DORA. En Wireshark, escribe el filtro "bootp" (DHCP se conoce técnicamente como Bootstrap Protocol) y presiona Enter.',
                        command: 'sudo dhclient -r && sudo dhclient -v',
                        explanation: 'El argumento -r libera la IP actual. La segunda instrucción vuelve a solicitar una.',
                        tablePrompt: {
                            fields: [
                                { label: 'IP del cliente DHCP al inicio de la solicitud', desc: '¿Qué IP origen usa el Discover?' },
                                { label: '¿Por qué utiliza esta dirección IP inicial?', desc: 'Justificación teórica' },
                                { label: 'IP destino de los mensajes del Cliente', desc: '¿A quién le habla?' },
                                { label: 'MAC destino de los mensajes del Cliente', desc: '¿Cuál es la MAC address de broadcast?' },
                                { label: 'IP destino de los mensajes del Servidor', desc: '¿Hacia dónde envía el Offer/ACK?' },
                                { label: 'IP ofrecida al Cliente', desc: 'Your (client) IP address en el paquete' },
                                { label: 'Tiempo de asignación', desc: 'Lease Time ofrecido' },
                                { label: 'IP seleccionada por el cliente', desc: 'IP Server identifier confirmada' },
                            ],
                        },
                        simulationLink: 'dhcp',
                    },
                    {
                        title: 'Prueba 2 — Análisis de ICMP con ping',
                        text: 'ICMP es el protocolo utilizado para enviar mensajes de control y error. El comando ping lo utiliza para comprobar la conectividad. Cambia el filtro en Wireshark a "icmp".',
                        command: 'ping -c 4 debian.org',
                        explanation: 'Enviaremos exactamente 4 paquetes ICMP Echo Request al servidor.',
                        simulationLink: 'icmp',
                    },
                    {
                        title: 'Prueba 3 — Análisis del proceso DNS',
                        text: 'Cuando escribiste debian.org en el paso anterior, tu computadora necesitó traducir ese nombre a una dirección IP real antes de mandar el ping. Cambia el filtro de Wireshark a "dns".',
                        tablePrompt: {
                            fields: [
                                { label: 'Puerto del Servidor DNS', desc: 'Puerto de destino (Dst Port)' },
                                { label: 'IP destino de la solicitud DNS', desc: '¿A qué servidor le estás preguntando?' },
                                { label: 'Dirección IP devuelta', desc: 'Respuesta (Answers) dentro del paquete' },
                            ],
                        },
                        simulationLink: 'dns',
                    },
                    {
                        title: 'Prueba 4 — Análisis HTTP y TCP (Three-Way Handshake)',
                        text: 'Abre el navegador web dentro de tu VM y dirígete a debian.org (asegúrate de ir a http:// para ver tráfico en texto plano si tu navegador no fuerza HTTPS, o simplemente analiza el handshake TCP inicial). Filtra en Wireshark por "tcp.port == 80" o "tcp.port == 443".',
                        explanation: 'Busca los primeros tres paquetes entre tu IP y la IP del servidor. Deberías ver las flags [SYN], [SYN, ACK], y [ACK] antes de la petición principal GET/Client Hello.',
                        simulationLink: 'tcp-http',
                    },
                    {
                        title: 'Entrega del laboratorio',
                        text: 'Una vez finalizado el laboratorio, asegúrate de documentar tus hallazgos.',
                        steps: [
                            'Detén la captura en Wireshark.',
                            'Responde las preguntas teóricas solicitadas.',
                            'Completa las dos tablas con los datos reales que capturaste.',
                            'Toma capturas de pantalla de los momentos clave (el DORA de DHCP, el Handshake de TCP).',
                            'Exporta tu documento a PDF o al formato solicitado por el instructor.',
                        ],
                    },
                ],
                learnings: [
                    'Cómo capturar tráfico en modo promiscuo.',
                    'Cómo filtrar tráfico masivo usando sintaxis de Wireshark (bootp, icmp, dns, tcp.port).',
                    'Cómo identificar el mapeo entre capas desde Ethernet (MAC) hasta Aplicación (HTTP).',
                    'Cómo diagnosticar visualmente la salud de una conexión TCP y DNS.',
                ],
                exercise: {
                    title: 'Desafío opcional: compara HTTP y HTTPS',
                    prompt:
                        'Después del laboratorio, intenta capturar una navegación HTTPS y compárala con una HTTP simple. Explica qué partes del intercambio puedes seguir viendo claramente y cuáles dejan de ser legibles.',
                    hints: [
                        'Observa que TCP sigue siendo visible aunque el contenido esté cifrado.',
                        'Busca diferencias entre un GET plano y un Client Hello/TLS.',
                    ],
                },
                conclusion:
                    'Este laboratorio te obliga a pasar del “sé que existe el protocolo” al “puedo verlo, filtrarlo e interpretarlo”. Esa transición es clave en redes: una buena intuición técnica nace cuando teoría y paquetes concretos empiezan a coincidir.',
            },
        },
        {
            id: 'pt-lan-estatica',
            title: 'Configuración de una Red Local con Direcciones IP Estáticas en Packet Tracer',
            subtitle: 'Red LAN con IP estáticas en Packet Tracer',
            type: 'Laboratorio',
            difficulty: 'Básico',
            duration: '30–45 min',
            tags: ['Networking', 'Packet Tracer', 'LAN', 'IPv4', 'Static IP'],
            learningFeatures: ['Topología', 'IP estática', 'Ping'],
            guide: {
                intro:
                    'Una red LAN (Local Area Network) es una red de computadoras que abarca un área local, como una casa, oficina o grupo de edificios, y se utiliza para conectar dispositivos físicos entre sí. Cisco Packet Tracer es una potente herramienta de simulación de red que nos permite estudiar y construir modelos estructurados visualmente sin necesidad de cablear hardware real.',
                introCards: [
                    {
                        icon: 'network',
                        title: 'Qué practicarás',
                        text: 'Armarás una topología simple, asignarás IPv4 manualmente y validarás conectividad entre hosts y router.',
                    },
                    {
                        icon: 'settings',
                        title: 'Por qué usar IP estática',
                        text: 'Sirve para aprender direccionamiento y también para dispositivos que deben mantener siempre la misma dirección, como routers, servidores o impresoras.',
                    },
                    {
                        icon: 'layers',
                        title: 'Mapa mental',
                        text: 'Todos los equipos pertenecen a la red 192.168.0.0/24 y comparten al router como puerta de enlace.',
                    },
                ],
                objectives: [
                    'Construir una topología básica de red local con 8 hosts.',
                    'Configurar direcciones IPv4 estáticas manualmente de acuerdo a un plan.',
                    'Comprender el funcionamiento de una red local conectada a un switch.',
                    'Verificar conectividad entre distintos hosts usando paquetes ICMP (ping).',
                ],
                technologies: [
                    { name: 'Cisco Packet Tracer', category: 'Simulación' },
                    { name: 'LAN Networking', category: 'Networking' },
                ],
                labArchitecture: {
                    image: red1lab2img,
                    diagram: 'Router1\n  ↓\nSwitch1\n  ↓\nPC0 – PC7',
                    desc: 'Topología con 1 Router, 1 Switch y 8 computadoras conectadas a la misma red: 192.168.0.0/24.',
                },
                stepsDesc:
                    'Empieza por la tabla de direccionamiento, luego construye la topología y recién después configura router y hosts. Ese orden evita errores tontos.',
                steps: [
                    {
                        id: '01',
                        title: 'Tabla de direccionamiento IP',
                        text: 'A continuación se muestra la dirección IP, máscara de subred y puerta de enlace predeterminada que cada dispositivo debe tener asignado en tu topología.',
                        dataTable: {
                            headers: ['Dispositivo', 'Dirección IP', 'Máscara', 'Gateway'],
                            rows: [
                                ['PC0', '192.168.0.2', '255.255.255.0', '192.168.0.1'],
                                ['PC1', '192.168.0.3', '255.255.255.0', '192.168.0.1'],
                                ['PC2', '192.168.0.4', '255.255.255.0', '192.168.0.1'],
                                ['PC3', '192.168.0.5', '255.255.255.0', '192.168.0.1'],
                                ['PC4', '192.168.0.6', '255.255.255.0', '192.168.0.1'],
                                ['PC5', '192.168.0.7', '255.255.255.0', '192.168.0.1'],
                                ['PC6', '192.168.0.8', '255.255.255.0', '192.168.0.1'],
                                ['PC7', '192.168.0.9', '255.255.255.0', '192.168.0.1'],
                                ['Router1', '192.168.0.1', '255.255.255.0', '—'],
                            ],
                        },
                    },
                    {
                        id: '02',
                        title: 'Construcción de la red en Packet Tracer',
                        text: 'Sigue estos pasos para arrastrar todos los elementos al escritorio de Packet Tracer y cablearlos.',
                        steps: [
                            'Abre Cisco Packet Tracer en tu computadora.',
                            'En la categoría de Network Devices (abajo a la izquierda), selecciona Routers y arrastra un Router a la parte superior de tu diseño.',
                            'En la misma categoría, selecciona Switches y arrastra un Switch (ej. 2960) al área central debajo del router.',
                            'Cambia a la categoría End Devices, selecciona PC y arrastra 8 computadoras distribuyéndolas alrededor del switch.',
                            'Ve a Connections (el rayo). Utiliza cables directos (Copper Straight-Through) para conectar la interfaz GigabitEthernet del Router a un puerto del Switch.',
                            'Usa los mismos cables Copper Straight-Through para conectar las interfaces FastEthernet de cada PC a los demás puertos del Switch.',
                        ],
                    },
                    {
                        id: '03',
                        title: 'Configuración de encendido del Router',
                        text: 'El router, por defecto, viene con sus puertos apagados. Encenderemos su interfaz y de paso le daremos su número IP. Abre la pestaña CLI del router y usa estos comandos:',
                        commands: [
                            { cmd: 'enable', desc: 'Ingresar al modo privilegiado.' },
                            { cmd: 'configure terminal', desc: 'Entrar al modo de configuración.' },
                            { cmd: 'interface gigabitEthernet0/0', desc: 'Acceder a la configuración de la interfaz que conectamos al switch.' },
                            { cmd: 'ip address 192.168.0.1 255.255.255.0', desc: 'Asignarle manualmente su IP (según la tabla) y su máscara /24.' },
                            { cmd: 'no shutdown', desc: 'Encender el puerto para levantar el enlace local.' },
                            { cmd: 'exit', desc: 'Salir de la configuración.' },
                        ],
                    },
                    {
                        id: '04',
                        title: 'Configuración de direcciones IP en los hosts',
                        text: 'A continuación, configuraremos las IP estáticas definidas en la Tabla de Direccionamiento de nuestro paso 1.',
                        steps: [
                            'Haz un solo clic sobre PC0 para abrir su panel.',
                            'Ve a la pestaña Desktop y haz clic en IP Configuration.',
                            'En IP Address ingresa su respectiva IP: 192.168.0.2',
                            'Al hacer clic en Subnet Mask, ésta se llenará automáticamente con: 255.255.255.0',
                            'En Default Gateway ingresa la IP que le dimos al router: 192.168.0.1',
                            'Cierra la ventana. Repite el mismo proceso exacto con las otras 7 computadoras asegurándote de usar su IP (.3, .4, .5...) según la tabla.',
                        ],
                    },
                    {
                        id: '05',
                        title: 'Verificación de conectividad con Ping',
                        text: 'El comando ping nos permite enviar paquetes a otro nodo y esperar confirmación. Comprobaremos que nuestras computadoras puedan conectarse entre sí.',
                        explanation: 'Abre la Command Prompt (CMD) dentro de la pestaña Desktop en la PC0 e intenta realizar ping a la PC3.',
                        command: 'ping 192.168.0.5',
                        expectedOutput: `Pinging 192.168.0.5 with 32 bytes of data:

Reply from 192.168.0.5: bytes=32 time=1ms TTL=128
Reply from 192.168.0.5: bytes=32 time=1ms TTL=128
Reply from 192.168.0.5: bytes=32 time=1ms TTL=128
Reply from 192.168.0.5: bytes=32 time=1ms TTL=128`,
                        outputExplanation:
                            'La respuesta "Reply from" indicando que no se perdieron paquetes constata que los nodos están en la misma red exitosamente. Repite la prueba haciendo un ping hacia la dirección del Router para confirmar la conectividad global: ping 192.168.0.1',
                    },
                    {
                        id: '06',
                        title: 'Prueba de red completa y conclusión',
                        text: 'Si todo ha sido ejecutado correctamente, habremos validado los conocimientos propuestos en este laboratorio.',
                        steps: ['Prueba de PC0 → PC7', 'Prueba de PC3 → PC5', 'Prueba de PC1 → PC6'],
                    },
                ],
                learnings: [
                    'Construcción visual y lógica de una red LAN a través de simuladores.',
                    'Configuración de direcciones IP estáticas en terminales (Hosts).',
                    'Uso de la línea de comandos básica (CLI) de Cisco IOS en el Router.',
                    'Pruebas y trazabilidad de conectividad con el protocolo ICMP (Ping).',
                ],
                exercise: {
                    title: 'Desafío opcional: documenta el plan de direccionamiento',
                    prompt:
                        'Explica por qué cada PC necesita máscara y gateway incluso si todas están en la misma red local. Luego imagina qué tendría que cambiar si la red pasara a ser 192.168.10.0/24.',
                    hints: [
                        'La máscara le dice al host qué parte de la IP es red y qué parte es host.',
                        'El gateway importa cuando el destino ya no está en la red local.',
                    ],
                },
                conclusion:
                    'Este laboratorio te entrena en una competencia básica pero decisiva: tomar un plan de direccionamiento y convertirlo en una red funcional, verificable y entendible. Esa disciplina luego se reutiliza en topologías mucho más grandes.',
            },
        },
    ],
};

export default redesSubject;
