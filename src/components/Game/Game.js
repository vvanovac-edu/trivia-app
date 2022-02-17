import React from 'react';

import Question from '../Question/Question';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './Game.css';

export default function Game(props) {
  const questionElements = props.questionsData.map((questionData, index) => (
      <Question key={index} questionData={questionData} />
  ))

  return (
      <div className="game-container">
        {props.questionsLoaded ?
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
