import React, { useState, useEffect } from 'react';
import CircleLabel from './CircleLabel';

const Quiz = ({ QuestionSet, defaultIndex = -1, selectCategory }) => {
    // const [defaultIndex, setIndex] = useState(defaultIndex);
    const [selectedOption, setSelectedOption] = useState(null);
    const [answerSubmitted, setShowResult] = useState(false);
    const [is_answer_correct, setAnswerCorrect] = useState(false);

    // useEffect(() => {

    if (defaultIndex === -1 && QuestionSet?.length > 0) {
        const randomIndex = Math.floor(Math.random() * QuestionSet.length);
        setIndex(randomIndex);
    }
    //     console.log('Question set default index', defaultIndex, 'acula modified index', defaultIndex);
    // }, [defaultIndex, QuestionSet]);

    const handleOptionClick = (option) => {
        if (answerSubmitted) {
            return;
        }
        setSelectedOption(option);
        handleSubmit();
        if (option === QuestionSet[defaultIndex].answer) {
            setAnswerCorrect(true);
        } else {
            setAnswerCorrect(false);
        }
    };

    const handleSubmit = () => {
        setShowResult(true);

    };

    const selectCategoryOption = (category) => {

        setSelectedOption(null);
        setShowResult(false);
        setAnswerCorrect(false);

        selectCategory(category);
    }

    if (defaultIndex === -1 || !QuestionSet?.[defaultIndex]) {
        return <div className="loading">Loading...</div>; // Handle case where question set is not ready
    }

    return (
        <div className="quiz-container">
            {/* <div className="quiz-container"></div> */}
            <div className="title-container">
                <h2 className="question-text">{QuestionSet[defaultIndex].question}</h2>
            </div>
            {/* <h2 className="question-text">{QuestionSet[defaultIndex].question}</h2> */}
            <div className="options-container">
                {QuestionSet[defaultIndex].options.map((option) => (
                    
                    <button
                        onClick={() => handleOptionClick(option.label)}
                        className={`option-button option ${answerSubmitted && option.label == QuestionSet[defaultIndex].answer ? 'correct_option' : ''} ${selectedOption === option.label ? (option.label != QuestionSet[defaultIndex].answer ? 'incorrect_selected' : '') : ''}`}
                        key={option.label}
                    >
                    <CircleLabel label={option.label} /> {option.value}
                    </button>
                ))}
            </div>


            {answerSubmitted && (
                <div>
                    <br />

                    <button className='redirect-button option' onClick={() => selectCategoryOption('nails')}>Nails</button>
                    <button className='redirect-button option' onClick={() => selectCategoryOption('beauty')} >Beauty</button>
                </div>
            )}
        </div>
    );
};

export default Quiz;
