import React from "react";
import "./MyPage.css";

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const BidContainer = ({
  title,
  time,
  PresentPrice,
  MyHighestPrice,
  imageSrc,
  State,
  done
}) => {
  const formattedPresentPrice = PresentPrice
    ? numberWithCommas(PresentPrice) + "원"
    : null; // PresentPrice가 주어지지 않았을 때 null로 설정

  const formattedMyHighestPrice = numberWithCommas(MyHighestPrice) + "원";

  return (
    <div className="BidContainer">
      <div className="ProductContainerinner">
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

          {done ? (
          <div className="done">{done}</div>
        ) : (
          <div className="product-time">{time}</div>
        )}


          <button className="link-to-product">바로가기</button>
        </div>
        {formattedPresentPrice ? (
          <div className="PresentPrice">{formattedPresentPrice}</div>
        ) : (
          <div className="none"></div>
        )}
        <div className="MyHighestPrice">{formattedMyHighestPrice}</div>
        {State ? (
          <div className="StateValue">{State}</div>
        ) : (
          <button className="BuyButton">결제하기</button>
        )}
      </div>
      <img
        src="image/product-line.png"
        className="product-line"
        alt="product-line"
      />
    </div>
  );
};

export default BidContainer;
