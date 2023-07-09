import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom';


function Navbar() {
  const location = useLocation();

  return (
    <nav className='navbar'>
      <NavLink to='/' style={location.pathname === '/' ? { textDecoration: 'underline' } : {}}>
        <div className='navbar__logo'>
          <img src='/logoKasa.svg' alt='logo' />
        </div>
      </NavLink>
      
      <div className='navbar__linkNav'>
        <NavLink to='/' style={location.pathname === '/' ? { textDecoration: 'underline' } : {}}>
          <div className='accueil'>Accueil</div>
        </NavLink>
        <NavLink to='/about' style={location.pathname === '/about' ? { textDecoration: 'underline' } : {}}>
          <div className='about'>A propos</div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar
