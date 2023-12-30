import React, { useCallback, useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const DisplayCard = ({ search }) => {
    const [Contact, setContact] = useState([])

    let fetchingFn = useEffect(() => {
        let fetchData = async () => {
            let data = await fetch('./data.json')
            let reqData = await data.json()
            setContact(reqData)
        }
        fetchData()
    }, [])

    useCallback(() => {
        fetchingFn()
    }, [])

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
    })

    console.log(filteredArray);

    return (
        <div>
            <div className="row">
                {
                    filteredArray.map((e) => (
                        <div className="col-md-6">
                            <div className="card border-0">
                                <div className="card-header border-3 shadow-sm m-4 p-4 rounded-3" key={e.id}>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src={e.img} alt="" className='img img-fluid' />
                                        </div>
                                        <div className="col-md-7">
                                            <ul class="list-group mt-3 p-3">
                                                <li class="list-group-item">Name : {e.name}</li>
                                                <li class="list-group-item">Email : {e.email}</li>
                                                <li class="list-group-item">Mobile : {e.mobile}</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-1 d-flex flex-row flex-sm-column justify-content-evenly align-items-center">
                                            <button className="btn btn-warning"><FaEye /></button>
                                            <button className="btn btn-primary"><FaEdit /></button>
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