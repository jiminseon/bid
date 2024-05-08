import React from 'react'
import CategoryBar from '../Common/CategoryBar'
import SequenceContainer from './SequenceContainer'
import GoodsGrid from './GoodsGrid'

const ShopMain = () => {
  return (
    <div>
      <CategoryBar/>
      <SequenceContainer/>
      <GoodsGrid/>
    </div>
  )
}

export default ShopMain