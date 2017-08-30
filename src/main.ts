/**
 * Created by Javier on 8/30/2017.
 */
const electron = require('electron');
const chalk = require('chalk');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;


let mainWindow;

app.on('ready', ()=>{
    console.log(chalk.bgMagenta('Started!'));
    mainWindow = new BrowserWindow({
        height: 400,
        width: 400
    });

    mainWindow.loadURL(`file://${__dirname}/countdown.html`);

    mainWindow.on('closed', _=> {
        console.log(chalk.blue('Closed!'));
        mainWindow = null;
    })
});
