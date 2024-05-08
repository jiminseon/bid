import React from 'react'
import OrderItemBar from './OrderItemBar';
import OrderItemInfo from './OrderItemInfo';

const OrderItem = () => {
  return (
    <div className='orderItemTop'>
      <div className='orderItemTitle'>
        결제 상품 정보
      </div>
      <div className='orderItem-container'>
        <OrderItemBar />
        <OrderItemInfo />
      </div>
    </div>
  )
}

export default OrderItem