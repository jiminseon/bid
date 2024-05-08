import React from 'react'
import './Header.css'

const SearchBar = () => {
  return (
    <div className='searchBar'>
        <img src='image/searchIcon.png' alt='searchIcon' className='searchIcon'></img>
        <input className='searchInput' type='search' placeholder='Search'></input>
    </div>
  )
}

export default SearchBar