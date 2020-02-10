'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Desk = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _square = require('../models/square');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Desk = exports.Desk = function () {
  function Desk(size, bombs) {
    (0, _classCallCheck3.default)(this, Desk);

    this.rows = size;
    this.columns = size;
    this.squares = this.createEmptyGrid(size);
  }

  (0, _createClass3.default)(Desk, [{
    key: 'createEmptyGrid',
    value: function createEmptyGrid(size) {
      var grid = [];
      for (var i = 0; i < size; i++) {
        grid.push([]);
        for (var j = 0; j < size; j++) {
          grid[i].push(new _square.Square(i, j));
        }
      }
      return grid;
    }
  }]);

  return Desk;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9kZXNrLmpzIl0sIm5hbWVzIjpbIlNxdWFyZSIsIkRlc2siLCJzaXplIiwiYm9tYnMiLCJyb3dzIiwiY29sdW1ucyIsInNxdWFyZXMiLCJjcmVhdGVFbXB0eUdyaWQiLCJncmlkIiwiaSIsInB1c2giLCJqIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQWMsQUFFdkI7Ozs7SUFBQSxBQUFhLGtDQUNYO2dCQUFBLEFBQVksTUFBWixBQUFrQixPQUFPO3dDQUN2Qjs7U0FBQSxBQUFLLE9BQUwsQUFBWSxBQUNaO1NBQUEsQUFBSyxVQUFMLEFBQWUsQUFDZjtTQUFBLEFBQUssVUFBVSxLQUFBLEFBQUssZ0JBQXBCLEFBQWUsQUFBcUIsQUFDckM7QUFMSDs7O1NBQUE7b0NBQUEsQUFPa0IsTUFBTSxBQUNwQjtVQUFJLE9BQUosQUFBVyxBQUNYO1dBQUssSUFBSSxJQUFULEFBQWEsR0FBRyxJQUFoQixBQUFvQixNQUFwQixBQUEwQixLQUFLLEFBQzdCO2FBQUEsQUFBSyxLQUFMLEFBQVUsQUFDVjthQUFLLElBQUksSUFBVCxBQUFhLEdBQUcsSUFBaEIsQUFBb0IsTUFBcEIsQUFBMEIsS0FBSyxBQUM3QjtlQUFBLEFBQUssR0FBTCxBQUFRLEtBQUssQUFBSSxtQkFBSixBQUFXLEdBQXhCLEFBQWEsQUFBYyxBQUM1QjtBQUNGO0FBQ0Q7YUFBQSxBQUFPLEFBQ1I7QUFoQkg7QUFBQTs7U0FBQSIsImZpbGUiOiJkZXNrLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qb3JnZS9Eb2N1bWVudHMvbWluZVN3ZWVwaW4ifQ==