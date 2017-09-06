const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
require('electron-reload')(__dirname, {electron: require('${__dirname}/../../node_modules/electron')});

require('dotenv').config();

let win = null;

app.on('ready', () => {

	// Initialie the window to our specified dimensions
	win = new BrowserWindow({width:1000, height:600});

	// Specify entry point
	if (process.env.PACKAGE === 'true') {
		win.loadURL(url.format({
			pathname: path.join(__dirname, 'dist/index.html'),
			protocol: 'file:',
			slashes: true
		}));
	} else {
		win.loadURL(process.env.HOST);
		// Show dev tools
		// Remove this line before distributing
		// win.webContents.openDevTools();
	}
	
	// Remove window once app is closed
	win.on('closed', () => {
		win = null;
	});

});

app.on('activate', () => {
	if (win === null) {
		createWindow();
	}
});

app.on('window-all-closed', () => {
	if (process.platform != 'darwin') {
		app.quit();
	}
});
