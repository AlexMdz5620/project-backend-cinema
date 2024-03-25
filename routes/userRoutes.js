import express from 'express'
import { getUserById, getAllUsers, updateUser } from '../controllers/userController.js'
import { authValidator } from '../middlewares/authValidator.js'
import { isAdmin } from '../middlewares/isAdmin.js'

const userRoute = express.Router()

userRoute.route('/').get(authValidator, isAdmin, getAllUsers)
userRoute.route('/:userId').get(authValidator, getUserById).put(authValidator, updateUser)

export default userRoute
