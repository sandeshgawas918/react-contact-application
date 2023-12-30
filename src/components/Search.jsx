import React from 'react'

const Search = ({setSearch,searchContact}) => {
  return (
    <div className='m-3'>
      <div class="input-group mt-1">
        <input type="text" 
        onChange={(e)=>{searchContact(e.target.value)}} 
        className="form-control rounded-start-pill border-1 border-success" 
        aria-label="Text input with dropdown button" 
          placeholder='Search contact by name, email or mobile number'
        />
        <button className="btn btn-primary dropdown-toggle rounded-end-pill" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li><a className="dropdown-item" href="#">Name</a></li>
          <li><a className="dropdown-item" href="#">Email</a></li>
          <li><a className="dropdown-item" href="#">Mobile</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">ASC</a></li>
          <li><a className="dropdown-item" href="#">DSC</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Search