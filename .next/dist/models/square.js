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
  }

  (0, _createClass3.default)(Square, [{
    key: "reveal",
    value: function reveal() {
      this.isRevealed = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9zcXVhcmUuanMiXSwibmFtZXMiOlsiU3F1YXJlIiwicm93IiwiY29sdW1uIiwiaGFzQm9tYiIsImZsYWdnZWQiLCJpc1JldmVhbGVkIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7SUFBQSxBQUFhLHNDQUNUO2tCQUFBLEFBQVksS0FBWixBQUFpQixRQUFRO3dDQUN2Qjs7U0FBQSxBQUFLLFVBQUwsQUFBZSxBQUNmO1NBQUEsQUFBSyxVQUFMLEFBQWUsQUFDZjtTQUFBLEFBQUssYUFBTCxBQUFrQixBQUNsQjtTQUFBLEFBQUssTUFBTCxBQUFXLEFBQ1g7U0FBQSxBQUFLLFNBQUwsQUFBYyxBQUNkO1NBQUEsQUFBSyxTQUFMLEFBQWMsQUFDZjtBQVJMOzs7U0FBQTs2QkFVYSxBQUNQO1dBQUEsQUFBSyxhQUFMLEFBQWtCLEFBQ2xCO2FBQUEsQUFBTyxBQUNSO0FBYkw7QUFBQTtTQUFBOytCQWVlLEFBQ1Q7YUFBTyxLQUFBLEFBQUssV0FBVyxLQUF2QixBQUE0QixBQUM3QjtBQWpCTDtBQUFBO1NBQUE7aUNBbUJpQixBQUNYO2FBQU8sS0FBQSxBQUFLLFVBQVUsS0FBdEIsQUFBMkIsQUFDNUI7QUFyQkw7QUFBQTs7U0FBQSIsImZpbGUiOiJzcXVhcmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pvcmdlL0RvY3VtZW50cy9taW5lU3dlZXBpbiJ9