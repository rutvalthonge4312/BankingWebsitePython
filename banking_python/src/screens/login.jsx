import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import loginImg from '../assetes/login.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../components/Footer'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import api from '../api/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import getHeaders from '../api/header';
import { PushSpinner } from 'react-spinners-kit';
import { useDispatch } from 'react-redux';
import { addUser } from '../featurs/userSlice';
function Login() {
  const navigate = useNavigate()
  const [phone, setPhone] = useState(0)
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()




  const loginHandler = () => {
    setLoading(true);
    const apiUrl = 'user/login/';
    api.post(
      apiUrl,
      {
        password: password,
        phone: phone,
        getHeaders,
      }
    ).
    then((response) => {
      toast.success(response.data.message);
      console.log(response.data.data)
      dispatch(addUser(response.data.data))
      console.log(response.data.data)
      localStorage.setItem('userData',JSON.stringify(response.data.data));
      navigate('/user')
    }).
    catch((error) => {
      console.log(error)
      toast.error(error.response.data.message);
    }).finally(() => {
      setLoading(false);
    })
  }


  return (
    <div className="container-fluid position-relative">
      <Navbar />
      <div className="back-arrow position-absolute top-5 start-0 p-3">
        <FontAwesomeIcon icon={faArrowLeft} size="2x" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
      </div>
      <ToastContainer />
      <div className="container loginForm position-relative border shadow p-3 mt-5">
        <div className="p-3">
          <div className="form-floating mb-3">
            <input type="number" className="form-control" id="floatingInput" placeholder="98XXXXXXXXXX"
              onChange={(e) => {
                setPhone(e.target.value)
              }}
            />
            <label htmlFor="floatingInput">Mobile Number</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
            <label htmlFor="floatingPassword">Password</label>
            <div className="text-end">
              <Link style={{ color: 'red', textDecoration: 'none' }} to="/forgot-password">Forgotten Password?</Link>
            </div>
          </div>
          <div className="text-center mt-4">
            <button id="signupButton" className="btn btn-success w-75 text-center" onClick={loginHandler}>
              {
                loading ? (
                  <div className="container  d-flex justify-content-center align-items-center">
                    <PushSpinner size={30} color="white" />
                  </div>
                ) : 'Log in'
              }
            </button>
          </div>
        </div>
        <hr className='w-75 mx-auto' />
        <h5 className="text-center"><strong>OR</strong></h5>
        <div className="container text-center">
          <p className="border mobile-login border-black btn p-2 rounded ">Log in with mobile Number</p>
        </div>
      </div>

      <img id="signUpImage" src={loginImg} className="img-fluid position-absolute top-0 start-0 w-100 h-100" alt="Log in " style={{ zIndex: -1 }} />
      <div className="d-flex justify-content-center mt-5">
        <Footer />
      </div>
    </div>
  );
}
export default Login