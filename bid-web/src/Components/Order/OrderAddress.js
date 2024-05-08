import React from 'react'
import OrderAddContainer from './OrderAddContainer'

const OrderAddress = () => {
  //신규 배송지 버튼 -> useState(""); 

  return (
    <div className='orderAddressTop'>
      <div className='addressTitle'>
        <span>배송지 정보</span>
        <button type='button' className='newAdd'>
          신규 배송지
        </button>
        <button type='button' className='ordererSame'>
          주문자와 동일
        </button>
      </div>
      <OrderAddContainer />
    </div>
  )
}

export default OrderAddress