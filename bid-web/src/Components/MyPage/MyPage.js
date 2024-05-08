import React from "react";
import "./MyPage.css";
import MyBid from "./MyBid";
import SelectBox from "./SelectBox";
import CommonLine from "../Common/CommonLine";
import FinishedBidContainer from "./FinishedBidContainer";
import MyPageLabel from "./MyPageLabel";

const MyPage = () => {
  return (
    <div className="MyPage">
      <CommonLine />
      <MyBid />
      <SelectBox />
      <MyPageLabel
        LabelsLabel="경매 낙찰 내역"
        FirstContent="상품정보"
        SecondContent="현재가격"
        ThirdContent="내 최고입찰 가격"
        LastContent="주문하기"
      
      />
      <FinishedBidContainer
        title="untitle"
        time="낙찰된 상품입니다."
        PresentPrice={160000}
        MyHighestPrice={160000}
        imageSrc="image/product-image.png"
      />
      

    </div>
  );
};

export default MyPage;
