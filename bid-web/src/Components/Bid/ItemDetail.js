import React from 'react'
import ItemDetailCom from '../Bid/ItemDetailCom';

const ItemDetail = () => {
  
  const ItemDetailBox = [
    {firstTxt: '시작 가격', secondTxt: '10000', thirdTxt: '종료 일시', fourthTxt: '3시간 전'},
    {firstTxt: '상품의 상태', secondTxt: '새 상품', thirdTxt: '판매자 ID', fourthTxt: 'teamBid'},
    {firstTxt: '입찰 건수', secondTxt: '16건'}
  ];

  return (
    <div className='ItemDetail'>
      <ItemDetailCom
        firstTxt={ItemDetailBox[0].firstTxt}
        secondTxt={ItemDetailBox[0].secondTxt}
        thirdTxt={ItemDetailBox[0].thirdTxt}
        fourthTxt={ItemDetailBox[0].fourthTxt}
      />
     <ItemDetailCom
        firstTxt={ItemDetailBox[1].firstTxt}
        secondTxt={ItemDetailBox[1].secondTxt}
        thirdTxt={ItemDetailBox[1].thirdTxt}
        fourthTxt={ItemDetailBox[1].fourthTxt}
      />
     <ItemDetailCom
        firstTxt={ItemDetailBox[2].firstTxt}
        secondTxt={ItemDetailBox[2].secondTxt}
      />
    </div>
  )
}

export default ItemDetail