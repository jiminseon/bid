import React from 'react'

const OrderItemBar = () => {
  return (
    <div className='orderItemBar'>
    <div className='itemBar'>
      상품 정보
    </div>
    <div className='priceBar'>
      현재 가격
    </div>
    <div className='myBidBar'>
      내 최고입찰 가격
    </div>
    <div className='stateBar'>
      입찰상황
    </div>
  </div>
  )
}

export default OrderItemBar