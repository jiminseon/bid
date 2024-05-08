import React from "react";
import "./ProductManager.css";

const ProductContainer = () => {
  return (
    <div className="ProductContainer">

      <div class="ProductContainerinner">
          <button className="product-delete-container">
            <img
              src="image/product-delete.png"
              className="product-delete"
              alt="product-delete"
            />
            <div className="product-delete-text">삭제</div>
          </button>
          <img
            src="image/product-image.png"
            className="product-image"
            alt="product-image"
          />
          <div className="product-information">
            <div className="product-title">untitle</div>
            <div className="product-time">5일 21시간 43분 4초</div>
            <button className="link-to-product">바로가기</button>
          </div>
          <div className="highest-price">160,000원</div>
          <div className="buy-num">17건</div>
          <div className="like-num-box">
            <img src="image/Like.png" className="Like" alt="Like" />
            <div className="like-num">5</div>
          </div>
      </div>


      <img
        src="image/product-line.png"
        className="product-line"
        alt="product-line"
      />
      
    </div>
  );
};

export default ProductContainer;
