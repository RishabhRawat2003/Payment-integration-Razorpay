import { User } from "../models/User.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const userRegister = asyncHandler(async (req, res) => {
    const { fullName, username, password } = req.body

    if (
        [fullName, username, password].some((fields) => fields?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const user = await User.create({ fullName, username, password })

    if (!user) {
        throw new ApiError(400, "User not created")
    }

    const createdUser = await User.findById(user._id).select("-password")

    return res
        .status(200)
        .json(new ApiResponse(200, createdUser, "User created Successfully"))
})


const userLogin = asyncHandler(async (req, res) => {
    const { username, password } = req.body

    if (username.trim() === "" || password.trim() === "") {
        throw new ApiError(400, "All fields are required")
    }

    const user = await User.findOne({ username })

    if (!user) {
        throw new ApiError(401, "User not Found")
    }

    const passwordValidation = await user.isPasswordCorrect(password)
    if (!passwordValidation) {
        throw new ApiError(401, "Incorrect Password")
    }

    const userDetails = await User.findById(user._id).select("-password")

    return res
        .status(200)
        .json(new ApiResponse(200, userDetails, "User Logged in Successfully"))
})

export { userRegister, userLogin }