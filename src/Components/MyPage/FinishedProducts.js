import React from "react";
import "./MyPage.css";
import BidContainer from "./BidContainer";
import MyPageLabel from "./MyPageLabel";

const FinishedProducts = () => {
  return (
    <div className="FinishedProducts">
      <MyPageLabel
        LabelsLabel="경매 낙찰 내역"
        FirstContent="상품정보"
        SecondContent=""
        ThirdContent="현재가격"
        LastContent="주문하기"
      />
      <BidContainer
        title="untitle"
        done="낙찰된 상품입니다."
        MyHighestPrice={160000}
        imageSrc="image/product-image.png"
      />
      <BidContainer
        title="untitle"
        done="낙찰된 상품입니다."
        MyHighestPrice={160000}
        imageSrc="image/product-image.png"
      />
      <BidContainer
        title="untitle"
        done="낙찰된 상품입니다."
        MyHighestPrice={160000}
        imageSrc="image/product-image.png"
      />
      <BidContainer
        title="untitle"
        done="낙찰된 상품입니다."
        MyHighestPrice={160000}
        imageSrc="image/product-image.png"
      />
    </div>
  );
};

export default FinishedProducts;
