import React from "react";
import "./ProductManager.css";

const ProductLabel = () => {
  return (
    <div className="ProductLabel">
      <div className="LabelsLabel">
          <img
            src="image/product-manager-image1.png"
            className="product-manager-image1"
            alt="product-manager-image1"
          />
          <div className="UsersProduct">Jeh030730 님의 경매 상품</div>
      </div>
      <div className="LabelBox">
        <span className="ProductInformation">상품 정보</span>
        <span className="HighestPrice">최고 가격</span>
        <span className="BuyNum">입찰 건수</span>
        <span className="FavoriteNum">관심 상품 등록</span>
      </div>
    </div>
  );
};

export default ProductLabel;
