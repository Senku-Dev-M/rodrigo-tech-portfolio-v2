import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ── Board config ─────────────────────────────────────────────
const COLUMNS = ['Backlog', 'To Do', 'In Progress', 'Review', 'Done'];
const COL_COLORS = ['#64748b', '#FF8A5C', '#FF5A1F', '#7dd3fc', '#00ff88'];

const INITIAL_TASKS = [
    { id: 1, text: 'Implementar login',     colIdx: 0 },
    { id: 2, text: 'Diseñar base de datos', colIdx: 0 },
    { id: 3, text: 'Crear API REST',        colIdx: 0 },
    { id: 4, text: 'Dashboard de usuario',  colIdx: 0 },
];

// Scripted moves: [taskId, targetCol], delay in ms
const MOVES = [
    { taskId: 1, colIdx: 1, delay: 500  },
    { taskId: 2, colIdx: 1, delay: 900  },
    { taskId: 1, colIdx: 2, delay: 1600 },
    { taskId: 3, colIdx: 1, delay: 2000 },
    { taskId: 1, colIdx: 3, delay: 2700 },
    { taskId: 2, colIdx: 2, delay: 3000 },
    { taskId: 4, colIdx: 1, delay: 3400 },
    { taskId: 1, colIdx: 4, delay: 3900 },
    { taskId: 3, colIdx: 2, delay: 4300 },
    { taskId: 2, colIdx: 3, delay: 4900 },
    { taskId: 4, colIdx: 2, delay: 5200 },
    { taskId: 2, colIdx: 4, delay: 5800 },
    { taskId: 3, colIdx: 3, delay: 6200 },
    { taskId: 4, colIdx: 3, delay: 6700 },
    { taskId: 3, colIdx: 4, delay: 7300 },
    { taskId: 4, colIdx: 4, delay: 7800 },
];

export default function ScrumBoardSim({ isPlaying }) {
    const [tasks, setTasks] = useState(INITIAL_TASKS);
    const timersRef = useRef([]);

    // Schedule all moves when play starts, reset when stopped
    useEffect(() => {
        // Clear previous timers
        timersRef.current.forEach(clearTimeout);
        timersRef.current = [];

        if (isPlaying) {
            MOVES.forEach(({ taskId, colIdx, delay }) => {
                const t = setTimeout(() => {
                    setTasks(prev => prev.map(task =>
                        task.id === taskId ? { ...task, colIdx } : task
                    ));
                }, delay);
                timersRef.current.push(t);
            });
        } else {
            setTasks(INITIAL_TASKS);
        }

        return () => timersRef.current.forEach(clearTimeout);
    }, [isPlaying]);

    // Derived: which tasks are in each column
    const byCol = COLUMNS.map((_, ci) => tasks.filter(t => t.colIdx === ci));

    // Layout: 5 columns, full width via CSS grid
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '0.75rem',
            width: '100%',
            maxWidth: '980px',
            margin: '0 auto',
            padding: '1rem 0',
        }}>
            {COLUMNS.map((col, ci) => (
                <div key={col} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem',
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '10px',
                    padding: '0.6rem 0.5rem',
                    border: `1px solid rgba(255,255,255,0.07)`,
                    minHeight: '180px',
                }}>
                    {/* Column header */}
                    <div style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: COL_COLORS[ci],
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        marginBottom: '0.3rem',
                        paddingBottom: '0.3rem',
                        borderBottom: `1px solid ${COL_COLORS[ci]}33`,
                    }}>
                        {col}
                    </div>

                    {/* Task cards */}
                    <AnimatePresence>
                        {byCol[ci].map(task => (
                            <motion.div
                                key={task.id}
                                layout
                                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.35, ease: 'easeOut' }}
                                style={{
                                    background: 'rgba(255,255,255,0.07)',
                                    border: `1px solid ${COL_COLORS[ci]}44`,
                                    borderRadius: '7px',
                                    padding: '0.45rem 0.55rem',
                                    fontSize: '0.72rem',
                                    color: '#e2e8f0',
                                    lineHeight: 1.35,
                                    boxShadow: `0 0 8px ${COL_COLORS[ci]}22`,
                                    cursor: 'default',
                                }}
                            >
                                {task.text}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}

