import React, { useState, useEffect, useCallback } from 'react'
import DisplayCard from './components/DisplayCard'
import Search from './components/Search';
import AddContact from './components/AddContact';

const App = () => {

  const [search,setSearch]=useState('')
  const [Contact, setContact] = useState([])
  const [sort, setsort] = useState('email')
  const [order, setorder] = useState('asc')

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

  let searchContact = (value)=>{
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
            <AddContact Contact={Contact} setContact={setContact}  />
          </div>
        </div>
        <DisplayCard search={search} setSearch={setSearch} Contact={Contact} setContact={setContact} sort={sort} order={order} setorder={setorder}/>
      </div>
    </div>
  )
}

export default App