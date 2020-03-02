// Include the different route paths.
const movies = require('./routes/movies')

module.exports = app => {
  app.use('/api/movies', movies)
}
