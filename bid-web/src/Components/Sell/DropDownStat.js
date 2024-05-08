import React from 'react'

const DropDownStat = ({ onSelect }) => {
  return (
    <ul className='stat-dropdown-menu'>
      <li onClick={() => onSelect('새상품')}>새상품</li>
      <li onClick={() => onSelect('좋은 상태')}>좋은 상태</li>
      <li onClick={() => onSelect('약간의 사용감')}>약간의 사용감</li>
      <li onClick={() => onSelect('사용감 있음')}>사용감 있음</li>
    </ul >
  )
}

export default DropDownStat