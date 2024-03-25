import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jwt-simple'

const register = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({
        msg: 'Correo o contraseña erroneo'
      })
    }

    const newPassword = await bcrypt.hash(req.body.password, 10)

    req.body.password = newPassword

    const newUser = await User.create(req.body)

    newUser.password = undefined

    return res.status(201).json({
      message: 'Usuario creado exitosamente',
      user: newUser
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error al registrar un usuario',
      error
    })
  }
}

const login = async (req, res) => {
  if (!req.body.password || !req.body.email) {
    return res.status(400).json({
      msg: 'Bad login'
    })
  }

  try {
    const user = await User.findOne({
      email: req.body.email
    })

    if (!user) {
      return res.status(404).json({
        msg: 'Usuario no encontrado'
      })
    }

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)

    if (isPasswordCorrect) {
      const payload = {
        _id: user._id,
        DNI: user.DNI,
        firstName: user.name,
        email: user.email,
        role: user.role
      }

      const token = jwt.encode(payload, process.env.SECRET)

      return res.json({
        msg: 'Login correcto',
        token
      })
    } else {
      return res.status(401).json({
        msg: 'Datos incorrectos'
      })
    }
  } catch (error) {
    res.status(500).send({
      msg: 'Error al hacer login',
      error
    })
  }
}
export { register, login }
