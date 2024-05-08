import React from 'react'
import OrderCom from './OrderCom';


const OrdererContainer = () => {
  const ordererData = [
    {ordererClassName: 'ordererName', orderLabel: '이름', orderType: 'text', orderName: 'name', orderPlaceholder: ' 주문하는 분의 이름을 입력하세요'},
    {ordererClassName: 'ordererPhone', orderLabel: '연락처', orderType: 'number', orderName: 'phoneNumber', orderPlaceholder: ' -없이 입력'},
    {ordererClassName: 'ordererEmail', orderLabel: '이메일', orderType: 'email', orderName: 'email', orderPlaceholder: ' 예) bid@bid.co.kr'}
  ]; 

  return (
    <div className='orderer-container'>
        <OrderCom
          ordererClassName={ordererData[0].ordererClassName}
          orderLabel={ordererData[0].orderLabel}
          orderType={ordererData[0].orderType}
          orderName={ordererData[0].orderName}
          orderPlaceholder={ordererData[0].orderPlaceholder}
        />
        <OrderCom
          ordererClassName={ordererData[1].ordererClassName}
          orderLabel={ordererData[1].orderLabel}
          orderType={ordererData[1].orderType}
          orderName={ordererData[1].orderName}
          orderPlaceholder={ordererData[1].orderPlaceholder}
        />
        <OrderCom
          ordererClassName={ordererData[2].ordererClassName}
          orderLabel={ordererData[2].orderLabel}
          orderType={ordererData[2].orderType}
          orderName={ordererData[2].orderName}
          orderPlaceholder={ordererData[2].orderPlaceholder}
        />
    </div>
  )
}

export default OrdererContainer