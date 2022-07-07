const express = require('express')
const movieController = require('../controllers/movieController')
const validator = require('express-joi-validation').createValidator({})
const  { paramsSchema, bodySchema, querySchema } = require('../validations/movieValidator')


const router = (Movie) => {
  const Router = express.Router()

  const { getAllMovies, postMovies, putMovieById, getMovieById, deleteMovieById } =
  movieController(Movie)

  peopleRouter
    .route('/movie')
    .get(validator.query(querySchema), getAllMovies)
    .post(validator.body(bodySchema), postMovies)
  
  peopleRouter
    .route('/movie/:id')
    .get(validator.params(paramsSchema), getMovieById)
    .put(validator.body(bodySchema), putMovieById)
    .delete(validator.params(paramsSchema), deleteMovieById)
  
  return peopleRouter
}

module.exports = router