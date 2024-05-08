import React from 'react'
import '../Common/Common.css'
import CategoryCom from './CategoryCom';

const CategoryBar = () => {
  const categoryData = [
    { name: "DESIGNERS" },
    { name: "MENSWEAR" },
    { name: "WOMENSWEAR" }
  ];

  return (
    <div className='categoryBar'>
      <CategoryCom CategoryName={categoryData[0].name}/>
      <CategoryCom CategoryName={categoryData[1].name}/>
      <CategoryCom CategoryName={categoryData[2].name}/>
    </div>
  )
}

export default CategoryBar