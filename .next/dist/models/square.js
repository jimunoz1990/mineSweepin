"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Square = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Square = exports.Square = function () {
  function Square(row, column) {
    (0, _classCallCheck3.default)(this, Square);

    this.hasBomb = false;
    this.flagged = false;
    this.isRevealed = false;
    this.row = row;
    this.column = column;
    this.number = null;
    this.gameOver = false;
  }

  (0, _createClass3.default)(Square, [{
    key: "reveal",
    value: function reveal() {
      this.isRevealed = true;
      return this;
    }
  }, {
    key: "setFlagged",
    value: function setFlagged(flagged) {
      this.flagged = flagged;
      return this;
    }
  }, {
    key: "showBomb",
    value: function showBomb() {
      return this.hasBomb && this.isRevealed;
    }
  }, {
    key: "showNumber",
    value: function showNumber() {
      return this.number && this.isRevealed;
    }
  }]);

  return Square;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9zcXVhcmUuanMiXSwibmFtZXMiOlsiU3F1YXJlIiwicm93IiwiY29sdW1uIiwiaGFzQm9tYiIsImZsYWdnZWQiLCJpc1JldmVhbGVkIiwibnVtYmVyIiwiZ2FtZU92ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztJQUFBLEFBQWEsc0NBQ1Q7a0JBQUEsQUFBWSxLQUFaLEFBQWlCLFFBQVE7d0NBQ3ZCOztTQUFBLEFBQUssVUFBTCxBQUFlLEFBQ2Y7U0FBQSxBQUFLLFVBQUwsQUFBZSxBQUNmO1NBQUEsQUFBSyxhQUFMLEFBQWtCLEFBQ2xCO1NBQUEsQUFBSyxNQUFMLEFBQVcsQUFDWDtTQUFBLEFBQUssU0FBTCxBQUFjLEFBQ2Q7U0FBQSxBQUFLLFNBQUwsQUFBYyxBQUNkO1NBQUEsQUFBSyxXQUFMLEFBQWdCLEFBQ2pCO0FBVEw7OztTQUFBOzZCQVdhLEFBQ1A7V0FBQSxBQUFLLGFBQUwsQUFBa0IsQUFDbEI7YUFBQSxBQUFPLEFBQ1I7QUFkTDtBQUFBO1NBQUE7K0JBQUEsQUFnQmUsU0FBUyxBQUNsQjtXQUFBLEFBQUssVUFBTCxBQUFlLEFBQ2Y7YUFBQSxBQUFPLEFBQ1I7QUFuQkw7QUFBQTtTQUFBOytCQXFCZSxBQUNUO2FBQU8sS0FBQSxBQUFLLFdBQVcsS0FBdkIsQUFBNEIsQUFDN0I7QUF2Qkw7QUFBQTtTQUFBO2lDQXlCaUIsQUFDWDthQUFPLEtBQUEsQUFBSyxVQUFVLEtBQXRCLEFBQTJCLEFBQzVCO0FBM0JMO0FBQUE7O1NBQUEiLCJmaWxlIjoic3F1YXJlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qb3JnZS9Eb2N1bWVudHMvbWluZVN3ZWVwaW4ifQ==