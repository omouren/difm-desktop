# DI.FM for Desktop
[![Build Status](https://travis-ci.org/omouren/difm-desktop.svg?branch=master)](https://travis-ci.org/omouren/difm-desktop)

A desktop app for [DI.FM](https://www.di.fm/). This desktop app is supported by both [Nativefier](https://github.com/jiahaog/nativefier) and [Electron](https://github.com/electron/electron).

The Mac, Windows, and Linux apps can be downloaded from the [latest release](https://github.com/omouren/difm-desktop/releases).

## Purpose
The purpose of this project is to build dedicated desktop apps for DI.FM and leverage your OS's built in notification system.

This desktop app is not an official product of DI.FM and I am not affiliated with DI.FM in any way.

## Rebuilding the app
Requires `node`

### Nativefier
Install nativefier and make sure to have your [optional dependencies](https://github.com/jiahaog/nativefier#optional-dependencies) set up to replace the icon.
```
npm install -g nativefier
```

### Mac
```
nativefier --platform "mac" --icon difm-logo.png --name "DI.FM" "https://www.di.fm" --honest --disable-dev-tools --single-instance --tray
```

### Windows
```
nativefier --platform "windows" --icon difm-logo.png --name "DI.FM" "https://www.di.fm" --honest --disable-dev-tools --single-instance --tray
```

### Linux
```
nativefier --platform "linux" --icon difm-logo.png --name "DI.FM" "https://www.di.fm" --honest --disable-dev-tools --single-instance --tray
```
