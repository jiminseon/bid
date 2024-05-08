import React from "react";
import "./MainPage.css";
import Product from "./Product";
import BlackText from "./BlackText";
import GrayText from "./GrayText";
import ArrowButton from "./ArrowButton";

const DeadlineItem = () => {

    const handleButtonClick = (direction) => {
        console.log(`${direction} button clicked`);
      };
    
  return (
    <div className="DeadlineItem">
      <BlackText text="Deadline Item" />
      <GrayText text="마감 임박 상품" />

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

export default DeadlineItem;
