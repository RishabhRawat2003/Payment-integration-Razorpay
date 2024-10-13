import { useState } from 'react'
import Login from './Components/Login'
import CreateAccount from './Components/CreateAccount'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <Outlet />
    </>
  )
}

export default App
