import React, { useState } from 'react';
import './Join.css';
import InputWhat from './InputWhat';

const EmailContainer = () => {
  const [emailError, setEmailError] = useState(true); // 에러 메시지를 무조건 표시하도록 설정

  return (
    <div className="EmailContainer">
        <div class="EmailHeader">
            <InputWhat what="이메일"></InputWhat>
            {emailError && <div className="ErrorMessages">이미 가입된 이메일입니다.</div>}
            {/* or 인증번호를 다시 입력하세요. */}
        </div>

        <div className="EmailCheck">
            <input
              className="InputEmail"
              type="Email"
              placeholder="예) bid@bid.co.kr"
              // onChange={handleEmailChange} // 주석 처리된 부분을 활성화하려면 이 부분의 주석을 제거하세요
            ></input>
            <button className="EMCheckButton">인증번호 전송</button>
        </div>
        <input className="InputEmail2" type="EmailPW" placeholder="인증번호를 입력하세요."></input>

    </div>
  );
};

export default EmailContainer;