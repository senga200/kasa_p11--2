import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <nav className='navbar'>
      <NavLink to='/'>
      <div className='navbar__logo'>
        <img src='/logoKasa.svg' alt='logo' />
      </div>
      </NavLink>
      
      <div className='navbar__linkNav'>
        <NavLink to='/'>
        <div className='accueil'>Accueil</div>
        </NavLink>
        <NavLink to='/about'>
        <div className='about'>A propos</div>
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
