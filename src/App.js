import React, { useEffect, useState } from 'react';

import StartScreen from './components/StartScreen/StartScreen';
import Game from './components/Game/Game';
import './App.css';

export default function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [questionsData, setQuestionsData] = useState([])
  const [questionsLoaded, setQuestionsLoaded] = useState(false)

  const startGame = () => {
    setIsGameStarted((prevIsGameStarted) => !prevIsGameStarted);
  }

  useEffect(() => {
    if (isGameStarted) {
      fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
          .then((response) => response.json())
          .then((data) => setQuestionsData(data?.results))
          .then(() => setQuestionsLoaded(true))
    }
  }, [isGameStarted])

  return (
      <div>
        {isGameStarted ?
            <Game questionsData={questionsData} questionsLoaded={questionsLoaded} /> :
            <StartScreen startGame={startGame} />
        }
      </div>
  );
}
