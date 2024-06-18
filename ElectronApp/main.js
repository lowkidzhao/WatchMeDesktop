const {app, BrowserWindow} = require('electron')
const path = require("node:path");
/*
 app，它着您应用程序的事件生命周期。
 BrowserWindow，它负责创建和管理应用窗口。
*/
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            /*
             __dirname 字符串指向当前正在执行的脚本的路径(在本例中，它指向你的项目的根文件夹)。
             path.join API 将多个路径联结在一起，创建一个跨平台的路径字符串。
            */
            preload:path.join(__dirname,'preload.js')
        }
    })
    //挂载默认页面
    win.loadFile('index.html')
}
/*
 启动程序
 app 模块的 ready 事件触发后才能创建 BrowserWindows 实例。
 使用 app.whenReady() API 来监听此事件，并在其成功后调用 createWindow() 方法。
*/
app.whenReady().then(() => {
    createWindow()
    // 如果没有窗口打开则打开一个窗口 (macOS)
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
/*
* 在 Windows 和 Linux 上，我们通常希望在关闭一个应用的所有窗口后让它退出。
* 您可以监听 app 模块的 window-all-closed 事件，并调用 app.quit() 来退出您的应用程序。
* 此方法不适用于 macOS。
*/
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})