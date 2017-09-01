///<reference path="../node_modules/@types/node/index.d.ts"/>
/**
 * Created by Javier on 8/30/2017.
 */
const electron = require('electron');
const chalk = require('chalk');
const countdown = require('./countdown');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;


let mainWindow;

app.on('ready', ()=>{
    console.log(chalk.bgMagenta('Started!'));
    mainWindow = new BrowserWindow({
        height: 900,
        width: 900
    });

    // mainWindow.loadURL(`file://${__dirname}/countdown.html`);
    mainWindow.loadURL(`file://${__dirname}/countdown.html`);

    mainWindow.on('closed', _=> {
        console.log(chalk.blue('Closed!'));
        mainWindow = null;
    })
});

ipcMain.on('countdown-start', _=> {
    countdown(count => {
        mainWindow.webContents.send('countdown', count)
    });
});
