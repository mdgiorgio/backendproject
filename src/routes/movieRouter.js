const express = require('express')
const movieController = require('../controllers/movieController')
const validator = require('express-joi-validation').createValidator({})
const  { paramsSchema, bodySchema, querySchema } = require('../validations/movieValidator')


const router = (Movie) => {
  const movieRouter = express.Router()

  const { getAllMovies, postMovies, putMovieById, getMovieById, deleteMovieById } =
  movieController(Movie)

  movieRouter
    .route('/movie')
    .get(validator.query(querySchema), getAllMovies)
    .post(validator.body(bodySchema), postMovies)
  
    movieRouter
    .route('/movie/:id')
    .get(validator.params(paramsSchema), getMovieById)
    .put(validator.body(bodySchema), putMovieById)
    .delete(validator.params(paramsSchema), deleteMovieById)
  
  return movieRouter
}

module.exports = router