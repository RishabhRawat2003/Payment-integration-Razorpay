import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Login from './Components/Login.jsx'
import CreateAccount from './Components/CreateAccount.jsx'
import authentication from './Auth.js'
import Homepage from './Components/Homepage.jsx'

const userAuth = authentication()


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route path='/' element={userAuth ? <Homepage /> : <Login />} />
      <Route path='/create-account' element={<CreateAccount />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
