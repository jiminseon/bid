import React, { useState } from 'react'
import DropDown from './DropDownCat'

import '../Sell/Sell.css'

const DetailMain = () => {

  const [ view, setView ] = useState(false);

  return (
    <div className='mainDetail'>
      <div className='mainDetail-container'>
        <div className='mainDetail-name'>경매 상품 제목</div>
        <input className='mainDetail-input'></input>
      </div>

      <div className='mainDetail-container'>
        <div className='mainDetail-text'>카테고리</div>
        <ul className={`cat-dropdown ${view ? 'active' : ''}`} onClick={() => {setView(!view)}}>
          <div className='cat-dropdown-text'>{""}</div>
          <img src='/image/MoreIcon.png' alt='dropdown' className='cat-dropdown-img'></img>
	        {view && <DropDown />} 
        </ul>
      </div>

      <div className='mainDetail-explain-container'>
        <div className='mainDetail-more'>제품 설명</div>
        <textarea
          className='mainDetail-moreInput'
          type='text-area'
        />
      </div>
    </div>
  )
}

export default DetailMain