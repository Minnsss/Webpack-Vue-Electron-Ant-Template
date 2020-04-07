const { app, BrowserWindow, ipcMain } = require("electron");
let mainWindow = require("./index.js");

//注册全局变量
// 页面跟路径配置，优先使用此配置，考虑到小版本更新时，版本之间的切换
global.wwwroot = {
    path: __dirname
};
global.cookie = "";
//主窗口id，在创建主窗口的js中获取并修改此处
global.windowIds = {
    main: 0
};

app.on('ready', () => {
     mainWindow.create();
});

//启动主窗体
ipcMain.on('create-main',(event,arg) => {
    // h5页面指向指定版本
    // global.wwwroot.path = arg.newVersionPath ? arg.newVersionPath : __dirname;
    // if (arg.version) setVal('version','smallVersion', arg.version);
    // indexWin.create();
    mainWindow.destroy();
});

app.on('window-all-closed', function() {
    setTimeout(() => {
        let allwindow = BrowserWindow.getAllWindows();
        if (allwindow.length === 0 ) app.exit(1);
    }, 500);
});