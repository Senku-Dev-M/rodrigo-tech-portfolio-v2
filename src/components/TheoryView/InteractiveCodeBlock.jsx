import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Clipboard, Code2, ListTree, SquareTerminal } from 'lucide-react';
import Icon from '../Icon/Icon';

function normalizeExplanation(explanation) {
    return {
        title: explanation.title || `Línea ${explanation.line}`,
        what: explanation.what || explanation.text || '',
        why: explanation.why || '',
        teaches: explanation.teaches || '',
        output: explanation.output || '',
    };
}

function renderOutput(output, className = '') {
    if (!output) return null;

    const lines = Array.isArray(output) ? output : [output];

    return (
        <div className={`theory-code-output ${className}`.trim()}>
            <div className="theory-code-output__label">Salida esperada</div>
            <pre className="theory-code-output__body">
                <code>{lines.join('\n')}</code>
            </pre>
        </div>
    );
}

const CSHARP_KEYWORDS = new Set([
    'abstract', 'as', 'async', 'await', 'base', 'bool', 'break', 'byte', 'case', 'catch',
    'char', 'class', 'const', 'continue', 'decimal', 'default', 'delegate', 'do', 'double',
    'else', 'enum', 'event', 'explicit', 'extern', 'false', 'finally', 'fixed', 'float',
    'for', 'foreach', 'goto', 'if', 'implicit', 'in', 'int', 'interface', 'internal', 'is',
    'lock', 'long', 'namespace', 'new', 'null', 'object', 'operator', 'out', 'override',
    'params', 'private', 'protected', 'public', 'readonly', 'record', 'ref', 'return',
    'sbyte', 'sealed', 'short', 'sizeof', 'stackalloc', 'static', 'string', 'struct',
    'switch', 'this', 'throw', 'true', 'try', 'typeof', 'uint', 'ulong', 'unchecked',
    'unsafe', 'ushort', 'using', 'var', 'virtual', 'void', 'volatile', 'while', 'where',
    'yield', 'get', 'set', 'init', 'required', 'file', 'global', 'value', 'when',
]);

function highlightCodeFragment(fragment, keyPrefix) {
    return fragment.split(/(\b\d+(?:\.\d+)?\b|\b[A-Za-z_][A-Za-z0-9_]*\b)/g).map((token, index) => {
        if (!token) return null;
        let className = '';
        if (CSHARP_KEYWORDS.has(token)) className = 'code-token code-token--keyword';
        else if (/^\d/.test(token)) className = 'code-token code-token--number';
        else if (/^[A-Z][A-Za-z0-9_]*$/.test(token)) className = 'code-token code-token--type';

        return className
            ? <span key={`${keyPrefix}-${index}`} className={className}>{token}</span>
            : token;
    });
}

function highlightCSharpLine(line, lineNumber) {
    const chunks = line.split(/(\/\/.*$|@?"(?:""|\\.|[^"\\])*"|'(?:\\.|[^'\\])')/g);
    return chunks.map((chunk, index) => {
        if (!chunk) return null;
        if (chunk.startsWith('//')) {
            return <span key={`${lineNumber}-${index}`} className="code-token code-token--comment">{chunk}</span>;
        }
        if (chunk.startsWith('"') || chunk.startsWith('@"') || chunk.startsWith("'")) {
            return <span key={`${lineNumber}-${index}`} className="code-token code-token--string">{chunk}</span>;
        }
        return highlightCodeFragment(chunk, `${lineNumber}-${index}`);
    });
}

function findNearestContentLine(lineNumber, lines) {
    if (!Number.isInteger(lineNumber) || lineNumber < 1 || lineNumber > lines.length) {
        return null;
    }

    if (lines[lineNumber - 1]?.trim()) {
        return lineNumber;
    }

    for (let offset = 1; offset < lines.length; offset += 1) {
        const forward = lineNumber + offset;
        if (forward <= lines.length && lines[forward - 1]?.trim()) {
            return forward;
        }

        const backward = lineNumber - offset;
        if (backward >= 1 && lines[backward - 1]?.trim()) {
            return backward;
        }
    }

    return null;
}

function inferExplanation(lineNumber, lineText, language) {
    const compactLine = lineText.trim().replace(/\s+/g, ' ');
    const isCSharp = language === 'csharp';

    if (!compactLine) {
        return null;
    }

    if (compactLine.startsWith('//')) {
        return {
            line: lineNumber,
            title: 'Comentario de apoyo',
            what: 'Esta línea documenta o aclara una parte del ejemplo para facilitar su lectura.',
            why: 'Los comentarios no ejecutan lógica, pero ayudan a entender la intención del código.',
            teaches: 'Documentación mínima dentro del código.',
        };
    }

    if (compactLine.startsWith('import ')) {
        return {
            line: lineNumber,
            title: 'Importación',
            what: 'Incorpora una clase o paquete externo para poder usarlo dentro del archivo actual.',
            why: 'Java necesita saber de dónde viene una clase cuando no pertenece al mismo archivo o paquete inmediato.',
            teaches: 'Organización del código y uso de librerías.',
        };
    }

    if (compactLine.startsWith('using ')) {
        return {
            line: lineNumber,
            title: 'Espacio de nombres',
            what: 'Habilita el uso directo de tipos definidos en otro espacio de nombres.',
            why: 'Evita repetir el nombre completamente calificado de cada tipo de .NET.',
            teaches: 'Organización y reutilización de APIs en C#.',
        };
    }

    if (/class\s+\w+/.test(compactLine)) {
        return {
            line: lineNumber,
            title: 'Declaración estructural',
            what: 'Esta línea define la estructura principal donde vivirá el resto del código.',
            why: `${isCSharp ? 'C#' : 'Java'} usa tipos para agrupar estado y comportamiento relacionados.`,
            teaches: `Estructura base de un archivo ${isCSharp ? 'C#' : 'Java'}.`,
        };
    }

    if (/main\s*\(.*args/.test(compactLine)) {
        return {
            line: lineNumber,
            title: 'Punto de entrada',
            what: 'Aquí comienza la ejecución principal del programa.',
            why: isCSharp ? '.NET usa este método como punto de entrada explícito.' : 'La JVM busca este método para arrancar la aplicación.',
            teaches: 'Arranque del programa y firma del método principal.',
        };
    }

    if (/Console\.Write(Line)?/.test(compactLine)) {
        return {
            line: lineNumber,
            title: 'Salida por consola',
            what: 'Muestra texto o valores en la salida estándar del programa.',
            why: 'Permite comprobar rápidamente el resultado y seguir el flujo de ejecución.',
            teaches: 'Salida estándar con la API Console de .NET.',
        };
    }

    if (/Console\.Read(Line|Key)/.test(compactLine)) {
        return {
            line: lineNumber,
            title: 'Entrada por consola',
            what: 'Lee información escrita por la persona usuaria o espera una tecla.',
            why: 'Conecta el programa con una interacción básica de entrada.',
            teaches: 'Entrada estándar con la API Console de .NET.',
        };
    }

    if (/System\.out\.println/.test(compactLine)) {
        return {
            line: lineNumber,
            title: 'Salida por consola',
            what: 'Imprime un mensaje o valor para que puedas observar el resultado en pantalla.',
            why: 'Mostrar resultados hace visible lo que el programa está calculando o recorriendo.',
            teaches: 'Salida estándar y verificación rápida del flujo.',
        };
    }

    if (/Scanner\s+\w+\s*=\s*new\s+Scanner/.test(compactLine)) {
        return {
            line: lineNumber,
            title: 'Lectura de entrada',
            what: 'Crea el lector que permitirá capturar datos desde la consola.',
            why: 'Antes de leer datos, necesitas un objeto que conecte tu programa con la entrada estándar.',
            teaches: 'Instanciación de objetos de apoyo.',
        };
    }

    if (/^(if|else if)\s*\(/.test(compactLine)) {
        return {
            line: lineNumber,
            title: 'Condición',
            what: 'Evalúa una expresión booleana para decidir si este bloque se ejecuta.',
            why: 'Las decisiones cambian el camino que seguirá el programa.',
            teaches: 'Control de flujo con condicionales.',
        };
    }

    if (/^}?\s*else\b/.test(compactLine)) {
        return {
            line: lineNumber,
            title: 'Rama alternativa',
            what: 'Abre el camino que se ejecuta cuando la condición anterior no se cumple.',
            why: 'Así el programa responde también al caso contrario.',
            teaches: 'Cobertura de escenarios alternativos.',
        };
    }

    if (/^switch\s*\(/.test(compactLine)) {
        return {
            line: lineNumber,
            title: 'Selector múltiple',
            what: 'Compara un mismo valor contra varios casos posibles.',
            why: 'Es más claro que encadenar muchos `if` cuando comparas igualdad exacta.',
            teaches: 'Control de flujo con `switch`.',
        };
    }

    if (/^case\b/.test(compactLine) || /^default:/.test(compactLine)) {
        return {
            line: lineNumber,
            title: 'Etiqueta de caso',
            what: 'Marca una ruta específica dentro del `switch`.',
            why: 'Cada caso representa una respuesta posible para el valor evaluado.',
            teaches: 'Selección por coincidencia exacta.',
        };
    }

    if (/^break;?$/.test(compactLine)) {
        return {
            line: lineNumber,
            title: 'Salida del bloque',
            what: 'Detiene la ejecución del bloque actual y evita seguir con casos o iteraciones no deseadas.',
            why: 'Sirve para cortar el flujo justo donde corresponde.',
            teaches: 'Control explícito de finalización.',
        };
    }

    if (/^(for|while)\s*\(/.test(compactLine) || /^do\b/.test(compactLine)) {
        return {
            line: lineNumber,
            title: 'Bucle',
            what: 'Inicia o continúa una estructura que repetirá instrucciones.',
            why: 'Permite procesar varios valores sin copiar el mismo código una y otra vez.',
            teaches: 'Iteración y repetición controlada.',
        };
    }

    if (/^return\b/.test(compactLine)) {
        return {
            line: lineNumber,
            title: 'Retorno',
            what: 'Devuelve un valor al lugar desde donde se llamó al método.',
            why: 'Es la forma de entregar un resultado sin dejarlo solo en una variable local.',
            teaches: 'Comunicación entre métodos.',
        };
    }

    if (/^[{}]+;?$/.test(compactLine)) {
        return {
            line: lineNumber,
            title: compactLine.includes('{') ? 'Apertura de bloque' : 'Cierre de bloque',
            what: 'Esta llave delimita el comienzo o el final de una sección de código.',
            why: 'Las llaves indican con claridad qué instrucciones pertenecen a cada estructura.',
            teaches: 'Jerarquía y alcance de bloques.',
        };
    }

    if (compactLine.includes('=')) {
        return {
            line: lineNumber,
            title: 'Asignación o cálculo',
            what: `Ejecuta la instrucción \`${compactLine}\`.`,
            why: 'Esta línea actualiza datos o prepara valores que el resto del ejemplo necesita.',
            teaches: 'Lectura secuencial y cambio de estado.',
        };
    }

    return {
        line: lineNumber,
        title: `Línea ${lineNumber}`,
        what: `Ejecuta la instrucción \`${compactLine}\`.`,
        why: 'Forma parte del flujo principal del ejemplo, aunque no tenga una nota manual adicional.',
        teaches: 'Lectura contextual del código.',
    };
}

export default function InteractiveCodeBlock({ code, explanations = [], output, language = 'csharp' }) {
    const [activeLine, setActiveLine] = useState(null);
    const [activeTab, setActiveTab] = useState('code');
    const [copyState, setCopyState] = useState('idle');
    const lines = useMemo(() => code.split('\n'), [code]);
    const explanationIndex = useMemo(() => {
        const index = new Map();

        explanations.forEach((item) => {
            const normalizedLine = findNearestContentLine(item.line, lines);
            if (!normalizedLine) {
                return;
            }

            index.set(normalizedLine, { ...item, line: normalizedLine });
        });

        return index;
    }, [explanations, lines]);
    const interactiveLines = useMemo(
        () => new Set(lines.map((line, index) => (line.trim() ? index + 1 : null)).filter(Boolean)),
        [lines]
    );
    const activeExplanation = useMemo(
        () => (activeLine ? explanationIndex.get(activeLine) || inferExplanation(activeLine, lines[activeLine - 1], language) : null),
        [activeLine, explanationIndex, language, lines]
    );
    const normalizedActiveExplanation = useMemo(
        () => (activeExplanation ? normalizeExplanation(activeExplanation) : null),
        [activeExplanation]
    );

    const selectLine = (lineNumber, isInteractive) => {
        if (!isInteractive) return;
        setActiveLine((current) => (current === lineNumber ? null : lineNumber));
    };

    const copyCode = async () => {
        const copyWithSelection = () => {
            const textArea = document.createElement('textarea');
            textArea.value = code;
            textArea.setAttribute('readonly', '');
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.select();
            const copied = document.execCommand('copy');
            textArea.remove();
            if (!copied) throw new Error('Copy command was rejected');
        };

        try {
            if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(code);
            } else {
                copyWithSelection();
            }
            setCopyState('copied');
            window.setTimeout(() => setCopyState('idle'), 1800);
        } catch {
            try {
                copyWithSelection();
                setCopyState('copied');
                window.setTimeout(() => setCopyState('idle'), 1800);
            } catch {
                setCopyState('error');
                window.setTimeout(() => setCopyState('idle'), 2200);
            }
        }
    };

    const tabs = [
        { id: 'code', label: 'Código' },
        { id: 'explanation', label: 'Explicación' },
        { id: 'output', label: 'Resultado', disabled: !output },
    ];

    const explanationPanel = (
        <div className="theory-code-panel">
            <div className="theory-code-panel__eyebrow">Lectura guiada</div>
            <AnimatePresence mode="wait">
                {normalizedActiveExplanation ? (
                    <motion.div
                        key={activeLine}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="theory-code-explanation"
                    >
                        <div className="theory-code-explanation__meta">
                            <span className="theory-code-explanation__line">Línea {activeLine}</span>
                            <span className="theory-code-explanation__badge">
                                <Icon name="lightbulb" size={14} />
                                Concepto
                            </span>
                        </div>
                        <h3 className="theory-code-explanation__title">
                            {normalizedActiveExplanation.title}
                        </h3>

                        <div className="theory-code-explanation__group">
                            <div className="theory-code-explanation__label">Qué hace</div>
                            <p>{normalizedActiveExplanation.what}</p>
                        </div>

                        {normalizedActiveExplanation.why && (
                            <div className="theory-code-explanation__group">
                                <div className="theory-code-explanation__label">Por qué se usa</div>
                                <p>{normalizedActiveExplanation.why}</p>
                            </div>
                        )}

                        {normalizedActiveExplanation.teaches && (
                            <div className="theory-code-explanation__group">
                                <div className="theory-code-explanation__label">Qué concepto enseña</div>
                                <p>{normalizedActiveExplanation.teaches}</p>
                            </div>
                        )}

                        {normalizedActiveExplanation.output && (
                            <div className="theory-code-explanation__group">
                                <div className="theory-code-explanation__label">Efecto o salida</div>
                                <p>{normalizedActiveExplanation.output}</p>
                            </div>
                        )}
                    </motion.div>
                ) : (
                    <motion.div
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="theory-code-empty"
                    >
                        <div className="theory-code-empty__icon">
                            <Icon name="helpCircle" size={22} />
                        </div>
                        <p>Pasa el cursor, haz clic o navega con el teclado sobre una línea resaltada para ver su explicación.</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );

    return (
        <div className="theory-code-block">
            <div className="theory-code-toolbar">
                <div className="theory-code-tabs" role="tablist" aria-label="Vista del ejemplo de código">
                    {tabs.map(({ id, label, disabled }) => (
                        <button
                            key={id}
                            type="button"
                            role="tab"
                            aria-selected={activeTab === id}
                            aria-controls={`code-panel-${id}`}
                            disabled={disabled}
                            className={activeTab === id ? 'is-active' : ''}
                            onClick={() => setActiveTab(id)}
                        >
                            {id === 'code' && <Code2 size={15} />}
                            {id === 'explanation' && <ListTree size={15} />}
                            {id === 'output' && <SquareTerminal size={15} />}
                            {label}
                        </button>
                    ))}
                </div>
                <div className="theory-code-toolbar__meta">
                    <span className="theory-code-language">{language === 'csharp' ? 'C#' : language}</span>
                    <button type="button" className="theory-copy-button" onClick={copyCode}>
                        {copyState === 'copied' ? <Check size={15} /> : <Clipboard size={15} />}
                        {copyState === 'copied' ? 'Copiado' : 'Copiar'}
                    </button>
                    <span className="sr-only" aria-live="polite">
                        {copyState === 'copied' ? 'Código copiado al portapapeles.' : copyState === 'error' ? 'No se pudo copiar el código.' : ''}
                    </span>
                </div>
            </div>

            {activeTab === 'code' && <div id="code-panel-code" role="tabpanel" className="theory-code-block__workspace">
                <div className="theory-code-editor">
                    <div className="theory-code-editor__topbar" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                    </div>

                    <div className="theory-code-editor__body">
                        {lines.map((line, index) => {
                            const lineNumber = index + 1;
                            const isInteractive = interactiveLines.has(lineNumber);
                            const isActive = activeLine === lineNumber;

                            return (
                                <div
                                    key={lineNumber}
                                    role={isInteractive ? 'button' : undefined}
                                    tabIndex={isInteractive ? 0 : -1}
                                    className={[
                                        'theory-code-line',
                                        isInteractive ? 'theory-code-line--interactive' : '',
                                        isActive ? 'theory-code-line--active' : '',
                                    ].filter(Boolean).join(' ')}
                                    onMouseEnter={() => isInteractive && setActiveLine(lineNumber)}
                                    onClick={() => selectLine(lineNumber, isInteractive)}
                                    onFocus={() => isInteractive && setActiveLine(lineNumber)}
                                    onKeyDown={(event) => {
                                        if (!isInteractive) return;
                                        if (event.key === 'Enter' || event.key === ' ') {
                                            event.preventDefault();
                                            selectLine(lineNumber, true);
                                        }
                                    }}
                                >
                                    <span className="theory-code-line__number">{lineNumber}</span>
                                    <span className="theory-code-line__content">
                                        {language === 'csharp' ? highlightCSharpLine(line, lineNumber) : line || ' '}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {explanationPanel}
            </div>}

            {activeTab === 'explanation' && (
                <div id="code-panel-explanation" role="tabpanel" className="theory-code-single-panel">
                    {explanationPanel}
                </div>
            )}

            {activeTab === 'output' && (
                <div id="code-panel-output" role="tabpanel" className="theory-code-result-panel">
                    {renderOutput(output, 'theory-code-output--standalone')}
                </div>
            )}
        </div>
    );
}
