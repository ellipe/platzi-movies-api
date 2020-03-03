const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const rfs = require('rotating-file-stream')

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

// create a rotating write stream
const accessLogStream = rfs.createStream('access.log', {
  size: '10M', // rotate every 10 MegaBytes written
  interval: '1d', // rotate daily
  compress: 'gzip' // compress rotated files
})

app.use(morgan('combined', { stream: accessLogStream }))

// Middlewares.
app.use(bodyParser.json())

// Configure routes
routerConfig(app)

// Error Handlers
app.use(notFoundHandler)
app.use(logError)
app.use(wrapErrors)
app.use(errorHandler)

app.listen(config.port, () => {
  console.log(`Listening in port ${config.port}`)
})
