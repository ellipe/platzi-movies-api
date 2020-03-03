const express = require('express')
const { config } = require('./config/index')
const routerConfig = require('./routes')

// Start the express application
const app = express()

// Parsers.
app.use(express.json())

// Configure router
routerConfig(app)

app.listen(config.port, () => {
  console.log(`Listening in port ${config.port}`)
})
