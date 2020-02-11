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
    this.disabled = false;
    this.revealedSquares = 0;
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
      var size = this.rows;

      // up
      if (row !== 0) {
        count += grid[row - 1][col].hasBomb;
      }

      // upright
      if (row !== 0 && col !== size - 1) {
        count += grid[row - 1][col + 1].hasBomb;
      }

      // right
      if (col !== size - 1) {
        count += !!grid[row][col + 1].hasBomb;
      }

      // downright
      if (row !== size - 1 && col !== size - 1) {
        count += grid[row + 1][col + 1].hasBomb;
      }

      // down
      if (row !== size - 1) {
        count += grid[row + 1][col].hasBomb;
      }

      // downleft
      if (row !== size - 1 && col !== 0) {
        count += grid[row + 1][col - 1].hasBomb;
      }

      // left
      if (col !== 0) {
        count += grid[row][col - 1].hasBomb;
      }

      // upleft
      if (col !== 0 && row !== 0) {
        count += grid[row - 1][col - 1].hasBomb;
      }

      return count;
    }

    // recursively search all directions

  }, {
    key: 'findClearPath',
    value: function findClearPath(row, col) {
      if (row < 0 || row > this.rows || col < 0 || col > this.columns) {
        return this;
      }
      if (!!this.squares[row] && !!this.squares[row][col] && !this.squares[row][col].hasBomb && !this.squares[row][col].isRevealed) {
        this.squares[row][col].reveal();
        this.revealedSquares++;
        if (this.squares[row][col].number === 0) {
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
      return this;
    }
  }, {
    key: 'updateSquare',
    value: function updateSquare(square) {
      this.squares[square.row][square.column] = square;
      return this;
    }
  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      this.disabled = disabled;
      return this;
    }
  }, {
    key: 'uncoverBoard',
    value: function uncoverBoard(gameOverRow, gameOverColumn, lose) {
      for (var row = 0; row < this.rows; row++) {
        for (var col = 0; col < this.columns; col++) {
          var square = this.squares[row][col];
          if (square.hasBomb) {
            square.reveal();
            this.squares[row][col] = square;
          }
        }
      }

      if (lose) {
        this.squares[gameOverRow][gameOverColumn].gameOver = true;
      }
      return this;
    }
  }]);

  return Desk;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9kZXNrLmpzIl0sIm5hbWVzIjpbIlNxdWFyZSIsIkRlc2siLCJzaXplIiwiYm9tYnMiLCJyb3dzIiwiY29sdW1ucyIsInNxdWFyZXMiLCJwbGFjZUJvbWJzIiwiZGlzYWJsZWQiLCJyZXZlYWxlZFNxdWFyZXMiLCJncmlkIiwiaSIsInB1c2giLCJqIiwiY3JlYXRlRW1wdHlHcmlkIiwiY291bnQiLCJyb3ciLCJjb2wiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJoYXNCb21iIiwiY2FsY3VsYXRlTnVtYmVycyIsIm4iLCJsZW5ndGgiLCJzcXVhcmUiLCJudW1iZXIiLCJjYWxjdWxhdGVOdW1iZXIiLCJjb2x1bW4iLCJpc1JldmVhbGVkIiwicmV2ZWFsIiwiZmluZENsZWFyUGF0aCIsImdhbWVPdmVyUm93IiwiZ2FtZU92ZXJDb2x1bW4iLCJsb3NlIiwiZ2FtZU92ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVMsQUFBYzs7OztBQUV2QixBQUNBO0lBQUEsQUFBYSxrQ0FDWDtnQkFBQSxBQUFZLE1BQVosQUFBa0IsT0FBTzt3Q0FDdkI7O1NBQUEsQUFBSyxPQUFMLEFBQVksQUFDWjtTQUFBLEFBQUssVUFBTCxBQUFlLEFBQ2Y7U0FBQSxBQUFLLFVBQVUsS0FBQSxBQUFLLFdBQUwsQUFBZ0IsTUFBL0IsQUFBZSxBQUFzQixBQUNyQztTQUFBLEFBQUssV0FBTCxBQUFnQixBQUNoQjtTQUFBLEFBQUssa0JBQUwsQUFBdUIsQUFDeEI7QUFQSDs7O1NBQUE7b0NBQUEsQUFTa0IsTUFBTSxBQUNwQjtVQUFJLE9BQUosQUFBVyxBQUNYO1dBQUssSUFBSSxJQUFULEFBQWEsR0FBRyxJQUFoQixBQUFvQixNQUFwQixBQUEwQixLQUFLLEFBQzdCO2FBQUEsQUFBSyxLQUFMLEFBQVUsQUFDVjthQUFLLElBQUksSUFBVCxBQUFhLEdBQUcsSUFBaEIsQUFBb0IsTUFBcEIsQUFBMEIsS0FBSyxBQUM3QjtlQUFBLEFBQUssR0FBTCxBQUFR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