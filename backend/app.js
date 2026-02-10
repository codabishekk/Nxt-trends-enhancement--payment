import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import errorMiddleware from './src/middlewares/error.middleware.js'

// Routes
import authRoutes from './src/routes/auth.routes.js'
import productRoutes from './src/routes/product.routes.js'
import orderRoutes from './src/routes/order.routes.js'
import recommendationRoutes from './src/routes/recommendation.routes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/recommendations', recommendationRoutes)

app.use(errorMiddleware)

export default app
