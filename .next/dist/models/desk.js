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

// assuming square grid - for simplicity
var Desk = exports.Desk = function () {
  function Desk(size, bombs) {
    (0, _classCallCheck3.default)(this, Desk);

    this.rows = size;
    this.columns = size;
    this.squares = this.placeBombs(size, bombs);
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
  }, {
    key: 'placeBombs',
    value: function placeBombs(size, bombs) {
      var grid = this.createEmptyGrid(size);
      var count = 0;
      var row = void 0;
      var col = void 0;
      while (count < bombs) {
        row = Math.floor(Math.random() * size);
        col = Math.floor(Math.random() * size);
        if (!grid[row][col].hasBomb) {
          grid[row][col].hasBomb = true;
          count++;
        }
      }

      grid = this.calculateNumbers(grid);

      return grid;
    }
  }, {
    key: 'calculateNumbers',
    value: function calculateNumbers(grid) {
      // assuming square grid
      var n = grid.length;
      for (var row = 0; row < n; row++) {
        for (var col = 0; col < n; col++) {
          var square = grid[row][col];
          square.number = this.calculateNumber(grid, square);
          grid[row][col] = square;
        }
      }
      return grid;
    }
  }, {
    key: 'calculateNumber',
    value: function calculateNumber(grid, square) {
      // don't bother calculating if bomb
      if (square.hasBomb) {
        return null;
      }

      var count = 0;
      var row = square.row;
      var col = square.column;
      var size = grid.row;

      // up
      if (row !== 0) {
        count += grid[row - 1][col].hasBomb;
      }

      // upright
      if (row !== 0 && col < size - 1) {
        count += grid[row - 1][col + 1].hasBomb;
      }

      // right
      if (col < size - 1) {
        count += !!grid[row][col + 1].hasBomb;
      }

      // downright
      if (row < size - 1 && col < size - 1) {
        count += grid[row + 1][col + 1].hasBomb;
      }

      // down
      if (row > size - 1) {
        count += grid[row + 1][col].hasBomb;
      }

      // downleft
      if (row < size - 1 && col > 0) {
        count += grid[row + 1][col - 1].hasBomb;
      }

      // left
      if (col > 0) {
        count += grid[row][col - 1].hasBomb;
      }

      // upleft
      if (col > 0 && row > 0) {
        count += grid[row - 1][col - 1].hasBomb;
      }

      return count;
    }

    // recursively search all directions

  }, {
    key: 'findClearPath',
    value: function findClearPath(row, col) {
      if (!!this.squares[row] && !!this.squares[row][col] && !this.squares[row][col].hasBomb && !this.squares[row][col].isRevealed) {
        this.squares[row][col].reveal();
        console.log(this.squares[row][col]);
        if (!!this.squares[row][col].number) {
          this.findClearPath(row - 1, col);
          this.findClearPath(row - 1, col + 1);
          this.findClearPath(row, col + 1);
          this.findClearPath(row + 1, col + 1);
          this.findClearPath(row + 1, col);
          this.findClearPath(row + 1, col - 1);
          this.findClearPath(row, col - 1);
          this.findClearPath(row - 1, col - 1);
        }
      }
    }
  }, {
    key: 'updateSquare',
    value: function updateSquare(square) {
      this.squares[square.row][square.column] = square;
      return this;
    }
  }]);

  return Desk;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9kZXNrLmpzIl0sIm5hbWVzIjpbIlNxdWFyZSIsIkRlc2siLCJzaXplIiwiYm9tYnMiLCJyb3dzIiwiY29sdW1ucyIsInNxdWFyZXMiLCJwbGFjZUJvbWJzIiwiZ3JpZCIsImkiLCJwdXNoIiwiaiIsImNyZWF0ZUVtcHR5R3JpZCIsImNvdW50Iiwicm93IiwiY29sIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaGFzQm9tYiIsImNhbGN1bGF0ZU51bWJlcnMiLCJuIiwibGVuZ3RoIiwic3F1YXJlIiwibnVtYmVyIiwiY2FsY3VsYXRlTnVtYmVyIiwiY29sdW1uIiwiaXNSZXZlYWxlZCIsInJldmVhbCIsImNvbnNvbGUiLCJsb2ciLCJmaW5kQ2xlYXJQYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQWM7Ozs7QUFFdkIsQUFDQTtJQUFBLEFBQWEsa0NBQ1g7Z0JBQUEsQUFBWSxNQUFaLEFBQWtCLE9BQU87d0NBQ3ZCOztTQUFBLEFBQUssT0FBTCxBQUFZLEFBQ1o7U0FBQSxBQUFLLFVBQUwsQUFBZSxBQUNmO1NBQUEsQUFBSyxVQUFVLEtBQUEsQUFBSyxXQUFMLEFBQWdCLE1BQS9CLEFBQWUsQUFBc0IsQUFDdEM7QUFMSDs7O1NBQUE7b0NBQUEsQUFPa0IsTUFBTSxBQUNwQjtVQUFJLE9BQUosQUFBVyxBQUNYO1dBQUssSUFBSSxJQUFULEFBQWEsR0FBRyxJQUFoQixBQUFvQixNQUFwQixBQUEwQixLQUFLLEFBQzdCO2FBQUEsQUFBSyxLQUFMLEFBQVUsQUFDVjthQUFLLElBQUksSUFBVCxBQUFhLEdBQUcsSUFBaEIsQUFBb0IsTUFBcEIsQUFBMEIsS0FBSyxBQUM3QjtlQUFBLEFBQUssR0FBTCxBQUFRLEtBQUssQUFBSSxtQkFBSixBQUFXLEdBQXhCLEFBQWEsQUFBYyxBQUM1QjtBQUNGO0FBQ0Q7YUFBQSxBQUFPLEFBQ1I7QUFoQkg7QUFBQTtTQUFBOytCQUFBLEFBa0JhLE1BbEJiLEFBa0JtQixPQUFPLEFB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