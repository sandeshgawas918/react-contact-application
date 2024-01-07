import React, { useState, useEffect } from 'react'
import { useParams,useLocation } from 'react-router'
import { Link } from 'react-router-dom';

const EditContact = () => {
  let { contadId } = useParams();

  const location = useLocation();
  const {Contact,setContact}=location.state || {}

  console.log(Contact);

  // const [myContact, setmyContact] = useState(Contact)

  // let updateContact=()=>{
  //   let updatedContact={
  //     id: contadId,
  //     name: myContact.name ,
  //     email: myContact.email,
  //     mobile: myContact.mobile ,
  //     img:  myContact.img
  //   }
  //   setmyContact({...myContact,updateContact})
  // }

  return (
    <div>
    <pre>{JSON.stringify(myContact)}</pre>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="card bg-light text-black rounded-4 shadow-lg">
              <div className="card-header p-3 text-center bg-primary text-white rounded-top-4 fw-semibold">
                Edit Contact Here
              </div>
              <div className="card-body fw-semibold">
                <div className="row">
                  <div className="col-md-4">
                    <div className="col-form-label">Name :</div>
                  </div>
                  <div className="col-md-8">
                    <input value={myContact.name} onChange={(e)=>setmyContact({...myContact,name:e.target.value})} type="text" className="form-control" />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-4">
                    <div className="col-form-label">Email : </div>
                  </div>
                  <div className="col-md-8">
                    <input value={myContact.email} onChange={(e)=>setmyContact({...myContact,email:e.target.value})} type="text" className="form-control"
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-4">
                    <div className="col-form-label">Mobile : </div>
                  </div>
                  <div className="col-md-8">
                    <input value={myContact.mobile} onChange={(e)=>setmyContact({...myContact,mobile:e.target.value})} type="text" className="form-control"
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-4">
                    <div className="col-form-label">Img : </div>
                  </div>
                  <div className="col-md-8">
                    <input value={myContact.img} onChange={(e)=>setmyContact({...myContact,img:e.target.value})} type="text" className="form-control"
                    />
                  </div>
                </div>
                <div className="text-center mt-3">
                  <Link onClick={updateContact} to={''} className="btn btn-primary text-white rounded-3 mx-2">Submit</Link>
                  <Link to={'/'} className="btn btn-danger text-white rounded-3 mx-2">Back</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
              <div className="container">
              <img src={myContact.img} onChange={(e)=>setmyContact({...myContact,img:e.target.value})} alt="" className='img img-fluid'/>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditContact