import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to={'/'} className='logo'>
      <img src="image/bid-logo.png" alt="bid"></img>
    </Link>
  )
}

export default Logo