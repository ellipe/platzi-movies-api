const { moviesMock, filteredMoviesMock } = require('./movies')

const getAllMovieStub = jest.fn((collection, query) => {
  if (query) {
    return filteredMoviesMock(query)
  }
  return moviesMock
})

const getMovieStub = jest.fn((collection, id) => {
  return moviesMock[0]
})

const createMovieStub = jest.fn((collection, data) => {
  return moviesMock[0].id
})

const updateMovieStub = jest.fn((collection, id, data) => {
  return moviesMock[0].id
})

const deleteMovieStub = jest.fn((collection, id, data) => {
  return moviesMock[0].id
})

class MongoLibMock {
  getAll(collection, query) {
    return getAllMovieStub(collection, query)
  }
  get(collection, id) {
    return getMovieStub(collection, id)
  }
  create(collection, data) {
    return createMovieStub(collection, data)
  }
  update(collection, id, data) {
    return updateMovieStub(collection, id, data)
  }

  delete(collection, id) {
    return deleteMovieStub(collection, id)
  }
}

module.exports = {
  getMovieStub,
  getAllMovieStub,
  createMovieStub,
  updateMovieStub,
  deleteMovieStub,
  MongoLibMock
}
