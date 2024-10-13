import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
    return (
        <div className='h-screen w-full flex justify-center items-center bg-[#141414]'>
            <div className='w-[80vw] h-auto py-10 bg-[#262626] shadow-xl rounded-xl flex flex-col justify-center sm:w-[50vw] md:w-[40vw] lg:w-[35vw] xl:w-[27vw] xl:py-14'>
                <div className='text-white text-center font-semibold md:text-xl xl:text-2xl'>Login to your account</div>
                <div className='w-full h-auto flex flex-col px-5 my-8 gap-4'>
                    <div className='w-full h-auto flex flex-col gap-1 sm:gap-2'>
                        <div className='text-gray-300 md:text-lg'>Email</div>
                        <input type="text" placeholder='Enter your email' className='w-full h-8 border-[1px] border-gray-200 bg-[#262626] px-2 rounded-sm md:h-10 text-white outline-none' />
                    </div>
                    <div className='w-full h-auto flex flex-col gap-1 sm:gap-2'>
                        <div className='text-gray-300 md:text-lg'>Password</div>
                        <input type="password" placeholder='Enter your Password' className='w-full h-8 border-[1px] border-gray-200 bg-[#262626] px-2 rounded-sm md:h-10 text-white outline-none' />
                    </div>
                </div>
                <div className='w-[80%] h-auto mx-auto flex justify-center items-center py-1.5 rounded-md font-semibold bg-[#fd482f] text-white lg:py-2 cursor-pointer hover:scale-105 duration-200'>
                    Login
                </div>
                <div className='w-full h-auto mx-auto text-center text-gray-400 font-semibold text-sm mt-5 xl:text-base'>
                    Don't have an account? <NavLink to='create-account' className='text-[#fd482f] hover:underline cursor-pointer'>Create Account</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Login