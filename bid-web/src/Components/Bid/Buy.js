import React from 'react'
// import { Link } from 'react-router-dom'

const Buy = ({ btnName, className }) => {
  return (
      <button type='submit' className={className} form='priceForm' >
        {btnName}
      </button>
  )
}

export default Buy