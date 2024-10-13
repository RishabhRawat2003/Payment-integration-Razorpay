import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { SubscriptionPlan } from "../models/SubscriptionPlan.model.js";
import { razorpayInstance } from "../config/razorpay.config.js";
import crypto from 'crypto'

// const razorpayInstanceValue = razorpayInstance()

const createOrder = asyncHandler(async (req, res) => {
    const { courseId } = req.body

    if (!courseId) {
        throw new ApiError(400, "Course ID is required")
    }

    const course = await SubscriptionPlan.findById(courseId)
    if (!course) {
        throw new ApiError(404, "Course not found")
    }
    const amount = course.price

    const option = {
        amount: amount * 100,
        currency: "INR",
        receipt: `receipt_${new Date().getTime()}`
    }

    try {
        razorpayInstanceValue.orders.create(option, (err, order) => {
            if (err) {
                throw new ApiError(500, "Failed to create order")
            }
            return res
                .status(200)
                .json(new ApiResponse(200, order, "Order Created Successfully"))
        })
    } catch (error) {
        throw new ApiError(500, "Failed to create order")
    }

})

const verifyPayment = asyncHandler(async (req, res) => {
    const { orderId, paymentId, signature } = req.body

    const secretKey = process.env.RAZORPAY_KEY_SECRET

    const hmac = crypto.createHmac("sha256", secretKey)

    hmac.update(orderId + "|" + paymentId)

    const generatedSignature = hmac.digest("hex")

    if (generatedSignature === signature) {
        return res
            .status(200)
            .json(new ApiResponse(200, {}, "Payment verified Successfully"))
    } else {
        throw new ApiError(401, "Payment not verified")
    }

})


export { createOrder , verifyPayment}