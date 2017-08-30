/**
 * Created by Javier on 8/30/2017.
 */
var electron = require('electron');
var chalk = require('chalk');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var mainWindow;
app.on('ready', function () {
    console.log(chalk.bgMagenta('Started!'));
    mainWindow = new BrowserWindow({
        height: 400,
        width: 400
    });
    mainWindow.loadURL("file://" + __dirname + "/countdown.html");
    mainWindow.on('closed', function (_) {
        console.log(chalk.blue('Closed!'));
        mainWindow = null;
    });
});
//# sourceMappingURL=main.js.map