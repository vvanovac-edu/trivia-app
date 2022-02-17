import React from 'react';

import './LoadingSpinner.css';

export default function LoadingSpinner() {
  return (
      <div className="loading-spinner-container">
        <div className="loading-spinner-ellipsis">
          <div/>
          <div/>
          <div/>
          <div/>
        </div>
      </div>
  )
}
