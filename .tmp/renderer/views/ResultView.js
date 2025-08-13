"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ResultView;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ResultView() {
  var navigate = (0, _reactRouterDom.useNavigate)();
  return /*#__PURE__*/_react["default"].createElement("div", null, "Result View");
}