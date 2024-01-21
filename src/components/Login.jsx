import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { myContext } from '../context/UserContextProvider'

const Login = () => {

    let navigate = useNavigate()

    let { loginUser, setloginUser,check, setcheck } = useContext(myContext)

    let validateLogin = (e) => {
        e.preventDefault()
        let availableUser = localStorage.getItem('user')

        if (availableUser) {
            let loggedUser = JSON.parse(availableUser)
            console.log(loggedUser);

            if (loggedUser.username === loginUser.username && loggedUser.password === loginUser.password) {
                setcheck(true)
                navigate('contacts')
            }
            else {
                setcheck(true)
                alert('invalid username / password')
                setloginUser({ username: '', password: '' })
            }
        }
        else{
            setcheck(true)
            alert('User not created. Please register to login or Login as Guest')
        }
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-3 m-auto">
                    <form className='form' action="">
                        <div className="card mt-5 m-3">
                            <div className="card-header bg-primary text-white">
                                <h4 className='text-center'>Login Here</h4>
                            </div>
                            <div className="card-body p-4">
                                <p className='text-center'>Please <Link to='register'>Click Here</Link> to register</p>
                                <input value={loginUser.username} onChange={(e) => { setloginUser({ ...loginUser, username: e.target.value }) }} type="text" className=' form-control' placeholder='Enter Username' />
                                <input value={loginUser.password} onChange={(e) => { setloginUser({ ...loginUser, password: e.target.value }) }} type="password" className=' form-control mt-3' placeholder='Enter Password' />
                            </div>
                            <div className="text-center mb-3 ">
                                <button onClick={validateLogin} className='btn btn-success px-5'>Login</button>
                            </div>
                            <div className="text-center mb-3 ">
                                <Link to={'contacts'} className='btn btn-warning px-3'>Login as Guest</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login