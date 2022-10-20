const electron = require("electron");
const path = require("path");
const server = require("./server/server");
const storage = require("electron-json-storage");

const SETTINGS = require("./settings/system.json");

console.log("storage path:", storage.getDataPath());
// const isDev = process?.env?.APP_DEV ? true : false;
const isDev = true;
console.log(13, { isDev });

const { app: electronApp, BrowserWindow, ipcMain, Menu, Tray } = electron;

let mainWindow, splashWindow;
const width = SETTINGS.APPLICATION.SIZE.WIDTH;
const height = SETTINGS.APPLICATION.SIZE.HEIGHT;

electronApp.on("ready", () => {
  splashWindow = new BrowserWindow({
    width: 500,
    height: 300,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    show: true
  });

  splashWindow.loadURL(`${__dirname}/${SETTINGS.SPLASH_PAGE}`);
  splashWindow.center();

  mainWindow = new BrowserWindow({
    autoHideMenuBar: true,
    width: width,
    minWidth: width,
    height: height,
    minHeight: height,
    resizable: true,
    frame: true,
    // backgroundColor: SETTINGS.APPLICATION.COLORS.BG,
    movable: true,
    minimizable: true,
    maximizable: true,
    // icon: __dirname + SETTINGS.LOGOS.SMALL,
    show: false,
    webPreferences: {
      contextIsolation: false,
      devTools: isDev,
      nodeIntegration: true,
      preload: __dirname + SETTINGS.SCRIPTS.PRELOAD,
      webSecurity: false
    }
  });

  mainWindow.setAspectRatio(width / height);

  if (isDev) {
    mainWindow.loadURL("http://localhost:9999/");
  } else {
    mainWindow.loadFile(`${__dirname}${SETTINGS.LOAD_URL.BUILD}`);
  }

  mainWindow.once("ready-to-show", () => {
    console.log("ready");
    setTimeout(function () {
      splashWindow.close();
      splashWindow = null;
      mainWindow.show();
    }, 500);
  });

  mainWindow.on("minimize", event => {
    event.preventDefault();
    mainWindow.hide();
  });

  mainWindow.on("closed", () => {
    electronApp.quit();
    mainWindow = null;
  });

  server(mainWindow);
});
