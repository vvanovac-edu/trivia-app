import React from 'react';

import './Answer.css';

export default function Answer(props) {
  return (
      <div
          className="answer-container"
      >
        {props.answer}
      </div>
  );
}
