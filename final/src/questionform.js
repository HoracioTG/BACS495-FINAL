import React, { useState } from 'react';

function QuestionForm({ addQuestion }) {
    const [value, setValue] = useState(" ");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addQuestion(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}

export default QuestionForm;