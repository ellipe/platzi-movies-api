const express = require('express')

// Config
const routerConfig = require('./routes')
const { config } = require('./config/index')
const {
  logError,
  errorHandler,
  wrapErrors
} = require('./utils/middleware/errorHandler')
const notFoundHandler = require('./utils/middleware/notFoundHandler')

// Start the express application
const app = express()

// Middlewares.
app.use(express.json())

// Configure routes
routerConfig(app)
// Handler for 404 Errors
app.use(notFoundHandler)

// Error Handlers
app.use(logError)
app.use(wrapErrors)
app.use(errorHandler)

app.listen(config.port, () => {
  console.log(`Listening in port ${config.port}`)
})
