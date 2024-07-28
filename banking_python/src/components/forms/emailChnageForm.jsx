import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateUser } from '../../featurs/userSlice'
import { toast } from 'react-toastify'
import getHeaders from '../../api/header'
import api from '../../api/api'
import { PushSpinner } from 'react-spinners-kit'


function EmailChnageForm() {
    const [changeEmailPaylaod, setChangeEmailPaylaod] = useState({
        oldEmail: '',
        newEmail: '',
        otp: ''
    })
    const [loadingStatus, setLoadingStatus] = useState({
        otpLoading: false,
        formLoading: false,
        formSubmit: false,
        otpSent: false
    })
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let data = useSelector((state) => state.users);
    console.log(data[0])
    useEffect(() => {
        if (data[0] == undefined) {
            console.log("HI")
            const localData = localStorage.getItem('userData');
            if (localData) {
                dispatch(updateUser(JSON.parse(localData)));
                data = JSON.parse(localData)
                setChangeEmailPaylaod({...changeEmailPaylaod, oldEmail : data[0].email})
            }
            else {
                navigate('/');
            }

        }
    }, [data, navigate]);
    const sendOtp = () => {
        setLoadingStatus({...loadingStatus, otpLoading : true})
        const apiUrl = 'user/update_email/';
        api.post(
            apiUrl,
            {
                updatedMail: data[0].email,
                getHeaders,
            }
        ).
            then((response) => {
                toast.success(response.data.message);
            }).
            catch((error) => {
                toast.error(error.response.data.message);
            }).finally(() => {
                setLoadingStatus({...loadingStatus, otpLoading : false})
            })
    }
    return (
        <div className="container">
            <div className="">
                <div className="form-floating  mb-3">
                    <input type="email" className="form-control" id="oldEmail" placeholder="Old Email"
                        readOnly={true} value={data[0].email}
                    />
                    <label htmlFor="mobile">Old Email</label>
                </div>
                <div className="m-1 text-end">
                    <button className='btn btn-success float-right'
                    onClick={sendOtp}
                    >
                        {
                            loadingStatus.otpLoading ? (
                                <div className="container  d-flex justify-content-center align-items-center">
                                    <PushSpinner size={30} color="white" />
                                </div>
                            ) : 'Send OTP'
                        }
                    </button>
                </div>
            </div>
            {
                loadingStatus.otpSent ?
                    (<div className="">
                        <div className="form-floating  mb-3">
                            <input type="number" className="form-control" id="otp" placeholder="OTP"

                            />
                            <label htmlFor="mobile">OTP</label>
                        </div>
                        <div className="m-1 text-end">
                            <button className='btn btn-success float-right' disabled={loadingStatus.otpSent ? true : false}
                            >
                                {
                                    loadingStatus.otpLoading ? (
                                        <div className="container  d-flex justify-content-center align-items-center">
                                            <PushSpinner size={30} color="white" />
                                        </div>
                                    ) : <p>Verify OTP</p>
                                }
                            </button>
                        </div>
                    </div>) : null
            }
            <div className="form-floating  mb-3">
                <input type="email" className="form-control" id="nldEmail" placeholder="New Email"

                />
                <label htmlFor="mobile">New Email</label>
            </div>
            <div className="container">
                <button className='btn btn-primary w-100 rounded' disabled={loadingStatus.otpSent ? false : true}>
                    {
                        loadingStatus.formLoading ? (
                            <div className="container  d-flex justify-content-center align-items-center">
                                <PushSpinner size={30} color="white" />
                            </div>
                        ) : 'Change Mail'
                    }
                </button>
            </div>
        </div>
    )
}

export default EmailChnageForm