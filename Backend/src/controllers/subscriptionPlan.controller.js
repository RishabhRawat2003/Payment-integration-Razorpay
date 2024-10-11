import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { SubscriptionPlan } from "../models/SubscriptionPlan.model.js";

//These controllers are for Admin Only
//Only Admin can call these controllers from API's from his Admin Dashboard

const createSubscriptionPlan = asyncHandler(async (req, res) => {
    const { planName, monthlyPrice, yearlyPrice } = req.body

    if(!planName || !monthlyPrice || !yearlyPrice){
        throw new ApiError(400, "Please fill all the fields")
    }

    const findSubscriptionPlan = await SubscriptionPlan.findOne({ planName })

    if (findSubscriptionPlan) {
        throw new ApiError(400, "Plan name already exists")
    }

    const newSubscriptionPlan = await SubscriptionPlan.create({ planName, monthlyPrice, yearlyPrice })

    if (!newSubscriptionPlan) {
        throw new ApiError(500, "Failed to create subscription plan")
    }

    return res
        .status(200)
        .json(new ApiResponse(200, newSubscriptionPlan, "New Subscription Plan is Created"))


})

const updateSubscriptionPlanDetails = asyncHandler(async (req, res) => {
    const { planName, monthlyPrice, yearlyPrice } = req.body

    if(!planName || !monthlyPrice || !yearlyPrice){
        throw new ApiError(400, "Please fill all the fields")
    }

    const findSubscriptionPlan = await SubscriptionPlan.findOneAndUpdate(
        { planName },
        {
            $set: {
                planName,
                monthlyPrice,
                yearlyPrice
            }
        },
        { new: true }
    )

    if (!findSubscriptionPlan) {
        throw new ApiError(404, "Subscription plan not found")
    }

    return res
        .status(200)
        .json(new ApiResponse(200, findSubscriptionPlan, "Subscription plan updated"))

})

const deleteSubscriptionPlan = asyncHandler(async (req, res) => {
    const { planName } = req.body

    if (!planName) {
        throw new ApiError(400, "Plan name is required")
    }

    const findSubscriptionPlan = await SubscriptionPlan.findOneAndDelete({ planName })

    if (!findSubscriptionPlan) {
        throw new ApiError(404, "Subscription plan not found")
    }

    return res
        .status(200)
        .json(new ApiResponse(200, {}, "Subscription plan is deleted"))
})



export { createSubscriptionPlan, updateSubscriptionPlanDetails, deleteSubscriptionPlan }