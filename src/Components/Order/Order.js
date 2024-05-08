import React from 'react'
import OrderDelivery from './OrderDelivery'
import OrderItem from './OrderItem'
import './Order.css'

const Order = () => {
  return (
    <div className='orderPage'>
      <div className='orderPage-containerTop'>
        <div className='orderPage-container'>
          <OrderItem />
          <OrderDelivery />
        </div>
      </div>
    </div>
  )
}

export default Order