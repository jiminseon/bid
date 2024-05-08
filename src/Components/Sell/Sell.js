import React from 'react'
import MainImageUp from './MainImageUp'
import CategoryBar from '../Common/CategoryBar'
import SellDetail from './SellDetail'
import MoreImageUp from './MoreImageUp'

import '../Sell/Sell.css'

const Sell = () => {
  return (
    <div>
      <CategoryBar/>
      <div className='sell'>
        <div className='imgUp-container'>
          <MainImageUp/>
          <MoreImageUp/>
        </div>
        <SellDetail/>
      </div>
    </div>
  )
}

export default Sell