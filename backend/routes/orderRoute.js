import express from 'express'

import { allOdrders, updateStatus, placeOrder, placeOrderRazorpay, userOrders, verifyRazorPay } from '../controllers/orderController.js'
import authUser from '../middleware/auth.js'
import adminAuth from '../middleware/auth.js'


const orderRouter = express.Router()

//Admin features 
orderRouter.post('/list', allOdrders)
orderRouter.post('/status', updateStatus)

//payment Features 
orderRouter.post('/place',authUser ,placeOrder)
orderRouter.post('/razorpay',authUser ,placeOrderRazorpay)

//User Features
orderRouter.post('/userorders',authUser ,userOrders)
orderRouter.post('/verifyRazorpay',authUser ,verifyRazorPay)

export default orderRouter