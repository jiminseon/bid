import React from 'react'
import GoodsCom from './GoodsCom';

const GoodsGrid = () => {
  const goodsData = Array.from({ length: 20 }, (_, index) => index + 1);

  /* 데이터 받아오는 것은 추후 구현 */
  return (
    <div className="goodsGrid-container">
      {/* Map over the array and render GoodsCom for each element */}
      {goodsData.map((item) => (
        <GoodsCom key={item} />
      ))}
    </div>
  )
}

export default GoodsGrid