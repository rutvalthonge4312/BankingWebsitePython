import React from 'react'
import img from '../assetes/homePage.png'
import recharge from '../assetes/recharge.png'
import transaction from '../assetes/transaction.png'
import account from '../assetes/account.png'
import { useNavigate } from 'react-router-dom'
function HomeInfo() {
  const navigate=useNavigate();
  const gotToSignUp=()=>{
    navigate('/signup');
  }
  return (
    <div className="container">
        <div className="col-md-12 homeInfo d-flex justify-content-center align-items-center">
            <div className=' p-3'>
                <h2 className='my-4'>Digital banking Made for <strong>Digital</strong> User's</h2>
                <p className='my-4'>Gopay is an all-in-one mobile banking app chock full of all the tools, tips, and tricks you need to take control of your finances,</p>
                <button onClick={gotToSignUp} className='btn btn-success rounded w-50 '>Sign Up Now!</button>
            </div>
            <div className=' p-3'>
                <img className='img-fluid' src={img} alt="Bank Image" />
            </div>
        </div>
        <div className="container my-3 row">
          <h2 className='text-center my-3'>Take your <strong>Transcation</strong> to the next level!</h2>
          <div className="col-md-4 mb-4">
            <div className="card mx-auto rounded shadow p-3 border border-none" style={{ width: '25rem' }}>
              <img src={transaction} className="card-img-top" alt='' />
              <h4>Transcation</h4>
              <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="card mx-auto rounded shadow p-3 my-3 border border-none" style={{ width: '25rem' }}>
              <img src={account} className="card-img-top" alt='' />
              <h4>Account Opeaning</h4>
              <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card mx-auto rounded shadow p-3 border border-none" style={{ width: '25rem' }}>
              <img src={recharge} className="card-img-top" alt='' />
              <h4>Recharge Mobile Number</h4>
              <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomeInfo