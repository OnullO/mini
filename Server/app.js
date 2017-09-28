const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const route = require('./routers')
app.set('port', (process.env.port || 6666))
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
route(app)

app.listen(app.get('port'), function () {
  console.log('listening ' + app.get('port') + '...')
})
