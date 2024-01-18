import React from 'react'
import { GiCheckMark } from "react-icons/gi";

const Search = ({ setSearch, searchContact, setsort, sort, setorder, order }) => {
  return (
    <div className='m-3'>
      <div className="input-group mt-1">
        <input type="text"
          onChange={(e) => { searchContact(e.target.value) }}
          className="form-control rounded-start-pill border-1 border-success"
          aria-label="Text input with dropdown button"
          placeholder='Search contact by name, email or mobile number'
        />
        <button className="btn btn-primary dropdown-toggle rounded-end-pill" type="button" data-bs-toggle="dropdown" aria-expanded="false">Sort By</button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li onClick={() => { setsort('name') }}><a className="dropdown-item" href="#">Name {sort == 'name' && <GiCheckMark className='text-success float-end m-1' />}</a></li>
          <li onClick={() => { setsort('email') }}><a className="dropdown-item" href="#">Email {sort == 'email' && <GiCheckMark className='text-success float-end m-1' />}</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li onClick={() => { setorder('asc') }}><a className="dropdown-item" href="#">ASC {order == 'asc' && <GiCheckMark className='text-success float-end m-1' />}</a></li>
          <li onClick={() => { setorder('dsc') }}><a className="dropdown-item" href="#">DSC {order == 'dsc' && <GiCheckMark className='text-success float-end m-1' />}</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Search