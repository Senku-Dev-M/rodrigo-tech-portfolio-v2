import { useState } from 'react';
import { MENTORING_VIEWS } from '../constants/mentoring';
import { scrollToTop } from '../utils/scroll';

export default function useMentoringPageState() {
    const [view, setView] = useState(MENTORING_VIEWS.subjects);
    const [subject, setSubject] = useState(null);
    const [lab, setLab] = useState(null);
    const [filteredLabs, setFilteredLabs] = useState([]);

    function navigate(nextView, nextSubject, nextLab) {
        if (nextView === MENTORING_VIEWS.subjects) {
            setSubject(null);
            setLab(null);
        }

        if (nextView === MENTORING_VIEWS.labs) {
            setLab(null);

            if (nextSubject) {
                setSubject(nextSubject);
            }
        }

        if (nextView === MENTORING_VIEWS.guide && nextLab) {
            setLab(nextLab);
        }

        setView(nextView);
        scrollToTop('smooth');
    }

    return {
        filteredLabs,
        lab,
        navigate,
        setFilteredLabs,
        subject,
        view,
    };
}
