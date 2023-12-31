import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ViewContact from './components/ViewContact.jsx'
import EditContact from './components/EditContact.jsx'
import Navbar from './components/Navbar.jsx'

const router = createBrowserRouter([
  {
    path: "/https://sandeshgawas918.github.io/react-contact-application/",
    element: <App />
  },
  {
    path: "/viewContact",
    element: <ViewContact />
  },
  {
    path: "/editContact",
    element: <EditContact />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Navbar/>
    <RouterProvider router={router} />
  </React.StrictMode>
);