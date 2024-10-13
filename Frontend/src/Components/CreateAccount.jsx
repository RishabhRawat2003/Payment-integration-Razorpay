import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

function CreateAccount() {
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        password: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    

    const handleSubmit = async () => {
        try {
            const response = await axios.post('/api/v1/users/register', formData)
            console.log(response.data.data);
            setFormData({
                fullName: '',
                username: '',
                password: '',
            })
        } catch (error) {
            console.log("Error while registering");

        }
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
        </div>
    )
}

export default CreateAccount