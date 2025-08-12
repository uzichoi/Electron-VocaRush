"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = StartView;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function StartView() {
  var navigate = (0, _reactRouterDom.useNavigate)();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "start-screen"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "subtitle"
  }, "WELCOME TO"), /*#__PURE__*/_react["default"].createElement("h1", {
    className: "title"
  }, "VocaRush"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn btn-primary",
    onClick: function onClick() {
      return navigate('/game');
    }
  }, "START"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "menu-row"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn",
    onClick: function onClick() {
      return navigate('/setting');
    }
  }, "How to Play"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn btn-danger",
    onClick: function onClick() {
      return window.close();
    }
  }, "Exit"))));
}