'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cfStyleContainer = require('cf-style-container');

var Square = (0, _cfStyleContainer.createComponent)(function (_ref) {
  var disabled = _ref.disabled,
      gameOver = _ref.gameOver;
  return {
    width: 40,
    height: 40,
    padding: 10,
    cursor: disabled ? 'initial' : 'pointer',
    backgroundColor: disabled ? '#CCC' : '#FFF',
    pointerEvents: disabled ? 'none' : 'auto',
    border: gameOver ? '1px solid red' : '1px solid black',
    lineHeight: 1,
    textAlign: 'center',
    fontSize: 18
  };
}, 'div', ['onClick', 'onContextMenu']);

exports.default = Square;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3F1YXJlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNvbXBvbmVudCIsIlNxdWFyZSIsImRpc2FibGVkIiwiZ2FtZU92ZXIiLCJ3aWR0aCIsImhlaWdodCIsInBhZGRpbmciLCJjdXJzb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb2ludGVyRXZlbnRzIiwiYm9yZGVyIiwibGluZUhlaWdodCIsInRleHRBbGlnbiIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFTOztBQUVULElBQU0sZ0RBQ0osZ0JBQUE7TUFBQSxBQUFHLGdCQUFILEFBQUc7TUFBSCxBQUFhLGdCQUFiLEFBQWE7O1dBQWdCLEFBQ3BCLEFBQ1A7WUFGMkIsQUFFbkIsQUFDUjthQUgyQixBQUdsQixBQUNUO1lBQVEsV0FBQSxBQUFXLFlBSlEsQUFJSSxBQUMvQjtxQkFBaUIsV0FBQSxBQUFXLFNBTEQsQUFLVSxBQUNyQzttQkFBZSxXQUFBLEFBQVcsU0FOQyxBQU1RLEFBQ25DO1lBQVEsNkJBUG1CLEFBUTNCO2dCQVIyQixBQVFmLEFBQ1o7ZUFUMkIsQUFTaEIsQUFDWDtjQVZGLEFBQTZCLEFBVWpCO0FBVmlCLEFBQzNCO0FBRlcsQ0FBQSxFQUFBLEFBYWIsT0FDQSxDQUFBLEFBQUMsV0FkSCxBQUFlLEFBY2IsQUFBWSxBQUdkOztrQkFBQSxBQUFlIiwiZmlsZSI6InNxdWFyZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam9yZ2UvRG9jdW1lbnRzL21pbmVTd2VlcGluIn0=