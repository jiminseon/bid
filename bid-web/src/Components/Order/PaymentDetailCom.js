import React from 'react'

const PaymentDetailCom = ({payDetailTitle, payDetailText}) => {
  return (
    <div className='paymetDetail-container'>
      <div className='payDetailLeft'>{payDetailTitle}</div>
      <div className='payDetailRight'>{payDetailText}</div>
    </div>
  )
}

export default PaymentDetailCom