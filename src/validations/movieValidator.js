const Joi = require('joi')

const paramsSchema = Joi.object({    
        id: Joi.string().min(24).max(24).required() 
    });

const querySchema = Joi.object({
    title: Joi.string(),
    director: Joi.string(),
    actors: Joi.string(),
    gender: Joi.string(),

})

const bodySchema = Joi.object({
    title: joi.string.min(3).max(45).required,
    director: joi.string.min(3).max(30).required,
    year: joi.number.min(4).max(4).required,
    gender: joi.string.min(3).max(30).required,
    actors: joi.string.min(3).max(60).required,
    review: joi.string.max(200).required,
})

module.exports = { paramsSchema, bodySchema, querySchema  }