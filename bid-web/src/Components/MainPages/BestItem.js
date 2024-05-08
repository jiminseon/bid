import React from "react";
import "./MainPage.css";
import Product from "./Product";
import BlackText from "./BlackText";
import GrayText from "./GrayText";
import ArrowButton from "./ArrowButton";

const BestItem = () => {
  const handleButtonClick = (direction) => {
    console.log(`${direction} button clicked`);
  };

  return (
    <div className="BestItem">
      <BlackText text="Best Item" />
      <GrayText text="많은 관심을 받은 상품" />
      <div className="Product-container">
        <ArrowButton
          direction="left"
          onClick={() => handleButtonClick("left")}
        />
        <Product />
        <Product />
        <Product />
        <Product />
        <ArrowButton
          direction="right"
          onClick={() => handleButtonClick("right")}
        />
      </div>
    </div>
  );
};

export default BestItem;
