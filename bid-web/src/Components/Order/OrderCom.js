import React from 'react'

const OrderCom = ({ordererClassName, orderLabel, orderType, orderName, orderPlaceholder, value}) => {
  return (
    <div className={ordererClassName}>
      <div className='dot'></div>
      <div className='orderLabelClassName'>{orderLabel}</div>
      <input className='orderInput' type={orderType} name={orderName} placeholder={orderPlaceholder} value={value}/>
    </div>
  )
}

export default OrderCom