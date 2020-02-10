'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cfStyleContainer = require('cf-style-container');

var Square = (0, _cfStyleContainer.createComponent)(function (_ref) {
  var disabled = _ref.disabled;
  return {
    width: 40,
    height: 40,
    padding: 10,
    cursor: disabled ? 'initial' : 'pointer',
    backgroundColor: disabled ? '#CCC' : '#FFF',
    border: '1px solid black',
    lineHeight: 1,
    textAlign: 'center',
    fontSize: 18
  };
}, 'div', ['onClick', 'onContextMenu']);

exports.default = Square;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3F1YXJlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNvbXBvbmVudCIsIlNxdWFyZSIsImRpc2FibGVkIiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nIiwiY3Vyc29yIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwibGluZUhlaWdodCIsInRleHRBbGlnbiIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFTOztBQUVULElBQU0sZ0RBQ0osZ0JBQUE7TUFBQSxBQUFHLGdCQUFILEFBQUc7O1dBQWdCLEFBQ1YsQUFDUDtZQUZpQixBQUVULEFBQ1I7YUFIaUIsQUFHUixBQUNUO1lBQVEsV0FBQSxBQUFXLFlBSkYsQUFJYyxBQUMvQjtxQkFBaUIsV0FBQSxBQUFXLFNBTFgsQUFLb0IsQUFDckM7WUFOaUIsQUFPakI7Z0JBUGlCLEFBT0wsQUFDWjtlQVJpQixBQVFOLEFBQ1g7Y0FURixBQUFtQixBQVNQO0FBVE8sQUFDakI7QUFGVyxDQUFBLEVBQUEsQUFZYixPQUNBLENBQUEsQUFBQyxXQWJILEFBQWUsQUFhYixBQUFZLEFBR2Q7O2tCQUFBLEFBQWUiLCJmaWxlIjoic3F1YXJlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qb3JnZS9Eb2N1bWVudHMvbWluZVN3ZWVwaW4ifQ==