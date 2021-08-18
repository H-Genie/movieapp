import React from 'react';
import './Navbar.css';
import { BiCameraMovie } from 'react-icons/bi'

function NavBar() {
  return (
    <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
      <div className="menu__logo">
        <a href="/">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <BiCameraMovie style={{ width: '30px', height: '30px' }} />
            &nbsp;&nbsp;&nbsp;Movie App
          </div>
        </a>

      </div>
    </nav>
  )
}

export default NavBar