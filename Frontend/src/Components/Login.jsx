import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { MdErrorOutline } from "react-icons/md";


function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [errorPopUp, setErrorPopUp] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    const submitLogin = async () => {
        try {
            setLoading(true)
            const response = await axios.post("/api/v1/users/login", formData)
            localStorage.setItem('userLoggedIn', JSON.stringify(response.data.data._id))
            setLoading(false)
            setFormData({
                username: '',
                password: ''
            })
            navigate(0)
        } catch (error) {
            console.log("Error while login", error);
            setErrorPopUp(true)
        }
    }

    const errorHandle = () => {
        setErrorPopUp(false)
    }


    return (
        <div className='h-screen w-full flex justify-center items-center bg-[#141414]'>
            <div className='w-[80vw] h-auto py-10 bg-[#262626] shadow-xl rounded-xl flex flex-col justify-center sm:w-[50vw] md:w-[40vw] lg:w-[35vw] xl:w-[27vw] xl:py-14'>
                <div className='text-white text-center font-semibold md:text-xl xl:text-2xl'>Login to your account</div>
                <div className='w-full h-auto flex flex-col px-5 my-8 gap-4'>
                    <div className='w-full h-auto flex flex-col gap-1 sm:gap-2'>
                        <div className='text-gray-300 md:text-lg'>Username</div>
                        <input type="text" placeholder='Enter your Username' name='username' value={formData.username} onChange={handleChange} className='w-full h-8 border-[1px] border-gray-200 bg-[#262626] px-2 rounded-sm md:h-10 text-white outline-none' />
                    </div>
                    <div className='w-full h-auto flex flex-col gap-1 sm:gap-2'>
                        <div className='text-gray-300 md:text-lg'>Password</div>
                        <input type="password" placeholder='Enter your Password' name='password' value={formData.password} onChange={handleChange} className='w-full h-8 border-[1px] border-gray-200 bg-[#262626] px-2 rounded-sm md:h-10 text-white outline-none' />
                    </div>
                </div>
                <div onClick={submitLogin} className='w-[80%] h-auto mx-auto flex justify-center items-center py-1.5 rounded-md font-semibold bg-[#fd482f] text-white lg:py-2 cursor-pointer hover:scale-105 duration-200'>
                    Login
                </div>
                <div className='w-full h-auto mx-auto text-center text-gray-400 font-semibold text-sm mt-5 xl:text-base'>
                    Don't have an account? <NavLink to='create-account' className='text-[#fd482f] hover:underline cursor-pointer'>Create Account</NavLink>
                </div>
            </div>
            {errorPopUp && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-40">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
                        <div className='w-full h-auto flex justify-center items-center my-3'>
                            <span className='p-4 rounded-full bg-red-100'>
                                <MdErrorOutline size={25} className='text-red-500' />
                            </span>
                        </div>
                        <h2 className="text-lg font-semibold mb-1">Username or Password is Incorrect !</h2>
                        <div onClick={errorHandle} className='w-full h-auto bg-[#fd482f] font-medium text-center text-white rounded-lg py-2 mb-4 cursor-pointer active:bg-[#ff1e00e2] hover:bg-[#ff1e00e2] mt-8'>Try Again</div>
                    </div>
                </div>
            )}
            {
                loading && (
                    <div className="w-full z-20 flex flex-col items-center justify-center p-6 transition-opacity duration-300 ease-in-out fixed inset-0 bg-gray-800 bg-opacity-60">
                        <div className="spinner border-t-4 mt-5 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
                    </div>
                )
            }
        </div>
    )
}

export default Login