import React, { useState } from 'react'
import { Link, json, useNavigate } from 'react-router-dom'

const Register = () => {

    let navigate=useNavigate()

    let userData={
        name:'',
        username:'',
        password:''
    }

    const [user, setuser] = useState(userData)

    let saveData=(e)=>{
        e.preventDefault()
        localStorage.setItem('user',JSON.stringify(user))
        navigate('/')
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-3 m-auto">
                    <form className='form' action="">
                        <div className="card mt-5 m-3">
                            <div className="card-header bg-danger text-white">
                                <h4 className='text-center'>Register Here</h4>
                            </div>
                            <div className="card-body p-4"> 
                                <input value={user.name} onChange={(e)=>{setuser({...user,name:e.target.value})}} type="text" className=' form-control' placeholder='Enter Your Name' />
                                <input value={user.username} onChange={(e)=>{setuser({...user,username:e.target.value})}} type="text" className=' form-control mt-3' placeholder='Enter Username' />
                                <input value={user.password} onChange={(e)=>{setuser({...user,password:e.target.value})}} type="password" className=' form-control mt-3' placeholder='Enter Password' />
                            </div>
                            <div className="text-center mb-3 ">
                                <button onClick={saveData} className='btn btn-danger px-5'>Register</button>
                            </div>
                            {/* <div className="text-center mb-3 ">
                                <button className='btn btn-warning px-3'>Login as Guest</button>
                            </div> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register