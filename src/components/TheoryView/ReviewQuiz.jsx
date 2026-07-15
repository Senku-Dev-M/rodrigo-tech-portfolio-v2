import { useMemo, useState } from 'react';
import { CheckCircle2, RotateCcw, XCircle } from 'lucide-react';

export default function ReviewQuiz({ questions = [] }) {
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const score = useMemo(
        () => questions.reduce((total, question, index) => (
            answers[index] === question.answer ? total + 1 : total
        ), 0),
        [answers, questions]
    );

    const complete = questions.every((_, index) => Number.isInteger(answers[index]));

    const reset = () => {
        setAnswers({});
        setSubmitted(false);
    };

    return (
        <div className="review-quiz">
            <div className="review-quiz__intro">
                <div>
                    <span className="theory-card__eyebrow">Comprobación rápida</span>
                    <h3>Verifica tu modelo mental</h3>
                </div>
                <span>{questions.length} preguntas</span>
            </div>

            <div className="review-quiz__questions">
                {questions.map((question, questionIndex) => {
                    const selected = answers[questionIndex];
                    const isCorrect = submitted && selected === question.answer;

                    return (
                        <fieldset key={question.prompt} className="review-question">
                            <legend>
                                <span>{String(questionIndex + 1).padStart(2, '0')}</span>
                                {question.prompt}
                            </legend>
                            <div className="review-question__options">
                                {question.options.map((option, optionIndex) => {
                                    const optionSelected = selected === optionIndex;
                                    const optionCorrect = submitted && optionIndex === question.answer;
                                    const optionWrong = submitted && optionSelected && optionIndex !== question.answer;

                                    return (
                                        <label
                                            key={option}
                                            className={[
                                                'review-option',
                                                optionSelected ? 'is-selected' : '',
                                                optionCorrect ? 'is-correct' : '',
                                                optionWrong ? 'is-wrong' : '',
                                            ].filter(Boolean).join(' ')}
                                        >
                                            <input
                                                type="radio"
                                                name={`review-question-${questionIndex}`}
                                                checked={optionSelected}
                                                disabled={submitted}
                                                onChange={() => setAnswers((current) => ({
                                                    ...current,
                                                    [questionIndex]: optionIndex,
                                                }))}
                                            />
                                            <span>{option}</span>
                                            {optionCorrect && <CheckCircle2 size={18} aria-hidden="true" />}
                                            {optionWrong && <XCircle size={18} aria-hidden="true" />}
                                        </label>
                                    );
                                })}
                            </div>

                            {submitted && (
                                <div className={`review-question__feedback ${isCorrect ? 'is-correct' : 'is-wrong'}`}>
                                    <strong>{isCorrect ? 'Correcto.' : 'Revisa esta idea.'}</strong>
                                    <span>{question.explanation}</span>
                                </div>
                            )}
                        </fieldset>
                    );
                })}
            </div>

            <div className="review-quiz__footer">
                {submitted ? (
                    <>
                        <p aria-live="polite">
                            Resultado: <strong>{score}/{questions.length}</strong>. {score === questions.length
                                ? 'Ya puedes avanzar con confianza.'
                                : 'Lee las explicaciones y vuelve a intentarlo.'}
                        </p>
                        <button type="button" onClick={reset}>
                            <RotateCcw size={16} /> Reintentar
                        </button>
                    </>
                ) : (
                    <button type="button" disabled={!complete} onClick={() => setSubmitted(true)}>
                        Comprobar respuestas
                    </button>
                )}
            </div>
        </div>
    );
}
