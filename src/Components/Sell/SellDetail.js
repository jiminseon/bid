import React from 'react'
import '../Sell/Sell.css'
import DetailGrid from './DetailGrid'
import DetailMain from './DetailMain'

const SellDetail = () => {
  return (
    <div className='sellDetail'>

      <div className='sellDetail-container'>
        <DetailMain/>
        <div className='detail-line'></div>
        <DetailGrid/>
      </div>

      <button className='submitButton'>상품 등록</button>
    </div>
  )
}

export default SellDetail