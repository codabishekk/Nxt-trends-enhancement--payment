import express from 'express'
import auth from '../middlewares/auth.middleware.js'
import {createOrder} from '../controllers/order.controller.js'

const router = express.Router()

router.post('/', auth, createOrder)

export default router
