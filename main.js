var electron = require('electron')
var app = electron.app
var BrowserWindow = electron.BrowserWindow

app.on('window-all-closed', function () {
  app.quit()
})

app.on('ready', function () {
  var win = new BrowserWindow({
    title: 'gardencade',
    width: 1200,
    height: 800,
    minWidth: 700,
    minHeight: 300
  })

  win.loadURL('file://' + __dirname + '/index.html')

  win.on('closed', function () {
    win = null
  })
})
