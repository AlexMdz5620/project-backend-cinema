import express from 'express'
import { getUserById, getAllUsers } from '../controllers/userController.js'
import { authValidator } from '../middlewares/authValidator.js'
import { isAdmin } from '../middlewares/isAdmin.js'
import { isEmployee } from '../middlewares/isEmployee.js'

const userRoute = express.Router()

userRoute.route('/')
  .get(authValidator, isAdmin, getAllUsers)
userRoute.route('/:userId')
  .get(authValidator, isEmployee, getUserById)

export default userRoute
