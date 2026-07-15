const moduleStages = [
    ['1. Ecosistema .NET y lenguaje C#', 'Comprender cómo se construye y ejecuta un programa antes de profundizar en el lenguaje.'],
    ['2. POO, genéricos y colecciones', 'Modelar el dominio con tipos seguros y elegir estructuras de datos según el problema.'],
    ['3. Delegados, eventos y MVVM', 'Construir una aplicación dirigida por eventos con una interfaz desacoplada.'],
    ['4. Interfaz y ciclo del juego', 'Diseñar pantallas, entrada, recursos multimedia y actualización temporal.'],
    ['5. Robustez y consultas', 'Manejar fallos, patrones de notificación y transformaciones de datos con LINQ.'],
    ['6. Concurrencia y sincronización', 'Mantener la interfaz responsiva y proteger estado compartido.'],
    ['7. Persistencia y entrega', 'Guardar, leer, comprimir y codificar información de forma segura.'],
];

const q = (prompt, options, answer, explanation) => ({ prompt, options, answer, explanation });

function makeLesson(config) {
    const sections = [
        {
            type: 'calloutGroup',
            title: 'Mapa mental antes de programar',
            variant: 'info',
            items: [
                { icon: 'lightbulb', title: 'Idea central', text: config.core },
                { icon: 'box', title: 'Analogía', text: config.analogy },
                { icon: 'target', title: 'Meta práctica', text: config.practice },
            ],
        },
        { type: 'text', title: 'Explicación paso a paso', content: config.explanation },
    ];

    if (config.simType) {
        sections.push({
            type: 'process',
            title: config.simTitle || 'Simulación del concepto',
            desc: config.simDesc || 'Observa el flujo y relaciona cada etapa con el código de la lección.',
            simType: config.simType,
            simLayout: 'stacked',
            observe: config.observe || [config.core, config.practice],
        });
    }

    if (config.comparison) {
        sections.push({
            type: 'comparisonTable',
            title: config.comparison.title,
            headers: config.comparison.headers,
            rows: config.comparison.rows,
        });
    }

    sections.push(
        {
            type: 'interactiveCode',
            title: config.codeTitle || 'Código guiado en C#',
            desc: 'Explora el ejemplo, selecciona líneas, copia el código y contrasta la salida.',
            language: config.language || 'csharp',
            code: config.code,
            output: config.output,
            explanations: config.explanations || [],
        },
        {
            type: 'checklist',
            title: 'Buenas prácticas',
            items: config.best,
        },
        {
            type: 'accordion',
            title: 'Errores comunes y cómo resolverlos',
            items: [
                { title: config.mistake, problem: config.mistakeDetail, solution: config.fix },
                ...(config.extraMistakes || []),
            ],
        },
        {
            type: 'exercise',
            title: config.type === 'Laboratorio' ? `Hito Pac-Man: ${config.title}` : 'Desafío guiado',
            prompt: config.practice,
            starterCode: config.starterCode,
            hints: config.best.slice(0, 3),
            expectedOutput: config.expected,
            reflection: 'No busques solamente que compile: explica por qué elegiste cada tipo, estructura o API.',
        },
        {
            type: 'quiz',
            title: 'Repaso de la lección',
            questions: config.quiz,
        }
    );

    return {
        id: config.id,
        moduleIndex: config.moduleIndex,
        title: config.title,
        subtitle: config.subtitle,
        type: config.type || 'Teoría',
        difficulty: config.difficulty || (config.moduleIndex < 2 ? 'Principiante' : 'Intermedio'),
        duration: config.duration || '20–30 min',
        tags: ['C#', '.NET', 'Programación 3', ...(config.tags || [])],
        learningFeatures: [
            ...(config.simType ? ['Simulación'] : []),
            'Código interactivo',
            'Ejercicio',
            'Quiz',
        ],
        content: {
            intro: config.intro || `${config.core} En esta lección construiremos un modelo mental preciso, lo conectaremos con un ejemplo ejecutable y cerraremos con una práctica breve.`,
            objectives: [
                `Explicar con tus palabras: ${config.core}`,
                'Leer y modificar un ejemplo C# identificando cada responsabilidad.',
                `Aplicar el concepto en este escenario: ${config.practice}`,
                `Reconocer y corregir este error frecuente: ${config.mistake}`,
            ],
            sections,
            conclusion: `${config.core} La señal de dominio no es memorizar la sintaxis, sino poder justificar cuándo usarla, anticipar sus riesgos y conectarla con el proyecto Pac-Man.`,
        },
    };
}

const lessonDefinitions = [
    {
        id: 'dotnet-ecosystem', moduleIndex: 0, title: 'Ecosistema .NET y ruta de ejecución', subtitle: 'SDK, CLR, CIL, JIT y bibliotecas que convierten C# en una aplicación', tags: ['CLR', 'CIL', 'JIT', 'SDK'],
        core: '.NET es una plataforma: incluye herramientas de compilación, un runtime administrado y bibliotecas; C# es uno de los lenguajes que la utiliza.',
        analogy: 'El compilador traduce tu receta a un formato intermedio; el JIT la adapta a la cocina concreta donde se ejecutará.',
        explanation: '<strong>SDK</strong> contiene CLI, compiladores y plantillas. El compilador de C# produce un assembly con CIL y metadatos. El <strong>CLR</strong> carga ese assembly, verifica tipos, administra memoria y coordina servicios como excepciones y recolección de basura.\n\nCuando un método se necesita, el <strong>JIT</strong> convierte su CIL a instrucciones nativas. Esta separación permite que el mismo proyecto se ejecute en distintos sistemas con un runtime compatible.',
        simType: 'dotnet-pipeline', simTitle: 'C# → CIL → CLR/JIT → proceso',
        code: `Console.WriteLine($"Runtime: {Environment.Version}");
Console.WriteLine($"OS: {Environment.OSVersion}");
Console.WriteLine($"64 bits: {Environment.Is64BitProcess}");`, output: ['Runtime: 10.0.x', 'OS: Microsoft Windows ...', '64 bits: True'],
        best: ['Distingue SDK de runtime.', 'Trabaja con una versión soportada y sus últimos parches.', 'Comprueba el entorno con dotnet --info antes de diagnosticar el proyecto.'],
        mistake: 'Decir que .NET y C# son lo mismo', mistakeDetail: 'El lenguaje define sintaxis y reglas; la plataforma aporta ejecución, tooling y bibliotecas.', fix: 'Nombra la pieza concreta: compilador, CLR, BCL, SDK o lenguaje.',
        practice: 'Dibuja la ruta de un archivo Program.cs hasta convertirse en un proceso y etiqueta qué pieza actúa en cada etapa.', expected: 'Un flujo ordenado: código C# → compilador → assembly CIL → CLR/JIT → código nativo.',
        quiz: [q('¿Qué produce normalmente el compilador de C#?', ['Código CIL y metadatos', 'Solo un archivo de texto', 'Una base de datos'], 0, 'El assembly contiene CIL y metadatos que el runtime puede cargar.')],
    },
    {
        id: 'csharp-project-anatomy', moduleIndex: 0, title: 'Anatomía de una solución C#', subtitle: 'Soluciones, proyectos, namespaces, punto de entrada y CLI', tags: ['CLI', 'Namespaces', 'Main'],
        core: 'Una solución organiza proyectos relacionados; cada proyecto define cómo compilar una unidad desplegable.', analogy: 'La solución es el campus, los proyectos son edificios y los namespaces son la señalización interior.',
        explanation: 'El archivo <strong>.sln</strong> agrupa proyectos; cada <strong>.csproj</strong> declara SDK, target framework, referencias y recursos. Los namespaces evitan colisiones de nombres y expresan contexto.\n\nCon top-level statements el compilador genera el punto de entrada. En proyectos que necesitan una firma explícita puedes declarar <code>static void Main</code> o <code>static async Task Main</code>.',
        code: `namespace Pacman.Core;

public static class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("PAC-MAN listo");
    }
}`, output: 'PAC-MAN listo',
        comparison: { title: 'Unidad y responsabilidad', headers: ['Elemento', 'Responsabilidad', 'Ejemplo'], rows: [['Solución', 'Agrupa proyectos', 'Pacman.sln'], ['Proyecto', 'Produce un assembly', 'Pacman.Core.csproj'], ['Namespace', 'Organiza tipos', 'Pacman.Core']] },
        best: ['Separa UI, dominio y pruebas cuando exista una razón real.', 'Usa namespaces coherentes con el dominio.', 'Mantén el archivo de proyecto pequeño y explícito.'],
        mistake: 'Crear un proyecto por cada clase', mistakeDetail: 'Los proyectos son límites de compilación, no carpetas costosas.', fix: 'Crea proyectos por responsabilidades desplegables o dependencias, no por cantidad de archivos.',
        practice: 'Propón una solución con Pacman.Core, Pacman.Desktop y Pacman.Tests; indica la dirección válida de las referencias.', expected: 'Desktop y Tests pueden depender de Core; Core no depende de la interfaz.',
        quiz: [q('¿Dónde se declara normalmente el target framework?', ['En el .csproj', 'En cada clase', 'En el namespace'], 0, 'El archivo de proyecto controla la configuración de compilación.')],
    },
    {
        id: 'csharp-type-system', moduleIndex: 0, title: 'Sistema de tipos, nullabilidad y memoria', subtitle: 'Variables, valor, referencia, object, boxing y conversiones seguras', tags: ['Tipos', 'Nullability', 'Boxing'],
        core: 'C# es estáticamente tipado: el compilador comprueba qué operaciones son válidas antes de ejecutar.', analogy: 'Un tipo es el contrato de un contenedor: especifica qué puede guardar y qué operaciones admite.',
        explanation: 'Una <strong>variable</strong> es un nombre asociado a un dato que el programa puede consultar o modificar. Su tipo determina qué valores admite, cuánto detalle conserva y qué operaciones son válidas. Por ejemplo, <code>int lives = 3;</code> declara una variable entera, mientras que <code>bool isAlive = true;</code> representa una condición lógica.\n\nC# ofrece enteros (<code>byte</code>, <code>short</code>, <code>int</code>, <code>long</code> y variantes sin signo), números con decimales (<code>float</code>, <code>double</code>, <code>decimal</code>), <code>bool</code>, <code>char</code> y <code>string</code>. <code>var</code> no es un tipo dinámico: solicita al compilador inferir un tipo fijo a partir del valor inicial. <code>dynamic</code>, en cambio, pospone comprobaciones hasta la ejecución y debe utilizarse solo al interoperar con APIs que lo necesitan.\n\nLos tipos de valor contienen sus datos; al asignarlos se copia el valor. Una variable de tipo referencia contiene una referencia a una instancia y varias variables pueden señalar el mismo objeto. Esto es semántica, no una regla absoluta de “stack contra heap”. Usa <code>?</code> para expresar nullabilidad, como <code>int?</code> o <code>string?</code>, y <code>TryParse</code> para convertir texto no confiable sin provocar una excepción.',
        simType: 'csharp-memory',
        comparison: { title: 'Tipos fundamentales de C#', headers: ['Tipo', 'Representa', 'Ejemplo', 'Uso habitual'], rows: [
            ['byte / sbyte', 'Enteros de 8 bits', 'byte pellets = 240;', 'Datos pequeños o bytes'],
            ['short / ushort', 'Enteros de 16 bits', 'short offset = -120;', 'Rangos enteros acotados'],
            ['int / uint', 'Enteros de 32 bits', 'int score = 1200;', 'Contadores e índices'],
            ['long / ulong', 'Enteros de 64 bits', 'long ticks = 9000000L;', 'Cantidades enteras grandes'],
            ['float', 'Decimal de precisión simple', 'float opacity = 0.8f;', 'Gráficos y valores aproximados'],
            ['double', 'Decimal de doble precisión', 'double speed = 4.75;', 'Cálculos generales'],
            ['decimal', 'Decimal base 10 preciso', 'decimal price = 19.90m;', 'Dinero y cálculos financieros'],
            ['bool', 'Verdadero o falso', 'bool isAlive = true;', 'Condiciones y banderas'],
            ['char', 'Un carácter UTF-16', "char rank = 'A';", 'Símbolos individuales'],
            ['string', 'Secuencia de caracteres', 'string name = "Pac";', 'Texto'],
            ['object', 'Tipo base de .NET', 'object value = score;', 'APIs generales; puede producir boxing'],
            ['Tipos propios', 'Objetos del dominio', 'Player player = new("Pac");', 'Entidades y modelos'],
        ] },
        code: `int lives = 3;
bool isAlive = lives > 0;
char rank = 'A';
string playerName = "Pac";
double speed = 4.75;
decimal prize = 19.90m;

var level = 1;             // El compilador infiere int
string? nickname = null;   // La referencia puede ser nula
int? bonus = null;         // Valor nullable

if (int.TryParse("1200", out int score))
    Console.WriteLine($"{playerName}: {score}");

object boxedLives = lives; // Boxing: int → object
Console.WriteLine($"Vivo: {isAlive}, rango: {rank}");`, output: ['Pac: 1200', 'Vivo: True, rango: A'],
        best: ['Activa nullable reference types.', 'Prefiere conversiones explícitas cuando puede perderse información.', 'Usa TryParse para entrada no confiable.'],
        mistake: 'Asumir que copiar una referencia clona el objeto', mistakeDetail: 'La asignación copia la referencia; ambas variables apuntan a la misma instancia.', fix: 'Crea una nueva instancia o implementa una copia explícita cuando necesites independencia.',
        practice: 'Declara nombre, vidas, score, velocidad, estado activo y premio usando el tipo más adecuado. Después convierte un score recibido como texto con TryParse.', expected: 'Variables correctamente tipadas y una conversión que maneja entradas inválidas sin lanzar excepciones.',
        quiz: [q('¿Qué tipo usarías para contar vidas?', ['int', 'string', 'bool'], 0, 'int representa enteros y es la opción habitual para contadores.'), q('¿Qué guarda bool?', ['Verdadero o falso', 'Texto', 'Números decimales'], 0, 'bool modela condiciones lógicas.'), q('¿Qué significa var en C#?', ['El compilador infiere un tipo fijo', 'La variable cambia de tipo libremente', 'Siempre equivale a object'], 0, 'var conserva tipado estático; el tipo se decide al compilar.')],
    },
    {
        id: 'csharp-flow-lab', moduleIndex: 0, title: 'Control de flujo y métodos', subtitle: 'Decisiones, ciclos, conversiones y una primera regla del juego', type: 'Laboratorio', duration: '35–45 min', tags: ['Control de flujo', 'Métodos', 'Pac-Man'],
        core: 'El flujo expresa decisiones y repetición; los métodos convierten esa lógica en unidades nombradas y comprobables.', analogy: 'Un método es una máquina pequeña: recibe entradas, aplica una regla y devuelve un resultado.',
        explanation: 'Usa <code>if</code> para rangos o condiciones compuestas y <code>switch</code> cuando una misma entrada determina alternativas claras. Los ciclos deben declarar su condición de avance y su condición de salida.\n\nUn método debe tener un nombre verbal, pocos parámetros y una responsabilidad observable. En Pac-Man, calcular puntos y modificar la interfaz son responsabilidades distintas.',
        code: `static int ScoreFor(ItemType item) => item switch
{
    ItemType.Dot => 10,
    ItemType.PowerPellet => 50,
    ItemType.Ghost => 200,
    _ => 0
};

int total = 0;
foreach (ItemType item in new[] { ItemType.Dot, ItemType.Ghost })
    total += ScoreFor(item);

Console.WriteLine(total);

enum ItemType { Dot, PowerPellet, Ghost }`, output: '210',
        best: ['Usa guard clauses para casos inválidos.', 'Evita métodos que calculen, impriman y guarden a la vez.', 'Nombra las reglas del dominio en lugar de repetir números mágicos.'],
        mistake: 'Usar goto o condicionales anidados sin necesidad', mistakeDetail: 'El flujo se vuelve difícil de seguir y probar.', fix: 'Extrae métodos, usa guard clauses y elige switch expressions para mapeos claros.',
        practice: 'Implementa ScoreFor y una regla de vidas que nunca permita valores menores que cero; documenta dos casos de prueba.', expected: 'Una regla pura de puntuación y una actualización de vidas con límites explícitos.',
        quiz: [q('¿Qué ventaja tiene una función pura como ScoreFor?', ['Misma entrada, mismo resultado', 'Modifica toda la UI', 'Necesita estado global'], 0, 'Es fácil de probar porque no depende de efectos ocultos.')],
    },
    {
        id: 'classes-structs-properties', moduleIndex: 1, title: 'Clases, structs y propiedades', subtitle: 'Modela identidad, valores pequeños y estado válido', tags: ['Clases', 'Structs', 'Propiedades'],
        core: 'Usa clases para entidades con identidad y structs pequeños e inmutables para valores.', analogy: 'Un jugador sigue siendo el mismo jugador aunque cambie su score; una coordenada es simplemente un valor.',
        explanation: 'Las propiedades controlan el acceso al estado y permiten validar invariantes. Un <code>record struct</code> inmutable es útil para coordenadas porque su igualdad depende de sus valores.\n\nEvita decidir entre class y struct por una supuesta ubicación fija en memoria. Decide por semántica de identidad, tamaño, mutabilidad y costo de copia.',
        simType: 'csharp-memory',
        code: `public readonly record struct Position(int X, int Y)
{
    public Position Move(int dx, int dy) => new(X + dx, Y + dy);
}

public sealed class Player
{
    public string Name { get; }
    public Position Position { get; private set; }

    public Player(string name) => Name = name;
    public void Move(int dx, int dy) => Position = Position.Move(dx, dy);
}`, output: 'Player conserva identidad; Position se reemplaza por un nuevo valor.',
        best: ['Mantén structs pequeños e inmutables.', 'Protege setters que no deben cambiarse desde cualquier lugar.', 'Valida invariantes en constructores o métodos del dominio.'],
        mistake: 'Crear un struct grande y mutable', mistakeDetail: 'Cada copia arrastra todos sus campos y los cambios pueden resultar sorprendentes.', fix: 'Usa readonly record struct para valores pequeños o cambia a class si existe identidad y mutación.',
        practice: 'Añade una regla que impida posiciones negativas sin exponer el setter de Position.', expected: 'El movimiento inválido se rechaza o se ajusta dentro del dominio.',
        quiz: [q('¿Cuál es una buena candidata para struct?', ['Una coordenada inmutable', 'Una ventana con muchos servicios', 'Un repositorio compartido'], 0, 'Las coordenadas son valores pequeños con igualdad por contenido.')],
    },
    {
        id: 'oop-pillars-csharp', moduleIndex: 1, title: 'POO aplicada en C#', subtitle: 'Encapsulamiento, abstracción, herencia, interfaces y polimorfismo', tags: ['POO', 'Interfaces', 'Polimorfismo'],
        core: 'La POO organiza responsabilidades; sus mecanismos sirven para proteger reglas y sustituir comportamientos.', analogy: 'Una interfaz es un enchufe: define la forma de conexión sin imponer cómo funciona el dispositivo por dentro.',
        explanation: 'Encapsular significa que el objeto protege su estado. Abstraer significa exponer lo necesario. La herencia modela una relación “es un”, pero crea acoplamiento; una interfaz expresa una capacidad y suele ser más flexible.\n\nEl polimorfismo permite invocar la misma operación sobre implementaciones diferentes. En el juego, cada fantasma puede implementar una estrategia de movimiento.',
        code: `public interface IMovementStrategy
{
    Position Next(Position ghost, Position player);
}

public sealed class ChaseStrategy : IMovementStrategy
{
    public Position Next(Position ghost, Position player)
    {
        int dx = Math.Sign(player.X - ghost.X);
        int dy = Math.Sign(player.Y - ghost.Y);
        return ghost.Move(dx, dy);
    }
}`, output: 'La estrategia puede sustituirse sin cambiar Ghost.',
        best: ['Prefiere composición cuando no existe una relación “es un” estable.', 'Mantén interfaces pequeñas y centradas.', 'No expongas campos públicos para saltarte invariantes.'],
        mistake: 'Usar herencia solo para reutilizar código', mistakeDetail: 'La clase derivada queda atada al contrato y cambios de la base.', fix: 'Extrae una colaboración o estrategia e inyéctala por interfaz.',
        practice: 'Crea RandomStrategy y permite que Ghost reciba cualquier IMovementStrategy.', expected: 'Dos estrategias intercambiables con la misma interfaz.',
        quiz: [q('¿Qué expresa mejor una capacidad intercambiable?', ['Una interfaz', 'Un campo público', 'Un goto'], 0, 'La interfaz define el contrato sin fijar la implementación.')],
    },
    {
        id: 'generics-comparers', moduleIndex: 1, title: 'Genéricos, restricciones y comparadores', subtitle: 'Reutilización segura sin perder información de tipos', tags: ['Genéricos', 'IComparer', 'Constraints'],
        core: 'Los genéricos aplazan la elección del tipo y conservan comprobaciones en tiempo de compilación.', analogy: 'Una caja genérica define cómo se usa el contenedor; el parámetro T indica qué carga admite cada instancia.',
        explanation: 'Las restricciones <code>where</code> informan qué operaciones están disponibles sobre T. <code>IComparable&lt;T&gt;</code> define el orden natural del propio tipo; <code>IComparer&lt;T&gt;</code> permite órdenes externos y alternativos.\n\nNo añadas restricciones “por si acaso”: cada una reduce los tipos que pueden usar el algoritmo.',
        code: `public static T MaxBy<T, TKey>(
    IEnumerable<T> source,
    Func<T, TKey> keySelector)
    where TKey : IComparable<TKey>
{
    return source.Aggregate((best, current) =>
        keySelector(current).CompareTo(keySelector(best)) > 0
            ? current
            : best);
}`, output: 'Devuelve el elemento cuya clave es mayor.',
        comparison: { title: 'Dos formas de ordenar', headers: ['Contrato', 'Dónde vive', 'Uso'], rows: [['IComparable<T>', 'Dentro del tipo', 'Orden natural'], ['IComparer<T>', 'Tipo separado', 'Órdenes alternativos']] },
        best: ['Usa la versión genérica de las interfaces.', 'Define restricciones mínimas.', 'Prefiere IComparer cuando no controlas el tipo o existen varios órdenes.'],
        mistake: 'Usar object y casts en vez de T', mistakeDetail: 'Se pierde seguridad de tipos y pueden aparecer errores tardíos.', fix: 'Introduce parámetros de tipo y restricciones explícitas.',
        practice: 'Ordena ScoreEntry por puntuación descendente y luego por nombre ascendente.', expected: 'Un IComparer<ScoreEntry> con desempate determinista.',
        quiz: [q('¿Cuándo conviene IComparer<T>?', ['Cuando necesitas un orden externo', 'Para declarar un namespace', 'Para abrir un archivo'], 0, 'El comparador puede vivir fuera del tipo y ofrecer varios criterios.')],
    },
    {
        id: 'collections-pacman', moduleIndex: 1, title: 'Arrays, listas y diccionarios', subtitle: 'Elige estructuras por acceso, tamaño y clave', type: 'Laboratorio', duration: '35–50 min', tags: ['Array', 'List', 'Dictionary', 'Pac-Man'],
        core: 'La colección correcta comunica cómo se accede a los datos y qué operaciones deben ser eficientes.', analogy: 'Un array es una fila fija, una lista es una fila extensible y un diccionario es un casillero identificado por llave.',
        explanation: 'Un array funciona bien para dimensiones conocidas, como una matriz de celdas. <code>List&lt;T&gt;</code> sirve para secuencias dinámicas. <code>Dictionary&lt;TKey,TValue&gt;</code> permite buscar por una clave única.\n\nNo elijas por costumbre: pregunta si necesitas orden, duplicados, acceso por índice, búsqueda por clave o tamaño variable.',
        code: `Tile[,] board = new Tile[3, 3];
List<Ghost> ghosts = [];
Dictionary<string, int> scores = new()
{
    ["Ada"] = 1200,
    ["Linus"] = 980
};

ghosts.Add(new Ghost("Blinky"));
Console.WriteLine(scores["Ada"]);

public record Ghost(string Name);
public enum Tile { Empty, Wall, Dot }`, output: '1200',
        best: ['Expón IEnumerable<T> si el consumidor solo necesita recorrer.', 'Verifica claves con TryGetValue.', 'Evita modificar una colección mientras la recorres.'],
        mistake: 'Usar Dictionary cuando una clave puede repetirse', mistakeDetail: 'Add lanzará una excepción o una asignación reemplazará el valor.', fix: 'Define la unicidad o usa una colección agrupada por clave.',
        practice: 'Modela tablero, fantasmas y scoreboard usando una colección diferente para cada necesidad y justifica la elección.', expected: 'Matriz para tablero, lista para fantasmas y diccionario o lista ordenada para scores.',
        quiz: [q('¿Qué colección expresa búsqueda por clave única?', ['Dictionary<TKey,TValue>', 'Stack<T>', 'Array bidimensional siempre'], 0, 'Dictionary asocia claves únicas con valores.')],
    },
    {
        id: 'delegates-action-func', moduleIndex: 2, title: 'Delegados, Action, Func y lambdas', subtitle: 'Trata comportamiento como un valor seguro', tags: ['Delegates', 'Action', 'Func', 'Lambda'],
        core: 'Un delegado encapsula una referencia segura a uno o más métodos con una firma compatible.', analogy: 'Es una tarjeta con instrucciones de a quién llamar y qué datos entregar.',
        explanation: '<code>Action</code> representa una operación sin valor de retorno. <code>Func</code> siempre reserva su último parámetro genérico para el tipo retornado. Las lambdas permiten construir implementaciones pequeñas en el lugar donde se usan.\n\nUn multicast delegate invoca varios métodos, pero su manejo de retornos y excepciones exige cuidado; para notificaciones públicas suele preferirse un evento.',
        code: `Action<string> log = message => Console.WriteLine(message);
Func<int, int, int> add = (left, right) => left + right;

log("Movimiento aceptado");
int score = add(10, 50);
Console.WriteLine(score);`, output: ['Movimiento aceptado', '60'],
        best: ['Nombra el delegado si la firma expresa una idea de dominio.', 'Usa Action para comandos y Func para cálculos.', 'Mantén lambdas cortas; extrae las complejas a métodos.'],
        mistake: 'Afirmar que Func no devuelve valor', mistakeDetail: 'El último argumento genérico de Func es precisamente el retorno.', fix: 'Lee Func<TInput,TResult>; usa Action<T> cuando el retorno sea void.',
        practice: 'Crea una Func<ItemType,int> para puntaje y una Action<string> para registrar eventos.', expected: 'Dos comportamientos con firmas correctas y sin casts.',
        quiz: [q('¿Qué representa Func<int,bool>?', ['Una función que recibe int y devuelve bool', 'Una acción sin retorno', 'Un evento sin firma'], 0, 'El último tipo genérico de Func es el resultado.')],
    },
    {
        id: 'events-eventargs', moduleIndex: 2, title: 'Eventos y EventArgs', subtitle: 'Publicadores, suscriptores y ciclo de vida de una notificación', tags: ['Eventos', 'EventArgs', 'Suscripción'],
        core: 'Un evento permite que un publicador anuncie algo sin conocer las acciones concretas de sus suscriptores.', analogy: 'Es una estación de radio: emite una señal y cada receptor decide cómo responder.',
        explanation: 'Fuera de la clase que declara un evento solo es posible suscribirse o desuscribirse. La clase publicadora conserva el derecho de emitirlo. <code>EventHandler&lt;TEventArgs&gt;</code> ofrece una firma convencional.\n\nDesuscribirse importa cuando el publicador vive más que el suscriptor; de lo contrario, la referencia almacenada puede impedir que el suscriptor sea recolectado.',
        simType: 'csharp-events',
        code: `public sealed class Game
{
    public event EventHandler<ScoreChangedEventArgs>? ScoreChanged;

    public void AddPoints(int points)
    {
        Score += points;
        ScoreChanged?.Invoke(this, new(Score));
    }

    public int Score { get; private set; }
}

public sealed record ScoreChangedEventArgs(int Score) : EventArgs;`, output: 'Los suscriptores reciben el nuevo score.',
        best: ['Emite el evento desde la clase que lo declara.', 'Usa nombres en pasado para hechos: ScoreChanged.', 'Desuscribe handlers de objetos con ciclos de vida distintos.'],
        mistake: 'Invocar un evento desde código externo', mistakeDetail: 'Rompe el control del publicador sobre cuándo ocurrió el hecho.', fix: 'Expón un método que ejecute la regla y emita el evento internamente.',
        practice: 'Conecta ScoreChanged con un logger y una vista; luego desuscribe la vista al cerrarla.', expected: 'Dos handlers independientes y una desuscripción explícita.',
        quiz: [q('¿Quién puede emitir un event?', ['La clase que lo declara', 'Cualquier suscriptor', 'El sistema operativo solamente'], 0, 'El keyword event restringe la invocación al publicador.')],
    },
    {
        id: 'avalonia-xaml', moduleIndex: 2, title: 'Avalonia, XAML y code-behind', subtitle: 'Construye una interfaz multiplataforma sin mezclar responsabilidades', tags: ['Avalonia', 'XAML', 'Desktop'],
        core: 'XAML declara el árbol visual; C# coordina comportamiento y estado.', analogy: 'XAML es el plano de una escena y C# es el equipo que responde a lo que ocurre en ella.',
        explanation: 'Avalonia utiliza XAML y un sistema de propiedades y estilos inspirado en tecnologías XAML de escritorio. Un archivo de vista se conecta con su clase parcial mediante <code>x:Class</code>.\n\nNo todas las APIs de WinUI, UWP o WPF existen en Avalonia. Marca la plataforma de cada ejemplo y consulta los controles equivalentes en lugar de copiar código entre frameworks.',
        language: 'xaml',
        code: `<!-- MainWindow.axaml -->
<Window xmlns="https://github.com/avaloniaui"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        x:Class="Pacman.Desktop.MainWindow">
    <StackPanel Spacing="12" Margin="24">
        <TextBlock Text="PAC-MAN" FontSize="32" />
        <Button Content="Iniciar juego" Click="StartGame" />
    </StackPanel>
</Window>`, output: 'Ventana con título y botón de inicio.',
        best: ['Declara estructura y estilos en XAML.', 'Evita reglas de negocio en code-behind.', 'Usa nombres solo para controles que realmente deben consultarse.'],
        mistake: 'Copiar una API de WinUI como si fuera Avalonia', mistakeDetail: 'La sintaxis XAML parecida no garantiza que controles y propiedades sean equivalentes.', fix: 'Verifica el namespace y usa la documentación del framework objetivo.',
        practice: 'Crea una pantalla inicial con Iniciar, Score Board y Salir; conserva la lógica de navegación fuera del modelo.', expected: 'XAML válido con una jerarquía clara y handlers mínimos.',
        quiz: [q('¿Qué describe mejor XAML?', ['El árbol visual y sus propiedades', 'El algoritmo JIT', 'La base de datos'], 0, 'XAML es una forma declarativa de construir objetos de UI.')],
    },
    {
        id: 'mvvm-binding-pacman', moduleIndex: 2, title: 'MVVM y data binding', subtitle: 'Sincroniza la vista con un ViewModel observable', type: 'Laboratorio', duration: '40–55 min', tags: ['MVVM', 'Binding', 'INotifyPropertyChanged'],
        core: 'MVVM separa presentación, estado de pantalla y reglas del dominio; el binding mantiene la comunicación.', analogy: 'El ViewModel es un adaptador: traduce el lenguaje del dominio al formato que la vista puede mostrar.',
        explanation: '<code>INotifyPropertyChanged</code> notifica que una propiedad del objeto cambió. <code>ObservableCollection</code> notifica altas, bajas y movimientos de la colección; no reemplaza la notificación de propiedades de cada elemento.\n\nEl ViewModel no debe conocer controles concretos. Expone propiedades y comandos; la vista decide cómo representarlos.',
        simType: 'csharp-mvvm',
        code: `public sealed class GameViewModel : INotifyPropertyChanged
{
    private int _score;
    public int Score
    {
        get => _score;
        private set
        {
            if (_score == value) return;
            _score = value;
            PropertyChanged?.Invoke(this, new(nameof(Score)));
        }
    }

    public event PropertyChangedEventHandler? PropertyChanged;
    public void AddPoints(int value) => Score += value;
}`, output: 'La vista enlazada a Score se actualiza al cambiar.',
        best: ['No referencies controles desde el ViewModel.', 'Notifica solo cuando el valor realmente cambia.', 'Usa ObservableCollection para cambios estructurales y PropertyChanged para propiedades.'],
        mistake: 'Esperar que ObservableCollection observe cada propiedad interna', mistakeDetail: 'La colección informa que cambió su estructura, no necesariamente el contenido de cada objeto.', fix: 'Haz que los elementos implementen INotifyPropertyChanged cuando sus propiedades sean observables.',
        practice: 'Conecta score, vidas y lista de fantasmas a una vista Avalonia mediante binding.', expected: 'La UI se actualiza sin asignar manualmente Text en cada cambio.',
        quiz: [q('¿Qué notifica ObservableCollection por sí misma?', ['Cambios en la colección', 'Cualquier campo privado de cada elemento', 'Cambios del sistema operativo'], 0, 'Altas y bajas de elementos son su responsabilidad principal.')],
    },
    {
        id: 'avalonia-layouts', moduleIndex: 3, title: 'Layouts: StackPanel, Grid y Canvas', subtitle: 'Diseña por comportamiento, no por coordenadas accidentales', tags: ['Layout', 'Grid', 'Canvas'],
        core: 'Cada panel resuelve un tipo de distribución: flujo, cuadrícula o posicionamiento absoluto.', analogy: 'StackPanel es una fila, Grid es un plano arquitectónico y Canvas es una mesa de coordenadas.',
        explanation: 'StackPanel mide sus hijos en la dirección del flujo. Grid distribuye espacio con tamaños fijos, automáticos y proporcionales. Canvas posiciona por coordenadas y resulta útil para entidades del tablero, pero no para toda la interfaz.\n\nCombinar paneles es normal: Grid para la pantalla, StackPanel para menús y Canvas para el área de juego.',
        simType: 'avalonia-layouts',
        code: `<Grid RowDefinitions="Auto,*" ColumnDefinitions="220,*">
    <Border Grid.RowSpan="2" Grid.Column="0">
        <StackPanel Spacing="8">
            <Button Content="Jugar" />
            <Button Content="Scores" />
        </StackPanel>
    </Border>
    <Canvas Grid.Row="1" Grid.Column="1">
        <Ellipse Width="28" Height="28" Canvas.Left="80" Canvas.Top="64" />
    </Canvas>
</Grid>`, output: 'Menú lateral y tablero independiente.',
        best: ['Usa Grid para estructura general.', 'Reserva Canvas para coordenadas intencionales.', 'Prueba redimensionamiento y escalado de texto.'],
        mistake: 'Construir toda la ventana con Canvas', mistakeDetail: 'Las coordenadas fijas fallan al redimensionar, traducir o aumentar texto.', fix: 'Usa paneles adaptativos fuera del tablero y limita Canvas al espacio de juego.',
        practice: 'Dibuja la estructura del menú y tablero eligiendo un panel para cada región.', expected: 'Grid raíz, StackPanel para acciones y Canvas solo para entidades.',
        quiz: [q('¿Qué panel es mejor para filas y columnas adaptativas?', ['Grid', 'Canvas', 'Ninguno'], 0, 'Grid expresa una cuadrícula con tamaños flexibles.')],
    },
    {
        id: 'styles-navigation', moduleIndex: 3, title: 'Estilos, recursos y navegación', subtitle: 'Consistencia visual y transición entre pantallas', tags: ['Styles', 'Navigation', 'Resources'],
        core: 'Los estilos centralizan decisiones visuales y la navegación modela el cambio de estado de la aplicación.', analogy: 'Un recurso compartido es una regla de identidad; una pila de navegación es un historial de pantallas.',
        explanation: 'Los estilos evitan repetir propiedades y permiten estados como hover, focus y disabled. Los recursos deben vivir en el nivel más estrecho que aún permita reutilizarlos.\n\nPara una aplicación pequeña puedes cambiar vistas mediante un ContentControl y un ViewModel actual. Evita que cada botón cree ventanas arbitrariamente sin un coordinador.',
        code: `<Application.Styles>
    <Style Selector="Button.primary">
        <Setter Property="Background" Value="#FFB000" />
        <Setter Property="CornerRadius" Value="10" />
        <Setter Property="Padding" Value="18,10" />
    </Style>
    <Style Selector="Button.primary:pointerover">
        <Setter Property="Background" Value="#FFD166" />
    </Style>
</Application.Styles>`, output: 'Botón principal consistente y con estado hover.',
        best: ['Define tokens antes de estilos concretos.', 'Incluye focus visible, disabled y pressed.', 'Centraliza la decisión de navegación.'],
        mistake: 'Copiar el mismo estilo en cada botón', mistakeDetail: 'Los cambios de identidad requieren editar muchos lugares.', fix: 'Crea clases de estilo y recursos compartidos.',
        practice: 'Define estilos para acción primaria, secundaria y peligrosa; diseña navegación Inicio → Juego → Game Over.', expected: 'Tres variantes coherentes y un flujo de pantallas explícito.',
        quiz: [q('¿Qué beneficio principal aporta un estilo compartido?', ['Consistencia y mantenimiento', 'Más estado global', 'Elimina el compilador'], 0, 'Una regla visual central evita duplicación.')],
    },
    {
        id: 'keyboard-media', moduleIndex: 3, title: 'Teclado, foco, imágenes y audio', subtitle: 'Entrada accesible y recursos portables', tags: ['Keyboard', 'Focus', 'Media'],
        core: 'La entrada de teclado depende del foco; los recursos deben resolverse con rutas y APIs propias de la plataforma.', analogy: 'El foco es el micrófono: solo el control que lo tiene recibe la conversación de teclado.',
        explanation: 'Los eventos de teclado se reciben en el elemento enfocado y pueden propagarse por la jerarquía. El orden de tabulación debe seguir la lectura visual. Para movimiento continuo, guarda la dirección solicitada y deja que el ciclo del juego actualice la posición.\n\nEvita rutas absolutas del equipo. Empaqueta imágenes y sonidos como recursos o calcula rutas desde una ubicación conocida.',
        code: `private Direction _requestedDirection;

private void OnKeyDown(object? sender, KeyEventArgs e)
{
    _requestedDirection = e.Key switch
    {
        Key.Up => Direction.Up,
        Key.Down => Direction.Down,
        Key.Left => Direction.Left,
        Key.Right => Direction.Right,
        _ => _requestedDirection
    };
}`, output: 'La tecla cambia intención; el timer realiza el movimiento.',
        best: ['No dependas de hover para acciones esenciales.', 'Mantén un orden de tabulación lógico.', 'Usa recursos empaquetados y nombres consistentes.'],
        mistake: 'Mover al personaje únicamente dentro de KeyDown', mistakeDetail: 'La velocidad depende de la repetición del teclado y varía entre equipos.', fix: 'KeyDown cambia dirección; un game loop aplica movimiento a intervalos estables.',
        practice: 'Mapea flechas y WASD a Direction sin duplicar la lógica de movimiento.', expected: 'Una función de traducción y un estado de dirección reutilizable.',
        quiz: [q('¿Qué debería hacer KeyDown en un game loop?', ['Actualizar la intención de dirección', 'Bloquear el hilo por un segundo', 'Guardar el score en cada tecla'], 0, 'El ciclo temporal debe controlar el movimiento estable.')],
    },
    {
        id: 'dispatcher-midterm', moduleIndex: 3, title: 'DispatcherTimer y primera versión jugable', subtitle: 'Construye el hito Midterm sin bloquear la interfaz', type: 'Laboratorio', duration: '55–75 min', tags: ['DispatcherTimer', 'Game Loop', 'Midterm'],
        core: 'DispatcherTimer agenda callbacks en el hilo de UI; es apropiado para actualizaciones breves, no para trabajo pesado.', analogy: 'Es un metrónomo dentro del escenario: marca cuándo actualizar, pero no debe interpretar una obra completa en cada pulso.',
        explanation: 'Configura un intervalo, suscribe Tick y comienza el timer. En cada tick calcula el siguiente estado y actualiza lo mínimo necesario. El callback sigue ejecutándose en UI: una operación lenta congelará la ventana.\n\nEl Midterm integra menú, tablero, dirección, colisiones, puntos, vidas, fantasmas simples y Game Over. Divide el trabajo en reglas del dominio y representación visual.',
        code: `private readonly DispatcherTimer _timer = new()
{
    Interval = TimeSpan.FromMilliseconds(120)
};

public MainWindow()
{
    InitializeComponent();
    _timer.Tick += (_, _) => UpdateFrame();
    _timer.Start();
}

private void UpdateFrame()
{
    _game.TryMovePlayer(_requestedDirection);
    Render(_game.State);
}`, output: 'La ventana actualiza el juego cada 120 ms.',
        best: ['Mantén Tick corto y predecible.', 'Detén y desuscribe timers al cerrar.', 'Separa Update de Render.'],
        mistake: 'Leer archivos o hacer cálculos pesados en Tick', mistakeDetail: 'DispatcherTimer comparte el hilo con la interfaz.', fix: 'Mueve I/O a métodos async y calcula solo el siguiente frame dentro del tick.',
        practice: 'Integra el alcance Midterm: inicio, tablero, movimiento, paredes, score, 3 vidas, 2 fantasmas simples y reinicio.', expected: 'Una versión jugable y estable con responsabilidades separadas.',
        quiz: [q('¿Puede DispatcherTimer congelar la UI?', ['Sí, si Tick tarda demasiado', 'No, nunca', 'Solo en Linux'], 0, 'Sus callbacks se ejecutan en el hilo de UI.')],
    },
    {
        id: 'observer-pattern', moduleIndex: 4, title: 'Patrón Observer con eventos', subtitle: 'Notifica cambios sin acoplar publicador y consumidores', tags: ['Observer', 'Design Patterns'],
        core: 'Observer establece una relación uno-a-muchos: un cambio relevante notifica a interesados registrados.', analogy: 'Es una suscripción a alertas: la fuente publica una novedad y cada receptor decide qué hacer.',
        explanation: 'En C# los eventos proporcionan una implementación idiomática de Observer. El patrón es útil cuando no se conoce de antemano cuántos consumidores reaccionarán.\n\nNo todo cambio necesita un evento. Si existe un único colaborador obligatorio, una llamada directa suele ser más clara.',
        simType: 'csharp-events',
        code: `Game game = new();

void UpdateHud(object? sender, ScoreChangedEventArgs e) =>
    Console.WriteLine($"HUD: {e.Score}");

void PlaySound(object? sender, ScoreChangedEventArgs e) =>
    Console.WriteLine("SFX: dot.wav");

game.ScoreChanged += UpdateHud;
game.ScoreChanged += PlaySound;
game.AddPoints(10);`, output: ['HUD: 10', 'SFX: dot.wav'],
        best: ['Publica hechos, no órdenes ambiguas.', 'Evita handlers demasiado pesados.', 'Documenta quién posee la suscripción.'],
        mistake: 'Crear una cadena invisible de eventos', mistakeDetail: 'Demasiadas reacciones indirectas dificultan seguir el flujo.', fix: 'Reserva eventos para hechos relevantes y registra el flujo en puntos clave.',
        practice: 'Diseña un evento PlayerDied con handlers para vidas, sonido y pantalla Game Over.', expected: 'Un publicador y tres reacciones independientes con datos suficientes.',
        quiz: [q('¿Cuándo es útil Observer?', ['Cuando varios consumidores reaccionan a un hecho', 'Para reemplazar toda llamada de método', 'Solo al leer archivos'], 0, 'El patrón desacopla un publicador de múltiples interesados.')],
    },
    {
        id: 'exception-handling', moduleIndex: 4, title: 'Excepciones y recuperación', subtitle: 'Captura donde puedas aportar contexto o una acción útil', tags: ['Exceptions', 'Try Catch', 'Rethrow'],
        core: 'Una excepción representa un fallo que interrumpe el flujo normal; debe capturarse donde exista una estrategia real.', analogy: 'Es una alarma: no sirve silenciarla; hay que registrar contexto, recuperar o escalar correctamente.',
        explanation: 'Captura tipos específicos antes de los generales. Usa <code>finally</code> para limpieza que siempre debe ocurrir, aunque <code>using</code> suele expresar mejor la disposición. Para relanzar preservando el stack usa <code>throw;</code>.\n\nAl envolver una excepción, conserva la original como InnerException. No uses excepciones para decisiones esperadas como validar una tecla.',
        code: `try
{
    string json = File.ReadAllText(path);
    return JsonSerializer.Deserialize<GameState>(json)
        ?? throw new InvalidDataException("Estado vacío");
}
catch (JsonException ex)
{
    throw new InvalidDataException(
        $"El archivo '{path}' no contiene un estado válido.", ex);
}`, output: 'El consumidor recibe contexto y conserva la causa original.',
        best: ['Captura excepciones específicas.', 'Conserva el stack con throw;.', 'Incluye contexto sin exponer secretos.'],
        mistake: 'Usar throw ex;', mistakeDetail: 'Reinicia información útil del stack trace.', fix: 'Usa throw; para relanzar o crea una nueva excepción con la original como inner exception.',
        practice: 'Diseña la carga del scoreboard para distinguir archivo inexistente, acceso denegado y contenido inválido.', expected: 'Mensajes y acciones diferentes para tres fallos concretos.',
        quiz: [q('¿Cómo relanzas preservando el stack?', ['throw;', 'throw ex;', 'return null siempre'], 0, 'throw; conserva el origen de la excepción activa.')],
    },
    {
        id: 'stack-queue-hashset', moduleIndex: 4, title: 'Stack, Queue y HashSet', subtitle: 'Orden LIFO, FIFO y unicidad como decisiones de diseño', tags: ['Stack', 'Queue', 'HashSet'],
        core: 'Estas colecciones expresan restricciones: último en salir, primero en salir o valores únicos.', analogy: 'Una pila de platos es LIFO, una fila es FIFO y una lista de invitados evita duplicados.',
        explanation: '<code>Stack&lt;T&gt;</code> modela deshacer o navegación. <code>Queue&lt;T&gt;</code> procesa elementos por llegada. <code>HashSet&lt;T&gt;</code> expresa pertenencia sin duplicados y ofrece operaciones de conjuntos.\n\nNo dependas de detalles internos como contrato público; usa la semántica y complejidad documentadas.',
        code: `Stack<Direction> history = new();
Queue<Ghost> releaseQueue = new();
HashSet<Position> collectedDots = [];

history.Push(Direction.Left);
releaseQueue.Enqueue(new Ghost("Blinky"));
bool firstVisit = collectedDots.Add(new Position(3, 4));

Console.WriteLine(firstVisit);`, output: 'True',
        comparison: { title: 'Qué restricción comunica cada colección', headers: ['Colección', 'Regla', 'Operaciones'], rows: [['Stack<T>', 'LIFO', 'Push / Pop'], ['Queue<T>', 'FIFO', 'Enqueue / Dequeue'], ['HashSet<T>', 'Únicos', 'Add / Contains / Union']] },
        best: ['Usa TryPeek o Count antes de extraer.', 'Define igualdad correcta para HashSet.', 'Elige por regla, no solo por velocidad.'],
        mistake: 'Confiar en el orden de HashSet', mistakeDetail: 'La colección representa pertenencia, no un orden contractual.', fix: 'Ordena explícitamente o usa una colección que garantice orden.',
        practice: 'Usa Queue para liberar fantasmas, Stack para historial y HashSet para puntos consumidos.', expected: 'Tres reglas del juego expresadas por la colección adecuada.',
        quiz: [q('¿Qué colección modela una fila de liberación?', ['Queue<T>', 'Stack<T>', 'HashSet<T>'], 0, 'FIFO respeta el orden de llegada.')],
    },
    {
        id: 'linq-pacman', moduleIndex: 4, title: 'LINQ aplicado al estado del juego', subtitle: 'Filtra, transforma, ordena, agrupa y agrega sin perder intención', type: 'Laboratorio', duration: '45–60 min', tags: ['LINQ', 'Lambda', 'Pac-Man'],
        core: 'LINQ compone consultas declarativas sobre secuencias; describe qué resultado deseas.', analogy: 'Es una tubería: cada operador filtra o transforma los elementos que recibe.',
        explanation: 'Where filtra, Select proyecta, OrderBy ordena y GroupBy agrupa. Any y All responden preguntas; Sum, Count y Aggregate condensan la secuencia.\n\nLa ejecución suele ser diferida: la consulta se evalúa al enumerarla. Materializa con ToList cuando necesitas una fotografía estable o enumeración repetida.',
        simType: 'csharp-linq',
        code: `var leaderboard = scores
    .Where(score => score.Points > 0)
    .OrderByDescending(score => score.Points)
    .ThenBy(score => score.Player)
    .Take(5)
    .Select((score, index) => new
    {
        Rank = index + 1,
        score.Player,
        score.Points
    })
    .ToList();`, output: 'Top 5 ordenado y numerado.',
        best: ['Mantén lambdas pequeñas.', 'Evita enumerar varias veces una fuente costosa.', 'Usa nombres que expresen la forma resultante.'],
        mistake: 'Modificar la colección dentro de una consulta', mistakeDetail: 'Mezcla consulta con efectos y puede invalidar la enumeración.', fix: 'Calcula primero el resultado y aplica cambios en una fase separada.',
        practice: 'Genera top 5, agrupa scores por nivel y calcula promedio sin mutar la fuente.', expected: 'Tres consultas legibles con resultados materializados cuando corresponde.',
        quiz: [q('¿Qué operador transforma cada elemento?', ['Select', 'Where', 'Any'], 0, 'Select proyecta una nueva forma por elemento.')],
    },
    {
        id: 'processes-threads', moduleIndex: 5, title: 'Procesos, hilos y concurrencia', subtitle: 'Distingue aislamiento, flujo de ejecución y simultaneidad', tags: ['Threads', 'Process', 'Concurrency'],
        core: 'Un proceso posee recursos aislados; un hilo es un flujo de ejecución dentro de ese proceso.', analogy: 'El proceso es un taller con herramientas; los hilos son trabajadores que comparten ese taller.',
        explanation: 'Concurrencia significa que varias tareas progresan durante el mismo periodo; paralelismo significa que ejecutan literalmente al mismo tiempo. Un programa puede ser concurrente sin ser paralelo.\n\nCompartir memoria facilita comunicación, pero introduce condiciones de carrera. Antes de crear hilos manuales, considera Task y APIs asíncronas de alto nivel.',
        code: `Console.WriteLine($"Process: {Environment.ProcessId}");
Console.WriteLine($"Thread: {Environment.CurrentManagedThreadId}");

await Task.Run(() =>
{
    Console.WriteLine($"Worker: {Environment.CurrentManagedThreadId}");
});`, output: ['Process: 1234', 'Thread: 1', 'Worker: 4'],
        best: ['Distingue trabajo CPU-bound de I/O-bound.', 'Prefiere abstracciones de alto nivel.', 'No asumas orden entre operaciones concurrentes.'],
        mistake: 'Usar proceso, hilo y tarea como sinónimos', mistakeDetail: 'Tienen aislamiento, costos y responsabilidades distintos.', fix: 'Describe quién posee memoria, quién ejecuta y qué abstracción representa el trabajo.',
        practice: 'Clasifica render, lectura de archivo y búsqueda de ruta como UI, I/O-bound o CPU-bound.', expected: 'Tres categorías con una estrategia apropiada para cada una.',
        quiz: [q('¿Qué comparten los hilos de un proceso?', ['Memoria y recursos del proceso', 'Procesos aislados nuevos', 'Solo archivos PDF'], 0, 'Esa memoria compartida permite comunicación y también carreras.')],
    },
    {
        id: 'thread-lifecycle-ui', moduleIndex: 5, title: 'Ciclo de vida de Thread y UI responsiva', subtitle: 'Join, Sleep, background y afinidad del hilo de interfaz', tags: ['Thread', 'UI Thread', 'Scheduling'],
        core: 'El hilo de UI procesa entrada y render; bloquearlo impide que la aplicación responda.', analogy: 'Es una única ventanilla de atención: si realiza una tarea larga, nadie más puede ser atendido.',
        explanation: '<code>Join</code> bloquea hasta que otro hilo termina; <code>Sleep</code> pausa el hilo actual. Ninguno debe usarse para esperar dentro del hilo de UI. Las prioridades son valores de ThreadPriority y el planificador del sistema conserva la decisión final.\n\nUn hilo background no mantiene vivo el proceso, pero eso no sustituye cancelación ni limpieza coordinada.',
        code: `Thread worker = new(() =>
{
    Thread.CurrentThread.Name = "Pathfinder";
    Console.WriteLine("Ruta calculada");
});

worker.IsBackground = true;
worker.Start();
worker.Join(); // solo en una demostración de consola`, output: 'Ruta calculada',
        best: ['No uses Join o Sleep en UI.', 'Nombra hilos solo para diagnóstico.', 'No dependas de prioridad para corregir diseño.'],
        mistake: 'Configurar prioridad como si garantizara orden', mistakeDetail: 'El sistema operativo puede ajustar la planificación.', fix: 'Usa sincronización explícita para dependencias y deja la prioridad como sugerencia excepcional.',
        practice: 'Explica por qué Thread.Sleep(1000) dentro de un click congela la ventana y reemplázalo conceptualmente.', expected: 'Usar await Task.Delay para espera no bloqueante o mover CPU-bound fuera de UI.',
        quiz: [q('¿Qué hace Thread.Sleep?', ['Bloquea el hilo actual', 'Libera la UI siempre', 'Crea un proceso'], 0, 'El hilo no puede ejecutar trabajo durante la pausa.')],
    },
    {
        id: 'threadpool-tasks', moduleIndex: 5, title: 'ThreadPool, Task y async/await', subtitle: 'Representa trabajo y espera sin administrar hilos manualmente', tags: ['Task', 'ThreadPool', 'Async Await'],
        core: 'Task representa una operación; async/await permite esperarla sin bloquear el hilo llamador.', analogy: 'Una Task es un comprobante de trabajo futuro: puedes continuar y volver cuando el resultado esté listo.',
        explanation: 'El ThreadPool reutiliza hilos para evitar el costo de crear uno por operación. <code>Task.Run</code> es útil para trabajo CPU-bound que debe salir de UI; no convierte mágicamente I/O síncrona en I/O eficiente.\n\nPara archivos y red, usa APIs async nativas. Propaga CancellationToken para que el usuario pueda cancelar operaciones largas.',
        code: `private async Task<int> CalculatePathAsync(
    Board board,
    CancellationToken cancellationToken)
{
    return await Task.Run(() =>
    {
        cancellationToken.ThrowIfCancellationRequested();
        return Pathfinder.CountSteps(board);
    }, cancellationToken);
}`, output: 'La UI puede continuar mientras se calcula la ruta.',
        best: ['Sufija métodos asíncronos con Async.', 'Evita async void salvo handlers de eventos.', 'Propaga CancellationToken.'],
        mistake: 'Envolver cualquier I/O en Task.Run', mistakeDetail: 'Ocupa un hilo bloqueado en vez de usar la capacidad async del sistema.', fix: 'Usa ReadAsync, WriteAsync y otras APIs asíncronas nativas.',
        practice: 'Convierte una carga de scoreboard a async y agrega cancelación.', expected: 'Task<List<ScoreEntry>>, await y CancellationToken de extremo a extremo.',
        quiz: [q('¿Qué representa Task<T>?', ['Una operación que producirá T', 'Un hilo obligatorio', 'Un archivo'], 0, 'La tarea es una abstracción de operación, no sinónimo de hilo.')],
    },
    {
        id: 'synchronization', moduleIndex: 5, title: 'Locks y estado compartido', subtitle: 'Condiciones de carrera, Monitor, Interlocked y deadlocks', tags: ['lock', 'Monitor', 'Interlocked', 'Deadlock'],
        core: 'Una sección crítica protege una invariante cuando varios hilos acceden al mismo estado mutable.', analogy: 'El lock es la única llave de una sala: quien entra debe salir pronto y devolverla.',
        explanation: '<code>lock</code> usa Monitor para exclusión mutua dentro del proceso. <code>Interlocked</code> ofrece operaciones atómicas simples. Mutex puede cruzar procesos y SemaphoreSlim limita concurrencia a un número determinado.\n\nUn deadlock aparece cuando existen esperas circulares. Reduce el alcance del lock, adquiere recursos siempre en el mismo orden y nunca esperes I/O dentro de una sección crítica.',
        simType: 'csharp-thread-safety',
        code: `private readonly object _scoreLock = new();
private int _score;

public void AddPoints(int points)
{
    if (points < 0) throw new ArgumentOutOfRangeException(nameof(points));

    lock (_scoreLock)
    {
        _score += points;
    }
}`, output: 'Las actualizaciones de score no se pisan entre sí.',
        best: ['Bloquea un objeto privado y estable.', 'Mantén la sección crítica pequeña.', 'Define un orden global para múltiples locks.'],
        mistake: 'Hacer await dentro de lock', mistakeDetail: 'lock no admite await y retener exclusión durante espera sería peligroso.', fix: 'Rediseña la sección o usa SemaphoreSlim.WaitAsync para coordinación asíncrona.',
        practice: 'Reproduce una carrera al incrementar score y corrígela con lock o Interlocked.', expected: 'Resultado determinista y explicación de la invariante protegida.',
        quiz: [q('¿Qué condición favorece un deadlock?', ['Espera circular entre locks', 'Un método puro', 'Una lista inmutable'], 0, 'Cada hilo espera un recurso retenido por el otro.')],
    },
    {
        id: 'timers-ghosts', moduleIndex: 5, title: 'Timers, Stopwatch y fantasmas concurrentes', subtitle: 'Coordina tiempo y trabajo sin perder determinismo', type: 'Laboratorio', duration: '50–70 min', tags: ['Timers', 'Stopwatch', 'Ghost AI'],
        core: 'Timers programan callbacks; Stopwatch mide tiempo transcurrido con un reloj adecuado para duración.', analogy: 'El timer es la alarma; Stopwatch es el cronómetro. Uno dispara acciones y el otro mide.',
        explanation: 'DispatcherTimer conviene para actualizaciones breves de UI. System.Threading.Timer usa ThreadPool y exige sincronización al tocar estado compartido. Stopwatch sirve para medir rendimiento o cooldowns sin depender del reloj de pared.\n\nNo crees un hilo infinito por fantasma. Modela estrategias y actualiza entidades desde un ciclo coordinado; delega cálculos costosos a Tasks cuando sea necesario.',
        simType: 'csharp-thread-safety',
        code: `private readonly Stopwatch _frightenedMode = new();

public void ActivatePowerPellet()
{
    _frightenedMode.Restart();
}

public bool GhostsAreVulnerable =>
    _frightenedMode.IsRunning &&
    _frightenedMode.Elapsed < TimeSpan.FromSeconds(8);`, output: 'El modo vulnerable dura 8 segundos medidos.',
        best: ['Elige timer según el hilo que ejecutará el callback.', 'Mide duración con Stopwatch.', 'Actualiza entidades desde un estado coherente por frame.'],
        mistake: 'Crear un Thread por fantasma', mistakeDetail: 'Aumenta coordinación, carreras y costo sin aportar un modelo de juego estable.', fix: 'Usa estrategias por entidad y un ciclo central; paraleliza solo cálculo costoso medido.',
        practice: 'Implementa salida escalonada, estrategia por fantasma y modo vulnerable de 8 segundos.', expected: 'Movimiento coordinado, UI responsiva y ninguna carrera sobre tablero o score.',
        quiz: [q('¿Qué herramienta mide duración transcurrida?', ['Stopwatch', 'DirectoryInfo', 'IComparer'], 0, 'Stopwatch está diseñado para medir intervalos.')],
    },
    {
        id: 'files-paths', moduleIndex: 6, title: 'Archivos, directorios y rutas', subtitle: 'Path, Environment, Directory y DriveInfo sin asumir un sistema operativo', tags: ['File', 'Directory', 'Path'],
        core: 'Una ruta es una representación dependiente de plataforma; Path ayuda a construirla sin concatenaciones frágiles.', analogy: 'Path.Combine es un navegador que conoce las reglas de calles de cada sistema operativo.',
        explanation: 'Usa Environment.GetFolderPath para carpetas conocidas del usuario y Path.Combine para segmentos. Directory y File ofrecen operaciones estáticas; DirectoryInfo y FileInfo representan entradas concretas.\n\nValida nombres proporcionados por usuarios y evita que secuencias como .. escapen del directorio permitido. Las operaciones pueden fallar por permisos, uso concurrente o medios no disponibles.',
        code: `string appData = Environment.GetFolderPath(
    Environment.SpecialFolder.LocalApplicationData);

string folder = Path.Combine(appData, "PacmanCourse");
string scorePath = Path.Combine(folder, "scores.json");

Directory.CreateDirectory(folder);
Console.WriteLine(Path.GetFileName(scorePath));`, output: 'scores.json',
        best: ['Usa Path.Combine o Path.Join.', 'Trabaja dentro de una carpeta conocida de la aplicación.', 'Espera y maneja fallos de permisos e I/O.'],
        mistake: 'Concatenar rutas con \\ o /', mistakeDetail: 'El separador y las reglas cambian por plataforma.', fix: 'Construye rutas con Path y normaliza antes de validar límites.',
        practice: 'Calcula una ruta portable para el scoreboard y crea su directorio de forma idempotente.', expected: 'Ruta dentro de LocalApplicationData y Directory.CreateDirectory seguro.',
        quiz: [q('¿Qué API combina segmentos de ruta?', ['Path.Combine', 'Thread.Join', 'Enumerable.Select'], 0, 'Path conoce el separador adecuado de la plataforma.')],
    },
    {
        id: 'streams-readers-writers', moduleIndex: 6, title: 'Streams, readers y writers', subtitle: 'Separa transporte de bytes y representación de datos', tags: ['Stream', 'FileStream', 'Reader Writer'],
        core: 'Stream abstrae una secuencia de bytes; readers y writers traducen entre bytes y tipos o caracteres.', analogy: 'El stream es la tubería; el reader conoce cómo interpretar lo que circula por ella.',
        explanation: 'FileStream conecta con un archivo; MemoryStream usa memoria. StreamReader y StreamWriter aplican una codificación de texto. BinaryReader y BinaryWriter leen tipos primitivos en formato binario.\n\nUsa using o await using para disponer recursos aun cuando ocurra una excepción. FileMode, FileAccess y FileShare expresan creación, permisos de la operación y compartición.',
        simType: 'csharp-streams',
        code: `await using FileStream stream = new(
    path,
    FileMode.Create,
    FileAccess.Write,
    FileShare.None);

await using StreamWriter writer = new(stream, Encoding.UTF8);
await writer.WriteLineAsync("Ada,1200");
await writer.FlushAsync();`, output: 'Archivo UTF-8 con una línea de score.',
        best: ['Dispón streams con using.', 'Declara modo, acceso y compartición intencionalmente.', 'No mezcles texto y binario sin un formato definido.'],
        mistake: 'Olvidar disponer el stream', mistakeDetail: 'El handle puede permanecer abierto y bloquear el archivo.', fix: 'Usa using/await using y deja que el compilador genere la limpieza.',
        practice: 'Escribe dos scores con StreamWriter y léelos con StreamReader.', expected: 'Recursos liberados y contenido recuperado con la misma codificación.',
        quiz: [q('¿Qué hace StreamReader?', ['Convierte bytes codificados en caracteres', 'Planifica hilos', 'Ordena un diccionario'], 0, 'Es un adaptador de texto sobre un Stream.')],
    },
    {
        id: 'async-file-io', moduleIndex: 6, title: 'E/S asíncrona y persistencia robusta', subtitle: 'Mantén la UI libre mientras guardas y cargas el juego', tags: ['Async I/O', 'JSON', 'Cancellation'],
        core: 'La E/S asíncrona espera al sistema sin ocupar el hilo de UI durante toda la operación.', analogy: 'Dejas una solicitud y recibes aviso al terminar, en vez de permanecer bloqueando la ventanilla.',
        explanation: 'Usa métodos Async de File, Stream y readers/writers. Propaga CancellationToken y captura fallos en el límite de la aplicación para mostrar una respuesta útil.\n\nPara evitar archivos parciales, escribe primero a un archivo temporal y reemplaza el destino cuando la serialización termine correctamente.',
        code: `public static async Task SaveAsync(
    string path,
    GameState state,
    CancellationToken cancellationToken)
{
    string tempPath = path + ".tmp";
    await using FileStream stream = File.Create(tempPath);
    await JsonSerializer.SerializeAsync(
        stream, state, cancellationToken: cancellationToken);
    File.Move(tempPath, path, overwrite: true);
}`, output: 'Estado reemplazado solo después de serializarse.',
        best: ['Usa APIs async nativas.', 'Propaga cancelación.', 'Escribe de forma transaccional con archivo temporal.'],
        mistake: 'Bloquear con .Result o .Wait()', mistakeDetail: 'Puede congelar la UI y provocar deadlocks en algunos contextos.', fix: 'Haz async toda la cadena y espera con await.',
        practice: 'Implementa SaveAsync y LoadAsync con JSON, cancelación y mensajes para archivo corrupto.', expected: 'Carga y guardado no bloqueantes con recuperación explícita.',
        quiz: [q('¿Qué evita bloquear el hilo mientras espera I/O?', ['await sobre una API async', 'Thread.Sleep', 'lock global'], 0, 'await cede el control hasta que la operación completa.')],
    },
    {
        id: 'compression-encoding', moduleIndex: 6, title: 'Compresión y codificación', subtitle: 'Distingue tamaño, representación y formato', tags: ['Compression', 'Encoding', 'UTF-8'],
        core: 'Codificar transforma caracteres en bytes; comprimir reduce redundancia. Son operaciones diferentes.', analogy: 'La codificación elige el alfabeto del envío; la compresión dobla el mensaje para ocupar menos espacio.',
        explanation: 'UTF-8 es una opción interoperable para texto. ASCII no representa la mayoría de caracteres del español. GZip, Deflate y Brotli comprimen un stream; ZipArchive empaqueta varias entradas con nombres.\n\nQuien lee debe conocer orden, algoritmo y codificación. Comprimir texto pequeño puede incluso aumentar su tamaño por metadatos.',
        simType: 'csharp-streams',
        code: `byte[] text = Encoding.UTF8.GetBytes("Puntuación: 1200");

await using MemoryStream destination = new();
await using (GZipStream gzip = new(
    destination, CompressionLevel.Optimal, leaveOpen: true))
{
    await gzip.WriteAsync(text);
}

Console.WriteLine($"{text.Length} → {destination.Length} bytes");`, output: 'El tamaño final depende del contenido y los metadatos.',
        best: ['Declara UTF-8 explícitamente en fronteras.', 'Comprime solo después de medir.', 'Registra algoritmo y extensión coherentes.'],
        mistake: 'Confundir Base64 con compresión', mistakeDetail: 'Base64 representa bytes como texto y normalmente aumenta el tamaño.', fix: 'Usa compresión para tamaño y encoding para representación.',
        practice: 'Guarda scores con acentos en UTF-8, comprímelos con GZip y verifica una descompresión idéntica.', expected: 'Round trip que conserva exactamente “Puntuación”.',
        quiz: [q('¿Qué operación convierte texto en bytes?', ['Encoding', 'CompressionLevel', 'ThreadPriority'], 0, 'Una codificación define el mapeo entre caracteres y bytes.')],
    },
    {
        id: 'pacman-capstone', moduleIndex: 6, title: 'Capstone Pac-Man: integración y entrega', subtitle: 'Une interfaz, eventos, concurrencia y persistencia con una rúbrica verificable', type: 'Laboratorio', duration: '90–120 min', tags: ['Capstone', 'Architecture', 'Delivery'],
        core: 'Integrar no significa juntar archivos: significa que cada componente conserva un contrato y una responsabilidad comprobable.', analogy: 'La entrega final es una orquesta: cada sección funciona sola, pero el valor aparece cuando respetan el mismo tempo y partitura.',
        explanation: 'La versión final incluye inicio, controles, tablero, score, vidas, fantasmas con estrategias, power pellets, audio, Game Over, reinicio y scoreboard persistente. Las funciones extras siguen siendo opcionales.\n\nHaz una pasada por arquitectura, comportamiento, fallos, accesibilidad y evidencia. Prueba rutas sin archivos, archivos corruptos, redimensionamiento, teclado, cierre de timers y repetición de partidas.',
        simType: 'dotnet-pipeline', simTitle: 'Arquitectura final de extremo a extremo',
        code: `public sealed class GameSession
{
    private readonly IScoreRepository _scores;
    private readonly IReadOnlyList<IGhostStrategy> _strategies;

    public GameSession(
        IScoreRepository scores,
        IReadOnlyList<IGhostStrategy> strategies)
    {
        _scores = scores;
        _strategies = strategies;
    }

    public Task SaveScoreAsync(
        ScoreEntry entry,
        CancellationToken token) => _scores.SaveAsync(entry, token);
}`, output: 'Dominio coordinado mediante contratos sustituibles.',
        best: ['Verifica requisitos obligatorios antes de extras.', 'Registra decisiones y evidencia de pruebas.', 'Cierra timers, streams y suscripciones.', 'Mantén reglas del juego fuera de controles visuales.'],
        mistake: 'Añadir extras antes de estabilizar el alcance obligatorio', mistakeDetail: 'Aumenta superficie de fallos mientras faltan funciones evaluadas.', fix: 'Usa una checklist: primero obligatorio, después calidad y finalmente extras.',
        extraMistakes: [{ title: 'Entregar solo “funciona en mi equipo”', problem: 'Rutas absolutas y recursos no empaquetados fallan en otra máquina.', solution: 'Prueba una compilación limpia, recursos relativos y datos iniciales ausentes.' }],
        practice: 'Completa la rúbrica final: menú, juego, colisiones, score, vidas, fantasmas, audio, Game Over, persistencia, errores y cierre limpio.', expected: 'Aplicación compilable, navegable, responsiva y con scoreboard persistente verificable.',
        quiz: [q('¿Qué se prioriza antes de funciones extra?', ['Requisitos obligatorios estables', 'Más animaciones', 'Otro framework'], 0, 'La entrega debe cumplir primero el alcance explícito de los PDF.'), q('¿Dónde deben vivir las reglas del juego?', ['En el dominio', 'Solo en el code-behind', 'En rutas absolutas'], 0, 'Separar dominio permite pruebas y evita acoplar reglas a la UI.')],
    },
];

const programacion3Subject = {
    id: 'programacion-3',
    code: 'PROG-III',
    title: 'Programación 3',
    description: 'Curso completo de C# y .NET orientado a aplicaciones de escritorio: POO, eventos, Avalonia, LINQ, concurrencia, archivos y un proyecto Pac-Man incremental.',
    icon: 'code',
    color: '#FF5A1F',
    topics: ['C#', '.NET', 'Avalonia', 'MVVM', 'LINQ', 'Threads', 'System.IO'],
    learningPath: {
        title: 'Ruta de aprendizaje sugerida',
        summary: 'Avanza desde el runtime y el sistema de tipos hasta construir una aplicación de escritorio dirigida por eventos, concurrente y persistente.',
        estimatedDuration: '11–15 h',
        outcomes: [
            'Explicar cómo compila y ejecuta .NET una aplicación C#.',
            'Modelar el dominio con POO, genéricos y colecciones adecuadas.',
            'Construir una interfaz Avalonia con eventos, MVVM y data binding.',
            'Procesar datos con LINQ y manejar fallos con excepciones útiles.',
            'Coordinar tareas concurrentes sin bloquear la interfaz ni corromper estado.',
            'Persistir y recuperar información mediante archivos, streams y codificaciones.',
            'Integrar los conceptos en una versión verificable de Pac-Man.',
        ],
        stages: moduleStages.map(([title, desc]) => ({ title, desc })),
    },
    labs: lessonDefinitions.map(makeLesson),
};

export default programacion3Subject;
