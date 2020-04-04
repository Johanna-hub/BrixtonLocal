const express = require('express')
const path = require('path')

const app = express()

app.set('port', process.env.PORT || 3001)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')))
}

module.exports = app
