const express = require('express')
const People = require('./models/peopleModel')
const peopleRouter = require('./routes/peopleRouter')(People)
const authRouter = require('./routes/authRouter')(People)
// const errorHandler = require ('./middleware/errorHandler')
// const httpStatus = require('../helpers/httpStatus')
//const { expressjwt } = require('express-jwt')

const app = express()

require('./database/db')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/api', peopleRouter)/* localhost:xxxx/api/endpoint*/
app.use('/', authRouter) /* localhost:xxxx/auth/login || register */

app.listen(process.env.PORT, () => {
    console.log('Server is running')
})