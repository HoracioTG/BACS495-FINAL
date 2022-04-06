import Header from './header';
import Footer from './footer';
import Question from './question';
import QuestionForm from './questionform';
import React, { useState } from 'react';

import './App.css';

function App() {
  
  const completeQuestion = index => {
    const newQuestion = [...question];
    newQuestion[index].isCompleted = true;
    setQuestion(newQuestion);
  };

  const addQuestion = text => {
    const newQuestion = [...question, { text }];
    setQuestion(newQuestion);
  };


  const [question, setQuestion] = useState([
    {
      text: "Check in beach-side hotel",
      isCompleted: false
    },
    {
      text: "Get some drinks",
      isCompleted: true
    },
    {
      text: "Go Scuba Diving",
      isCompleted: false
    }
  ]);
  return (
    <div className="App">
      <Header />
      <div className="question-list">
        {question.map((question, index) => (
          <Question
            key={index}
            index={index}
            question={question}
            completeQuestion={completeQuestion}
          />
        ))}
        <QuestionForm addQuestion={addQuestion} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
