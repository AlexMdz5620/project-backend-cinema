import User from '../models/User.js'

// get all users
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({}, { password: 0 })
    res.json(allUsers)
  } catch (error) {
    res.status(500).json({
      msg: 'Error finding users',
      error
    })
  }
}
// get user by id
const getUserById = async (req, res) => {
  try {
    const getUserById = await User.findById(req.params.userId, { password: 0 })
    if (getUserById) {
      return res.status(200).json({
        msg: 'User found successfully',
        user: getUserById
      })
    } else {
      res.status(404).json({
        msg: 'User not found'
      })
    }
  } catch (error) {
    res.status(500).json({
      msg: 'Error al encontrar el usuario',
      error
    })
  }
}

export { getUserById, getAllUsers }
