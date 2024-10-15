import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa6";
import { IoDiamondSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import axios from 'axios';

function Cards() {
    const [basicPlan,setBasicPlan] = useState({})
    const [standardPlan,setStandardPlan] = useState({})
    const [premiumPlan,setPremiumPlan] = useState({})

    useEffect(()=>{
        async function allPlansFetched() {
            try {
                const response = await axios.post("/api/v1/subscriptionPlan/all-plans")
                const planArr = response.data.data
                setBasicPlan(planArr[0])
                setStandardPlan(planArr[1])
                setPremiumPlan(planArr[2])
            } catch (error) {
                console.log("Error while throwing Error",error);
            }
        }
        allPlansFetched() 
    },[])

    return (
        <div className='w-full h-auto flex flex-col mt-4'>
            <div className='w-[80%] h-auto flex flex-wrap my-5 mx-auto gap-4 sm:w-full sm:justify-center xl:gap-8'>
                <div className='w-full h-auto flex flex-col bg-gray-200 sm:w-[30%] sm:h-[80%] xl:w-[22%] rounded-md'>
                    <p className='flex font-bold text-2xl items-center gap-2 px-4 my-4'><FaHeart size={20} className='text-red-500' />{basicPlan.planName}</p>
                    <p className='w-[85%] mx-auto h-[1px] bg-gray-400'></p>
                    <p className='font-semibold w-full text-center text-xl mt-7 font-textFont lg:text-2xl'>₹{basicPlan.price} / month</p>
                    <p className='font-semibold w-full text-center text-sm mt-2 mb-7 font-textFont lg:text-base'>30% Off for Begineers</p>
                    <p className='w-[85%] mx-auto h-[1px] bg-gray-400'></p>
                    <p className='text-[#524FF5] text-xs w-full text-center font-semibold font-textFont mt-6 lg:text-base'>1 Day Free Trail </p>
                    <p className='text-gray-800 text-xs w-full text-center font-textFont mt-2 lg:text-base'>20 Minutes of <span className='font-bold text-black'>Heart-Pumping Spin</span></p>
                    <p className='text-gray-800 text-xs w-full text-center font-textFont mt-2 lg:text-base'>20 Minutes of Strength Training</p>
                    <p className='text-gray-800 text-xs w-full text-center font-textFont mt-2 lg:text-base'><span className='font-bold text-black'>50 Class</span> Times Available</p>
                    <p className='text-gray-800 text-xs w-full text-center font-textFont mt-2 lg:text-base'>20 Minutes of Invigorating Yoga</p>
                    <div className='w-full h-auto flex justify-center items-center mt-10 mb-5'>
                        <span className='p-3 px-6 bg-black text-white active:bg-gray-200  active:text-black md:hover:bg-gray-200  md:hover:text-black border-black border-2 cursor-pointer'>Get Started</span>
                    </div>
                </div>
                <div className='w-full h-auto flex flex-col bg-gray-200 sm:w-[30%] xl:w-[22%] rounded-md'>
                    <p className='flex font-bold text-2xl items-center gap-2 px-4 my-4'><FaStar size={25} className='text-[#524FF5]' />{standardPlan.planName}</p>
                    <p className='w-[85%] mx-auto h-[1px] bg-gray-400'></p>
                    <p className='font-semibold w-full text-center text-xl mt-7 font-textFont lg:text-2xl'>₹{standardPlan.price} / month</p>
                    <div className='w-full h-auto flex justify-center mt-2 mb-7'><span className='p-2 px-4 bg-[#A1F65E] font-semibold text-black cursor-pointer'>Most Popular</span></div>
                    <p className='w-[85%] mx-auto h-[1px] bg-gray-400'></p>
                    <p className='text-[#524FF5] text-xs w-full text-center font-semibold font-textFont mt-6 lg:text-base'>2 Weeks Free Trail </p>
                    <p className='text-gray-800 text-xs w-full text-center font-textFont mt-2 lg:text-base'>30 Minutes of <span className='font-bold text-black'>Heart-Pumping Spin</span></p>
                    <p className='text-gray-800 text-xs w-full text-center font-textFont mt-2 lg:text-base'>30 Minutes of Strength Training</p>
                    <p className='text-gray-800 text-xs w-full text-center font-textFont mt-2 lg:text-base'><span className='font-bold text-black'>50 Class</span> Times Available</p>
                    <p className='text-gray-800 text-xs w-full text-center font-textFont mt-2 lg:text-base'>20 Minutes of Invigorating Yoga</p>
                    <p className='text-gray-800 text-xs w-full text-center font-textFont mt-2 lg:text-base'>Unlimited <span className='font-bold'>CrossFit</span> Classes</p>
                    <p className='text-gray-800 text-xs w-full text-center font-textFont mt-2 lg:text-base'>One Full Month Free</p>
                    <p className='text-gray-800 text-xs w-full text-center font-textFont mt-2 lg:text-base'>First 25 Members Only</p>
                    <div className='w-full h-auto flex justify-center items-center mt-10 mb-5'>
                        <span className='p-3 px-6 border-2 active:bg-black active:text-white active:border-white md:hover:bg-black md:hover:text-white md:hover:border-white border-black cursor-pointer'>Get Started</span>
                    </div>
                </div>
                <div className='w-full h-auto flex flex-col bg-gray-200 sm:w-[30%] sm:h-[80%] xl:w-[22%] rounded-md'>
                    <p className='flex font-bold text-2xl items-center gap-2 px-4 my-4'><IoDiamondSharp size={20} className='text-orange-600' />{premiumPlan.planName}</p>
                    <p className='w-[85%] mx-auto h-[1px] bg-gray-400'></p>
                    <p className='font-semibold w-full text-center text-xl mt-7 font-textFont lg:text-2xl'>₹{premiumPlan.price} / month</p>
                    <p className='font-semibold w-full text-center text-sm mt-2 mb-7 font-textFont lg:text-base'>10% Off for Today</p>
                    <p className='w-[85%] mx-auto h-[1px] bg-gray-400'></p>
                    <p className='text-[#524FF5] text-xs w-full text-center font-semibold font-textFont mt-6 lg:text-base'>2 Weeks Free Trail </p>
                    <p className='text-gray-800 text-xs w-full text-center font-textFont mt-2 lg:text-base'>50 Minutes of <span className='font-bold text-black'>Heart-Pumping Spin</span></p>
                    <p className='text-gray-800 text-xs w-full text-center font-textFont mt-2 lg:text-base'>50 Minutes of Strength Training</p>
                    <p className='text-gray-800 text-xs w-full text-center font-textFont mt-2 lg:text-base'><span className='font-bold text-black'>60 Class</span> Times Available</p>
                    <p className='text-gray-800 text-xs w-full text-center font-textFont mt-2 lg:text-base'>50 Minutes of Invigorating Yoga</p>
                    <div className='w-full h-auto flex justify-center items-center mt-10 mb-5'>
                        <span className='p-3 px-6 bg-black text-white active:bg-gray-200  active:text-black md:hover:bg-gray-200  md:hover:text-black border-black border-2  cursor-pointer'>Get Started</span>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Cards