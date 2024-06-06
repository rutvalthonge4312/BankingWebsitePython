import React from 'react'
import Navbar from '../components/Navbar'
import signupImg from '../assetes/signup.png'
import { Link } from 'react-router-dom'

function Signup() {
    return (
      <div className='container-fluid'>
          <Navbar/>
          <h2 className='text-start my-2  mt-3'><strong>Hey User,Fill the Signup Form Below</strong></h2>
          <div className='position-relative'>
              <form className=' d-flex p-2  container rounded position-relative' style={{ zIndex: 2 }}>
                  <div className='col-md-12   w-100'>
                      <div className="form-floating  mb-3">
                          <input type="text" className="form-control" id="fName" placeholder="First Name"/>
                          <label htmlFor="fName">First Name</label>
                      </div>
                      <div className="form-floating mb-3">
                          <input type="text" className="form-control" id="lName" placeholder="Last Name"/>
                          <label htmlFor="lName">Last Name</label>
                      </div>
                      <div className="form-floating mb-3">
                          <input type="number" className="form-control" id="mobileNumber" placeholder="Mobile Number"/>
                          <label htmlFor="mobileNumber">Mobile Number</label>
                          <div className='text-end'>
                              <button className='btn btn-secondary m-1'>Send Otp</button>
                          </div>
                      </div>
                      <div className="form-floating mb-3">
                          <input type="email" className="form-control" id="email" placeholder="Email Id"/>
                          <label htmlFor="email">Email Id</label>
                          <div className='text-end'>
                              <button className='btn btn-secondary m-1'>Send Otp</button>
                          </div>
                      </div>
                      <div className="form-floating mb-3">
                          <input type="password" className="form-control" id="password" placeholder="Set Password"/>
                          <label htmlFor="password">Set Password</label>
                      </div>
                      <div className="form-floating mb-3">
                          <input type="password" className="form-control" id="rePassword" placeholder="Re-set Password"/>
                          <label htmlFor="rePassword">Re-set Password</label>
                      </div>
                      <p className='text-end'>
                        <Link to='/' style={{ color: 'red', textDecoration: 'none' }}>
                            Already Have Account?
                        </Link>
                      </p>

                      <div className='text-center my-2'>
                          <button id='signupButton' className='btn btn-success w-75 '>Sign Up</button>
                      </div>
                      
                  </div>
                  
              </form>
              <img id='signUpImage' src={signupImg} className='img-fluid position-absolute top-0 start-0 w-100 h-100'  alt="Sign Up Background Image" />
          </div>
      </div>
    )
  }
  

export default Signup