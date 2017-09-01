/**
 * Created by Javier on 8/30/2017.
 */
var electronRenderer = require('electron');
var ipc = electronRenderer.ipcRenderer;
document.getElementById('start').addEventListener('click', function (_) {
    ipc.send('countdown-start');
});
ipc.on('countdown', function (evt, count) {
    console.log("ipc ON");
    document.getElementById('count').innerHTML = count;
});
//# sourceMappingURL=renderer.js.map