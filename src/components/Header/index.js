import React from 'react'
import './header.css'
import Button from '../../widgets/button'
import Title from  '../../widgets/typography/title'
const Header = () => {
    return (
        <div className = "header ">
          <h1 className="main_title">SIMPLE CSS TEMPLATE</h1>
          <Title>WELCOME TO OUR PLAYGROUND</Title>
          <Button title= "Join With Us"/>
      </div>
    )
}

export default Header