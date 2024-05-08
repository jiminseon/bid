import React from 'react'
import '../Sell/Sell.css'

const MainImageUp = () => {
  return (
    <button className='mainImage-container'>
      <div className='button-container'>
        <div className='mainImageUp-icon-container'>
          <img src='/image/ImageUpIcon.png' alt='mainImageUpload'/>
        </div>
        <div className='mainImageUp-text'>상품 이미지 업로드</div>
      </div>
    </button>
  )
}

export default MainImageUp