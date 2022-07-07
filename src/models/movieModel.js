const mongoose = require('mongoose')

const { Schema } = mongoose

const movieModel = new Schema({
  title: { type: String, required: true, minLength: 3, maxLength: 45 },
  director: { type: String, required: true, minLength: 3, maxLength: 30 },
  year: {  type: Number, required: true, minLength: 4, maxLength: 4 },
  gender: { type: String, required: true, minLength: 3, maxLength: 30 },
  actors: { type: String, required: true, minLength: 3, maxLength: 60 },
  review: { type: String, required: true, maxLength: 200 }
  })

module.exports = mongoose.model('Movie', movieModel)

//mongose es una herramienta de modelado de objetos de mongoDB diseñada
//para trabajar asincronicamente

