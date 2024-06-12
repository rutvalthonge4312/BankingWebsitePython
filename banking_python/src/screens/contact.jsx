import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer'


function Contact() {
    const navigate=useNavigate();
  return (
    
    <div className="container-fluid">
    <Navbar/>
    <div className="back-arrow position-absolute top-5 start-0 p-3">
            <FontAwesomeIcon icon={faArrowLeft} size="2x" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
    </div>
      <div className="container">
      <h1>About <strong>CourseHub</strong></h1>
      <p className="lead">Your go-to platform for high-quality, comprehensive online courses.</p>
        <div className='text-end'>
        <img src="https://cdni.iconscout.com/illustration/free/thumb/free-about-us-2061897-1740019.png" alt="" />

        </div>
      <section className="mt-4">
        <h2><strong>Our</strong> Mission</h2>
        <p>
          At CourseHub, our mission is to provide accessible, affordable, and engaging online education to learners worldwide.
          We believe that education is a fundamental right and strive to offer courses that are both high in quality and wide in variety.
        </p>
        <div className="text-start">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhby3zuqh4Ez-L_aU7W8Fs7j6G-TOJNUj20Q&s" alt="" />
        </div>
      </section>
      
      <section className="mt-4">
        <h2>Our <strong>Vision</strong></h2>
        <p>
          We envision a world where everyone has the opportunity to learn and grow, regardless of their geographical location or financial status.
          By harnessing the power of technology, we aim to bridge the educational gap and empower individuals to achieve their personal and professional goals.
        </p>
        <div className="text-end">
            <img src="https://roland.ac.in/site/wp-content/uploads/2019/04/Vision.png" alt="" />
        </div>
        
      </section>
      
      <section className="mt-4">
        <h2><strong>Our</strong> Team</h2>
        <p>
          Our team is composed of passionate educators, industry experts, and tech enthusiasts committed to creating a seamless and enriching learning experience.
          We work tirelessly to update our content and bring you the latest in educational trends and technology.
        </p>
        <div className="text-start">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/join-our-team-4880594-4062783.png?f=webp" alt="" />
        </div>
      </section>
      
      <section className="mt-4">
        <h2>Contact <strong>Us</strong></h2>
        <p>
          Have questions or feedback? We would love to hear from you! Reach out to us at <a href="mailto:support@coursehub.com">support@coursehub.com</a>.
        </p>
      </section>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact