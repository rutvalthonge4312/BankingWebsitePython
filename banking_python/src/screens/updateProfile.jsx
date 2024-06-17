import React, { useEffect } from 'react'
import UserNavbar from '../components/UserNavbar'
import updateProfile from '../assetes/update.png'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../featurs/userSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function UpdateProfile() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    let data = useSelector((state) => state.users);
    console.log(data)
    useEffect(() => {
        if (data[0] === undefined) {
            const localData = localStorage.getItem('userData');
            if (localData) {
                dispatch(updateUser(JSON.parse(localData)));
                data=JSON.parse(localData)
            }
            else{
                navigate('/');
            }
            
        }
    }, [data, navigate]);
  return (
    <div className='page-body container-fluid'>
        <UserNavbar/>
        <div className="back-arrow position-absolute top-5 start-0 p-3">
            <FontAwesomeIcon icon={faArrowLeft} size="2x" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
        </div>
        <div className="container update-body mt-3 d-flex  p-2 border border-success align-items-center rounded  ">
            <div className="container">
                <div className="">
                    <h4 className='text-start'><strong>Hey</strong> User!</h4>
                    <p>Update Your Profile</p>
                    <label htmlFor="" className='text-start'>User's Name</label>
                    <input type="text" className='form-control' readOnly value={`${data[0].first_name} ${data[0].last_name}`}/>
                    <hr />
                    <label htmlFor="" className='text-start'>User's Mobile</label>
                    <input type="text" className='form-control' readOnly value={data[0].phone_number} />
                    <hr />
                    <label htmlFor="" className='text-start'>User's Email</label>
                    <input type="text" className='form-control' readOnly value={data[0].email} />
                    <hr />
                    <div className="container update-button d-flex  justify-content-center">
                        <button className='btn btn-primary m-1  shadow'>Update Mobile</button>
                        <button className='btn btn-primary m-1  shadow'>Update Password</button>
                        <button className='btn btn-primary m-1  shadow'>Update Email</button>
                        <button className='btn btn-primary m-1  shadow'>Update M-pin</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <img className='img-fluid ' src={updateProfile} alt="" />
            </div>
        </div>
    </div>
  )
}

export default UpdateProfile