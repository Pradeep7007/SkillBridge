import React from 'react'
import './Footer.css';
import logo from '../assests/logo.png';
import linke from '../assests/linke.png';
import facebook from '../assests/facebook.png';
import twitter from '../assests/twitter.png';
function Footer() {
  return (
    <div className='d-flex justify-content-between p-4'>
      <div >
        <img 
        src={logo} 
        alt='logo'
        style={{width:'40px'}}/>
        <p>sample@skillbridge.com</p>
        <p>+91 1234567890</p>
        <p>Somewhere in world</p>
      </div>

      <div>
        <h4>Home</h4>
        <p>Benefits</p>
        <p>Our Courses</p>
        <p>Our Testimonials</p>
        <p>Our Pricing</p>
      </div>

      <div>
        <h4>About Us</h4>
        <p>Company</p>
        <p>Achievements</p>
        <p>Our Goals</p>
      </div>

      <div>
        <h4>Social Profiles</h4>
        <div className='d-flex gap-2'>
            <img src={facebook} alt='logo'
            style={{width:'40px'}}/>
            <img src={linke} alt='logo'
            style={{width:'40px'}}/>
            <img src={twitter} alt='logo'
            style={{width:'40px'}}/>
        </div>
      </div>
    </div>
  )
}

export default Footer
