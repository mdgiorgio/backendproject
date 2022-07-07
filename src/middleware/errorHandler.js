const ERROR_HANDLERS = {
    UnauthorizedError: (res, err) => {
        res
            .status(401)
            .send({ error: err.name, 
                cause: err.message,
                message: 'Login to access'})
    },
    
    ValidationError: (res, err) => {
        res
            .status(422)
            .send({ error: err.name, 
                cause: err.message,
                message: 'Enter the data please'})
    },

    MongoServerError: (res, err) => {
        res
            .status(400)
            .send({ 
                error: err.name,
                cause: err.message, 
                message: 'Please, try with other data' })
    },

    defaultError: (res, err) => {
        // por defecto para preveer errores 500; puedo agregar los necesarios
        res
            .status(500)
            .send({ error: err.name, cause: err.message })
    }
}

const errorHandler =  (err, req, res, next) => {
    const handler = ERROR_HANDLERS[err.name] || ERROR_HANDLERS.defaultError
    //accede al error mediante la ky, le asigna el valor a const, 
    //caso contrario le asigna .defaultError
    handler(res, err) //da la rta y el error
}

module.exports = errorHandler