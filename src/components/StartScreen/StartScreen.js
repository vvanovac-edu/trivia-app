import React from 'react';

import './StartScreen.css';

export default function StartScreen(props) {
  return (
      <div className="start-screen-container">
        <div className="start-screen-wrapper">
          <h1 className="start-screen-title">Welcome to Trivia App</h1>
          <h3 className="start-screen-description">Play quiz and check your knowledge</h3>
          <button
              className="start-screen-button"
              onClick={props.startGame}
          >
            Start Game
          </button>
        </div>
      </div>
  )
}
