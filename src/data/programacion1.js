const programacion1Subject = {
    id: 'programacion-1',
    code: 'PROG-I',
    title: 'Programación 1',
    description:
        'Fundamentos de programación, lógica algorítmica y sintaxis inicial usando el lenguaje Java.',
    icon: 'terminal',
    color: '#0ea5e9',
    topics: ['Java', 'Algoritmos', 'Lógica', 'POO Básica'],
    learningPath: {
        title: 'Ruta de aprendizaje sugerida',
        summary:
            'Esta materia está organizada como una secuencia progresiva: primero entiendes qué es Java y cómo se ejecuta, luego aprendes a guardar datos, tomar decisiones, recorrer colecciones y modularizar soluciones.',
        estimatedDuration: '2 h 15 min – 3 h 5 min',
        outcomes: [
            'Dominar la sintaxis básica de Java y su modelo de ejecución.',
            'Comprender memoria, variables, condicionales, ciclos, arreglos y métodos.',
            'Leer código con intención, no solo copiarlo.',
        ],
        stages: [
            {
                title: '1. Fundamentos de Java',
                desc: 'Comprender clases, `main`, bytecode y JVM para saber cómo arranca un programa.',
            },
            {
                title: '2. Datos y memoria',
                desc: 'Aprender a declarar variables, elegir tipos y distinguir entre primitivos y referencias.',
            },
            {
                title: '3. Decisiones y repetición',
                desc: 'Construir lógica con condicionales y ciclos para controlar el flujo del programa.',
            },
            {
                title: '4. Colecciones básicas',
                desc: 'Trabajar con arreglos y matrices para manejar varios valores de manera ordenada.',
            },
            {
                title: '5. Modularidad',
                desc: 'Separar soluciones en métodos reutilizables y entender paso de parámetros, scope y CLI.',
            },
        ],
    },
    labs: [],
};

programacion1Subject.labs.push({
    id: 'intro-java',
    title: 'Introducción a Java',
    subtitle: 'Primeros pasos con el lenguaje de programación orientado a objetos',
    type: 'Teoría',
    difficulty: 'Principiante',
    duration: '15–25 min',
    tags: ['Java', 'Programación orientada a objetos', 'Sintaxis básica', 'JVM', 'Programación 1'],
    learningFeatures: ['Simulación', 'Código interactivo', 'Resumen', 'Ejercicio'],
    content: {
        intro:
            'Crear software robusto requiere un lenguaje maduro y una base conceptual sólida. Java es uno de los lenguajes más utilizados a nivel mundial y su filosofía <strong>"Write Once, Run Anywhere"</strong> cambió la forma en que se construyen aplicaciones multiplataforma. En Programación 1, aprender Java no solo significa memorizar sintaxis: significa entender desde el inicio qué es una clase, cómo arranca un programa y por qué la JVM hace posible que el mismo código viva en distintos sistemas operativos.',
        objectives: [
            'Comprender qué es el lenguaje Java y por qué se usa tanto en la industria.',
            'Conocer la arquitectura básica de Java: Código fuente → Bytecode → JVM.',
            'Entender el rol vital que cumple la Java Virtual Machine (JVM).',
            'Identificar la estructura mínima de un programa "Hola Mundo".',
            'Reconocer los usos más comunes del lenguaje en aplicaciones reales.',
        ],
        sections: [
            {
                type: 'calloutGroup',
                title: 'Panorama rápido antes de empezar',
                variant: 'info',
                items: [
                    {
                        icon: 'lightbulb',
                        title: 'Idea clave',
                        text: 'Java no se ejecuta directamente como un `.exe`. Primero se compila a <strong>bytecode</strong> y luego la JVM lo interpreta o lo optimiza para el sistema operativo donde estés trabajando.',
                    },
                    {
                        icon: 'box',
                        title: 'Analogía útil',
                        text: 'Piensa en el bytecode como un idioma intermedio universal. Tu código "habla" ese idioma y la JVM actúa como intérprete local en Windows, Linux o macOS.',
                    },
                    {
                        icon: 'target',
                        title: 'Qué debes lograr',
                        text: 'Al final de esta mentoría debes ser capaz de explicar con tus palabras qué hace cada parte de un `HolaMundo.java`.',
                    },
                ],
            },
            {
                type: 'text',
                title: '1. ¿Qué es Java?',
                content:
                    'Java es un lenguaje de programación de propósito general, tipado estático y fuertemente orientado a objetos, creado por James Gosling en Sun Microsystems en 1995.\n\nA diferencia de lenguajes que generan ejecutables atados a un procesador específico, Java fue diseñado para resolver el problema de la portabilidad. Cuando compilas código fuente Java, no produces código máquina final, sino un código intermedio universal llamado <strong>bytecode</strong>. Ese bytecode es ejecutado por la <strong>Máquina Virtual de Java (JVM)</strong>, que sí conoce cómo hablar con el sistema operativo donde se está corriendo el programa.\n\nDicho de forma simple: tu código Java no necesita reescribirse para cada plataforma porque la JVM absorbe esa complejidad.',
            },
            {
                type: 'calloutGroup',
                title: 'Glosario mínimo del tema',
                variant: 'example',
                items: [
                    {
                        icon: 'book',
                        title: 'Clase',
                        text: 'Es la estructura base donde Java organiza el código. Incluso el ejemplo más pequeño necesita vivir dentro de una clase.',
                    },
                    {
                        icon: 'settings',
                        title: 'JVM',
                        text: 'Es el entorno que carga, interpreta y ejecuta el bytecode. Sin JVM no hay ejecución del programa.',
                    },
                    {
                        icon: 'code',
                        title: 'Bytecode',
                        text: 'Es el resultado de compilar el archivo `.java`. Todavía no es código máquina puro, pero ya no es texto fuente.',
                    },
                ],
            },
            {
                type: 'process',
                title: '2. Cómo funciona Java',
                desc: 'Sigue la simulación para ver cómo un archivo de código fuente se transforma en una aplicación ejecutable gracias al compilador y la JVM.',
                simType: 'java-compile',
                observe: [
                    'El archivo `.java` todavía es texto legible por humanos.',
                    'El compilador `javac` traduce ese texto a bytecode `.class`.',
                    'La JVM toma ese bytecode y lo adapta al sistema donde se ejecuta.',
                ],
            },
            {
                type: 'interactiveCode',
                title: '3. Primer programa en Java',
                desc: 'En Java, todo programa necesita al menos una clase y un método de entrada llamado `main`. Pasa el cursor, haz clic o usa el teclado sobre las líneas para entender qué hace cada una.',
                code: `public class HolaMundo {
    public static void main(String[] args) {
        System.out.println("Hola Mundo!");
    }
}`,
                output: ['Hola Mundo!'],
                explanations: [
                    {
                        line: 1,
                        title: 'Declaración de clase',
                        what: 'Define una clase pública llamada `HolaMundo`.',
                        why: 'Java organiza el código dentro de clases; por eso incluso el ejemplo más simple necesita una.',
                        teaches: 'Relación entre nombre de clase y nombre del archivo.',
                        output: 'El archivo debe llamarse `HolaMundo.java`.',
                    },
                    {
                        line: 2,
                        title: 'Punto de entrada',
                        what: 'Declara el método `main`, que es el primer bloque que ejecuta la JVM.',
                        why: '`public` permite el acceso, `static` evita instanciar la clase, `void` indica que no retorna un valor y `String[] args` recibe argumentos de consola.',
                        teaches: 'Firma del método principal.',
                    },
                    {
                        line: 3,
                        title: 'Salida por consola',
                        what: 'Llama a `System.out.println(...)` para imprimir texto en la consola.',
                        why: 'Es la forma más básica de ver resultados cuando todavía no trabajas con interfaces gráficas.',
                        teaches: 'Salida estándar y ejecución secuencial.',
                        output: 'La consola mostrará `Hola Mundo!`.',
                    },
                    {
                        line: 4,
                        title: 'Cierre del método',
                        what: 'Cierra el bloque del método `main`.',
                        why: 'Las llaves delimitan dónde comienza y termina el bloque de instrucciones.',
                        teaches: 'Estructura de bloques en Java.',
                    },
                    {
                        line: 5,
                        title: 'Cierre de la clase',
                        what: 'Cierra la definición de la clase `HolaMundo`.',
                        why: 'Java necesita saber dónde termina cada estructura.',
                        teaches: 'Anidación entre clase y método.',
                    },
                ],
            },
            {
                type: 'featureCards',
                title: '4. Características principales',
                features: [
                    {
                        icon: 'box',
                        title: 'Orientado a objetos',
                        desc: 'Todo en Java gira alrededor de clases, objetos y responsabilidades bien encapsuladas. Esa disciplina ayuda a construir programas más mantenibles.',
                    },
                    {
                        icon: 'globe',
                        title: 'Portabilidad y JVM',
                        desc: 'El bytecode generado puede ejecutarse en Windows, Linux o macOS siempre que exista una JVM compatible.',
                    },
                    {
                        icon: 'shield',
                        title: 'Seguridad y memoria',
                        desc: 'Su modelo de memoria administrada y el Garbage Collector reducen errores frecuentes en lenguajes de más bajo nivel.',
                    },
                    {
                        icon: 'package',
                        title: 'Gran ecosistema',
                        desc: 'Java tiene librerías, estándares y frameworks maduros usados desde universidades hasta sistemas bancarios.',
                    },
                ],
            },
            {
                type: 'useCases',
                title: '5. ¿Dónde se usa Java hoy en día?',
                desc: 'Aunque nació hace décadas, Java sigue ocupando lugares críticos dentro de la tecnología moderna:',
                cases: [
                    {
                        icon: 'server',
                        title: 'Backend web',
                        desc: 'Spring Boot y otros frameworks permiten construir APIs y microservicios robustos para plataformas grandes.',
                    },
                    {
                        icon: 'smartphone',
                        title: 'Aplicaciones Android',
                        desc: 'Gran parte del ecosistema Android se construyó históricamente sobre Java y todavía convive con él.',
                    },
                    {
                        icon: 'database',
                        title: 'Big Data',
                        desc: 'Herramientas como Hadoop y múltiples soluciones empresariales dependen del ecosistema JVM.',
                    },
                    {
                        icon: 'briefcase',
                        title: 'Software financiero',
                        desc: 'Bancos, aseguradoras y fintechs confían en Java por su robustez, tooling y mantenibilidad.',
                    },
                ],
            },
            {
                type: 'calloutGroup',
                title: 'Errores comunes al empezar con Java',
                variant: 'error',
                items: [
                    {
                        icon: 'xCircle',
                        title: 'El archivo no coincide con la clase',
                        text: 'Si la clase pública se llama `HolaMundo`, el archivo también debe llamarse `HolaMundo.java`.',
                    },
                    {
                        icon: 'helpCircle',
                        title: 'Confundir JVM con compilador',
                        text: '`javac` compila; la JVM ejecuta. Son piezas distintas del proceso.',
                    },
                    {
                        icon: 'helpCircle',
                        title: 'Memorizar sin entender',
                        text: 'No basta con repetir la firma de `main`; debes saber qué papel juega cada palabra reservada.',
                    },
                ],
            },
            {
                type: 'checklist',
                title: 'Resumen final',
                items: [
                    'Java es un lenguaje orientado a objetos y de tipado estático.',
                    'El compilador transforma `.java` en bytecode `.class`.',
                    'La JVM ejecuta ese bytecode en distintos sistemas operativos.',
                    'Todo programa básico necesita una clase y un método `main`.',
                ],
            },
            {
                type: 'exercise',
                title: 'Ejercicio opcional',
                prompt:
                    'Crea un programa llamado `Presentacion.java` que imprima tu nombre, tu carrera y una meta personal en tres líneas distintas de consola.',
                starterCode: `public class Presentacion {
    public static void main(String[] args) {
        // Escribe aquí tus tres mensajes.
    }
}`,
                hints: [
                    'Usa tres instrucciones `System.out.println(...)`.',
                    'Asegúrate de que el nombre de la clase y el nombre del archivo coincidan.',
                    'Compílalo con `javac Presentacion.java` y ejecútalo con `java Presentacion`.',
                ],
                expectedOutput:
                    'Tres líneas de texto visibles en consola con información personal y una meta.',
                reflection:
                    'Si tu programa no corre, revisa primero nombre de archivo, llaves y firma del método `main`.',
            },
        ],
        conclusion:
            'En esta materia no solo aprenderás a escribir sentencias sueltas, sino a pensar estructuralmente. Dominar Java desde estas bases te dará una forma ordenada de razonar programas, sistemas y problemas. Esa disciplina te facilitará aprender otros lenguajes en el futuro porque ya habrás construido el andamiaje mental correcto.',
    },
});

programacion1Subject.labs.push({
    id: 'java-variables',
    title: 'Variables en Java y tipos de datos',
    subtitle: 'Aprende a almacenar y manejar información en memoria',
    type: 'Teoría',
    difficulty: 'Principiante',
    duration: '20–30 min',
    tags: ['Java', 'Variables', 'Tipos de datos', 'Programación básica', 'Programación 1'],
    learningFeatures: ['Simulación', 'Código interactivo', 'Tabla comparativa', 'Ejercicio'],
    content: {
        intro:
            'Uno de los fundamentos principales de la programación es la capacidad de <strong>recordar información</strong>. Para lograrlo, los programas usan memoria y nosotros, como desarrolladores, interactuamos con ella mediante <strong>variables</strong>. En Java, una variable puede guardar números, texto, estados lógicos y también referencias a objetos. Entender cómo se declara, qué tipo usa y qué pasa en memoria cuando la modificas es una base crítica para no programar "a ciegas".',
        objectives: [
            'Comprender qué es una variable como espacio lógico en memoria.',
            'Aprender cómo declarar e inicializar variables en Java.',
            'Conocer los tipos de datos primitivos más importantes.',
            'Comprender la diferencia entre tipos primitivos y tipos de referencia.',
            'Aplicar variables en un programa sencillo realizando operaciones matemáticas.',
        ],
        sections: [
            {
                type: 'calloutGroup',
                title: 'Antes de leer código, quédate con esto',
                variant: 'info',
                items: [
                    {
                        icon: 'box',
                        title: 'Analogía base',
                        text: 'Una variable se parece a una caja etiquetada: el tipo define qué puede guardar y el nombre permite encontrarla después.',
                    },
                    {
                        icon: 'zap',
                        title: 'Regla de oro',
                        text: 'En Java declaras primero el tipo y luego el nombre. No puedes saltarte esa decisión.',
                    },
                    {
                        icon: 'target',
                        title: 'Meta de la mentoría',
                        text: 'Debes poder leer una línea como `double precio = 19.99;` y explicar tipo, nombre y valor sin dudar.',
                    },
                ],
            },
            {
                type: 'process',
                title: '1. ¿Qué es una variable?',
                desc: 'Una variable es, conceptualmente, un espacio reservado en memoria donde el programa puede almacenar un valor temporal para usarlo más adelante.',
                simType: 'java-memory',
                observe: [
                    'Primero se declara la variable con tipo y nombre.',
                    'Luego se asigna un valor compatible con ese tipo.',
                    'Después el programa puede recuperar ese valor usando el nombre de la variable.',
                ],
            },
            {
                type: 'interactiveCode',
                title: '2. Sintaxis de una variable en Java',
                desc: 'Como Java usa tipado estático, siempre debes especificar el tipo antes del nombre. Recorre cada línea para entender su anatomía.',
                code: `int edad = 20;
String nombre = "Carlos";
double precio = 19.99;`,
                explanations: [
                    {
                        line: 1,
                        title: 'Variable entera',
                        what: 'Declara una variable `int` llamada `edad` y le asigna el valor `20`.',
                        why: 'Se usa `int` cuando necesitas números enteros sin decimales.',
                        teaches: 'Declaración + inicialización en una sola línea.',
                    },
                    {
                        line: 2,
                        title: 'Referencia a texto',
                        what: 'Declara una variable `String` llamada `nombre` con el texto `"Carlos"`.',
                        why: '`String` no es un primitivo; representa una referencia a un objeto de texto.',
                        teaches: 'Diferencia entre texto y números.',
                    },
                    {
                        line: 3,
                        title: 'Número decimal',
                        what: 'Declara un `double` para guardar un número con decimales.',
                        why: 'Cuando necesitas precisión decimal básica, `double` es más apropiado que `int`.',
                        teaches: 'Selección del tipo según la naturaleza del dato.',
                    },
                ],
            },
            {
                type: 'featureCards',
                title: '3. Tipos de datos primitivos',
                features: [
                    {
                        icon: 'box',
                        title: 'int',
                        desc: 'Guarda enteros de 32 bits. Úsalo para edades, cantidades o contadores: `int edad = 21;`.',
                    },
                    {
                        icon: 'cpu',
                        title: 'double / float',
                        desc: 'Guardan decimales. `double` suele ser la opción por defecto porque ofrece mayor precisión.',
                    },
                    {
                        icon: 'type',
                        title: 'char',
                        desc: 'Guarda un único carácter Unicode entre comillas simples, por ejemplo: `char inicial = \'A\';`.',
                    },
                    {
                        icon: 'toggle-right',
                        title: 'boolean',
                        desc: 'Representa valores lógicos: `true` o `false`. Es la base de las decisiones en el código.',
                    },
                ],
            },
            {
                type: 'process',
                title: '4. Tipos de referencia vs objetos',
                desc: 'A diferencia de los primitivos, los tipos de referencia no guardan directamente el dato completo: guardan la referencia al lugar de memoria donde vive ese objeto.',
                simType: 'java-references',
                observe: [
                    'Los primitivos guardan el valor directo.',
                    'Las referencias apuntan a un objeto en memoria.',
                    'Por eso `String` y `Scanner` no se comportan igual que `int` o `double`.',
                ],
            },
            {
                type: 'comparisonTable',
                title: '5. Comparación: primitivos vs referencia',
                desc: 'Esta comparación te ayuda a evitar una de las confusiones más frecuentes al iniciar.',
                headers: ['Característica', 'Primitivos', 'Referencia'],
                rows: [
                    ['Qué almacenan', 'El valor directo', 'La dirección o referencia del objeto'],
                    ['Ejemplos', 'int, double, char, boolean', 'String, Scanner, arrays, objetos'],
                    ['Uso general', 'Datos simples y rápidos de procesar', 'Entidades complejas o estructuras más ricas'],
                    ['Valor por defecto', '0, 0.0, false', 'null'],
                    ['Memoria asociada', 'Stack', 'Heap (referenciada desde Stack)'],
                ],
            },
            {
                type: 'interactiveCode',
                title: '6. Ejemplo práctico: calculadora básica',
                desc: 'Este programa lee dos números por consola y los guarda en variables para realizar operaciones aritméticas. Recorre las líneas importantes con calma.',
                code: `import java.util.Scanner;

public class Calculadora {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double num1 = scanner.nextDouble();
        double num2 = scanner.nextDouble();

        double suma = num1 + num2;
        double resta = num1 - num2;
        double multiplicacion = num1 * num2;
        double division = num1 / num2;

        System.out.println("Suma: " + suma);
        System.out.println("Resta: " + resta);
        System.out.println("Multiplicación: " + multiplicacion);
        System.out.println("División: " + division);
    }
}`,
                output: [
                    'Entrada ejemplo: 10 2',
                    'Salida esperada:',
                    'Suma: 12.0',
                    'Resta: 8.0',
                    'Multiplicación: 20.0',
                    'División: 5.0',
                ],
                explanations: [
                    {
                        line: 1,
                        title: 'Import de Scanner',
                        what: 'Importa la clase `Scanner` desde `java.util`.',
                        why: 'Sin este import no puedes leer datos desde el teclado usando esa clase.',
                        teaches: 'Uso de librerías estándar.',
                    },
                    {
                        line: 5,
                        title: 'Creación del lector',
                        what: 'Crea un objeto `Scanner` conectado a `System.in`.',
                        why: 'Ese objeto será el encargado de leer lo que el usuario escriba en consola.',
                        teaches: 'Instanciación de objetos y entrada estándar.',
                    },
                    {
                        line: 7,
                        title: 'Primer dato de entrada',
                        what: 'Lee el siguiente número decimal escrito por el usuario y lo guarda en `num1`.',
                        why: 'Primero necesitas almacenar el dato para luego operar con él.',
                        teaches: 'Lectura por consola y asignación a variables.',
                    },
                    {
                        line: 8,
                        title: 'Segundo dato de entrada',
                        what: 'Lee otro valor decimal y lo guarda en `num2`.',
                        why: 'Con ambos operandos ya puedes construir operaciones matemáticas.',
                        teaches: 'Secuencia de captura de datos.',
                    },
                    {
                        line: 10,
                        title: 'Cálculo de suma',
                        what: 'Calcula `num1 + num2` y guarda el resultado en una nueva variable.',
                        why: 'Guardar resultados intermedios hace el código más claro y más fácil de depurar.',
                        teaches: 'Expresiones aritméticas y variables derivadas.',
                    },
                    {
                        line: 11,
                        title: 'Cálculo de resta',
                        what: 'Calcula `num1 - num2` y guarda la diferencia en la variable `resta`.',
                        why: 'Separar cada operación en su propia variable facilita la lectura y la depuración.',
                        teaches: 'Resultados derivados y organización del cálculo.',
                    },
                    {
                        line: 12,
                        title: 'Cálculo de multiplicación',
                        what: 'Multiplica ambos valores y guarda el producto en `multiplicacion`.',
                        why: 'Así puedes reutilizar ese resultado sin repetir la operación en cada impresión.',
                        teaches: 'Uso de operadores aritméticos.',
                    },
                    {
                        line: 13,
                        title: 'Cálculo de división',
                        what: 'Divide `num1` entre `num2` y almacena el cociente en `division`.',
                        why: 'Esta línea también recuerda que, en programas reales, conviene validar divisiones entre cero.',
                        teaches: 'Operaciones aritméticas con validaciones posibles.',
                    },
                    {
                        line: 15,
                        title: 'Mostrar suma',
                        what: 'Imprime un mensaje más el valor contenido en la variable `suma`.',
                        why: 'La concatenación permite combinar texto con valores calculados.',
                        teaches: 'Salida por consola con variables.',
                        output: 'La consola mostrará `Suma: 12.0` si los valores fueron 10 y 2.',
                    },
                    {
                        line: 16,
                        title: 'Mostrar resta',
                        what: 'Imprime el valor de `resta` junto con una etiqueta clara para el usuario.',
                        why: 'Etiquetar la salida evita confundir varios resultados numéricos en consola.',
                        teaches: 'Presentación clara de resultados.',
                    },
                    {
                        line: 17,
                        title: 'Mostrar multiplicación',
                        what: 'Muestra en consola el contenido de `multiplicacion`.',
                        why: 'Mantener el mismo patrón de impresión vuelve el ejemplo más consistente y fácil de seguir.',
                        teaches: 'Reutilización de una estructura de salida.',
                    },
                    {
                        line: 18,
                        title: 'Mostrar división',
                        what: 'Imprime el resultado almacenado en `division`.',
                        why: 'Esta última línea completa el reporte de operaciones hechas con los dos datos de entrada.',
                        teaches: 'Cierre del bloque de resultados.',
                    },
                ],
            },
            {
                type: 'calloutGroup',
                title: 'Errores comunes con variables',
                variant: 'warning',
                items: [
                    {
                        icon: 'helpCircle',
                        title: 'Elegir mal el tipo',
                        text: 'Si necesitas decimales, `int` no es suficiente. Si solo usarás enteros, `double` puede ser innecesario.',
                    },
                    {
                        icon: 'xCircle',
                        title: 'Usar una variable no inicializada',
                        text: 'Una variable local en Java debe recibir un valor antes de poder usarse.',
                    },
                    {
                        icon: 'helpCircle',
                        title: 'Olvidar un caso especial',
                        text: 'En una calculadora real deberías validar divisiones entre cero antes de ejecutar `num1 / num2`.',
                    },
                ],
            },
            {
                type: 'checklist',
                title: 'Resumen final',
                items: [
                    'Una variable combina tipo, nombre y valor.',
                    'Los primitivos guardan el dato directamente; las referencias apuntan a objetos.',
                    '`Scanner` permite leer datos por consola.',
                    'Guardar operaciones en variables intermedias mejora claridad y depuración.',
                ],
            },
            {
                type: 'exercise',
                title: 'Ejercicio opcional',
                prompt:
                    'Escribe un programa que pida el nombre de una persona y dos números. Luego imprime el nombre y el promedio de esos números.',
                hints: [
                    'Usa `Scanner` y combina lectura de texto con lectura numérica.',
                    'El promedio se calcula con `(a + b) / 2`.',
                    'Piensa qué tipo de dato te conviene para el promedio.',
                ],
                expectedOutput:
                    'Debe mostrarse un mensaje con el nombre de la persona y el promedio calculado.',
                reflection:
                    'Si el resultado no coincide, revisa el tipo de dato usado y el orden en que capturas la entrada.',
            },
        ],
        conclusion:
            'Dominar variables y memoria básica te evita una enorme cantidad de errores silenciosos. A partir de aquí ya no solo guardas datos: empiezas a decidir qué representa cada valor, dónde vive y cómo fluye dentro de tu programa. Esa precisión mental es una de las mejores ventajas de aprender Java al inicio.',
    },
});

programacion1Subject.labs.push({
    id: 'java-control-flow',
    title: 'Estructuras de control en Java',
    subtitle: 'Toma de decisiones y ciclos de repetición',
    type: 'Teoría',
    difficulty: 'Principiante',
    duration: '25–35 min',
    tags: ['Java', 'Estructuras de control', 'Condicionales', 'Ciclos', 'Programación básica', 'Programación 1'],
    learningFeatures: ['Simulación', 'Código interactivo', 'Comparación', 'Ejercicio'],
    content: {
        intro:
            'Sin estructuras de control, un programa ejecutaría todas sus instrucciones de forma lineal, una detrás de otra, sin capacidad de <strong>decidir</strong> ni de <strong>repetir</strong>. Las estructuras de control rompen esa linealidad y convierten tu código en algo verdaderamente útil. Gracias a ellas puedes responder a condiciones, iterar sobre datos y construir algoritmos que se adapten a lo que ocurre en tiempo de ejecución.',
        objectives: [
            'Comprender qué son y para qué sirven las estructuras de control.',
            'Aprender a usar condicionales (`if`, `else if`, `else`, `switch`).',
            'Aprender a usar ciclos (`for`, `while`, `do-while`).',
            'Comprender cuándo conviene cada estructura.',
            'Aplicar control de flujo para resolver problemas sencillos en Java.',
        ],
        sections: [
            {
                type: 'calloutGroup',
                title: 'La idea central del tema',
                variant: 'info',
                items: [
                    {
                        icon: 'gitMerge',
                        title: 'Condicional',
                        text: 'Sirve para abrir caminos distintos: si algo ocurre, haces A; si no ocurre, haces B.',
                    },
                    {
                        icon: 'refresh-cw',
                        title: 'Ciclo',
                        text: 'Sirve para repetir una tarea sin copiar la misma línea muchas veces.',
                    },
                    {
                        icon: 'target',
                        title: 'Pregunta guía',
                        text: 'Cada vez que diseñes una solución, pregúntate: ¿necesito decidir algo o necesito repetir algo?',
                    },
                ],
            },
            {
                type: 'process',
                title: '1. ¿Qué son las estructuras de control?',
                desc: 'Son instrucciones que alteran el flujo lineal de un programa. Se apoyan casi siempre en expresiones booleanas: condiciones que solo pueden ser verdaderas o falsas.',
                simType: 'java-cond-flow',
                observe: [
                    'El programa evalúa una condición.',
                    'Según el resultado, entra a un bloque u otro.',
                    'La decisión modifica el camino de ejecución.',
                ],
            },
            {
                type: 'interactiveCode',
                title: '2. Condicionales: if, else if, else',
                desc: 'Esta estructura evalúa condiciones en orden. En cuanto una sea verdadera, ejecuta ese bloque y detiene la cadena.',
                code: `int nota = 85;

if (nota >= 90) {
    System.out.println("Excelente");
} else if (nota >= 70) {
    System.out.println("Aprobado");
} else {
    System.out.println("Reprobado");
}`,
                output: ['Aprobado'],
                explanations: [
                    {
                        line: 1,
                        title: 'Dato inicial',
                        what: 'Declara la variable `nota` con el valor 85, que luego se usará para tomar la decisión.',
                        why: 'Antes de evaluar condiciones, el programa necesita un dato concreto sobre el cual comparar.',
                        teaches: 'Preparación del valor antes del condicional.',
                    },
                    {
                        line: 3,
                        title: 'Primera condición',
                        what: 'Pregunta si `nota` es mayor o igual a 90.',
                        why: 'Se evalúa primero porque representa el criterio más exigente.',
                        teaches: 'Orden de evaluación en cadenas condicionales.',
                    },
                    {
                        line: 5,
                        title: 'Segunda condición',
                        what: 'Si la anterior fue falsa, se evalúa si `nota` es mayor o igual a 70.',
                        why: 'Permite manejar un segundo escenario sin crear otro `if` aislado.',
                        teaches: 'Uso de `else if` como continuación lógica.',
                    },
                    {
                        line: 6,
                        title: 'Bloque ejecutado',
                        what: 'Imprime `Aprobado` porque 85 cumple la condición anterior.',
                        why: 'En este ejemplo, la cadena se detiene aquí y ya no baja al `else`.',
                        teaches: 'Ejecución exclusiva del primer bloque verdadero.',
                        output: 'La consola mostrará `Aprobado`.',
                    },
                    {
                        line: 7,
                        title: 'Caso por defecto',
                        what: 'Abre el bloque que se ejecuta si ninguna condición previa fue verdadera.',
                        why: 'Siempre conviene tener claro qué hará el programa en el caso restante.',
                        teaches: 'Caso residual o fallback.',
                    },
                ],
            },
            {
                type: 'interactiveCode',
                title: '3. El bloque condicional: switch',
                desc: 'Usa `switch` cuando comparas una misma variable contra varios valores exactos posibles y no quieres una cadena larga de `if`.',
                code: `int dia = 3;

switch (dia) {
    case 1:
        System.out.println("Lunes");
        break;
    case 2:
        System.out.println("Martes");
        break;
    case 3:
        System.out.println("Miércoles");
        break;
    default:
        System.out.println("Otro día");
}`,
                output: ['Miércoles'],
                explanations: [
                    {
                        line: 3,
                        title: 'Apertura del switch',
                        what: 'Empieza a evaluar el valor de `dia`.',
                        why: 'Toda la estructura se organiza alrededor de una sola variable.',
                        teaches: 'Comparación múltiple sobre un mismo dato.',
                    },
                    {
                        line: 4,
                        title: 'Primer caso',
                        what: 'Representa la respuesta si `dia` vale exactamente 1.',
                        why: '`case` compara por igualdad exacta, no por rangos.',
                        teaches: 'Semántica de `case`.',
                    },
                    {
                        line: 6,
                        title: 'break',
                        what: 'Rompe la ejecución del `switch` y evita que siga leyendo los casos siguientes.',
                        why: 'Sin `break`, puedes caer en varios casos consecutivos por accidente.',
                        teaches: 'Prevención del fall-through.',
                    },
                    {
                        line: 10,
                        title: 'Coincidencia con `case 3`',
                        what: 'Como `dia` vale 3, el flujo entra en esta rama específica del `switch`.',
                        why: 'Los casos anteriores no coinciden y por eso la ejecución sigue avanzando hasta llegar aquí.',
                        teaches: 'Selección de la etiqueta correcta.',
                    },
                    {
                        line: 11,
                        title: 'Salida del caso ganador',
                        what: 'Imprime `Miércoles`, que es la respuesta asociada al valor 3.',
                        why: 'Encontrar el caso correcto no basta: aún hay que ejecutar las instrucciones que contiene.',
                        teaches: 'Ejecución del bloque que coincide.',
                        output: 'La consola mostrará `Miércoles`.',
                    },
                    {
                        line: 13,
                        title: 'default',
                        what: 'Captura cualquier valor que no tenga un caso definido.',
                        why: 'Es el equivalente conceptual a un `else` final.',
                        teaches: 'Manejo del caso por defecto.',
                    },
                ],
            },
            {
                type: 'process',
                title: '4. El mundo de la iteración: ciclos',
                desc: 'Cuando una tarea debe repetirse varias veces, un ciclo te ahorra copiar y pegar código. Es una forma elegante de expresar repetición con control.',
                simType: 'java-loop',
                observe: [
                    'Todo ciclo necesita una condición de continuidad.',
                    'Mientras la condición sea verdadera, el bloque se repite.',
                    'Debes modificar algo dentro del ciclo para que no se vuelva infinito sin querer.',
                ],
            },
            {
                type: 'comparisonTable',
                title: '5. Comparación: for vs while vs do-while',
                desc: 'Los tres repiten tareas, pero no responden al mismo tipo de problema.',
                headers: ['Estructura', 'Uso ideal', 'Cómo pensarla', 'Cuándo evalúa la condición'],
                rows: [
                    ['for', 'Cuando sabes cuántas veces iterarás.', 'Inicio + condición + incremento en un solo lugar.', 'Antes de cada iteración'],
                    ['while', 'Cuando dependes de un estado que puede cambiar.', 'Sigue mientras la condición continúe verdadera.', 'Antes de cada iteración'],
                    ['do-while', 'Cuando el bloque debe ejecutarse al menos una vez.', 'Primero corre, luego pregunta.', 'Después de cada iteración'],
                ],
            },
            {
                type: 'process',
                title: '6. Recorriendo arreglos con for-each',
                desc: 'Cuando solo necesitas leer los elementos de una colección o un arreglo, `for-each` reduce ruido y hace el código más natural.',
                simType: 'java-foreach',
                observe: [
                    'No controlas manualmente el índice.',
                    'Lees cada elemento en orden.',
                    'Es ideal para recorrido simple, no para reemplazos por índice.',
                ],
            },
            {
                type: 'interactiveCode',
                title: '7. Ejemplo integrador: pares e impares',
                desc: 'Aquí se combinan repetición y decisión. El ciclo cuenta del 1 al 10 y el `if` decide si el número actual es par o impar.',
                code: `for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        System.out.println(i + " es número PAR");
    } else {
        System.out.println(i + " es número IMPAR");
    }
}`,
                output: ['1 es número IMPAR', '2 es número PAR', '3 es número IMPAR', '... hasta 10'],
                explanations: [
                    {
                        line: 1,
                        title: 'Cabecera del for',
                        what: 'Inicializa `i` en 1, repite mientras `i <= 10` y aumenta `i` en 1 tras cada vuelta.',
                        why: 'Resume en una sola línea el ciclo completo.',
                        teaches: 'Anatomía del `for`.',
                    },
                    {
                        line: 2,
                        title: 'Condición de paridad',
                        what: 'Evalúa si el residuo de dividir `i` entre 2 es cero.',
                        why: 'Si el residuo es cero, el número es par; si no, es impar.',
                        teaches: 'Uso del operador módulo `%`.',
                    },
                    {
                        line: 3,
                        title: 'Caso par',
                        what: 'Imprime que el número actual es par.',
                        why: 'Solo se ejecuta cuando la condición del `if` es verdadera.',
                        teaches: 'Bloque verdadero del condicional.',
                    },
                    {
                        line: 4,
                        title: 'else',
                        what: 'Abre el caso alternativo cuando el número no es par.',
                        why: 'Garantiza que siempre exista una respuesta para cada valor del ciclo.',
                        teaches: 'Rama alternativa.',
                    },
                    {
                        line: 5,
                        title: 'Caso impar',
                        what: 'Imprime que el número actual es impar.',
                        why: 'Se ejecuta cuando el residuo no es cero.',
                        teaches: 'Rama falsa del condicional.',
                    },
                ],
            },
            {
                type: 'calloutGroup',
                title: 'Errores comunes con control de flujo',
                variant: 'error',
                items: [
                    {
                        icon: 'xCircle',
                        title: 'Olvidar `break` en `switch`',
                        text: 'Provoca que el programa siga ejecutando casos que no querías correr.',
                    },
                    {
                        icon: 'helpCircle',
                        title: 'Crear ciclos infinitos',
                        text: 'Si la condición nunca cambia, el ciclo seguirá ejecutándose indefinidamente.',
                    },
                    {
                        icon: 'helpCircle',
                        title: 'Elegir la estructura incorrecta',
                        text: 'Si ya conoces el número de repeticiones, `for` suele ser más claro que `while`.',
                    },
                ],
            },
            {
                type: 'checklist',
                title: 'Resumen final',
                items: [
                    'Los condicionales toman decisiones según condiciones booleanas.',
                    '`switch` compara un mismo valor contra varios casos exactos.',
                    'Los ciclos repiten instrucciones y necesitan una condición de control.',
                    '`for-each` simplifica el recorrido cuando no necesitas índices.',
                ],
            },
            {
                type: 'exercise',
                title: 'Ejercicio opcional',
                prompt:
                    'Escribe un programa que recorra los números del 1 al 20 y muestre si cada número es múltiplo de 3, múltiplo de 5 o ninguno de los dos.',
                hints: [
                    'Usa un ciclo `for`.',
                    'Apóyate en el operador `%` para comprobar divisibilidad.',
                    'Decide si te conviene un `if` anidado o una cadena `if / else if / else`.',
                ],
                expectedOutput:
                    'Para cada número debe imprimirse una categoría coherente según su divisibilidad.',
                reflection:
                    'Si aparecen categorías equivocadas, revisa el orden de tus condiciones.',
            },
        ],
        conclusion:
            'Con las estructuras de control, tu programa deja de ser un guion rígido y empieza a reaccionar. Esa capacidad de decidir y repetir es el corazón de casi cualquier algoritmo real. Dominarla ahora te prepara para resolver problemas más grandes sin caer en código desordenado o repetitivo.',
    },
});

programacion1Subject.labs.push({
    id: 'java-arrays',
    title: 'Estructuras de Datos Básicas: Arreglos en Java',
    subtitle: 'Almacena y gestiona múltiples datos en memoria',
    type: 'Laboratorio',
    difficulty: 'Principiante',
    duration: '35–45 min',
    tags: ['Java', 'Arrays', 'Estructuras de datos', 'Debugging', 'Deskcheck', 'Programación 1'],
    learningFeatures: ['Simulación', 'Código interactivo', 'Debug visual', 'Ejercicio'],
    content: {
        intro:
            'Si tuvieras que guardar la nota de 100 estudiantes, declarar `nota1`, `nota2`, `nota3`... sería un desastre. Las <strong>estructuras de datos</strong> existen para evitar ese caos. Un arreglo te permite almacenar muchos valores del mismo tipo bajo un solo nombre lógico, manteniendo orden, acceso por índice y una base perfecta para aprender algoritmia. Esta mentoría no solo te enseña la sintaxis: también te enseña a pensar cómo vive un arreglo en memoria y cómo depurarlo cuando algo sale mal.',
        objectives: [
            'Comprender qué es un arreglo y por qué simplifica el manejo de múltiples datos.',
            'Declarar, inicializar y leer arreglos unidimensionales en Java.',
            'Recorrer arreglos usando índices y ciclos.',
            'Entender la idea de matrices o arreglos bidimensionales.',
            'Aplicar deskcheck y debugging visual para seguir el comportamiento del algoritmo.',
        ],
        sections: [
            {
                type: 'calloutGroup',
                title: 'Qué debes tener claro desde el inicio',
                variant: 'info',
                items: [
                    {
                        icon: 'layers',
                        title: 'Un nombre, muchos datos',
                        text: 'Un arreglo agrupa varios valores del mismo tipo usando un solo identificador.',
                    },
                    {
                        icon: 'activity',
                        title: 'Analogía del tren',
                        text: 'Imagina una fila de vagones consecutivos. Cada vagón guarda un dato y cada uno tiene un número de posición llamado índice.',
                    },
                    {
                        icon: 'target',
                        title: 'Regla crítica',
                        text: 'Los índices empiezan en 0. Ese detalle parece pequeño, pero genera muchísimos errores cuando se ignora.',
                    },
                ],
            },
            {
                type: 'featureCards',
                title: '1. ¿Por qué usamos estructuras de datos?',
                features: [
                    {
                        icon: 'layers',
                        title: 'Colecciones',
                        desc: 'Agrupan muchos valores bajo un único nombre lógico y reducen el desorden en el programa.',
                    },
                    {
                        icon: 'search',
                        title: 'Organización',
                        desc: 'Permiten recorrer, buscar y procesar conjuntos completos de información con reglas consistentes.',
                    },
                    {
                        icon: 'activity',
                        title: 'Iterabilidad',
                        desc: 'A diferencia de muchas variables sueltas, un arreglo se recorre naturalmente con ciclos.',
                    },
                ],
            },
            {
                type: 'process',
                title: '2. Arreglos unidimensionales (vectores)',
                desc: 'Un arreglo es una secuencia contigua de espacios de memoria. Cada posición guarda un valor del mismo tipo y se accede mediante un índice.',
                simType: 'java-array-memory',
                observe: [
                    'Todos los espacios pertenecen al mismo arreglo.',
                    'Cada espacio tiene un índice fijo.',
                    'Acceder a un índice incorrecto provoca errores.',
                ],
            },
            {
                type: 'interactiveCode',
                title: '3. Declarando y operando arreglos',
                desc: 'Observa cómo se declara un arreglo vacío, cómo se inicializa con valores y cómo se accede a una posición específica.',
                code: `int[] numeros = new int[5]; // Declaración vacía

int[] edades = {10, 20, 30, 40, 50}; // Inicializando valores directamente

int valor = edades[2]; // Extrae el número 30
edades[0] = 15; // Reemplaza el 10 con un 15`,
                explanations: [
                    {
                        line: 1,
                        title: 'Reserva de memoria',
                        what: 'Crea un arreglo de 5 enteros y lo inicializa con valores por defecto.',
                        why: 'Cuando reservas espacio con `new int[5]`, Java llena las posiciones con `0` porque aún no has puesto valores propios.',
                        teaches: 'Declaración + creación de arreglo vacío.',
                    },
                    {
                        line: 3,
                        title: 'Inicialización directa',
                        what: 'Crea un arreglo y asigna sus valores desde el inicio usando llaves.',
                        why: 'Es útil cuando ya conoces todos los datos de antemano.',
                        teaches: 'Inicialización literal.',
                    },
                    {
                        line: 5,
                        title: 'Lectura por índice',
                        what: 'Lee el valor ubicado en la posición 2 del arreglo `edades`.',
                        why: 'Como los índices empiezan en 0, `edades[2]` corresponde al tercer elemento.',
                        teaches: 'Acceso indexado.',
                    },
                    {
                        line: 6,
                        title: 'Sobrescritura de una posición',
                        what: 'Reemplaza el valor de la primera posición del arreglo.',
                        why: 'Los arreglos son mutables: puedes cambiar el contenido de una casilla si usas un índice válido.',
                        teaches: 'Actualización de elementos.',
                    },
                ],
            },
            {
                type: 'process',
                title: '4. El recorrido: bucle for e índices',
                desc: 'Para procesar todos los elementos, lo normal es usar un `for` que arranque en 0 y termine antes del tamaño total del arreglo.',
                simType: 'java-array-iterate',
                observe: [
                    'El contador del ciclo representa el índice actual.',
                    'Usar `< arreglo.length` evita salirte de rango.',
                    'Cada iteración lee o procesa una posición distinta.',
                ],
            },
            {
                type: 'process',
                title: '5. La cuadrícula: arreglos bidimensionales',
                desc: 'Cuando una fila ya no es suficiente, puedes pensar en una matriz como una tabla de filas y columnas: es un arreglo que contiene otros arreglos.',
                simType: 'java-matrix',
                observe: [
                    'Primero eliges la fila y luego la columna.',
                    'Cada fila puede recorrerse con otro ciclo.',
                    'Aquí aparecen naturalmente los ciclos anidados.',
                ],
            },
            {
                type: 'interactiveCode',
                title: '6. Recorriendo la matriz con for anidado',
                desc: 'Este ejemplo muestra cómo recorrer una matriz 3x3. Recorre primero las filas y luego las columnas de cada fila.',
                code: `int[][] matriz = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

for (int i = 0; i < matriz.length; i++) {
    for (int j = 0; j < matriz[i].length; j++) {
        System.out.println(matriz[i][j]);
    }
}`,
                explanations: [
                    {
                        line: 1,
                        title: 'Declaración de matriz',
                        what: 'Crea un arreglo bidimensional que contiene tres filas.',
                        why: 'Cada fila es, a su vez, un arreglo de enteros.',
                        teaches: 'Concepto de matriz como arreglo de arreglos.',
                    },
                    {
                        line: 7,
                        title: 'Ciclo de filas',
                        what: 'Recorre las filas de la matriz usando el índice `i`.',
                        why: '`matriz.length` indica cuántas filas existen.',
                        teaches: 'Primer nivel de recorrido.',
                    },
                    {
                        line: 8,
                        title: 'Ciclo de columnas',
                        what: 'Recorre las columnas de la fila actual usando `j`.',
                        why: 'Cada fila puede tener su propia longitud, por eso se usa `matriz[i].length`.',
                        teaches: 'Segundo nivel de recorrido y ciclos anidados.',
                    },
                    {
                        line: 9,
                        title: 'Lectura del elemento actual',
                        what: 'Imprime el valor de la intersección fila-columna.',
                        why: 'Solo cuando combinas ambos índices sabes qué celda exacta estás leyendo.',
                        teaches: 'Acceso bidimensional.',
                    },
                ],
            },
            {
                type: 'process',
                title: '7. Laboratorio visual: deskcheck y debugging paso a paso',
                desc: 'Cuando un algoritmo recorre muchos datos, es muy fácil perder de vista qué valores cambian en cada iteración. El deskcheck y el debugging visual sirven para frenar el programa y seguirlo con calma.',
                simType: 'java-deskcheck',
                observe: [
                    'Anota el valor de cada variable en cada vuelta del ciclo.',
                    'Verifica qué índice se está usando en cada paso.',
                    'Comprueba si el resultado coincide con lo que esperabas antes de ejecutar.',
                ],
            },
            {
                type: 'calloutGroup',
                title: 'Errores comunes al trabajar con arreglos',
                variant: 'error',
                items: [
                    {
                        icon: 'helpCircle',
                        title: 'Salirte del rango',
                        text: 'Si intentas acceder a un índice que no existe, Java lanzará una excepción. Por eso casi siempre se usa `< arreglo.length`.',
                    },
                    {
                        icon: 'helpCircle',
                        title: 'Confundir posición con valor',
                        text: '`edades[2]` no significa "el valor 2", significa "la posición número 2".',
                    },
                    {
                        icon: 'xCircle',
                        title: 'Mezclar filas y columnas',
                        text: 'En matrices, `i` suele referirse a filas y `j` a columnas. Si las mezclas, el razonamiento se rompe.',
                    },
                ],
            },
            {
                type: 'checklist',
                title: 'Resumen final',
                items: [
                    'Un arreglo agrupa varios valores del mismo tipo bajo un solo nombre.',
                    'Los índices empiezan en 0.',
                    'Los ciclos permiten recorrer arreglos y matrices de forma ordenada.',
                    'Deskcheck y debugging ayudan a entender qué hace realmente el algoritmo.',
                ],
            },
            {
                type: 'exercise',
                title: 'Ejercicio opcional',
                prompt:
                    'Crea un programa que almacene cinco notas en un arreglo, calcule el promedio y luego muestre cuáles notas están por encima del promedio.',
                hints: [
                    'Usa un primer recorrido para sumar todas las notas.',
                    'Calcula el promedio después del primer recorrido.',
                    'Usa un segundo recorrido para comparar cada nota contra el promedio.',
                ],
                expectedOutput:
                    'Debe imprimirse el promedio y, después, las notas que lo superan.',
                reflection:
                    'Si tu resultado no coincide, revisa en un deskcheck qué valores toma el acumulador en cada vuelta.',
            },
        ],
        conclusion:
            'Entender cómo se agrupan y recorren los datos en memoria es el primer paso serio hacia la algoritmia. Los arreglos te obligan a pensar en índices, estructura y control de recorridos, que son justamente las habilidades que luego necesitarás para listas, matrices, colecciones y problemas más complejos.',
    },
});

programacion1Subject.labs.push({
    id: 'java-methods',
    title: 'Métodos en Java: Modularidad y Paso de Parámetros',
    subtitle: 'Divide, organiza y reutiliza la lógica de tus aplicaciones',
    type: 'Teoría',
    difficulty: 'Principiante',
    duration: '40–50 min',
    tags: ['Java', 'Métodos', 'Modularidad', 'Parámetros', 'Argumentos', 'Línea de comandos', 'Programación 1'],
    learningFeatures: ['Simulación', 'Código interactivo', 'CLI', 'Ejercicio'],
    content: {
        intro:
            'Un programa real no puede vivir eternamente dentro de `main`. Cuando todo el código se amontona en un solo bloque, leer, mantener y probar se vuelve muy difícil. Los <strong>métodos</strong> resuelven ese problema: permiten dividir un algoritmo en piezas pequeñas, con nombre, propósito y límites claros. Aprender métodos es aprender a pensar en software modular, y eso marca la diferencia entre escribir código que apenas funciona y escribir código que se puede entender y mejorar.',
        objectives: [
            'Comprender qué es un método y cómo fomenta la programación modular.',
            'Entender las partes esenciales de una firma o declaración de método.',
            'Manejar correctamente el ámbito o scope de las variables.',
            'Asimilar el funcionamiento del paso por valor en Java.',
            'Aprender a usar argumentos de línea de comandos con `String[] args`.',
        ],
        sections: [
            {
                type: 'calloutGroup',
                title: 'Cómo pensar los métodos',
                variant: 'info',
                items: [
                    {
                        icon: 'scissors',
                        title: 'Dividir el problema',
                        text: 'Un método te permite tomar una tarea grande y partirla en subtareas más pequeñas y controlables.',
                    },
                    {
                        icon: 'refresh-cw',
                        title: 'Reutilizar',
                        text: 'Si una lógica se repetirá varias veces, lo correcto es encapsularla en un método y llamarla cuando haga falta.',
                    },
                    {
                        icon: 'eye',
                        title: 'Leer mejor',
                        text: 'Es más claro leer `calcularPromedio()` que adivinar qué hacen 20 líneas mezcladas dentro de `main`.',
                    },
                ],
            },
            {
                type: 'featureCards',
                title: '1. Modularidad: la regla dorada',
                features: [
                    {
                        icon: 'scissors',
                        title: 'División',
                        desc: 'Permite partir problemas intimidantes en tareas pequeñas, específicas y más fáciles de probar.',
                    },
                    {
                        icon: 'refresh-cw',
                        title: 'Reutilización',
                        desc: 'Escribes una lógica una vez y la reaprovechas todas las veces que necesites.',
                    },
                    {
                        icon: 'eye',
                        title: 'Legibilidad',
                        desc: 'Los nombres de métodos expresan intención y reducen la carga mental al leer el programa.',
                    },
                ],
            },
            {
                type: 'process',
                title: '2. Anatomía de la firma (signature)',
                desc: 'La firma de un método define quién puede llamarlo, qué devuelve, cómo se llama y qué datos necesita recibir.',
                simType: 'java-method-signature',
                observe: [
                    'Toda firma tiene partes con roles distintos.',
                    'Los parámetros son la entrada del método.',
                    'El tipo de retorno define qué promete devolver.',
                ],
            },
            {
                type: 'process',
                title: '3. El salto del hilo de ejecución',
                desc: 'Cuando `main` llama a un método, la ejecución "salta" temporalmente a ese bloque y luego regresa al punto donde quedó.',
                simType: 'java-method-flow',
                observe: [
                    'La ejecución sale de `main` solo de manera temporal.',
                    'El método corre su lógica y luego devuelve el control.',
                    'Ese ida y vuelta es la base del flujo entre métodos.',
                ],
            },
            {
                type: 'process',
                title: '4. Áreas restringidas: el scope',
                desc: 'Una variable local solo existe dentro del bloque donde fue declarada. Fuera de ese bloque, Java la considera inexistente.',
                simType: 'java-scope',
                observe: [
                    'Las llaves delimitan la vida útil de una variable.',
                    'No todo dato declarado en un método puede verse desde otro.',
                    'El scope evita accesos accidentales y ambigüedad.',
                ],
            },
            {
                type: 'process',
                title: '5. Paso de parámetros: clonaje por valor',
                desc: 'En Java, cuando envías un dato a un método, se trabaja con una copia del valor o de la referencia, no con una teletransportación del bloque original.',
                simType: 'java-param-pass',
                observe: [
                    'El método recibe datos de entrada por sus parámetros.',
                    'Cambiar una copia primitiva dentro del método no altera la variable original.',
                    'El paso por valor explica por qué algunos cambios se reflejan y otros no.',
                ],
            },
            {
                type: 'interactiveCode',
                title: '6. Inyectando datos desde consola CLI',
                desc: 'La firma `public static void main(String[] args)` también sirve para recibir argumentos escritos al ejecutar el programa desde la terminal.',
                code: `public class Argumentos {
    public static void main(String[] args) {
        System.out.println("Primer valor crudo: " + args[0]);
        System.out.println("Segundo valor crudo: " + args[1]);

        // Los argumentos llegan como texto.
        int edad = Integer.parseInt(args[1]);
        System.out.println("Edad convertida: " + edad);
    }
}`,
                output: [
                    'Comando ejemplo: java Argumentos Rodrigo 18',
                    'Salida esperada:',
                    'Primer valor crudo: Rodrigo',
                    'Segundo valor crudo: 18',
                    'Edad convertida: 18',
                ],
                explanations: [
                    {
                        line: 2,
                        title: 'Entrada por argumentos',
                        what: 'El parámetro `String[] args` recibe las palabras extra escritas al ejecutar el programa.',
                        why: 'Permite pasar datos sin pedirlos por teclado una vez que el programa ya arrancó.',
                        teaches: 'Argumentos de línea de comandos.',
                    },
                    {
                        line: 3,
                        title: 'Primer argumento',
                        what: 'Imprime el valor guardado en `args[0]`.',
                        why: 'Los argumentos se almacenan como un arreglo, así que el primero vive en la posición 0.',
                        teaches: 'Acceso por índice en `args`.',
                    },
                    {
                        line: 4,
                        title: 'Segundo argumento',
                        what: 'Imprime el valor de `args[1]`.',
                        why: 'Aunque parezca un número, todavía sigue siendo texto hasta que lo conviertas.',
                        teaches: 'Todos los argumentos llegan como `String`.',
                    },
                    {
                        line: 7,
                        title: 'Parseo a entero',
                        what: 'Convierte el texto guardado en `args[1]` a un `int` usando `Integer.parseInt(...)`.',
                        why: 'Sin esa conversión no puedes tratarlo como un número entero real.',
                        teaches: 'Transformación de tipos desde texto.',
                    },
                    {
                        line: 8,
                        title: 'Uso del valor convertido',
                        what: 'Imprime el entero ya convertido y listo para operaciones matemáticas.',
                        why: 'Es la confirmación de que el parseo funcionó correctamente.',
                        teaches: 'Validación de datos convertidos.',
                    },
                ],
            },
            {
                type: 'process',
                title: '7. Simulador: laboratorio CLI y operadores',
                desc: 'Sigue la simulación para ver cómo dos argumentos escritos en terminal viajan hasta un método y terminan siendo procesados como valores numéricos.',
                simType: 'java-command-line',
                observe: [
                    'Los argumentos entran como texto crudo.',
                    'Después deben convertirse si quieres operar con ellos.',
                    'La lógica puede delegarse a métodos separados para mantener `main` limpio.',
                ],
            },
            {
                type: 'calloutGroup',
                title: 'Errores comunes con métodos',
                variant: 'warning',
                items: [
                    {
                        icon: 'xCircle',
                        title: 'Usar variables fuera de su scope',
                        text: 'Si una variable nació dentro de un método, no puedes usarla libremente desde otro método.',
                    },
                    {
                        icon: 'helpCircle',
                        title: 'Confundir parámetro con argumento',
                        text: 'El parámetro es la variable declarada en la firma; el argumento es el dato real que envías al llamar el método.',
                    },
                    {
                        icon: 'helpCircle',
                        title: 'Olvidar validar args',
                        text: 'Si accedes a `args[1]` sin verificar cuántos argumentos llegaron, puedes provocar errores en tiempo de ejecución.',
                    },
                ],
            },
            {
                type: 'checklist',
                title: 'Resumen final',
                items: [
                    'Los métodos dividen el programa en bloques reutilizables y legibles.',
                    'La firma describe acceso, retorno, nombre y parámetros.',
                    'El scope delimita dónde existe cada variable.',
                    '`String[] args` permite recibir datos desde la línea de comandos.',
                ],
            },
            {
                type: 'exercise',
                title: 'Ejercicio opcional',
                prompt:
                    'Crea un programa con un método `sumar(int a, int b)` y otro método `mostrarResultado(int total)`. Desde `main`, llama ambos métodos usando dos números pasados por línea de comandos.',
                hints: [
                    'Recuerda convertir `args[0]` y `args[1]` con `Integer.parseInt(...)`.',
                    'El método `sumar` debe devolver un entero.',
                    'El método `mostrarResultado` puede ser `void` porque solo imprimirá.',
                ],
                expectedOutput:
                    'El programa debe recibir dos números por terminal y mostrar su suma usando métodos separados.',
                reflection:
                    'Si algo falla, revisa la firma de cada método, el tipo de retorno y el acceso a `args`.',
            },
        ],
        conclusion:
            'La modularidad es uno de los pilares de la ingeniería de software. Los métodos no son un lujo: son la herramienta que permite que un programa crezca sin volverse inmanejable. Cuando entiendes firma, scope, paso de parámetros y CLI, ya no solo escribes código que corre; empiezas a escribir código que se puede explicar, reutilizar y mantener.',
    },
});

export default programacion1Subject;
