import React from 'react'
import{ useState } from 'react';
import OrderCom from './OrderCom';
import Postcode from './Postcode'
import {Modal, Button} from 'antd';

const OrderAddContainer = () => {
  const [zoncode, setZoncode] = useState('');
  const [add, setAdd] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  //value 값 정해지면 추가하기 
  const addressData = [
    {ordererClassName: 'recipientName', orderLabel: '수령인', orderType: 'text', orderName: 'recipientName', orderPlaceholder: ' 수령인의 이름을 입력하세요'},
    {ordererClassName: 'recipientPhone', orderLabel: '연락처', orderType: 'number', orderName: 'recipientPhone', orderPlaceholder: ' -없이 입력'},
    {ordererClassName: 'deliverAdd', orderLabel: '주소', orderType: 'text', orderName: 'deliverAdd', orderPlaceholder: ' 우편번호를 입력하세요', value: 'add'},
    {ordererClassName: 'deliverMsg', orderLabel: '배송 메세지', orderType: 'text', orderName: 'deliverMsg', orderPlaceholder: ' 배송메세지를 입력하세요'}
  ];

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };


  return (
    <div className='addContainer'>
      <OrderCom 
          ordererClassName={addressData[0].ordererClassName}
          orderLabel={addressData[0].orderLabel}
          orderType={addressData[0].orderType}
          orderName={addressData[0].orderName}
          orderPlaceholder={addressData[0].orderPlaceholder}
      />
      <OrderCom 
          ordererClassName={addressData[1].ordererClassName}
          orderLabel={addressData[1].orderLabel}
          orderType={addressData[1].orderType}
          orderName={addressData[1].orderName}
          orderPlaceholder={addressData[1].orderPlaceholder}
      />
      <div className='deliverAdd'>
        <div className='dot'></div>
        <div className='orderLabelClassName'>주소</div>
        <input className='deliverZoncode' type='text' name='deliverZoncode' placeholder=' 우편번호를 입력하세요' value={zoncode}/>
        <Button className='zoneBtn' onClick={onToggleModal}>우편번호 검색</Button>
        {isOpen && (
          <Modal
            visible={true}
            onOk={onToggleModal}
            onCancel={onToggleModal} 
          >
            <Postcode setZoncode={setZoncode} setAdd={setAdd} setIsOpen={setIsOpen}/>
          </Modal>
        )}
      </div>
      <div style={{height: '9.25rem'}}>
        <input className='deliverAdderess' name='deliverAdd' value={add}/>
        <input className='deliverAddPlus' name='deliverAddPlus' placeholder='상세주소를 입력하세요. (건물, 아파트, 동/호수 입력)'/> 
      </div>
      <OrderCom 
          ordererClassName={addressData[3].ordererClassName}
          orderLabel={addressData[3].orderLabel}
          orderType={addressData[3].orderType}
          orderName={addressData[3].orderName}
          orderPlaceholder={addressData[3].orderPlaceholder}
      />
    </div>
  )
  }

export default OrderAddContainer