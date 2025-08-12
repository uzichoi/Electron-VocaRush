"use strict";

var _electron = require("electron");
var _createWindows = _interopRequireDefault(require("./createWindows.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Electron은 src/main/index.js부터 시작됨

// 확장자 명시 필요할 수도 있음

_electron.app.whenReady().then(function () {
  (0, _createWindows["default"])(); // 창 생성
});
_electron.app.on("activate", function () {
  // macOS에서 창이 모두 닫힌 후 앱 아이콘 클릭 시 다시 열기
  if (BrowserWindow.getAllWindows().length === 0) {
    (0, _createWindows["default"])();
  }
});