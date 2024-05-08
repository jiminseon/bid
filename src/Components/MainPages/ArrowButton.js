import React from 'react';
import './MainPage.css';

const arrowRight = 'image/arrow-right.png';
const arrowLeft = 'image/arrow-left.png';

export const ArrowButton = ({ direction, onClick }) => {
  const arrowImagePath = direction === 'right' ? arrowRight : arrowLeft;

  return (
    <button onClick={onClick} className = "ArrowButton" >
      <img src={arrowImagePath} alt={`${direction} arrow`} className = "ArrowImage"/>
    </button>
  );
};

export default ArrowButton