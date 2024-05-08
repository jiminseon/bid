import React from 'react'

const DetailImageCom = ({BigImageUrl, BigimageName}) => {
  return (
    <div className='bigImages'>   
        <img className='bigimage' src={BigImageUrl} alt={BigimageName}></img>
    </div>
  )
}

export default DetailImageCom
