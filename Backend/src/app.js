import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: '16kb' }))
app.use(express.urlencoded({ extended: true, limit: '16kb' }))
app.use(express.static('public'))
app.use(cookieParser())


import userRouter from './routes/user.routes.js'
import subscriptionPlan from './routes/subscriptionPlan.routes.js'
import paymentRouter from './routes/payment.routes.js'

app.use("/api/v1/users", userRouter)
app.use("/api/v1/subscriptionPlan", subscriptionPlan)
app.use("/api/v1/payment", paymentRouter)



export default app