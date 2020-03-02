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

router.get('/:id', async (req, res) => {
  try {
    const movies = await Promise.resolve(moviesMock[0])
    res.status(200).json({
      data: movies,
      message: 'movie retrieved'
    })
  } catch (err) {
    console.log(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const createdMovieId = await Promise.resolve(moviesMock[0].id)
    res.status(201).json({
      data: createdMovieId,
      message: 'movie created'
    })
  } catch (err) {
    console.log(err)
  }
})

router.put('/:id', async (req, res) => {
  try {
    const updatedMovieId = await Promise.resolve(moviesMock[0].id)
    res.status(200).json({
      data: updatedMovieId,
      message: 'movie updated'
    })
  } catch (err) {
    console.log(err)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const deletedMovieId = await Promise.resolve(moviesMock[0].id)
    res.status(200).json({
      data: deletedMovieId,
      message: 'movie deleted'
    })
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
