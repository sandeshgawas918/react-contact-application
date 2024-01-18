import React, { useCallback, useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

const DisplayCard = ({ search, Contact, setContact, sort, order }) => {

    const deleteContact = (myId) => {
        let newArray = Contact.filter((contact) => {
            return contact.id != myId
        })
        setContact(newArray)
    }

    let filteredArray = Contact.filter((contact) => {
        return contact.name.toLowerCase().includes(search.toLowerCase()) ||
            contact.email.toLowerCase().includes(search.toLowerCase()) ||
            contact.mobile.toString().includes(search.toString())
    }).sort((a, b) => (
        order == 'asc' ? a[sort].localeCompare(b[sort]) : b[sort].localeCompare(a[sort])
    ))

    return (
        <div>
            <pre>{JSON.stringify(Contact)}</pre>
            <div className="row">
                {
                    filteredArray.map((e,index) => (
                        <div className="col-md-6" key={e.id}>
                            <div className="card border-0">
                                <div className="card-header border-3 shadow-sm m-4 p-4 rounded-3">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src={e.img} alt="" className='img img-fluid' />
                                        </div>
                                        <div className="col-md-7">
                                            <ul className="list-group mt-3 p-3">
                                                <li className="list-group-item">Name : {e.name}</li>
                                                <li className="list-group-item">Email : {e.email}</li>
                                                <li className="list-group-item">Mobile : {e.mobile}</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-1 d-flex flex-row flex-sm-column justify-content-evenly align-items-center">
                                            <Link to={`viewContact/${e.id}`}
                                                state={
                                                    {
                                                        contact: e
                                                    }
                                                }
                                                className="btn btn-warning">
                                                <FaEye />
                                            </Link>

                                            <Link to={`editContact/${e.id}`}
                                                state={
                                                    {
                                                        selectedcontact: e
                                                    }
                                                }
                                                className="btn btn-primary">
                                                <FaEdit />
                                            </Link>

                                            <button className="btn btn-danger" onClick={() => { deleteContact(e.id) }} ><MdDelete /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DisplayCard