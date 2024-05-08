import React, { useState } from 'react';
import './Join.css';
import InputContainer from './InputContainer';
import InputWhat from './InputWhat';
import InputField from './InputField';


const PWContainer = ({ what, text }) => {

    const [PWError, setPWError] = useState(true); // 에러 메시지를 무조건 표시하도록 설정

  return (

    <div className="PWContainer">
        <InputContainer what="비밀번호" text=" "></InputContainer>


        <div className="PWcheck">
            <InputWhat what = "비밀번호 확인"></InputWhat>
            {PWError && <div className="ErrorMessages">비밀번호가 일치하지 않습니다.</div>}
        </div>

        <InputField what="비밀번호 확인" text=" "></InputField>
    </div>

  );
};

export default PWContainer;