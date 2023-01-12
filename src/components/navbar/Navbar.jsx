import React from 'react'
import logo from '../../assets/logo.svg'
import './navbar.css';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';


//BEM -> Block Element Modifier

const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt__navbar-links_logo'>
          <img src={logo} alt='logo'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar