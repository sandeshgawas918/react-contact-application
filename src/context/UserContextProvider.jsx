
import React, { createContext, useState } from 'react'

const myContext = createContext();

const UserContextProvider = ({ children }) => {
  
  let user = {
    username: '',
    password: ''
  }

  const [loginUser, setloginUser] = useState(user)
  const [Contact, setContact] = useState([])
  const [check, setcheck] = useState(false)
  // const [isMounted, setIsMounted] = useState(true);
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);
  // isMounted,setIsMounted,

  return (
    <myContext.Provider value={{ Contact, setContact, initialDataLoaded, setInitialDataLoaded,loginUser,setloginUser,check, setcheck }}>
      {children}
    </myContext.Provider>
  )
}

export { myContext, UserContextProvider }