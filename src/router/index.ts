import express from 'express'
import { routerUser } from './UserRouter'

const router = express.Router()

router.use('/user',routerUser)

export default router