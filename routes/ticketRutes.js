import express from 'express'
import { createTicket, getAllTickets, getTicketByUserId } from '../controllers/ticketController.js'
import { authValidator } from '../middlewares/authValidator.js'
import { isAdmin } from '../middlewares/isAdmin.js'
import { isCustomer } from '../middlewares/isCustomer.js'

const ticketRouter = express.Router()

ticketRouter.route('/')
  .post(authValidator, isCustomer, createTicket)
  .get(authValidator, isAdmin, getAllTickets)
ticketRouter.route('/:userId')
  .get(authValidator, isCustomer, getTicketByUserId)

export default ticketRouter
