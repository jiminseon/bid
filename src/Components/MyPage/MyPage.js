import React from "react";
import "./MyPage.css";
import MyBid from "./MyBid";
import SelectBox from "./SelectBox";
import CommonLine from "../Common/CommonLine";
import FinishedProducts from "./FinishedProducts";
import ProductArrows from "./ProductArrows";
import OnGoingProducts from "./OnGoingProducts";
const MyPage = () => {
  return (
    <div className="MyPage">
      <CommonLine />
      <MyBid />
      <SelectBox />
      <FinishedProducts />
      <ProductArrows />
      <OnGoingProducts />
      <ProductArrows />
    </div>
  );
};

export default MyPage;
