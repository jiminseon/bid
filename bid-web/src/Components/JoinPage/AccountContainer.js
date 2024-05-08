import React from 'react';
import './Join.css';
import InputField from './InputField';
import InputWhat from './InputWhat';


const AccountContainer = ({ what, text }) => {
  return (
    <div className="AccountContainer">
      <InputWhat what={"계좌 등록"}></InputWhat>
      <div className="InputAccount">
        <input className="HalfField" type={"예금주"} placeholder={"예금주"} ></input>
        <div className="BankInputContainer">
          <input className="HalfField BankInput" type={"은행명"} placeholder={"은행명"} />
          <img className="ValidationIcon" src="image/join-account-button.png" alt="Validation Icon" />
        </div>
      </div>
      <InputField text={"계좌번호 입력"} what={"계좌"}></InputField>
    </div>
  );
};

export default AccountContainer;