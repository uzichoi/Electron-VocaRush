"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SettingView;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function SettingView() {
  var navigate = (0, _reactRouterDom.useNavigate)();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "setting-view"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "setting-title"
  }, "How to Play"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "setting-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "description-board"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "description-row"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "1.  2\uC778 \uBC30\uD2C0\uD615 \uB2E8\uC5B4 \uCC3E\uAE30 \uAC8C\uC784\uC785\uB2C8\uB2E4.")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "description-row"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "2.  \uBC84\uD2BC\uC744 \uBA3C\uC800 \uB204\uB978 \uC0AC\uB78C\uC774 \uC785\uB825 \uAE30\uD68C\uB97C \uAC00\uC9D1\uB2C8\uB2E4.")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "description-row"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "3.  \uC785\uB825 \uC81C\uD55C \uC2DC\uAC04\uC740 5\uCD08\uC785\uB2C8\uB2E4.")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "description-row"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "4.  EASY, NORMAL, HARD \uC138 \uB2E8\uACC4\uB85C \uAD6C\uC131\uB418\uBA70, \uB09C\uC774\uB3C4\uC5D0 \uB530\uB77C \uC815\uB2F5 \uB2E8\uC5B4\uC758 \uAE38\uC774\uC640 \uBC30\uC810\uC774 \uB2E4\uB985\uB2C8\uB2E4.")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "description-row"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "5.  \uC5F0\uC18D \uC815\uB2F5 \uC2DC \uCF64\uBCF4 \uBC30\uC218\uAC00 \uC801\uC6A9\uB429\uB2C8\uB2E4.")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "setting-footer"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "setting-btn-small",
    onClick: function onClick() {
      return navigate('/');
    }
  }, "\u2190 Back")));
}