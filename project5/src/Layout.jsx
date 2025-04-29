import React from 'react'
import Foot from './Components/Footer/Foot'
import Head from './Components/Header/Head'
import { Outlet } from 'react-router-dom'
import Abt from './Components/About/Abt'
function Layout() {
  return (
    <>
    <Head/>
    <Outlet/>
    <Foot/>
    </>
  )
}

export default Layout
