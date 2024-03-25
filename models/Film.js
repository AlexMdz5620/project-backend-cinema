import mongoose from 'mongoose'

const filmSchema = new mongoose.Schema({
  name: { // si el nombre tiene espacios colocar un "-"
    type: String,
    required: true
  },
  director: {
    type: String,
    required: false
  },
  genre: {
    type: Array,
    of: String,
    default: [],
    required: true
  },
  releaseDate: {
    type: Date,
    required: true
  },
  releaseDateYear: {
    type: Number,
    required: true
  },
  rating: { // rating de 0 a 5
    type: Number,
    required: true
  },
  updated: {
    type: Date,
    default: Date.now
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
})

export default mongoose.model('Film', filmSchema)
