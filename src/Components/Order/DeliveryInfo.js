import React from 'react'
import OrderAddress from './OrderAddress'
import Orderer from './Orderer'

const DeliveryInfo = () => {
  return (
    <div className='deliveryInfoTop'>
      <div className='deliveryInfo-container'>
        <form action='Post' id='deliveryFrom'>
          <Orderer />
          <OrderAddress />
        </form>
      </div>
    </div>
  )
}

export default DeliveryInfo