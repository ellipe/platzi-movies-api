// Create a route.

const { Router } = require('express')
const MovieService = require('../services/movies')

const router = new Router()
const movieService = new MovieService()

// TODO: Create a Controller file with the functions to handle every possible path under /api/movies/
router.get('/', async (req, res) => {
  const { tags } = req.query
  try {
    const movies = await movieService.getMovies({ tags })
    res.status(200).json({
      data: movies,
      message: 'movies listed'
    })
  } catch (err) {
    console.log(err)
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const movies = await movieService.getMovie({ id })
    res.status(200).json({
      data: movies,
      message: 'movie retrieved'
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      data: null,
      message: 'An error has ocurred'
    })
  }
})

router.post('/', async (req, res) => {
  const { body: movie } = req
  try {
    const createdMovieId = await movieService.createMovie({ movie })
    res.status(201).json({
      data: createdMovieId,
      message: 'movie created'
    })
  } catch (err) {
    console.log(err)
  }
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { body: movie } = req
  try {
    const updatedMovieId = await movieService.updateMovie({ id, movie })
    res.status(200).json({
      data: updatedMovieId,
      message: 'movie updated'
    })
  } catch (err) {
    console.log(err)
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const deletedMovieId = await movieService.deleteMovie({ id })
    res.status(200).json({
      data: deletedMovieId,
      message: 'movie deleted'
    })
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
