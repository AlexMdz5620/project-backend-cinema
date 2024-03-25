import mongoose from 'mongoose'

const soldTicketSchema = mongoose.Schema({
  customer: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  film: {
    type: mongoose.Types.ObjectId,
    ref: 'Film',
    required: true
  },
  valueTicket: {
    type: Number,
    required: true
  },
  numberTickets: {
    type: Number,
    required: true
  },
  totalCost: {
    type: Number,
    default: null,
    required: true
  },
  showTime: {
    type: Date,
    required: true,
    default: Date.now
  },
  seats: {
    type: Array,
    of: String,
    default: []
  }
})

export default mongoose.model('Ticket', soldTicketSchema)
