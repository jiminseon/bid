import React from 'react'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Header/>
      <Main>
        { children }
      </Main>
      <Footer/>
    </div>
  )
}

export default Layout