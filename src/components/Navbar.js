import React from 'react'
import '../components/Navbar.css';
import logo from '../assests/logo.png';

function Navbar() {
  return (
    <div className='nav-bar'>
      <div className='logo'>
        <img src={logo} alt='logo'/>
        <h4>SkillBridge</h4>
      </div>

      <ul>
        <li>Home</li>
        <li>Course</li>
        <li>About Us</li>
        <li>Price</li>
      </ul>
    </div>
  )
}

export default Navbar
