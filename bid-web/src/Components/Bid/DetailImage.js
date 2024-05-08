import React from 'react'
import BigImage from './DetailImageCom'

const DetailImage = () => {
    /*db 연결 후 수정*/ 
    const bigImageData = [
        {image: '', name: "img1"}
    ];

  return (
    <div className='detailImage-containerTop'>
      <div className='detailImage'>   
          <div className='imageTitle'>Bigimage</div>
          <BigImage 
                  BigImageUrl={bigImageData[0].image}
                  BigimageName={bigImageData[0].name}
          />
      </div>
    </div>
  )
}

export default DetailImage