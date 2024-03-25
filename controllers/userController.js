import User from '../models/User.js'

// get user by id
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
    res.json(user)
  } catch (error) {
    res.status(500).json({
      msg: 'Error al encontrar el usuario',
      error
    })
  }
}
// get all users
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find()
    res.json(allUsers)
  } catch (error) {
    res.status(500).json({
      msg: 'Error al encontrar usuarios',
      error
    })
  }
}
// update user
const updateUser = async (req, res) => {
  try {
    const { userId } = req.params
    const updateUser = await User.updateOne({
      _id: userId
    },
    req.body
    )
    res.json(updateUser)
  } catch (error) {
    res.status(500).json({
      msg: 'Error al actualizar el usuario',
      error
    })
  }
}

export { getUserById, getAllUsers, updateUser }
