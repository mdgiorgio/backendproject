const express = require('express')
const People = require('./models/peopleModel')
const Movie = require('./models/movieModel')
const peopleRouter = require('./routes/peopleRouter')(People)
const movieRouter = require('./routes/movieRouter')(Movie)
const authRouter = require('./routes/authRouter')(People)
const errorHandler = require ('./middleware/errorHandler')
const { expressjwt } = require('express-jwt')
require('dotenv').config()
const httpStatus = require('./helpers/httpStatus')
const PORT = process.env.PORT || 5000


const app = express()

require('./database/db')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.all(
   '/*', 
     jwt({secret: process.env.SECRET, algorithms: ['HS256']}).unless({     path: ['/auth/login', '/auth/register']  })
 ) /*se necesita el token para poder acceder a todos los endpoints menos en unless*/

 app.use((err, _, res, next) => {
     if (err.name === 'UnauthorizedError') {
       res.status(httpStatus.UNAUTHORIZED).json({
         error: err.name,
         cause: 'Unauthorized. Missing or invalid token provided.'
       })
     } else {
       next(err)
     }
   }) /*informa error cuando el token es incorrecto o falta*/

app.use('/api', peopleRouter, movieRouter)/* localhost:xxxx/api/endpoint*/
app.use('/', authRouter) /* localhost:xxxx/auth/login || register */

app.use(errorHandler)

app.listen(PORT, () => {
    console.log('Server is running')
})