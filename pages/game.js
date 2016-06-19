var el = require('bel')
var css = require('sheetify')
var animate = require('animate-styles')

module.exports = function (params, state, send) {
  var stageID = state.game.currentStage
  var stage = state.game.stages[stageID]

  var prefix = css`
    :host {
      color: #333;
      height: 100%;
    }

    .svg-wrapper {
      height: 100%;
    }

    .stage {
      width: auto;
      height: 600px;
      display: block;
      margin: 0 auto;
    }
  `

  var svgWrapper = el`<div class="svg-wrapper"></div>`
  svgWrapper.innerHTML = stage.svg

  return el`
    <div class="${prefix} transition">
      ${svgWrapper}
    </div>
  `
}
