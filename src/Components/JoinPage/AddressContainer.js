import React from 'react';
import './Join.css';
import InputField from './InputField';
import InputWhat from './InputWhat';

const AddressContainer = () => {
  return (
    <div className="AddressContainer">
        <InputWhat what="주소"></InputWhat>
        <div className="FindAdress">
            <input className="InputAddress" type="Address" placeholder="우편번호를 입력하세요."></input>
            <button className="ADCheckButton">우편번호 검색</button>
        </div>
        <InputField what={"주소"} text={" "}></InputField>
        <InputField what={"주소"} text={"상세주소를 입력하세요. (건물, 아파트, 동/호수 입력)"}></InputField>
    </div>
  );
};

export default AddressContainer;
