import React from 'react';
import './Login.css';
import LoginLogo from './LoginLogo';
import Xbutton from './Xbutton';
import LoginInput from './LoginInput';
import LoginButtonContainer from './LoginButtonContainer';
import LoginLine from './LoginLine';
import JoinTextBox from './JoinTextBox';

const Login = ({ onClose }) => {

  const handleOverlayClick = () => {
    onClose();
  };

  const handleXButtonClick = () => {
    onClose(); // Xbutton을 눌렀을 때 onClose 함수 호출
  };

  return (
    <>
      <div className="modal-overlay" onClick={handleOverlayClick}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <Xbutton onClick={handleXButtonClick} />
          <LoginLogo />
          <LoginInput />
          <LoginButtonContainer />
          <LoginLine />
          <JoinTextBox />
        </div>
      </div>
    </>
  );
};

export default Login;