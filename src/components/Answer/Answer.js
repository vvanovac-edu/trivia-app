import React from 'react';

import './Answer.css';

export default function Answer(props) {
  return (
      <div
          className="answer-container"
          style={{ backgroundColor: props.isAnswerClicked ? '#D6DBF5' : 'none' }}
      >
        {props.answer}
      </div>
  );
}
