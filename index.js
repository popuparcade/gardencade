var choo = require('choo')
var css = require('sheetify')
var el = require('bel')
var app = choo()

css('normalize.css')
css('basscss')

app.model({
  namespace: 'app',
  state: {
    title: 'gardencade',
  },
  reducers: {}
})

function main (params, state, send) {
  return el`<hi class="h1">gardencade</hi>`
}

app.router(function (route) {
  return [
    route('/', main),
  ]
})

var tree = app.start()
document.body.appendChild(tree)
