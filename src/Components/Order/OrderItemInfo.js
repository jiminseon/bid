import React from 'react'

const OrderItemInfo = () => {
  return (
    <div className='orderItem'>
          <div className='orderImg'>
            {/* 이미지 */}
          </div>
          <div className='orderInfo'>
            <div className='orderTitle'>
                untitle
            </div>
            <div className='orderEndTime'>
              5일 14시간 ...
            </div>
            <div className='orderShortcut'>
              바로가기 
            </div>
          </div>
          <div className='orderPrice'>
            160,000원
          </div>
          <div className='orderMyBid'>
            160,000원
          </div>
          <div className='orderState'>
            낙찰
          </div>                    
        </div>
  )
}

export default OrderItemInfo