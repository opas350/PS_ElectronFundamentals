/**
 * Created by Javier on 8/30/2017.
 */
const electronRenderer = require('electron');
const ipc = electronRenderer.ipcRenderer;

document.getElementById('start').addEventListener('click', _=> {
    ipc.send('countdown-start')
});

ipc.on('countdown', (evt, count) => {
    console.log("ipc ON");
    document.getElementById('count').innerHTML = count;
});
