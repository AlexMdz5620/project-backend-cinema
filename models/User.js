import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  DNI: { type: String, required: true },
  name: { type: String, required: true },
  lastname: { type: String, required: false },
  dateOfBitth: { type: Date, required: false },
  role: { type: String, required: true, enum: ['ADMIN', 'EMPLOYE', 'CUSTOMER'], default: 'CUSTOMER' },
  tel: { type: Number, unique: true, required: false },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  updated: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false }
})

export default mongoose.model('User', userSchema)
