const httpStatus = require('../helpers/httpStatus')

const movieController = (Movie) => {
  const getAllMovies = async (req, res, next) => {
    try {
      const { query } = req

      const movie = await Movie.find(query)

      return res.status(httpStatus.OK).json(movie)
    } catch (err) {
      next(err)
    }
  }

  const postMovies = async (req, res, next) => {
    try {
      const { body } = req

      const movie = await new Movie(body)

      await movie.save()

      res.status(httpStatus.CREATED).json(country)
    } catch (err) {
      next(err)
    }
  }
  
  const putMovieById = async (req, res, next) => {
    try {
      const { body, params } = req

      const checkData = await Movie.find({
        _id: params.id
      })

      if (checkData === null) {
        return res.status(httpStatus.FORBIDDEN).send('No data found with the provided ID.')
      }
      await Movie.updateOne(
        {
          _id: params.id
        },
        {
          $set: {
            title: body.title,
            director: body.director,
            year: body.year,
            gender: body.gender,
            actors: body.actors,
            review: body.review
          }
        }
      )

      return res.status(httpStatus.CREATED).send('Data successful updated')
    } catch (err) {
      next(err)
    }
  }

  const getMovieById = async (req, res, next) => {
   try{ 
      const { params } = req
      
      const response = await Movie.findById(params.id)

      return res.status(httpStatus.OK).json(response)
    } catch (err) {
      next(err)
    }
  }

  const deleteMovieById = async (req, res, next) => {
    try{ 
      const { params } = req

      const response = await Movie.findByIdAndDelete(params.id)

      return res.status(httpStatus.OK).json(response)
    } catch (err) {
      next(err)
    }
  }

  return {
    getAllMovies,
    postMovies,
    putMovieById,
    getMovieById,
    deleteMovieById
  }
}

module.exports = movieController