import React from 'react'
import UserProvider from './context/UserProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'
function App() {

  return (
    <UserProvider>
       <Login />
        <Profile />
    </UserProvider>
  )
}

export default App
