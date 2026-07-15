import {
    Archive,
    Bell,
    Binary,
    Box,
    Braces,
    Code2,
    Cpu,
    Database,
    FileText,
    Filter,
    Grid3X3,
    Layers3,
    LockKeyhole,
    Monitor,
    Radio,
    Repeat2,
    Rows3,
    UserRound,
    Zap,
} from 'lucide-react';
import './DotNetConceptSims.css';

function Flow({ title, subtitle, stages, isPlaying, className = '' }) {
    return (
        <div className={`dotnet-sim ${isPlaying ? 'is-playing' : ''} ${className}`.trim()}>
            <header className="dotnet-sim__header">
                <span className="dotnet-sim__status"><span /> TRACE ACTIVE</span>
                <div>
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                </div>
            </header>
            <div className="dotnet-sim__flow" style={{ '--stage-count': stages.length }}>
                {stages.map((stage, index) => {
                    const StageIcon = stage.icon;
                    return (
                        <div key={stage.label} className="dotnet-sim__stage" style={{ '--stage-index': index }}>
                            <span className="dotnet-sim__index">{String(index + 1).padStart(2, '0')}</span>
                            <div className="dotnet-sim__icon"><StageIcon size={22} /></div>
                            <strong>{stage.label}</strong>
                            <small>{stage.detail}</small>
                            {index < stages.length - 1 && <span className="dotnet-sim__connector"><i /></span>}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export function DotNetPipelineSim({ isPlaying = true }) {
    return (
        <Flow
            isPlaying={isPlaying}
            title="De C# a una aplicación en ejecución"
            subtitle="La plataforma transforma, verifica y optimiza tu programa por etapas."
            stages={[
                { icon: Code2, label: 'Código C#', detail: 'Program.cs' },
                { icon: Braces, label: 'Compilador', detail: 'C# → CIL' },
                { icon: Layers3, label: 'Assembly', detail: '.dll + metadatos' },
                { icon: Cpu, label: 'CLR + JIT', detail: 'CIL → máquina' },
                { icon: Monitor, label: 'Sistema', detail: 'proceso activo' },
            ]}
        />
    );
}

export function CSharpMemorySim({ isPlaying = true }) {
    return (
        <div className={`dotnet-sim memory-sim ${isPlaying ? 'is-playing' : ''}`}>
            <header className="dotnet-sim__header">
                <span className="dotnet-sim__status"><span /> COPY TRACE</span>
                <div><h3>Valor frente a referencia</h3><p>La asignación no significa lo mismo para todos los tipos.</p></div>
            </header>
            <div className="memory-sim__grid">
                <article>
                    <span>VALUE TYPE</span>
                    <div className="memory-sim__assignment"><b>a</b><i>42</i><Repeat2 size={18} /><b>b</b><i>42</i></div>
                    <p>Cada variable recibe su propia copia del valor.</p>
                </article>
                <article>
                    <span>REFERENCE TYPE</span>
                    <div className="memory-sim__assignment"><b>p1</b><i>ref 7A</i><Repeat2 size={18} /><b>p2</b><i>ref 7A</i></div>
                    <div className="memory-sim__object"><Box size={18} /> Objeto Person</div>
                    <p>Dos variables pueden apuntar a la misma instancia.</p>
                </article>
            </div>
        </div>
    );
}

export function EventFlowSim({ isPlaying = true }) {
    return (
        <Flow
            isPlaying={isPlaying}
            className="event-flow-sim"
            title="Una notificación, varios interesados"
            subtitle="El publicador no necesita conocer los detalles de cada suscriptor."
            stages={[
                { icon: UserRound, label: 'Acción', detail: 'tecla presionada' },
                { icon: Bell, label: 'Evento', detail: 'MoveRequested' },
                { icon: Radio, label: 'Delegate', detail: 'firma segura' },
                { icon: Zap, label: 'Handlers', detail: 'UI + sonido + score' },
            ]}
        />
    );
}

export function MvvmBindingSim({ isPlaying = true }) {
    return (
        <div className={`dotnet-sim mvvm-sim ${isPlaying ? 'is-playing' : ''}`}>
            <header className="dotnet-sim__header">
                <span className="dotnet-sim__status"><span /> BINDING</span>
                <div><h3>MVVM mantiene la interfaz sincronizada</h3><p>La vista observa propiedades; el ViewModel coordina el comportamiento.</p></div>
            </header>
            <div className="mvvm-sim__triangle">
                <div><Monitor size={25} /><strong>View</strong><small>XAML</small></div>
                <span className="mvvm-sim__binding">Binding ↔</span>
                <div><Braces size={25} /><strong>ViewModel</strong><small>estado + comandos</small></div>
                <span className="mvvm-sim__model-link">lee / actualiza</span>
                <div><Database size={25} /><strong>Model</strong><small>reglas y datos</small></div>
            </div>
        </div>
    );
}

export function LayoutChoiceSim({ isPlaying = true }) {
    const choices = [
        { icon: <Rows3 size={25} />, label: 'StackPanel', detail: 'flujo lineal' },
        { icon: <Grid3X3 size={25} />, label: 'Grid', detail: 'filas y columnas' },
        { icon: <Layers3 size={25} />, label: 'Canvas', detail: 'coordenadas absolutas' },
    ];
    return (
        <div className={`dotnet-sim layout-sim ${isPlaying ? 'is-playing' : ''}`}>
            <header className="dotnet-sim__header">
                <span className="dotnet-sim__status"><span /> LAYOUT MAP</span>
                <div><h3>El contenedor expresa una intención</h3><p>Elegir layout por comportamiento evita posiciones frágiles.</p></div>
            </header>
            <div className="layout-sim__grid">
                {choices.map(({ icon, label, detail }) => (
                    <article key={label}>{icon}<strong>{label}</strong><small>{detail}</small><div /></article>
                ))}
            </div>
        </div>
    );
}

export function LinqPipelineSim({ isPlaying = true }) {
    return (
        <Flow
            isPlaying={isPlaying}
            title="LINQ como tubería de transformaciones"
            subtitle="Cada operador recibe una secuencia y produce la siguiente vista de los datos."
            stages={[
                { icon: Database, label: 'Source', detail: 'fantasmas' },
                { icon: Filter, label: 'Where', detail: 'activos' },
                { icon: Rows3, label: 'OrderBy', detail: 'por distancia' },
                { icon: Braces, label: 'Select', detail: 'nombre + score' },
                { icon: Box, label: 'Result', detail: 'lista final' },
            ]}
        />
    );
}

export function ThreadSafetySim({ isPlaying = true }) {
    return (
        <div className={`dotnet-sim thread-sim ${isPlaying ? 'is-playing' : ''}`}>
            <header className="dotnet-sim__header">
                <span className="dotnet-sim__status"><span /> SHARED STATE</span>
                <div><h3>Dos hilos, un recurso compartido</h3><p>La sección crítica debe ejecutarse como una unidad.</p></div>
            </header>
            <div className="thread-sim__lanes">
                <div><span>Thread A</span><i /><i /><i /></div>
                <div><span>Thread B</span><i /><i /><i /></div>
                <aside><LockKeyhole size={24} /><strong>lock (syncRoot)</strong><small>un hilo a la vez</small></aside>
            </div>
        </div>
    );
}

export function StreamPipelineSim({ isPlaying = true }) {
    return (
        <Flow
            isPlaying={isPlaying}
            title="Los datos viajan por capas"
            subtitle="Cada wrapper agrega una responsabilidad sin cambiar el origen de los bytes."
            stages={[
                { icon: FileText, label: 'Archivo', detail: 'scores.txt' },
                { icon: Binary, label: 'FileStream', detail: 'bytes' },
                { icon: Braces, label: 'Reader', detail: 'caracteres UTF-8' },
                { icon: Archive, label: 'Compresión', detail: 'opcional' },
                { icon: Grid3X3, label: 'Modelo', detail: 'ScoreEntry' },
            ]}
        />
    );
}
