import React, { useState, useEffect, useCallback, useContext } from 'react'
import DisplayCard from './components/DisplayCard'
import Search from './components/Search';
import AddContact from './components/AddContact';
import { myContext } from './context/UserContextProvider';

const App = () => {

  let { Contact, setContact,check, setcheck } = useContext(myContext)
  let { initialDataLoaded, setInitialDataLoaded } = useContext(myContext)

  let loggedUser=JSON.parse(localStorage.getItem('user'))

  const [search, setSearch] = useState('')
  const [sort, setsort] = useState('email')
  const [order, setorder] = useState('asc')


  let fetchData = async () => {
    let data = await fetch('./data.json');
    let reqData = await data.json();
    setContact(reqData);
    setInitialDataLoaded(true);
  };

  useEffect(() => {
    if (!initialDataLoaded) {
      fetchData();
    }
  }, [initialDataLoaded, setContact]);

  let searchContact = (value) => {
    setSearch(value)
  }

  return (
    <div className=' z-0'>
      {/* <pre>{JSON.stringify(search)}</pre> */}
      <div className="container">
        <div className="row">
          <div className="row mt-3">
            <div>
            <button className="btn btn-info rounded-3 float-end">Logged in as {(loggedUser && check) ? loggedUser.name : <span className=' fw-semibold'>GUEST</span>}</button>
            </div>
          </div>
          <div className="col-md-6">
            <Search setSearch={setSearch} searchContact={searchContact} sort={sort} setsort={setsort} order={order} setorder={setorder} />
          </div>
          <div className="col-md-6">
            <AddContact Contact={Contact} setContact={setContact} />
          </div>
        </div>
        <DisplayCard search={search} setSearch={setSearch} sort={sort} order={order} setorder={setorder} />
      </div>
    </div>
  )
}

export default App