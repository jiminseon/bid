import React from 'react'
import OrdererContainer from './OrdererContainer'

const Orderer = () => {
  return (
    <div className='ordererTop'>
      <div className='ordererTitle'>
        배송 정보 |&nbsp; <span style={{color: '#808080'} }>주문자</span>
      </div>
      <OrdererContainer />
    </div>
  )
}

export default Orderer