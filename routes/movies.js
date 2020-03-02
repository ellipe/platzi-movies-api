// Create a route.

const { Router } = require('express')
const { moviesMock } = require('../utils/mocks/movies')

const router = new Router()

// TODO: Create a Controller file with the functions to handle every possible path under /api/movies/
router.get('/', async (req, res) => {
  try {
    const movies = await Promise.resolve(moviesMock)
    res.status(200).json({
      data: movies,
      message: 'movies listed'
    })
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
