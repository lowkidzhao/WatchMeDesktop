const { app, BrowserWindow } = require('electron')
/*
 app，它着您应用程序的事件生命周期。
 BrowserWindow，它负责创建和管理应用窗口。
*/
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
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
})