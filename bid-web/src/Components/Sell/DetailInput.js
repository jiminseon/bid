import React from 'react'
import '../Sell/Sell.css'

const DetailInput = ({ children }) => {
  return (
    <div className='detailInput-container'>
      <input className='detailInput' placeholder=''></input>
      { children }
    </div>
  )
}

export default DetailInput