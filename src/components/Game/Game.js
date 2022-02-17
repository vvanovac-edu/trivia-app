import React from 'react';

import Question from '../Question/Question';
import './Game.css';

export default function Game(props) {
  const questionElements = props.questionsData.map((questionData, index) => (
      <Question key={index} questionData={questionData} />
  ))

  return (
      <div className="game-container">
        {questionElements}
        {props.questionsLoaded &&
            <div className="button-wrapper">
              <button className="check-answers-button">Check Answers</button>
            </div>
        }
      </div>
  )
}
