'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _cfStyleNextjs = require('cf-style-nextjs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jorge/Documents/mineSweepin/pages/_document.js?entry';


var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, 'Minesweeper'), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), _react2.default.createElement('meta', {
        name: 'viewport',
        content: 'initial-scale=1.0, width=device-width',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), _react2.default.createElement('style', {
        dangerouslySetInnerHTML: {
          __html: '\n                *{ box-sizing: border-box; }\n                body { margin: 0; }\n                html { font-family: \'Open Sans\', sans-serif; }\n               '
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), (0, _cfStyleNextjs.getStyles)(this.props), _react2.default.createElement('link', {
        href: 'https://fonts.googleapis.com/css?family=Open+Sans',
        rel: 'stylesheet',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      })), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      })));
    }
  }]);

  return MyDocument;
}(_document2.default);

MyDocument.getInitialProps = (0, _cfStyleNextjs.getInitialProps)();
exports.default = MyDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJEb2N1bWVudCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsImdldEluaXRpYWxQcm9wcyIsImdldFN0eWxlcyIsIk15RG9jdW1lbnQiLCJfX2h0bWwiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZLEFBQU0sQUFBTTs7OztBQUMvQixBQUFTLEFBQWlCOzs7Ozs7O0ksQUFFTDs7Ozs7Ozs7Ozs7NkJBR1YsQUFDUDs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSx3REFBTSxTQUFOLEFBQWM7b0JBQWQ7c0JBRkYsQUFFRSxBQUNBO0FBREE7O2NBQ0EsQUFDTyxBQUNMO2lCQUZGLEFBRVU7O29CQUZWO3NCQUhGLEFBR0UsQUFJQTtBQUpBO0FBQ0U7O2tCQUdGLEFBQzJCO0FBQUEsQUFDdkI7O29CQUZKO3NCQVBGLEFBT0UsQUFTQztBQVREO0FBQ0Usd0NBUVMsS0FoQmIsQUFnQkcsQUFBZSxBQUNoQjtjQUFBLEFBQ08sQUFDTDthQUZGLEFBRU07O29CQUZOO3NCQWxCSixBQUNFLEFBaUJFLEFBS0Y7QUFMRTtBQUNFLDJCQUlKLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7O29CQUFEO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQzs7b0JBQUQ7c0JBMUJOLEFBQ0UsQUF1QkUsQUFFRSxBQUlQO0FBSk87QUFBQTs7Ozs7QSxBQTlCOEI7O0EsQUFBbkIsVyxBQUNaLGtCLEFBQWtCO2tCLEFBRE4iLCJmaWxlIjoiX2RvY3VtZW50LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qb3JnZS9Eb2N1bWVudHMvbWluZVN3ZWVwaW4ifQ==