import mongoose, { Schema } from 'mongoose'

const SubscriptionPlanDetails = new Schema(
    {
        planName: {
            type: String,
            required: true,
            unique: true,
        },
        monthlyPrice: {
            type: Number,
            required: true,
        },
        yearlyPrice: {
            type: Number,
            required: true,
        }
    }, {
    timestamps: true
})

export const SubscriptionPlan = mongoose.model("SubscriptionPlan", SubscriptionPlanDetails)