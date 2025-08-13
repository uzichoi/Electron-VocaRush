"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = require("react-dom/client");
var _reactRouterDom = require("react-router-dom");
var _StartView = _interopRequireDefault(require("./views/StartView"));
var _GameView = _interopRequireDefault(require("./views/GameView"));
var _SettingView = _interopRequireDefault(require("./views/SettingView"));
var _ResultView = _interopRequireDefault(require("./views/ResultView"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// React는 src/renderer/App.jsx부터 시작됨

// default export
// named export
// React 18부터는 react-dom에서 render을 직접 쓰지 않고 createRoot를 써야 한다. 현재 버전 react@19.1.1

function App() {
  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.HashRouter, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react["default"].createElement(_StartView["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/game",
    element: /*#__PURE__*/_react["default"].createElement(_GameView["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/setting",
    element: /*#__PURE__*/_react["default"].createElement(_SettingView["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/result",
    element: /*#__PURE__*/_react["default"].createElement(_ResultView["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "*",
    element: /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Navigate, {
      to: "/",
      replace: true
    })
  })));
}
var root = (0, _client.createRoot)(document.getElementById("app"));
root.render(/*#__PURE__*/_react["default"].createElement(App, null));