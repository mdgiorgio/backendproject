const jwt = require('jsonwebtoken')

const generateToken = () => {
  const token = jwt.sign(
    {
      data: 'Info here'
    },
    process.env.SECRET,
    //{ expiresIn: '1h' }
  )

  return token
}

module.exports = generateToken //se importa en authController
