const nunjucks = require('nunjucks')

module.exports = (app, viewEngineName) => {
  nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true
  })
  app.set('view engine', viewEngineName)
}
