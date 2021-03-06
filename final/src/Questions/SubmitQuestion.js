import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

export default function SubmitQuestion() {
    const [question, setQuestion] = useState("");

    const submitQuestion = (e) => {
        var id = uuidv4();
        var insert = { 'id': id, 'question': question }
        fetch(process.env.REACT_APP_API_URL + "/questions",
            {
                method: 'POST',
                body: JSON.stringify(insert),
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                }
            })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            
            <form>
                <label className='sub-title'>Ask Your Question:
                <br />
                    <textarea className='question-box' value={question} onChange={(e) => setQuestion(e.target.value)}>randomtext..</textarea>
                </label>
                
                <button className='button' value="Submit Question" onClick={submitQuestion}>Submit Question</button>
            </form>
        </div>
    )
}