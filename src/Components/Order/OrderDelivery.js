import React from 'react'
import DeliveryInfo from './DeliveryInfo';
import Payment from './Payment';

const OrderDelivery = () => {
  return (
    <div className='DeliPay-container'>
      <DeliveryInfo/>
      <Payment/>
    </div>
  )
}

export default OrderDelivery