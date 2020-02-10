'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _desk = require('../components/desk');

var _desk2 = _interopRequireDefault(_desk);

var _square = require('../components/square');

var _square2 = _interopRequireDefault(_square);

var _mine = require('../components/mine');

var _mine2 = _interopRequireDefault(_mine);

var _flag = require('../components/flag');

var _flag2 = _interopRequireDefault(_flag);

var _desk3 = require('../models/desk');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jorge/Documents/mineSweepin/pages/index.js?entry';

// game components


// TODO: make board size configurable
// TODO: add how many squares are available to discover until
// win condition is satisfied.

var Index = function Index() {
  var desk = new _desk3.Desk(10, 0);
  console.log('desk', desk);

  function onSquareClick(square) {
    console.log(square);
    square.reveal();
  }

  return _react2.default.createElement(_layout2.default, { title: 'Minesweepin\'', __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement(_desk2.default, { boardSize: desk.rows, __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, desk.squares.map(function (squareList, i) {
    return _react2.default.createElement(_react.Fragment, { key: i, __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    }, squareList.map(function (square, j) {
      return _react2.default.createElement(_square2.default, { key: i + '-' + j, disabled: square.disabled, onClick: function onClick(e) {
          return onSquareClick(square);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, square.showBomb() && _react2.default.createElement(_mine2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), square.flagged && _react2.default.createElement(_flag2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), square.showNumber() ? square.getNumber() : '');
    }));
  })));
};

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkZyYWdtZW50IiwiTGF5b3V0IiwiRGVza0NvbXAiLCJTcXVhcmVDb21wIiwiTWluZSIsIkZsYWciLCJEZXNrIiwiSW5kZXgiLCJkZXNrIiwiY29uc29sZSIsImxvZyIsIm9uU3F1YXJlQ2xpY2siLCJzcXVhcmUiLCJyZXZlYWwiLCJyb3dzIiwic3F1YXJlcyIsIm1hcCIsInNxdWFyZUxpc3QiLCJpIiwiaiIsImRpc2FibGVkIiwiZSIsInNob3dCb21iIiwiZmxhZ2dlZCIsInNob3dOdW1iZXIiLCJnZXROdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQVM7Ozs7QUFDVCxBQUFPLEFBQVk7Ozs7QUFHbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVk7Ozs7OztBQUxyQjs7O0FBT0E7QUFDQTtBQUNBOztBQUVBLElBQU0sUUFBUSxTQUFSLEFBQVEsUUFBTSxBQUNsQjtNQUFJLE9BQU8sQUFBSSxnQkFBSixBQUFTLElBQXBCLEFBQVcsQUFBYSxBQUN4QjtVQUFBLEFBQVEsSUFBUixBQUFZLFFBQVosQUFBb0IsQUFFcEI7O1dBQUEsQUFBUyxjQUFULEFBQXVCLFFBQVEsQUFDN0I7WUFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO1dBQUEsQUFBTyxBQUNSO0FBRUQ7O3lCQUNBLEFBQUMsa0NBQU8sT0FBUjtnQkFBQTtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxBQUFDLGdDQUFTLFdBQVksS0FBdEIsQUFBMkI7Z0JBQTNCO2tCQUFBLEFBQ0k7QUFESjtVQUNJLEFBQUssUUFBTCxBQUFhLElBQUksVUFBQSxBQUFDLFlBQUQsQUFBYSxHQUFiOzJCQUNqQixBQUFDLGlDQUFTLEtBQVYsQUFBZ0I7a0JBQWhCO29CQUFBLEFBQ0U7QUFERjtLQUFBLGFBQ0UsQUFBVyxJQUFJLFVBQUEsQUFBQyxRQUFELEFBQVMsR0FBVDs2QkFDYixBQUFDLGtDQUFXLEtBQU0sSUFBQSxBQUFJLE1BQXRCLEFBQTRCLEdBQUksVUFBVyxPQUEzQyxBQUFrRCxVQUFXLFNBQVUsaUJBQUEsQUFBQyxHQUFEO2lCQUFPLGNBQVAsQUFBTyxBQUFjO0FBQTVGO29CQUFBO3NCQUFBLEFBQ0k7QUFESjtPQUFBLFNBQ0ksQUFBTyw4QkFBYyxBQUFDOztvQkFBRDtzQkFEekIsQUFDeUIsQUFDckI7QUFEcUI7QUFBQSxPQUFBLFVBQ3JCLEFBQU8sMkJBQVcsQUFBQzs7b0JBQUQ7c0JBRnRCLEFBRXNCLEFBQ2xCO0FBRGtCO0FBQUEsT0FBQSxVQUNsQixBQUFPLGVBQWUsT0FBdEIsQUFBc0IsQUFBTyxjQUpwQixBQUNiLEFBRytDO0FBTmxDLEFBQ2pCLEFBQ0U7QUFMUixBQUNBLEFBQ0UsQUFDSSxBQWNQO0FBMUJELEFBNkJBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qb3JnZS9Eb2N1bWVudHMvbWluZVN3ZWVwaW4ifQ==