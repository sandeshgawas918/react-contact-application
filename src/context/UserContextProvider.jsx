
import React, { createContext, useState } from 'react'

const myContext = createContext();

const UserContextProvider = ({ children }) => {

  const [Contact, setContact] = useState([])

  return (
    <myContext.Provider value={{ Contact, setContact }}>
      {children}
    </myContext.Provider>
  )
}

export { myContext, UserContextProvider }