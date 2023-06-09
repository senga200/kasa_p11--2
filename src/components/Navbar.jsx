import React from 'react'
import './Navbar.css'


function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <img src='logoKasa.svg' alt='logo' />
      </div>
      <div className='navbar__linkNav'>
        <div className='accueil'>Accueil</div>
        <div className='about'>A propos</div>
      </div>
    </nav>
  )
}

export default Navbar
