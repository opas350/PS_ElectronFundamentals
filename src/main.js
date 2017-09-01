///<reference path="../node_modules/@types/node/index.d.ts"/>
/**
 * Created by Javier on 8/30/2017.
 */
var electron = require('electron');
var chalk = require('chalk');
var countdown = require('./countdown');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var ipcMain = electron.ipcMain;
var mainWindow;
app.on('ready', function () {
    console.log(chalk.bgMagenta('Started!'));
    mainWindow = new BrowserWindow({
        height: 900,
        width: 900
    });
    // mainWindow.loadURL(`file://${__dirname}/countdown.html`);
    mainWindow.loadURL("file://" + __dirname + "/countdown.html");
    mainWindow.on('closed', function (_) {
        console.log(chalk.blue('Closed!'));
        mainWindow = null;
    });
});
ipcMain.on('countdown-start', function (_) {
    countdown(function (count) {
        mainWindow.webContents.send('countdown', count);
    });
});
//# sourceMappingURL=main.js.map