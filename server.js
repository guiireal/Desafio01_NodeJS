const express = require('express')
const app = express()
const viewEngine = require('./configs/viewEngine')

app.use(express.urlencoded({
  extended: true
}))
viewEngine(app, 'njk')
app.use(require('./routes'))

app.listen(3000)
