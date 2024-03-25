import Ticket from '../models/Ticket.js'
import jwt from 'jwt-simple'

// create tiket
const createTicket = async (req, res) => {
  try {
    const token = req.headers.authorization

    if (!token) {
      return res.status(403).json({
        msg: 'Authorization header missing'
      })
    }

    const decodedToken = jwt.decode(token, process.env.SECRET)
    const userId = decodedToken._id

    if (!userId) {
      return res.status(403).json({
        msg: 'Invalid token, unable to extract _id'
      })
    }

    const { film, valueTicket, numberTickets, totalCost, showTime, seats } =
      req.body

    const newTicket = new Ticket({
      customer: [userId],
      film,
      valueTicket,
      numberTickets,
      totalCost,
      showTime,
      seats
    })

    const savedTicket = await newTicket.save()

    res.status(201).json({
      message: 'Ticket created successfully',
      ticket: savedTicket
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error creating the Ticket',
      error
    })
  }
}
// TODO: get all tickets
const getAllTickets = async (req, res) => {
  try {
    const getAllTickets = await Ticket.find()
      .populate('users', '_id name lastName email tel')
      .populate('film', 'name')
    const ticketCount = getAllTickets.length
    if (ticketCount > 0) {
      res.status(200).json({
        msg: `${ticketCount} Tickets found successfully`,
        tickets: getAllTickets
      })
    } else {
      res.status(404).json({
        error: 'No tickets found'
      })
    }
  } catch (error) {
    res.status(500).json({
      msg: 'Error finding Ticket',
      error
    })
  }
}
// TODO: get ticket by User Id
const getTicketByUserId = async (req, res) => {
  try {
    const getTicketByUserId = await Ticket.find({ users: req.params.userId })
      .populate('users', 'id name lastName email tel')
      .populate('movie', 'name')
    if (!getTicketByUserId || getTicketByUserId.length === 0) {
      return res.status(404).json({
        message: 'Tickets not found for this user'
      })
    }
    const ticketCount = getTicketByUserId.length
    res.status(200).json({
      message: ` ${ticketCount} tickets found successfully`,
      getTicketByUserId
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error finding Ticket',
      error
    })
  }
}
export { createTicket, getAllTickets, getTicketByUserId }
