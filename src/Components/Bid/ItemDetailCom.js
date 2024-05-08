import React from 'react'

const ItemDetailCom = ({firstTxt, secondTxt, thirdTxt, fourthTxt}) => {
  return (
    <div className='detailBox'>
      <div className='leftBox'>
        <div className='firstBox'>{firstTxt}</div>
        <span className='secondBox'>{secondTxt}</span>
      </div>
      <div className='rightBox'>
        <div className='thirdBox'>{thirdTxt}</div>
        <span className='fourthBox'>{fourthTxt}</span>
      </div>
    </div>
  )
}

export default ItemDetailCom