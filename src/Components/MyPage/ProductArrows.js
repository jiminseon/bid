import React from "react";
import "../ProductManager/ProductManager.css";

const ProductArrows = () => {
  return (
    <div className="ProductArrows">
      <button className="product-arrow-left-button">
        <img
          src="image/product-arrow-left.png"
          className="product-arrow-left"
          alt="product-arrow-left"
        />
      </button>
      <button className="product-arrow-right-button">
        <img
          src="image/product-arrow-right.png"
          className="product-arrow-right"
          alt="product-arrow-right"
        />
      </button>
    </div>
  );
};

export default ProductArrows;
