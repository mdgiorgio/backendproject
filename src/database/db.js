const mongoose = require('mongoose')

console.log('Connecting to MongoDB...')

mongoose
  .connect('mongodb://localhost/people')
  .then(() => console.log('Data base connected'))
  .catch((err) => console.error(err))