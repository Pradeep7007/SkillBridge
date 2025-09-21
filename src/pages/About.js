import React from 'react'
import './About.css';
import Offer from '../components/Offer';
import { achievements, goals } from '../assests/Deatils';
import Navbar from '../components/Navbar';

function About() {
  return (
    <div>
      <Offer/>
      <Navbar/>
      <div className='container-fluid all'>

        <h2 className='mt-3'>Our Acheivements</h2>
        <p className='text-center'>Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements</p>
      

      <div className='achievement-box'>
        {achievements.map((app,index)=>(
            <div className='achi-box'>
                <div>
                    <img 
                    src={app.img} 
                    alt='alt img'
                    style={{width:'40px',height:'40px'}}/>
                </div>
                <h5 className='mt-2'>{app.title}</h5>
                <p>{app.explanation}</p>
            </div>
        ))}
      </div>


      <h2 className='mt-3 mb-2'>Our Goals</h2>
      <p className='text-center'>At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact. Through our carefully crafted courses, we aim to
</p>
      <div className='achievement-box'>
        {goals.map((app,index)=>(
            <div className='achi-box'>
                <div>
                    <img 
                    src={app.img} 
                    alt='alt img'
                    style={{width:'40px',height:'40px'}}/>
                </div>
                <h5 className='mt-2'>{app.title}</h5>
                <p>{app.explanation}</p>
            </div>
        ))}
      </div>

      <div className='together-box mt-3'>
        <h2 ><span>Together</span>, Let's Shape The Future Of Digital Innovation</h2>
        <p>Join us on this exciting learning journey and unlock your potential in design and development.</p>
      </div>

    </div>
    </div>
  )
}

export default About
