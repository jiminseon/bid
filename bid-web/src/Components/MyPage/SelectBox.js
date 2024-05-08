import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyPage.css";

const SelectBox = () => {
    const navigate = useNavigate();
    const handleItemClick = () => {
        navigate('/product-manage'); // '/join' 페이지로 이동
    }
        

  return (
    <div className="SelectBox">
      <div className="SelectBoxContainer">
        <button className="ChargeBox" onClick={() => handleItemClick("ChargeBox")}>
          <img
            src="image/mypage-money-image.png"
            className="mypage-money-image"
            alt="mypage-money-image"
          />
          <div className="ChargeText">예치금 충전</div>
        </button>

        <img
          src="image/mypage-line2.png"
          className="mypage-line2"
          alt="mypage-line2"
        />

        <button className="EditBox" onClick={() => handleItemClick("EditBox")}>
          <img
            src="image/mypage-edit-image.png"
            className="mypage-edit-image"
            alt="mypage-edit-image"
          />
          <div className="EditText">경매 상품 관리</div>
        </button>
      </div>
    </div>
  );
};

export default SelectBox;

