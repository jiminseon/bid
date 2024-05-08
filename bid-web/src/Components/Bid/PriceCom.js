import React from 'react'

const PriceCom = ({topClassName, labelClass, priceClass, priceLabel, price}) => {
  return (
    <div className={topClassName}>
      <span className={labelClass}>{priceLabel}</span>
      <span className={priceClass}>{price}</span>            
    </div>
  )
}

export default PriceCom