const express = require ('express')
const authController = require('../controllers/authController.js')
const { bodySchema } = require('../validations/peopleValidator')

const router = (People) => {
    const authRouter = express.Router()

    const { logIn, register } = authController(People)

    authRouter.route('/auth/login').post(logIn)

    authRouter.route('/auth/register').post(register)

    return authRouter
}

module.exports = router
