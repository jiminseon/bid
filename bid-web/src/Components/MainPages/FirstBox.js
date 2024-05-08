import React from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";

const FirstBox = () => {
  return (
    <div className="first-box">
      <div className="first-box-message">
        <span className="trendy-text">트렌디한 패션 거래, </span>
        <span className="bid">bid</span>
        <br />
        당신의 추억을 더 가치있게 판매하세요.
      </div>
      <br />
      <br />
      <Link to={'/sell'} className="sell-button">
        SELL
      </Link>
    </div>
  );
};

export default FirstBox;
