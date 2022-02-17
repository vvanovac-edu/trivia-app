import React from 'react';

import Answer from '../Answer/Answer';
import './Question.css';

export default function Question(props) {
  const answerElements = props.answers.map((answer, index) => (
      <Answer
          key={index}
          answer={answer}
      />
  ));

  return (
      <div className="question-container">
        <h1 className="question-title">{props.question}</h1>
        <div className="question-answers">
          {answerElements}
        </div>
      </div>
  );
}
