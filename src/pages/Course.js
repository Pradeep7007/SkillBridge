import React from 'react'
import Offer from '../components/Offer'
import { coursepage } from '../assests/Deatils.js';
import './Course.css';
import Navbar from '../components/Navbar.js';


function Course() {
  return (
    <div>
      <Offer/>
      <Navbar/>
      <div className='container-fluid all'>

        <h2 className='text-center mt-3'>Online Courses on
Design And Development</h2>

        <div className="segments">
      {coursepage.map((course, index) => (
        <div className="seg-box" key={index}>
          <h4>{course.title}</h4>
          <p>{course.explanation}</p>

          <div className='d-flex justify-content-between mb-2'>
            <button>{course.duration}</button>
            <button>{course.level}</button>
          </div>

          <h6 className='text-center mt-2 text-decoration-underline'>Instructor: {course.instructor}</h6>
          <img src={course.img} alt={`${course.title} thumbnail`} />

          <h5>Curriculum</h5>

        <div className="curriculum">

        {course.curriculum.map((topic, i) => (
            <div className="curri-box" key={i}>
            <h5 style={{ fontWeight: 'bold' }}>{`0${i + 1}`}</h5>
            <p>{topic}</p>
            </div>
        ))}
        </div>

        <button className='d-block mx-auto w-50 view' style={{color:'white'}}>View Course</button>
        </div>
      ))}
    </div>

      </div>
    </div>
  )
}

export default Course
