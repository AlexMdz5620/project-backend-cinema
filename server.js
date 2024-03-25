import { connect } from './config.js'
import express from 'express'
import userRoute from './routes/userRoutes.js'
import filmRoute from './routes/filmRoutes.js'
import ticketRouter from './routes/ticketRutes.js'
import authRoutes from './routes/authRoutes.js'

connect()
const api = express()
api.use(express.json())

api.listen(8000, () => {
  console.log('Api escuchando en el puerto 8000')
})

api.get('/test', (req, res) => {
  res.send('Hola esto es una prueba')
})

api.use('/users', userRoute)
api.use('/films', filmRoute)
api.use('/tickets', ticketRouter)
api.use('/auth', authRoutes)
