import React from "react";
import "./MainPage.css";
import BrandButton from "./BrandButton";

const SecondBox = () => {
  return (
    <div className="second-box">
    <div className="second-box-contents">
      <div className="BrandItem">Brand Item</div>
      <img
        src="image/simple-line.png"
        className="simple-line"
        alt="line"
      ></img>
      <div className="BrandButtonContainer">
        <BrandButton text="AdIdas" />
        <BrandButton text="Balenciaga" />
        <BrandButton text="Kapital" />
        <BrandButton text="Nike" />
        <BrandButton text="Stussy" />
        <BrandButton text="Supreme" />
      </div>
    </div>
  </div>

  );
};

export default SecondBox;
