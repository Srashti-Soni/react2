import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Foot from './Components/Footer/Foot.jsx'
import Abt from './Components/About/Abt.jsx'
import Contact from './Components/contactus/Contact.jsx'
import Useer from './Components/User/Useer.jsx'
import Git from './Components/Github/Git.jsx'
const router=createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {path:"", element:<Home/>},
      {path:"footer",  element:<Foot/>},
      {path:"about",element:<Abt/>},
      {path:"contact",element:<Contact/>},
      {path:"user/:userId",element:<Useer/>},
      {path:"github",element:<Git/>},
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
