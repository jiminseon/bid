import React from 'react'
import '../Shop/ShopMain.css'
import GoodsImg from './GoodsImg'
import GoodsTime from './GoodsTime'
import GoodsName from './GoodsName'
import GoodsPrice from './GoodsPrice'
import GoodsLike from './GoodsLike'

const GoodsCom = () => {
  return (
    <div className='goodsComponent'>
      <GoodsImg/>
      <GoodsTime/>
      <div className='goodsNamePriceLike'>
        <div className='goodsNamePrice'>
          <GoodsName/>
          <GoodsPrice/>
        </div>
        <GoodsLike/>
      </div>
    </div>
  )
}

export default GoodsCom