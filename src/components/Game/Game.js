import React from 'react';
import { nanoid } from 'nanoid';

import Question from '../Question/Question';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './Game.css';

export default function Game(props) {
  const expandAnswers = (question) => {
    const incorrectAnswers = [...question?.['incorrect_answers']];

    const answersData = incorrectAnswers.map((answer) => {
      return {
        id: nanoid(),
        text: answer,
        isClicked: false,
        isCorrect: false,
      }
    });

    answersData.push({
      id: nanoid(),
      text: question?.['correct_answer'],
      isClicked: false,
      isCorrect: true,
    })

    return answersData.sort(() => Math.random() - 0.5);
  }

  const quizDataExpanded = props.quizData.map((question) => {
    return {
      id: nanoid(),
      category: question.category,
      type: question.type,
      difficulty: question.difficulty,
      question: question.question,
      answers: expandAnswers(question),
    }
  });

  const questionElements = quizDataExpanded.map((question, index) => (
    <Question
        key={index}
        question={question.question}
        answers={question.answers}
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
