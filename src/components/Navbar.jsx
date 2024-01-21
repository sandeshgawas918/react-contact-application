import React, { useContext } from 'react'
import { FaReact } from "react-icons/fa";
import { myContext } from '../context/UserContextProvider';

const Navbar = () => {

    // let { Contact, setContact } = useContext(myContext)

    return (
        <div>
        {/* <pre>{JSON.stringify(Contact)}</pre>
        <pre>{JSON.stringify(isMounted)}</pre> */}
            <nav className='bg-black text-white p-4'>
                <h4><span className='text-primary'><FaReact className=' mb-1' /> React</span> - Contact Application</h4>
            </nav>
            {/* <div className="container mt-4">
                <h5>Phone Directory</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore officiis animi dignissimos iure quos exercitationem accusamus et mollitia maiores veritatis aperiam ex voluptatem aspernatur nostrum beatae harum repudiandae nesciunt hic molestias quibusdam cum, modi fugiat! Unde quidem laboriosam illum debitis quis neque optio ipsam recusandae aut saepe, officiis ut nemo!</p>
            </div> */}
        </div>
    )
}

export default Navbar