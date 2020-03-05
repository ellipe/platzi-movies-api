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
  moviesMock,
  MoviesServiceMock,
  filteredMoviesMock
} = require('../utils/mocks/movies')
const testServer = require('../utils/testServer')

describe('routes - movies', () => {
  const route = rewiremock.proxy('../routes/movies', {
    '../services/movies': MoviesServiceMock
  })
  const path = '/api/movies'
  const request = testServer(path, route)

  describe('GET /movies', () => {
    test('Should response with a status code 200', async done => {
      await request.get('/api/movies').expect(200)
      done()
    })

    test('Should respond with the list of movies', done => {
      request.get('/api/movies').end((err, res) => {
        expect(res.body).toStrictEqual({
          data: moviesMock,
          message: 'movies listed'
        })
        done()
      })
    })

    test('Should respond with a filtered list of movies', done => {
      request.get('/api/movies?tags=Action').end((err, res) => {
        expect(res.body).toStrictEqual({
          data: filteredMoviesMock('Action'),
          message: 'movies listed'
        })
        done()
      })
    })
  })

  describe('GET /movies/:id', () => {
    test('Should response with a status code 200', async done => {
      await request.get('/api/movies/5e5e86656f40d61509b9d93c').expect(200)
      done()
    })

    test('When the ObjectId is not valid should response with a status code 400', async done => {
      await request.get('/api/movies/123').expect(400)
      done()
    })

    test('Should response a movie record', done => {
      request.get('/api/movies/5e5e86656f40d61509b9d93c').end((err, res) => {
        expect(res.body).toStrictEqual({
          data: moviesMock[0],
          message: 'movie retrieved'
        })
        done()
      })
    })
  })
})
