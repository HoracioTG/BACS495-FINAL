import React from 'react';



function Question({ question, index, completeQuestion }) {
    return (
        <div
            className="question"
            style={{ textDecoration: quetstion.isCompleted ? "line-through" : "" }}
        >
            {question.text}
            <div>
                <button className="completeButton" onClick={() => completeQuestion(index)}>Complete</button>
            </div>
        </div>
    );
}

export default Question;