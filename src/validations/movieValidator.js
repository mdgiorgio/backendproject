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
    title: Joi.string().alphanum().min(3).max(45).required,
    director: Joi.string().alphanum().min(3).max(30).required,
    year: Joi.number().min(4).max(4).required,
    gender: Joi.string().alphanum().min(3).max(30).required,
    actors: Joi.string().alphanum().min(3).max(60).required,
    review: Joi.string().alphanum().max(200).required,
})

module.exports = { paramsSchema, bodySchema, querySchema  }