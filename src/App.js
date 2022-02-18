import React, { useState } from 'react';

import StartScreen from './components/StartScreen/StartScreen';
import Game from './components/Game/Game';
import './App.css';

export default function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const startGame = () => {
    setIsGameStarted((prevIsGameStarted) => !prevIsGameStarted);
  }

  return (
      <div>
        {isGameStarted ?
            <Game
                isGameStarted={isGameStarted}
            /> :
            <StartScreen
                startGame={startGame}
            />
        }
      </div>
  );
}
