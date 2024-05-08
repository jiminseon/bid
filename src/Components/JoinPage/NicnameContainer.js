import React, { useState } from 'react';
import './Join.css';
import InputWhat from './InputWhat';
import InputField from './InputField';

const NicnameContainer = ({ what, text }) => {

    const [PWError, setPWError] = useState(true); // 에러 메시지를 무조건 표시하도록 설정

  return (

    <div class="NicnameContainer">
        <div class="NicnameCheck">
            <InputWhat what = "닉네임"></InputWhat>
            {PWError && <div className="ErrorMessages">이미 존재하는 닉네임입니다.</div>}
        </div>
        <InputField what="닉네임" text="bid 내에서 사용됩니다."></InputField>
    </div>

  );
};

export default NicnameContainer;