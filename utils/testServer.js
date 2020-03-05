const express = require('express')
const supertest = require('supertest')

// In Memory Express Server
// Creates a new Express Server, passses path and route to be configured.
function testServer(path, route) {
  const app = express()

  app.use(path, route)
  return supertest(app)
}

module.exports = testServer
