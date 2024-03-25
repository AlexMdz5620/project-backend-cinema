import express from 'express'
import { getUserById, getAllUsers, getUserByRole } from '../controllers/userController.js'
import { authValidator } from '../middlewares/authValidator.js'
import { isAdmin } from '../middlewares/isAdmin.js'
import { isEmployee } from '../middlewares/isEmployee.js'

const userRoute = express.Router()

userRoute.route('/')
  .get(authValidator, isEmployee, getAllUsers)
userRoute.route('/:userId')
  .get(authValidator, isAdmin, getUserById)
userRoute.route('/role/:userRole')
  .get(getUserByRole)
export default userRoute
