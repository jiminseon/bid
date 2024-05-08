import React from 'react';
import './Join.css';

const ProfileButton = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="ProfileButton">
      <div className="ProfileButtonText">{text}</div>
    </button>
  );
};

export default ProfileButton;
 