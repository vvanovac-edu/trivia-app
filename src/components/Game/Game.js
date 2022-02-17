import React from 'react';

import Question from '../Question/Question';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './Game.css';

export default function Game(props) {
  const questionElements = props.quizData.map((question, index) => (
    <Question
        key={index}
        question={question.question}
        answers={['answer 1', 'answer 2', 'answer 3', 'answer 4']}
    />
  ))

  return (
      <div className="game-container">
        {props.isQuizLoaded ?
            <div>
              {questionElements}
              <div className="button-wrapper">
                <button className="check-answers-button">Check answers</button>
              </div>
            </div> :
            <LoadingSpinner />
        }
      </div>
  )
}
