const { app, BrowserWindow ,Menu } = require('electron/main')
const path = require("node:path");
// const path = require('node:path')

const createWindow = () => {
    // 隐藏菜单栏
    Menu.setApplicationMenu(null)
    // 定义初始化大小
    const win = new BrowserWindow({
        width: 1100,
        height: 800,
        icon: path.join(__dirname, './public/favicon.ico'),
        // frame: false,
        // transparent: false,
        // backgroundColor: '#00000000',
        // titleBarStyle: 'hidden'
    })

    win.loadURL('http://localhost:3000/')

    // 打开开发者工具
    //win.webContents.openDevTools()

}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})