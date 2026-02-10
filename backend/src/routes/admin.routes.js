import express from 'express'
import {getAdminStats} from '../controllers/admin.controller.js'
const router = express.Router()

router.get('/stats', getAdminStats)

export default router
