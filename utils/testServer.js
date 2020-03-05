const express = require('express')
const supertest = require('supertest')

const { errorHandler, wrapErrors } = require('./middleware/errorHandler')
const notFoundHandler = require('./middleware/notFoundHandler')

// In Memory Express Server
// Creates a new Express Server, passses path and route to be configured.
function testServer(path, route) {
  const app = express()

  app.use(path, route)

  // Error Handlers
  app.use(notFoundHandler)
  app.use(wrapErrors)
  app.use(errorHandler)

  return supertest(app)
}

module.exports = testServer
