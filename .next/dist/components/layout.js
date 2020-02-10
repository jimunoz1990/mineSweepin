'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _cfStyleNextjs = require('cf-style-nextjs');

var _cfStyleContainer = require('cf-style-container');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jorge/Documents/mineSweepin/components/layout.js';


var Center = (0, _cfStyleContainer.createComponent)(function (_ref) {
  var theme = _ref.theme;
  return (0, _defineProperty3.default)({
    margin: '0px auto'
  }, 'margin', theme.space[4]);
});

exports.default = function (_ref3) {
  var children = _ref3.children,
      _ref3$title = _ref3.title,
      title = _ref3$title === undefined ? 'Minesweeper' : _ref3$title;
  return _react2.default.createElement(_cfStyleNextjs.StyleProvider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(Center, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, title), children));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkIiwiU3R5bGVQcm92aWRlciIsImNyZWF0ZUNvbXBvbmVudCIsIkNlbnRlciIsInRoZW1lIiwibWFyZ2luIiwic3BhY2UiLCJjaGlsZHJlbiIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFTOzs7Ozs7O0FBRVQsSUFBTSxnREFBeUIsZ0JBQUE7TUFBQSxBQUFHLGFBQUgsQUFBRzs7WUFBSCxBQUNyQjtBQUFSLGVBQ1EsTUFBQSxBQUFNLE1BRmUsQUFFckIsQUFBWTtBQUZ0QixBQUFlLEFBS2YsQ0FMZTs7a0JBS0EsaUJBQUE7TUFBQSxBQUFHLGlCQUFILEFBQUc7MEJBQUgsQUFBYTtNQUFiLEFBQWEsb0NBQWIsQUFBcUIsZ0JBQXJCO3lCQUNiLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0csY0FBRDs7Z0JBQUE7a0JBQUEsQUFDSTtBQURKO0FBQUEscUJBQ0ksY0FBQTs7Z0JBQUE7a0JBQUEsQUFBTTtBQUFOO0FBQUEsS0FESixBQUNJLEFBQ0UsUUFKSyxBQUNiLEFBQ0U7QUFGSiIsImZpbGUiOiJsYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pvcmdlL0RvY3VtZW50cy9taW5lU3dlZXBpbiJ9