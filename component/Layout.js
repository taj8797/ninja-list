import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({children}) {
  return (
    <div className="containt"> 
    <Navbar/>

        {children}
    
        <Footer/>
    
    </div>
  )
}

export default Layout