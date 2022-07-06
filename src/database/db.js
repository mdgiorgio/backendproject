const mongoose = require('mongoose')
//conexion a la base de datos
console.log('Connecting to MongoDB...')

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log('Data base connected'))
  .catch((err) => console.error(err))