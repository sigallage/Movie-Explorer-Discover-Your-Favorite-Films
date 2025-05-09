// src/components/LoadMoreButton.jsx
import React from 'react';
import './LoadMoreButton.css';

function LoadMoreButton({ onClick, disabled }) {
  return (
    <div className="load-more-container">
      <button onClick={onClick} className="load-more-btn" disabled={disabled}>
        Load More
      </button>
    </div>
  );
}

export default LoadMoreButton;
