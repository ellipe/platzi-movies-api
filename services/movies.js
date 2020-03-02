const { moviesMock } = require('../utils/mocks/movies')

class MoviesService {
  async getMovies() {
    const movies = await Promise.resolve(moviesMock)
    return movies || []
  }

  async getMovie() {
    const movie = await Promise.resolve(moviesMock[0])
    return movie || {}
  }

  async createMovie() {
    const createdMovieId = await Promise.resolve(moviesMock[0])
    return createdMovieId
  }

  async updateMovie() {
    const updatedMovieId = await Promise.resolve(moviesMock[0])
    return updatedMovieId
  }

  async deleteMovie() {
    const deleteMovieId = await Promise.resolve(moviesMock[0])
    return deleteMovieId
  }
}

module.exports = MoviesService
