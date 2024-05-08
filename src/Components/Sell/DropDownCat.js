import React, { useState } from 'react'
import '../Sell/Sell.css'
import DropDownCatDetail from './DropDownCatDetail';

const DropDownCat = () => {
  const [ view, setView ] = useState(false);
  console.log('dropdown rendered');

  return (
    <ul className='cat-dropdown-menu'>
      <li className={`dropdown-detail ${view ? 'active' : ''}`} onClick={() => setView(!view)}>
        <span>MENSWEAR</span>
        {view && <DropDownCatDetail />}
      </li>
      <li>WOMENSWEAR</li>
    </ul >
  )
}

export default DropDownCat