import React from 'react';
import './ScrollIndicator.css';

const ScrollIndicator = ({ totalSlides, currentSlide }) => {
  return (
    <div className="scroll-indicator">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <div
          key={index}
          className={`scroll-dot ${index === currentSlide ? 'active' : ''}`}
        ></div>
      ))}
    </div>
  );
};

export default ScrollIndicator;