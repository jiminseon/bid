import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const JoinTextBox = () => {

    const navigate = useNavigate();
    const handleJoinButtonClick = () => {
        navigate('/join'); // '/join' 페이지로 이동
      };

  return (
    <div className="JoinTextBox">
        <span>계정이 없으신가요?</span>
        <button className="LogintoJoin" onClick={handleJoinButtonClick}>
        가입하기
        </button>
    </div>
  )
}

export default JoinTextBox

