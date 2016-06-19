var fs = require('fs')
var path = require('path')
var extend = require('xtend')

module.exports = {
  namespace: 'game',
  state: {
    currentStage: 0,
    stages: [
      {
        svg: fs.readFileSync(path.join(__dirname, '..', 'images/0.svg'))
      },
      {
        svg: fs.readFileSync(path.join(__dirname, '..', 'images/1.svg'))
      },
      {
        svg: fs.readFileSync(path.join(__dirname, '..', 'images/2.svg'))
      },
      {
        svg: fs.readFileSync(path.join(__dirname, '..', 'images/3.svg'))
      },
      {
        svg: fs.readFileSync(path.join(__dirname, '..', 'images/4.svg'))
      },
      {
        svg: fs.readFileSync(path.join(__dirname, '..', 'images/5.svg'))
      },
      {
        svg: fs.readFileSync(path.join(__dirname, '..', 'images/6.svg'))
      }
    ]
  },
  reducers: {
    stage: function (action, state) {
      var newState = extend(state, { currentStage: action.stage })
      return newState
    }
  },
  subscriptions: [
    function (send) {
      var i = 0
      window.setInterval(function () {
        send('game:stage', { stage: i })
        i++
        if (i >= 7) i = 0
      }, 1000)
    }
  ]
}
