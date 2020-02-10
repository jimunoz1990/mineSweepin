webpackHotUpdate(5,{

/***/ 929:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__(930);

var _layout2 = _interopRequireDefault(_layout);

var _desk = __webpack_require__(937);

var _desk2 = _interopRequireDefault(_desk);

var _square = __webpack_require__(938);

var _square2 = _interopRequireDefault(_square);

var _mine = __webpack_require__(939);

var _mine2 = _interopRequireDefault(_mine);

var _flag = __webpack_require__(940);

var _flag2 = _interopRequireDefault(_flag);

var _desk3 = __webpack_require__(941);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/jorge/Documents/mineSweepin/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jorge/Documents/mineSweepin/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(130)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4zMmQwYWMzZTJjNDJlMWJkMzU3NC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NmNiM2I1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xuXG4vLyBnYW1lIGNvbXBvbmVudHNcbmltcG9ydCBEZXNrQ29tcCBmcm9tICcuLi9jb21wb25lbnRzL2Rlc2snO1xuaW1wb3J0IFNxdWFyZUNvbXAgZnJvbSAnLi4vY29tcG9uZW50cy9zcXVhcmUnO1xuaW1wb3J0IE1pbmUgZnJvbSAnLi4vY29tcG9uZW50cy9taW5lJztcbmltcG9ydCBGbGFnIGZyb20gJy4uL2NvbXBvbmVudHMvZmxhZyc7XG5pbXBvcnQgeyBEZXNrIH0gZnJvbSAnLi4vbW9kZWxzL2Rlc2snO1xuXG4vLyBUT0RPOiBtYWtlIGJvYXJkIHNpemUgY29uZmlndXJhYmxlXG4vLyBUT0RPOiBhZGQgaG93IG1hbnkgc3F1YXJlcyBhcmUgYXZhaWxhYmxlIHRvIGRpc2NvdmVyIHVudGlsXG4vLyB3aW4gY29uZGl0aW9uIGlzIHNhdGlzZmllZC5cblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGxldCBkZXNrID0gbmV3IERlc2soMTAsIDApO1xuICBjb25zb2xlLmxvZygnZGVzaycsIGRlc2spO1xuXG4gIGZ1bmN0aW9uIG9uU3F1YXJlQ2xpY2soc3F1YXJlKSB7XG4gICAgY29uc29sZS5sb2coc3F1YXJlKTtcbiAgICBzcXVhcmUucmV2ZWFsKCk7XG4gIH1cblxuICByZXR1cm4gKFxuICA8TGF5b3V0IHRpdGxlPXtgTWluZXN3ZWVwaW4nYH0+XG4gICAgPERlc2tDb21wIGJvYXJkU2l6ZT17IGRlc2sucm93cyB9PlxuICAgICAgeyBkZXNrLnNxdWFyZXMubWFwKChzcXVhcmVMaXN0LCBpKSA9PiAoXG4gICAgICAgIDxGcmFnbWVudCBrZXk9eyBpIH0+XG4gICAgICAgIHsgc3F1YXJlTGlzdC5tYXAoKHNxdWFyZSwgaikgPT4gKFxuICAgICAgICAgICAgPFNxdWFyZUNvbXAga2V5PXsgaSArICctJyArIGogfSBkaXNhYmxlZD17IHNxdWFyZS5kaXNhYmxlZCB9IG9uQ2xpY2s9eyAoZSkgPT4gb25TcXVhcmVDbGljayhzcXVhcmUpIH0+XG4gICAgICAgICAgICAgIHsgc3F1YXJlLnNob3dCb21iKCkgJiYgPE1pbmUgLz59XG4gICAgICAgICAgICAgIHsgc3F1YXJlLmZsYWdnZWQgJiYgPEZsYWcgLz59XG4gICAgICAgICAgICAgIHsgc3F1YXJlLnNob3dOdW1iZXIoKSA/IHNxdWFyZS5nZXROdW1iZXIoKSA6ICcnfVxuICAgICAgICAgICAgPC9TcXVhcmVDb21wPlxuICAgICAgICAgIClcbiAgICAgICAgKSB9XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICApKX1cbiAgICA8L0Rlc2tDb21wPlxuICA8L0xheW91dD4pO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBTkE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFIQTtBQVlBO0FBR0E7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=