import React, { useState, useEffect, useCallback } from 'react'
import { FaReact } from "react-icons/fa";
import DisplayCard from './components/DisplayCard'
import Search from './components/Search';
import AddContact from './components/AddContact';

const App = () => {

  const [search,setSearch]=useState('')
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

  let searchContact = (value)=>{
    setSearch(value)
  }



  return (
    <div className=''>
    {/* <pre>{JSON.stringify(search)}</pre> */}
      <nav className='bg-black text-white p-4'>
        <h4><span className='text-primary'><FaReact className=' mb-1' /> React</span> - Contact Application</h4>
      </nav>
      <div className="container mt-4">
        <h5>Phone Directory</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore officiis animi dignissimos iure quos exercitationem accusamus et mollitia maiores veritatis aperiam ex voluptatem aspernatur nostrum beatae harum repudiandae nesciunt hic molestias quibusdam cum, modi fugiat! Unde quidem laboriosam illum debitis quis neque optio ipsam recusandae aut saepe, officiis ut nemo!</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <Search setSearch={setSearch} searchContact={searchContact}/>
          </div>
          <div className="col-md-5">
            <AddContact Contact={Contact} setContact={setContact}  />
          </div>
        </div>
        <DisplayCard search={search} setSearch={setSearch} Contact={Contact} setContact={setContact}/>
      </div>
    </div>
  )
}

export default App