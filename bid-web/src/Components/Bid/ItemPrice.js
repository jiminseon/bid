import React from 'react'
import './BidPrice.css'
import Price from './Price'
import { useState, useEffect } from 'react'
import Toast from "./Toast";
import { useNavigate } from 'react-router-dom'

const ItemPrice = () => {
  const navigate = useNavigate();
  const [bidPrice, setBidPrice] = useState('');
  const [bidhigh, setBidhigh] = useState(0);
  const [bidImmediate, setbidImmediate] = useState(0);
  const [ToastStatus, setToastStatus] = useState(false);
  const [ToastMsg, setToastMsg] = useState("");
  const [goToBid, setGoToBid] = useState(false);

  const handleInputBidPrice = e => {
    setBidPrice(e.target.value);
  }

  useEffect(() => {
    if (ToastStatus) {
      setTimeout(() => setToastStatus(false), 2000);
    }

    if(goToBid) {
      setTimeout(() => navigate("/Order"), 1000);
    }
  }, [ToastStatus, goToBid]);

  const BidCheck = () => {
    if (bidPrice > bidhigh) { //bidPrice(input값) bidhigh(현재 가격)
      setToastStatus(true);
      setToastMsg("입찰성공! 최고 금액 입찰자입니다.");
      setGoToBid(true);

    } else {
      setToastStatus(true);
      setToastMsg("더 높은 금액으로 재입찰하세요");
    }

  };

  const BidOrder = () => {
    if (bidPrice > bidImmediate)
      navigate("/Order");
  };
  

  return (
    <div>
      <div className='price-container'>
        <Price setBidhigh={setBidhigh} setbidImmediate={setbidImmediate} />
        <div className='endTime'>
            <span>마감날짜</span>
        </div>
        <div className='bidPrice-container' style={{position: 'relative'}}>
            <form id='priceForm'>
                <label>입찰금액<input type="text" className="inputBid" value={bidPrice} onChange={handleInputBidPrice} style={{position: 'absolute', right: '0'}}/></label>
                <p className='bidHigh'>다음 입찰 금액은 {bidhigh.toLocaleString("ko-KR")} 원 이상입니다.</p>
                {ToastStatus && (
                  <>
                    <Toast msg={ToastMsg} />
                  </>
              )}
            </form>
        </div>
      </div>
      <div className='bidBtn'>
        <div className='buyBar'>
          <button type='button' className='bidding' onClick={BidCheck}>
            입찰하기
          </button>
          <button type='button' className='buyNow' onClick={BidOrder}>
            즉시 구매
          </button>
          <button className='favorite'>
            관심 상품
          </button>
          <button className='linkCopy'>
            링크 복사
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemPrice