
import React, { createContext, useState } from 'react'

const myContext = createContext();

const UserContextProvider = ({ children }) => {

  const [Contact, setContact] = useState([])
  // const [isMounted, setIsMounted] = useState(true);
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);
  // isMounted,setIsMounted,

  return (
    <myContext.Provider value={{ Contact, setContact,initialDataLoaded,setInitialDataLoaded }}>
      {children}
    </myContext.Provider>
  )
}

export { myContext, UserContextProvider }