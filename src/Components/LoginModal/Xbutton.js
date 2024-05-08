import React from 'react';
import './Login.css';

const Xbutton = ({ onClick }) => {
  return (
    <button className='Xbutton' onClick={onClick}>
      <img src="image/login-gray-ellipse.png" alt="Xbutton" />
    </button>
  );
};

export default Xbutton;