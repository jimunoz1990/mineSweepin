'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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
  var _useState = (0, _react.useState)(new _desk3.Desk(10, 10)),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      desk = _useState2[0],
      setDesk = _useState2[1];
  // counter for actions taken


  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray3.default)(_useState3, 2),
      actions = _useState4[0],
      setActions = _useState4[1];

  function onSquareClick(square) {
    setActions(actions + 1);

    if (square.hasBomb) {
      window.alert("Whoops, looks like you lost - you'll gettem next time champ");
      setDesk(new _desk3.Desk(10, 10));
    } else {
      var newDesk = desk.findClearPath(square.row, square.column);
      setDesk(newDesk.findClearPath(square));
    }
  }

  console.log('render');
  return _react2.default.createElement(_layout2.default, { title: 'Minesweepin\'', __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, _react2.default.createElement(_desk2.default, { boardSize: desk.rows, __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, desk.squares.map(function (squareList, i) {
    return _react2.default.createElement(_react.Fragment, { key: i, __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      }
    }, squareList.map(function (square, j) {
      return _react2.default.createElement(_square2.default, {
        key: i + '-' + j,
        disabled: square.isRevealed,
        onClick: function onClick() {
          return onSquareClick(square);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, square.showBomb() && _react2.default.createElement(_mine2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), square.flagged && _react2.default.createElement(_flag2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), square.showNumber() ? square.number : '');
    }));
  })));
};

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiRnJhZ21lbnQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxheW91dCIsIkRlc2tDb21wIiwiU3F1YXJlQ29tcCIsIk1pbmUiLCJGbGFnIiwiRGVzayIsIkluZGV4IiwiZGVzayIsInNldERlc2siLCJhY3Rpb25zIiwic2V0QWN0aW9ucyIsIm9uU3F1YXJlQ2xpY2siLCJzcXVhcmUiLCJoYXNCb21iIiwid2luZG93IiwiYWxlcnQiLCJuZXdEZXNrIiwiZmluZENsZWFyUGF0aCIsInJvdyIsImNvbHVtbiIsImNvbnNvbGUiLCJsb2ciLCJyb3dzIiwic3F1YXJlcyIsIm1hcCIsInNxdWFyZUxpc3QiLCJpIiwiaiIsImlzUmV2ZWFsZWQiLCJzaG93Qm9tYiIsImZsYWdnZWQiLCJzaG93TnVtYmVyIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTLEFBQVUsQUFBVTs7OztBQUNwQyxBQUFPLEFBQVk7Ozs7QUFHbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVk7Ozs7OztBQUxyQjs7O0FBT0E7QUFDQTtBQUNBOztBQUVBLElBQU0sUUFBUSxTQUFSLEFBQVEsUUFBTTtrQkFDTSxxQkFBUyxBQUFJLGdCQUFKLEFBQVMsSUFEeEIsQUFDTSxBQUFTLEFBQWE7MkRBRDVCO01BQUEsQUFDWCxrQkFEVztNQUFBLEFBQ0wscUJBQ2I7QUFGa0I7OzttQkFHWSxxQkFIWixBQUdZLEFBQVM7NERBSHJCO01BQUEsQUFHWCxxQkFIVztNQUFBLEFBR0Ysd0JBRWhCOztXQUFBLEFBQVMsY0FBVCxBQUF1QixRQUFRLEFBQzdCO2VBQVcsVUFBWCxBQUFxQixBQUVyQjs7UUFBSSxPQUFKLEFBQVcsU0FBUyxBQUNsQjthQUFBLEFBQU8sTUFBUCxBQUFhLEFBQ2I7Y0FBUSxBQUFJLGdCQUFKLEFBQVMsSUFBakIsQUFBUSxBQUFhLEFBQ3RCO0FBSEQsV0FHTyxBQUNMO1VBQUksVUFBVSxLQUFBLEFBQUssY0FBYyxPQUFuQixBQUEwQixLQUFLLE9BQTdDLEFBQWMsQUFBc0MsQUFDcEQ7Y0FBUSxRQUFBLEFBQVEsY0FBaEIsQUFBUSxBQUFzQixBQUMvQjtBQUNGO0FBRUQ7O1VBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjt5QkFDRSxBQUFDLGtDQUFPLE9BQVI7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0dBQUEsa0JBQ0UsQUFBQyxnQ0FBUyxXQUFZLEtBQXRCLEFBQTJCO2dCQUEzQjtrQkFBQSxBQUNJO0FBREo7VUFDSSxBQUFLLFFBQUwsQUFBYSxJQUFJLFVBQUEsQUFBQyxZQUFELEFBQWEsR0FBYjsyQkFDakIsQUFBQyxpQ0FBUyxLQUFWLEFBQWdCO2tCQUFoQjtvQkFBQSxBQUNFO0FBREY7S0FBQSxhQUNFLEFBQVcsSUFBSSxVQUFBLEFBQUMsUUFBRCxBQUFTLEdBQVQ7NkJBQ2IsQUFBQzthQUNPLElBQUEsQUFBSSxNQURaLEFBQ2tCLEFBQ2hCO2tCQUFXLE9BRmIsQUFFb0IsQUFDbEI7aUJBQVUsbUJBQUE7aUJBQU0sY0FBTixBQUFNLEFBQWM7QUFIaEM7b0JBQUE7c0JBQUEsQUFJTTtBQUpOO0FBQ0UsT0FERixTQUlNLEFBQU8sOEJBQWMsQUFBQzs7b0JBQUQ7c0JBSjNCLEFBSTJCLEFBQ3JCO0FBRHFCO0FBQUEsT0FBQSxVQUNyQixBQUFPLDJCQUFXLEFBQUM7O29CQUFEO3NCQUx4QixBQUt3QixBQUNsQjtBQURrQjtBQUFBLE9BQUEsVUFDbEIsQUFBTyxlQUFlLE9BQXRCLEFBQTZCLFNBUHRCLEFBQ2IsQUFNNEM7QUFUL0IsQUFDakIsQUFDRTtBQUxWLEFBQ0UsQUFDRSxBQUNJLEFBa0JUO0FBdkNELEFBeUNBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qb3JnZS9Eb2N1bWVudHMvbWluZVN3ZWVwaW4ifQ==