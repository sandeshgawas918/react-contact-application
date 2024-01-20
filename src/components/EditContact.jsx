import React, { useState, useEffect, useContext } from 'react'
import { useParams, useLocation } from 'react-router'
import { Link, useNavigate } from 'react-router-dom';
import { myContext } from '../context/UserContextProvider';

const EditContact = () => {
  let { Contact, setContact } = useContext(myContext)
  let { contactId } = useParams();
  const location = useLocation();
  const { selectedcontact } = location.state || {}
  const [currContact, setcurrContact] = useState(null)

  let navigate = useNavigate()

  useEffect(() => {
    setcurrContact(selectedcontact)
    console.log('---------');
    console.log(Contact);
  }, [selectedcontact])

  let updateContact = (e) => {
    e.preventDefault()

    let updatedContact = Contact.map((e) => (
      e.id == contactId ? currContact : e
    ))
    setContact(updatedContact)
    
    navigate('/')
  }

  return (
    <div>
      {/* <pre>{currContact && JSON.stringify(currContact)}</pre>
      <pre>{Contact && JSON.stringify(Contact)}</pre> */}
      {
        currContact &&
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
                      <input value={currContact.name} onChange={(e) => { setcurrContact({ ...currContact, name: e.target.value }) }} type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-4">
                      <div className="col-form-label">Email : </div>
                    </div>
                    <div className="col-md-8">
                      <input value={currContact.email} onChange={(e) => { setcurrContact({ ...currContact, email: e.target.value }) }} type="text" className="form-control"
                      />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-4">
                      <div className="col-form-label">Mobile : </div>
                    </div>
                    <div className="col-md-8">
                      <input value={currContact.mobile} onChange={(e) => { setcurrContact({ ...currContact, mobile: e.target.value }) }} type="text" className="form-control"
                      />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-4">
                      <div className="col-form-label">Img : </div>
                    </div>
                    <div className="col-md-8">
                      <input value={currContact.img} onChange={(e) => { setcurrContact({ ...currContact, img: e.target.value }) }} type="text" className="form-control"
                      />
                    </div>
                  </div>
                  <div className="text-center mt-3">
                    <button onClick={updateContact} className="btn btn-primary text-white rounded-3 mx-2">Submit</button>
                    <Link to={'/'} className="btn btn-danger text-white rounded-3 mx-2">Back</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="container">
                <img src={currContact.img} alt="" className='img img-fluid' />
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default EditContact