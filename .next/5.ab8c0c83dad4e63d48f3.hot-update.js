webpackHotUpdate(5,{

/***/ 938:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Desk = undefined;

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(20);

var _createClass3 = _interopRequireDefault(_createClass2);

var _square = __webpack_require__(939);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/jorge/Documents/mineSweepin/models/desk.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jorge/Documents/mineSweepin/models/desk.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5hYjhjMGM4M2RhZDRlNjNkNDhmMy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbW9kZWxzL2Rlc2suanM/YjMzYTE3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTcXVhcmUgfSBmcm9tICcuLi9tb2RlbHMvc3F1YXJlJ1xuXG4vLyBhc3N1bWluZyBzcXVhcmUgZ3JpZCAtIGZvciBzaW1wbGljaXR5XG5leHBvcnQgY2xhc3MgRGVzayB7XG4gIGNvbnN0cnVjdG9yKHNpemUsIGJvbWJzKSB7XG4gICAgdGhpcy5yb3dzID0gc2l6ZTtcbiAgICB0aGlzLmNvbHVtbnMgPSBzaXplO1xuICAgIHRoaXMuc3F1YXJlcyA9IHRoaXMucGxhY2VCb21icyhzaXplLCBib21icyk7XG4gIH1cblxuICBjcmVhdGVFbXB0eUdyaWQoc2l6ZSkge1xuICAgIGxldCBncmlkID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgIGdyaWQucHVzaChbXSk7XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNpemU7IGorKykge1xuICAgICAgICBncmlkW2ldLnB1c2gobmV3IFNxdWFyZShpLCBqKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBncmlkO1xuICB9XG5cbiAgcGxhY2VCb21icyhzaXplLCBib21icykge1xuICAgIGxldCBncmlkID0gdGhpcy5jcmVhdGVFbXB0eUdyaWQoc2l6ZSk7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBsZXQgcm93O1xuICAgIGxldCBjb2w7XG4gICAgd2hpbGUgKGNvdW50IDwgYm9tYnMpIHtcbiAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNpemUpO1xuICAgICAgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2l6ZSk7XG4gICAgICBpZiAoIWdyaWRbcm93XVtjb2xdLmhhc0JvbWIpIHtcbiAgICAgICAgZ3JpZFtyb3ddW2NvbF0uaGFzQm9tYiA9IHRydWU7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ3JpZCA9IHRoaXMuY2FsY3VsYXRlTnVtYmVycyhncmlkKTtcblxuICAgIHJldHVybiBncmlkXG4gIH1cblxuICBjYWxjdWxhdGVOdW1iZXJzKGdyaWQpIHtcbiAgICAvLyBhc3N1bWluZyBzcXVhcmUgZ3JpZFxuICAgIGxldCBuID0gZ3JpZC5sZW5ndGg7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgbjsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IG47IGNvbCsrKSB7XG4gICAgICAgIGxldCBzcXVhcmUgPSBncmlkW3Jvd11bY29sXTtcbiAgICAgICAgc3F1YXJlLm51bWJlciA9IHRoaXMuY2FsY3VsYXRlTnVtYmVyKGdyaWQsIHNxdWFyZSlcbiAgICAgICAgZ3JpZFtyb3ddW2NvbF0gPSBzcXVhcmU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBncmlkO1xuICB9XG5cbiAgY2FsY3VsYXRlTnVtYmVyKGdyaWQsIHNxdWFyZSkge1xuICAgIC8vIGRvbid0IGJvdGhlciBjYWxjdWxhdGluZyBpZiBib21iXG4gICAgaWYgKHNxdWFyZS5oYXNCb21iKXtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBjb3VudCA9IDA7XG4gICAgbGV0IHJvdyA9IHNxdWFyZS5yb3c7XG4gICAgbGV0IGNvbCA9IHNxdWFyZS5jb2x1bW47XG4gICAgbGV0IHNpemUgPSBncmlkLnJvdztcblxuICAgIC8vIHVwXG4gICAgaWYgKHJvdyAhPT0gMCkge1xuICAgICAgY291bnQgKz0gZ3JpZFtyb3cgLSAxXVtjb2xdLmhhc0JvbWI7XG4gICAgfVxuXG4gICAgLy8gdXByaWdodFxuICAgIGlmIChyb3cgIT09IDAgJiYgY29sIDwgc2l6ZSAtIDEpIHtcbiAgICAgIGNvdW50ICs9IGdyaWRbcm93IC0gMV1bY29sICsgMV0uaGFzQm9tYjtcbiAgICB9XG5cbiAgICAvLyByaWdodFxuICAgIGlmIChjb2wgPCBzaXplIC0gMSkge1xuICAgICAgY291bnQgKz0gISEgZ3JpZFtyb3ddW2NvbCArIDFdLmhhc0JvbWI7XG4gICAgfVxuXG4gICAgLy8gZG93bnJpZ2h0XG4gICAgaWYgKHJvdyA8IHNpemUgLSAxICYmIGNvbCA8IHNpemUgLSAxKSB7XG4gICAgICBjb3VudCArPSBncmlkW3JvdyArIDFdW2NvbCArIDFdLmhhc0JvbWI7XG4gICAgfVxuXG4gICAgLy8gZG93blxuICAgIGlmIChyb3cgPiBzaXplIC0gMSkge1xuICAgICAgY291bnQgKz0gZ3JpZFtyb3cgKyAxXVtjb2xdLmhhc0JvbWI7XG4gICAgfVxuXG4gICAgLy8gZG93bmxlZnRcbiAgICBpZiAocm93IDwgc2l6ZSAtIDEgJiYgY29sID4gMCkge1xuICAgICAgY291bnQgKz0gZ3JpZFtyb3cgKyAxXVtjb2wgLSAxXS5oYXNCb21iO1xuICAgIH1cblxuICAgIC8vIGxlZnRcbiAgICBpZiAoY29sID4gMCkge1xuICAgICAgY291bnQgKz0gZ3JpZFtyb3ddW2NvbCAtIDFdLmhhc0JvbWI7XG4gICAgfVxuXG4gICAgLy8gdXBsZWZ0XG4gICAgaWYgKGNvbCA+IDAgJiYgcm93ID4gMCkge1xuICAgICAgY291bnQgKz0gZ3JpZFtyb3cgLSAxXVtjb2wgLSAxXS5oYXNCb21iO1xuICAgIH1cblxuICAgIHJldHVybiBjb3VudDtcbiAgfVxuXG4gIC8vIHJlY3Vyc2l2ZWx5IHNlYXJjaCBhbGwgZGlyZWN0aW9uc1xuICBmaW5kQ2xlYXJQYXRoKHJvdywgY29sKSB7XG4gICAgaWYgKCEhdGhpcy5zcXVhcmVzW3Jvd10gJiYgISF0aGlzLnNxdWFyZXNbcm93XVtjb2xdICYmXG4gICAgICAhdGhpcy5zcXVhcmVzW3Jvd11bY29sXS5oYXNCb21iICYmICF0aGlzLnNxdWFyZXNbcm93XVtjb2xdLmlzUmV2ZWFsZWQpIHtcbiAgICAgIHRoaXMuc3F1YXJlc1tyb3ddW2NvbF0ucmV2ZWFsKCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnNxdWFyZXNbcm93XVtjb2xdKTtcbiAgICAgIGlmICghIXRoaXMuc3F1YXJlc1tyb3ddW2NvbF0ubnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZmluZENsZWFyUGF0aChyb3cgLSAxLCBjb2wpO1xuICAgICAgICB0aGlzLmZpbmRDbGVhclBhdGgocm93IC0gMSwgY29sICsgMSk7XG4gICAgICAgIHRoaXMuZmluZENsZWFyUGF0aChyb3csIGNvbCArIDEpO1xuICAgICAgICB0aGlzLmZpbmRDbGVhclBhdGgocm93ICsgMSwgY29sICsgMSk7XG4gICAgICAgIHRoaXMuZmluZENsZWFyUGF0aChyb3cgKyAxLCBjb2wpO1xuICAgICAgICB0aGlzLmZpbmRDbGVhclBhdGgocm93ICsgMSwgY29sIC0gMSk7XG4gICAgICAgIHRoaXMuZmluZENsZWFyUGF0aChyb3csIGNvbCAtIDEpO1xuICAgICAgICB0aGlzLmZpbmRDbGVhclBhdGgocm93IC0gMSwgY29sIC0gMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlU3F1YXJlKHNxdWFyZSkge1xuICAgIHRoaXMuc3F1YXJlc1tzcXVhcmUucm93XVtzcXVhcmUuY29sdW1uXSA9IHNxdWFyZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbW9kZWxzL2Rlc2suanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFKQTtBQUNBOztBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBaEJBO0FBQUE7QUFBQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBbkNBO0FBQUE7QUFBQTtBQXFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBaERBO0FBQUE7QUFBQTtBQWtEQTtBQUVBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUF6R0E7QUFDQTtBQURBO0FBQUE7QUF5R0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBekhBO0FBQUE7QUFBQTtBQTJIQTtBQUNBO0FBRUE7QUE5SEE7QUFBQTtBQUNBO0FBREE7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=