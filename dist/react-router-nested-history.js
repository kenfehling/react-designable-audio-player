(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactDesignableAudioPlayer"] = factory(require("react"));
	else
		root["ReactDesignableAudioPlayer"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 152);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(9)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var core = __webpack_require__(1);
var ctx = __webpack_require__(46);
var hide = __webpack_require__(10);
var has = __webpack_require__(5);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(16);
var IE8_DOM_DEFINE = __webpack_require__(48);
var toPrimitive = __webpack_require__(36);
var dP = Object.defineProperty;

exports.f = __webpack_require__(2) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(49);
var defined = __webpack_require__(27);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var SliderContext = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createContext"]({
  min: 0,
  max: 0,
  direction: 'ltr',
  step: 1,
  includedStart: 0,
  includedEnd: 0,
  tabIndex: 0
});
/* harmony default export */ __webpack_exports__["a"] = (SliderContext);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var createDesc = __webpack_require__(22);
module.exports = __webpack_require__(2) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(34)('wks');
var uid = __webpack_require__(24);
var Symbol = __webpack_require__(4).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = getOffset;
/* harmony export (immutable) */ __webpack_exports__["a"] = getDirectionStyle;
/* harmony export (immutable) */ __webpack_exports__["b"] = getIndex;
function getOffset(value, min, max) {
  return (value - min) / (max - min);
}
function getDirectionStyle(direction, value, min, max) {
  var offset = getOffset(value, min, max);
  var positionStyle = {};

  switch (direction) {
    case 'rtl':
      positionStyle.right = "".concat(offset * 100, "%");
      positionStyle.transform = 'translateX(50%)';
      break;

    case 'btt':
      positionStyle.bottom = "".concat(offset * 100, "%");
      positionStyle.transform = 'translateY(50%)';
      break;

    case 'ttb':
      positionStyle.top = "".concat(offset * 100, "%");
      positionStyle.transform = 'translateY(-50%)';
      break;

    default:
      positionStyle.left = "".concat(offset * 100, "%");
      positionStyle.transform = 'translateX(-50%)';
      break;
  }

  return positionStyle;
}
/** Return index value if is list or return value directly */

function getIndex(value, index) {
  return Array.isArray(value) ? value[index] : value;
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _defineProperty;
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(54);
var enumBugKeys = __webpack_require__(28);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _objectSpread2;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defineProperty_js__ = __webpack_require__(14);


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__defineProperty_js__["a" /* default */])(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _slicedToArray;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrayWithHoles_js__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__iterableToArrayLimit_js__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__unsupportedIterableToArray_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nonIterableRest_js__ = __webpack_require__(64);




function _slicedToArray(arr, i) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__arrayWithHoles_js__["a" /* default */])(arr) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__iterableToArrayLimit_js__["a" /* default */])(arr, i) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__unsupportedIterableToArray_js__["a" /* default */])(arr, i) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__nonIterableRest_js__["a" /* default */])();
}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(27);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Playlist = exports.TimeSlider = exports.TitleMarquee = exports.connectAudioPlayer = undefined;

var _ReactDesignableAudioPlayer = __webpack_require__(68);

exports.connectAudioPlayer = _ReactDesignableAudioPlayer.connectAudioPlayer;
exports.TitleMarquee = _ReactDesignableAudioPlayer.TitleMarquee;
exports.TimeSlider = _ReactDesignableAudioPlayer.TimeSlider;
exports.Playlist = _ReactDesignableAudioPlayer.Playlist;

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _toConsumableArray;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrayWithoutHoles_js__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__iterableToArray_js__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__unsupportedIterableToArray_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nonIterableSpread_js__ = __webpack_require__(65);




function _toConsumableArray(arr) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__arrayWithoutHoles_js__["a" /* default */])(arr) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__iterableToArray_js__["a" /* default */])(arr) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__unsupportedIterableToArray_js__["a" /* default */])(arr) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__nonIterableSpread_js__["a" /* default */])();
}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(16);
var dPs = __webpack_require__(101);
var enumBugKeys = __webpack_require__(28);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(47)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(95).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(6).f;
var has = __webpack_require__(5);
var TAG = __webpack_require__(12)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(34)('keys');
var uid = __webpack_require__(24);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var global = __webpack_require__(4);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(21) ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(11);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var core = __webpack_require__(1);
var LIBRARY = __webpack_require__(21);
var wksExt = __webpack_require__(38);
var defineProperty = __webpack_require__(6).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(12);


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _arrayLikeToArray;
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _extends;
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _objectWithoutProperties;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objectWithoutPropertiesLoose_js__ = __webpack_require__(66);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__objectWithoutPropertiesLoose_js__["a" /* default */])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _unsupportedIterableToArray;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrayLikeToArray_js__ = __webpack_require__(39);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__arrayLikeToArray_js__["a" /* default */])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__arrayLikeToArray_js__["a" /* default */])(o, minLen);
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(70);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(77);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(76);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(91);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
var document = __webpack_require__(4).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(2) && !__webpack_require__(9)(function () {
  return Object.defineProperty(__webpack_require__(47)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(45);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(21);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(55);
var hide = __webpack_require__(10);
var Iterators = __webpack_require__(29);
var $iterCreate = __webpack_require__(97);
var setToStringTag = __webpack_require__(32);
var getPrototypeOf = __webpack_require__(53);
var ITERATOR = __webpack_require__(12)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(18);
var createDesc = __webpack_require__(22);
var toIObject = __webpack_require__(7);
var toPrimitive = __webpack_require__(36);
var has = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(48);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(2) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(54);
var hiddenKeys = __webpack_require__(28).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(5);
var toObject = __webpack_require__(23);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(5);
var toIObject = __webpack_require__(7);
var arrayIndexOf = __webpack_require__(93)(false);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */

var ExecutionEnvironment = {
  canUseDOM: canUseDOM,
  canUseWorkers: typeof Worker !== 'undefined',
  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
  canUseViewport: canUseDOM && !!window.screen,
  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};
module.exports = ExecutionEnvironment;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {
  module.exports = require('./cjs/react-is.production.min.js');
} else {
  module.exports = __webpack_require__(148);
}


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _arrayWithHoles;
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _arrayWithoutHoles;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrayLikeToArray_js__ = __webpack_require__(39);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__arrayLikeToArray_js__["a" /* default */])(arr);
}

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _iterableToArray;
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _iterableToArrayLimit;
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _nonIterableRest;
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _nonIterableSpread;
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _objectWithoutPropertiesLoose;
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _typeof;
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Playlist = exports.TimeSlider = exports.TitleMarquee = undefined;

var _extends2 = __webpack_require__(43);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(81);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(73);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(78);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(79);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(82);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(80);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.connectAudioPlayer = connectAudioPlayer;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(128);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ExecutionEnvironment = __webpack_require__(56);

var _rcSlider = __webpack_require__(140);

var _rcSlider2 = _interopRequireDefault(_rcSlider);

var _insertCss = __webpack_require__(124);

var _insertCss2 = _interopRequireDefault(_insertCss);

__webpack_require__(151);

var _audioPlayerCore = __webpack_require__(69);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function connectAudioPlayer(WrappedComponent, tracks) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$autoplay = _ref.autoplay,
      autoplay = _ref$autoplay === undefined ? false : _ref$autoplay;

  var Connect = function (_Component) {
    (0, _inherits3.default)(Connect, _Component);

    function Connect(props) {
      (0, _classCallCheck3.default)(this, Connect);

      var _this = (0, _possibleConstructorReturn3.default)(this, (Connect.__proto__ || (0, _getPrototypeOf2.default)(Connect)).call(this, props));

      _this.state = {
        isPlaying: false,
        currentTrack: null,
        secondsElapsed: 0,
        secondsRemaining: 0,
        timeElapsed: null,
        timeRemaining: null
      };
      return _this;
    }

    (0, _createClass3.default)(Connect, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        this.listenerId = (0, _audioPlayerCore.addListener)(function (update) {
          var type = update.type,
              state = (0, _objectWithoutProperties3.default)(update, ['type']);

          _this2.setState(state);
        });
        if (autoplay) {
          (0, _audioPlayerCore.turnOnAutoplay)();
        }
        (0, _audioPlayerCore.addTracks)(tracks);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        (0, _audioPlayerCore.removeListener)(this.listenerId);
      }
    }, {
      key: 'render',
      value: function render() {
        var props = {
          play: _audioPlayerCore.play,
          stop: _audioPlayerCore.stop,
          seek: _audioPlayerCore.seek,
          next: _audioPlayerCore.next,
          prev: _audioPlayerCore.prev,
          goto: _audioPlayerCore.goto,
          gotoAndPlay: _audioPlayerCore.gotoAndPlay,
          isPlaying: this.state.isPlaying,
          currentTrack: this.state.currentTrack || {},
          secondsElapsed: this.state.secondsElapsed,
          secondsRemaining: this.state.secondsRemaining,
          timeElapsed: this.state.timeElapsed,
          timeRemaining: this.state.timeRemaining
        };
        return (0, _react.createElement)(WrappedComponent, (0, _extends3.default)({}, this.props, props));
      }
    }]);
    return Connect;
  }(_react.Component);

  return Connect;
}

/* TitleMarquee component */

var marqueeAnimationName = 'rdap_marquee';

var baseStyle = {
  paddingLeft: '100%',
  display: 'inline-block'
};

var getMarqueeStyle = function getMarqueeStyle(duration) {
  return (0, _extends3.default)({}, baseStyle, {
    animation: marqueeAnimationName + ' ' + duration + 's infinite linear'
  });
};

var TM = function (_Component2) {
  (0, _inherits3.default)(TM, _Component2);

  function TM(props) {
    (0, _classCallCheck3.default)(this, TM);

    var _this3 = (0, _possibleConstructorReturn3.default)(this, (TM.__proto__ || (0, _getPrototypeOf2.default)(TM)).call(this, props));

    _this3.state = {
      on: true,
      currentTrack: null
    };
    if (_ExecutionEnvironment.canUseDOM) {
      (0, _insertCss2.default)('@keyframes ' + marqueeAnimationName + ' {\n        0% {-webkit-transform:translate(0, 0)}\n        100% {-webkit-transform:translate(-100%, 0)}\n       }');
    }
    return _this3;
  }

  (0, _createClass3.default)(TM, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this4 = this;

      this.listenerId = (0, _audioPlayerCore.addListener)(function (update) {
        return _this4.setState({
          currentTrack: update.currentTrack,
          on: update.type !== _audioPlayerCore.UpdateTypes.TRACK_SWITCH
        });
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _audioPlayerCore.removeListener)(this.listenerId);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          textFn = _props.textFn,
          duration = _props.duration;
      var currentTrack = this.state.currentTrack;

      var _ref2 = currentTrack || {},
          number = _ref2.number,
          artist = _ref2.artist,
          title = _ref2.title;

      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          'div',
          { style: { overflow: 'hidden', whiteSpace: 'nowrap' } },
          _react2.default.createElement(
            'div',
            { style: this.state.on ? getMarqueeStyle(duration || 10) : baseStyle },
            currentTrack ? textFn ? textFn(currentTrack) : number + '. ' + artist + ' - ' + title : ''
          )
        )
      );
    }
  }]);
  return TM;
}(_react.Component);

TM.propTypes = {
  className: _propTypes2.default.string,
  textFn: _propTypes2.default.func,
  duration: _propTypes2.default.number
};

var TitleMarquee = exports.TitleMarquee = TM;

/* TimeSlider component */

var DefaultSliderHandle = function (_Component3) {
  (0, _inherits3.default)(DefaultSliderHandle, _Component3);

  function DefaultSliderHandle() {
    (0, _classCallCheck3.default)(this, DefaultSliderHandle);
    return (0, _possibleConstructorReturn3.default)(this, (DefaultSliderHandle.__proto__ || (0, _getPrototypeOf2.default)(DefaultSliderHandle)).apply(this, arguments));
  }

  (0, _createClass3.default)(DefaultSliderHandle, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null);
    }
  }]);
  return DefaultSliderHandle;
}(_react.Component);

var TS = function (_Component4) {
  (0, _inherits3.default)(TS, _Component4);

  function TS(props) {
    (0, _classCallCheck3.default)(this, TS);

    var _this6 = (0, _possibleConstructorReturn3.default)(this, (TS.__proto__ || (0, _getPrototypeOf2.default)(TS)).call(this, props));

    _this6.state = {
      secondsElapsed: 0,
      secondsRemaining: 0
    };
    return _this6;
  }

  (0, _createClass3.default)(TS, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this7 = this;

      this.listenerId = (0, _audioPlayerCore.addListener)(function (update) {
        var secondsElapsed = update.secondsElapsed,
            secondsRemaining = update.secondsRemaining;

        _this7.setState({ secondsElapsed: secondsElapsed, secondsRemaining: secondsRemaining });
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _audioPlayerCore.removeListener)(this.listenerId);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          props = (0, _objectWithoutProperties3.default)(_props2, ['className']);
      var _state = this.state,
          secondsElapsed = _state.secondsElapsed,
          secondsRemaining = _state.secondsRemaining;

      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(_rcSlider2.default, (0, _extends3.default)({ onChange: _audioPlayerCore.seek,
          value: secondsElapsed,
          min: 0,
          max: secondsElapsed + secondsRemaining,
          handle: this.props.handle || _react2.default.createElement(DefaultSliderHandle, null)
        }, props))
      );
    }
  }]);
  return TS;
}(_react.Component);

TS.propTypes = {
  className: _propTypes2.default.string
};

var TimeSlider = exports.TimeSlider = TS;

/* Playlist component */

var PL = function (_Component5) {
  (0, _inherits3.default)(PL, _Component5);

  function PL(props) {
    (0, _classCallCheck3.default)(this, PL);

    var _this8 = (0, _possibleConstructorReturn3.default)(this, (PL.__proto__ || (0, _getPrototypeOf2.default)(PL)).call(this, props));

    _this8.state = {
      tracks: [],
      currentTrack: null
    };
    return _this8;
  }

  (0, _createClass3.default)(PL, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this9 = this;

      this.listenerId = (0, _audioPlayerCore.addListener)(function (update) {
        var tracks = update.tracks,
            currentTrack = update.currentTrack;

        _this9.setState({ tracks: tracks, currentTrack: currentTrack });
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _audioPlayerCore.removeListener)(this.listenerId);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          className = _props3.className,
          itemClassName = _props3.itemClassName,
          currentItemClassName = _props3.currentItemClassName,
          itemComponent = _props3.itemComponent;
      var _state2 = this.state,
          tracks = _state2.tracks,
          currentTrack = _state2.currentTrack;

      var _ref3 = currentTrack || {},
          number = _ref3.number;

      var itemStyle = {
        padding: '2px 6px',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
      };
      return _react2.default.createElement(
        'div',
        { className: className },
        tracks.map(function (track, i) {
          return _react2.default.createElement(
            'div',
            { key: i,
              className: number === i + 1 ? itemClassName + ' ' + currentItemClassName : itemClassName,
              style: itemStyle,
              onClick: function onClick() {
                return number === i + 1 ? (0, _audioPlayerCore.gotoAndPlay)(i + 1) : (0, _audioPlayerCore.goto)(i + 1);
              }
            },
            itemComponent ? itemComponent(track) : i + 1 + '. ' + track.artist + ' - ' + track.title
          );
        })
      );
    }
  }]);
  return PL;
}(_react.Component);

PL.propTypes = {
  className: _propTypes2.default.string,
  itemClassName: _propTypes2.default.string,
  currentItemClassName: _propTypes2.default.string,
  itemComponent: _propTypes2.default.func
};

var Playlist = exports.Playlist = PL;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.turnOnAutoplay = exports.gotoAndPlay = exports.goto = exports.prev = exports.next = exports.seek = exports.stop = exports.play = exports.addTracks = exports.DEFAULT_TIME_STRING = exports.UpdateTypes = undefined;

var _extends2 = __webpack_require__(43);

var _extends3 = _interopRequireDefault(_extends2);

var _values = __webpack_require__(75);

var _values2 = _interopRequireDefault(_values);

exports.formatTime = formatTime;
exports.addListener = addListener;
exports.removeListener = removeListener;
exports.getAllListeners = getAllListeners;

var _ExecutionEnvironment = __webpack_require__(56);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {}; /* global Audio */

var audio = _ExecutionEnvironment.canUseDOM ? new Audio() : null;
var tracks = void 0;
var currentTrackIndex = 0;
var timer = void 0;
var listeners = {};
var lastListenerId = 0;

var UpdateTypes = exports.UpdateTypes = {
    LISTENER_ADDED: 'LISTENER_ADDED',
    TRACKS_ADDED: 'TRACKS_ADDED',
    LOAD: 'LOAD',
    PLAY: 'PLAY',
    PAUSE: 'PAUSE',
    STOP: 'STOP',
    SEEK: 'SEEK',
    TRACK_SWITCH: 'TRACK_SWITCH',
    TICK: 'TICK'
};

var DEFAULT_TIME_STRING = exports.DEFAULT_TIME_STRING = '--:--';

function isPlaying() {
    return audio.duration > 0 && !audio.paused;
}

function isStopped() {
    return !audio.currentTime;
}

function zeroPadNumber(number) {
    return number < 10 ? '0' + number : number;
}

function formatTime(seconds) {
    if (typeof seconds === 'number' && seconds >= 0) {
        var m = Math.floor(seconds / 60);
        var s = Math.round(seconds) % 60;
        return zeroPadNumber(m) + ':' + zeroPadNumber(s);
    } else {
        return DEFAULT_TIME_STRING;
    }
}

function updateListeners(type) {
    (0, _values2.default)(listeners).forEach(function (listener) {
        return listener({
            type: type,
            tracks: tracks,
            isPlaying: isPlaying(),
            secondsElapsed: audio.currentTime,
            secondsRemaining: audio.duration - audio.currentTime,
            timeElapsed: isStopped() ? DEFAULT_TIME_STRING : formatTime(audio.currentTime),
            timeRemaining: formatTime(audio.duration - audio.currentTime),
            currentTrack: (0, _extends3.default)({}, tracks[currentTrackIndex], {
                durationSeconds: audio.duration,
                durationString: formatTime(audio.duration)
            })
        });
    });
}

function switchTrack() {
    var wasStopped = isStopped();
    audio.src = tracks[currentTrackIndex].file;
    if (!wasStopped) {
        play();
    }
    updateListeners(UpdateTypes.TRACK_SWITCH);
}

function stopTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

var addTracks = exports.addTracks = _ExecutionEnvironment.canUseDOM ? function (newTracks) {
    if (tracks === undefined || tracks.length === 0) {
        audio.src = newTracks[0].file;
    }
    tracks = newTracks.map(function (t, i) {
        return (0, _extends3.default)({}, t, { number: i + 1 });
    });
    updateListeners(UpdateTypes.TRACKS_ADDED);
} : noop;

var play = exports.play = _ExecutionEnvironment.canUseDOM ? function () {
    if (isPlaying()) {
        audio.pause();
        stopTimer();
        updateListeners(UpdateTypes.PAUSE);
    } else {
        audio.play();
        updateListeners(UpdateTypes.PLAY);
        timer = setInterval(function () {
            return updateListeners(UpdateTypes.TICK);
        }, 1000);
    }
} : noop;

var stop = exports.stop = _ExecutionEnvironment.canUseDOM ? function () {
    audio.pause();
    audio.currentTime = 0;
    stopTimer();
    updateListeners(UpdateTypes.STOP);
} : noop;

var seek = exports.seek = _ExecutionEnvironment.canUseDOM ? function (seconds) {
    audio.currentTime = seconds;
    updateListeners(UpdateTypes.SEEK);
} : noop;

var next = exports.next = _ExecutionEnvironment.canUseDOM ? function () {
    currentTrackIndex = currentTrackIndex + 1 >= tracks.length ? 0 : currentTrackIndex + 1;
    switchTrack();
} : noop;

var prev = exports.prev = _ExecutionEnvironment.canUseDOM ? function () {
    currentTrackIndex = currentTrackIndex - 1 < 0 ? tracks.length - 1 : currentTrackIndex - 1;
    switchTrack();
} : noop;

var goto = exports.goto = _ExecutionEnvironment.canUseDOM ? function (number) {
    currentTrackIndex = number - 1;
    switchTrack();
} : noop;

var gotoAndPlay = exports.gotoAndPlay = _ExecutionEnvironment.canUseDOM ? function (number) {
    goto(number);
    if (!isPlaying()) {
        play();
    }
} : noop;

var turnOnAutoplay = exports.turnOnAutoplay = _ExecutionEnvironment.canUseDOM ? function () {
    audio.autoplay = true;
} : noop;

function addListener(callback) {
    listeners[String(++lastListenerId)] = callback;
    return lastListenerId;
}

function removeListener(id) {
    delete listeners[String(id)];
}

function getAllListeners() {
    return listeners;
}

if (_ExecutionEnvironment.canUseDOM) {
    audio.addEventListener('play', function () {
        return updateListeners(UpdateTypes.PLAY);
    });
    audio.addEventListener('durationchange', function () {
        return updateListeners(UpdateTypes.LOAD);
    });

    audio.addEventListener('ended', function () {
        next();
        play();
    });
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(83), __esModule: true };

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(84), __esModule: true };

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(86), __esModule: true };

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(88), __esModule: true };

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(90), __esModule: true };

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(72);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(74);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(71);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(44);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(44);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(110);
module.exports = __webpack_require__(1).Object.assign;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(111);
var $Object = __webpack_require__(1).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(112);
var $Object = __webpack_require__(1).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(113);
module.exports = __webpack_require__(1).Object.getPrototypeOf;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(114);
module.exports = __webpack_require__(1).Object.setPrototypeOf;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(118);
module.exports = __webpack_require__(1).Object.values;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(117);
__webpack_require__(115);
__webpack_require__(119);
__webpack_require__(120);
module.exports = __webpack_require__(1).Symbol;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(116);
__webpack_require__(121);
module.exports = __webpack_require__(38).f('iterator');


/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(7);
var toLength = __webpack_require__(108);
var toAbsoluteIndex = __webpack_require__(107);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(17);
var gOPS = __webpack_require__(31);
var pIE = __webpack_require__(18);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(4).document;
module.exports = document && document.documentElement;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(45);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(30);
var descriptor = __webpack_require__(22);
var setToStringTag = __webpack_require__(32);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(10)(IteratorPrototype, __webpack_require__(12)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(24)('meta');
var isObject = __webpack_require__(11);
var has = __webpack_require__(5);
var setDesc = __webpack_require__(6).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(9)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(2);
var getKeys = __webpack_require__(17);
var gOPS = __webpack_require__(31);
var pIE = __webpack_require__(18);
var toObject = __webpack_require__(23);
var IObject = __webpack_require__(49);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(9)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var anObject = __webpack_require__(16);
var getKeys = __webpack_require__(17);

module.exports = __webpack_require__(2) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(7);
var gOPN = __webpack_require__(52).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(3);
var core = __webpack_require__(1);
var fails = __webpack_require__(9);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(2);
var getKeys = __webpack_require__(17);
var toIObject = __webpack_require__(7);
var isEnum = __webpack_require__(18).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(11);
var anObject = __webpack_require__(16);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(46)(Function.call, __webpack_require__(51).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(35);
var defined = __webpack_require__(27);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(35);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(35);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(92);
var step = __webpack_require__(98);
var Iterators = __webpack_require__(29);
var toIObject = __webpack_require__(7);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(50)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(3);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(100) });


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(30) });


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(2), 'Object', { defineProperty: __webpack_require__(6).f });


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(23);
var $getPrototypeOf = __webpack_require__(53);

__webpack_require__(103)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(3);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(105).set });


/***/ }),
/* 115 */
/***/ (function(module, exports) {



/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(106)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(50)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(4);
var has = __webpack_require__(5);
var DESCRIPTORS = __webpack_require__(2);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(55);
var META = __webpack_require__(99).KEY;
var $fails = __webpack_require__(9);
var shared = __webpack_require__(34);
var setToStringTag = __webpack_require__(32);
var uid = __webpack_require__(24);
var wks = __webpack_require__(12);
var wksExt = __webpack_require__(38);
var wksDefine = __webpack_require__(37);
var enumKeys = __webpack_require__(94);
var isArray = __webpack_require__(96);
var anObject = __webpack_require__(16);
var isObject = __webpack_require__(11);
var toObject = __webpack_require__(23);
var toIObject = __webpack_require__(7);
var toPrimitive = __webpack_require__(36);
var createDesc = __webpack_require__(22);
var _create = __webpack_require__(30);
var gOPNExt = __webpack_require__(102);
var $GOPD = __webpack_require__(51);
var $GOPS = __webpack_require__(31);
var $DP = __webpack_require__(6);
var $keys = __webpack_require__(17);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(52).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(18).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(21)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(3);
var $values = __webpack_require__(104)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37)('asyncIterator');


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37)('observable');


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(109);
var global = __webpack_require__(4);
var hide = __webpack_require__(10);
var Iterators = __webpack_require__(29);
var TO_STRING_TAG = __webpack_require__(12)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(123)();
// imports


// module
exports.push([module.i, ".rc-slider {\n  position: relative;\n  width: 100%;\n  height: 14px;\n  padding: 5px 0;\n  border-radius: 6px;\n  touch-action: none;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-rail {\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background-color: #e9e9e9;\n  border-radius: 6px;\n}\n.rc-slider-track {\n  position: absolute;\n  height: 4px;\n  background-color: #abe2fb;\n  border-radius: 6px;\n}\n.rc-slider-handle {\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  margin-top: -5px;\n  background-color: #fff;\n  border: solid 2px #96dbfa;\n  border-radius: 50%;\n  cursor: pointer;\n  cursor: -webkit-grab;\n  cursor: grab;\n  opacity: 0.8;\n  touch-action: pan-x;\n}\n.rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {\n  border-color: #57c5f7;\n  box-shadow: 0 0 0 5px #96dbfa;\n}\n.rc-slider-handle:focus {\n  outline: none;\n  box-shadow: none;\n}\n.rc-slider-handle:focus-visible {\n  border-color: #2db7f5;\n  box-shadow: 0 0 0 3px #96dbfa;\n}\n.rc-slider-handle-click-focused:focus {\n  border-color: #96dbfa;\n  box-shadow: unset;\n}\n.rc-slider-handle:hover {\n  border-color: #57c5f7;\n}\n.rc-slider-handle:active {\n  border-color: #57c5f7;\n  box-shadow: 0 0 5px #57c5f7;\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n.rc-slider-mark {\n  position: absolute;\n  top: 18px;\n  left: 0;\n  width: 100%;\n  font-size: 12px;\n}\n.rc-slider-mark-text {\n  position: absolute;\n  display: inline-block;\n  color: #999;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.rc-slider-mark-text-active {\n  color: #666;\n}\n.rc-slider-step {\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background: transparent;\n  pointer-events: none;\n}\n.rc-slider-dot {\n  position: absolute;\n  bottom: -2px;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  background-color: #fff;\n  border: 2px solid #e9e9e9;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.rc-slider-dot-active {\n  border-color: #96dbfa;\n}\n.rc-slider-dot-reverse {\n  margin-right: -4px;\n}\n.rc-slider-disabled {\n  background-color: #e9e9e9;\n}\n.rc-slider-disabled .rc-slider-track {\n  background-color: #ccc;\n}\n.rc-slider-disabled .rc-slider-handle,\n.rc-slider-disabled .rc-slider-dot {\n  background-color: #fff;\n  border-color: #ccc;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n.rc-slider-disabled .rc-slider-mark-text,\n.rc-slider-disabled .rc-slider-dot {\n  cursor: not-allowed !important;\n}\n.rc-slider-vertical {\n  width: 14px;\n  height: 100%;\n  padding: 0 5px;\n}\n.rc-slider-vertical .rc-slider-rail {\n  width: 4px;\n  height: 100%;\n}\n.rc-slider-vertical .rc-slider-track {\n  bottom: 0;\n  left: 5px;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-handle {\n  margin-top: 0;\n  margin-left: -5px;\n  touch-action: pan-y;\n}\n.rc-slider-vertical .rc-slider-mark {\n  top: 0;\n  left: 18px;\n  height: 100%;\n}\n.rc-slider-vertical .rc-slider-step {\n  width: 4px;\n  height: 100%;\n}\n.rc-slider-vertical .rc-slider-dot {\n  margin-left: -2px;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  display: block !important;\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-leave {\n  display: block !important;\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,\n.rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {\n  animation-name: rcSliderTooltipZoomDownIn;\n  animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {\n  animation-name: rcSliderTooltipZoomDownOut;\n  animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  transform: scale(0, 0);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n}\n.rc-slider-tooltip-zoom-down-leave {\n  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n@keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    transform: scale(0, 0);\n    transform-origin: 50% 100%;\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1, 1);\n    transform-origin: 50% 100%;\n  }\n}\n@keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    transform: scale(1, 1);\n    transform-origin: 50% 100%;\n  }\n  100% {\n    transform: scale(0, 0);\n    transform-origin: 50% 100%;\n    opacity: 0;\n  }\n}\n.rc-slider-tooltip {\n  position: absolute;\n  top: -9999px;\n  left: -9999px;\n  visibility: visible;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-tooltip * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-tooltip-hidden {\n  display: none;\n}\n.rc-slider-tooltip-placement-top {\n  padding: 4px 0 8px 0;\n}\n.rc-slider-tooltip-inner {\n  min-width: 24px;\n  height: 24px;\n  padding: 6px 2px;\n  color: #fff;\n  font-size: 12px;\n  line-height: 1;\n  text-align: center;\n  text-decoration: none;\n  background-color: #6c6c6c;\n  border-radius: 6px;\n  box-shadow: 0 0 4px #d9d9d9;\n}\n.rc-slider-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {\n  bottom: 4px;\n  left: 50%;\n  margin-left: -4px;\n  border-width: 4px 4px 0;\n  border-top-color: #6c6c6c;\n}\n", ""]);

// exports


/***/ }),
/* 123 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 124 */
/***/ (function(module, exports) {

var containers = []; // will store container HTMLElement references
var styleElements = []; // will store {prepend: HTMLElement, append: HTMLElement}

var usage = 'insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).';

function insertCss(css, options) {
    options = options || {};

    if (css === undefined) {
        throw new Error(usage);
    }

    var position = options.prepend === true ? 'prepend' : 'append';
    var container = options.container !== undefined ? options.container : document.querySelector('head');
    var containerId = containers.indexOf(container);

    // first time we see this container, create the necessary entries
    if (containerId === -1) {
        containerId = containers.push(container) - 1;
        styleElements[containerId] = {};
    }

    // try to get the correponding container + position styleElement, create it otherwise
    var styleElement;

    if (styleElements[containerId] !== undefined && styleElements[containerId][position] !== undefined) {
        styleElement = styleElements[containerId][position];
    } else {
        styleElement = styleElements[containerId][position] = createStyleElement();

        if (position === 'prepend') {
            container.insertBefore(styleElement, container.childNodes[0]);
        } else {
            container.appendChild(styleElement);
        }
    }

    // strip potential UTF-8 BOM if css was read from a file
    if (css.charCodeAt(0) === 0xFEFF) { css = css.substr(1, css.length); }

    // actually add the stylesheet
    if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText += css
    } else {
        styleElement.textContent += css;
    }

    return styleElement;
};

function createStyleElement() {
    var styleElement = document.createElement('style');
    styleElement.setAttribute('type', 'text/css');
    return styleElement;
}

module.exports = insertCss;
module.exports.insertCss = insertCss;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(57);
  var loggedTypeFailures = {};
  var has = __webpack_require__(58);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(59);
var assign = __webpack_require__(125);

var ReactPropTypesSecret = __webpack_require__(57);
var has = __webpack_require__(58);
var checkPropTypes = __webpack_require__(126);

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(59);

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(127)(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread2__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_defineProperty__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_objectWithoutProperties__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rc_util_es_KeyCode__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__context__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util__ = __webpack_require__(13);




var _excluded = ["prefixCls", "value", "valueIndex", "onStartMove", "style", "render", "dragging", "onOffsetChange"];





var Handle = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__["forwardRef"](function (props, ref) {
  var _classNames, _getIndex;

  var prefixCls = props.prefixCls,
      value = props.value,
      valueIndex = props.valueIndex,
      onStartMove = props.onStartMove,
      style = props.style,
      render = props.render,
      dragging = props.dragging,
      onOffsetChange = props.onOffsetChange,
      restProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_objectWithoutProperties__["a" /* default */])(props, _excluded);

  var _React$useContext = __WEBPACK_IMPORTED_MODULE_4_react__["useContext"](__WEBPACK_IMPORTED_MODULE_7__context__["a" /* default */]),
      min = _React$useContext.min,
      max = _React$useContext.max,
      direction = _React$useContext.direction,
      disabled = _React$useContext.disabled,
      range = _React$useContext.range,
      tabIndex = _React$useContext.tabIndex,
      ariaLabelForHandle = _React$useContext.ariaLabelForHandle,
      ariaLabelledByForHandle = _React$useContext.ariaLabelledByForHandle,
      ariaValueTextFormatterForHandle = _React$useContext.ariaValueTextFormatterForHandle;

  var handlePrefixCls = "".concat(prefixCls, "-handle"); // ============================ Events ============================

  var onInternalStartMove = function onInternalStartMove(e) {
    if (!disabled) {
      onStartMove(e, valueIndex);
    }
  }; // =========================== Keyboard ===========================


  var onKeyDown = function onKeyDown(e) {
    if (!disabled) {
      var offset = null; // Change the value

      switch (e.which || e.keyCode) {
        case __WEBPACK_IMPORTED_MODULE_6_rc_util_es_KeyCode__["a" /* default */].LEFT:
          offset = direction === 'ltr' || direction === 'btt' ? -1 : 1;
          break;

        case __WEBPACK_IMPORTED_MODULE_6_rc_util_es_KeyCode__["a" /* default */].RIGHT:
          offset = direction === 'ltr' || direction === 'btt' ? 1 : -1;
          break;
        // Up is plus

        case __WEBPACK_IMPORTED_MODULE_6_rc_util_es_KeyCode__["a" /* default */].UP:
          offset = direction !== 'ttb' ? 1 : -1;
          break;
        // Down is minus

        case __WEBPACK_IMPORTED_MODULE_6_rc_util_es_KeyCode__["a" /* default */].DOWN:
          offset = direction !== 'ttb' ? -1 : 1;
          break;

        case __WEBPACK_IMPORTED_MODULE_6_rc_util_es_KeyCode__["a" /* default */].HOME:
          offset = 'min';
          break;

        case __WEBPACK_IMPORTED_MODULE_6_rc_util_es_KeyCode__["a" /* default */].END:
          offset = 'max';
          break;

        case __WEBPACK_IMPORTED_MODULE_6_rc_util_es_KeyCode__["a" /* default */].PAGE_UP:
          offset = 2;
          break;

        case __WEBPACK_IMPORTED_MODULE_6_rc_util_es_KeyCode__["a" /* default */].PAGE_DOWN:
          offset = -2;
          break;
      }

      if (offset !== null) {
        e.preventDefault();
        onOffsetChange(offset, valueIndex);
      }
    }
  }; // ============================ Offset ============================


  var positionStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__util__["a" /* getDirectionStyle */])(direction, value, min, max); // ============================ Render ============================

  var handleNode = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__["createElement"]("div", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref,
    className: __WEBPACK_IMPORTED_MODULE_5_classnames___default()(handlePrefixCls, (_classNames = {}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_defineProperty__["a" /* default */])(_classNames, "".concat(handlePrefixCls, "-").concat(valueIndex + 1), range), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_defineProperty__["a" /* default */])(_classNames, "".concat(handlePrefixCls, "-dragging"), dragging), _classNames)),
    style: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread2__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread2__["a" /* default */])({}, positionStyle), style),
    onMouseDown: onInternalStartMove,
    onTouchStart: onInternalStartMove,
    onKeyDown: onKeyDown,
    tabIndex: disabled ? null : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__util__["b" /* getIndex */])(tabIndex, valueIndex),
    role: "slider",
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuenow": value,
    "aria-disabled": disabled,
    "aria-label": __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__util__["b" /* getIndex */])(ariaLabelForHandle, valueIndex),
    "aria-labelledby": __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__util__["b" /* getIndex */])(ariaLabelledByForHandle, valueIndex),
    "aria-valuetext": (_getIndex = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__util__["b" /* getIndex */])(ariaValueTextFormatterForHandle, valueIndex)) === null || _getIndex === void 0 ? void 0 : _getIndex(value)
  }, restProps)); // Customize

  if (render) {
    handleNode = render(handleNode, {
      index: valueIndex,
      prefixCls: prefixCls,
      value: value,
      dragging: dragging
    });
  }

  return handleNode;
});

if (true) {
  Handle.displayName = 'Handle';
}

/* harmony default export */ __webpack_exports__["a"] = (Handle);

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutProperties__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Handle__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(13);


var _excluded = ["prefixCls", "style", "onStartMove", "onOffsetChange", "values", "handleRender", "draggingIndex"];



var Handles = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react__["forwardRef"](function (props, ref) {
  var prefixCls = props.prefixCls,
      style = props.style,
      onStartMove = props.onStartMove,
      onOffsetChange = props.onOffsetChange,
      values = props.values,
      handleRender = props.handleRender,
      draggingIndex = props.draggingIndex,
      restProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutProperties__["a" /* default */])(props, _excluded);

  var handlesRef = __WEBPACK_IMPORTED_MODULE_2_react__["useRef"]({});
  __WEBPACK_IMPORTED_MODULE_2_react__["useImperativeHandle"](ref, function () {
    return {
      focus: function focus(index) {
        var _handlesRef$current$i;

        (_handlesRef$current$i = handlesRef.current[index]) === null || _handlesRef$current$i === void 0 ? void 0 : _handlesRef$current$i.focus();
      }
    };
  });
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react__["Fragment"], null, values.map(function (value, index) {
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Handle__["a" /* default */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
      ref: function ref(node) {
        if (!node) {
          delete handlesRef.current[index];
        } else {
          handlesRef.current[index] = node;
        }
      },
      dragging: draggingIndex === index,
      prefixCls: prefixCls,
      style: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util__["b" /* getIndex */])(style, index),
      key: index,
      value: value,
      valueIndex: index,
      onStartMove: onStartMove,
      onOffsetChange: onOffsetChange,
      render: handleRender
    }, restProps));
  }));
});

if (true) {
  Handles.displayName = 'Handles';
}

/* harmony default export */ __webpack_exports__["a"] = (Handles);

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Mark;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectSpread2__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_defineProperty__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__context__ = __webpack_require__(8);






function Mark(props) {
  var prefixCls = props.prefixCls,
      style = props.style,
      children = props.children,
      value = props.value,
      _onClick = props.onClick;

  var _React$useContext = __WEBPACK_IMPORTED_MODULE_2_react__["useContext"](__WEBPACK_IMPORTED_MODULE_5__context__["a" /* default */]),
      min = _React$useContext.min,
      max = _React$useContext.max,
      direction = _React$useContext.direction,
      includedStart = _React$useContext.includedStart,
      includedEnd = _React$useContext.includedEnd,
      included = _React$useContext.included;

  var textCls = "".concat(prefixCls, "-text"); // ============================ Offset ============================

  var positionStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util__["a" /* getDirectionStyle */])(direction, value, min, max);
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("span", {
    className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(textCls, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_defineProperty__["a" /* default */])({}, "".concat(textCls, "-active"), included && includedStart <= value && value <= includedEnd)),
    style: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectSpread2__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectSpread2__["a" /* default */])({}, positionStyle), style),
    onMouseDown: function onMouseDown(e) {
      e.stopPropagation();
    },
    onClick: function onClick() {
      _onClick(value);
    }
  }, children);
}

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Marks;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Mark__ = __webpack_require__(131);


function Marks(props) {
  var prefixCls = props.prefixCls,
      marks = props.marks,
      onClick = props.onClick;
  var markPrefixCls = "".concat(prefixCls, "-mark"); // Not render mark if empty

  if (!marks.length) {
    return null;
  }

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", {
    className: markPrefixCls
  }, marks.map(function (_ref) {
    var value = _ref.value,
        style = _ref.style,
        label = _ref.label;
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__Mark__["a" /* default */], {
      key: value,
      prefixCls: markPrefixCls,
      style: style,
      value: value,
      onClick: onClick
    }, label);
  }));
}

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_defineProperty__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_toConsumableArray__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_slicedToArray__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_typeof__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_shallowequal__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_shallowequal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_shallowequal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rc_util_es_hooks_useMergedState__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Handles__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__hooks_useDrag__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__context__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Tracks__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Marks__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Steps__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__hooks_useOffset__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rc_util_es_warning__ = __webpack_require__(147);
















var Slider = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__["forwardRef"](function (props, ref) {
  var _classNames;

  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-slider' : _props$prefixCls,
      className = props.className,
      style = props.style,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      autoFocus = props.autoFocus,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      _props$min = props.min,
      min = _props$min === void 0 ? 0 : _props$min,
      _props$max = props.max,
      max = _props$max === void 0 ? 100 : _props$max,
      _props$step = props.step,
      step = _props$step === void 0 ? 1 : _props$step,
      value = props.value,
      defaultValue = props.defaultValue,
      range = props.range,
      count = props.count,
      onChange = props.onChange,
      onBeforeChange = props.onBeforeChange,
      onAfterChange = props.onAfterChange,
      _props$allowCross = props.allowCross,
      allowCross = _props$allowCross === void 0 ? true : _props$allowCross,
      _props$pushable = props.pushable,
      pushable = _props$pushable === void 0 ? false : _props$pushable,
      draggableTrack = props.draggableTrack,
      reverse = props.reverse,
      vertical = props.vertical,
      _props$included = props.included,
      included = _props$included === void 0 ? true : _props$included,
      startPoint = props.startPoint,
      trackStyle = props.trackStyle,
      handleStyle = props.handleStyle,
      railStyle = props.railStyle,
      dotStyle = props.dotStyle,
      activeDotStyle = props.activeDotStyle,
      marks = props.marks,
      dots = props.dots,
      handleRender = props.handleRender,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
      ariaLabelForHandle = props.ariaLabelForHandle,
      ariaLabelledByForHandle = props.ariaLabelledByForHandle,
      ariaValueTextFormatterForHandle = props.ariaValueTextFormatterForHandle;
  var handlesRef = __WEBPACK_IMPORTED_MODULE_4_react__["useRef"]();
  var containerRef = __WEBPACK_IMPORTED_MODULE_4_react__["useRef"]();
  var direction = __WEBPACK_IMPORTED_MODULE_4_react__["useMemo"](function () {
    if (vertical) {
      return reverse ? 'ttb' : 'btt';
    }

    return reverse ? 'rtl' : 'ltr';
  }, [reverse, vertical]); // ============================ Range =============================

  var mergedMin = __WEBPACK_IMPORTED_MODULE_4_react__["useMemo"](function () {
    return isFinite(min) ? min : 0;
  }, [min]);
  var mergedMax = __WEBPACK_IMPORTED_MODULE_4_react__["useMemo"](function () {
    return isFinite(max) ? max : 100;
  }, [max]); // ============================= Step =============================

  var mergedStep = __WEBPACK_IMPORTED_MODULE_4_react__["useMemo"](function () {
    return step !== null && step <= 0 ? 1 : step;
  }, [step]); // ============================= Push =============================

  var mergedPush = __WEBPACK_IMPORTED_MODULE_4_react__["useMemo"](function () {
    if (pushable === true) {
      return mergedStep;
    }

    return pushable >= 0 ? pushable : false;
  }, [pushable, mergedStep]); // ============================ Marks =============================

  var markList = __WEBPACK_IMPORTED_MODULE_4_react__["useMemo"](function () {
    var keys = Object.keys(marks || {});
    return keys.map(function (key) {
      var mark = marks[key];
      var markObj = {
        value: Number(key)
      };

      if (mark && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_typeof__["a" /* default */])(mark) === 'object' && ! /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__["isValidElement"](mark) && ('label' in mark || 'style' in mark)) {
        markObj.style = mark.style;
        markObj.label = mark.label;
      } else {
        markObj.label = mark;
      }

      return markObj;
    }).filter(function (_ref) {
      var label = _ref.label;
      return label || typeof label === 'number';
    }).sort(function (a, b) {
      return a.value - b.value;
    });
  }, [marks]); // ============================ Format ============================

  var _useOffset = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__hooks_useOffset__["a" /* default */])(mergedMin, mergedMax, mergedStep, markList, allowCross, mergedPush),
      _useOffset2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_slicedToArray__["a" /* default */])(_useOffset, 2),
      formatValue = _useOffset2[0],
      offsetValues = _useOffset2[1]; // ============================ Values ============================


  var _useMergedState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_rc_util_es_hooks_useMergedState__["a" /* default */])(defaultValue, {
    value: value
  }),
      _useMergedState2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_slicedToArray__["a" /* default */])(_useMergedState, 2),
      mergedValue = _useMergedState2[0],
      setValue = _useMergedState2[1];

  var rawValues = __WEBPACK_IMPORTED_MODULE_4_react__["useMemo"](function () {
    var valueList = mergedValue === null || mergedValue === undefined ? [] : Array.isArray(mergedValue) ? mergedValue : [mergedValue];

    var _valueList = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_slicedToArray__["a" /* default */])(valueList, 1),
        _valueList$ = _valueList[0],
        val0 = _valueList$ === void 0 ? mergedMin : _valueList$;

    var returnValues = mergedValue === null ? [] : [val0]; // Format as range

    if (range) {
      returnValues = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_toConsumableArray__["a" /* default */])(valueList); // When count provided or value is `undefined`, we fill values

      if (count || mergedValue === undefined) {
        var pointCount = count >= 0 ? count + 1 : 2;
        returnValues = returnValues.slice(0, pointCount); // Fill with count

        while (returnValues.length < pointCount) {
          var _returnValues;

          returnValues.push((_returnValues = returnValues[returnValues.length - 1]) !== null && _returnValues !== void 0 ? _returnValues : mergedMin);
        }
      }

      returnValues.sort(function (a, b) {
        return a - b;
      });
    } // Align in range


    returnValues.forEach(function (val, index) {
      returnValues[index] = formatValue(val);
    });
    return returnValues;
  }, [mergedValue, range, mergedMin, count, formatValue]); // =========================== onChange ===========================

  var rawValuesRef = __WEBPACK_IMPORTED_MODULE_4_react__["useRef"](rawValues);
  rawValuesRef.current = rawValues;

  var getTriggerValue = function getTriggerValue(triggerValues) {
    return range ? triggerValues : triggerValues[0];
  };

  var triggerChange = function triggerChange(nextValues) {
    // Order first
    var cloneNextValues = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_toConsumableArray__["a" /* default */])(nextValues).sort(function (a, b) {
      return a - b;
    }); // Trigger event if needed


    if (onChange && !__WEBPACK_IMPORTED_MODULE_6_shallowequal___default()(cloneNextValues, rawValuesRef.current)) {
      onChange(getTriggerValue(cloneNextValues));
    } // We set this later since it will re-render component immediately


    setValue(cloneNextValues);
  };

  var changeToCloseValue = function changeToCloseValue(newValue) {
    if (!disabled) {
      var valueIndex = 0;
      var valueDist = mergedMax - mergedMin;
      rawValues.forEach(function (val, index) {
        var dist = Math.abs(newValue - val);

        if (dist <= valueDist) {
          valueDist = dist;
          valueIndex = index;
        }
      }); // Create new values

      var cloneNextValues = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_toConsumableArray__["a" /* default */])(rawValues);

      cloneNextValues[valueIndex] = newValue; // Fill value to match default 2

      if (range && !rawValues.length && count === undefined) {
        cloneNextValues.push(newValue);
      }

      onBeforeChange === null || onBeforeChange === void 0 ? void 0 : onBeforeChange(getTriggerValue(cloneNextValues));
      triggerChange(cloneNextValues);
      onAfterChange === null || onAfterChange === void 0 ? void 0 : onAfterChange(getTriggerValue(cloneNextValues));
    }
  }; // ============================ Click =============================


  var onSliderMouseDown = function onSliderMouseDown(e) {
    e.preventDefault();

    var _containerRef$current = containerRef.current.getBoundingClientRect(),
        width = _containerRef$current.width,
        height = _containerRef$current.height,
        left = _containerRef$current.left,
        top = _containerRef$current.top,
        bottom = _containerRef$current.bottom,
        right = _containerRef$current.right;

    var clientX = e.clientX,
        clientY = e.clientY;
    var percent;

    switch (direction) {
      case 'btt':
        percent = (bottom - clientY) / height;
        break;

      case 'ttb':
        percent = (clientY - top) / height;
        break;

      case 'rtl':
        percent = (right - clientX) / width;
        break;

      default:
        percent = (clientX - left) / width;
    }

    var nextValue = mergedMin + percent * (mergedMax - mergedMin);
    changeToCloseValue(formatValue(nextValue));
  }; // =========================== Keyboard ===========================


  var _React$useState = __WEBPACK_IMPORTED_MODULE_4_react__["useState"](null),
      _React$useState2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_slicedToArray__["a" /* default */])(_React$useState, 2),
      keyboardValue = _React$useState2[0],
      setKeyboardValue = _React$useState2[1];

  var onHandleOffsetChange = function onHandleOffsetChange(offset, valueIndex) {
    if (!disabled) {
      var next = offsetValues(rawValues, offset, valueIndex);
      onBeforeChange === null || onBeforeChange === void 0 ? void 0 : onBeforeChange(getTriggerValue(rawValues));
      triggerChange(next.values);
      onAfterChange === null || onAfterChange === void 0 ? void 0 : onAfterChange(getTriggerValue(next.values));
      setKeyboardValue(next.value);
    }
  };

  __WEBPACK_IMPORTED_MODULE_4_react__["useEffect"](function () {
    if (keyboardValue !== null) {
      var valueIndex = rawValues.indexOf(keyboardValue);

      if (valueIndex >= 0) {
        handlesRef.current.focus(valueIndex);
      }
    }

    setKeyboardValue(null);
  }, [keyboardValue]); // ============================= Drag =============================

  var mergedDraggableTrack = __WEBPACK_IMPORTED_MODULE_4_react__["useMemo"](function () {
    if (draggableTrack && mergedStep === null) {
      if (true) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15_rc_util_es_warning__["a" /* default */])(false, '`draggableTrack` is not supported when `step` is `null`.');
      }

      return false;
    }

    return draggableTrack;
  }, [draggableTrack, mergedStep]);

  var finishChange = function finishChange() {
    onAfterChange === null || onAfterChange === void 0 ? void 0 : onAfterChange(getTriggerValue(rawValuesRef.current));
  };

  var _useDrag = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__hooks_useDrag__["a" /* default */])(containerRef, direction, rawValues, mergedMin, mergedMax, formatValue, triggerChange, finishChange, offsetValues),
      _useDrag2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_slicedToArray__["a" /* default */])(_useDrag, 4),
      draggingIndex = _useDrag2[0],
      draggingValue = _useDrag2[1],
      cacheValues = _useDrag2[2],
      onStartDrag = _useDrag2[3];

  var onStartMove = function onStartMove(e, valueIndex) {
    onStartDrag(e, valueIndex);
    onBeforeChange === null || onBeforeChange === void 0 ? void 0 : onBeforeChange(getTriggerValue(rawValuesRef.current));
  }; // Auto focus for updated handle


  var dragging = draggingIndex !== -1;
  __WEBPACK_IMPORTED_MODULE_4_react__["useEffect"](function () {
    if (!dragging) {
      var valueIndex = rawValues.lastIndexOf(draggingValue);
      handlesRef.current.focus(valueIndex);
    }
  }, [dragging]); // =========================== Included ===========================

  var sortedCacheValues = __WEBPACK_IMPORTED_MODULE_4_react__["useMemo"](function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_toConsumableArray__["a" /* default */])(cacheValues).sort(function (a, b) {
      return a - b;
    });
  }, [cacheValues]); // Provide a range values with included [min, max]
  // Used for Track, Mark & Dot

  var _React$useMemo = __WEBPACK_IMPORTED_MODULE_4_react__["useMemo"](function () {
    if (!range) {
      return [mergedMin, sortedCacheValues[0]];
    }

    return [sortedCacheValues[0], sortedCacheValues[sortedCacheValues.length - 1]];
  }, [sortedCacheValues, range, mergedMin]),
      _React$useMemo2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_slicedToArray__["a" /* default */])(_React$useMemo, 2),
      includedStart = _React$useMemo2[0],
      includedEnd = _React$useMemo2[1]; // ============================= Refs =============================


  __WEBPACK_IMPORTED_MODULE_4_react__["useImperativeHandle"](ref, function () {
    return {
      focus: function focus() {
        handlesRef.current.focus(0);
      },
      blur: function blur() {
        var _document = document,
            activeElement = _document.activeElement;

        if (containerRef.current.contains(activeElement)) {
          activeElement === null || activeElement === void 0 ? void 0 : activeElement.blur();
        }
      }
    };
  }); // ========================== Auto Focus ==========================

  __WEBPACK_IMPORTED_MODULE_4_react__["useEffect"](function () {
    if (autoFocus) {
      handlesRef.current.focus(0);
    }
  }, []); // =========================== Context ============================

  var context = __WEBPACK_IMPORTED_MODULE_4_react__["useMemo"](function () {
    return {
      min: mergedMin,
      max: mergedMax,
      direction: direction,
      disabled: disabled,
      step: mergedStep,
      included: included,
      includedStart: includedStart,
      includedEnd: includedEnd,
      range: range,
      tabIndex: tabIndex,
      ariaLabelForHandle: ariaLabelForHandle,
      ariaLabelledByForHandle: ariaLabelledByForHandle,
      ariaValueTextFormatterForHandle: ariaValueTextFormatterForHandle
    };
  }, [mergedMin, mergedMax, direction, disabled, mergedStep, included, includedStart, includedEnd, range, tabIndex, ariaLabelForHandle, ariaLabelledByForHandle, ariaValueTextFormatterForHandle]); // ============================ Render ============================

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10__context__["a" /* default */].Provider, {
    value: context
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__["createElement"]("div", {
    ref: containerRef,
    className: __WEBPACK_IMPORTED_MODULE_5_classnames___default()(prefixCls, className, (_classNames = {}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_defineProperty__["a" /* default */])(_classNames, "".concat(prefixCls, "-disabled"), disabled), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_defineProperty__["a" /* default */])(_classNames, "".concat(prefixCls, "-vertical"), vertical), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_defineProperty__["a" /* default */])(_classNames, "".concat(prefixCls, "-horizontal"), !vertical), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_defineProperty__["a" /* default */])(_classNames, "".concat(prefixCls, "-with-marks"), markList.length), _classNames)),
    style: style,
    onMouseDown: onSliderMouseDown
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__["createElement"]("div", {
    className: "".concat(prefixCls, "-rail"),
    style: railStyle
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__["createElement"](__WEBPACK_IMPORTED_MODULE_11__Tracks__["a" /* default */], {
    prefixCls: prefixCls,
    style: trackStyle,
    values: sortedCacheValues,
    startPoint: startPoint,
    onStartMove: mergedDraggableTrack ? onStartMove : null
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__["createElement"](__WEBPACK_IMPORTED_MODULE_13__Steps__["a" /* default */], {
    prefixCls: prefixCls,
    marks: markList,
    dots: dots,
    style: dotStyle,
    activeStyle: activeDotStyle
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__Handles__["a" /* default */], {
    ref: handlesRef,
    prefixCls: prefixCls,
    style: handleStyle,
    values: cacheValues,
    draggingIndex: draggingIndex,
    onStartMove: onStartMove,
    onOffsetChange: onHandleOffsetChange,
    onFocus: onFocus,
    onBlur: onBlur,
    handleRender: handleRender
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12__Marks__["a" /* default */], {
    prefixCls: prefixCls,
    marks: markList,
    onClick: changeToCloseValue
  })));
});

if (true) {
  Slider.displayName = 'Slider';
}

/* harmony default export */ __webpack_exports__["a"] = (Slider);

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Dot;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_defineProperty__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread2__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__context__ = __webpack_require__(8);






function Dot(props) {
  var prefixCls = props.prefixCls,
      value = props.value,
      style = props.style,
      activeStyle = props.activeStyle;

  var _React$useContext = __WEBPACK_IMPORTED_MODULE_2_react__["useContext"](__WEBPACK_IMPORTED_MODULE_5__context__["a" /* default */]),
      min = _React$useContext.min,
      max = _React$useContext.max,
      direction = _React$useContext.direction,
      included = _React$useContext.included,
      includedStart = _React$useContext.includedStart,
      includedEnd = _React$useContext.includedEnd;

  var dotClassName = "".concat(prefixCls, "-dot");
  var active = included && includedStart <= value && value <= includedEnd; // ============================ Offset ============================

  var mergedStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread2__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread2__["a" /* default */])({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util__["a" /* getDirectionStyle */])(direction, value, min, max)), typeof style === 'function' ? style(value) : style);

  if (active) {
    mergedStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread2__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread2__["a" /* default */])({}, mergedStyle), typeof activeStyle === 'function' ? activeStyle(value) : activeStyle);
  }

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("span", {
    className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(dotClassName, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_defineProperty__["a" /* default */])({}, "".concat(dotClassName, "-active"), active)),
    style: mergedStyle
  });
}

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Steps;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__context__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Dot__ = __webpack_require__(134);



function Steps(props) {
  var prefixCls = props.prefixCls,
      marks = props.marks,
      dots = props.dots,
      style = props.style,
      activeStyle = props.activeStyle;

  var _React$useContext = __WEBPACK_IMPORTED_MODULE_0_react__["useContext"](__WEBPACK_IMPORTED_MODULE_1__context__["a" /* default */]),
      min = _React$useContext.min,
      max = _React$useContext.max,
      step = _React$useContext.step;

  var stepDots = __WEBPACK_IMPORTED_MODULE_0_react__["useMemo"](function () {
    var dotSet = new Set(); // Add marks

    marks.forEach(function (mark) {
      dotSet.add(mark.value);
    }); // Fill dots

    if (dots && step !== null) {
      var current = min;

      while (current <= max) {
        dotSet.add(current);
        current += step;
      }
    }

    return Array.from(dotSet);
  }, [min, max, step, dots, marks]);
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", {
    className: "".concat(prefixCls, "-step")
  }, stepDots.map(function (dotValue) {
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__Dot__["a" /* default */], {
      prefixCls: prefixCls,
      key: dotValue,
      value: dotValue,
      style: style,
      activeStyle: activeStyle
    });
  }));
}

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Track;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectSpread2__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__context__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(13);





function Track(props) {
  var prefixCls = props.prefixCls,
      style = props.style,
      start = props.start,
      end = props.end,
      index = props.index,
      onStartMove = props.onStartMove;

  var _React$useContext = __WEBPACK_IMPORTED_MODULE_1_react__["useContext"](__WEBPACK_IMPORTED_MODULE_3__context__["a" /* default */]),
      direction = _React$useContext.direction,
      min = _React$useContext.min,
      max = _React$useContext.max,
      disabled = _React$useContext.disabled,
      range = _React$useContext.range;

  var trackPrefixCls = "".concat(prefixCls, "-track");
  var offsetStart = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util__["c" /* getOffset */])(start, min, max);
  var offsetEnd = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util__["c" /* getOffset */])(end, min, max); // ============================ Events ============================

  var onInternalStartMove = function onInternalStartMove(e) {
    if (!disabled && onStartMove) {
      onStartMove(e, -1);
    }
  }; // ============================ Render ============================


  var positionStyle = {};

  switch (direction) {
    case 'rtl':
      positionStyle.right = "".concat(offsetStart * 100, "%");
      positionStyle.width = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
      break;

    case 'btt':
      positionStyle.bottom = "".concat(offsetStart * 100, "%");
      positionStyle.height = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
      break;

    case 'ttb':
      positionStyle.top = "".concat(offsetStart * 100, "%");
      positionStyle.height = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
      break;

    default:
      positionStyle.left = "".concat(offsetStart * 100, "%");
      positionStyle.width = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
  }

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(trackPrefixCls, range && "".concat(trackPrefixCls, "-").concat(index + 1)),
    style: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectSpread2__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectSpread2__["a" /* default */])({}, positionStyle), style),
    onMouseDown: onInternalStartMove,
    onTouchStart: onInternalStartMove
  });
}

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Tracks;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__context__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Track__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(13);




function Tracks(props) {
  var prefixCls = props.prefixCls,
      style = props.style,
      values = props.values,
      startPoint = props.startPoint,
      onStartMove = props.onStartMove;

  var _React$useContext = __WEBPACK_IMPORTED_MODULE_0_react__["useContext"](__WEBPACK_IMPORTED_MODULE_1__context__["a" /* default */]),
      included = _React$useContext.included,
      range = _React$useContext.range,
      min = _React$useContext.min;

  var trackList = __WEBPACK_IMPORTED_MODULE_0_react__["useMemo"](function () {
    if (!range) {
      // null value do not have track
      if (values.length === 0) {
        return [];
      }

      var startValue = startPoint !== null && startPoint !== void 0 ? startPoint : min;
      var endValue = values[0];
      return [{
        start: Math.min(startValue, endValue),
        end: Math.max(startValue, endValue)
      }];
    } // Multiple


    var list = [];

    for (var i = 0; i < values.length - 1; i += 1) {
      list.push({
        start: values[i],
        end: values[i + 1]
      });
    }

    return list;
  }, [values, range, startPoint, min]);
  return included ? trackList.map(function (_ref, index) {
    var start = _ref.start,
        end = _ref.end;
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__Track__["a" /* default */], {
      index: index,
      prefixCls: prefixCls,
      style: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* getIndex */])(style, index),
      start: start,
      end: end,
      key: index,
      onStartMove: onStartMove
    });
  }) : null;
}

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = useDrag;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_toConsumableArray__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);




function getPosition(e) {
  var obj = 'touches' in e ? e.touches[0] : e;
  return {
    pageX: obj.pageX,
    pageY: obj.pageY
  };
}

function useDrag(containerRef, direction, rawValues, min, max, formatValue, triggerChange, finishChange, offsetValues) {
  var _React$useState = __WEBPACK_IMPORTED_MODULE_2_react__["useState"](null),
      _React$useState2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__["a" /* default */])(_React$useState, 2),
      draggingValue = _React$useState2[0],
      setDraggingValue = _React$useState2[1];

  var _React$useState3 = __WEBPACK_IMPORTED_MODULE_2_react__["useState"](-1),
      _React$useState4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__["a" /* default */])(_React$useState3, 2),
      draggingIndex = _React$useState4[0],
      setDraggingIndex = _React$useState4[1];

  var _React$useState5 = __WEBPACK_IMPORTED_MODULE_2_react__["useState"](rawValues),
      _React$useState6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__["a" /* default */])(_React$useState5, 2),
      cacheValues = _React$useState6[0],
      setCacheValues = _React$useState6[1];

  var _React$useState7 = __WEBPACK_IMPORTED_MODULE_2_react__["useState"](rawValues),
      _React$useState8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__["a" /* default */])(_React$useState7, 2),
      originValues = _React$useState8[0],
      setOriginValues = _React$useState8[1];

  var mouseMoveEventRef = __WEBPACK_IMPORTED_MODULE_2_react__["useRef"](null);
  var mouseUpEventRef = __WEBPACK_IMPORTED_MODULE_2_react__["useRef"](null);
  __WEBPACK_IMPORTED_MODULE_2_react__["useEffect"](function () {
    if (draggingIndex === -1) {
      setCacheValues(rawValues);
    }
  }, [rawValues, draggingIndex]); // Clean up event

  __WEBPACK_IMPORTED_MODULE_2_react__["useEffect"](function () {
    return function () {
      document.removeEventListener('mousemove', mouseMoveEventRef.current);
      document.removeEventListener('mouseup', mouseUpEventRef.current);
      document.removeEventListener('touchmove', mouseMoveEventRef.current);
      document.removeEventListener('touchend', mouseUpEventRef.current);
    };
  }, []);

  var flushValues = function flushValues(nextValues, nextValue) {
    // Perf: Only update state when value changed
    if (cacheValues.some(function (val, i) {
      return val !== nextValues[i];
    })) {
      if (nextValue !== undefined) {
        setDraggingValue(nextValue);
      }

      setCacheValues(nextValues);
      triggerChange(nextValues);
    }
  };

  var updateCacheValue = function updateCacheValue(valueIndex, offsetPercent) {
    // Basic point offset
    if (valueIndex === -1) {
      // >>>> Dragging on the track
      var startValue = originValues[0];
      var endValue = originValues[originValues.length - 1];
      var maxStartOffset = min - startValue;
      var maxEndOffset = max - endValue; // Get valid offset

      var offset = offsetPercent * (max - min);
      offset = Math.max(offset, maxStartOffset);
      offset = Math.min(offset, maxEndOffset); // Use first value to revert back of valid offset (like steps marks)

      var formatStartValue = formatValue(startValue + offset);
      offset = formatStartValue - startValue;
      var cloneCacheValues = originValues.map(function (val) {
        return val + offset;
      });
      flushValues(cloneCacheValues);
    } else {
      // >>>> Dragging on the handle
      var offsetDist = (max - min) * offsetPercent; // Always start with the valueIndex origin value

      var cloneValues = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_toConsumableArray__["a" /* default */])(cacheValues);

      cloneValues[valueIndex] = originValues[valueIndex];
      var next = offsetValues(cloneValues, offsetDist, valueIndex, 'dist');
      flushValues(next.values, next.value);
    }
  }; // Resolve closure


  var updateCacheValueRef = __WEBPACK_IMPORTED_MODULE_2_react__["useRef"](updateCacheValue);
  updateCacheValueRef.current = updateCacheValue;

  var onStartMove = function onStartMove(e, valueIndex) {
    e.stopPropagation();
    var originValue = rawValues[valueIndex];
    setDraggingIndex(valueIndex);
    setDraggingValue(originValue);
    setOriginValues(rawValues);

    var _getPosition = getPosition(e),
        startX = _getPosition.pageX,
        startY = _getPosition.pageY; // Moving


    var onMouseMove = function onMouseMove(event) {
      event.preventDefault();

      var _getPosition2 = getPosition(event),
          moveX = _getPosition2.pageX,
          moveY = _getPosition2.pageY;

      var offsetX = moveX - startX;
      var offsetY = moveY - startY;

      var _containerRef$current = containerRef.current.getBoundingClientRect(),
          width = _containerRef$current.width,
          height = _containerRef$current.height;

      var offSetPercent;

      switch (direction) {
        case 'btt':
          offSetPercent = -offsetY / height;
          break;

        case 'ttb':
          offSetPercent = offsetY / height;
          break;

        case 'rtl':
          offSetPercent = -offsetX / width;
          break;

        default:
          offSetPercent = offsetX / width;
      }

      updateCacheValueRef.current(valueIndex, offSetPercent);
    }; // End


    var onMouseUp = function onMouseUp(event) {
      event.preventDefault();
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('touchend', onMouseUp);
      document.removeEventListener('touchmove', onMouseMove);
      mouseMoveEventRef.current = null;
      mouseUpEventRef.current = null;
      setDraggingIndex(-1);
      finishChange();
    };

    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchend', onMouseUp);
    document.addEventListener('touchmove', onMouseMove);
    mouseMoveEventRef.current = onMouseMove;
    mouseUpEventRef.current = onMouseUp;
  }; // Only return cache value when it mapping with rawValues


  var returnValues = __WEBPACK_IMPORTED_MODULE_2_react__["useMemo"](function () {
    var sourceValues = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_toConsumableArray__["a" /* default */])(rawValues).sort(function (a, b) {
      return a - b;
    });

    var targetValues = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_toConsumableArray__["a" /* default */])(cacheValues).sort(function (a, b) {
      return a - b;
    });

    return sourceValues.every(function (val, index) {
      return val === targetValues[index];
    }) ? cacheValues : rawValues;
  }, [rawValues, cacheValues]);
  return [draggingIndex, draggingValue, returnValues, onStartMove];
}

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = useOffset;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_toConsumableArray__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);


function useOffset(min, max, step, markList, allowCross, pushable) {
  var formatRangeValue = __WEBPACK_IMPORTED_MODULE_1_react__["useCallback"](function (val) {
    var formatNextValue = isFinite(val) ? val : min;
    formatNextValue = Math.min(max, val);
    formatNextValue = Math.max(min, formatNextValue);
    return formatNextValue;
  }, [min, max]);
  var formatStepValue = __WEBPACK_IMPORTED_MODULE_1_react__["useCallback"](function (val) {
    if (step !== null) {
      var stepValue = min + Math.round((formatRangeValue(val) - min) / step) * step; // Cut number in case to be like 0.30000000000000004

      var getDecimal = function getDecimal(num) {
        return (String(num).split('.')[1] || '').length;
      };

      var maxDecimal = Math.max(getDecimal(step), getDecimal(max), getDecimal(min));
      var fixedValue = Number(stepValue.toFixed(maxDecimal));
      return min <= fixedValue && fixedValue <= max ? fixedValue : null;
    }

    return null;
  }, [step, min, max, formatRangeValue]);
  var formatValue = __WEBPACK_IMPORTED_MODULE_1_react__["useCallback"](function (val) {
    var formatNextValue = formatRangeValue(val); // List align values

    var alignValues = markList.map(function (mark) {
      return mark.value;
    });

    if (step !== null) {
      alignValues.push(formatStepValue(val));
    } // min & max


    alignValues.push(min, max); // Align with marks

    var closeValue = alignValues[0];
    var closeDist = max - min;
    alignValues.forEach(function (alignValue) {
      var dist = Math.abs(formatNextValue - alignValue);

      if (dist <= closeDist) {
        closeValue = alignValue;
        closeDist = dist;
      }
    });
    return closeValue;
  }, [min, max, markList, step, formatRangeValue, formatStepValue]); // ========================== Offset ==========================
  // Single Value

  var offsetValue = function offsetValue(values, offset, valueIndex) {
    var mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'unit';

    if (typeof offset === 'number') {
      var nextValue;
      var originValue = values[valueIndex]; // Only used for `dist` mode

      var targetDistValue = originValue + offset; // Compare next step value & mark value which is best match

      var potentialValues = [];
      markList.forEach(function (mark) {
        potentialValues.push(mark.value);
      }); // Min & Max

      potentialValues.push(min, max); // In case origin value is align with mark but not with step

      potentialValues.push(formatStepValue(originValue)); // Put offset step value also

      var sign = offset > 0 ? 1 : -1;

      if (mode === 'unit') {
        potentialValues.push(formatStepValue(originValue + sign * step));
      } else {
        potentialValues.push(formatStepValue(targetDistValue));
      } // Find close one


      potentialValues = potentialValues.filter(function (val) {
        return val !== null;
      }) // Remove reverse value
      .filter(function (val) {
        return offset < 0 ? val <= originValue : val >= originValue;
      });

      if (mode === 'unit') {
        // `unit` mode can not contain itself
        potentialValues = potentialValues.filter(function (val) {
          return val !== originValue;
        });
      }

      var compareValue = mode === 'unit' ? originValue : targetDistValue;
      nextValue = potentialValues[0];
      var valueDist = Math.abs(nextValue - compareValue);
      potentialValues.forEach(function (potentialValue) {
        var dist = Math.abs(potentialValue - compareValue);

        if (dist < valueDist) {
          nextValue = potentialValue;
          valueDist = dist;
        }
      }); // Out of range will back to range

      if (nextValue === undefined) {
        return offset < 0 ? min : max;
      } // `dist` mode


      if (mode === 'dist') {
        return nextValue;
      } // `unit` mode may need another round


      if (Math.abs(offset) > 1) {
        var cloneValues = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_toConsumableArray__["a" /* default */])(values);

        cloneValues[valueIndex] = nextValue;
        return offsetValue(cloneValues, offset - sign, valueIndex, mode);
      }

      return nextValue;
    } else if (offset === 'min') {
      return min;
    } else if (offset === 'max') {
      return max;
    }
  };
  /** Same as `offsetValue` but return `changed` mark to tell value changed */


  var offsetChangedValue = function offsetChangedValue(values, offset, valueIndex) {
    var mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'unit';
    var originValue = values[valueIndex];
    var nextValue = offsetValue(values, offset, valueIndex, mode);
    return {
      value: nextValue,
      changed: nextValue !== originValue
    };
  };

  var needPush = function needPush(dist) {
    return pushable === null && dist === 0 || typeof pushable === 'number' && dist < pushable;
  }; // Values


  var offsetValues = function offsetValues(values, offset, valueIndex) {
    var mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'unit';
    var nextValues = values.map(formatValue);
    var originValue = nextValues[valueIndex];
    var nextValue = offsetValue(nextValues, offset, valueIndex, mode);
    nextValues[valueIndex] = nextValue;

    if (allowCross === false) {
      // >>>>> Allow Cross
      var pushNum = pushable || 0; // ============ AllowCross ===============

      if (valueIndex > 0 && nextValues[valueIndex - 1] !== originValue) {
        nextValues[valueIndex] = Math.max(nextValues[valueIndex], nextValues[valueIndex - 1] + pushNum);
      }

      if (valueIndex < nextValues.length - 1 && nextValues[valueIndex + 1] !== originValue) {
        nextValues[valueIndex] = Math.min(nextValues[valueIndex], nextValues[valueIndex + 1] - pushNum);
      }
    } else if (typeof pushable === 'number' || pushable === null) {
      // >>>>> Pushable
      // =============== Push ==================
      // >>>>>> Basic push
      // End values
      for (var i = valueIndex + 1; i < nextValues.length; i += 1) {
        var changed = true;

        while (needPush(nextValues[i] - nextValues[i - 1]) && changed) {
          var _offsetChangedValue = offsetChangedValue(nextValues, 1, i);

          nextValues[i] = _offsetChangedValue.value;
          changed = _offsetChangedValue.changed;
        }
      } // Start values


      for (var _i = valueIndex; _i > 0; _i -= 1) {
        var _changed = true;

        while (needPush(nextValues[_i] - nextValues[_i - 1]) && _changed) {
          var _offsetChangedValue2 = offsetChangedValue(nextValues, -1, _i - 1);

          nextValues[_i - 1] = _offsetChangedValue2.value;
          _changed = _offsetChangedValue2.changed;
        }
      } // >>>>> Revert back to safe push range
      // End to Start


      for (var _i2 = nextValues.length - 1; _i2 > 0; _i2 -= 1) {
        var _changed2 = true;

        while (needPush(nextValues[_i2] - nextValues[_i2 - 1]) && _changed2) {
          var _offsetChangedValue3 = offsetChangedValue(nextValues, -1, _i2 - 1);

          nextValues[_i2 - 1] = _offsetChangedValue3.value;
          _changed2 = _offsetChangedValue3.changed;
        }
      } // Start to End


      for (var _i3 = 0; _i3 < nextValues.length - 1; _i3 += 1) {
        var _changed3 = true;

        while (needPush(nextValues[_i3 + 1] - nextValues[_i3]) && _changed3) {
          var _offsetChangedValue4 = offsetChangedValue(nextValues, 1, _i3 + 1);

          nextValues[_i3 + 1] = _offsetChangedValue4.value;
          _changed3 = _offsetChangedValue4.changed;
        }
      }
    }

    return {
      value: nextValues[valueIndex],
      values: nextValues
    };
  };

  return [formatValue, offsetValues];
}

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Slider__ = __webpack_require__(133);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__Slider__["a" /* default */]);

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = canUseDom;
function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */
var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,

  /**
   * BACKSPACE
   */
  BACKSPACE: 8,

  /**
   * TAB
   */
  TAB: 9,

  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,

  /**
   * ENTER
   */
  ENTER: 13,

  /**
   * SHIFT
   */
  SHIFT: 16,

  /**
   * CTRL
   */
  CTRL: 17,

  /**
   * ALT
   */
  ALT: 18,

  /**
   * PAUSE
   */
  PAUSE: 19,

  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,

  /**
   * ESC
   */
  ESC: 27,

  /**
   * SPACE
   */
  SPACE: 32,

  /**
   * PAGE_UP
   */
  PAGE_UP: 33,

  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,

  /**
   * END
   */
  END: 35,

  /**
   * HOME
   */
  HOME: 36,

  /**
   * LEFT
   */
  LEFT: 37,

  /**
   * UP
   */
  UP: 38,

  /**
   * RIGHT
   */
  RIGHT: 39,

  /**
   * DOWN
   */
  DOWN: 40,

  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,

  /**
   * INSERT
   */
  INSERT: 45,

  /**
   * DELETE
   */
  DELETE: 46,

  /**
   * ZERO
   */
  ZERO: 48,

  /**
   * ONE
   */
  ONE: 49,

  /**
   * TWO
   */
  TWO: 50,

  /**
   * THREE
   */
  THREE: 51,

  /**
   * FOUR
   */
  FOUR: 52,

  /**
   * FIVE
   */
  FIVE: 53,

  /**
   * SIX
   */
  SIX: 54,

  /**
   * SEVEN
   */
  SEVEN: 55,

  /**
   * EIGHT
   */
  EIGHT: 56,

  /**
   * NINE
   */
  NINE: 57,

  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,

  /**
   * A
   */
  A: 65,

  /**
   * B
   */
  B: 66,

  /**
   * C
   */
  C: 67,

  /**
   * D
   */
  D: 68,

  /**
   * E
   */
  E: 69,

  /**
   * F
   */
  F: 70,

  /**
   * G
   */
  G: 71,

  /**
   * H
   */
  H: 72,

  /**
   * I
   */
  I: 73,

  /**
   * J
   */
  J: 74,

  /**
   * K
   */
  K: 75,

  /**
   * L
   */
  L: 76,

  /**
   * M
   */
  M: 77,

  /**
   * N
   */
  N: 78,

  /**
   * O
   */
  O: 79,

  /**
   * P
   */
  P: 80,

  /**
   * Q
   */
  Q: 81,

  /**
   * R
   */
  R: 82,

  /**
   * S
   */
  S: 83,

  /**
   * T
   */
  T: 84,

  /**
   * U
   */
  U: 85,

  /**
   * V
   */
  V: 86,

  /**
   * W
   */
  W: 87,

  /**
   * X
   */
  X: 88,

  /**
   * Y
   */
  Y: 89,

  /**
   * Z
   */
  Z: 90,

  /**
   * META
   */
  META: 91,

  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,

  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,

  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,

  /**
   * NUM_ONE
   */
  NUM_ONE: 97,

  /**
   * NUM_TWO
   */
  NUM_TWO: 98,

  /**
   * NUM_THREE
   */
  NUM_THREE: 99,

  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,

  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,

  /**
   * NUM_SIX
   */
  NUM_SIX: 102,

  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,

  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,

  /**
   * NUM_NINE
   */
  NUM_NINE: 105,

  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,

  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,

  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,

  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,

  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,

  /**
   * F1
   */
  F1: 112,

  /**
   * F2
   */
  F2: 113,

  /**
   * F3
   */
  F3: 114,

  /**
   * F4
   */
  F4: 115,

  /**
   * F5
   */
  F5: 116,

  /**
   * F6
   */
  F6: 117,

  /**
   * F7
   */
  F7: 118,

  /**
   * F8
   */
  F8: 119,

  /**
   * F9
   */
  F9: 120,

  /**
   * F10
   */
  F10: 121,

  /**
   * F11
   */
  F11: 122,

  /**
   * F12
   */
  F12: 123,

  /**
   * NUMLOCK
   */
  NUMLOCK: 144,

  /**
   * SEMICOLON
   */
  SEMICOLON: 186,

  /**
   * DASH
   */
  DASH: 189,

  /**
   * EQUALS
   */
  EQUALS: 187,

  /**
   * COMMA
   */
  COMMA: 188,

  /**
   * PERIOD
   */
  PERIOD: 190,

  /**
   * SLASH
   */
  SLASH: 191,

  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,

  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,

  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,

  /**
   * BACKSLASH
   */
  BACKSLASH: 220,

  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,

  /**
   * WIN_KEY
   */
  WIN_KEY: 224,

  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,

  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================

  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;

    if (e.altKey && !e.ctrlKey || e.metaKey || // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    } // The following keys are quite harmless, even in combination with
    // CTRL, ALT or SHIFT.


    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;

      default:
        return true;
    }
  },

  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }

    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }

    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    } // Safari sends zero key code for non-latin characters.


    if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
      return true;
    }

    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;

      default:
        return false;
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (KeyCode);

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = useEvent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

function useEvent(callback) {
  var fnRef = __WEBPACK_IMPORTED_MODULE_0_react__["useRef"]();
  fnRef.current = callback;
  var memoFn = __WEBPACK_IMPORTED_MODULE_0_react__["useCallback"](function () {
    var _fnRef$current;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [fnRef].concat(args));
  }, []);
  return memoFn;
}

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useLayoutUpdateEffect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Dom_canUseDom__ = __webpack_require__(141);


/**
 * Wrap `React.useLayoutEffect` which will not throw warning message in test env
 */

var useLayoutEffect = "development" !== 'test' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Dom_canUseDom__["a" /* default */])() ? __WEBPACK_IMPORTED_MODULE_0_react__["useLayoutEffect"] : __WEBPACK_IMPORTED_MODULE_0_react__["useEffect"];
/* harmony default export */ __webpack_exports__["b"] = (useLayoutEffect);
var useLayoutUpdateEffect = function useLayoutUpdateEffect(callback, deps) {
  var firstMountRef = __WEBPACK_IMPORTED_MODULE_0_react__["useRef"](true);
  useLayoutEffect(function () {
    if (!firstMountRef.current) {
      return callback();
    }
  }, deps); // We tell react that first mount has passed

  useLayoutEffect(function () {
    firstMountRef.current = false;
    return function () {
      firstMountRef.current = true;
    };
  }, []);
};

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = useMergedState;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__useEvent__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__useLayoutEffect__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__useState__ = __webpack_require__(146);





var Source;

(function (Source) {
  Source[Source["INNER"] = 0] = "INNER";
  Source[Source["PROP"] = 1] = "PROP";
})(Source || (Source = {}));
/** We only think `undefined` is empty */


function hasValue(value) {
  return value !== undefined;
}
/**
 * Similar to `useState` but will use props value if provided.
 * Note that internal use rc-util `useState` hook.
 */


function useMergedState(defaultStateValue, option) {
  var _ref = option || {},
      defaultValue = _ref.defaultValue,
      value = _ref.value,
      onChange = _ref.onChange,
      postState = _ref.postState; // ======================= Init =======================


  var _useState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__useState__["a" /* default */])(function () {
    var finalValue = undefined;
    var source;

    if (hasValue(value)) {
      finalValue = value;
      source = Source.PROP;
    } else if (hasValue(defaultValue)) {
      finalValue = typeof defaultValue === 'function' ? defaultValue() : defaultValue;
      source = Source.PROP;
    } else {
      finalValue = typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
      source = Source.INNER;
    }

    return [finalValue, source, finalValue];
  }),
      _useState2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__["a" /* default */])(_useState, 2),
      mergedValue = _useState2[0],
      setMergedValue = _useState2[1];

  var chosenValue = hasValue(value) ? value : mergedValue[0];
  var postMergedValue = postState ? postState(chosenValue) : chosenValue; // ======================= Sync =======================

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__useLayoutEffect__["a" /* useLayoutUpdateEffect */])(function () {
    setMergedValue(function (_ref2) {
      var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__["a" /* default */])(_ref2, 1),
          prevValue = _ref3[0];

      return [value, Source.PROP, prevValue];
    });
  }, [value]); // ====================== Update ======================

  var changeEventPrevRef = __WEBPACK_IMPORTED_MODULE_1_react__["useRef"]();
  var triggerChange = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__useEvent__["a" /* default */])(function (updater, ignoreDestroy) {
    setMergedValue(function (prev) {
      var _prev = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__["a" /* default */])(prev, 3),
          prevValue = _prev[0],
          prevSource = _prev[1],
          prevPrevValue = _prev[2];

      var nextValue = typeof updater === 'function' ? updater(prevValue) : updater; // Do nothing if value not change

      if (nextValue === prevValue) {
        return prev;
      } // Use prev prev value if is in a batch update to avoid missing data


      var overridePrevValue = prevSource === Source.INNER && changeEventPrevRef.current !== prevPrevValue ? prevPrevValue : prevValue;
      return [nextValue, Source.INNER, overridePrevValue];
    }, ignoreDestroy);
  }); // ====================== Change ======================

  var onChangeFn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__useEvent__["a" /* default */])(onChange);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__useLayoutEffect__["b" /* default */])(function () {
    var _mergedValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__["a" /* default */])(mergedValue, 3),
        current = _mergedValue[0],
        source = _mergedValue[1],
        prev = _mergedValue[2];

    if (current !== prev && source === Source.INNER) {
      onChangeFn(current, prev);
      changeEventPrevRef.current = prev;
    }
  }, [mergedValue]);
  return [postMergedValue, triggerChange];
}

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = useSafeState;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);


/**
 * Same as React.useState but `setState` accept `ignoreDestroy` param to not to setState after destroyed.
 * We do not make this auto is to avoid real memory leak.
 * Developer should confirm it's safe to ignore themselves.
 */

function useSafeState(defaultValue) {
  var destroyRef = __WEBPACK_IMPORTED_MODULE_1_react__["useRef"](false);

  var _React$useState = __WEBPACK_IMPORTED_MODULE_1_react__["useState"](defaultValue),
      _React$useState2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__["a" /* default */])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  __WEBPACK_IMPORTED_MODULE_1_react__["useEffect"](function () {
    destroyRef.current = false;
    return function () {
      destroyRef.current = true;
    };
  }, []);

  function safeSetState(updater, ignoreDestroy) {
    if (ignoreDestroy && destroyRef.current) {
      return;
    }

    setValue(updater);
  }

  return [value, safeSetState];
}

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export warning */
/* unused harmony export note */
/* unused harmony export resetWarned */
/* unused harmony export call */
/* unused harmony export warningOnce */
/* unused harmony export noteOnce */
/* eslint-disable no-console */
var warned = {};
function warning(valid, message) {
  // Support uglify
  if ("development" !== 'production' && !valid && console !== undefined) {
    console.error("Warning: ".concat(message));
  }
}
function note(valid, message) {
  // Support uglify
  if ("development" !== 'production' && !valid && console !== undefined) {
    console.warn("Note: ".concat(message));
  }
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
/* harmony default export */ __webpack_exports__["a"] = (warningOnce);
/* eslint-enable */

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),
/* 149 */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),
/* 150 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(122);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(150)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./index.css", function() {
			var newContent = require("!!../../css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25);
module.exports = __webpack_require__(25);


/***/ })
/******/ ]);
});