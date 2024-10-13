import razorpay from 'razorpay'
import dotenv from 'dotenv'

const razorpayInstance = () => {
    return new razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
    })
}

export { razorpayInstance }