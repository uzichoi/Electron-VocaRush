"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = GameView;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// React: 컴포넌트를 만들기 위한 기본 라이브러리
// useState: 컴포넌트의 상태(데이터)를 관리하는 Hook(소프트웨어 구성 요소 간에 발생하는 함수 호출, 메시지, 이벤트 등을 중간에서 바꾸거나 가로채는 명령, 방법, 기술이나 행위)
// useEffect: 컴포넌트가 화면에 나타날 때 실행할 코드를 정의
// useNavigate: 다른 페이지로 이동할 때 사용하는 훅

function GameView() {
  var navigate = (0, _reactRouterDom.useNavigate)(); // navigate: 다른 페이지로 이동하는 기능을 담은 변수
  var _useState = (0, _react.useState)({
      // gameState: 현재 게임 상태를 담은 변수, setGameState: 게임 상태를 변경할 때 사용하는 함수
      // 단어 배치 알고리즘은 추후 수정 후 반영할 예정
      currentWord: "about",
      // 현재 찾아야 하는 단어
      foundLetters: ['a', 'b', 'o', 'u', 't'],
      // 찾은 글자들
      player1: {
        name: "Player 1",
        score: 0,
        combo: 0,
        maxCombo: 0,
        hp: 3
      },
      player2: {
        name: "Player 2",
        score: 0,
        combo: 0,
        maxCombo: 0,
        hp: 3
      },
      inputValue: "",
      // 플레이어가 입력한 단어
      timeIncreased: 0 // 증가한 시간(초)
    }),
    _useState2 = _slicedToArray(_useState, 2),
    gameState = _useState2[0],
    setGameState = _useState2[1];

  // 단어 그리드 생성 (10x10)
  var generateGrid = function generateGrid() {
    var grid = []; // 빈 그리드 준비
    var word = gameState.currentWord.toUpperCase(); // 대문자로 변환

    for (var i = 0; i < 10; i++) {
      var row = [];
      for (var j = 0; j < 10; j++) {
        // 단어의 글자들을 랜덤하게 배치
        if (i === 3 && j >= 2 && j < 2 + word.length) {
          row.push(word[j - 2]);
        } else if (Math.random() < 0.3) {
          // 30% 확률로 랜덤 알파벳 배치
          var randomLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          row.push(randomLetters[Math.floor(Math.random() * randomLetters.length)]);
        } else {
          row.push('*'); // 나머지는 빈 칸(*)으로 매핑
        }
      }
      grid.push(row);
    }
    return grid; // 완성된 10*10 그리드 반환
  };
  var _useState3 = (0, _react.useState)(generateGrid()),
    _useState4 = _slicedToArray(_useState3, 2),
    grid = _useState4[0],
    setGrid = _useState4[1]; // grid: 10*10 글자 격자를 담은 변수, setGrid: 격자를 업데이트할 때 사용

  // 타이머
  (0, _react.useEffect)(function () {
    var timer = setInterval(function () {
      // 1초마다 실행
      setGameState(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          // 기존 상태 복사
          timeIncreased: prev.timeIncreased < 300 ? prev.timeIncreased + 1 : 300 // 최대 3분. 1초씩 증가
        });
      });
    }, 1000);
    return function () {
      return clearInterval(timer);
    };
  }, []);
  var handleInputSubmit = function handleInputSubmit(e) {
    // 단어 입력 처리
    e.preventDefault();
    // 단어 검증 로직 (추후 구현)
    console.log("Submitted word:", gameState.inputValue); // 콘솔에 출력
    setGameState(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        inputValue: ""
      });
    }); // 입력창 비우기
  };

  // 시간 포맷팅
  var formatTime = function formatTime(seconds) {
    var mins = Math.floor(seconds / 60); // 분 계산
    var secs = seconds % 60; // 초 계산
    return "".concat(mins, ":").concat(secs.toString().padStart(2, '0')); // "1:05" 형태로 반환
  };

  // 화면 구성 시작
  return (
    /*#__PURE__*/
    // 화면에 보여 줄 HTML 구조 반환
    _react["default"].createElement("div", {
      className: "game-view"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "game-header"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "header-left"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "game-title"
    }, "VOCARUSH")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "header-center"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "game-timer"
    }, formatTime(gameState.timeIncreased))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "header-right"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: "btn-small",
      onClick: function onClick() {
        return navigate('/');
      }
    }, "\u2190 Back"))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "game-main"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "player-info"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "player-photo"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "photo-placeholder"
    }, /*#__PURE__*/_react["default"].createElement("span", null, "\uD83D\uDCF7"))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "player-card"
    }, /*#__PURE__*/_react["default"].createElement("h3", null, "Player 1"), /*#__PURE__*/_react["default"].createElement("div", {
      className: "stat"
    }, /*#__PURE__*/_react["default"].createElement("span", null, "Name:"), /*#__PURE__*/_react["default"].createElement("span", {
      className: "value"
    }, gameState.player1.name)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "stat"
    }, /*#__PURE__*/_react["default"].createElement("span", null, "Score:"), /*#__PURE__*/_react["default"].createElement("span", {
      className: "value score"
    }, gameState.player1.score)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "stat"
    }, /*#__PURE__*/_react["default"].createElement("span", null, "Combo:"), /*#__PURE__*/_react["default"].createElement("span", {
      className: "value combo"
    }, gameState.player1.combo)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "stat"
    }, /*#__PURE__*/_react["default"].createElement("span", null, "Max Combo:"), /*#__PURE__*/_react["default"].createElement("span", {
      className: "value"
    }, gameState.player1.maxCombo)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "stat"
    }, /*#__PURE__*/_react["default"].createElement("span", null, "HP:"), /*#__PURE__*/_react["default"].createElement("div", {
      className: "hp-bar"
    }, _toConsumableArray(Array(3)).map(function (_, i) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: i,
        className: "hp-heart ".concat(i < gameState.player1.hp ? 'active' : '')
      }, "\u2665");
    }))))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "game-board"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "word-grid"
    }, grid.map(function (row, i) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: i,
        className: "grid-row"
      }, row.map(function (cell, j) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: j,
          className: "grid-cell ".concat(cell !== '*' ? 'letter' : 'empty')
        }, cell);
      }));
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "player-info"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "player-photo"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "photo-placeholder"
    }, /*#__PURE__*/_react["default"].createElement("span", null, "\uD83D\uDCF7"))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "player-card"
    }, /*#__PURE__*/_react["default"].createElement("h3", null, "Player 2"), /*#__PURE__*/_react["default"].createElement("div", {
      className: "stat"
    }, /*#__PURE__*/_react["default"].createElement("span", null, "Name:"), /*#__PURE__*/_react["default"].createElement("span", {
      className: "value"
    }, gameState.player2.name)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "stat"
    }, /*#__PURE__*/_react["default"].createElement("span", null, "Score:"), /*#__PURE__*/_react["default"].createElement("span", {
      className: "value score"
    }, gameState.player2.score)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "stat"
    }, /*#__PURE__*/_react["default"].createElement("span", null, "Combo:"), /*#__PURE__*/_react["default"].createElement("span", {
      className: "value combo"
    }, gameState.player2.combo)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "stat"
    }, /*#__PURE__*/_react["default"].createElement("span", null, "Max Combo:"), /*#__PURE__*/_react["default"].createElement("span", {
      className: "value"
    }, gameState.player2.maxCombo)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "stat"
    }, /*#__PURE__*/_react["default"].createElement("span", null, "HP:"), /*#__PURE__*/_react["default"].createElement("div", {
      className: "hp-bar"
    }, _toConsumableArray(Array(3)).map(function (_, i) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: i,
        className: "hp-heart ".concat(i < gameState.player2.hp ? 'active' : '')
      }, "\u2665");
    })))))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "game-input"
    }, /*#__PURE__*/_react["default"].createElement("form", {
      onSubmit: handleInputSubmit,
      className: "input-form"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "input-container"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "input-label"
    }, "Input >>"), /*#__PURE__*/_react["default"].createElement("input", {
      type: "text",
      value: gameState.inputValue,
      onChange: function onChange(e) {
        return setGameState(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            inputValue: e.target.value.toUpperCase()
          });
        });
      },
      className: "word-input",
      placeholder: "Type your word...",
      autoFocus: true
    }), /*#__PURE__*/_react["default"].createElement("button", {
      type: "submit",
      className: "btn btn-primary submit-btn"
    }, "SUBMIT")))))
  );
}