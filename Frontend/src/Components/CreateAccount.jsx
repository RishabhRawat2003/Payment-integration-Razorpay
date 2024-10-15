import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { MdOutlineDone } from "react-icons/md";
import { MdErrorOutline } from "react-icons/md";

function CreateAccount() {
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        password: '',
    })
    const [successPopUp, setSuccessPopUp] = useState(false)
    const [errorPopUp, setErrorPopUp] = useState(false)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };


    const handleSubmit = async () => {
        try {
            setLoading(true)
            const response = await axios.post('/api/v1/users/register', formData)
            setLoading(false)
            setSuccessPopUp(true)
            setFormData({
                fullName: '',
                username: '',
                password: '',
            })
        } catch (error) {
            console.log("Error while registering");
            setErrorPopUp(true)

        }
    }

    const loginPage = () => {
        navigate('/')
        setSuccessPopUp(false)
    }

    const errorHandle = () => {
        setErrorPopUp(false)
    }


    return (
        <div className='h-screen w-full flex justify-center items-center bg-[#141414]'>
            <div className='w-[80vw] h-auto py-10 bg-[#262626] shadow-xl rounded-xl flex flex-col justify-center sm:w-[50vw] md:w-[40vw] lg:w-[35vw] xl:w-[27vw] xl:py-14'>
                <div className='text-white text-center font-semibold md:text-xl xl:text-2xl'>Create Account</div>
                <div className='w-full h-auto flex flex-col px-5 my-8 gap-4'>
                    <div className='w-full h-auto flex flex-col gap-1 sm:gap-2'>
                        <div className='text-gray-300 md:text-lg'>Fullname</div>
                        <input type="text" placeholder='Enter Full Name' name='fullName' value={formData.fullName} onChange={handleInputChange} className='w-full h-8 border-[1px] border-gray-200 bg-[#262626] px-2 rounded-sm md:h-10 text-white outline-none' />
                    </div>
                    <div className='w-full h-auto flex flex-col gap-1 sm:gap-2'>
                        <div className='text-gray-300 md:text-lg'>Username</div>
                        <input type="text" placeholder='Enter Username' name='username' value={formData.username} onChange={handleInputChange} className='w-full h-8 border-[1px] border-gray-200 bg-[#262626] px-2 rounded-sm md:h-10 text-white outline-none' />
                    </div>
                    <div className='w-full h-auto flex flex-col gap-1 sm:gap-2'>
                        <div className='text-gray-300 md:text-lg'>Password</div>
                        <input type="password" placeholder='Enter Password' name='password' value={formData.password} onChange={handleInputChange} className='w-full h-8 border-[1px] border-gray-200 bg-[#262626] px-2 rounded-sm md:h-10 text-white outline-none' />
                    </div>
                </div>
                <div onClick={handleSubmit} className='w-[80%] h-auto mx-auto flex justify-center items-center py-1.5 rounded-md font-semibold bg-[#fd482f] text-white lg:py-2 cursor-pointer hover:scale-105 duration-200'>
                    Register
                </div>
                <div className='w-full h-auto mx-auto text-center text-gray-400 font-semibold text-sm mt-5 xl:text-base'>
                    Already have an account? <NavLink to='/' className='text-[#fd482f] hover:underline cursor-pointer'>Login</NavLink>
                </div>
            </div>
            {successPopUp && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-40">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
                        <div className='w-full h-auto flex justify-center items-center my-3'>
                            <span className='p-4 rounded-full bg-green-100'>
                                <MdOutlineDone size={25} className='text-green-500' />
                            </span>
                        </div>
                        <h2 className="text-lg font-semibold mb-1">Account Created</h2>
                        <div onClick={loginPage} className='w-full h-auto bg-[#fd482f] font-medium text-center text-white rounded-lg py-2 mb-4 cursor-pointer active:bg-[#ff1e00e2] hover:bg-[#ff1e00e2] mt-8'>Login</div>
                    </div>
                </div>
            )}
            {errorPopUp && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-40">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
                        <div className='w-full h-auto flex justify-center items-center my-3'>
                            <span className='p-4 rounded-full bg-red-100'>
                                <MdErrorOutline size={25} className='text-red-500' />
                            </span>
                        </div>
                        <h2 className="text-lg font-semibold mb-1">Something went wrong!</h2>
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

export default CreateAccount