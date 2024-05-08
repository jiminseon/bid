import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import PaymentDetail from './PaymentDetail'
import DepositModal from './../FinishOrder/DepositModal';

const Payment = () => {
  const navigate = useNavigate();
  const [finalpay, setFinalpay] = useState(257500); 
  const [isDeposit, setisDeposit] = useState(false);
  const [modalType, setModalType] = useState(null);

  const clicked = () => {
    if (isDeposit === true)
      navigate("/finishOrder");
    else 
      openModal('/deposit');    
  };


  const openModal = (type) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };


  return (
    <div className='paymentInfoTop'>
      <div className='paymentInfotTop-Title'>
        최종 결제 정보
      </div>
      <div className='paymentTop'>
        <div className='payment-container'>
          <div className='paymentTitle-container'>
            <div className='finalPayTitle'>최종 결제 금액</div><div className='finalPay'>{finalpay.toLocaleString("ko-KR")} 원</div>
          </div>
          <PaymentDetail finalpay={finalpay} setisDeposit={setisDeposit} />
          <div className='payBtn-container'>
            {isDeposit === true ? (
               <button form='deliveryFrom' className='payBtn' onClick={clicked}>결제하기</button> 
              ) : <button type='button' className='payBtn' onClick={clicked}>결제하기</button>  }
            {modalType === '/deposit' && (
              <DepositModal onClose={closeModal} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment