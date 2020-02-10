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
    pointerEvents: disabled ? 'none' : 'auto',
    border: '1px solid black',
    lineHeight: 1,
    textAlign: 'center',
    fontSize: 18
  };
}, 'div', ['onClick', 'onContextMenu']);

exports.default = Square;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3F1YXJlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNvbXBvbmVudCIsIlNxdWFyZSIsImRpc2FibGVkIiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nIiwiY3Vyc29yIiwiYmFja2dyb3VuZENvbG9yIiwicG9pbnRlckV2ZW50cyIsImJvcmRlciIsImxpbmVIZWlnaHQiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBUzs7QUFFVCxJQUFNLGdEQUNKLGdCQUFBO01BQUEsQUFBRyxnQkFBSCxBQUFHOztXQUFnQixBQUNWLEFBQ1A7WUFGaUIsQUFFVCxBQUNSO2FBSGlCLEFBR1IsQUFDVDtZQUFRLFdBQUEsQUFBVyxZQUpGLEFBSWMsQUFDL0I7cUJBQWlCLFdBQUEsQUFBVyxTQUxYLEFBS29CLEFBQ3JDO21CQUFlLFdBQUEsQUFBVyxTQU5ULEFBTWtCLEFBQ25DO1lBUGlCLEFBUWpCO2dCQVJpQixBQVFMLEFBQ1o7ZUFUaUIsQUFTTixBQUNYO2NBVkYsQUFBbUIsQUFVUDtBQVZPLEFBQ2pCO0FBRlcsQ0FBQSxFQUFBLEFBYWIsT0FDQSxDQUFBLEFBQUMsV0FkSCxBQUFlLEFBY2IsQUFBWSxBQUdkOztrQkFBQSxBQUFlIiwiZmlsZSI6InNxdWFyZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam9yZ2UvRG9jdW1lbnRzL21pbmVTd2VlcGluIn0=