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

    this.hasBomb = true;
    this.flagged = false;
    this.isRevealed = false;
    this.disabled = false;
    this.row = row;
    this.column = column;
    this.number = null;
  }

  (0, _createClass3.default)(Square, [{
    key: "reveal",
    value: function reveal() {
      this.isRevealed = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9zcXVhcmUuanMiXSwibmFtZXMiOlsiU3F1YXJlIiwicm93IiwiY29sdW1uIiwiaGFzQm9tYiIsImZsYWdnZWQiLCJpc1JldmVhbGVkIiwiZGlzYWJsZWQiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztJQUFBLEFBQWEsc0NBQ1Q7a0JBQUEsQUFBWSxLQUFaLEFBQWlCLFFBQVE7d0NBQ3ZCOztTQUFBLEFBQUssVUFBTCxBQUFlLEFBQ2Y7U0FBQSxBQUFLLFVBQUwsQUFBZSxBQUNmO1NBQUEsQUFBSyxhQUFMLEFBQWtCLEFBQ2xCO1NBQUEsQUFBSyxXQUFMLEFBQWdCLEFBQ2hCO1NBQUEsQUFBSyxNQUFMLEFBQVcsQUFDWDtTQUFBLEFBQUssU0FBTCxBQUFjLEFBQ2Q7U0FBQSxBQUFLLFNBQUwsQUFBYyxBQUNmO0FBVEw7OztTQUFBOzZCQVdhLEFBQ1A7V0FBQSxBQUFLLGFBQUwsQUFBa0IsQUFDbkI7QUFiTDtBQUFBO1NBQUE7K0JBZWUsQUFDVDthQUFPLEtBQUEsQUFBSyxXQUFXLEtBQXZCLEFBQTRCLEFBQzdCO0FBakJMO0FBQUE7U0FBQTtpQ0FtQmlCLEFBQ1g7YUFBTyxLQUFBLEFBQUssVUFBVSxLQUF0QixBQUEyQixBQUM1QjtBQXJCTDtBQUFBOztTQUFBIiwiZmlsZSI6InNxdWFyZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam9yZ2UvRG9jdW1lbnRzL21pbmVTd2VlcGluIn0=