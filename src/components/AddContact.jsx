import React from 'react'
import { IoIosPersonAdd } from "react-icons/io";

const AddContact = () => {
    let clearContact={
        id:6,
        name:'',
        email:'',
        mobile:'',
        img:''
    }
    
    return (
        <div>
            <button type="button" class="btn btn-success float-end m-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <IoIosPersonAdd className='mb-1 h4' /> Add Contact
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content rounded-4">
                        {/* <div class="modal-body"> */}
                        <div className="card bg-light text-black rounded-4 shadow-lg">
                            <div className="card-header p-3 text-center bg-success text-white rounded-top-4 fw-semibold">
                                Add Contact Here
                            </div>
                            <div className="card-body fw-semibold">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="col-form-label">Name :</div>
                                    </div>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-4">
                                        <div className="col-form-label">Email : </div>
                                    </div>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-4">
                                        <div className="col-form-label">Mobile : </div>
                                    </div>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-4">
                                        <div className="col-form-label">Img : </div>
                                    </div>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="text-center mt-3">
                                    <button className="btn btn-success text-white rounded-3">Submit</button>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddContact