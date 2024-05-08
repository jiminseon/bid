import React from 'react';
import '../Bid/Bid.css'

const DepositModal = ({ onClose }) => {

  const handleOverlayClick = () => {
    onClose();
  };

  /*삭제함수 추후 추가 */


  return (
    <>
      <div className="modalTop">
        <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
          <div className='depositTitle'>
            예치금이 부족합니다. <br/>
            충전소로 이동하시겠습니까?
          </div>
          <div className='delBtnContainer'>
            <button className='cancel' onClick={handleOverlayClick}>
              취소
            </button>
            <button className='delBtn'>
              충전하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepositModal;