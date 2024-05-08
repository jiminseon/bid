import React from 'react'
import './Header.css'
import Logo from './Logo'
import SearchBar from './SearchBar'
import MenuBar from './MenuBar'
import MypageBar from './MypageBar'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-container'>
        <Logo/>
        <SearchBar/>
        <MenuBar/>
        <MypageBar/>
      </div>
    </div>
  )
}

export default Header