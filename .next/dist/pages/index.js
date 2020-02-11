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


// desk model


var Index = function Index() {
  var _useState = (0, _react.useState)(10),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      gridSize = _useState2[0],
      setGridSize = _useState2[1];

  var _useState3 = (0, _react.useState)(10),
      _useState4 = (0, _slicedToArray3.default)(_useState3, 2),
      bombCount = _useState4[0],
      setBombCount = _useState4[1];

  var _useState5 = (0, _react.useState)(new _desk3.Desk(gridSize, bombCount)),
      _useState6 = (0, _slicedToArray3.default)(_useState5, 2),
      desk = _useState6[0],
      setDesk = _useState6[1];
  // counter for actions taken


  var _useState7 = (0, _react.useState)(0),
      _useState8 = (0, _slicedToArray3.default)(_useState7, 2),
      actions = _useState8[0],
      setActions = _useState8[1];

  function onSquareClick(square) {
    var newDesk = null;
    if (square.hasBomb) {
      window.setTimeout(function () {
        window.alert("Whoops, looks like you lost - you'll gettem next time champ");
        newDesk = new _desk3.Desk(gridSize, bombCount);
        setDesk(newDesk);
      }, 1500);
      newDesk = desk.uncoverBoard(square.row, square.column, true);
      setDesk(newDesk);
      setActions(0);
    } else {
      newDesk = desk.findClearPath(square.row, square.column);
      if (newDesk.revealedSquares === Math.pow(gridSize, 2) - bombCount) {
        window.setTimeout(function () {
          window.alert("You did it, congratulations!");
          newDesk = new _desk3.Desk(gridSize, bombCount);
          setDesk(newDesk);
        }, 1500);
        newDesk = desk.uncoverBoard(square.row, square.column, false);
        setDesk(newDesk);
        setActions(0);
      } else {
        setDesk(newDesk);
        setActions(actions + 1);
      }
    }
  }

  function updateRows(event) {
    console.log(event.target.value);
    setGridSize(event.target.value);
  }

  function updateBombCount(event) {
    console.log(event.target.value);
    // setBombCount(bombs);
  }

  return _react2.default.createElement(_layout2.default, { title: 'Minesweepin\'', __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, _react2.default.createElement(_desk2.default, { boardSize: desk.rows, disabled: desk.disabled, __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, desk.squares.map(function (squareList, i) {
    return _react2.default.createElement(_react.Fragment, { key: i, __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      }
    }, squareList.map(function (square, j) {
      return _react2.default.createElement(_square2.default, {
        key: i + '-' + j,
        disabled: square.isRevealed,
        gameOver: square.gameOver,
        onContextMenu: function onContextMenu() {
          return setDesk(desk.updateSquare(square.setFlagged(true)));
        },
        onClick: function onClick() {
          return onSquareClick(square);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, square.showBomb() && _react2.default.createElement(_mine2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), square.flagged && _react2.default.createElement(_flag2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), square.showNumber() ? square.number : '');
    }));
  })));
};

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiRnJhZ21lbnQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxheW91dCIsIkRlc2tDb21wIiwiU3F1YXJlQ29tcCIsIk1pbmUiLCJGbGFnIiwiRGVzayIsIkluZGV4IiwiZ3JpZFNpemUiLCJzZXRHcmlkU2l6ZSIsImJvbWJDb3VudCIsInNldEJvbWJDb3VudCIsImRlc2siLCJzZXREZXNrIiwiYWN0aW9ucyIsInNldEFjdGlvbnMiLCJvblNxdWFyZUNsaWNrIiwic3F1YXJlIiwibmV3RGVzayIsImhhc0JvbWIiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiYWxlcnQiLCJ1bmNvdmVyQm9hcmQiLCJyb3ciLCJjb2x1bW4iLCJmaW5kQ2xlYXJQYXRoIiwicmV2ZWFsZWRTcXVhcmVzIiwiTWF0aCIsInBvdyIsInVwZGF0ZVJvd3MiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsInVwZGF0ZUJvbWJDb3VudCIsInJvd3MiLCJkaXNhYmxlZCIsInNxdWFyZXMiLCJtYXAiLCJzcXVhcmVMaXN0IiwiaSIsImoiLCJpc1JldmVhbGVkIiwiZ2FtZU92ZXIiLCJ1cGRhdGVTcXVhcmUiLCJzZXRGbGFnZ2VkIiwic2hvd0JvbWIiLCJmbGFnZ2VkIiwic2hvd051bWJlciIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUyxBQUFVLEFBQVU7Ozs7QUFDcEMsQUFBTyxBQUFZOzs7O0FBR25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVU7Ozs7QUFHakIsQUFBUyxBQUFZOzs7Ozs7QUFQckI7OztBQU1BOzs7QUFHQSxJQUFNLFFBQVEsU0FBUixBQUFRLFFBQU07a0JBQ2MscUJBRGQsQUFDYyxBQUFTOzJEQUR2QjtNQUFBLEFBQ1gsc0JBRFc7TUFBQSxBQUNELHlCQURDOzttQkFFZ0IscUJBRmhCLEFBRWdCLEFBQVM7NERBRnpCO01BQUEsQUFFWCx1QkFGVztNQUFBLEFBRUEsMEJBRkE7O21CQUdNLHFCQUFTLEFBQUksZ0JBQUosQUFBUyxVQUh4QixBQUdNLEFBQVMsQUFBbUI7NERBSGxDO01BQUEsQUFHWCxrQkFIVztNQUFBLEFBR0wscUJBQ2I7QUFKa0I7OzttQkFLWSxxQkFMWixBQUtZLEFBQVM7NERBTHJCO01BQUEsQUFLWCxxQkFMVztNQUFBLEFBS0Ysd0JBRWhCOztXQUFBLEFBQVMsY0FBVCxBQUF1QixRQUFRLEFBQzdCO1FBQUksVUFBSixBQUFjLEFBQ2Q7UUFBSSxPQUFKLEFBQVcsU0FBUyxBQUNsQjthQUFBLEFBQU8sV0FBVyxZQUFNLEFBQ3RCO2VBQUEsQUFBTyxNQUFQLEFBQWEsQUFDYjtrQkFBVSxBQUFJLGdCQUFKLEFBQVMsVUFBbkIsQUFBVSxBQUFtQixBQUM3QjtnQkFBQSxBQUFRLEFBQ1Q7QUFKRCxTQUFBLEFBSUcsQUFDSDtnQkFBVSxLQUFBLEFBQUssYUFBYSxPQUFsQixBQUF5QixLQUFLLE9BQTlCLEFBQXFDLFFBQS9DLEFBQVUsQUFBNkMsQUFDdkQ7Y0FBQSxBQUFRLEFBQ1I7aUJBQUEsQUFBVyxBQUNaO0FBVEQsV0FTUSxBQUNOO2dCQUFVLEtBQUEsQUFBSyxjQUFjLE9BQW5CLEFBQTBCLEtBQUssT0FBekMsQUFBVSxBQUFzQyxBQUNoRDtVQUFJLFFBQUEsQUFBUSxvQkFBcUIsS0FBQSxBQUFLLElBQUwsQUFBUyxVQUFULEFBQW1CLEtBQXBELEFBQXlELFdBQVksQUFDakU7ZUFBQSxBQUFPLFdBQVcsWUFBTSxBQUN0QjtpQkFBQSxBQUFPLE1BQVAsQUFBYSxBQUNiO29CQUFVLEFBQUksZ0JBQUosQUFBUyxVQUFuQixBQUFVLEFBQW1CLEFBQzdCO2tCQUFBLEFBQVEsQUFDVDtBQUpELFdBQUEsQUFJRyxBQUNIO2tCQUFVLEtBQUEsQUFBSyxhQUFhLE9BQWxCLEFBQXlCLEtBQUssT0FBOUIsQUFBcUMsUUFBL0MsQUFBVSxBQUE2QyxBQUN2RDtnQkFBQSxBQUFRLEFBQ1I7bUJBQUEsQUFBVyxBQUNkO0FBVEQsYUFTTyxBQUNIO2dCQUFBLEFBQVEsQUFDUjttQkFBVyxVQUFYLEFBQXFCLEFBQ3hCO0FBQ0Y7QUFDRjtBQUVEOztXQUFBLEFBQVMsV0FBVCxBQUFvQixPQUFPLEFBQ3pCO1lBQUEsQUFBUSxJQUFJLE1BQUEsQUFBTSxPQUFsQixBQUF5QixBQUN6QjtnQkFBWSxNQUFBLEFBQU0sT0FBbEIsQUFBeUIsQUFDMUI7QUFFRDs7V0FBQSxBQUFTLGdCQUFULEFBQXlCLE9BQU8sQUFDOUI7WUFBQSxBQUFRLElBQUksTUFBQSxBQUFNLE9BQWxCLEFBQXlCLEFBQ3pCO0FBQ0Q7QUFFRDs7eUJBQ0UsQUFBQyxrQ0FBTyxPQUFSO2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLEFBQUMsZ0NBQVMsV0FBWSxLQUF0QixBQUEyQixNQUFPLFVBQVcsS0FBN0MsQUFBa0Q7Z0JBQWxEO2tCQUFBLEFBQ0k7QUFESjtVQUNJLEFBQUssUUFBTCxBQUFhLElBQUksVUFBQSxBQUFDLFlBQUQsQUFBYSxHQUFiOzJCQUNqQixBQUFDLGlDQUFTLEtBQVYsQUFBZ0I7a0JBQWhCO29CQUFBLEFBQ0U7QUFERjtLQUFBLGFBQ0UsQUFBVyxJQUFJLFVBQUEsQUFBQyxRQUFELEFBQVMsR0FBVDs2QkFDYixBQUFDO2FBQ08sSUFBQSxBQUFJLE1BRFosQUFDa0IsQUFDaEI7a0JBQVcsT0FGYixBQUVvQixBQUNsQjtrQkFBVyxPQUhiLEFBR29CLEFBQ2xCO3VCQUFnQix5QkFBQTtpQkFBTSxRQUFRLEtBQUEsQUFBSyxhQUFhLE9BQUEsQUFBTyxXQUF2QyxBQUFNLEFBQVEsQUFBa0IsQUFBa0I7QUFKcEUsQUFLRTtpQkFBVSxtQkFBQTtpQkFBTSxjQUFOLEFBQU0sQUFBYztBQUxoQztvQkFBQTtzQkFBQSxBQU1NO0FBTk47QUFDRSxPQURGLFNBTU0sQUFBTyw4QkFBYyxBQUFDOztvQkFBRDtzQkFOM0IsQUFNMkIsQUFDckI7QUFEcUI7QUFBQSxPQUFBLFVBQ3JCLEFBQU8sMkJBQVcsQUFBQzs7b0JBQUQ7c0JBUHhCLEFBT3dCLEFBQ2xCO0FBRGtCO0FBQUEsT0FBQSxVQUNsQixBQUFPLGVBQWUsT0FBdEIsQUFBNkIsU0FUdEIsQUFDYixBQVE0QztBQVgvQixBQUNqQixBQUNFO0FBTFYsQUFDRSxBQUNFLEFBQ0ksQUFvQlQ7QUFyRUQsQUF1RUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pvcmdlL0RvY3VtZW50cy9taW5lU3dlZXBpbiJ9