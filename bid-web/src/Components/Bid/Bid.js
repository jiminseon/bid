import React from 'react'
import './Bid.css'
import BidInfo from './BidInfo';
import BidDetail from './BidDetail';
import CategoryBar from '../Common/CategoryBar';

const Bid = ({ children }) => {
  return (
    <>
      <CategoryBar/>
      <div className='bidPage'>
        <div className='bidPage-containerTop'>
          <div className='bidPage-container'>
            <BidInfo />
            <BidDetail />
          </div>
        </div> 
      </div>
    </>
  )
}

export default Bid