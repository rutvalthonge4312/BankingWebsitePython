import React from 'react'
import img from '../assetes/homePage.png'
function HomeInfo() {
  return (
    <div className="container">
        <div className="col-md-12 d-flex justify-content-center align-items-center">
            <div className=' p-3'>
                <h2 className='my-4'>Digital banking Made forDigital User's</h2>
                <p className='my-4'>Gopay is an all-in-one mobile banking app chock full of all the tools, tips, and tricks you need to take control of your finances,</p>
                <button className='btn btn-success rounded w-50 '>Sign Up Now!</button>
            </div>
            <div className=' p-3'>
                <img src={img} alt="Bank Image" />
            </div>
        </div>
    </div>
  )
}

export default HomeInfo