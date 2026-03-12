// ─────────────────────────────────────────────────────────────
//  Mentoring Data — Subjects → Labs → Guide
//  Add new subjects to the `subjects` array.
//  Add new labs to any subject's `labs` array.
// ─────────────────────────────────────────────────────────────

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
        ],
    },
];

export default subjects;
