// ─────────────────────────────────────────────────────────────
//  Mentoring Data — Subjects → Labs → Guide
//  Labs → Guide
// ─────────────────────────────────────────────────────────────

import red1lab2img from '../assets/red1lab2.png';

export const subjects = [
    {
        id: 'redes-computacionales-1',
        code: 'REDES-I',
        title: 'Redes Computacionales I',
        description:
            'Fundamentos de redes, servicios de red, protocolos de comunicación, laboratorios prácticos en Linux e infraestructura básica de servidores.',
        icon: 'network',
        color: '#00d4ff',
        topics: ['TCP/IP', 'Protocolos', 'Linux', 'Servidores', 'Networking'],
        labs: [
            {
                id: 'dhcp-teoria',
                title: 'DHCP — Asignación automática de direcciones IP',
                subtitle: 'Configuración de red sin intervención manual',
                type: 'Teoría',
                difficulty: 'Básico',
                duration: '15–20 min',
                tags: ['Teoría', 'DHCP', 'Redes', 'IPv4'],
                content: {
                    intro: 'En las redes modernas, la asignación manual de direcciones IP a cada dispositivo no es práctica ni escalable. DHCP (Dynamic Host Configuration Protocol) soluciona este problema permitiendo que los dispositivos obtengan automáticamente su configuración de red al conectarse. Esto no solo entrega direcciones IP, sino también información vital como la máscara de subred, el gateway predeterminado y los servidores DNS.',
                    models: {
                        dhcpConcept: {
                            title: '¿Qué es DHCP?',
                            whatIs: 'El Protocolo de Configuración Dinámica de Host (DHCP) es un protocolo de red de tipo cliente-servidor que asigna dinámicamente direcciones IP y otros parámetros de configuración de red a los dispositivos, permitiéndoles comunicarse sin intervención de un administrador.',
                            howWorks: 'Opera en la Capa de Aplicación del modelo TCP/IP. Utiliza el protocolo UDP para la transferencia de datos, operando específicamente en los puertos 67 (para el Servidor DHCP) y 68 (para el Cliente DHCP).',
                            examples: ['Redes domésticas (Routers WiFi)', 'Redes empresariales corporativas', 'Proveedores de Internet (ISP)', 'Centros de datos y Cloud'],
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
                        }
                    },
                    dhcpProcess: {
                        title: 'El proceso de asignación DORA',
                        desc: 'Cuando un cliente se conecta a la red sin una IP configurada estáticamente, inicia un proceso de negociación de 4 pasos conocido como DORA:',
                        steps: [
                            {
                                name: 'Discover',
                                sender: 'Cliente',
                                action: 'El cliente envía un mensaje de difusión (broadcast) al puerto 67 buscando un servidor DHCP disponible.'
                            },
                            {
                                name: 'Offer',
                                sender: 'Servidor',
                                action: 'El servidor recibe el broadcast y responde (unicast o broadcast) con una oferta de dirección IP y configuración.'
                            },
                            {
                                name: 'Request',
                                sender: 'Cliente',
                                action: 'El cliente recibe la oferta y envía una petición formal (broadcast) al servidor para aceptar la IP ofrecida.'
                            },
                            {
                                name: 'Acknowledge',
                                sender: 'Servidor',
                                action: 'El servidor confirma la asignación (ACK) y registra la IP como "prestada" por un tiempo determinado (lease).'
                            }
                        ]
                    },
                    dhcpConfig: {
                        title: 'Infomación que entrega DHCP',
                        items: [
                            'Dirección IP asignada al dispositivo.',
                            'Máscara de subred (determina la red local).',
                            'Gateway predeterminado (enrutador para salir a Internet).',
                            'Servidores DNS (para resolver nombres de dominio).',
                            'Tiempo de concesión (Lease Time, duración del préstamo de la IP).'
                        ]
                    },
                    conclusion: 'DHCP es un pilar fundamental e invisible en la administración de redes modernas. Al automatizar la configuración del direccionamiento, permite que millones de dispositivos —desde smartphones hasta servidores cloud— se conecten a redes complejas de forma casi instantánea mediante el rápido proceso DORA (Discover, Offer, Request, Acknowledge).',
                }
            },
            {
                id: 'modelos-comunicacion',
                title: 'Modelos de Comunicación en Redes',
                subtitle: 'Cliente-Servidor vs Peer-to-Peer',
                type: 'Teoría',
                difficulty: 'Básico',
                duration: '15–25 min',
                tags: ['Teoría', 'Arquitectura', 'C/S', 'P2P'],
                content: {
                    intro: 'Los modelos de comunicación en redes definen cómo interactúan los diferentes dispositivos (nodos) dentro de una red para intercambiar información y servicios. Elegir el modelo adecuado es una de las decisiones arquitectónicas más importantes al diseñar sistemas distribuidos, ya que impacta directamente en la escalabilidad, seguridad, mantenimiento y tolerancia a fallos del sistema.',
                    models: {
                        clientServer: {
                            title: 'Modelo Cliente-Servidor',
                            whatIs: 'Es una arquitectura distribuida donde los roles están claramente definidos y separados: algunos equipos actúan como proveedores exclusivos de recursos (Servidores) y otros actúan como consumidores (Clientes).',
                            howWorks: 'El nodo Cliente inicia la comunicación enviando una solicitud (Request) a través de la red hacia el nodo Servidor. El Servidor recibe la solicitud, la procesa de forma centralizada (ej. consultando una base de datos o generando un archivo), y devuelve una respuesta (Response) al Cliente.',
                            examples: ['Navegación Web (HTTP)', 'Bases de Datos centralizadas', 'Correo electrónico (SMTP/IMAP)', 'APIs RESTful'],
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
                            whatIs: 'Es una arquitectura descentralizada en la que todos los nodos o participantes (Peers) tienen los mismos privilegios y responsabilidades dentro de la red.',
                            howWorks: 'No hay un servidor central. Cada nodo actúa de forma dinámica y simultánea como Cliente (cuando solicita recursos) y como Servidor (cuando provee recursos a otros nodos). La comunicación es directa entre los equipos.',
                            examples: ['Protocolo BitTorrent', 'Redes Blockchain (Bitcoin, Ethereum)', 'Sistemas de archivos distribuidos (IPFS)', 'Voz sobre IP distribuida (Skype clásico)'],
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
                        }
                    },
                    comparison: [
                        { aspect: 'Arquitectura', cs: 'Centralizada', p2p: 'Descentralizada / Distribuida' },
                        { aspect: 'Roles', cs: 'Definidos y fijos (Cliente o Servidor)', p2p: 'Dinámicos (Actúa de ambos)' },
                        { aspect: 'Escalabilidad', cs: 'Limitada por recursos del Servidor (o requiere balanceadores)', p2p: 'Alta mente escalable por diseño (cada nodo suma recursos)' },
                        { aspect: 'Tolerancia a Fallos', cs: 'Baja (si cae el servidor central, falla el sistema)', p2p: 'Alta (si cae un nodo, la red sigue funcionando)' },
                        { aspect: 'Administración', cs: 'Fácil, centralizada y estandarizada', p2p: 'Compleja, las políticas deben replicarse por nodo' },
                    ],
                    conclusion: 'La elección entre Cliente-Servidor y P2P depende del caso de uso. El modelo Cliente-Servidor es el estándar de facto para aplicaciones web modernas, bases de datos y sistemas corporativos porque garantiza control y seguridad sobre los datos. Por otro lado, el modelo P2P brilla en aplicaciones donde la resistencia a la censura, la distribución masiva de archivos pesados y la reducción de costos de transferencia son las prioridades absolutas.',
                }
            },
            {
                id: 'nfs-ubuntu',
                title: 'Configuración de servidor NFS con Ubuntu',
                subtitle: 'Cliente y servidor usando dos máquinas virtuales',
                type: 'Laboratorio',
                difficulty: 'Intermedio',
                duration: '45–60 min',
                tags: ['Ubuntu', 'Linux', 'NFS', 'Networking', 'Virtual Machines'],
                guide: {
                    intro: {
                        whatIsNFS: `NFS (Network File System) es un protocolo de sistema de archivos distribuido que permite a un equipo (cliente) acceder a archivos almacenados en otro equipo (servidor) a través de una red, como si estuvieran en su propio disco local.`,
                        whatFor: `Sirve para compartir directorios y archivos entre múltiples equipos de una red de forma transparente. Es ampliamente usado en entornos Linux/Unix para compartir recursos entre servidores, clusters y estaciones de trabajo.`,
                        whenUseful: `Es útil cuando necesitas compartir datos entre varias máquinas sin duplicarlos, centralizar el almacenamiento, o montar directorios remotos de forma automática al iniciar el sistema.`,
                        architecture: `NFS sigue una arquitectura cliente-servidor clásica:\n• El servidor exporta (comparte) uno o más directorios.\n• El cliente monta esos directorios en su sistema de archivos local.\n• La comunicación ocurre a través del protocolo NFS sobre TCP/IP.`,
                    },
                    scenario: {
                        description: `Para este laboratorio utilizaremos dos máquinas virtuales Ubuntu conectadas en la misma red:`,
                        vms: [
                            { name: 'VM1', role: 'Cliente NFS', ip: '192.168.1.10', desc: 'Accede a los archivos compartidos por el servidor.' },
                            { name: 'VM2', role: 'Servidor NFS', ip: '192.168.1.20', desc: 'Exporta directorios para que el cliente los monte.' },
                        ],
                    },
                    steps: [
                        {
                            id: 1,
                            title: 'Verificar conectividad entre las máquinas',
                            vm: 'VM1 (Cliente)',
                            command: 'ping 192.168.1.20 -c 4',
                            explanation: 'El comando `ping` envía 4 paquetes ICMP a la IP del servidor para verificar que ambas máquinas se comunican correctamente. La opción `-c 4` limita la prueba a 4 paquetes.',
                            expectedOutput: `PING 192.168.1.20 (192.168.1.20) 56(84) bytes of data.
64 bytes from 192.168.1.20: icmp_seq=1 ttl=64 time=0.5 ms
64 bytes from 192.168.1.20: icmp_seq=2 ttl=64 time=0.4 ms
64 bytes from 192.168.1.20: icmp_seq=3 ttl=64 time=0.6 ms
64 bytes from 192.168.1.20: icmp_seq=4 ttl=64 time=0.5 ms`,
                            outputExplanation: 'Si recibes respuestas de la IP del servidor para todos los paquetes, la conectividad es correcta. Si no hay respuesta, verifica la configuración de red de ambas VMs.',
                        },
                        {
                            id: 2,
                            title: 'Instalar NFS Server en VM2',
                            vm: 'VM2 (Servidor)',
                            commands: [
                                { cmd: 'sudo apt update', desc: 'Actualiza la lista de paquetes disponibles en los repositorios.' },
                                { cmd: 'sudo apt install nfs-kernel-server -y', desc: 'Instala el servidor NFS. La opción `-y` acepta automáticamente la confirmación.' },
                            ],
                            expectedOutput: `Reading package lists... Done\nBuilding dependency tree... Done\nThe following NEW packages will be installed:\n  nfs-kernel-server\n...`,
                            outputExplanation: 'El sistema descarga e instala el servidor NFS junto con sus dependencias. Al finalizar, el servicio `nfs-kernel-server` quedará activo.',
                        },
                        {
                            id: 3,
                            title: 'Crear directorios compartidos',
                            vm: 'VM2 (Servidor)',
                            commands: [
                                { cmd: 'sudo mkdir -p /srv/nfs/compartido', desc: 'Crea el directorio que será compartido. La opción `-p` crea todos los directorios padres necesarios si no existen.' },
                            ],
                            expectedOutput: '(Sin salida — el directorio se crea silenciosamente si no hay errores)',
                            outputExplanation: 'Si no aparece ningún mensaje de error, el directorio fue creado exitosamente. Puedes verificarlo con `ls /srv/nfs/`.',
                        },
                        {
                            id: 4,
                            title: 'Asignar permisos al directorio',
                            vm: 'VM2 (Servidor)',
                            commands: [
                                { cmd: 'sudo chown nobody:nogroup /srv/nfs/compartido', desc: 'Asigna el directorio al usuario y grupo `nobody:nogroup`, que es un usuario sin privilegios especiales, recomendado para recursos NFS accesibles por múltiples clientes.' },
                                { cmd: 'sudo chmod 777 /srv/nfs/compartido', desc: 'Otorga permisos de lectura, escritura y ejecución a todos los usuarios. En producción se recomienda usar permisos más restrictivos.' },
                            ],
                            expectedOutput: '(Sin salida — los permisos se aplican silenciosamente)',
                            outputExplanation: 'Puedes verificar los permisos con `ls -la /srv/nfs/` y deberías ver `drwxrwxrwx` con propietario `nobody nogroup`.',
                        },
                        {
                            id: 5,
                            title: 'Configurar el archivo /etc/exports',
                            vm: 'VM2 (Servidor)',
                            command: 'sudo nano /etc/exports',
                            explanation: 'El archivo `/etc/exports` define qué directorios se comparten y con qué permisos. Agrega la siguiente línea al archivo:',
                            codeblock: '/srv/nfs/compartido    192.168.1.0/24(rw,sync,no_subtree_check)',
                            codeExplanation: `• \`/srv/nfs/compartido\` — directorio a exportar
• \`192.168.1.0/24\` — permite acceso a toda la subred (puedes especificar una IP concreta como 192.168.1.10)
• \`rw\` — permite lectura y escritura
• \`sync\` — escribe los cambios al disco antes de responder al cliente (más seguro)
• \`no_subtree_check\` — evita verificaciones de subdirectorios, mejora el rendimiento`,
                            expectedOutput: 'El archivo se guarda. Presiona Ctrl+O para guardar y Ctrl+X para salir de nano.',
                            outputExplanation: 'Cada vez que modifiques este archivo deberás recargar la configuración con `exportfs -ra`.',
                        },
                        {
                            id: 6,
                            title: 'Aplicar la configuración de exports',
                            vm: 'VM2 (Servidor)',
                            command: 'sudo exportfs -ra',
                            explanation: '`exportfs` administra la tabla de exportaciones del servidor NFS. La opción `-r` recarga todos los directorios exportados, y `-a` aplica todos los cambios definidos en `/etc/exports`.',
                            expectedOutput: '(Sin salida si no hay errores)',
                            outputExplanation: 'Si hay errores de sintaxis en `/etc/exports`, aparecerán aquí. Puedes verificar los exports activos con `sudo exportfs -v`.',
                        },
                        {
                            id: 7,
                            title: 'Reiniciar el servicio NFS',
                            vm: 'VM2 (Servidor)',
                            command: 'sudo systemctl restart nfs-kernel-server',
                            explanation: '`systemctl restart` detiene y vuelve a iniciar el servicio NFS para que tome los últimos cambios de configuración.',
                            expectedOutput: '(Sin salida si el servicio reinicia correctamente)',
                            outputExplanation: 'Verifica que el servicio está activo con `sudo systemctl status nfs-kernel-server`. Deberías ver `active (running)` en verde.',
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
                            outputExplanation: 'Este paquete instala herramientas como `showmount` y el soporte para montar sistemas de archivos NFS con el comando `mount`.',
                        },
                        {
                            id: 9,
                            title: 'Consultar recursos exportados por el servidor',
                            vm: 'VM1 (Cliente)',
                            command: 'showmount -e 192.168.1.20',
                            explanation: '`showmount -e` muestra los directorios que el servidor NFS está exportando. La opción `-e` (export list) lista todos los recursos disponibles para montaje.',
                            expectedOutput: `Export list for 192.168.1.20:\n/srv/nfs/compartido  192.168.1.0/24`,
                            outputExplanation: 'Verás el directorio que configuraste en `/etc/exports`. Si no aparece, verifica que el firewall no esté bloqueando el puerto 2049 (NFS) en el servidor.',
                        },
                        {
                            id: 10,
                            title: 'Crear punto de montaje en VM1',
                            vm: 'VM1 (Cliente)',
                            command: 'sudo mkdir -p /mnt/nfs/compartido',
                            explanation: 'Crea un directorio local vacío donde se montará el sistema de archivos remoto. Este directorio actúa como "punto de entrada" al contenido del servidor.',
                            expectedOutput: '(Sin salida)',
                            outputExplanation: 'El directorio `/mnt/nfs/compartido` ahora existe localmente y está listo para recibir el montaje NFS.',
                        },
                        {
                            id: 11,
                            title: 'Montar el recurso NFS',
                            vm: 'VM1 (Cliente)',
                            command: 'sudo mount 192.168.1.20:/srv/nfs/compartido /mnt/nfs/compartido',
                            explanation: '`mount` conecta el directorio remoto del servidor (`192.168.1.20:/srv/nfs/compartido`) con el punto de montaje local (`/mnt/nfs/compartido`). A partir de este momento, todo lo que aparezca en `/mnt/nfs/compartido` proviene del servidor.',
                            expectedOutput: '(Sin salida si el montaje fue exitoso)',
                            outputExplanation: 'Verifica el montaje con `df -h` — deberías ver `192.168.1.20:/srv/nfs/compartido` en la lista de sistemas de archivos montados.',
                        },
                        {
                            id: 12,
                            title: 'Listar archivos del directorio remoto',
                            vm: 'VM1 (Cliente)',
                            command: 'ls /mnt/nfs/compartido',
                            explanation: '`ls` lista el contenido del directorio montado. Cualquier archivo presente en el servidor aparecerá aquí.',
                            expectedOutput: '(Vacío si el directorio del servidor está vacío)',
                            outputExplanation: 'Si el directorio está vacío, es normal — aún no hemos creado archivos. Esto confirma que el montaje funciona correctamente.',
                        },
                        {
                            id: 13,
                            title: 'Crear un archivo desde el cliente',
                            vm: 'VM1 (Cliente)',
                            command: 'echo "Hola desde VM1 - cliente NFS" > /mnt/nfs/compartido/prueba.txt',
                            explanation: '`echo` escribe texto y el operador `>` redirige la salida al archivo `prueba.txt` dentro del directorio montado. Este archivo se creará físicamente en el servidor (VM2).',
                            expectedOutput: '(Sin salida)',
                            outputExplanation: 'El archivo `prueba.txt` se ha creado en el servidor a través de la red. Puedes verificarlo listando el directorio: `ls /mnt/nfs/compartido`.',
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
                            outputExplanation: '¡El archivo creado desde el cliente (VM1) aparece en el servidor (VM2)! Esto confirma que la configuración NFS funciona correctamente en ambas direcciones. Los archivos escritos desde cualquier cliente autorizado se almacenan en el servidor y son visibles para todos los demás clientes montados.',
                        },
                    ],

                    // ── Objetivos del laboratorio ──────────────────────
                    objectives: [
                        'Comprender el funcionamiento del protocolo NFS y su arquitectura cliente-servidor.',
                        'Configurar un servidor NFS en Ubuntu usando el paquete nfs-kernel-server.',
                        'Exportar directorios compartidos de forma controlada a través de /etc/exports.',
                        'Montar recursos NFS remotos en un cliente Linux y acceder a ellos como si fueran locales.',
                        'Verificar la comunicación bidireccional entre cliente y servidor.',
                        'Crear y modificar archivos en un sistema de archivos remoto en tiempo real.',
                    ],

                    // ── Tecnologías utilizadas ──────────────────────────
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

                    // ── Arquitectura del laboratorio ────────────────────
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
                    },

                    // ── Verificación del sistema ────────────────────────
                    verification: [
                        {
                            title: 'Verificar sistemas de archivos montados (VM1)',
                            vm: 'VM1 (Cliente)',
                            command: 'df -h | grep nfs',
                            explanation: '`df -h` muestra el uso de espacio de todos los sistemas de archivos en formato legible. La tubería `| grep nfs` filtra únicamente las líneas que contienen "nfs", mostrando solo los montajes NFS activos.',
                            expectedOutput: `192.168.1.20:/srv/nfs/compartido   19G  5.2G   13G  30% /mnt/nfs/compartido`,
                            outputExplanation: 'La salida muestra el servidor de origen, el tamaño total, el espacio usado, el disponible, el porcentaje de uso y el punto de montaje. Si no aparece, el montaje no está activo.',
                        },
                        {
                            title: 'Verificar exports activos (VM2)',
                            vm: 'VM2 (Servidor)',
                            command: 'sudo exportfs -v',
                            explanation: '`exportfs -v` muestra en detalle todos los directorios que el servidor está exportando activamente, incluyendo los permisos y las opciones configuradas.',
                            expectedOutput: `/srv/nfs/compartido\n    192.168.1.0/24(rw,wdelay,root_squash,no_subtree_check,sec=sys,rw,secure,root_squash,no_all_squash)`,
                            outputExplanation: 'Confirma que el directorio está siendo exportado con las opciones correctas. `root_squash` es una medida de seguridad que evita que el usuario root del cliente tenga privilegios de root en el servidor.',
                        },
                        {
                            title: 'Verificar estado del servicio NFS (VM2)',
                            vm: 'VM2 (Servidor)',
                            command: 'sudo systemctl status nfs-kernel-server',
                            explanation: '`systemctl status` muestra el estado actual del servicio NFS, incluyendo si está activo, desde cuándo, y los últimos registros del sistema.',
                            expectedOutput: `● nfs-server.service - NFS server and services
   Loaded: loaded (/lib/systemd/system/nfs-server.service; enabled)
   Active: active (running) since ...`,
                            outputExplanation: 'El estado "active (running)" confirma que el servicio está funcionando correctamente. Si aparece "failed" o "inactive", reinicia el servicio con `sudo systemctl restart nfs-kernel-server`.',
                        },
                    ],

                    // ── Problemas comunes y soluciones ──────────────────
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
                                description: 'Verificar la configuración de red de ambas VMs. Deben estar en el mismo adaptador de red (por ejemplo, "Red interna" o "NAT Network" en VirtualBox):',
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

                    // ── Aprendizaje obtenido ────────────────────────────
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

                    // ── Extensión del laboratorio ───────────────────────
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
                guide: {
                    intro: 'El análisis de tráfico de red es una habilidad esencial para diagnosticar problemas de conectividad, entender el comportamiento de las aplicaciones y detectar anomalías de seguridad. Wireshark es el analizador de protocolos de red (sniffer) más utilizado del mundo, permitiendo ver de forma microscópica lo que ocurre en los cables (o en el aire). En este laboratorio aprenderás a capturar paquetes y a diseccionar el intercambio de mensajes de 4 casos de uso fundamentales.',
                    objectives: [
                        'Entender el proceso de captura de tráfico de red en un entorno virtualizado.',
                        'Diferenciar y filtrar el tráfico según protocolos (DHCP, ICMP, DNS, HTTP).',
                        'Analizar el interior de un paquete y extraer información útil (IPs, MACs, puertos).',
                        'Interpretar los handshakes y secuencias de mensajes cliente-servidor.',
                    ],
                    technologies: [
                        { name: 'Wireshark', icon: 'tool' },
                        { name: 'VirtualBox / VMware', icon: 'server' },
                        { name: 'Ubuntu / Debian', icon: 'monitor' },
                    ],
                    labArchitecture: {
                        diagram: `Cliente Linux (VM) <==== Network Bridge ====> Internet/Router Local`,
                        desc: 'Se utilizará una máquina virtual conectada en modo Bridge (Puente). Esto permite que la VM actúe como un equipo físico independiente en la misma red local que la máquina Host, solicitando su propia IP al router y enviando el tráfico directamente sin NAT.',
                    },
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
                                    { label: 'IP del cliente DHCP al inicio de la solicitud', desc: '¿Qué IP IP origen usa el Discover?' },
                                    { label: '¿Por qué utiliza esta dirección IP inicial?', desc: 'Justificación teórica' },
                                    { label: 'IP destino de los mensajes del Cliente', desc: '¿A quién le habla?' },
                                    { label: 'MAC destino de los mensajes del Cliente', desc: '¿Cuál es la MAC address de broadcast?' },
                                    { label: 'IP destino de los mensajes del Servidor', desc: '¿Hacia dónde envía el Offer/ACK?' },
                                    { label: 'Ip ofrecida al Cliente', desc: 'Your (client) IP address en el paquete' },
                                    { label: 'Tiempo de asignación', desc: 'Lease Time ofrecido' },
                                    { label: 'IP seleccionada por el cliente', desc: 'IP Server identifier confirmada' },
                                ]
                            },
                            simulationLink: 'dhcp'
                        },
                        {
                            title: 'Prueba 2 — Análisis de ICMP con ping',
                            text: 'ICMP es el protocolo utilizado para enviar mensajes de control y error. El comando ping lo utiliza para comprobar la conectividad. Cambia el filtro en Wireshark a "icmp".',
                            command: 'ping -c 4 debian.org',
                            explanation: 'Enviaremos exactamente 4 paquetes ICMP Echo Request al servidor.',
                            simulationLink: 'icmp'
                        },
                        {
                            title: 'Prueba 3 — Análisis del proceso DNS',
                            text: 'Cuando escribiste debian.org en el paso anterior, tu computadora necesitó traducir ese nombre a una dirección IP real antes de mandar el ping. Cambia el filtro de Wireshark a "dns".',
                            tablePrompt: {
                                fields: [
                                    { label: 'Puerto del Servidor DNS', desc: 'Puerto de destino (Dst Port)' },
                                    { label: 'IP destino de la solicitud DNS', desc: '¿A qué servidor le estás preguntando?' },
                                    { label: 'Dirección IP devuelta', desc: 'Respuesta (Answers) dentro del paquete' },
                                ]
                            },
                            simulationLink: 'dns'
                        },
                        {
                            title: 'Prueba 4 — Análisis HTTP y TCP (Three-Way Handshake)',
                            text: 'Abre el navegador web dentro de tu VM y dirígete a debian.org (asegúrate de ir a http:// para ver tráfico en texto plano si tu navegador no fuerza HTTPS, o simplemente analiza el handshake TCP inicial). Filtra en Wireshark por "tcp.port == 80" o "tcp.port == 443".',
                            explanation: 'Busca los primeros tres paquetes entre tu IP y la IP del servidor. Deberías ver las flags [SYN], [SYN, ACK], y [ACK] antes de la petición principal GET/Client Hello.',
                            simulationLink: 'tcp-http'
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
                        }
                    ],
                    learnings: [
                        'Cómo capturar tráfico en modo promiscuo.',
                        'Cómo filtrar tráfico masivo usando sintaxis de Wireshark (bootp, icmp, dns, tcp.port).',
                        'Cómo identificar el mapeo entre capas desde Ethernet (MAC) hasta Aplicación (HTTP).',
                        'Cómo diagnosticar visualmente la salud de una conexión TCP y DNS.',
                    ],
                },
            },
            {
                id: 'pt-lan-estatica',
                title: 'Configuración de una Red Local con Direcciones IP Estáticas en Packet Tracer',
                subtitle: 'Red LAN con IP Estáticas en Packet Tracer',
                type: 'Laboratorio',
                difficulty: 'Básico',
                duration: '30–45 min',
                tags: ['Networking', 'Packet Tracer', 'LAN', 'IPv4', 'Static IP'],
                guide: {
                    intro: 'Una red LAN (Local Area Network) es una red de computadoras que abarca un área local, como una casa, oficina o grupo de edificios, y se utiliza para conectar dispositivos físicos entre sí. Cisco Packet Tracer es una potente herramienta de simulación de red que nos permite estudiar y construir modelos estructurados visualmente sin necesidad de cablear hardware real.',
                    objectives: [
                        'Construir una topología básica de red local con 8 hosts.',
                        'Configurar direcciones IPv4 estáticas manualmente de acuerdo a un plan.',
                        'Comprender el funcionamiento de una red local conectada a un switch.',
                        'Verificar conectividad entre distintos hosts usando paquetes ICMP (ping).',
                    ],
                    technologies: [
                        { name: 'Cisco Packet Tracer', icon: 'tool' },
                        { name: 'LAN Networking', icon: 'server' },
                    ],
                    labArchitecture: {
                        image: red1lab2img,
                        diagram: 'Router1\n  ↓\nSwitch1\n  ↓\nPC0 – PC7',
                        desc: 'Topología con 1 Router, 1 Switch y 8 computadoras conectadas a la misma red: 192.168.0.0/24.',
                    },
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
                                ]
                            }
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
                                'Ve a Connections (el rayo). Utiliza cables directos (Copper Straight-Through, el rayo negro continuo) para conectar la interfaz GigabitEthernet del Router a un puerto Gigabit o FastEthernet del Switch.',
                                'Usa los mismos cables Copper Straight-Through para conectar las interfaces FastEthernet de cada PC a los demás puertos del Switch.'
                            ]
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
                                { cmd: 'exit', desc: 'Salir de la configuración.' }
                            ]
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
                                'Cierra la ventana. Repite el mismo proceso exacto con las otras 7 computadoras asegurándote de usar su IP (.3, .4, .5...) según la tabla.'
                            ]
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
                            outputExplanation: 'La respuesta "Reply from" indicando que no se perdieron paquetes constata que los nodos están en la misma red exitosamente. Repite la prueba haciendo un ping hacia la dirección del Router para confirmar la conectividad global: ping 192.168.0.1'
                        },
                        {
                            id: '06',
                            title: 'Prueba de red completa y conclusión',
                            text: 'Si todo ha sido ejecutado correctamente, habremos validado los conocimientos propuestos en este laboratorio.',
                            steps: [
                                'Prueba de PC0 → PC7',
                                'Prueba de PC3 → PC5',
                                'Prueba de PC1 → PC6'
                            ]
                        }
                    ],
                    learnings: [
                        'Construcción visual y lógica de una red LAN a través de simuladores.',
                        'Configuración de direcciones IP estáticas en terminales (Hosts).',
                        'Uso de la línea de comandos básica (CLI) de Cisco IOS en el Router.',
                        'Pruebas y trazabilidad de conectividad con el protocolo ICMP (Ping).'
                    ],
                },
            },
        ],
    },
    // ── Desarrollo de Software ─────────────────────────────────
    {
        id: 'desarrollo-software',
        code: 'DEV-SOFT',
        title: 'Desarrollo de Software',
        description:
            'Fundamentos del desarrollo de software, metodologías, ciclo de vida del software, arquitectura de sistemas y buenas prácticas de ingeniería.',
        icon: 'code',
        color: '#a78bfa',
        topics: ['Software Engineering', 'SDLC', 'Programming', 'Software Design'],
        labs: [
            {
                id: 'intro-sdlc',
                title: 'Introducción al SDLC — Software Development Life Cycle',
                subtitle: 'El proceso detrás de la creación de software profesional',
                type: 'Teoría',
                difficulty: 'Introductorio',
                duration: '15–20 min',
                tags: ['Software Engineering', 'SDLC', 'Programming', 'Software Design'],
                content: {
                    intro: 'El desarrollo de software profesional no se trata solo de escribir código, sino de resolver problemas complejos mediante un proceso estructurado y repetible. A medida que los sistemas crecen en complejidad, realizar cambios sin planificación se vuelve propenso a errores y muy costoso. Para crear software robusto, mantenible y escalable, la industria de la ingeniería de software utiliza el Ciclo de Vida del Desarrollo de Software (SDLC).',
                    sections: [
                        {
                            type: 'text',
                            title: '¿Qué es el SDLC?',
                            content: 'El <strong>Software Development Life Cycle (SDLC)</strong> es un marco estructurado que guía a los equipos de ingeniería a través de todas las fases necesarias para construir y mantener software de alta calidad. Define tareas, responsabilidades y entregables desde la concepción de una idea hasta el retiro final del sistema.\n\nContar con un proceso SDLC estructurado permite:\n• Mejorar la calidad final del software construido.\n• Reducir y anticipar errores técnicos o de diseño antes de que lleguen a producción.\n• Organizar efectivamente el trabajo de equipos multidisciplinarios (devs, QA, producto, ops).\n• Gestionar de forma predecible el tiempo, costo y alcance de los proyectos.',
                        },
                        {
                            type: 'process',
                            title: 'Fases del Ciclo de Vida del Software',
                            desc: 'Aunque existen diferentes metodologías, el ciclo de vida moderno generalmente se divide en 7 fases fundamentales interconectadas:',
                            simType: 'sdlc',
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
                    ],
                    conclusion: 'El SDLC es el pilar de la ingeniería de software profesional. Conocer los fundamentos teóricos sobre cómo planificar, construir, probar y entregar sistemas diferencia a los programadores solitarios de los ingenieros de software capaces de operar en equipos de élite desarrollando sistemas de gran escala e impacto real.',
                },
            },
            // ── Git Guide ──────────────────────────────────────────
            {
                id: 'intro-git',
                title: 'Introducción a Git y Control de Versiones',
                subtitle: 'Domina el sistema de control de versiones más utilizado del mundo',
                type: 'Guía',
                difficulty: 'Básico / Intermedio',
                duration: '30–45 min',
                tags: ['Git', 'Version Control', 'Software Development', 'GitHub'],
                guide: {
                    intro: 'En el desarrollo de software moderno, el código cambia constantemente. Sin un sistema que registre esos cambios, es imposible colaborar en equipo, revertir errores o entender la evolución del proyecto. Git resuelve exactamente este problema: es el sistema de control de versiones distribuido más utilizado del mundo y es una habilidad fundamental para cualquier desarrollador de software.',
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
                    steps: [
                        {
                            id: '01',
                            title: '¿Qué es Git?',
                            text: 'Git es un sistema de control de versiones distribuido creado por Linus Torvalds en 2005. A diferencia de sistemas centralizados, cada desarrollador tiene una copia completa del historial del repositorio en su propia máquina.',
                            steps: [
                                'Git ≠ GitHub: Git es la herramienta local; GitHub es una plataforma web para alojar repositorios Git remotos.',
                                'Distribuido: no depende de un servidor central para funcionar — puedes hacer commits offline.',
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
                            outputExplanation: 'El repositorio está listo. Todavía no tiene commits — es una pizarra en blanco.',
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
                },
            },
            // ── Scrum Theory ────────────────────────────────────────
            {
                id: 'intro-scrum',
                title: 'Scrum — Metodología Ágil para el Desarrollo de Software',
                subtitle: 'Framework ágil para desarrollar productos complejos mediante iteraciones cortas y colaboración continua',
                type: 'Teoría',
                difficulty: 'Básico / Intermedio',
                duration: '20–30 min',
                tags: ['Scrum', 'Agile', 'Software Development', 'Project Management'],
                content: {
                    intro: 'Los equipos de desarrollo de software durante décadas intentaron construir productos siguiendo planes rígidos y largos: definir todo, luego diseñar todo, luego programar todo. El problema: los requisitos cambian, los clientes cambian de opinión y el mundo cambia. Las <strong>metodologías ágiles</strong> nacieron como respuesta a este problema, priorizando la adaptabilidad, la colaboración y la entrega continua de valor sobre la documentación exhaustiva y los planes inflexibles. Scrum es el framework ágil más utilizado en la industria.',
                    sections: [
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
                                    color: '#f59e0b',
                                    text: 'Es el responsable de <strong>maximizar el valor</strong> del producto. Define qué se va a construir y en qué orden. Gestiona el <em>Product Backlog</em>. Trabaja de puente entre el negocio y el equipo de desarrollo. No es jefe del equipo.'
                                },
                                {
                                    title: 'Scrum Master',
                                    color: '#a78bfa',
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
                                    color: '#a78bfa',
                                    text: 'Primera reunión del Sprint. El equipo define el <strong>Sprint Goal</strong> y selecciona del Backlog los ítems que completará. Responden: ¿Qué entregaremos? y ¿Cómo lo haremos?'
                                },
                                {
                                    title: 'Daily Scrum',
                                    color: '#fb7185',
                                    text: 'Reunión diaria de <strong>15 minutos</strong> para el Development Team. Cada miembro responde: ¿Qué hice ayer? ¿Qué haré hoy? ¿Tengo algún impedimento? Es una sincronización, no un reporte.'
                                },
                                {
                                    title: 'Sprint Review',
                                    color: '#00ff88',
                                    text: 'Al final del Sprint, el equipo <strong>muestra el trabajo completado</strong> a los stakeholders. El objetivo es obtener feedback e inspeccionar el producto. El Backlog se adapta según lo aprendido.'
                                },
                                {
                                    title: 'Sprint Retrospective',
                                    color: '#f59e0b',
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
                            title: 'Ejemplo Práctico — Sprint de una App Web',
                            content: 'Imagina un equipo de 5 personas construyendo una aplicación de gestión de tareas. El <strong>Product Backlog</strong> incluye: Sistema de login, Registro de usuarios, Panel de usuario y Sistema de notificaciones.\n\nEn el <strong>Sprint Planning</strong>, el equipo selecciona "Sistema de login" y "Registro de usuarios" como objetivo del Sprint de 2 semanas. Durante el <strong>Sprint</strong>, cada día el equipo se sincroniza en el Daily Scrum (15 min). A mitad del Sprint, el PO sugiere agregar autenticación con Google — el equipo lo anota en el Backlog pero no lo agrega al Sprint actual.\n\nEn el <strong>Sprint Review</strong>, el equipo demuestra el login funcionando con usuarios reales. Los stakeholders dan feedback positivo y piden que el email de bienvenida sea más personalizado. En la <strong>Retrospectiva</strong>, el equipo identifica que los code reviews tardaban mucho — acordaron hacerlos en menos de 24 horas. El siguiente Sprint comienza con el Backlog actualizado.',
                        },
                    ],
                    conclusion: 'Scrum no es una solución mágica ni una receta perfecta. Es un framework que ayuda a los equipos a aprender más rápido, adaptarse con agilidad y entregar valor de forma continua. Su poder real no está en sus reglas, sino en la cultura que fomenta: colaboración, transparencia y mejora constante. Dominar Scrum es una habilidad esencial para cualquier profesional que trabaje en equipos de desarrollo de software modernos.',
                },
            },
        ],
    },
];

export default subjects;
