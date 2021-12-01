import { app, BrowserWindow } from 'electron';
import { join } from 'path';

app.on('ready', () => {
  const mainWindow = new BrowserWindow();
  const entry = require(join(__dirname, '../entry.js')) + '/#/home';
  mainWindow.loadURL(entry);
  mainWindow.webContents.openDevTools();
});
