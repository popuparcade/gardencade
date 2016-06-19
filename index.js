var choo = require('choo')
var css = require('sheetify')
var el = require('bel')
var app = choo()

css('normalize.css')
css('basscss')
css('./styles.css', { global: true })

var start = require('./pages/start')
var game = require('./pages/game')
var spy = require('./pages/spy')

app.model(require('./models/app'))
app.model(require('./models/game'))

app.router(function (route) {
  return [
    route('/', game),
    route('/game', game),
    route('/spy', spy)
  ]
})

var tree = app.start()
document.body.appendChild(tree)
