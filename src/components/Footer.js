import React from 'react'
import './Footer.css';
import logo from '../assests/logo.png';
import linke from '../assests/linke.png';
import facebook from '../assests/facebook.png';
import twitter from '../assests/twitter.png';
import { useNavigate } from 'react-router-dom';
function Footer() {

    const navigate=useNavigate();

    const handleNavigate=(path)=>{
           navigate(path); 
           window.scrollTo(0,0);
    }

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

      <div className='poin-ter'>
        <h4>Pages</h4>
        <p onClick={() => handleNavigate('/')}>Home</p>
        <p onClick={() => handleNavigate('/')}>Benefits</p>
        <p onClick={() => handleNavigate('/courses')}>Our Courses</p>
        <p onClick={() => handleNavigate('/')}>Our Testimonials</p>
        <p onClick={() => handleNavigate('/price')}>Our Pricing</p>
      </div>

      <div>
        <h4>About Us</h4>
        <p>Company</p>
        <p>Achievements</p>
        <p>Our Goals</p>
      </div>

      <div>
        <h4>Social Profiles</h4>
        <div className='d-flex gap-2 social'>
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
