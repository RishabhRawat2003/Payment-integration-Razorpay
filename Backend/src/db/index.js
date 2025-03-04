import mongoose from 'mongoose'
import { DB_NAME } from '../constant.js'

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB Connected: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log('Error while connecting to backend :', error)
        process.exit(1)
    }
}