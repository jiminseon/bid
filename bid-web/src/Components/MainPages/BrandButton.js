import React from 'react';

function BrandButton(props) {
  const { onClick } = props;

  return (
    <button onClick={onClick} className="BrandButton">
      <div className="BrandButtonText" >
        {props.text}
      </div>
    </button>
  );
}

export default BrandButton;