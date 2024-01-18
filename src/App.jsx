import React, { useState, useEffect, useCallback, useContext } from 'react'
import DisplayCard from './components/DisplayCard'
import Search from './components/Search';
import AddContact from './components/AddContact';
import { myContext } from './context/UserContextProvider';

const App = () => {

  let { Contact, setContact } = useContext(myContext)

  const [search, setSearch] = useState('')
  const [sort, setsort] = useState('email')
  const [order, setorder] = useState('asc')

  let fetchData = async () => {
    let data = await fetch('./data.json')
    let reqData = await data.json()
    setContact(reqData)
  }

  useEffect(() => {
    fetchData()
  }, [])


  let searchContact = (value) => {
    setSearch(value)
  }



  return (
    <div className=' z-0'>
      {/* <pre>{JSON.stringify(search)}</pre> */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Search setSearch={setSearch} searchContact={searchContact} sort={sort} setsort={setsort} order={order} setorder={setorder} />
          </div>
          <div className="col-md-6">
            <AddContact Contact={Contact} setContact={setContact} />
          </div>
        </div>
        <DisplayCard search={search} setSearch={setSearch} Contact={Contact} setContact={setContact} sort={sort} order={order} setorder={setorder} />
      </div>
    </div>
  )
}

export default App