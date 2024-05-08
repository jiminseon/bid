import React from 'react'
import { useState } from 'react';
import HoverCard from './HoverCard';

const CategoryCom = ({ CategoryName }) => {

  // const [ isClicked, setClicked ] = useState(false);
  // const handleClick = () => {
  //   setClicked(!isClicked);
  // };

  const [isHovered, setHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // onClick={handleClick}
      className={`category ${isHovered ? 'clicked' : ''}`}
    >
      <span>
        {CategoryName}
      </span>
      <img src='/image/MoreIcon.png' alt='more' className='categoryImg'></img>
      {isHovered && <HoverCard/>}
    </button>
  )
}

export default CategoryCom