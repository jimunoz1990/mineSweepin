webpackHotUpdate(0,{

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createRenderer__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_fela__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cf_style_const__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_cf_style_container__ = __webpack_require__(431);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




 // eslint-disable-line behance/no-deprecated
 // eslint-disable-line behance/no-deprecated


var StyleProvider = function StyleProvider(_ref) {
  var dev = _ref.dev,
      children = _ref.children,
      renderer = _ref.renderer,
      rehydrate = _ref.rehydrate,
      restProps = _objectWithoutProperties(_ref, ['dev', 'children', 'renderer', 'rehydrate']);

  var providerRenderer = renderer || Object(__WEBPACK_IMPORTED_MODULE_2__createRenderer__["a" /* default */])({
    dev: dev
  });
  var child = __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(children);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_react_fela__["a" /* Provider */],
    { renderer: providerRenderer, rehydrate: rehydrate },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_5_cf_style_container__["a" /* ThemeProvider */],
      { theme: __WEBPACK_IMPORTED_MODULE_4_cf_style_const__["a" /* variables */] },
      Object(__WEBPACK_IMPORTED_MODULE_0_react__["isValidElement"])(child) ? Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(child, _extends({}, restProps)) : child
    )
  );
};

StyleProvider.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  dev: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  renderer: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  rehydrate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};

/* harmony default export */ __webpack_exports__["a"] = (StyleProvider);

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createComponent */
/* unused harmony export applyTheme */
/* unused harmony export createComponentStyles */
/* unused harmony export withRenderer */
/* unused harmony export applyStaticStyles */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fela__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_fela__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore_string__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mergeThemes__ = __webpack_require__(758);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3_react_fela__["b"]; });
/* unused harmony reexport connect */
/* unused harmony reexport combineRules */
/* unused harmony reexport capitalize */
/* unused harmony reexport withTheme */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable behance/no-deprecated */



 // eslint-disable-line behance/no-deprecated



var createComponent = function createComponent(rule) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'div';
  var passThroughProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return Object(__WEBPACK_IMPORTED_MODULE_3_react_fela__["d" /* createComponent */])(rule, type, type.propTypes ? passThroughProps.concat(Object.keys(type.propTypes)) : passThroughProps);
};

var applyTheme = function applyTheme(ComponentToWrap) {
  for (var _len = arguments.length, themes = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    themes[_key - 1] = arguments[_key];
  }

  var ThemedComponent = function (_Component) {
    _inherits(ThemedComponent, _Component);

    function ThemedComponent() {
      _classCallCheck(this, ThemedComponent);

      return _possibleConstructorReturn(this, (ThemedComponent.__proto__ || Object.getPrototypeOf(ThemedComponent)).apply(this, arguments));
    }

    _createClass(ThemedComponent, [{
      key: 'render',
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_fela__["b" /* ThemeProvider */],
          { theme: __WEBPACK_IMPORTED_MODULE_5__mergeThemes__["a" /* default */].apply(undefined, [this.props.theme || {}].concat(themes)) },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ComponentToWrap, this.props)
        );
      }
    }]);

    return ThemedComponent;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  ThemedComponent._isFelaComponent = true;
  ThemedComponent.displayName = 'Themed' + ComponentToWrap.displayName;
  ThemedComponent.propTypes = {
    theme: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  };
  return Object(__WEBPACK_IMPORTED_MODULE_3_react_fela__["e" /* withTheme */])(ThemedComponent);
};

var withRenderer = function withRenderer(ComponentToWrap) {
  var WithRendererComponent = function (_Component2) {
    _inherits(WithRendererComponent, _Component2);

    function WithRendererComponent() {
      _classCallCheck(this, WithRendererComponent);

      return _possibleConstructorReturn(this, (WithRendererComponent.__proto__ || Object.getPrototypeOf(WithRendererComponent)).apply(this, arguments));
    }

    _createClass(WithRendererComponent, [{
      key: 'render',
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ComponentToWrap, _extends({ renderer: this.context.renderer }, this.props));
      }
    }]);

    return WithRendererComponent;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  WithRendererComponent.displayName = 'WithRenderer' + ComponentToWrap.displayName;
  WithRendererComponent.contextTypes = { renderer: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object };
  return WithRendererComponent;
};

var createComponentStyles = function createComponentStyles(styleFunctions, component) {
  return Object(__WEBPACK_IMPORTED_MODULE_3_react_fela__["c" /* connect */])(styleFunctions)(component);
};

var applyStaticStyles = function applyStaticStyles(staticStyles, ComponentToWrap) {
  var CompWithStaticStyles = function (_React$PureComponent) {
    _inherits(CompWithStaticStyles, _React$PureComponent);

    function CompWithStaticStyles() {
      _classCallCheck(this, CompWithStaticStyles);

      return _possibleConstructorReturn(this, (CompWithStaticStyles.__proto__ || Object.getPrototypeOf(CompWithStaticStyles)).apply(this, arguments));
    }

    _createClass(CompWithStaticStyles, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var contextTheme = this.props.theme || {};
        staticStyles = typeof staticStyles === 'function' ? staticStyles(contextTheme) : staticStyles;
        this.context.renderer.renderStatic(staticStyles);
      }
    }, {
      key: 'render',
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ComponentToWrap, this.props);
      }
    }]);

    return CompWithStaticStyles;
  }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

  CompWithStaticStyles.contextTypes = {
    renderer: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  };

  CompWithStaticStyles.propTypes = {
    theme: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  };

  return Object(__WEBPACK_IMPORTED_MODULE_3_react_fela__["e" /* withTheme */])(CompWithStaticStyles);
};



/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
* Underscore.string
* (c) 2010 Esa-Matti Suuronen <esa-matti aet suuronen dot org>
* Underscore.string is freely distributable under the terms of the MIT license.
* Documentation: https://github.com/epeli/underscore.string
* Some code is borrowed from MooTools and Alexandru Marasteanu.
* Version '3.3.4'
* @preserve
*/



function s(value) {
  /* jshint validthis: true */
  if (!(this instanceof s)) return new s(value);
  this._wrapped = value;
}

s.VERSION = '3.3.4';

s.isBlank          = __webpack_require__(432);
s.stripTags        = __webpack_require__(709);
s.capitalize       = __webpack_require__(373);
s.decapitalize     = __webpack_require__(433);
s.chop             = __webpack_require__(710);
s.trim             = __webpack_require__(88);
s.clean            = __webpack_require__(711);
s.cleanDiacritics  = __webpack_require__(435);
s.count            = __webpack_require__(712);
s.chars            = __webpack_require__(375);
s.swapCase         = __webpack_require__(713);
s.escapeHTML       = __webpack_require__(714);
s.unescapeHTML     = __webpack_require__(716);
s.splice           = __webpack_require__(436);
s.insert           = __webpack_require__(718);
s.replaceAll       = __webpack_require__(719);
s.include          = __webpack_require__(720);
s.join             = __webpack_require__(721);
s.lines            = __webpack_require__(722);
s.dedent           = __webpack_require__(723);
s.reverse          = __webpack_require__(724);
s.startsWith       = __webpack_require__(725);
s.endsWith         = __webpack_require__(726);
s.pred             = __webpack_require__(727);
s.succ             = __webpack_require__(728);
s.titleize         = __webpack_require__(729);
s.camelize         = __webpack_require__(439);
s.underscored      = __webpack_require__(440);
s.dasherize        = __webpack_require__(441);
s.classify         = __webpack_require__(730);
s.humanize         = __webpack_require__(731);
s.ltrim            = __webpack_require__(732);
s.rtrim            = __webpack_require__(376);
s.truncate         = __webpack_require__(733);
s.prune            = __webpack_require__(734);
s.words            = __webpack_require__(735);
s.pad              = __webpack_require__(257);
s.lpad             = __webpack_require__(736);
s.rpad             = __webpack_require__(737);
s.lrpad            = __webpack_require__(738);
s.sprintf          = __webpack_require__(739);
s.vsprintf         = __webpack_require__(740);
s.toNumber         = __webpack_require__(741);
s.numberFormat     = __webpack_require__(742);
s.strRight         = __webpack_require__(743);
s.strRightBack     = __webpack_require__(744);
s.strLeft          = __webpack_require__(745);
s.strLeftBack      = __webpack_require__(746);
s.toSentence       = __webpack_require__(444);
s.toSentenceSerial = __webpack_require__(747);
s.slugify          = __webpack_require__(748);
s.surround         = __webpack_require__(445);
s.quote            = __webpack_require__(749);
s.unquote          = __webpack_require__(750);
s.repeat           = __webpack_require__(751);
s.naturalCmp       = __webpack_require__(752);
s.levenshtein      = __webpack_require__(753);
s.toBoolean        = __webpack_require__(754);
s.exports          = __webpack_require__(755);
s.escapeRegExp     = __webpack_require__(434);
s.wrap             = __webpack_require__(756);
s.map              = __webpack_require__(757);

// Aliases
s.strip     = s.trim;
s.lstrip    = s.ltrim;
s.rstrip    = s.rtrim;
s.center    = s.lrpad;
s.rjust     = s.lpad;
s.ljust     = s.rpad;
s.contains  = s.include;
s.q         = s.quote;
s.toBool    = s.toBoolean;
s.camelcase = s.camelize;
s.mapChars  = s.map;


// Implement chaining
s.prototype = {
  value: function value() {
    return this._wrapped;
  }
};

function fn2method(key, fn) {
  if (typeof fn !== 'function') return;
  s.prototype[key] = function() {
    var args = [this._wrapped].concat(Array.prototype.slice.call(arguments));
    var res = fn.apply(null, args);
    // if the result is non-string stop the chain and return the value
    return typeof res === 'string' ? new s(res) : res;
  };
}

// Copy functions to instance methods for chaining
for (var key in s) fn2method(key, s[key]);

fn2method('tap', function tap(string, fn) {
  return fn(string);
});

function prototype2method(methodName) {
  fn2method(methodName, function(context) {
    var args = Array.prototype.slice.call(arguments, 1);
    return String.prototype[methodName].apply(context, args);
  });
}

var prototypeMethods = [
  'toUpperCase',
  'toLowerCase',
  'split',
  'replace',
  'slice',
  'substring',
  'substr',
  'concat'
];

for (var method in prototypeMethods) prototype2method(prototypeMethods[method]);


module.exports = s;


/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_enzyme__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_enzyme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_enzyme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createRenderer__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fela_tools__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cssbeautify__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cssbeautify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_cssbeautify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_enzyme_to_json__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_enzyme_to_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_enzyme_to_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_cf_style_const__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_fela_bindings__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_cf_style_container__ = __webpack_require__(431);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // eslint-disable-line behance/no-deprecated



var mergeOptions = function mergeOptions(options, renderer, theme) {
  var _childContextTypes, _contextTypes;

  return _extends({
    childContextTypes: (_childContextTypes = {}, _defineProperty(_childContextTypes, __WEBPACK_IMPORTED_MODULE_7_fela_bindings__["b" /* THEME_CHANNEL */], __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object), _defineProperty(_childContextTypes, 'renderer', __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object), _childContextTypes),
    contextTypes: (_contextTypes = {}, _defineProperty(_contextTypes, __WEBPACK_IMPORTED_MODULE_7_fela_bindings__["b" /* THEME_CHANNEL */], __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object), _defineProperty(_contextTypes, 'renderer', __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object), _contextTypes),
    context: _defineProperty({
      renderer: renderer
    }, __WEBPACK_IMPORTED_MODULE_7_fela_bindings__["b" /* THEME_CHANNEL */], theme ? Object(__WEBPACK_IMPORTED_MODULE_7_fela_bindings__["f" /* createTheme */])(theme) : Object(__WEBPACK_IMPORTED_MODULE_7_fela_bindings__["f" /* createTheme */])(__WEBPACK_IMPORTED_MODULE_6_cf_style_const__["a" /* variables */]))
  }, options);
};

var shallow = function shallow(node) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var rootRenderer = Object(__WEBPACK_IMPORTED_MODULE_2__createRenderer__["a" /* default */])({
    dev: true
  });

  var wrapper = Object(__WEBPACK_IMPORTED_MODULE_1_enzyme__["shallow"])(node, mergeOptions(options, rootRenderer));

  //if we are dealing with a fela node, or a ThemeProvider then dive until we get to a non-fela node (for rendering)
  var dive = function dive(wrapper, renderer) {
    var theme = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var reactElement = wrapper.get(0);

    //if the element in question is a ThemeProvider, use its theme and pass it down
    //the tree in context
    if (reactElement && reactElement.type === __WEBPACK_IMPORTED_MODULE_8_cf_style_container__["a" /* ThemeProvider */]) {
      theme = reactElement.props.theme;
    }

    if (reactElement && reactElement.type && (reactElement.type._isFelaComponent || reactElement.type === __WEBPACK_IMPORTED_MODULE_8_cf_style_container__["a" /* ThemeProvider */])) {
      var mergedOptions = mergeOptions(options, renderer, theme);
      return dive(wrapper.dive(mergedOptions), renderer, theme);
    }
    return wrapper;
  };

  var componentSnapshot = function componentSnapshot(wrapper) {
    var options = {
      indent: '  ',
      openbrace: 'end-of-line',
      autosemicolon: false
    };

    var renderer = rootRenderer;
    var wrapperToSnapshot = wrapper;

    var reactElement = wrapper.get(0);

    //if the element being snapshot is a fela component or a ThemeProvider
    //we need to dive into it and keep shallow rendering. for this we will use
    if (reactElement && reactElement.type && (reactElement.type._isFelaComponent || reactElement.type === __WEBPACK_IMPORTED_MODULE_8_cf_style_container__["a" /* ThemeProvider */])) {
      //use a new renderer to capture the styles just by rendering this enzyme wrapper
      renderer = Object(__WEBPACK_IMPORTED_MODULE_2__createRenderer__["a" /* default */])({
        dev: true
      });
      wrapperToSnapshot = dive(wrapper, renderer);
    }

    return {
      component: __WEBPACK_IMPORTED_MODULE_5_enzyme_to_json___default()(wrapperToSnapshot),
      styles: '\n' + __WEBPACK_IMPORTED_MODULE_4_cssbeautify___default()(Object(__WEBPACK_IMPORTED_MODULE_3_fela_tools__["b" /* renderToString */])(renderer), options) + '\n'
    };
  };

  //if the enzyme wrapper is around a single node, returns an object with keys: component, style
  //otherwise returns an array where each element in the array is an object with keys: component, style
  //where the snapshot for that element is stored.
  var snapshot = function snapshot(enzymeWrapper) {
    if (enzymeWrapper.length === 1) {
      return componentSnapshot(enzymeWrapper);
    }
    return enzymeWrapper.map(function (wrapper) {
      return componentSnapshot(wrapper);
    });
  };

  return {
    wrapper: wrapper,
    snapshot: snapshot
  };
};

/* unused harmony default export */ var _unused_webpack_default_export = (shallow);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45NThjODJhYWU1YzQ5ZDg0OWMwYi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NmLXN0eWxlLXByb3ZpZGVyL2VzL1N0eWxlUHJvdmlkZXIuanM/MTEzNmFhYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2Ytc3R5bGUtY29udGFpbmVyL2VzL2luZGV4LmpzPzExMzZhYWEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUuc3RyaW5nL2luZGV4LmpzPzI2MDYxNzAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NmLXN0eWxlLXByb3ZpZGVyL2VzL2ZlbGFTaGFsbG93LmpzPzJlOGM5ZWYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIGlzVmFsaWRFbGVtZW50LCBjbG9uZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNyZWF0ZVJlbmRlcmVyIGZyb20gJy4vY3JlYXRlUmVuZGVyZXInO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1mZWxhJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBiZWhhbmNlL25vLWRlcHJlY2F0ZWRcbmltcG9ydCB7IHZhcmlhYmxlcyB9IGZyb20gJ2NmLXN0eWxlLWNvbnN0JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBiZWhhbmNlL25vLWRlcHJlY2F0ZWRcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdjZi1zdHlsZS1jb250YWluZXInO1xuXG52YXIgU3R5bGVQcm92aWRlciA9IGZ1bmN0aW9uIFN0eWxlUHJvdmlkZXIoX3JlZikge1xuICB2YXIgZGV2ID0gX3JlZi5kZXYsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICByZW5kZXJlciA9IF9yZWYucmVuZGVyZXIsXG4gICAgICByZWh5ZHJhdGUgPSBfcmVmLnJlaHlkcmF0ZSxcbiAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2RldicsICdjaGlsZHJlbicsICdyZW5kZXJlcicsICdyZWh5ZHJhdGUnXSk7XG5cbiAgdmFyIHByb3ZpZGVyUmVuZGVyZXIgPSByZW5kZXJlciB8fCBjcmVhdGVSZW5kZXJlcih7XG4gICAgZGV2OiBkZXZcbiAgfSk7XG4gIHZhciBjaGlsZCA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBQcm92aWRlcixcbiAgICB7IHJlbmRlcmVyOiBwcm92aWRlclJlbmRlcmVyLCByZWh5ZHJhdGU6IHJlaHlkcmF0ZSB9LFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBUaGVtZVByb3ZpZGVyLFxuICAgICAgeyB0aGVtZTogdmFyaWFibGVzIH0sXG4gICAgICBpc1ZhbGlkRWxlbWVudChjaGlsZCkgPyBjbG9uZUVsZW1lbnQoY2hpbGQsIF9leHRlbmRzKHt9LCByZXN0UHJvcHMpKSA6IGNoaWxkXG4gICAgKVxuICApO1xufTtcblxuU3R5bGVQcm92aWRlci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgZGV2OiBQcm9wVHlwZXMuYm9vbCxcbiAgcmVuZGVyZXI6IFByb3BUeXBlcy5vYmplY3QsXG4gIHJlaHlkcmF0ZTogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlUHJvdmlkZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY2Ytc3R5bGUtcHJvdmlkZXIvZXMvU3R5bGVQcm92aWRlci5qc1xuLy8gbW9kdWxlIGlkID0gNDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyogZXNsaW50LWRpc2FibGUgYmVoYW5jZS9uby1kZXByZWNhdGVkICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbWJpbmVSdWxlcyB9IGZyb20gJ2ZlbGEnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgY29ubmVjdCwgd2l0aFRoZW1lLCBjcmVhdGVDb21wb25lbnQgYXMgY3JlYXRlRmVsYUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJlaGFuY2Uvbm8tZGVwcmVjYXRlZFxuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJ3VuZGVyc2NvcmUuc3RyaW5nJztcbmltcG9ydCBtZXJnZVRoZW1lcyBmcm9tICcuL21lcmdlVGhlbWVzJztcblxudmFyIGNyZWF0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudChydWxlKSB7XG4gIHZhciB0eXBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnZGl2JztcbiAgdmFyIHBhc3NUaHJvdWdoUHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IFtdO1xuICByZXR1cm4gY3JlYXRlRmVsYUNvbXBvbmVudChydWxlLCB0eXBlLCB0eXBlLnByb3BUeXBlcyA/IHBhc3NUaHJvdWdoUHJvcHMuY29uY2F0KE9iamVjdC5rZXlzKHR5cGUucHJvcFR5cGVzKSkgOiBwYXNzVGhyb3VnaFByb3BzKTtcbn07XG5cbnZhciBhcHBseVRoZW1lID0gZnVuY3Rpb24gYXBwbHlUaGVtZShDb21wb25lbnRUb1dyYXApIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHRoZW1lcyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB0aGVtZXNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIFRoZW1lZENvbXBvbmVudCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFRoZW1lZENvbXBvbmVudCwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBUaGVtZWRDb21wb25lbnQoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGhlbWVkQ29tcG9uZW50KTtcblxuICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChUaGVtZWRDb21wb25lbnQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihUaGVtZWRDb21wb25lbnQpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoVGhlbWVkQ29tcG9uZW50LCBbe1xuICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFRoZW1lUHJvdmlkZXIsXG4gICAgICAgICAgeyB0aGVtZTogbWVyZ2VUaGVtZXMuYXBwbHkodW5kZWZpbmVkLCBbdGhpcy5wcm9wcy50aGVtZSB8fCB7fV0uY29uY2F0KHRoZW1lcykpIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnRUb1dyYXAsIHRoaXMucHJvcHMpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRoZW1lZENvbXBvbmVudDtcbiAgfShDb21wb25lbnQpO1xuXG4gIFRoZW1lZENvbXBvbmVudC5faXNGZWxhQ29tcG9uZW50ID0gdHJ1ZTtcbiAgVGhlbWVkQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gJ1RoZW1lZCcgKyBDb21wb25lbnRUb1dyYXAuZGlzcGxheU5hbWU7XG4gIFRoZW1lZENvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3RcbiAgfTtcbiAgcmV0dXJuIHdpdGhUaGVtZShUaGVtZWRDb21wb25lbnQpO1xufTtcblxudmFyIHdpdGhSZW5kZXJlciA9IGZ1bmN0aW9uIHdpdGhSZW5kZXJlcihDb21wb25lbnRUb1dyYXApIHtcbiAgdmFyIFdpdGhSZW5kZXJlckNvbXBvbmVudCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50Mikge1xuICAgIF9pbmhlcml0cyhXaXRoUmVuZGVyZXJDb21wb25lbnQsIF9Db21wb25lbnQyKTtcblxuICAgIGZ1bmN0aW9uIFdpdGhSZW5kZXJlckNvbXBvbmVudCgpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXaXRoUmVuZGVyZXJDb21wb25lbnQpO1xuXG4gICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFdpdGhSZW5kZXJlckNvbXBvbmVudC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFdpdGhSZW5kZXJlckNvbXBvbmVudCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhXaXRoUmVuZGVyZXJDb21wb25lbnQsIFt7XG4gICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50VG9XcmFwLCBfZXh0ZW5kcyh7IHJlbmRlcmVyOiB0aGlzLmNvbnRleHQucmVuZGVyZXIgfSwgdGhpcy5wcm9wcykpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBXaXRoUmVuZGVyZXJDb21wb25lbnQ7XG4gIH0oQ29tcG9uZW50KTtcblxuICBXaXRoUmVuZGVyZXJDb21wb25lbnQuZGlzcGxheU5hbWUgPSAnV2l0aFJlbmRlcmVyJyArIENvbXBvbmVudFRvV3JhcC5kaXNwbGF5TmFtZTtcbiAgV2l0aFJlbmRlcmVyQ29tcG9uZW50LmNvbnRleHRUeXBlcyA9IHsgcmVuZGVyZXI6IFByb3BUeXBlcy5vYmplY3QgfTtcbiAgcmV0dXJuIFdpdGhSZW5kZXJlckNvbXBvbmVudDtcbn07XG5cbnZhciBjcmVhdGVDb21wb25lbnRTdHlsZXMgPSBmdW5jdGlvbiBjcmVhdGVDb21wb25lbnRTdHlsZXMoc3R5bGVGdW5jdGlvbnMsIGNvbXBvbmVudCkge1xuICByZXR1cm4gY29ubmVjdChzdHlsZUZ1bmN0aW9ucykoY29tcG9uZW50KTtcbn07XG5cbnZhciBhcHBseVN0YXRpY1N0eWxlcyA9IGZ1bmN0aW9uIGFwcGx5U3RhdGljU3R5bGVzKHN0YXRpY1N0eWxlcywgQ29tcG9uZW50VG9XcmFwKSB7XG4gIHZhciBDb21wV2l0aFN0YXRpY1N0eWxlcyA9IGZ1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhDb21wV2l0aFN0YXRpY1N0eWxlcywgX1JlYWN0JFB1cmVDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQ29tcFdpdGhTdGF0aWNTdHlsZXMoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29tcFdpdGhTdGF0aWNTdHlsZXMpO1xuXG4gICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENvbXBXaXRoU3RhdGljU3R5bGVzLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ29tcFdpdGhTdGF0aWNTdHlsZXMpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ29tcFdpdGhTdGF0aWNTdHlsZXMsIFt7XG4gICAgICBrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdmFyIGNvbnRleHRUaGVtZSA9IHRoaXMucHJvcHMudGhlbWUgfHwge307XG4gICAgICAgIHN0YXRpY1N0eWxlcyA9IHR5cGVvZiBzdGF0aWNTdHlsZXMgPT09ICdmdW5jdGlvbicgPyBzdGF0aWNTdHlsZXMoY29udGV4dFRoZW1lKSA6IHN0YXRpY1N0eWxlcztcbiAgICAgICAgdGhpcy5jb250ZXh0LnJlbmRlcmVyLnJlbmRlclN0YXRpYyhzdGF0aWNTdHlsZXMpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnRUb1dyYXAsIHRoaXMucHJvcHMpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDb21wV2l0aFN0YXRpY1N0eWxlcztcbiAgfShSZWFjdC5QdXJlQ29tcG9uZW50KTtcblxuICBDb21wV2l0aFN0YXRpY1N0eWxlcy5jb250ZXh0VHlwZXMgPSB7XG4gICAgcmVuZGVyZXI6IFByb3BUeXBlcy5vYmplY3RcbiAgfTtcblxuICBDb21wV2l0aFN0YXRpY1N0eWxlcy5wcm9wVHlwZXMgPSB7XG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3RcbiAgfTtcblxuICByZXR1cm4gd2l0aFRoZW1lKENvbXBXaXRoU3RhdGljU3R5bGVzKTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUNvbXBvbmVudCwgYXBwbHlUaGVtZSwgVGhlbWVQcm92aWRlciwgY29ubmVjdCwgY29tYmluZVJ1bGVzLCBjcmVhdGVDb21wb25lbnRTdHlsZXMsIGNhcGl0YWxpemUsIHdpdGhUaGVtZSwgd2l0aFJlbmRlcmVyLCBhcHBseVN0YXRpY1N0eWxlcyB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NmLXN0eWxlLWNvbnRhaW5lci9lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4qIFVuZGVyc2NvcmUuc3RyaW5nXG4qIChjKSAyMDEwIEVzYS1NYXR0aSBTdXVyb25lbiA8ZXNhLW1hdHRpIGFldCBzdXVyb25lbiBkb3Qgb3JnPlxuKiBVbmRlcnNjb3JlLnN0cmluZyBpcyBmcmVlbHkgZGlzdHJpYnV0YWJsZSB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxuKiBEb2N1bWVudGF0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vZXBlbGkvdW5kZXJzY29yZS5zdHJpbmdcbiogU29tZSBjb2RlIGlzIGJvcnJvd2VkIGZyb20gTW9vVG9vbHMgYW5kIEFsZXhhbmRydSBNYXJhc3RlYW51LlxuKiBWZXJzaW9uICczLjMuNCdcbiogQHByZXNlcnZlXG4qL1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHModmFsdWUpIHtcbiAgLyoganNoaW50IHZhbGlkdGhpczogdHJ1ZSAqL1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgcykpIHJldHVybiBuZXcgcyh2YWx1ZSk7XG4gIHRoaXMuX3dyYXBwZWQgPSB2YWx1ZTtcbn1cblxucy5WRVJTSU9OID0gJzMuMy40Jztcblxucy5pc0JsYW5rICAgICAgICAgID0gcmVxdWlyZSgnLi9pc0JsYW5rJyk7XG5zLnN0cmlwVGFncyAgICAgICAgPSByZXF1aXJlKCcuL3N0cmlwVGFncycpO1xucy5jYXBpdGFsaXplICAgICAgID0gcmVxdWlyZSgnLi9jYXBpdGFsaXplJyk7XG5zLmRlY2FwaXRhbGl6ZSAgICAgPSByZXF1aXJlKCcuL2RlY2FwaXRhbGl6ZScpO1xucy5jaG9wICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9jaG9wJyk7XG5zLnRyaW0gICAgICAgICAgICAgPSByZXF1aXJlKCcuL3RyaW0nKTtcbnMuY2xlYW4gICAgICAgICAgICA9IHJlcXVpcmUoJy4vY2xlYW4nKTtcbnMuY2xlYW5EaWFjcml0aWNzICA9IHJlcXVpcmUoJy4vY2xlYW5EaWFjcml0aWNzJyk7XG5zLmNvdW50ICAgICAgICAgICAgPSByZXF1aXJlKCcuL2NvdW50Jyk7XG5zLmNoYXJzICAgICAgICAgICAgPSByZXF1aXJlKCcuL2NoYXJzJyk7XG5zLnN3YXBDYXNlICAgICAgICAgPSByZXF1aXJlKCcuL3N3YXBDYXNlJyk7XG5zLmVzY2FwZUhUTUwgICAgICAgPSByZXF1aXJlKCcuL2VzY2FwZUhUTUwnKTtcbnMudW5lc2NhcGVIVE1MICAgICA9IHJlcXVpcmUoJy4vdW5lc2NhcGVIVE1MJyk7XG5zLnNwbGljZSAgICAgICAgICAgPSByZXF1aXJlKCcuL3NwbGljZScpO1xucy5pbnNlcnQgICAgICAgICAgID0gcmVxdWlyZSgnLi9pbnNlcnQnKTtcbnMucmVwbGFjZUFsbCAgICAgICA9IHJlcXVpcmUoJy4vcmVwbGFjZUFsbCcpO1xucy5pbmNsdWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9pbmNsdWRlJyk7XG5zLmpvaW4gICAgICAgICAgICAgPSByZXF1aXJlKCcuL2pvaW4nKTtcbnMubGluZXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vbGluZXMnKTtcbnMuZGVkZW50ICAgICAgICAgICA9IHJlcXVpcmUoJy4vZGVkZW50Jyk7XG5zLnJldmVyc2UgICAgICAgICAgPSByZXF1aXJlKCcuL3JldmVyc2UnKTtcbnMuc3RhcnRzV2l0aCAgICAgICA9IHJlcXVpcmUoJy4vc3RhcnRzV2l0aCcpO1xucy5lbmRzV2l0aCAgICAgICAgID0gcmVxdWlyZSgnLi9lbmRzV2l0aCcpO1xucy5wcmVkICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9wcmVkJyk7XG5zLnN1Y2MgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3N1Y2MnKTtcbnMudGl0bGVpemUgICAgICAgICA9IHJlcXVpcmUoJy4vdGl0bGVpemUnKTtcbnMuY2FtZWxpemUgICAgICAgICA9IHJlcXVpcmUoJy4vY2FtZWxpemUnKTtcbnMudW5kZXJzY29yZWQgICAgICA9IHJlcXVpcmUoJy4vdW5kZXJzY29yZWQnKTtcbnMuZGFzaGVyaXplICAgICAgICA9IHJlcXVpcmUoJy4vZGFzaGVyaXplJyk7XG5zLmNsYXNzaWZ5ICAgICAgICAgPSByZXF1aXJlKCcuL2NsYXNzaWZ5Jyk7XG5zLmh1bWFuaXplICAgICAgICAgPSByZXF1aXJlKCcuL2h1bWFuaXplJyk7XG5zLmx0cmltICAgICAgICAgICAgPSByZXF1aXJlKCcuL2x0cmltJyk7XG5zLnJ0cmltICAgICAgICAgICAgPSByZXF1aXJlKCcuL3J0cmltJyk7XG5zLnRydW5jYXRlICAgICAgICAgPSByZXF1aXJlKCcuL3RydW5jYXRlJyk7XG5zLnBydW5lICAgICAgICAgICAgPSByZXF1aXJlKCcuL3BydW5lJyk7XG5zLndvcmRzICAgICAgICAgICAgPSByZXF1aXJlKCcuL3dvcmRzJyk7XG5zLnBhZCAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3BhZCcpO1xucy5scGFkICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9scGFkJyk7XG5zLnJwYWQgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3JwYWQnKTtcbnMubHJwYWQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vbHJwYWQnKTtcbnMuc3ByaW50ZiAgICAgICAgICA9IHJlcXVpcmUoJy4vc3ByaW50ZicpO1xucy52c3ByaW50ZiAgICAgICAgID0gcmVxdWlyZSgnLi92c3ByaW50ZicpO1xucy50b051bWJlciAgICAgICAgID0gcmVxdWlyZSgnLi90b051bWJlcicpO1xucy5udW1iZXJGb3JtYXQgICAgID0gcmVxdWlyZSgnLi9udW1iZXJGb3JtYXQnKTtcbnMuc3RyUmlnaHQgICAgICAgICA9IHJlcXVpcmUoJy4vc3RyUmlnaHQnKTtcbnMuc3RyUmlnaHRCYWNrICAgICA9IHJlcXVpcmUoJy4vc3RyUmlnaHRCYWNrJyk7XG5zLnN0ckxlZnQgICAgICAgICAgPSByZXF1aXJlKCcuL3N0ckxlZnQnKTtcbnMuc3RyTGVmdEJhY2sgICAgICA9IHJlcXVpcmUoJy4vc3RyTGVmdEJhY2snKTtcbnMudG9TZW50ZW5jZSAgICAgICA9IHJlcXVpcmUoJy4vdG9TZW50ZW5jZScpO1xucy50b1NlbnRlbmNlU2VyaWFsID0gcmVxdWlyZSgnLi90b1NlbnRlbmNlU2VyaWFsJyk7XG5zLnNsdWdpZnkgICAgICAgICAgPSByZXF1aXJlKCcuL3NsdWdpZnknKTtcbnMuc3Vycm91bmQgICAgICAgICA9IHJlcXVpcmUoJy4vc3Vycm91bmQnKTtcbnMucXVvdGUgICAgICAgICAgICA9IHJlcXVpcmUoJy4vcXVvdGUnKTtcbnMudW5xdW90ZSAgICAgICAgICA9IHJlcXVpcmUoJy4vdW5xdW90ZScpO1xucy5yZXBlYXQgICAgICAgICAgID0gcmVxdWlyZSgnLi9yZXBlYXQnKTtcbnMubmF0dXJhbENtcCAgICAgICA9IHJlcXVpcmUoJy4vbmF0dXJhbENtcCcpO1xucy5sZXZlbnNodGVpbiAgICAgID0gcmVxdWlyZSgnLi9sZXZlbnNodGVpbicpO1xucy50b0Jvb2xlYW4gICAgICAgID0gcmVxdWlyZSgnLi90b0Jvb2xlYW4nKTtcbnMuZXhwb3J0cyAgICAgICAgICA9IHJlcXVpcmUoJy4vZXhwb3J0cycpO1xucy5lc2NhcGVSZWdFeHAgICAgID0gcmVxdWlyZSgnLi9oZWxwZXIvZXNjYXBlUmVnRXhwJyk7XG5zLndyYXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3dyYXAnKTtcbnMubWFwICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vbWFwJyk7XG5cbi8vIEFsaWFzZXNcbnMuc3RyaXAgICAgID0gcy50cmltO1xucy5sc3RyaXAgICAgPSBzLmx0cmltO1xucy5yc3RyaXAgICAgPSBzLnJ0cmltO1xucy5jZW50ZXIgICAgPSBzLmxycGFkO1xucy5yanVzdCAgICAgPSBzLmxwYWQ7XG5zLmxqdXN0ICAgICA9IHMucnBhZDtcbnMuY29udGFpbnMgID0gcy5pbmNsdWRlO1xucy5xICAgICAgICAgPSBzLnF1b3RlO1xucy50b0Jvb2wgICAgPSBzLnRvQm9vbGVhbjtcbnMuY2FtZWxjYXNlID0gcy5jYW1lbGl6ZTtcbnMubWFwQ2hhcnMgID0gcy5tYXA7XG5cblxuLy8gSW1wbGVtZW50IGNoYWluaW5nXG5zLnByb3RvdHlwZSA9IHtcbiAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl93cmFwcGVkO1xuICB9XG59O1xuXG5mdW5jdGlvbiBmbjJtZXRob2Qoa2V5LCBmbikge1xuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XG4gIHMucHJvdG90eXBlW2tleV0gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IFt0aGlzLl93cmFwcGVkXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgdmFyIHJlcyA9IGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIC8vIGlmIHRoZSByZXN1bHQgaXMgbm9uLXN0cmluZyBzdG9wIHRoZSBjaGFpbiBhbmQgcmV0dXJuIHRoZSB2YWx1ZVxuICAgIHJldHVybiB0eXBlb2YgcmVzID09PSAnc3RyaW5nJyA/IG5ldyBzKHJlcykgOiByZXM7XG4gIH07XG59XG5cbi8vIENvcHkgZnVuY3Rpb25zIHRvIGluc3RhbmNlIG1ldGhvZHMgZm9yIGNoYWluaW5nXG5mb3IgKHZhciBrZXkgaW4gcykgZm4ybWV0aG9kKGtleSwgc1trZXldKTtcblxuZm4ybWV0aG9kKCd0YXAnLCBmdW5jdGlvbiB0YXAoc3RyaW5nLCBmbikge1xuICByZXR1cm4gZm4oc3RyaW5nKTtcbn0pO1xuXG5mdW5jdGlvbiBwcm90b3R5cGUybWV0aG9kKG1ldGhvZE5hbWUpIHtcbiAgZm4ybWV0aG9kKG1ldGhvZE5hbWUsIGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgcmV0dXJuIFN0cmluZy5wcm90b3R5cGVbbWV0aG9kTmFtZV0uYXBwbHkoY29udGV4dCwgYXJncyk7XG4gIH0pO1xufVxuXG52YXIgcHJvdG90eXBlTWV0aG9kcyA9IFtcbiAgJ3RvVXBwZXJDYXNlJyxcbiAgJ3RvTG93ZXJDYXNlJyxcbiAgJ3NwbGl0JyxcbiAgJ3JlcGxhY2UnLFxuICAnc2xpY2UnLFxuICAnc3Vic3RyaW5nJyxcbiAgJ3N1YnN0cicsXG4gICdjb25jYXQnXG5dO1xuXG5mb3IgKHZhciBtZXRob2QgaW4gcHJvdG90eXBlTWV0aG9kcykgcHJvdG90eXBlMm1ldGhvZChwcm90b3R5cGVNZXRob2RzW21ldGhvZF0pO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUuc3RyaW5nL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3MDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHNoYWxsb3cgYXMgZW56eW1lU2hhbGxvdyB9IGZyb20gJ2VuenltZSc7XG5pbXBvcnQgY3JlYXRlUmVuZGVyZXIgZnJvbSAnLi9jcmVhdGVSZW5kZXJlcic7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ2ZlbGEtdG9vbHMnO1xuaW1wb3J0IGNzc2JlYXV0aWZ5IGZyb20gJ2Nzc2JlYXV0aWZ5JztcbmltcG9ydCB0b0pzb24gZnJvbSAnZW56eW1lLXRvLWpzb24nO1xuaW1wb3J0IHsgdmFyaWFibGVzIGFzIHRoZW1lQ29uc3RhbnRzIH0gZnJvbSAnY2Ytc3R5bGUtY29uc3QnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJlaGFuY2Uvbm8tZGVwcmVjYXRlZFxuaW1wb3J0IHsgY3JlYXRlVGhlbWUsIFRIRU1FX0NIQU5ORUwgfSBmcm9tICdmZWxhLWJpbmRpbmdzJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdjZi1zdHlsZS1jb250YWluZXInO1xuXG52YXIgbWVyZ2VPcHRpb25zID0gZnVuY3Rpb24gbWVyZ2VPcHRpb25zKG9wdGlvbnMsIHJlbmRlcmVyLCB0aGVtZSkge1xuICB2YXIgX2NoaWxkQ29udGV4dFR5cGVzLCBfY29udGV4dFR5cGVzO1xuXG4gIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgY2hpbGRDb250ZXh0VHlwZXM6IChfY2hpbGRDb250ZXh0VHlwZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jaGlsZENvbnRleHRUeXBlcywgVEhFTUVfQ0hBTk5FTCwgUHJvcFR5cGVzLm9iamVjdCksIF9kZWZpbmVQcm9wZXJ0eShfY2hpbGRDb250ZXh0VHlwZXMsICdyZW5kZXJlcicsIFByb3BUeXBlcy5vYmplY3QpLCBfY2hpbGRDb250ZXh0VHlwZXMpLFxuICAgIGNvbnRleHRUeXBlczogKF9jb250ZXh0VHlwZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jb250ZXh0VHlwZXMsIFRIRU1FX0NIQU5ORUwsIFByb3BUeXBlcy5vYmplY3QpLCBfZGVmaW5lUHJvcGVydHkoX2NvbnRleHRUeXBlcywgJ3JlbmRlcmVyJywgUHJvcFR5cGVzLm9iamVjdCksIF9jb250ZXh0VHlwZXMpLFxuICAgIGNvbnRleHQ6IF9kZWZpbmVQcm9wZXJ0eSh7XG4gICAgICByZW5kZXJlcjogcmVuZGVyZXJcbiAgICB9LCBUSEVNRV9DSEFOTkVMLCB0aGVtZSA/IGNyZWF0ZVRoZW1lKHRoZW1lKSA6IGNyZWF0ZVRoZW1lKHRoZW1lQ29uc3RhbnRzKSlcbiAgfSwgb3B0aW9ucyk7XG59O1xuXG52YXIgc2hhbGxvdyA9IGZ1bmN0aW9uIHNoYWxsb3cobm9kZSkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgdmFyIHJvb3RSZW5kZXJlciA9IGNyZWF0ZVJlbmRlcmVyKHtcbiAgICBkZXY6IHRydWVcbiAgfSk7XG5cbiAgdmFyIHdyYXBwZXIgPSBlbnp5bWVTaGFsbG93KG5vZGUsIG1lcmdlT3B0aW9ucyhvcHRpb25zLCByb290UmVuZGVyZXIpKTtcblxuICAvL2lmIHdlIGFyZSBkZWFsaW5nIHdpdGggYSBmZWxhIG5vZGUsIG9yIGEgVGhlbWVQcm92aWRlciB0aGVuIGRpdmUgdW50aWwgd2UgZ2V0IHRvIGEgbm9uLWZlbGEgbm9kZSAoZm9yIHJlbmRlcmluZylcbiAgdmFyIGRpdmUgPSBmdW5jdGlvbiBkaXZlKHdyYXBwZXIsIHJlbmRlcmVyKSB7XG4gICAgdmFyIHRoZW1lID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBudWxsO1xuXG4gICAgdmFyIHJlYWN0RWxlbWVudCA9IHdyYXBwZXIuZ2V0KDApO1xuXG4gICAgLy9pZiB0aGUgZWxlbWVudCBpbiBxdWVzdGlvbiBpcyBhIFRoZW1lUHJvdmlkZXIsIHVzZSBpdHMgdGhlbWUgYW5kIHBhc3MgaXQgZG93blxuICAgIC8vdGhlIHRyZWUgaW4gY29udGV4dFxuICAgIGlmIChyZWFjdEVsZW1lbnQgJiYgcmVhY3RFbGVtZW50LnR5cGUgPT09IFRoZW1lUHJvdmlkZXIpIHtcbiAgICAgIHRoZW1lID0gcmVhY3RFbGVtZW50LnByb3BzLnRoZW1lO1xuICAgIH1cblxuICAgIGlmIChyZWFjdEVsZW1lbnQgJiYgcmVhY3RFbGVtZW50LnR5cGUgJiYgKHJlYWN0RWxlbWVudC50eXBlLl9pc0ZlbGFDb21wb25lbnQgfHwgcmVhY3RFbGVtZW50LnR5cGUgPT09IFRoZW1lUHJvdmlkZXIpKSB7XG4gICAgICB2YXIgbWVyZ2VkT3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhvcHRpb25zLCByZW5kZXJlciwgdGhlbWUpO1xuICAgICAgcmV0dXJuIGRpdmUod3JhcHBlci5kaXZlKG1lcmdlZE9wdGlvbnMpLCByZW5kZXJlciwgdGhlbWUpO1xuICAgIH1cbiAgICByZXR1cm4gd3JhcHBlcjtcbiAgfTtcblxuICB2YXIgY29tcG9uZW50U25hcHNob3QgPSBmdW5jdGlvbiBjb21wb25lbnRTbmFwc2hvdCh3cmFwcGVyKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICBpbmRlbnQ6ICcgICcsXG4gICAgICBvcGVuYnJhY2U6ICdlbmQtb2YtbGluZScsXG4gICAgICBhdXRvc2VtaWNvbG9uOiBmYWxzZVxuICAgIH07XG5cbiAgICB2YXIgcmVuZGVyZXIgPSByb290UmVuZGVyZXI7XG4gICAgdmFyIHdyYXBwZXJUb1NuYXBzaG90ID0gd3JhcHBlcjtcblxuICAgIHZhciByZWFjdEVsZW1lbnQgPSB3cmFwcGVyLmdldCgwKTtcblxuICAgIC8vaWYgdGhlIGVsZW1lbnQgYmVpbmcgc25hcHNob3QgaXMgYSBmZWxhIGNvbXBvbmVudCBvciBhIFRoZW1lUHJvdmlkZXJcbiAgICAvL3dlIG5lZWQgdG8gZGl2ZSBpbnRvIGl0IGFuZCBrZWVwIHNoYWxsb3cgcmVuZGVyaW5nLiBmb3IgdGhpcyB3ZSB3aWxsIHVzZVxuICAgIGlmIChyZWFjdEVsZW1lbnQgJiYgcmVhY3RFbGVtZW50LnR5cGUgJiYgKHJlYWN0RWxlbWVudC50eXBlLl9pc0ZlbGFDb21wb25lbnQgfHwgcmVhY3RFbGVtZW50LnR5cGUgPT09IFRoZW1lUHJvdmlkZXIpKSB7XG4gICAgICAvL3VzZSBhIG5ldyByZW5kZXJlciB0byBjYXB0dXJlIHRoZSBzdHlsZXMganVzdCBieSByZW5kZXJpbmcgdGhpcyBlbnp5bWUgd3JhcHBlclxuICAgICAgcmVuZGVyZXIgPSBjcmVhdGVSZW5kZXJlcih7XG4gICAgICAgIGRldjogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB3cmFwcGVyVG9TbmFwc2hvdCA9IGRpdmUod3JhcHBlciwgcmVuZGVyZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjb21wb25lbnQ6IHRvSnNvbih3cmFwcGVyVG9TbmFwc2hvdCksXG4gICAgICBzdHlsZXM6ICdcXG4nICsgY3NzYmVhdXRpZnkocmVuZGVyVG9TdHJpbmcocmVuZGVyZXIpLCBvcHRpb25zKSArICdcXG4nXG4gICAgfTtcbiAgfTtcblxuICAvL2lmIHRoZSBlbnp5bWUgd3JhcHBlciBpcyBhcm91bmQgYSBzaW5nbGUgbm9kZSwgcmV0dXJucyBhbiBvYmplY3Qgd2l0aCBrZXlzOiBjb21wb25lbnQsIHN0eWxlXG4gIC8vb3RoZXJ3aXNlIHJldHVybnMgYW4gYXJyYXkgd2hlcmUgZWFjaCBlbGVtZW50IGluIHRoZSBhcnJheSBpcyBhbiBvYmplY3Qgd2l0aCBrZXlzOiBjb21wb25lbnQsIHN0eWxlXG4gIC8vd2hlcmUgdGhlIHNuYXBzaG90IGZvciB0aGF0IGVsZW1lbnQgaXMgc3RvcmVkLlxuICB2YXIgc25hcHNob3QgPSBmdW5jdGlvbiBzbmFwc2hvdChlbnp5bWVXcmFwcGVyKSB7XG4gICAgaWYgKGVuenltZVdyYXBwZXIubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gY29tcG9uZW50U25hcHNob3QoZW56eW1lV3JhcHBlcik7XG4gICAgfVxuICAgIHJldHVybiBlbnp5bWVXcmFwcGVyLm1hcChmdW5jdGlvbiAod3JhcHBlcikge1xuICAgICAgcmV0dXJuIGNvbXBvbmVudFNuYXBzaG90KHdyYXBwZXIpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgd3JhcHBlcjogd3JhcHBlcixcbiAgICBzbmFwc2hvdDogc25hcHNob3RcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNoYWxsb3c7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY2Ytc3R5bGUtcHJvdmlkZXIvZXMvZmVsYVNoYWxsb3cuanNcbi8vIG1vZHVsZSBpZCA9IDc2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUM5SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDOUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9