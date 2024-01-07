import React, { useState, useEffect } from 'react'
import { useParams,useLocation } from 'react-router'
import { Link } from 'react-router-dom';

const ViewContact = () => {
  // const [contact, setcontact] = useState([])

  let { contadId } = useParams();

  const location = useLocation();
  const {contact}=location.state || {}

  return (
    <div>
    {/* <pre>{JSON.stringify(contact)}</pre> */}
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="card bg-light text-black rounded-4 shadow-lg">
              <div className="card-header p-3 text-center bg-warning text-white rounded-top-4 fw-semibold">
                View Contact Here
              </div>
              <div className="card-body fw-semibold">
                <div className="row">
                  <div className="col-md-4">
                    <div className="col-form-label">Name :</div>
                  </div>
                  <div className="col-md-8">
                    <input value={contact.name} type="text" className="form-control" />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-4">
                    <div className="col-form-label">Email : </div>
                  </div>
                  <div className="col-md-8">
                    <input value={contact.email} type="text" className="form-control"
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-4">
                    <div className="col-form-label">Mobile : </div>
                  </div>
                  <div className="col-md-8">
                    <input value={contact.mobile} type="text" className="form-control"
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-4">
                    <div className="col-form-label">Img : </div>
                  </div>
                  <div className="col-md-8">
                    <input value={contact.img} type="text" className="form-control"
                    />
                  </div>
                </div>
                <div className="text-center mt-3">
                  <Link to={'/'} className="btn btn-warning text-white rounded-3">Back</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
              <div className="container">
              <img src={contact.img} alt="" className='img img-fluid'/>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewContact