const ERROR_HANDLERS = {
    defaultError: (res, err) =>{
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