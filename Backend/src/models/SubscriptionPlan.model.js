import mongoose, { Schema } from 'mongoose'

const SubscriptionPlanDetails = new Schema(
    {
        planName: {
            type: String,
            required: true,
            unique: true,
        },
        price: {
            type: Number,
            required: true
        }
    }, {
    timestamps: true
})

export const SubscriptionPlan = mongoose.model("SubscriptionPlan", SubscriptionPlanDetails)