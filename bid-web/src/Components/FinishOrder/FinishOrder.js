import React from 'react'
import FinishDetail from './FinishDetail'
import './FinishOrder.css'
import { useNavigate } from 'react-router-dom';

const FinishOrder = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className='finishOrderTop-container'>
      <div className='finishOrderTop'>
        <div className='finishOrder-container'>
          <div className='finshOrder'>
            <div className='finishOrderTitle'>주문완료</div>
            <FinishDetail />
            <div className='okBtn-container'>
              <button type='button' className='okBtn' onClick={goToHome}>확인</button>
            </div>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default FinishOrder