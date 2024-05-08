import React from 'react'
import './BidPrice.css'
import Price from './Price'
import { useState} from 'react'
import DeleteModal from './DelteModal';

const ItemDelete = () => {

  const [modalType, setModalType] = useState(null);

  const openModal = (type) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  const handleItemDeleteClick = () => {
    openModal('/delete');
  };

  return (
    <div>
      <div className='price-container'>
        <Price />
        <div className='endTime'>
            <span>마감날짜</span>
        </div>
        <div className='bidPrice-container' style={{position: 'relative'}}>
            <form id='priceForm'>
                <label>입찰금액<input type="text" className="inputBid" style={{position: 'absolute', right: '0'}}/></label>
                <p className='bidHigh'>다음 입찰 금액은  입니다.</p>
            </form>
        </div>
      </div>
      <div className='bidBtn'>
        <div className='buyBar'>
          <button className='linkCopy' style={{marginLeft: '13.375rem'}}>
            링크 복사
          </button>
          <button className='deleteBtn' onClick={handleItemDeleteClick}>
            삭제하기
          </button>   
          {modalType === '/delete' && (
            <DeleteModal onClose={closeModal} />
          )}      
        </div>
      </div>
    </div>
  )
}

export default ItemDelete