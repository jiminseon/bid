import React from 'react'
import Buy from './Buy';

const ItemBtn = () => {
  const buydata = [
    { text: "입찰하기", className: "bidding", bidOn: 'bidCheck' },
    { text: "즉시 구매", className: "buyNow" }
  ];

  return (
    <div className='bidBtn'>
      <div className='buyBar'>
        <Buy
          btnName={buydata[0].text}
          className={buydata[0].className}
          bidOn={buydata[0].bidOn}
        />
        <Buy
          btnName={buydata[1].text}
        />
        <button className='favorite'>
          관심 상품
        </button>
        <button className='linkCopy'>
          링크 복사
        </button>
      </div>
    </div>
  )
}

export default ItemBtn