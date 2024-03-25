import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connect = () => {
  mongoose.connect(process.env.DB_URI)
  const connection = mongoose.connection
  connection.once('open', () => {
    console.log('MongoDB database connected successfully')
  })
  connection.once('error', (err) => {
    console.error(`Error in connecting to MongoDB: ${err}`)
  })
}

export { connect }
