import { Schema } from 'mongoose'


const subscriptionPlan = new Schema(
    {
        planName: {
            type: String,
        },
        duration: {
            type: String,
        }
    },
    {
        timestamps: true,
    })

export const Subscription = mongoose.model("Subscription", subscriptionPlan)