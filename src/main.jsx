import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ViewContact from './components/ViewContact.jsx'
import EditContact from './components/EditContact.jsx'
import Navbar from './components/Navbar.jsx'
import { UserContextProvider } from './context/UserContextProvider.jsx'
import DisplayCard from './components/DisplayCard.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "viewContact/:contadId",
    element: <ViewContact />
  },
  {
    path: "editContact/:contactId",
    element: <EditContact />
  },
  {
    path: "displayContact",
    element: <DisplayCard/>
  },
  {
    path:"register",
    element:<Register/>
  },
  {
    path:'contacts',
    element:<App/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <Navbar />
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
