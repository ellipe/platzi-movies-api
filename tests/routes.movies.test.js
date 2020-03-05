/* eslint-disable no-undef */
// TODO: Complete test suite.
const rewiremock = require('rewiremock/node')

const { moviesMock, MoviesServiceMock } = require('../utils/mocks/movies')
const testServer = require('../utils/testServer')

describe('routes - movies', () => {
  const route = rewiremock.proxy('../routes/movies', {
    '../services/movies': MoviesServiceMock
  })
  const path = '/api/movies'
  const request = testServer(path, route)

  test('Should response with a status code 200', async done => {
    await request.get('/api/movies').expect(200)
    done()
  })

  test('Should respond with the list of movies', async done => {
    request.get('/api/movies').end((err, res) => {
      expect(res.body).toStrictEqual({
        data: moviesMock,
        message: 'movies listed'
      })
      done()
    })
  })
})
