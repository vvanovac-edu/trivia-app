import React from 'react';

import Answer from '../Answer/Answer';
import './Question.css';

export default function Question(props) {
  let allAnswers = [props.questionData?.['correct_answer'], ...props.questionData?.['incorrect_answers']];

  const answers = allAnswers.map((answer, index) => (
      <Answer key={index} text={answer} />
  ));

  return (
      <div className="question-container">
        <h1 className="question-title">{props.questionData.question}</h1>
        <div className="question-answers">
          {answers}
        </div>
      </div>
  );
}
