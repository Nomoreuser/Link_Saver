const {app,BrowserWindow} = require('electron');

function createWindow(){
    const win = new BrowserWindow({
        width: 650,
        height: 500,
        frame: false,
        resizable: false,
        transparent: true
    })
    win.loadFile('src/index.html');
}

app.whenReady().then(createWindow);