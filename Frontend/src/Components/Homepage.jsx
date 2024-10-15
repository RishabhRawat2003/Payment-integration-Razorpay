import React, { useEffect, useState } from 'react'
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import Cards from './Cards';
import axios from 'axios';

function Homepage() {
  const [username, setUsername] = useState('')
  const [logoutPopUp, setLogoutPopUp] = useState(false)

  const navigate = useNavigate()

  function logoutHandle() {
    localStorage.removeItem("userLoggedIn")
    navigate(0)
  }

  useEffect(() => {
    async function fetchingUserDetails() {
      try {
        const userId = await JSON.parse(localStorage.getItem("userLoggedIn"))
        const response = await axios.post("/api/v1/users/user-details", { userId })
        setUsername(response.data.data.username)
      } catch (error) {
        console.log("Error while fetching user details", error);
      }
    }
    fetchingUserDetails()
  }, [])

  if (!username.length > 0) {
    return (
      <div className="w-full z-20 flex flex-col items-center justify-center p-6 transition-opacity duration-300 ease-in-out fixed inset-0 bg-[#141414] bg-opacity-90">
        <div className="spinner border-t-4 mt-5 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
      </div>
    )
  } else {
    return (
      <div className='w-screen h-full bg-[#141414] flex flex-col sm:h-screen'>
        <header className='w-full h-auto p-4 border-b-[1px] border-white flex justify-between items-center md:p-5 xl:p-6'>
          <div className='text-white md:text-xl xl:text-2xl font-semibold'>{username}</div>
          <div onClick={() => setLogoutPopUp(true)} className='text-white text-xs md:text-base cursor-pointer md:hover:underline'>Logout</div>
        </header>
        <Cards />
        {logoutPopUp && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-40">
            <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
              <div className='w-full h-auto flex justify-center items-center mb-3'>
                <span className='p-4 rounded-full bg-red-100'>
                  <BiLogOut size={30} className='text-red-500 rotate-[180deg]' />
                </span>
              </div>
              <h2 className="text-lg font-semibold mb-1">Logout</h2>
              <h2 className="text-base font-medium text-gray-500 mb-6">Are you sure you want to logout?</h2>
              <div onClick={logoutHandle} className='w-full h-auto bg-red-600 font-medium text-center text-white rounded-lg py-2 mb-4 cursor-pointer active:bg-red-700 hover:bg-red-700'>Yes, logout</div>
              <div onClick={() => setLogoutPopUp(false)} className='w-full h-auto bg-gray-100 font-medium text-center text-black rounded-lg py-2 cursor-pointer active:bg-gray-200 hover:bg-gray-200'>Cancel</div>
            </div>
          </div>
        )}
      </div>

    )
  }
}

export default Homepage