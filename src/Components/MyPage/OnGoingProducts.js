import React from "react";
import "./MyPage.css";
import BidContainer from "./BidContainer";
import MyPageLabel from "./MyPageLabel";

const OnGoingProducts = () => {
  return (
    <div className="OnGoingProducts">
      <MyPageLabel
        LabelsLabel="Jeh030730 님의 경매 참여 내역"
        FirstContent="상품 정보"
        SecondContent="현재 가격"
        ThirdContent="내 최고입찰 가격"
        LastContent="입찰 상황"
      />
      <BidContainer
        title="untitle"
        time="5일 21시간 43분 4초"
        PresentPrice={160000}
        MyHighestPrice={160000}
        imageSrc="image/product-image.png"
        State="현재 최고입찰자"
      />
      <BidContainer
        title="untitle"
        time="5일 21시간 43분 4초"
        PresentPrice={160000}
        MyHighestPrice={160000}
        imageSrc="image/product-image.png"
        State="현재 최고입찰자"
      />
      <BidContainer
        title="untitle"
        time="5일 21시간 43분 4초"
        PresentPrice={160000}
        MyHighestPrice={160000}
        imageSrc="image/product-image.png"
        State="현재 최고입찰자"
      />
      <BidContainer
        title="untitle"
        time="5일 21시간 43분 4초"
        PresentPrice={160000}
        MyHighestPrice={160000}
        imageSrc="image/product-image.png"
        State="현재 최고입찰자"
      />

    </div>
  );
};

export default OnGoingProducts;
