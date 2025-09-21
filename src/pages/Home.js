import React from 'react'
import Offer from '../components/Offer'
// import Navbar from '../components/Navbar'
import spark from '../assests/Icon Container.png'
import '../pages/Home.css';
import {apps, benefits,courses,testimonial} from '../assests/Deatils.js';
import video from '../assests/video.png';
import Navbar from '../components/Navbar.js';

function Home() {
  return (
    <div>
        <Offer/>
        <Navbar/>
        <div className='container-fluid all'>

            <div className='spark'>
                <img src={spark} alt='spark-img'
                style={{width:'40px',height:'40px'}}/>
                <h3 style={{fontWeight:'bold'}}><span style={{color:'#ff9500cf'}}>Unlock</span> Your Creative Potential</h3>
            </div> 

            <div className='spark-v2'>
                <h5 style={{fontWeight:'bold'}}>with Online Design and Development Courses.</h5>
                <p>Learn from Industry Experts and Enhance Your Skills.</p>
            </div>

            <div className='btns'>
                <button 
                style={{backgroundColor:'#ff9500e7',color:'white',
                border:'1px solid #ff9500e7'}}>
                Explore Courses</button>
                <button style={{backgroundColor:'white',border:'1px solid #C2C2C28F'}}>View Pricing</button>
            </div>

            <div className='apps'>
            <ul>
            {apps.map((app,index)=>(
            <li key={index}>
                <img src={app.img} alt={app.name} width={50} height={50} />
          </li>
        ))}
                </ul>
            </div>


        <div className='video'>
            <img 
            src={video} 
            alt='video'
            />
        </div>

        <div className='benefits mt-3'>
            <h2 style={{fontWeight:'bold'}}>Benefits</h2>
            <p>Learn at your own pace with flexible, expert-led courses that stay current with industry trends. Build real-world skills through hands-on projects and collaborative learning—everything you need to grow your career in design and development.</p>

            <div className='benefit-box'>
                {benefits.map((app,index)=>(
                   <div className='bene-box'>
                    <h2>{app.num}</h2>
                    <h4>{app.title}</h4>
                    <p>{app.explanation}</p>
                    </div> 
                ))}
            </div>
        </div>

        <div className='courses mt-3'>
            <h2 style={{fontWeight:'bold'}}>Our Courses</h2>

            <div className='courses-box'>
                {courses.map((app,index)=>(
                <div 
                key={index} 
                className='cour-box'
                >
                    <div className='cour-img'>
                        <img src={app.image} alt='course img'/>
                    </div>
                    
                    <div className='d-flex justify-content-between'>
                    <button className='dura'>{app.duration}</button>
                    <button className='dura'>{app.level}</button>
                    </div>
                    
                    <h5 className='mt-2 text-center text-decoration-underline'>Instructor: {app.teacher}</h5>
                    <p className='text-center'>{app.explanation}</p>
                    <button className='w-100 dura p-2'>{app.buttonText}</button>
                </div> 
                ))}
            </div>

            <div className='testimonial mt-3'>
                <h2 style={{fontWeight:'bold'}}>Our Testimonials</h2>
                <p></p>
                <div className='test-box '>
                    {testimonial.map((app,index)=>(
                        <div className='testi-box'>
                            <p>{app.explanation}</p>

                        <div className='d-flex justify-content-between'>
                            <div className='d-flex'>
                                <img src={app.image} alt='alt img' className='profile'/>
                            <p className='ms-2 mt-1'>{app.name}</p>
                            </div>
                            <div>
                                <button className='dura mt-1'>{app.btntext}</button>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>

        </div>
    
    </div>
  )
}

export default Home
