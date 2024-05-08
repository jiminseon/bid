import React from 'react'
import Menu from './Menu';

const MenuBar = () => {
  const menuData = [
    { id: "/sell", text: "SELL", className: "sell-menu" },
    { id: "/shop", text: "SHOP", className: "menu" },
    { id: "/", text: "HOW", className: "menu" }
  ];

  return (
    <div className='menuBar'>
      <Menu
        PageUrl={menuData[0].id}
        MenuName={menuData[0].text}
        className={menuData[0].className}
      />
      <Menu
        PageUrl={menuData[1].id}
        MenuName={menuData[1].text}
        className={menuData[1].className}
      />
      <Menu
        PageUrl={menuData[2].id}
        MenuName={menuData[2].text}
        className={menuData[2].className}
      />
    </div>
  )
}

export default MenuBar