import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ViewContact from './components/ViewContact.jsx'
import EditContact from './components/EditContact.jsx'
import Navbar from './components/Navbar.jsx'
import { UserContextProvider } from './context/UserContextProvider.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "viewContact/:contadId",
    element: <ViewContact />
  },
  {
    path: "editContact/:contactId",
    element: <EditContact />
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
