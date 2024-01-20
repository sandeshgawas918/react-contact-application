import React, { useState } from 'react'
import { IoIosPersonAdd } from "react-icons/io";

const AddContact = ({ Contact, setContact }) => {
    let clearContact = {
        id: 6,
        name: '',
        email: '',
        mobile: '',
        img: ''
    }

    const [newContact, setnewContact] = useState(clearContact)
    // const [close, setclose] = useState(false)

    let addNewContact = () => {
        let myNewContact = {
            id: 6,
            name: newContact.name,
            email: newContact.email,
            mobile: newContact.mobile,
            img: newContact.img
        }
        setContact([...Contact, myNewContact])
        setnewContact(clearContact)
        console.log('new contact added');
    }

    return (
        <div>
            <button type="button" className="btn btn-success float-end m-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <IoIosPersonAdd className='mb-1 h4' /> Add Contact
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content rounded-4">
                        <div className="card bg-light text-black rounded-4 shadow-lg">
                            <div className="card-header p-3 text-center bg-success text-white rounded-top-4 fw-semibold">
                                Add Contact Here
                                <button type="button" className="btn-close float-end"  aria-label="Close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="card-body fw-semibold">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="col-form-label">Name :</div>
                                    </div>
                                    <div className="col-md-8">
                                        <input value={newContact.name} onChange={(e) => { setnewContact({ ...newContact, name: e.target.value }) }} type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-4">
                                        <div className="col-form-label">Email : </div>
                                    </div>
                                    <div className="col-md-8">
                                        <input value={newContact.email} onChange={(e) => { setnewContact({ ...newContact, email: e.target.value }) }} type="text" className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-4">
                                        <div className="col-form-label">Mobile : </div>
                                    </div>
                                    <div className="col-md-8">
                                        <input value={newContact.mobile} onChange={(e) => { setnewContact({ ...newContact, mobile: e.target.value }) }} type="text" className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-4">
                                        <div className="col-form-label">Img : </div>
                                    </div>
                                    <div className="col-md-8">
                                        <input value={newContact.img} onChange={(e) => { setnewContact({ ...newContact, img: e.target.value }) }} type="text" className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="text-center mt-3">
                                    <button data-bs-dismiss="modal" onClick={addNewContact} className="btn btn-success text-white rounded-3">Submit</button>
                                </div>
                            </div>
                            <div className="card-footer">
                                <img src={newContact.img} className='img img-fluid' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddContact