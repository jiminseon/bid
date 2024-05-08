import React from "react";
import "./ProductManager.css";
import ProductLabel from "./ProductLabel";
import CommonLine from "../Common/CommonLine";
import ProductContainer from "./ProductContainer";
import ProductArrows from "./ProductArrows";

const ProductManager = () => {
  return (
    <div className="ProductManager">
      <CommonLine />
      <ProductLabel />
      <ProductContainer />
      <ProductContainer />
      <ProductContainer />
      <ProductContainer />
      <ProductContainer />
      <ProductArrows />
    </div>
  );
};

export default ProductManager;
