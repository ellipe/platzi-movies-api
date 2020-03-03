const express = require('express')

// Config
const routerConfig = require('./routes')
const { config } = require('./config/index')
const { logError, errorHandler } = require('./utils/middleware/errorHandler')

// Start the express application
const app = express()

// Middlewares.
app.use(express.json())

// Configure routes
routerConfig(app)

// Error Handlers
app.use(logError)
app.use(errorHandler)

app.listen(config.port, () => {
  console.log(`Listening in port ${config.port}`)
})
