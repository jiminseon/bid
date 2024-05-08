import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const Menu = ({ PageUrl, MenuName, className }) => {
  return (
    <Link
      to={PageUrl}
      className={className}      
    >
      <span>
        {MenuName}
      </span>
    </Link>
  )
}

export default Menu