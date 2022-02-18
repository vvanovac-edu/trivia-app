import React, {useEffect, useState} from 'react';
import { nanoid } from 'nanoid';

import Question from '../Question/Question';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './Game.css';

export default function Game(props) {
  const [quizData, setQuizData] = useState([])
  const [isQuizLoaded, setIsQuizLoaded] = useState(false)

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

  useEffect(() => {
    const expandQuizData = (quiz) => {
      return quiz.map((question) => {
        return {
          id: nanoid(),
          category: question.category,
          type: question.type,
          difficulty: question.difficulty,
          question: question.question,
          answers: expandAnswers(question),
        }
      });
    }

    if (props.isGameStarted) {
      fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
          .then((response) => response.json())
          .then((data) => setQuizData(expandQuizData(data?.results)))
          .then(() => setIsQuizLoaded(true))
    }
  }, [props.isGameStarted])

  const questionElements = quizData.map((question, index) => (
      <Question
          key={index}
          question={question.question}
          answers={question.answers}
      />
  ))

  return (
      <div className="game-container">
        {isQuizLoaded ?
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
