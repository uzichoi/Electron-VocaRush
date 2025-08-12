"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = StartView;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function StartView() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "hero"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "subtitle"
  }, "WELCOME TO"), /*#__PURE__*/_react["default"].createElement("h1", {
    className: "title"
  }, "VocaRush"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn btn-primary"
  }, "START"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "menu-row"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn"
  }, "How to Play"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn btn-danger"
  }, "Exit"))));
}