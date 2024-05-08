import React from 'react';
import './Bid.css'

const DeleteModal = ({ onClose }) => {

  const handleOverlayClick = () => {
    onClose();
  };

  /*삭제함수 추후 추가 */


  return (
    <>
      <div className="modalTop">
        <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
          <div className='deleteTitle'>
            경매를 정말 삭제하시겠습니까?
          </div>
          <div className='delBtnContainer'>
            <button className='cancel' onClick={handleOverlayClick}>
              취소
            </button>
            <button className='delBtn'>
              삭제
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;