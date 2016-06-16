var el = require('bel')
var css = require('sheetify')

module.exports = function (params, state, send) {
  var prefix = css`
    :host {
      color: #333;
    }
  `

  return el`
    <div class="${prefix}">spy on the other farm</div>
  `
}
