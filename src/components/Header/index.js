import React from 'react'
import './header.css'
import Button from '../../widgets/button'
const Header = () => {
    return (
        <div className = "header ">
          <h1 className="main_title">SIMPLE CSS TEMPLATE</h1>
          <h5 className="subtitle">WELCOME TO OUR CHURCH</h5>
          <Button/>

      </div>
    )
}

export default Header