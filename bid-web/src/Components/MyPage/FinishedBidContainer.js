import React from "react";
import "./MyPage.css";

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const FinishedBidContainer = ({
  title,
  time,
  PresentPrice,
  MyHighestPrice,
  imageSrc,
}) => {
  const formattedPresentPrice = numberWithCommas(PresentPrice);
  const formattedMyHighestPrice = numberWithCommas(MyHighestPrice);

  return (
    <div className="FinishedBidContainer">
      <div class="ProductContainerinner">
        <button className="product-delete-container">
          <img
            src="image/product-delete.png"
            className="product-delete"
            alt="product-delete"
          />
          <div className="product-delete-text">삭제</div>
        </button>
        <img src={imageSrc} className="product-image" alt="product-image" />
        <div className="product-information">
          <div className="product-title">{title}</div>
          <div className="product-time">{time}</div>
          <button className="link-to-product">바로가기</button>
        </div>
        <div className="PresentPrice">{formattedPresentPrice}원</div>
        <div className="MyHighestPrice">{formattedMyHighestPrice}원</div>

        <button className="BuyButton">결제하기</button>
      </div>
      <img
        src="image/product-line.png"
        className="product-line"
        alt="product-line"
      />
    </div>
  );
};

export default FinishedBidContainer;
