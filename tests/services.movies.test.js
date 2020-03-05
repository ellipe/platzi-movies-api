/* eslint-disable no-undef */

/**
 * Routes
 * Test suite for express routing testing using rewiremock to handle modules mocking
 *
 * @author: Luis Felipe Bertel <ellipe@gmail.com>
 * TODO: Complete test suite.
 */

const rewiremock = require('rewiremock/node')

const {
  MongoLibMock,
  getAllMovieStub,
  getMovieStub,
  createMovieStub,
  updateMovieStub,
  deleteMovieStub
} = require('../utils/mocks/mongoLib')
const { moviesMock } = require('../utils/mocks/movies')

describe('services - movies', () => {
  const MoviesServices = rewiremock.proxy('../services/movies', {
    '../lib/mongo': MongoLibMock
  })

  const moviesServices = new MoviesServices()

  describe('when getMovies method is called', () => {
    test('should call the getAll MongoLib method', async done => {
      await moviesServices.getMovies({})
      expect(getAllMovieStub).toHaveBeenCalled()
      done()
    })

    test('should return an array of movies', async done => {
      const movies = await moviesServices.getMovies({})
      expect(movies).toStrictEqual(moviesMock)
      done()
    })
  })

  describe('when getMovie method is called', () => {
    test('should call the get MongoLib method', async done => {
      await moviesServices.getMovie({})
      expect(getMovieStub).toHaveBeenCalled()
      done()
    })

    test('should return a movie', async done => {
      const movies = await moviesServices.getMovie({})
      expect(movies).toStrictEqual(moviesMock[0])
      done()
    })
  })

  describe('when createMovie method is called', () => {
    test('should call the create MongoLib method', async done => {
      await moviesServices.createMovie({})
      expect(createMovieStub).toHaveBeenCalled()
      done()
    })

    test('should return the id of the created movie', async done => {
      const movieId = await moviesServices.createMovie({})
      expect(movieId).toStrictEqual(moviesMock[0].id)
      done()
    })
  })

  describe('when updateMovie method is called', () => {
    test('should call the update MongoLib method', async done => {
      await moviesServices.updateMovie({})
      expect(updateMovieStub).toHaveBeenCalled()
      done()
    })

    test('should return the id of the updated movie', async done => {
      const movieId = await moviesServices.updateMovie({})
      expect(movieId).toStrictEqual(moviesMock[0].id)
      done()
    })
  })

  describe('when deleteMovie method is called', () => {
    test('should call the delete MongoLib method', async done => {
      await moviesServices.deleteMovie({})
      expect(deleteMovieStub).toHaveBeenCalled()
      done()
    })

    test('should return the id of the updated movie', async done => {
      const movieId = await moviesServices.deleteMovie({})
      expect(movieId).toStrictEqual(moviesMock[0].id)
      done()
    })
  })
})
