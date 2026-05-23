import { useCallback, useMemo, useState } from 'react';

const STORAGE_KEY = 'rodrigo-mentoring-progress-v1';

function readProgress() {
    if (typeof window === 'undefined') {
        return { viewed: {}, completed: {}, lastLessonBySubject: {} };
    }

    try {
        const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}');
        return {
            viewed: parsed.viewed || {},
            completed: parsed.completed || {},
            lastLessonBySubject: parsed.lastLessonBySubject || {},
        };
    } catch {
        return { viewed: {}, completed: {}, lastLessonBySubject: {} };
    }
}

function persistProgress(progress) {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function asSet(values = []) {
    return new Set(Array.isArray(values) ? values : []);
}

function updateCollection(progress, collectionName, subjectId, lessonId, shouldInclude) {
    const current = asSet(progress[collectionName]?.[subjectId]);
    if (shouldInclude) {
        current.add(lessonId);
    } else {
        current.delete(lessonId);
    }

    return {
        ...progress,
        [collectionName]: {
            ...progress[collectionName],
            [subjectId]: Array.from(current),
        },
    };
}

export default function useLearningProgress() {
    const [progress, setProgress] = useState(readProgress);

    const commit = useCallback((updater) => {
        setProgress((current) => {
            const next = updater(current);
            persistProgress(next);
            return next;
        });
    }, []);

    const markViewed = useCallback(
        (subjectId, lessonId) => {
            commit((current) => {
                const next = updateCollection(current, 'viewed', subjectId, lessonId, true);
                return {
                    ...next,
                    lastLessonBySubject: {
                        ...next.lastLessonBySubject,
                        [subjectId]: lessonId,
                    },
                };
            });
        },
        [commit]
    );

    const toggleCompleted = useCallback(
        (subjectId, lessonId) => {
            commit((current) => {
                const completed = asSet(current.completed?.[subjectId]);
                return updateCollection(current, 'completed', subjectId, lessonId, !completed.has(lessonId));
            });
        },
        [commit]
    );

    const resetSubject = useCallback(
        (subjectId) => {
            commit((current) => {
                const { [subjectId]: _viewed, ...viewed } = current.viewed;
                const { [subjectId]: _completed, ...completed } = current.completed;
                const { [subjectId]: _last, ...lastLessonBySubject } = current.lastLessonBySubject;
                return { viewed, completed, lastLessonBySubject };
            });
        },
        [commit]
    );

    const api = useMemo(
        () => ({
            progress,
            getSubjectProgress(course) {
                const completed = asSet(progress.completed?.[course.id]);
                const viewed = asSet(progress.viewed?.[course.id]);
                const total = course.lessons.length || 1;
                return {
                    completedCount: completed.size,
                    viewedCount: viewed.size,
                    percent: Math.round((completed.size / total) * 100),
                    viewedPercent: Math.round((viewed.size / total) * 100),
                    lastLessonId: progress.lastLessonBySubject?.[course.id] || null,
                };
            },
            getLessonStatus(subjectId, lessonId) {
                return {
                    viewed: asSet(progress.viewed?.[subjectId]).has(lessonId),
                    completed: asSet(progress.completed?.[subjectId]).has(lessonId),
                };
            },
            markViewed,
            toggleCompleted,
            resetSubject,
        }),
        [markViewed, progress, resetSubject, toggleCompleted]
    );

    return api;
}
