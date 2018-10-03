const {app, BrowserWindow, ipcMain, Tray} = require('electron')
const path = require('path')

let tray = undefined
let window = undefined

// This method is called once Electron is ready to run our code
// It is effectively the main method of our Electron app
app.on('ready', () => {
  // Setup the menubar with an icon
//   let icon = nativeImage.createFromDataURL(base64Icon)
  tray = new Tray(__dirname+'/src/images/bus.png')

  // Add a click handler so that when the user clicks on the menubar icon, it shows
  // our popup window
  tray.on('click', function(event) {
    toggleWindow()
  })

  // Make the popup window for the menubar
  window = new BrowserWindow({
    width: 400,
    height: 550,
    show: false,
    frame: false,
    resizable: false,
  })

  // Tell the popup window to load our index.html file
  window.loadURL(`file://${path.join(__dirname, '/src/html/index.html')}`)


  // Only close the window on blur if dev tools isn't opened
  window.on('blur', () => {
      window.hide()
  })
})

function toggleWindow(){
  if (window.isVisible()) {
    window.hide()
  } else {
    showWindow()
  }
}

function showWindow() {
  const trayPos = tray.getBounds()
  const windowPos = window.getBounds()
  let x, y = 0
  if (process.platform == 'darwin') {
    x = Math.round(trayPos.x + (trayPos.width / 2) - (windowPos.width / 2))
    y = Math.round(trayPos.y + trayPos.height)
  } else {
    x = Math.round(trayPos.x + (trayPos.width / 2) - (windowPos.width / 2))
    y = Math.round(trayPos.y + trayPos.height * 10)
  }
  window.setPosition(x, y, false)
  window.show()
  window.focus()
}

app.on('quit-app', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
