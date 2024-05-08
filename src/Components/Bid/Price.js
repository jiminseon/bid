import React from 'react'
import PriceCom from './PriceCom';
import { useState } from 'react';

const Price = (props) => {
  const [nowPrice, setNowPrice] = useState(110000);
  const [immediatePrice, setimmediatePrice] = useState(110000);

  props.setBidhigh(nowPrice);
  props.setbidImmediate(immediatePrice);

  const price = [
    {topClassname: 'nowPrice', labelClass: 'nowLabel', priceClass: 'price1', priceLabel: '현재 가격'},
    {topClassname: 'immediatePrice', labelClass: 'immediatePriceLabel', priceClass: 'price2', priceLabel: '즉시 결제 가격'}
  ];


  return (
    <div className='priceTop'>
      <PriceCom 
          topClassName={price[0].topClassname}
          labelClass={price[0].labelClass}
          priceClass={price[0].priceClass}
          priceLabel={price[0].priceLabel}
          price={'₩' + nowPrice.toLocaleString("ko-KR")} 
      />
      <PriceCom 
        topClassName={price[1].topClassname}
        labelClass={price[1].labelClass}
        priceClass={price[1].priceClass}
        priceLabel={price[1].priceLabel}
        price={'₩' + immediatePrice.toLocaleString("ko-KR")}
      />
    </div>
  )
}

export default Price