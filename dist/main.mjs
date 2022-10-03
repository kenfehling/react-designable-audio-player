import $fP0te$react, {createElement as $fP0te$createElement, Component as $fP0te$Component, forwardRef as $fP0te$forwardRef, useRef as $fP0te$useRef, useEffect as $fP0te$useEffect, useImperativeHandle as $fP0te$useImperativeHandle, createRef as $fP0te$createRef, Children as $fP0te$Children, cloneElement as $fP0te$cloneElement, useState as $fP0te$useState, useCallback as $fP0te$useCallback, isValidElement as $fP0te$isValidElement, useMemo as $fP0te$useMemo, useLayoutEffect as $fP0te$useLayoutEffect, Fragment as $fP0te$Fragment, createContext as $fP0te$createContext} from "react";
import $fP0te$reactdom, {findDOMNode as $fP0te$findDOMNode} from "react-dom";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire63a1"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire63a1"] = parcelRequire;
}
parcelRequire.register("l1KF0", function(module, exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";

var $9QLwj = parcelRequire("9QLwj");
function $f4ede2bac2abc4d5$var$emptyFunction() {}
function $f4ede2bac2abc4d5$var$emptyFunctionWithReset() {}
$f4ede2bac2abc4d5$var$emptyFunctionWithReset.resetWarningCache = $f4ede2bac2abc4d5$var$emptyFunction;
module.exports = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === $9QLwj) // It is still safe when called from React.
        return;
        var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        err.name = "Invariant Violation";
        throw err;
    }
    shim.isRequired = shim;
    function getShim() {
        return shim;
    }
    // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
        array: shim,
        bigint: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,
        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,
        checkPropTypes: $f4ede2bac2abc4d5$var$emptyFunctionWithReset,
        resetWarningCache: $f4ede2bac2abc4d5$var$emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};

});
parcelRequire.register("9QLwj", function(module, exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
var $72bdd4e7117d23aa$var$ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
module.exports = $72bdd4e7117d23aa$var$ReactPropTypesSecret;

});


parcelRequire.register("j0NxI", function(module, exports) {

$parcel$export(module.exports, "AsyncMode", () => $dd74729560393408$export$2b8d127b894957b9, (v) => $dd74729560393408$export$2b8d127b894957b9 = v);
$parcel$export(module.exports, "ConcurrentMode", () => $dd74729560393408$export$cea3a54a6425200c, (v) => $dd74729560393408$export$cea3a54a6425200c = v);
$parcel$export(module.exports, "ContextConsumer", () => $dd74729560393408$export$a7c73072b1a182ae, (v) => $dd74729560393408$export$a7c73072b1a182ae = v);
$parcel$export(module.exports, "ContextProvider", () => $dd74729560393408$export$9f27bc3417b4524d, (v) => $dd74729560393408$export$9f27bc3417b4524d = v);
$parcel$export(module.exports, "Element", () => $dd74729560393408$export$db77ccec0bb4ccac, (v) => $dd74729560393408$export$db77ccec0bb4ccac = v);
$parcel$export(module.exports, "ForwardRef", () => $dd74729560393408$export$8392c0c9d3dcbd35, (v) => $dd74729560393408$export$8392c0c9d3dcbd35 = v);
$parcel$export(module.exports, "Fragment", () => $dd74729560393408$export$ffb0004e005737fa, (v) => $dd74729560393408$export$ffb0004e005737fa = v);
$parcel$export(module.exports, "Lazy", () => $dd74729560393408$export$b624eff549462981, (v) => $dd74729560393408$export$b624eff549462981 = v);
$parcel$export(module.exports, "Memo", () => $dd74729560393408$export$7897aa7841a5380c, (v) => $dd74729560393408$export$7897aa7841a5380c = v);
$parcel$export(module.exports, "Portal", () => $dd74729560393408$export$602eac185826482c, (v) => $dd74729560393408$export$602eac185826482c = v);
$parcel$export(module.exports, "Profiler", () => $dd74729560393408$export$e2c29f18771995cb, (v) => $dd74729560393408$export$e2c29f18771995cb = v);
$parcel$export(module.exports, "StrictMode", () => $dd74729560393408$export$5f8d39834fd61797, (v) => $dd74729560393408$export$5f8d39834fd61797 = v);
$parcel$export(module.exports, "Suspense", () => $dd74729560393408$export$74bf444e3cd11ea5, (v) => $dd74729560393408$export$74bf444e3cd11ea5 = v);
$parcel$export(module.exports, "isAsyncMode", () => $dd74729560393408$export$92387174baf9b227, (v) => $dd74729560393408$export$92387174baf9b227 = v);
$parcel$export(module.exports, "isConcurrentMode", () => $dd74729560393408$export$ec112efeb987d9c6, (v) => $dd74729560393408$export$ec112efeb987d9c6 = v);
$parcel$export(module.exports, "isContextConsumer", () => $dd74729560393408$export$b706b080d889d2c9, (v) => $dd74729560393408$export$b706b080d889d2c9 = v);
$parcel$export(module.exports, "isContextProvider", () => $dd74729560393408$export$5be5a87408f70ddc, (v) => $dd74729560393408$export$5be5a87408f70ddc = v);
$parcel$export(module.exports, "isElement", () => $dd74729560393408$export$45a5e7f76e0caa8d, (v) => $dd74729560393408$export$45a5e7f76e0caa8d = v);
$parcel$export(module.exports, "isForwardRef", () => $dd74729560393408$export$455c2e768291efa6, (v) => $dd74729560393408$export$455c2e768291efa6 = v);
$parcel$export(module.exports, "isFragment", () => $dd74729560393408$export$9522e17588c12572, (v) => $dd74729560393408$export$9522e17588c12572 = v);
$parcel$export(module.exports, "isLazy", () => $dd74729560393408$export$2110ac352bb060b9, (v) => $dd74729560393408$export$2110ac352bb060b9 = v);
$parcel$export(module.exports, "isMemo", () => $dd74729560393408$export$56885ab8b9c456ab, (v) => $dd74729560393408$export$56885ab8b9c456ab = v);
$parcel$export(module.exports, "isPortal", () => $dd74729560393408$export$d927fcb6adf8f9de, (v) => $dd74729560393408$export$d927fcb6adf8f9de = v);
$parcel$export(module.exports, "isProfiler", () => $dd74729560393408$export$b82d16f27459e05a, (v) => $dd74729560393408$export$b82d16f27459e05a = v);
$parcel$export(module.exports, "isStrictMode", () => $dd74729560393408$export$522c17b4f5e123e8, (v) => $dd74729560393408$export$522c17b4f5e123e8 = v);
$parcel$export(module.exports, "isSuspense", () => $dd74729560393408$export$1aabd8a0274ecfd6, (v) => $dd74729560393408$export$1aabd8a0274ecfd6 = v);
$parcel$export(module.exports, "isValidElementType", () => $dd74729560393408$export$9b621391a187a31a, (v) => $dd74729560393408$export$9b621391a187a31a = v);
$parcel$export(module.exports, "typeOf", () => $dd74729560393408$export$f5bbd400c2f4426f, (v) => $dd74729560393408$export$f5bbd400c2f4426f = v);
var $dd74729560393408$export$2b8d127b894957b9;
var $dd74729560393408$export$cea3a54a6425200c;
var $dd74729560393408$export$a7c73072b1a182ae;
var $dd74729560393408$export$9f27bc3417b4524d;
var $dd74729560393408$export$db77ccec0bb4ccac;
var $dd74729560393408$export$8392c0c9d3dcbd35;
var $dd74729560393408$export$ffb0004e005737fa;
var $dd74729560393408$export$b624eff549462981;
var $dd74729560393408$export$7897aa7841a5380c;
var $dd74729560393408$export$602eac185826482c;
var $dd74729560393408$export$e2c29f18771995cb;
var $dd74729560393408$export$5f8d39834fd61797;
var $dd74729560393408$export$74bf444e3cd11ea5;
var $dd74729560393408$export$92387174baf9b227;
var $dd74729560393408$export$ec112efeb987d9c6;
var $dd74729560393408$export$b706b080d889d2c9;
var $dd74729560393408$export$5be5a87408f70ddc;
var $dd74729560393408$export$45a5e7f76e0caa8d;
var $dd74729560393408$export$455c2e768291efa6;
var $dd74729560393408$export$9522e17588c12572;
var $dd74729560393408$export$2110ac352bb060b9;
var $dd74729560393408$export$56885ab8b9c456ab;
var $dd74729560393408$export$d927fcb6adf8f9de;
var $dd74729560393408$export$b82d16f27459e05a;
var $dd74729560393408$export$522c17b4f5e123e8;
var $dd74729560393408$export$1aabd8a0274ecfd6;
var $dd74729560393408$export$9b621391a187a31a;
var $dd74729560393408$export$f5bbd400c2f4426f;
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
var $dd74729560393408$var$b = "function" === typeof Symbol && Symbol.for, $dd74729560393408$var$c = $dd74729560393408$var$b ? Symbol.for("react.element") : 60103, $dd74729560393408$var$d = $dd74729560393408$var$b ? Symbol.for("react.portal") : 60106, $dd74729560393408$var$e = $dd74729560393408$var$b ? Symbol.for("react.fragment") : 60107, $dd74729560393408$var$f = $dd74729560393408$var$b ? Symbol.for("react.strict_mode") : 60108, $dd74729560393408$var$g = $dd74729560393408$var$b ? Symbol.for("react.profiler") : 60114, $dd74729560393408$var$h = $dd74729560393408$var$b ? Symbol.for("react.provider") : 60109, $dd74729560393408$var$k = $dd74729560393408$var$b ? Symbol.for("react.context") : 60110, $dd74729560393408$var$l = $dd74729560393408$var$b ? Symbol.for("react.async_mode") : 60111, $dd74729560393408$var$m = $dd74729560393408$var$b ? Symbol.for("react.concurrent_mode") : 60111, $dd74729560393408$var$n = $dd74729560393408$var$b ? Symbol.for("react.forward_ref") : 60112, $dd74729560393408$var$p = $dd74729560393408$var$b ? Symbol.for("react.suspense") : 60113, $dd74729560393408$var$q = $dd74729560393408$var$b ? Symbol.for("react.suspense_list") : 60120, $dd74729560393408$var$r = $dd74729560393408$var$b ? Symbol.for("react.memo") : 60115, $dd74729560393408$var$t = $dd74729560393408$var$b ? Symbol.for("react.lazy") : 60116, $dd74729560393408$var$v = $dd74729560393408$var$b ? Symbol.for("react.block") : 60121, $dd74729560393408$var$w = $dd74729560393408$var$b ? Symbol.for("react.fundamental") : 60117, $dd74729560393408$var$x = $dd74729560393408$var$b ? Symbol.for("react.responder") : 60118, $dd74729560393408$var$y = $dd74729560393408$var$b ? Symbol.for("react.scope") : 60119;
function $dd74729560393408$var$z(a) {
    if ("object" === typeof a && null !== a) {
        var u = a.$$typeof;
        switch(u){
            case $dd74729560393408$var$c:
                switch(a = a.type, a){
                    case $dd74729560393408$var$l:
                    case $dd74729560393408$var$m:
                    case $dd74729560393408$var$e:
                    case $dd74729560393408$var$g:
                    case $dd74729560393408$var$f:
                    case $dd74729560393408$var$p:
                        return a;
                    default:
                        switch(a = a && a.$$typeof, a){
                            case $dd74729560393408$var$k:
                            case $dd74729560393408$var$n:
                            case $dd74729560393408$var$t:
                            case $dd74729560393408$var$r:
                            case $dd74729560393408$var$h:
                                return a;
                            default:
                                return u;
                        }
                }
            case $dd74729560393408$var$d:
                return u;
        }
    }
}
function $dd74729560393408$var$A(a) {
    return $dd74729560393408$var$z(a) === $dd74729560393408$var$m;
}
$dd74729560393408$export$2b8d127b894957b9 = $dd74729560393408$var$l;
$dd74729560393408$export$cea3a54a6425200c = $dd74729560393408$var$m;
$dd74729560393408$export$a7c73072b1a182ae = $dd74729560393408$var$k;
$dd74729560393408$export$9f27bc3417b4524d = $dd74729560393408$var$h;
$dd74729560393408$export$db77ccec0bb4ccac = $dd74729560393408$var$c;
$dd74729560393408$export$8392c0c9d3dcbd35 = $dd74729560393408$var$n;
$dd74729560393408$export$ffb0004e005737fa = $dd74729560393408$var$e;
$dd74729560393408$export$b624eff549462981 = $dd74729560393408$var$t;
$dd74729560393408$export$7897aa7841a5380c = $dd74729560393408$var$r;
$dd74729560393408$export$602eac185826482c = $dd74729560393408$var$d;
$dd74729560393408$export$e2c29f18771995cb = $dd74729560393408$var$g;
$dd74729560393408$export$5f8d39834fd61797 = $dd74729560393408$var$f;
$dd74729560393408$export$74bf444e3cd11ea5 = $dd74729560393408$var$p;
$dd74729560393408$export$92387174baf9b227 = function(a) {
    return $dd74729560393408$var$A(a) || $dd74729560393408$var$z(a) === $dd74729560393408$var$l;
};
$dd74729560393408$export$ec112efeb987d9c6 = $dd74729560393408$var$A;
$dd74729560393408$export$b706b080d889d2c9 = function(a) {
    return $dd74729560393408$var$z(a) === $dd74729560393408$var$k;
};
$dd74729560393408$export$5be5a87408f70ddc = function(a) {
    return $dd74729560393408$var$z(a) === $dd74729560393408$var$h;
};
$dd74729560393408$export$45a5e7f76e0caa8d = function(a) {
    return "object" === typeof a && null !== a && a.$$typeof === $dd74729560393408$var$c;
};
$dd74729560393408$export$455c2e768291efa6 = function(a) {
    return $dd74729560393408$var$z(a) === $dd74729560393408$var$n;
};
$dd74729560393408$export$9522e17588c12572 = function(a) {
    return $dd74729560393408$var$z(a) === $dd74729560393408$var$e;
};
$dd74729560393408$export$2110ac352bb060b9 = function(a) {
    return $dd74729560393408$var$z(a) === $dd74729560393408$var$t;
};
$dd74729560393408$export$56885ab8b9c456ab = function(a) {
    return $dd74729560393408$var$z(a) === $dd74729560393408$var$r;
};
$dd74729560393408$export$d927fcb6adf8f9de = function(a) {
    return $dd74729560393408$var$z(a) === $dd74729560393408$var$d;
};
$dd74729560393408$export$b82d16f27459e05a = function(a) {
    return $dd74729560393408$var$z(a) === $dd74729560393408$var$g;
};
$dd74729560393408$export$522c17b4f5e123e8 = function(a) {
    return $dd74729560393408$var$z(a) === $dd74729560393408$var$f;
};
$dd74729560393408$export$1aabd8a0274ecfd6 = function(a) {
    return $dd74729560393408$var$z(a) === $dd74729560393408$var$p;
};
$dd74729560393408$export$9b621391a187a31a = function(a) {
    return "string" === typeof a || "function" === typeof a || a === $dd74729560393408$var$e || a === $dd74729560393408$var$m || a === $dd74729560393408$var$g || a === $dd74729560393408$var$f || a === $dd74729560393408$var$p || a === $dd74729560393408$var$q || "object" === typeof a && null !== a && (a.$$typeof === $dd74729560393408$var$t || a.$$typeof === $dd74729560393408$var$r || a.$$typeof === $dd74729560393408$var$h || a.$$typeof === $dd74729560393408$var$k || a.$$typeof === $dd74729560393408$var$n || a.$$typeof === $dd74729560393408$var$w || a.$$typeof === $dd74729560393408$var$x || a.$$typeof === $dd74729560393408$var$y || a.$$typeof === $dd74729560393408$var$v);
};
$dd74729560393408$export$f5bbd400c2f4426f = $dd74729560393408$var$z;

});

parcelRequire.register("4yhhw", function(module, exports) {

var $hMXRG = parcelRequire("hMXRG");

var $aC664 = parcelRequire("aC664");
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */ var Buffer = moduleExports ? $hMXRG.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */ var isBuffer = nativeIsBuffer || $aC664;
module.exports = isBuffer;

});
parcelRequire.register("hMXRG", function(module, exports) {

var $aEGZu = parcelRequire("aEGZu");
/** Detect free variable `self`. */ var $cf355b46b1486abc$var$freeSelf = typeof self == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var $cf355b46b1486abc$var$root = $aEGZu || $cf355b46b1486abc$var$freeSelf || Function("return this")();
module.exports = $cf355b46b1486abc$var$root;

});
parcelRequire.register("aEGZu", function(module, exports) {
/** Detect free variable `global` from Node.js. */ var $7c1efcdf994f7478$var$freeGlobal = typeof $parcel$global == "object" && $parcel$global && $parcel$global.Object === Object && $parcel$global;
module.exports = $7c1efcdf994f7478$var$freeGlobal;

});


parcelRequire.register("aC664", function(module, exports) {
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */ function $7ba22eb407e998f7$var$stubFalse() {
    return false;
}
module.exports = $7ba22eb407e998f7$var$stubFalse;

});


parcelRequire.register("j7b0x", function(module, exports) {

var $aEGZu = parcelRequire("aEGZu");
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */ var freeProcess = moduleExports && $aEGZu.process;
/** Used to access faster Node.js helpers. */ var nodeUtil = function() {
    try {
        // Use `util.types` for Node.js 10+.
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) return types;
        // Legacy `process.binding('util')` for Node.js < 10.
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {}
}();
module.exports = nodeUtil;

});


var $2ad5bb065e837e63$exports = {};
var $2ad5bb065e837e63$var$ReactIs, $2ad5bb065e837e63$var$throwOnDirectAccess;

// By explicitly using `prop-types` you are opting into new production behavior.
// http://fb.me/prop-types-in-prod
$2ad5bb065e837e63$exports = (parcelRequire("l1KF0"))();


var $12c21507a843a208$exports = {};
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ "use strict";
var $12c21507a843a208$var$canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */ var $12c21507a843a208$var$ExecutionEnvironment = {
    canUseDOM: $12c21507a843a208$var$canUseDOM,
    canUseWorkers: typeof Worker !== "undefined",
    canUseEventListeners: $12c21507a843a208$var$canUseDOM && !!(window.addEventListener || window.attachEvent),
    canUseViewport: $12c21507a843a208$var$canUseDOM && !!window.screen,
    isInWorker: !$12c21507a843a208$var$canUseDOM // For now, this is true - might change in the future.
};
$12c21507a843a208$exports = $12c21507a843a208$var$ExecutionEnvironment;


function $c2297bd41cc24dfb$export$2e2bcd8739ae039(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}


function $d59e039cd5b05f8e$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function $d59e039cd5b05f8e$export$2e2bcd8739ae039(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? $d59e039cd5b05f8e$var$ownKeys(Object(source), !0).forEach(function(key) {
            (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : $d59e039cd5b05f8e$var$ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}


function $ee5c3d0d33581caa$export$2e2bcd8739ae039(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}


function $0d7f289b36132a60$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function $0d7f289b36132a60$export$2e2bcd8739ae039(Constructor, protoProps, staticProps) {
    if (protoProps) $0d7f289b36132a60$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $0d7f289b36132a60$var$_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}


function $9e206acee34c030c$export$2e2bcd8739ae039(o, p) {
    $9e206acee34c030c$export$2e2bcd8739ae039 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $9e206acee34c030c$export$2e2bcd8739ae039(o, p);
}


function $6a6e2222e4757b72$export$2e2bcd8739ae039(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) (0, $9e206acee34c030c$export$2e2bcd8739ae039)(subClass, superClass);
}


function $d86518653d033e92$export$2e2bcd8739ae039(o) {
    $d86518653d033e92$export$2e2bcd8739ae039 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $d86518653d033e92$export$2e2bcd8739ae039(o);
}


function $30c80ced897e029a$export$2e2bcd8739ae039() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}


function $f301c3a9cca1c45b$export$2e2bcd8739ae039(obj) {
    "@babel/helpers - typeof";
    return $f301c3a9cca1c45b$export$2e2bcd8739ae039 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, $f301c3a9cca1c45b$export$2e2bcd8739ae039(obj);
}


function $077f3d20e0ba4f49$export$2e2bcd8739ae039(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}


function $52b8892fc6e57517$export$2e2bcd8739ae039(self, call) {
    if (call && ((0, $f301c3a9cca1c45b$export$2e2bcd8739ae039)(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return (0, $077f3d20e0ba4f49$export$2e2bcd8739ae039)(self);
}


function $4f1a33a2878c5918$export$2e2bcd8739ae039(Derived) {
    var hasNativeReflectConstruct = (0, $30c80ced897e029a$export$2e2bcd8739ae039)();
    return function _createSuperInternal() {
        var Super = (0, $d86518653d033e92$export$2e2bcd8739ae039)(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = (0, $d86518653d033e92$export$2e2bcd8739ae039)(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return (0, $52b8892fc6e57517$export$2e2bcd8739ae039)(this, result);
    };
}



/* eslint-disable no-console */ var $8b8cd6667b708c78$var$warned = {};
function $8b8cd6667b708c78$export$491112666e282270(valid, message) {}
function $8b8cd6667b708c78$export$a92e4c44d367d0af(valid, message) {}
function $8b8cd6667b708c78$export$60eef1277fe463e4() {
    $8b8cd6667b708c78$var$warned = {};
}
function $8b8cd6667b708c78$export$848feb93d8f32b9b(method, valid, message) {
    if (!valid && !$8b8cd6667b708c78$var$warned[message]) {
        method(false, message);
        $8b8cd6667b708c78$var$warned[message] = true;
    }
}
function $8b8cd6667b708c78$export$82934adf09101657(valid, message) {
    $8b8cd6667b708c78$export$848feb93d8f32b9b($8b8cd6667b708c78$export$491112666e282270, valid, message);
}
function $8b8cd6667b708c78$export$89ff31684837bbbf(valid, message) {
    $8b8cd6667b708c78$export$848feb93d8f32b9b($8b8cd6667b708c78$export$a92e4c44d367d0af, valid, message);
}
var $8b8cd6667b708c78$export$2e2bcd8739ae039 /* eslint-enable */  = $8b8cd6667b708c78$export$82934adf09101657;





var $0d16a0f77b5159d5$var$Track = function Track(props) {
    var _ref, _ref2;
    var className = props.className, included = props.included, vertical = props.vertical, style = props.style;
    var length = props.length, offset = props.offset, reverse = props.reverse;
    if (length < 0) {
        reverse = !reverse;
        length = Math.abs(length);
        offset = 100 - offset;
    }
    var positonStyle = vertical ? (_ref = {}, (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_ref, reverse ? "top" : "bottom", "".concat(offset, "%")), (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_ref, reverse ? "bottom" : "top", "auto"), (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_ref, "height", "".concat(length, "%")), _ref) : (_ref2 = {}, (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_ref2, reverse ? "right" : "left", "".concat(offset, "%")), (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_ref2, reverse ? "left" : "right", "auto"), (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_ref2, "width", "".concat(length, "%")), _ref2);
    var elStyle = (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, style), positonStyle);
    return included ? /*#__PURE__*/ (0, $fP0te$react).createElement("div", {
        className: className,
        style: elStyle
    }) : null;
};
var $0d16a0f77b5159d5$export$2e2bcd8739ae039 = $0d16a0f77b5159d5$var$Track;


function $3d3ec4b4055bad86$export$2e2bcd8739ae039() {
    $3d3ec4b4055bad86$export$2e2bcd8739ae039 = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $3d3ec4b4055bad86$export$2e2bcd8739ae039.apply(this, arguments);
}


function $8b8b1319ba55ee27$export$2e2bcd8739ae039(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


function $8267cf9e9a5b22d5$export$2e2bcd8739ae039(source, excluded) {
    if (source == null) return {};
    var target = (0, $8b8b1319ba55ee27$export$2e2bcd8739ae039)(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}




function $e9209acb45b21ec3$export$2e2bcd8739ae039(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}


function $11f5d80d31c44521$export$2e2bcd8739ae039(arr) {
    if (Array.isArray(arr)) return (0, $e9209acb45b21ec3$export$2e2bcd8739ae039)(arr);
}


function $c3d2be973231de7e$export$2e2bcd8739ae039(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}



function $fb700726099b2aab$export$2e2bcd8739ae039(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return (0, $e9209acb45b21ec3$export$2e2bcd8739ae039)(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0, $e9209acb45b21ec3$export$2e2bcd8739ae039)(o, minLen);
}


function $43f789423371b535$export$2e2bcd8739ae039() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


function $357c61b217a2fb53$export$2e2bcd8739ae039(arr) {
    return (0, $11f5d80d31c44521$export$2e2bcd8739ae039)(arr) || (0, $c3d2be973231de7e$export$2e2bcd8739ae039)(arr) || (0, $fb700726099b2aab$export$2e2bcd8739ae039)(arr) || (0, $43f789423371b535$export$2e2bcd8739ae039)();
}





function $1bffbbc5efef0fdc$export$2e2bcd8739ae039(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = (0, $d86518653d033e92$export$2e2bcd8739ae039)(object);
        if (object === null) break;
    }
    return object;
}


function $9b07597d306e28de$export$2e2bcd8739ae039() {
    if (typeof Reflect !== "undefined" && Reflect.get) $9b07597d306e28de$export$2e2bcd8739ae039 = Reflect.get.bind();
    else $9b07597d306e28de$export$2e2bcd8739ae039 = function _get(target, property, receiver) {
        var base = (0, $1bffbbc5efef0fdc$export$2e2bcd8739ae039)(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) return desc.get.call(arguments.length < 3 ? target : receiver);
        return desc.value;
    };
    return $9b07597d306e28de$export$2e2bcd8739ae039.apply(this, arguments);
}







function $943cd8382ac35371$export$2e2bcd8739ae039(target, eventType, cb, option) {
    /* eslint camelcase: 2 */ var callback = (0, $fP0te$reactdom).unstable_batchedUpdates ? function run(e) {
        (0, $fP0te$reactdom).unstable_batchedUpdates(cb, e);
    } : cb;
    if (target.addEventListener) target.addEventListener(eventType, callback, option);
    return {
        remove: function remove() {
            if (target.removeEventListener) target.removeEventListener(eventType, callback, option);
        }
    };
}


var $9eb44e11aa0ecd62$exports = {};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ /* global define */ (function() {
    "use strict";
    var hasOwn = {}.hasOwnProperty;
    var nativeCodeString = "[native code]";
    function classNames() {
        var classes = [];
        for(var i = 0; i < arguments.length; i++){
            var arg = arguments[i];
            if (!arg) continue;
            var argType = typeof arg;
            if (argType === "string" || argType === "number") classes.push(arg);
            else if (Array.isArray(arg)) {
                if (arg.length) {
                    var inner = classNames.apply(null, arg);
                    if (inner) classes.push(inner);
                }
            } else if (argType === "object") {
                if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
                    classes.push(arg.toString());
                    continue;
                }
                for(var key in arg)if (hasOwn.call(arg, key) && arg[key]) classes.push(key);
            }
        }
        return classes.join(" ");
    }
    if ($9eb44e11aa0ecd62$exports) {
        classNames.default = classNames;
        $9eb44e11aa0ecd62$exports = classNames;
    } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) // register as 'classnames', consistent with npm package name
    define("classnames", [], function() {
        return classNames;
    });
    else window.classNames = classNames;
})();








var $2e5fe37c1a299b4a$var$calcPoints = function calcPoints(vertical, marks, dots, step, min, max) {
    (0, $8b8cd6667b708c78$export$2e2bcd8739ae039)(dots ? step > 0 : true, "`Slider[step]` should be a positive number in order to make Slider[dots] work.");
    var points = Object.keys(marks).map(parseFloat).sort(function(a, b) {
        return a - b;
    });
    if (dots && step) {
        for(var i = min; i <= max; i += step)if (points.indexOf(i) === -1) points.push(i);
    }
    return points;
};
var $2e5fe37c1a299b4a$var$Steps = function Steps(_ref) {
    var prefixCls = _ref.prefixCls, vertical = _ref.vertical, reverse = _ref.reverse, marks = _ref.marks, dots = _ref.dots, step = _ref.step, included = _ref.included, lowerBound = _ref.lowerBound, upperBound = _ref.upperBound, max = _ref.max, min = _ref.min, dotStyle = _ref.dotStyle, activeDotStyle = _ref.activeDotStyle;
    var range = max - min;
    var elements = $2e5fe37c1a299b4a$var$calcPoints(vertical, marks, dots, step, min, max).map(function(point) {
        var _classNames;
        var offset = "".concat(Math.abs(point - min) / range * 100, "%");
        var isActived = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
        var style = vertical ? (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, dotStyle), {}, (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)({}, reverse ? "top" : "bottom", offset)) : (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, dotStyle), {}, (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)({}, reverse ? "right" : "left", offset));
        if (isActived) style = (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, style), activeDotStyle);
        var pointClassName = (0, (/*@__PURE__*/$parcel$interopDefault($9eb44e11aa0ecd62$exports)))((_classNames = {}, (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_classNames, "".concat(prefixCls, "-dot"), true), (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_classNames, "".concat(prefixCls, "-dot-active"), isActived), (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_classNames, "".concat(prefixCls, "-dot-reverse"), reverse), _classNames));
        return /*#__PURE__*/ (0, $fP0te$react).createElement("span", {
            className: pointClassName,
            style: style,
            key: point
        });
    });
    return /*#__PURE__*/ (0, $fP0te$react).createElement("div", {
        className: "".concat(prefixCls, "-step")
    }, elements);
};
var $2e5fe37c1a299b4a$export$2e2bcd8739ae039 = $2e5fe37c1a299b4a$var$Steps;







var $cde89babbbb769bf$var$Marks = function Marks(_ref) {
    var className = _ref.className, vertical = _ref.vertical, reverse = _ref.reverse, marks = _ref.marks, included = _ref.included, upperBound = _ref.upperBound, lowerBound = _ref.lowerBound, max = _ref.max, min = _ref.min, onClickLabel = _ref.onClickLabel;
    var marksKeys = Object.keys(marks);
    var range = max - min;
    var elements = marksKeys.map(parseFloat).sort(function(a, b) {
        return a - b;
    }).map(function(point) {
        var _classNames;
        var markPoint = marks[point];
        var markPointIsObject = (0, $f301c3a9cca1c45b$export$2e2bcd8739ae039)(markPoint) === "object" && !/*#__PURE__*/ (0, $fP0te$react).isValidElement(markPoint);
        var markLabel = markPointIsObject ? markPoint.label : markPoint;
        if (!markLabel && markLabel !== 0) return null;
        var isActive = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
        var markClassName = (0, (/*@__PURE__*/$parcel$interopDefault($9eb44e11aa0ecd62$exports)))((_classNames = {}, (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_classNames, "".concat(className, "-text"), true), (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_classNames, "".concat(className, "-text-active"), isActive), _classNames));
        var bottomStyle = (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)({
            marginBottom: "-50%"
        }, reverse ? "top" : "bottom", "".concat((point - min) / range * 100, "%"));
        var leftStyle = (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)({
            transform: "translateX(".concat(reverse ? "50%" : "-50%", ")"),
            msTransform: "translateX(".concat(reverse ? "50%" : "-50%", ")")
        }, reverse ? "right" : "left", "".concat((point - min) / range * 100, "%"));
        var style = vertical ? bottomStyle : leftStyle;
        var markStyle = markPointIsObject ? (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, style), markPoint.style) : style;
        return /*#__PURE__*/ (0, $fP0te$react).createElement("span", {
            className: markClassName,
            style: markStyle,
            key: point,
            onMouseDown: function onMouseDown(e) {
                return onClickLabel(e, point);
            },
            onTouchStart: function onTouchStart(e) {
                return onClickLabel(e, point);
            }
        }, markLabel);
    });
    return /*#__PURE__*/ (0, $fP0te$react).createElement("div", {
        className: className
    }, elements);
};
var $cde89babbbb769bf$export$2e2bcd8739ae039 = $cde89babbbb769bf$var$Marks;













var $85255e677065b5b5$export$2e2bcd8739ae039 = /*#__PURE__*/ function(_React$Component) {
    (0, $6a6e2222e4757b72$export$2e2bcd8739ae039)(Handle, _React$Component);
    var _super = (0, $4f1a33a2878c5918$export$2e2bcd8739ae039)(Handle);
    function Handle() {
        var _this;
        (0, $ee5c3d0d33581caa$export$2e2bcd8739ae039)(this, Handle);
        _this = _super.apply(this, arguments);
        _this.state = {
            clickFocused: false
        };
        _this.setHandleRef = function(node) {
            _this.handle = node;
        };
        _this.handleMouseUp = function() {
            if (document.activeElement === _this.handle) _this.setClickFocus(true);
        };
        _this.handleMouseDown = function(e) {
            // avoid selecting text during drag
            // https://github.com/ant-design/ant-design/issues/25010
            e.preventDefault(); // fix https://github.com/ant-design/ant-design/issues/15324
            _this.focus();
        };
        _this.handleBlur = function() {
            _this.setClickFocus(false);
        };
        _this.handleKeyDown = function() {
            _this.setClickFocus(false);
        };
        return _this;
    }
    (0, $0d7f289b36132a60$export$2e2bcd8739ae039)(Handle, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                // mouseup won't trigger if mouse moved out of handle,
                // so we listen on document here.
                this.onMouseUpListener = (0, $943cd8382ac35371$export$2e2bcd8739ae039)(document, "mouseup", this.handleMouseUp);
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                if (this.onMouseUpListener) this.onMouseUpListener.remove();
            }
        },
        {
            key: "setClickFocus",
            value: function setClickFocus(focused) {
                this.setState({
                    clickFocused: focused
                });
            }
        },
        {
            key: "clickFocus",
            value: function clickFocus() {
                this.setClickFocus(true);
                this.focus();
            }
        },
        {
            key: "focus",
            value: function focus() {
                this.handle.focus();
            }
        },
        {
            key: "blur",
            value: function blur() {
                this.handle.blur();
            }
        },
        {
            key: "render",
            value: function render() {
                var _ref, _ref2;
                var _this$props = this.props, prefixCls = _this$props.prefixCls, vertical = _this$props.vertical, reverse = _this$props.reverse, offset = _this$props.offset, style = _this$props.style, disabled = _this$props.disabled, min = _this$props.min, max = _this$props.max, value = _this$props.value, tabIndex = _this$props.tabIndex, ariaLabel = _this$props.ariaLabel, ariaLabelledBy = _this$props.ariaLabelledBy, ariaValueTextFormatter = _this$props.ariaValueTextFormatter, restProps = (0, $8267cf9e9a5b22d5$export$2e2bcd8739ae039)(_this$props, [
                    "prefixCls",
                    "vertical",
                    "reverse",
                    "offset",
                    "style",
                    "disabled",
                    "min",
                    "max",
                    "value",
                    "tabIndex",
                    "ariaLabel",
                    "ariaLabelledBy",
                    "ariaValueTextFormatter"
                ]);
                var className = (0, (/*@__PURE__*/$parcel$interopDefault($9eb44e11aa0ecd62$exports)))(this.props.className, (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)({}, "".concat(prefixCls, "-handle-click-focused"), this.state.clickFocused));
                var positionStyle = vertical ? (_ref = {}, (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_ref, reverse ? "top" : "bottom", "".concat(offset, "%")), (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_ref, reverse ? "bottom" : "top", "auto"), (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_ref, "transform", reverse ? null : "translateY(+50%)"), _ref) : (_ref2 = {}, (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_ref2, reverse ? "right" : "left", "".concat(offset, "%")), (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_ref2, reverse ? "left" : "right", "auto"), (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_ref2, "transform", "translateX(".concat(reverse ? "+" : "-", "50%)")), _ref2);
                var elStyle = (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, style), positionStyle);
                var mergedTabIndex = tabIndex || 0;
                if (disabled || tabIndex === null) mergedTabIndex = null;
                var ariaValueText;
                if (ariaValueTextFormatter) ariaValueText = ariaValueTextFormatter(value);
                return /*#__PURE__*/ (0, $fP0te$react).createElement("div", (0, $3d3ec4b4055bad86$export$2e2bcd8739ae039)({
                    ref: this.setHandleRef,
                    tabIndex: mergedTabIndex
                }, restProps, {
                    className: className,
                    style: elStyle,
                    onBlur: this.handleBlur,
                    onKeyDown: this.handleKeyDown,
                    onMouseDown: this.handleMouseDown // aria attribute
                    ,
                    role: "slider",
                    "aria-valuemin": min,
                    "aria-valuemax": max,
                    "aria-valuenow": value,
                    "aria-disabled": !!disabled,
                    "aria-label": ariaLabel,
                    "aria-labelledby": ariaLabelledBy,
                    "aria-valuetext": ariaValueText
                }));
            }
        }
    ]);
    return Handle;
}((0, $fP0te$react).Component);




/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */ var $d707ab5e5b8ff3c8$var$KeyCode = {
    /**
   * MAC_ENTER
   */ MAC_ENTER: 3,
    /**
   * BACKSPACE
   */ BACKSPACE: 8,
    /**
   * TAB
   */ TAB: 9,
    /**
   * NUMLOCK on FF/Safari Mac
   */ NUM_CENTER: 12,
    /**
   * ENTER
   */ ENTER: 13,
    /**
   * SHIFT
   */ SHIFT: 16,
    /**
   * CTRL
   */ CTRL: 17,
    /**
   * ALT
   */ ALT: 18,
    /**
   * PAUSE
   */ PAUSE: 19,
    /**
   * CAPS_LOCK
   */ CAPS_LOCK: 20,
    /**
   * ESC
   */ ESC: 27,
    /**
   * SPACE
   */ SPACE: 32,
    /**
   * PAGE_UP
   */ PAGE_UP: 33,
    /**
   * PAGE_DOWN
   */ PAGE_DOWN: 34,
    /**
   * END
   */ END: 35,
    /**
   * HOME
   */ HOME: 36,
    /**
   * LEFT
   */ LEFT: 37,
    /**
   * UP
   */ UP: 38,
    /**
   * RIGHT
   */ RIGHT: 39,
    /**
   * DOWN
   */ DOWN: 40,
    /**
   * PRINT_SCREEN
   */ PRINT_SCREEN: 44,
    /**
   * INSERT
   */ INSERT: 45,
    /**
   * DELETE
   */ DELETE: 46,
    /**
   * ZERO
   */ ZERO: 48,
    /**
   * ONE
   */ ONE: 49,
    /**
   * TWO
   */ TWO: 50,
    /**
   * THREE
   */ THREE: 51,
    /**
   * FOUR
   */ FOUR: 52,
    /**
   * FIVE
   */ FIVE: 53,
    /**
   * SIX
   */ SIX: 54,
    /**
   * SEVEN
   */ SEVEN: 55,
    /**
   * EIGHT
   */ EIGHT: 56,
    /**
   * NINE
   */ NINE: 57,
    /**
   * QUESTION_MARK
   */ QUESTION_MARK: 63,
    /**
   * A
   */ A: 65,
    /**
   * B
   */ B: 66,
    /**
   * C
   */ C: 67,
    /**
   * D
   */ D: 68,
    /**
   * E
   */ E: 69,
    /**
   * F
   */ F: 70,
    /**
   * G
   */ G: 71,
    /**
   * H
   */ H: 72,
    /**
   * I
   */ I: 73,
    /**
   * J
   */ J: 74,
    /**
   * K
   */ K: 75,
    /**
   * L
   */ L: 76,
    /**
   * M
   */ M: 77,
    /**
   * N
   */ N: 78,
    /**
   * O
   */ O: 79,
    /**
   * P
   */ P: 80,
    /**
   * Q
   */ Q: 81,
    /**
   * R
   */ R: 82,
    /**
   * S
   */ S: 83,
    /**
   * T
   */ T: 84,
    /**
   * U
   */ U: 85,
    /**
   * V
   */ V: 86,
    /**
   * W
   */ W: 87,
    /**
   * X
   */ X: 88,
    /**
   * Y
   */ Y: 89,
    /**
   * Z
   */ Z: 90,
    /**
   * META
   */ META: 91,
    /**
   * WIN_KEY_RIGHT
   */ WIN_KEY_RIGHT: 92,
    /**
   * CONTEXT_MENU
   */ CONTEXT_MENU: 93,
    /**
   * NUM_ZERO
   */ NUM_ZERO: 96,
    /**
   * NUM_ONE
   */ NUM_ONE: 97,
    /**
   * NUM_TWO
   */ NUM_TWO: 98,
    /**
   * NUM_THREE
   */ NUM_THREE: 99,
    /**
   * NUM_FOUR
   */ NUM_FOUR: 100,
    /**
   * NUM_FIVE
   */ NUM_FIVE: 101,
    /**
   * NUM_SIX
   */ NUM_SIX: 102,
    /**
   * NUM_SEVEN
   */ NUM_SEVEN: 103,
    /**
   * NUM_EIGHT
   */ NUM_EIGHT: 104,
    /**
   * NUM_NINE
   */ NUM_NINE: 105,
    /**
   * NUM_MULTIPLY
   */ NUM_MULTIPLY: 106,
    /**
   * NUM_PLUS
   */ NUM_PLUS: 107,
    /**
   * NUM_MINUS
   */ NUM_MINUS: 109,
    /**
   * NUM_PERIOD
   */ NUM_PERIOD: 110,
    /**
   * NUM_DIVISION
   */ NUM_DIVISION: 111,
    /**
   * F1
   */ F1: 112,
    /**
   * F2
   */ F2: 113,
    /**
   * F3
   */ F3: 114,
    /**
   * F4
   */ F4: 115,
    /**
   * F5
   */ F5: 116,
    /**
   * F6
   */ F6: 117,
    /**
   * F7
   */ F7: 118,
    /**
   * F8
   */ F8: 119,
    /**
   * F9
   */ F9: 120,
    /**
   * F10
   */ F10: 121,
    /**
   * F11
   */ F11: 122,
    /**
   * F12
   */ F12: 123,
    /**
   * NUMLOCK
   */ NUMLOCK: 144,
    /**
   * SEMICOLON
   */ SEMICOLON: 186,
    /**
   * DASH
   */ DASH: 189,
    /**
   * EQUALS
   */ EQUALS: 187,
    /**
   * COMMA
   */ COMMA: 188,
    /**
   * PERIOD
   */ PERIOD: 190,
    /**
   * SLASH
   */ SLASH: 191,
    /**
   * APOSTROPHE
   */ APOSTROPHE: 192,
    /**
   * SINGLE_QUOTE
   */ SINGLE_QUOTE: 222,
    /**
   * OPEN_SQUARE_BRACKET
   */ OPEN_SQUARE_BRACKET: 219,
    /**
   * BACKSLASH
   */ BACKSLASH: 220,
    /**
   * CLOSE_SQUARE_BRACKET
   */ CLOSE_SQUARE_BRACKET: 221,
    /**
   * WIN_KEY
   */ WIN_KEY: 224,
    /**
   * MAC_FF_META
   */ MAC_FF_META: 224,
    /**
   * WIN_IME
   */ WIN_IME: 229,
    // ======================== Function ========================
    /**
   * whether text and modified key is entered at the same time.
   */ isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
        var keyCode = e.keyCode;
        if (e.altKey && !e.ctrlKey || e.metaKey || keyCode >= $d707ab5e5b8ff3c8$var$KeyCode.F1 && keyCode <= $d707ab5e5b8ff3c8$var$KeyCode.F12) return false;
         // The following keys are quite harmless, even in combination with
        // CTRL, ALT or SHIFT.
        switch(keyCode){
            case $d707ab5e5b8ff3c8$var$KeyCode.ALT:
            case $d707ab5e5b8ff3c8$var$KeyCode.CAPS_LOCK:
            case $d707ab5e5b8ff3c8$var$KeyCode.CONTEXT_MENU:
            case $d707ab5e5b8ff3c8$var$KeyCode.CTRL:
            case $d707ab5e5b8ff3c8$var$KeyCode.DOWN:
            case $d707ab5e5b8ff3c8$var$KeyCode.END:
            case $d707ab5e5b8ff3c8$var$KeyCode.ESC:
            case $d707ab5e5b8ff3c8$var$KeyCode.HOME:
            case $d707ab5e5b8ff3c8$var$KeyCode.INSERT:
            case $d707ab5e5b8ff3c8$var$KeyCode.LEFT:
            case $d707ab5e5b8ff3c8$var$KeyCode.MAC_FF_META:
            case $d707ab5e5b8ff3c8$var$KeyCode.META:
            case $d707ab5e5b8ff3c8$var$KeyCode.NUMLOCK:
            case $d707ab5e5b8ff3c8$var$KeyCode.NUM_CENTER:
            case $d707ab5e5b8ff3c8$var$KeyCode.PAGE_DOWN:
            case $d707ab5e5b8ff3c8$var$KeyCode.PAGE_UP:
            case $d707ab5e5b8ff3c8$var$KeyCode.PAUSE:
            case $d707ab5e5b8ff3c8$var$KeyCode.PRINT_SCREEN:
            case $d707ab5e5b8ff3c8$var$KeyCode.RIGHT:
            case $d707ab5e5b8ff3c8$var$KeyCode.SHIFT:
            case $d707ab5e5b8ff3c8$var$KeyCode.UP:
            case $d707ab5e5b8ff3c8$var$KeyCode.WIN_KEY:
            case $d707ab5e5b8ff3c8$var$KeyCode.WIN_KEY_RIGHT:
                return false;
            default:
                return true;
        }
    },
    /**
   * whether character is entered.
   */ isCharacterKey: function isCharacterKey(keyCode) {
        if (keyCode >= $d707ab5e5b8ff3c8$var$KeyCode.ZERO && keyCode <= $d707ab5e5b8ff3c8$var$KeyCode.NINE) return true;
        if (keyCode >= $d707ab5e5b8ff3c8$var$KeyCode.NUM_ZERO && keyCode <= $d707ab5e5b8ff3c8$var$KeyCode.NUM_MULTIPLY) return true;
        if (keyCode >= $d707ab5e5b8ff3c8$var$KeyCode.A && keyCode <= $d707ab5e5b8ff3c8$var$KeyCode.Z) return true;
         // Safari sends zero key code for non-latin characters.
        if (window.navigator.userAgent.indexOf("WebKit") !== -1 && keyCode === 0) return true;
        switch(keyCode){
            case $d707ab5e5b8ff3c8$var$KeyCode.SPACE:
            case $d707ab5e5b8ff3c8$var$KeyCode.QUESTION_MARK:
            case $d707ab5e5b8ff3c8$var$KeyCode.NUM_PLUS:
            case $d707ab5e5b8ff3c8$var$KeyCode.NUM_MINUS:
            case $d707ab5e5b8ff3c8$var$KeyCode.NUM_PERIOD:
            case $d707ab5e5b8ff3c8$var$KeyCode.NUM_DIVISION:
            case $d707ab5e5b8ff3c8$var$KeyCode.SEMICOLON:
            case $d707ab5e5b8ff3c8$var$KeyCode.DASH:
            case $d707ab5e5b8ff3c8$var$KeyCode.EQUALS:
            case $d707ab5e5b8ff3c8$var$KeyCode.COMMA:
            case $d707ab5e5b8ff3c8$var$KeyCode.PERIOD:
            case $d707ab5e5b8ff3c8$var$KeyCode.SLASH:
            case $d707ab5e5b8ff3c8$var$KeyCode.APOSTROPHE:
            case $d707ab5e5b8ff3c8$var$KeyCode.SINGLE_QUOTE:
            case $d707ab5e5b8ff3c8$var$KeyCode.OPEN_SQUARE_BRACKET:
            case $d707ab5e5b8ff3c8$var$KeyCode.BACKSLASH:
            case $d707ab5e5b8ff3c8$var$KeyCode.CLOSE_SQUARE_BRACKET:
                return true;
            default:
                return false;
        }
    }
};
var $d707ab5e5b8ff3c8$export$2e2bcd8739ae039 = $d707ab5e5b8ff3c8$var$KeyCode;


function $4f0bcdf7a047ac51$export$597415897f3287c9(e, handles) {
    try {
        return Object.keys(handles).some(function(key) {
            return e.target === (0, $fP0te$findDOMNode)(handles[key]);
        });
    } catch (error) {
        return false;
    }
}
function $4f0bcdf7a047ac51$export$f4657b4dc4cc2ea4(value, _ref) {
    var min = _ref.min, max = _ref.max;
    return value < min || value > max;
}
function $4f0bcdf7a047ac51$export$eaf0efc71c45a02(e) {
    return e.touches.length > 1 || e.type.toLowerCase() === "touchend" && e.touches.length > 0;
}
function $4f0bcdf7a047ac51$export$e3e031d5dec39373(val, _ref2) {
    var marks = _ref2.marks, step = _ref2.step, min = _ref2.min, max = _ref2.max;
    var points = Object.keys(marks).map(parseFloat);
    if (step !== null) {
        var baseNum = Math.pow(10, $4f0bcdf7a047ac51$export$e0c74b50bbd10f68(step));
        var maxSteps = Math.floor((max * baseNum - min * baseNum) / (step * baseNum));
        var steps = Math.min((val - min) / step, maxSteps);
        var closestStep = Math.round(steps) * step + min;
        points.push(closestStep);
    }
    var diffs = points.map(function(point) {
        return Math.abs(val - point);
    });
    return points[diffs.indexOf(Math.min.apply(Math, (0, $357c61b217a2fb53$export$2e2bcd8739ae039)(diffs)))];
}
function $4f0bcdf7a047ac51$export$e0c74b50bbd10f68(step) {
    var stepString = step.toString();
    var precision = 0;
    if (stepString.indexOf(".") >= 0) precision = stepString.length - stepString.indexOf(".") - 1;
    return precision;
}
function $4f0bcdf7a047ac51$export$642213d516a9b928(vertical, e) {
    return vertical ? e.clientY : e.pageX;
}
function $4f0bcdf7a047ac51$export$7e1d3da113d10e8e(vertical, e) {
    return vertical ? e.touches[0].clientY : e.touches[0].pageX;
}
function $4f0bcdf7a047ac51$export$ec6357f54996b379(vertical, handle) {
    var coords = handle.getBoundingClientRect();
    return vertical ? coords.top + coords.height * 0.5 : window.pageXOffset + coords.left + coords.width * 0.5;
}
function $4f0bcdf7a047ac51$export$65e4339c6f9d8d24(val, _ref3) {
    var max = _ref3.max, min = _ref3.min;
    if (val <= min) return min;
    if (val >= max) return max;
    return val;
}
function $4f0bcdf7a047ac51$export$5bea24a9dfe5ab1a(val, props) {
    var step = props.step;
    var closestPoint = isFinite($4f0bcdf7a047ac51$export$e3e031d5dec39373(val, props)) ? $4f0bcdf7a047ac51$export$e3e031d5dec39373(val, props) : 0; // eslint-disable-line
    return step === null ? closestPoint : parseFloat(closestPoint.toFixed($4f0bcdf7a047ac51$export$e0c74b50bbd10f68(step)));
}
function $4f0bcdf7a047ac51$export$3f9ffdaf2961f43f(e) {
    e.stopPropagation();
    e.preventDefault();
}
function $4f0bcdf7a047ac51$export$e5722e0a8bbb32d9(func, value, props) {
    var operations = {
        increase: function increase(a, b) {
            return a + b;
        },
        decrease: function decrease(a, b) {
            return a - b;
        }
    };
    var indexToGet = operations[func](Object.keys(props.marks).indexOf(JSON.stringify(value)), 1);
    var keyToGet = Object.keys(props.marks)[indexToGet];
    if (props.step) return operations[func](value, props.step);
    if (!!Object.keys(props.marks).length && !!props.marks[keyToGet]) return props.marks[keyToGet];
    return value;
}
function $4f0bcdf7a047ac51$export$3bef836a1fb84ee6(e, vertical, reverse) {
    var increase = "increase";
    var decrease = "decrease";
    var method = increase;
    switch(e.keyCode){
        case (0, $d707ab5e5b8ff3c8$export$2e2bcd8739ae039).UP:
            method = vertical && reverse ? decrease : increase;
            break;
        case (0, $d707ab5e5b8ff3c8$export$2e2bcd8739ae039).RIGHT:
            method = !vertical && reverse ? decrease : increase;
            break;
        case (0, $d707ab5e5b8ff3c8$export$2e2bcd8739ae039).DOWN:
            method = vertical && reverse ? increase : decrease;
            break;
        case (0, $d707ab5e5b8ff3c8$export$2e2bcd8739ae039).LEFT:
            method = !vertical && reverse ? increase : decrease;
            break;
        case (0, $d707ab5e5b8ff3c8$export$2e2bcd8739ae039).END:
            return function(value, props) {
                return props.max;
            };
        case (0, $d707ab5e5b8ff3c8$export$2e2bcd8739ae039).HOME:
            return function(value, props) {
                return props.min;
            };
        case (0, $d707ab5e5b8ff3c8$export$2e2bcd8739ae039).PAGE_UP:
            return function(value, props) {
                return value + props.step * 2;
            };
        case (0, $d707ab5e5b8ff3c8$export$2e2bcd8739ae039).PAGE_DOWN:
            return function(value, props) {
                return value - props.step * 2;
            };
        default:
            return undefined;
    }
    return function(value, props) {
        return $4f0bcdf7a047ac51$export$e5722e0a8bbb32d9(method, value, props);
    };
}


/* eslint-disable @typescript-eslint/no-explicit-any */ function $733b39e8bb44eef6$var$noop() {}
function $733b39e8bb44eef6$export$2e2bcd8739ae039(Component) {
    var _a; // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return _a = /*#__PURE__*/ function(_Component) {
        (0, $6a6e2222e4757b72$export$2e2bcd8739ae039)(ComponentEnhancer, _Component);
        var _super = (0, $4f1a33a2878c5918$export$2e2bcd8739ae039)(ComponentEnhancer);
        function ComponentEnhancer(props) {
            var _this;
            (0, $ee5c3d0d33581caa$export$2e2bcd8739ae039)(this, ComponentEnhancer);
            _this = _super.call(this, props);
            _this.onDown = function(e, position) {
                var p = position;
                var _this$props = _this.props, draggableTrack = _this$props.draggableTrack, isVertical = _this$props.vertical;
                var bounds = _this.state.bounds;
                var value = draggableTrack && _this.positionGetValue ? _this.positionGetValue(p) || [] : [];
                var inPoint = $4f0bcdf7a047ac51$export$597415897f3287c9(e, _this.handlesRefs);
                _this.dragTrack = draggableTrack && bounds.length >= 2 && !inPoint && !value.map(function(n, i) {
                    var v = !i ? n >= bounds[i] : true;
                    return i === value.length - 1 ? n <= bounds[i] : v;
                }).some(function(c) {
                    return !c;
                });
                if (_this.dragTrack) {
                    _this.dragOffset = p;
                    _this.startBounds = (0, $357c61b217a2fb53$export$2e2bcd8739ae039)(bounds);
                } else {
                    if (!inPoint) _this.dragOffset = 0;
                    else {
                        var handlePosition = $4f0bcdf7a047ac51$export$ec6357f54996b379(isVertical, e.target);
                        _this.dragOffset = p - handlePosition;
                        p = handlePosition;
                    }
                    _this.onStart(p);
                }
            };
            _this.onMouseDown = function(e) {
                if (e.button !== 0) return;
                _this.removeDocumentEvents();
                var isVertical = _this.props.vertical;
                var position = $4f0bcdf7a047ac51$export$642213d516a9b928(isVertical, e);
                _this.onDown(e, position);
                _this.addDocumentMouseEvents();
            };
            _this.onTouchStart = function(e) {
                if ($4f0bcdf7a047ac51$export$eaf0efc71c45a02(e)) return;
                var isVertical = _this.props.vertical;
                var position = $4f0bcdf7a047ac51$export$7e1d3da113d10e8e(isVertical, e);
                _this.onDown(e, position);
                _this.addDocumentTouchEvents();
                $4f0bcdf7a047ac51$export$3f9ffdaf2961f43f(e);
            };
            _this.onFocus = function(e) {
                var _this$props2 = _this.props, onFocus = _this$props2.onFocus, vertical = _this$props2.vertical;
                if ($4f0bcdf7a047ac51$export$597415897f3287c9(e, _this.handlesRefs) && !_this.dragTrack) {
                    var handlePosition = $4f0bcdf7a047ac51$export$ec6357f54996b379(vertical, e.target);
                    _this.dragOffset = 0;
                    _this.onStart(handlePosition);
                    $4f0bcdf7a047ac51$export$3f9ffdaf2961f43f(e);
                    if (onFocus) onFocus(e);
                }
            };
            _this.onBlur = function(e) {
                var onBlur = _this.props.onBlur;
                if (!_this.dragTrack) _this.onEnd();
                if (onBlur) onBlur(e);
            };
            _this.onMouseUp = function() {
                if (_this.handlesRefs[_this.prevMovedHandleIndex]) _this.handlesRefs[_this.prevMovedHandleIndex].clickFocus();
            };
            _this.onMouseMove = function(e) {
                if (!_this.sliderRef) {
                    _this.onEnd();
                    return;
                }
                var position = $4f0bcdf7a047ac51$export$642213d516a9b928(_this.props.vertical, e);
                _this.onMove(e, position - _this.dragOffset, _this.dragTrack, _this.startBounds);
            };
            _this.onTouchMove = function(e) {
                if ($4f0bcdf7a047ac51$export$eaf0efc71c45a02(e) || !_this.sliderRef) {
                    _this.onEnd();
                    return;
                }
                var position = $4f0bcdf7a047ac51$export$7e1d3da113d10e8e(_this.props.vertical, e);
                _this.onMove(e, position - _this.dragOffset, _this.dragTrack, _this.startBounds);
            };
            _this.onKeyDown = function(e) {
                if (_this.sliderRef && $4f0bcdf7a047ac51$export$597415897f3287c9(e, _this.handlesRefs)) _this.onKeyboard(e);
            };
            _this.onClickMarkLabel = function(e, value) {
                e.stopPropagation();
                _this.onChange({
                    value: value
                }); // eslint-disable-next-line react/no-unused-state
                _this.setState({
                    value: value
                }, function() {
                    return _this.onEnd(true);
                });
            };
            _this.saveSlider = function(slider) {
                _this.sliderRef = slider;
            };
            var step = props.step, max = props.max, min = props.min;
            var isPointDiffEven = isFinite(max - min) ? (max - min) % step === 0 : true; // eslint-disable-line
            (0, $8b8cd6667b708c78$export$2e2bcd8739ae039)(step && Math.floor(step) === step ? isPointDiffEven : true, "Slider[max] - Slider[min] (".concat(max - min, ") should be a multiple of Slider[step] (").concat(step, ")"));
            _this.handlesRefs = {};
            return _this;
        }
        (0, $0d7f289b36132a60$export$2e2bcd8739ae039)(ComponentEnhancer, [
            {
                key: "componentDidMount",
                value: function componentDidMount() {
                    // Snapshot testing cannot handle refs, so be sure to null-check this.
                    this.document = this.sliderRef && this.sliderRef.ownerDocument;
                    var _this$props3 = this.props, autoFocus = _this$props3.autoFocus, disabled = _this$props3.disabled;
                    if (autoFocus && !disabled) this.focus();
                }
            },
            {
                key: "componentWillUnmount",
                value: function componentWillUnmount() {
                    if ((0, $9b07597d306e28de$export$2e2bcd8739ae039)((0, $d86518653d033e92$export$2e2bcd8739ae039)(ComponentEnhancer.prototype), "componentWillUnmount", this)) (0, $9b07597d306e28de$export$2e2bcd8739ae039)((0, $d86518653d033e92$export$2e2bcd8739ae039)(ComponentEnhancer.prototype), "componentWillUnmount", this).call(this);
                    this.removeDocumentEvents();
                }
            },
            {
                key: "getSliderStart",
                value: function getSliderStart() {
                    var slider = this.sliderRef;
                    var _this$props4 = this.props, vertical = _this$props4.vertical, reverse = _this$props4.reverse;
                    var rect = slider.getBoundingClientRect();
                    if (vertical) return reverse ? rect.bottom : rect.top;
                    return window.pageXOffset + (reverse ? rect.right : rect.left);
                }
            },
            {
                key: "getSliderLength",
                value: function getSliderLength() {
                    var slider = this.sliderRef;
                    if (!slider) return 0;
                    var coords = slider.getBoundingClientRect();
                    return this.props.vertical ? coords.height : coords.width;
                }
            },
            {
                key: "addDocumentTouchEvents",
                value: function addDocumentTouchEvents() {
                    // just work for Chrome iOS Safari and Android Browser
                    this.onTouchMoveListener = (0, $943cd8382ac35371$export$2e2bcd8739ae039)(this.document, "touchmove", this.onTouchMove);
                    this.onTouchUpListener = (0, $943cd8382ac35371$export$2e2bcd8739ae039)(this.document, "touchend", this.onEnd);
                }
            },
            {
                key: "addDocumentMouseEvents",
                value: function addDocumentMouseEvents() {
                    this.onMouseMoveListener = (0, $943cd8382ac35371$export$2e2bcd8739ae039)(this.document, "mousemove", this.onMouseMove);
                    this.onMouseUpListener = (0, $943cd8382ac35371$export$2e2bcd8739ae039)(this.document, "mouseup", this.onEnd);
                }
            },
            {
                key: "removeDocumentEvents",
                value: function removeDocumentEvents() {
                    /* eslint-disable @typescript-eslint/no-unused-expressions */ this.onTouchMoveListener && this.onTouchMoveListener.remove();
                    this.onTouchUpListener && this.onTouchUpListener.remove();
                    this.onMouseMoveListener && this.onMouseMoveListener.remove();
                    this.onMouseUpListener && this.onMouseUpListener.remove();
                /* eslint-enable no-unused-expressions */ }
            },
            {
                key: "focus",
                value: function focus() {
                    var _this$handlesRefs$;
                    if (this.props.disabled) return;
                    (_this$handlesRefs$ = this.handlesRefs[0]) === null || _this$handlesRefs$ === void 0 || _this$handlesRefs$.focus();
                }
            },
            {
                key: "blur",
                value: function blur() {
                    var _this2 = this;
                    if (this.props.disabled) return;
                    Object.keys(this.handlesRefs).forEach(function(key) {
                        var _this2$handlesRefs$ke, _this2$handlesRefs$ke2;
                        (_this2$handlesRefs$ke = _this2.handlesRefs[key]) === null || _this2$handlesRefs$ke === void 0 || (_this2$handlesRefs$ke2 = _this2$handlesRefs$ke.blur) === null || _this2$handlesRefs$ke2 === void 0 || _this2$handlesRefs$ke2.call(_this2$handlesRefs$ke);
                    });
                }
            },
            {
                key: "calcValue",
                value: function calcValue(offset) {
                    var _this$props5 = this.props, vertical = _this$props5.vertical, min = _this$props5.min, max = _this$props5.max;
                    var ratio = Math.abs(Math.max(offset, 0) / this.getSliderLength());
                    var value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
                    return value;
                }
            },
            {
                key: "calcValueByPos",
                value: function calcValueByPos(position) {
                    var sign = this.props.reverse ? -1 : 1;
                    var pixelOffset = sign * (position - this.getSliderStart());
                    var nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
                    return nextValue;
                }
            },
            {
                key: "calcOffset",
                value: function calcOffset(value) {
                    var _this$props6 = this.props, min = _this$props6.min, max = _this$props6.max;
                    var ratio = (value - min) / (max - min);
                    return Math.max(0, ratio * 100);
                }
            },
            {
                key: "saveHandle",
                value: function saveHandle(index, handle) {
                    this.handlesRefs[index] = handle;
                }
            },
            {
                key: "render",
                value: function render() {
                    var _classNames;
                    var _this$props7 = this.props, prefixCls = _this$props7.prefixCls, className = _this$props7.className, marks = _this$props7.marks, dots = _this$props7.dots, step = _this$props7.step, included = _this$props7.included, disabled = _this$props7.disabled, vertical = _this$props7.vertical, reverse = _this$props7.reverse, min = _this$props7.min, max = _this$props7.max, children = _this$props7.children, maximumTrackStyle = _this$props7.maximumTrackStyle, style = _this$props7.style, railStyle = _this$props7.railStyle, dotStyle = _this$props7.dotStyle, activeDotStyle = _this$props7.activeDotStyle;
                    var _get$call = (0, $9b07597d306e28de$export$2e2bcd8739ae039)((0, $d86518653d033e92$export$2e2bcd8739ae039)(ComponentEnhancer.prototype), "render", this).call(this), tracks = _get$call.tracks, handles = _get$call.handles;
                    var sliderClassName = (0, (/*@__PURE__*/$parcel$interopDefault($9eb44e11aa0ecd62$exports)))(prefixCls, (_classNames = {}, (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_classNames, "".concat(prefixCls, "-with-marks"), Object.keys(marks).length), (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_classNames, "".concat(prefixCls, "-vertical"), vertical), (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_classNames, className, className), _classNames));
                    return /*#__PURE__*/ (0, $fP0te$react).createElement("div", {
                        ref: this.saveSlider,
                        className: sliderClassName,
                        onTouchStart: disabled ? $733b39e8bb44eef6$var$noop : this.onTouchStart,
                        onMouseDown: disabled ? $733b39e8bb44eef6$var$noop : this.onMouseDown,
                        onMouseUp: disabled ? $733b39e8bb44eef6$var$noop : this.onMouseUp,
                        onKeyDown: disabled ? $733b39e8bb44eef6$var$noop : this.onKeyDown,
                        onFocus: disabled ? $733b39e8bb44eef6$var$noop : this.onFocus,
                        onBlur: disabled ? $733b39e8bb44eef6$var$noop : this.onBlur,
                        style: style
                    }, /*#__PURE__*/ (0, $fP0te$react).createElement("div", {
                        className: "".concat(prefixCls, "-rail"),
                        style: (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, maximumTrackStyle), railStyle)
                    }), tracks, /*#__PURE__*/ (0, $fP0te$react).createElement((0, $2e5fe37c1a299b4a$export$2e2bcd8739ae039), {
                        prefixCls: prefixCls,
                        vertical: vertical,
                        reverse: reverse,
                        marks: marks,
                        dots: dots,
                        step: step,
                        included: included,
                        lowerBound: this.getLowerBound(),
                        upperBound: this.getUpperBound(),
                        max: max,
                        min: min,
                        dotStyle: dotStyle,
                        activeDotStyle: activeDotStyle
                    }), handles, /*#__PURE__*/ (0, $fP0te$react).createElement((0, $cde89babbbb769bf$export$2e2bcd8739ae039), {
                        className: "".concat(prefixCls, "-mark"),
                        onClickLabel: disabled ? $733b39e8bb44eef6$var$noop : this.onClickMarkLabel,
                        vertical: vertical,
                        marks: marks,
                        included: included,
                        lowerBound: this.getLowerBound(),
                        upperBound: this.getUpperBound(),
                        max: max,
                        min: min,
                        reverse: reverse
                    }), children);
                }
            }
        ]);
        return ComponentEnhancer;
    }(Component), _a.displayName = "ComponentEnhancer(".concat(Component.displayName, ")"), _a.defaultProps = (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, Component.defaultProps), {}, {
        prefixCls: "rc-slider",
        className: "",
        min: 0,
        max: 100,
        step: 1,
        marks: {},
        handle: function handle(props) {
            var index = props.index, restProps = (0, $8267cf9e9a5b22d5$export$2e2bcd8739ae039)(props, [
                "index"
            ]);
            delete restProps.dragging;
            if (restProps.value === null) return null;
            return /*#__PURE__*/ (0, $fP0te$react).createElement((0, $85255e677065b5b5$export$2e2bcd8739ae039), (0, $3d3ec4b4055bad86$export$2e2bcd8739ae039)({}, restProps, {
                key: index
            }));
        },
        onBeforeChange: $733b39e8bb44eef6$var$noop,
        onChange: $733b39e8bb44eef6$var$noop,
        onAfterChange: $733b39e8bb44eef6$var$noop,
        included: true,
        disabled: false,
        dots: false,
        vertical: false,
        reverse: false,
        trackStyle: [
            {}
        ],
        handleStyle: [
            {}
        ],
        railStyle: {},
        dotStyle: {},
        activeDotStyle: {}
    }), _a;
}



var $803f678135f2bcdd$var$Slider = /*#__PURE__*/ function(_React$Component) {
    (0, $6a6e2222e4757b72$export$2e2bcd8739ae039)(Slider, _React$Component);
    var _super = (0, $4f1a33a2878c5918$export$2e2bcd8739ae039)(Slider);
    /* eslint-enable */ function Slider(props) {
        var _this;
        (0, $ee5c3d0d33581caa$export$2e2bcd8739ae039)(this, Slider);
        _this = _super.call(this, props);
        _this.positionGetValue = function(position) {
            return [];
        };
        _this.onEnd = function(force) {
            var dragging = _this.state.dragging;
            _this.removeDocumentEvents();
            if (dragging || force) _this.props.onAfterChange(_this.getValue());
            _this.setState({
                dragging: false
            });
        };
        var defaultValue = props.defaultValue !== undefined ? props.defaultValue : props.min;
        var value = props.value !== undefined ? props.value : defaultValue;
        _this.state = {
            value: _this.trimAlignValue(value),
            dragging: false
        };
        (0, $8b8cd6667b708c78$export$2e2bcd8739ae039)(!("minimumTrackStyle" in props), "minimumTrackStyle will be deprecated, please use trackStyle instead.");
        (0, $8b8cd6667b708c78$export$2e2bcd8739ae039)(!("maximumTrackStyle" in props), "maximumTrackStyle will be deprecated, please use railStyle instead.");
        return _this;
    }
    /**
   * [Legacy] Used for inherit other component.
   * It's a bad code style which should be refactor.
   */ /* eslint-disable @typescript-eslint/no-unused-vars, class-methods-use-this */ (0, $0d7f289b36132a60$export$2e2bcd8739ae039)(Slider, [
        {
            key: "calcValueByPos",
            value: function calcValueByPos(value) {
                return 0;
            }
        },
        {
            key: "calcOffset",
            value: function calcOffset(value) {
                return 0;
            }
        },
        {
            key: "saveHandle",
            value: function saveHandle(index, h) {}
        },
        {
            key: "removeDocumentEvents",
            value: function removeDocumentEvents() {}
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps, prevState) {
                var _this$props = this.props, min = _this$props.min, max = _this$props.max, value = _this$props.value, onChange = _this$props.onChange;
                if (!("min" in this.props || "max" in this.props)) return;
                var theValue = value !== undefined ? value : prevState.value;
                var nextValue = this.trimAlignValue(theValue, this.props);
                if (nextValue === prevState.value) return;
                 // eslint-disable-next-line
                this.setState({
                    value: nextValue
                });
                if (!(min === prevProps.min && max === prevProps.max) && $4f0bcdf7a047ac51$export$f4657b4dc4cc2ea4(theValue, this.props)) onChange(nextValue);
            }
        },
        {
            key: "onChange",
            value: function onChange(state) {
                var props = this.props;
                var isNotControlled = !("value" in props);
                var nextState = state.value > this.props.max ? (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, state), {}, {
                    value: this.props.max
                }) : state;
                if (isNotControlled) this.setState(nextState);
                var changedValue = nextState.value;
                props.onChange(changedValue);
            }
        },
        {
            key: "onStart",
            value: function onStart(position) {
                this.setState({
                    dragging: true
                });
                var props = this.props;
                var prevValue = this.getValue();
                props.onBeforeChange(prevValue);
                var value = this.calcValueByPos(position);
                this.startValue = value;
                this.startPosition = position;
                if (value === prevValue) return;
                this.prevMovedHandleIndex = 0;
                this.onChange({
                    value: value
                });
            }
        },
        {
            key: "onMove",
            value: function onMove(e, position) {
                $4f0bcdf7a047ac51$export$3f9ffdaf2961f43f(e);
                var oldValue = this.state.value;
                var value = this.calcValueByPos(position);
                if (value === oldValue) return;
                this.onChange({
                    value: value
                });
            }
        },
        {
            key: "onKeyboard",
            value: function onKeyboard(e) {
                var _this$props2 = this.props, reverse = _this$props2.reverse, vertical = _this$props2.vertical;
                var valueMutator = $4f0bcdf7a047ac51$export$3bef836a1fb84ee6(e, vertical, reverse);
                if (valueMutator) {
                    $4f0bcdf7a047ac51$export$3f9ffdaf2961f43f(e);
                    var state = this.state;
                    var oldValue = state.value;
                    var mutatedValue = valueMutator(oldValue, this.props);
                    var value = this.trimAlignValue(mutatedValue);
                    if (value === oldValue) return;
                    this.onChange({
                        value: value
                    });
                    this.props.onAfterChange(value);
                    this.onEnd();
                }
            }
        },
        {
            key: "getValue",
            value: function getValue() {
                return this.state.value;
            }
        },
        {
            key: "getLowerBound",
            value: function getLowerBound() {
                var minPoint = this.props.startPoint || this.props.min;
                return this.state.value > minPoint ? minPoint : this.state.value;
            }
        },
        {
            key: "getUpperBound",
            value: function getUpperBound() {
                if (this.state.value < this.props.startPoint) return this.props.startPoint;
                return this.state.value;
            }
        },
        {
            key: "trimAlignValue",
            value: function trimAlignValue(v) {
                var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                if (v === null) return null;
                var mergedProps = (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, this.props), nextProps);
                var val = $4f0bcdf7a047ac51$export$65e4339c6f9d8d24(v, mergedProps);
                return $4f0bcdf7a047ac51$export$5bea24a9dfe5ab1a(val, mergedProps);
            }
        },
        {
            key: "render",
            value: function render() {
                var _this2 = this;
                var _this$props3 = this.props, prefixCls = _this$props3.prefixCls, vertical = _this$props3.vertical, included = _this$props3.included, disabled = _this$props3.disabled, minimumTrackStyle = _this$props3.minimumTrackStyle, trackStyle = _this$props3.trackStyle, handleStyle = _this$props3.handleStyle, tabIndex = _this$props3.tabIndex, ariaLabelForHandle = _this$props3.ariaLabelForHandle, ariaLabelledByForHandle = _this$props3.ariaLabelledByForHandle, ariaValueTextFormatterForHandle = _this$props3.ariaValueTextFormatterForHandle, min = _this$props3.min, max = _this$props3.max, startPoint = _this$props3.startPoint, reverse = _this$props3.reverse, handleGenerator = _this$props3.handle;
                var _this$state = this.state, value = _this$state.value, dragging = _this$state.dragging;
                var offset = this.calcOffset(value);
                var handle = handleGenerator({
                    className: "".concat(prefixCls, "-handle"),
                    prefixCls: prefixCls,
                    vertical: vertical,
                    offset: offset,
                    value: value,
                    dragging: dragging,
                    disabled: disabled,
                    min: min,
                    max: max,
                    reverse: reverse,
                    index: 0,
                    tabIndex: tabIndex,
                    ariaLabel: ariaLabelForHandle,
                    ariaLabelledBy: ariaLabelledByForHandle,
                    ariaValueTextFormatter: ariaValueTextFormatterForHandle,
                    style: handleStyle[0] || handleStyle,
                    ref: function ref(h) {
                        return _this2.saveHandle(0, h);
                    }
                });
                var trackOffset = startPoint !== undefined ? this.calcOffset(startPoint) : 0;
                var mergedTrackStyle = trackStyle[0] || trackStyle;
                var track = /*#__PURE__*/ (0, $fP0te$react).createElement((0, $0d16a0f77b5159d5$export$2e2bcd8739ae039), {
                    className: "".concat(prefixCls, "-track"),
                    vertical: vertical,
                    included: included,
                    offset: trackOffset,
                    reverse: reverse,
                    length: offset - trackOffset,
                    style: (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, minimumTrackStyle), mergedTrackStyle)
                });
                return {
                    tracks: track,
                    handles: handle
                };
            }
        }
    ]);
    return Slider;
}((0, $fP0te$react).Component);
var $803f678135f2bcdd$export$2e2bcd8739ae039 = (0, $733b39e8bb44eef6$export$2e2bcd8739ae039)($803f678135f2bcdd$var$Slider);














var $95ca34ae355532c5$var$_trimAlignValue = function trimAlignValue(_ref) {
    var value = _ref.value, handle = _ref.handle, bounds = _ref.bounds, props = _ref.props;
    var allowCross = props.allowCross, pushable = props.pushable;
    var thershold = Number(pushable);
    var valInRange = $4f0bcdf7a047ac51$export$65e4339c6f9d8d24(value, props);
    var valNotConflict = valInRange;
    if (!allowCross && handle != null && bounds !== undefined) {
        if (handle > 0 && valInRange <= bounds[handle - 1] + thershold) valNotConflict = bounds[handle - 1] + thershold;
        if (handle < bounds.length - 1 && valInRange >= bounds[handle + 1] - thershold) valNotConflict = bounds[handle + 1] - thershold;
    }
    return $4f0bcdf7a047ac51$export$5bea24a9dfe5ab1a(valNotConflict, props);
};
var $95ca34ae355532c5$var$Range = /*#__PURE__*/ function(_React$Component) {
    (0, $6a6e2222e4757b72$export$2e2bcd8739ae039)(Range, _React$Component);
    var _super = (0, $4f1a33a2878c5918$export$2e2bcd8739ae039)(Range);
    function Range(props) {
        var _this;
        (0, $ee5c3d0d33581caa$export$2e2bcd8739ae039)(this, Range);
        _this = _super.call(this, props);
        _this.positionGetValue = function(position) {
            var bounds = _this.getValue();
            var value = _this.calcValueByPos(position);
            var closestBound = _this.getClosestBound(value);
            var index = _this.getBoundNeedMoving(value, closestBound);
            var prevValue = bounds[index];
            if (value === prevValue) return null;
            var nextBounds = (0, $357c61b217a2fb53$export$2e2bcd8739ae039)(bounds);
            nextBounds[index] = value;
            return nextBounds;
        };
        _this.onEnd = function(force) {
            var handle = _this.state.handle;
            _this.removeDocumentEvents();
            if (!handle) _this.dragTrack = false;
            if (handle !== null || force) _this.props.onAfterChange(_this.getValue());
            _this.setState({
                handle: null
            });
        };
        var count = props.count, min = props.min, max = props.max;
        var initialValue = Array.apply(void 0, (0, $357c61b217a2fb53$export$2e2bcd8739ae039)(Array(count + 1))).map(function() {
            return min;
        });
        var defaultValue = "defaultValue" in props ? props.defaultValue : initialValue;
        var value = props.value !== undefined ? props.value : defaultValue;
        var bounds = value.map(function(v, i) {
            return $95ca34ae355532c5$var$_trimAlignValue({
                value: v,
                handle: i,
                props: props
            });
        });
        var recent = bounds[0] === max ? 0 : bounds.length - 1;
        _this.state = {
            handle: null,
            recent: recent,
            bounds: bounds
        };
        return _this;
    }
    /**
   * [Legacy] Used for inherit other component.
   * It's a bad code style which should be refactor.
   */ /* eslint-disable @typescript-eslint/no-unused-vars, class-methods-use-this */ (0, $0d7f289b36132a60$export$2e2bcd8739ae039)(Range, [
        {
            key: "calcValueByPos",
            value: function calcValueByPos(value) {
                return 0;
            }
        },
        {
            key: "getSliderLength",
            value: function getSliderLength() {
                return 0;
            }
        },
        {
            key: "calcOffset",
            value: function calcOffset(value) {
                return 0;
            }
        },
        {
            key: "saveHandle",
            value: function saveHandle(index, h) {}
        },
        {
            key: "removeDocumentEvents",
            value: function removeDocumentEvents() {}
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps, prevState) {
                var _this2 = this;
                var _this$props = this.props, onChange = _this$props.onChange, value = _this$props.value, min = _this$props.min, max = _this$props.max;
                if (!("min" in this.props || "max" in this.props)) return;
                if (min === prevProps.min && max === prevProps.max) return;
                var currentValue = value || prevState.bounds;
                if (currentValue.some(function(v) {
                    return $4f0bcdf7a047ac51$export$f4657b4dc4cc2ea4(v, _this2.props);
                })) {
                    var newValues = currentValue.map(function(v) {
                        return $4f0bcdf7a047ac51$export$65e4339c6f9d8d24(v, _this2.props);
                    });
                    onChange(newValues);
                }
            }
        },
        {
            key: "onChange",
            value: function onChange(state) {
                var props = this.props;
                var isNotControlled = !("value" in props);
                if (isNotControlled) this.setState(state);
                else {
                    var controlledState = {};
                    [
                        "handle",
                        "recent"
                    ].forEach(function(item) {
                        if (state[item] !== undefined) controlledState[item] = state[item];
                    });
                    if (Object.keys(controlledState).length) this.setState(controlledState);
                }
                var data = (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, this.state), state);
                var changedValue = data.bounds;
                props.onChange(changedValue);
            }
        },
        {
            key: "onStart",
            value: function onStart(position) {
                var props = this.props, state = this.state;
                var bounds = this.getValue();
                props.onBeforeChange(bounds);
                var value = this.calcValueByPos(position);
                this.startValue = value;
                this.startPosition = position;
                var closestBound = this.getClosestBound(value);
                this.prevMovedHandleIndex = this.getBoundNeedMoving(value, closestBound);
                this.setState({
                    handle: this.prevMovedHandleIndex,
                    recent: this.prevMovedHandleIndex
                });
                var prevValue = bounds[this.prevMovedHandleIndex];
                if (value === prevValue) return;
                var nextBounds = (0, $357c61b217a2fb53$export$2e2bcd8739ae039)(state.bounds);
                nextBounds[this.prevMovedHandleIndex] = value;
                this.onChange({
                    bounds: nextBounds
                });
            }
        },
        {
            key: "onMove",
            value: function onMove(e, position, dragTrack, startBounds) {
                $4f0bcdf7a047ac51$export$3f9ffdaf2961f43f(e);
                var state = this.state, props = this.props;
                var maxValue = props.max || 100;
                var minValue = props.min || 0;
                if (dragTrack) {
                    var pos = props.vertical ? -position : position;
                    pos = props.reverse ? -pos : pos;
                    var max = maxValue - Math.max.apply(Math, (0, $357c61b217a2fb53$export$2e2bcd8739ae039)(startBounds));
                    var min = minValue - Math.min.apply(Math, (0, $357c61b217a2fb53$export$2e2bcd8739ae039)(startBounds));
                    var ratio = Math.min(Math.max(pos / (this.getSliderLength() / (maxValue - minValue)), min), max);
                    var nextBounds = startBounds.map(function(v) {
                        return Math.floor(Math.max(Math.min(v + ratio, maxValue), minValue));
                    });
                    if (state.bounds.map(function(c, i) {
                        return c === nextBounds[i];
                    }).some(function(c) {
                        return !c;
                    })) this.onChange({
                        bounds: nextBounds
                    });
                    return;
                }
                var value = this.calcValueByPos(position);
                var oldValue = state.bounds[state.handle];
                if (value === oldValue) return;
                this.moveTo(value);
            }
        },
        {
            key: "onKeyboard",
            value: function onKeyboard(e) {
                var _this$props2 = this.props, reverse = _this$props2.reverse, vertical = _this$props2.vertical;
                var valueMutator = $4f0bcdf7a047ac51$export$3bef836a1fb84ee6(e, vertical, reverse);
                if (valueMutator) {
                    $4f0bcdf7a047ac51$export$3f9ffdaf2961f43f(e);
                    var state = this.state, props = this.props;
                    var bounds = state.bounds, handle = state.handle;
                    var oldValue = bounds[handle === null ? state.recent : handle];
                    var mutatedValue = valueMutator(oldValue, props);
                    var value = $95ca34ae355532c5$var$_trimAlignValue({
                        value: mutatedValue,
                        handle: handle,
                        bounds: state.bounds,
                        props: props
                    });
                    if (value === oldValue) return;
                    var isFromKeyboardEvent = true;
                    this.moveTo(value, isFromKeyboardEvent);
                }
            }
        },
        {
            key: "getValue",
            value: function getValue() {
                return this.state.bounds;
            }
        },
        {
            key: "getClosestBound",
            value: function getClosestBound(value) {
                var bounds = this.state.bounds;
                var closestBound = 0;
                for(var i = 1; i < bounds.length - 1; i += 1)if (value >= bounds[i]) closestBound = i;
                if (Math.abs(bounds[closestBound + 1] - value) < Math.abs(bounds[closestBound] - value)) closestBound += 1;
                return closestBound;
            }
        },
        {
            key: "getBoundNeedMoving",
            value: function getBoundNeedMoving(value, closestBound) {
                var _this$state = this.state, bounds = _this$state.bounds, recent = _this$state.recent;
                var boundNeedMoving = closestBound;
                var isAtTheSamePoint = bounds[closestBound + 1] === bounds[closestBound];
                if (isAtTheSamePoint && bounds[recent] === bounds[closestBound]) boundNeedMoving = recent;
                if (isAtTheSamePoint && value !== bounds[closestBound + 1]) boundNeedMoving = value < bounds[closestBound + 1] ? closestBound : closestBound + 1;
                return boundNeedMoving;
            }
        },
        {
            key: "getLowerBound",
            value: function getLowerBound() {
                return this.state.bounds[0];
            }
        },
        {
            key: "getUpperBound",
            value: function getUpperBound() {
                var bounds = this.state.bounds;
                return bounds[bounds.length - 1];
            }
        },
        {
            key: "getPoints",
            value: function getPoints() {
                var _this$props3 = this.props, marks = _this$props3.marks, step = _this$props3.step, min = _this$props3.min, max = _this$props3.max;
                var cache = this.internalPointsCache;
                if (!cache || cache.marks !== marks || cache.step !== step) {
                    var pointsObject = (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, marks);
                    if (step !== null) for(var point = min; point <= max; point += step)pointsObject[point] = point;
                    var points = Object.keys(pointsObject).map(parseFloat);
                    points.sort(function(a, b) {
                        return a - b;
                    });
                    this.internalPointsCache = {
                        marks: marks,
                        step: step,
                        points: points
                    };
                }
                return this.internalPointsCache.points;
            }
        },
        {
            key: "moveTo",
            value: function moveTo(value, isFromKeyboardEvent) {
                var _this3 = this;
                var state = this.state, props = this.props;
                var nextBounds = (0, $357c61b217a2fb53$export$2e2bcd8739ae039)(state.bounds);
                var handle = state.handle === null ? state.recent : state.handle;
                nextBounds[handle] = value;
                var nextHandle = handle;
                if (props.pushable !== false) this.pushSurroundingHandles(nextBounds, nextHandle);
                else if (props.allowCross) {
                    nextBounds.sort(function(a, b) {
                        return a - b;
                    });
                    nextHandle = nextBounds.indexOf(value);
                }
                this.onChange({
                    recent: nextHandle,
                    handle: nextHandle,
                    bounds: nextBounds
                });
                if (isFromKeyboardEvent) {
                    // known problem: because setState is async,
                    // so trigger focus will invoke handler's onEnd and another handler's onStart too early,
                    // cause onBeforeChange and onAfterChange receive wrong value.
                    // here use setState callback to hack，but not elegant
                    this.props.onAfterChange(nextBounds);
                    this.setState({}, function() {
                        _this3.handlesRefs[nextHandle].focus();
                    });
                    this.onEnd();
                }
            }
        },
        {
            key: "pushSurroundingHandles",
            value: function pushSurroundingHandles(bounds, handle) {
                var value = bounds[handle];
                var pushable = this.props.pushable;
                var threshold = Number(pushable);
                var direction = 0;
                if (bounds[handle + 1] - value < threshold) direction = 1; // push to right
                if (value - bounds[handle - 1] < threshold) direction = -1; // push to left
                if (direction === 0) return;
                var nextHandle = handle + direction;
                var diffToNext = direction * (bounds[nextHandle] - value);
                if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) // revert to original value if pushing is impossible
                // eslint-disable-next-line no-param-reassign
                bounds[handle] = bounds[nextHandle] - direction * threshold;
            }
        },
        {
            key: "pushHandle",
            value: function pushHandle(bounds, handle, direction, amount) {
                var originalValue = bounds[handle];
                var currentValue = bounds[handle];
                while(direction * (currentValue - originalValue) < amount){
                    if (!this.pushHandleOnePoint(bounds, handle, direction)) {
                        // can't push handle enough to create the needed `amount` gap, so we
                        // revert its position to the original value
                        // eslint-disable-next-line no-param-reassign
                        bounds[handle] = originalValue;
                        return false;
                    }
                    currentValue = bounds[handle];
                } // the handle was pushed enough to create the needed `amount` gap
                return true;
            }
        },
        {
            key: "pushHandleOnePoint",
            value: function pushHandleOnePoint(bounds, handle, direction) {
                var points = this.getPoints();
                var pointIndex = points.indexOf(bounds[handle]);
                var nextPointIndex = pointIndex + direction;
                if (nextPointIndex >= points.length || nextPointIndex < 0) // reached the minimum or maximum available point, can't push anymore
                return false;
                var nextHandle = handle + direction;
                var nextValue = points[nextPointIndex];
                var pushable = this.props.pushable;
                var threshold = Number(pushable);
                var diffToNext = direction * (bounds[nextHandle] - nextValue);
                if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) // couldn't push next handle, so we won't push this one either
                return false;
                 // push the handle
                // eslint-disable-next-line no-param-reassign
                bounds[handle] = nextValue;
                return true;
            }
        },
        {
            key: "trimAlignValue",
            value: function trimAlignValue(value) {
                var _this$state2 = this.state, handle = _this$state2.handle, bounds = _this$state2.bounds;
                return $95ca34ae355532c5$var$_trimAlignValue({
                    value: value,
                    handle: handle,
                    bounds: bounds,
                    props: this.props
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var _this4 = this;
                var _this$state3 = this.state, handle = _this$state3.handle, bounds = _this$state3.bounds;
                var _this$props4 = this.props, prefixCls = _this$props4.prefixCls, vertical = _this$props4.vertical, included = _this$props4.included, disabled = _this$props4.disabled, min = _this$props4.min, max = _this$props4.max, reverse = _this$props4.reverse, handleGenerator = _this$props4.handle, trackStyle = _this$props4.trackStyle, handleStyle = _this$props4.handleStyle, tabIndex = _this$props4.tabIndex, ariaLabelGroupForHandles = _this$props4.ariaLabelGroupForHandles, ariaLabelledByGroupForHandles = _this$props4.ariaLabelledByGroupForHandles, ariaValueTextFormatterGroupForHandles = _this$props4.ariaValueTextFormatterGroupForHandles;
                var offsets = bounds.map(function(v) {
                    return _this4.calcOffset(v);
                });
                var handleClassName = "".concat(prefixCls, "-handle");
                var handles = bounds.map(function(v, i) {
                    var _classNames;
                    var mergedTabIndex = tabIndex[i] || 0;
                    if (disabled || tabIndex[i] === null) mergedTabIndex = null;
                    var dragging = handle === i;
                    return handleGenerator({
                        className: (0, (/*@__PURE__*/$parcel$interopDefault($9eb44e11aa0ecd62$exports)))((_classNames = {}, (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_classNames, handleClassName, true), (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_classNames, "".concat(handleClassName, "-").concat(i + 1), true), (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_classNames, "".concat(handleClassName, "-dragging"), dragging), _classNames)),
                        prefixCls: prefixCls,
                        vertical: vertical,
                        dragging: dragging,
                        offset: offsets[i],
                        value: v,
                        index: i,
                        tabIndex: mergedTabIndex,
                        min: min,
                        max: max,
                        reverse: reverse,
                        disabled: disabled,
                        style: handleStyle[i],
                        ref: function ref(h) {
                            return _this4.saveHandle(i, h);
                        },
                        ariaLabel: ariaLabelGroupForHandles[i],
                        ariaLabelledBy: ariaLabelledByGroupForHandles[i],
                        ariaValueTextFormatter: ariaValueTextFormatterGroupForHandles[i]
                    });
                });
                var tracks = bounds.slice(0, -1).map(function(_, index) {
                    var _classNames2;
                    var i = index + 1;
                    var trackClassName = (0, (/*@__PURE__*/$parcel$interopDefault($9eb44e11aa0ecd62$exports)))((_classNames2 = {}, (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_classNames2, "".concat(prefixCls, "-track"), true), (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_classNames2, "".concat(prefixCls, "-track-").concat(i), true), _classNames2));
                    return /*#__PURE__*/ (0, $fP0te$react).createElement((0, $0d16a0f77b5159d5$export$2e2bcd8739ae039), {
                        className: trackClassName,
                        vertical: vertical,
                        reverse: reverse,
                        included: included,
                        offset: offsets[i - 1],
                        length: offsets[i] - offsets[i - 1],
                        style: trackStyle[index],
                        key: i
                    });
                });
                return {
                    tracks: tracks,
                    handles: handles
                };
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(props, state) {
                if (!("value" in props || "min" in props || "max" in props)) return null;
                var value = props.value || state.bounds;
                var nextBounds = value.map(function(v, i) {
                    return $95ca34ae355532c5$var$_trimAlignValue({
                        value: v,
                        handle: i,
                        bounds: state.bounds,
                        props: props
                    });
                });
                if (state.bounds.length === nextBounds.length) {
                    if (nextBounds.every(function(v, i) {
                        return v === state.bounds[i];
                    })) return null;
                } else nextBounds = value.map(function(v, i) {
                    return $95ca34ae355532c5$var$_trimAlignValue({
                        value: v,
                        handle: i,
                        props: props
                    });
                });
                return (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, state), {}, {
                    bounds: nextBounds
                });
            }
        }
    ]);
    return Range;
}((0, $fP0te$react).Component);
/* eslint-enable */ $95ca34ae355532c5$var$Range.displayName = "Range";
$95ca34ae355532c5$var$Range.defaultProps = {
    count: 1,
    allowCross: true,
    pushable: false,
    draggableTrack: false,
    tabIndex: [],
    ariaLabelGroupForHandles: [],
    ariaLabelledByGroupForHandles: [],
    ariaValueTextFormatterGroupForHandles: []
};
var $95ca34ae355532c5$export$2e2bcd8739ae039 = (0, $733b39e8bb44eef6$export$2e2bcd8739ae039)($95ca34ae355532c5$var$Range);





























var $aee939dffebaf255$var$raf = function raf(callback) {
    return +setTimeout(callback, 16);
};
var $aee939dffebaf255$var$caf = function caf(num) {
    return clearTimeout(num);
};
if (typeof window !== "undefined" && "requestAnimationFrame" in window) {
    $aee939dffebaf255$var$raf = function raf(callback) {
        return window.requestAnimationFrame(callback);
    };
    $aee939dffebaf255$var$caf = function caf(handle) {
        return window.cancelAnimationFrame(handle);
    };
}
var $aee939dffebaf255$var$rafUUID = 0;
var $aee939dffebaf255$var$rafIds = new Map();
function $aee939dffebaf255$var$cleanup(id) {
    $aee939dffebaf255$var$rafIds.delete(id);
}
function $aee939dffebaf255$export$2e2bcd8739ae039(callback) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    $aee939dffebaf255$var$rafUUID += 1;
    var id = $aee939dffebaf255$var$rafUUID;
    function callRef(leftTimes) {
        if (leftTimes === 0) {
            // Clean up
            $aee939dffebaf255$var$cleanup(id); // Trigger
            callback();
        } else {
            // Next raf
            var realId = $aee939dffebaf255$var$raf(function() {
                callRef(leftTimes - 1);
            }); // Bind real raf id
            $aee939dffebaf255$var$rafIds.set(id, realId);
        }
    }
    callRef(times);
    return id;
}
$aee939dffebaf255$export$2e2bcd8739ae039.cancel = function(id) {
    var realId = $aee939dffebaf255$var$rafIds.get(id);
    $aee939dffebaf255$var$cleanup(realId);
    return $aee939dffebaf255$var$caf(realId);
};


function $efb4f91f6823d701$export$2e2bcd8739ae039(root, n) {
    if (!root) return false;
     // Use native if support
    if (root.contains) return root.contains(n);
     // `document.contains` not support with IE11
    var node = n;
    while(node){
        if (node === root) return true;
        node = node.parentNode;
    }
    return false;
}



function $125a13f4563f8837$export$2e2bcd8739ae039(node) {
    if (node instanceof HTMLElement) return node;
    return (0, $fP0te$reactdom).findDOMNode(node);
}



var $1d4a6c8a285b44b4$exports = {};
"use strict";

$1d4a6c8a285b44b4$exports = (parcelRequire("j0NxI"));



function $b2a7a5b6bf0d420c$export$2e2bcd8739ae039(getValue, condition, shouldUpdate) {
    var cacheRef = $fP0te$useRef({});
    if (!("value" in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
        cacheRef.current.value = getValue();
        cacheRef.current.condition = condition;
    }
    return cacheRef.current.value;
}


function $225049917dd1e288$export$f17fd18fa51dcb5b(ref, node) {
    if (typeof ref === "function") ref(node);
    else if ((0, $f301c3a9cca1c45b$export$2e2bcd8739ae039)(ref) === "object" && ref && "current" in ref) ref.current = node;
}
function $225049917dd1e288$export$ab452c34e8e05029() {
    for(var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++)refs[_key] = arguments[_key];
    var refList = refs.filter(function(ref) {
        return ref;
    });
    if (refList.length <= 1) return refList[0];
    return function(node) {
        refs.forEach(function(ref) {
            $225049917dd1e288$export$f17fd18fa51dcb5b(ref, node);
        });
    };
}
function $225049917dd1e288$export$1d1c999670a1285d() {
    for(var _len2 = arguments.length, refs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)refs[_key2] = arguments[_key2];
    return (0, $b2a7a5b6bf0d420c$export$2e2bcd8739ae039)(function() {
        return $225049917dd1e288$export$ab452c34e8e05029.apply(void 0, refs);
    }, refs, function(prev, next) {
        return prev.length === next.length && prev.every(function(ref, i) {
            return ref === next[i];
        });
    });
}
function $225049917dd1e288$export$c1cec34af06bcf7(nodeOrComponent) {
    var _type$prototype, _nodeOrComponent$prot;
    var type = (0, $1d4a6c8a285b44b4$exports.isMemo)(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type; // Function component node
    if (typeof type === "function" && !((_type$prototype = type.prototype) === null || _type$prototype === void 0 ? void 0 : _type$prototype.render)) return false;
     // Class component
    if (typeof nodeOrComponent === "function" && !((_nodeOrComponent$prot = nodeOrComponent.prototype) === null || _nodeOrComponent$prot === void 0 ? void 0 : _nodeOrComponent$prot.render)) return false;
    return true;
} /* eslint-enable */ 





function $10691ee22657bd97$export$2e2bcd8739ae039() {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}


var $027f2ae20988aa1f$var$Portal = /*#__PURE__*/ (0, $fP0te$forwardRef)(function(props, ref) {
    var didUpdate = props.didUpdate, getContainer = props.getContainer, children = props.children;
    var parentRef = (0, $fP0te$useRef)();
    var containerRef = (0, $fP0te$useRef)(); // Ref return nothing, only for wrapper check exist
    (0, $fP0te$useImperativeHandle)(ref, function() {
        return {};
    }); // Create container in client side with sync to avoid useEffect not get ref
    var initRef = (0, $fP0te$useRef)(false);
    if (!initRef.current && (0, $10691ee22657bd97$export$2e2bcd8739ae039)()) {
        containerRef.current = getContainer();
        parentRef.current = containerRef.current.parentNode;
        initRef.current = true;
    } // [Legacy] Used by `rc-trigger`
    (0, $fP0te$useEffect)(function() {
        didUpdate === null || didUpdate === void 0 || didUpdate(props);
    });
    (0, $fP0te$useEffect)(function() {
        // Restore container to original place
        // React 18 StrictMode will unmount first and mount back for effect test:
        // https://reactjs.org/blog/2022/03/29/react-v18.html#new-strict-mode-behaviors
        if (containerRef.current.parentNode === null && parentRef.current !== null) parentRef.current.appendChild(containerRef.current);
        return function() {
            var _containerRef$current, _containerRef$current2;
            // [Legacy] This should not be handle by Portal but parent PortalWrapper instead.
            // Since some component use `Portal` directly, we have to keep the logic here.
            (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 || (_containerRef$current2 = _containerRef$current.parentNode) === null || _containerRef$current2 === void 0 || _containerRef$current2.removeChild(containerRef.current);
        };
    }, []);
    return containerRef.current ? /*#__PURE__*/ (0, $fP0te$reactdom).createPortal(children, containerRef.current) : null;
});
var $027f2ae20988aa1f$export$2e2bcd8739ae039 = $027f2ae20988aa1f$var$Portal;




function $3b9d6b9665ba1406$var$isPointsEq(a1, a2, isAlignPoint) {
    if (isAlignPoint) return a1[0] === a2[0];
    return a1[0] === a2[0] && a1[1] === a2[1];
}
function $3b9d6b9665ba1406$export$44605b74f7c5d944(builtinPlacements, placementStr, align) {
    var baseAlign = builtinPlacements[placementStr] || {};
    return (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, baseAlign), align);
}
function $3b9d6b9665ba1406$export$faa0aa8ed2fe6432(builtinPlacements, prefixCls, align, isAlignPoint) {
    var points = align.points;
    var placements = Object.keys(builtinPlacements);
    for(var i = 0; i < placements.length; i += 1){
        var placement = placements[i];
        if ($3b9d6b9665ba1406$var$isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) return "".concat(prefixCls, "-placement-").concat(placement);
    }
    return "";
}




function $683bfc9fff16f550$export$2e2bcd8739ae039(arr) {
    if (Array.isArray(arr)) return arr;
}


function $422595f4db4dc9a3$export$2e2bcd8739ae039(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}



function $7d08c9cf384f283d$export$2e2bcd8739ae039() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


function $8634a4ebc2135fc2$export$2e2bcd8739ae039(arr, i) {
    return (0, $683bfc9fff16f550$export$2e2bcd8739ae039)(arr) || (0, $422595f4db4dc9a3$export$2e2bcd8739ae039)(arr, i) || (0, $fb700726099b2aab$export$2e2bcd8739ae039)(arr, i) || (0, $7d08c9cf384f283d$export$2e2bcd8739ae039)();
}





var $06f42c74412f9c1b$export$2e2bcd8739ae039 = function() {
    if (typeof navigator === "undefined" || typeof window === "undefined") return false;
    var agent = navigator.userAgent || navigator.vendor || window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(agent === null || agent === void 0 ? void 0 : agent.substr(0, 4));
};

















// Event wrapper. Copy from react source code
function $ba36ad3e2379e8f6$var$makePrefixMap(styleProp, eventName) {
    var prefixes = {};
    prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
    prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
    prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
    prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
    prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
    return prefixes;
}
function $ba36ad3e2379e8f6$export$6e8b350b1a8958a0(domSupport, win) {
    var prefixes = {
        animationend: $ba36ad3e2379e8f6$var$makePrefixMap("Animation", "AnimationEnd"),
        transitionend: $ba36ad3e2379e8f6$var$makePrefixMap("Transition", "TransitionEnd")
    };
    if (domSupport) {
        if (!("AnimationEvent" in win)) delete prefixes.animationend.animation;
        if (!("TransitionEvent" in win)) delete prefixes.transitionend.transition;
    }
    return prefixes;
}
var $ba36ad3e2379e8f6$var$vendorPrefixes = $ba36ad3e2379e8f6$export$6e8b350b1a8958a0((0, $10691ee22657bd97$export$2e2bcd8739ae039)(), typeof window !== "undefined" ? window : {});
var $ba36ad3e2379e8f6$var$style = {};
if ((0, $10691ee22657bd97$export$2e2bcd8739ae039)()) {
    var $ba36ad3e2379e8f6$var$_document$createEleme = document.createElement("div");
    $ba36ad3e2379e8f6$var$style = $ba36ad3e2379e8f6$var$_document$createEleme.style;
}
var $ba36ad3e2379e8f6$var$prefixedEventNames = {};
function $ba36ad3e2379e8f6$export$a032e4f39350c1d8(eventName) {
    if ($ba36ad3e2379e8f6$var$prefixedEventNames[eventName]) return $ba36ad3e2379e8f6$var$prefixedEventNames[eventName];
    var prefixMap = $ba36ad3e2379e8f6$var$vendorPrefixes[eventName];
    if (prefixMap) {
        var stylePropList = Object.keys(prefixMap);
        var len = stylePropList.length;
        for(var i = 0; i < len; i += 1){
            var styleProp = stylePropList[i];
            if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in $ba36ad3e2379e8f6$var$style) {
                $ba36ad3e2379e8f6$var$prefixedEventNames[eventName] = prefixMap[styleProp];
                return $ba36ad3e2379e8f6$var$prefixedEventNames[eventName];
            }
        }
    }
    return "";
}
var $ba36ad3e2379e8f6$var$internalAnimationEndName = $ba36ad3e2379e8f6$export$a032e4f39350c1d8("animationend");
var $ba36ad3e2379e8f6$var$internalTransitionEndName = $ba36ad3e2379e8f6$export$a032e4f39350c1d8("transitionend");
var $ba36ad3e2379e8f6$export$d28133ed3ad06c8b = !!($ba36ad3e2379e8f6$var$internalAnimationEndName && $ba36ad3e2379e8f6$var$internalTransitionEndName);
var $ba36ad3e2379e8f6$export$760cc9769c51b738 = $ba36ad3e2379e8f6$var$internalAnimationEndName || "animationend";
var $ba36ad3e2379e8f6$export$44baea64b8602e3c = $ba36ad3e2379e8f6$var$internalTransitionEndName || "transitionend";
function $ba36ad3e2379e8f6$export$27c72201b1d09951(transitionName, transitionType) {
    if (!transitionName) return null;
    if ((0, $f301c3a9cca1c45b$export$2e2bcd8739ae039)(transitionName) === "object") {
        var type = transitionType.replace(/-\w/g, function(match) {
            return match[1].toUpperCase();
        });
        return transitionName[type];
    }
    return "".concat(transitionName, "-").concat(transitionType);
}


var $5d1a3fea5d1d828b$export$de71442bbf2143da = "none";
var $5d1a3fea5d1d828b$export$4fc3521687bcacd2 = "appear";
var $5d1a3fea5d1d828b$export$5d6af549241fe2e8 = "enter";
var $5d1a3fea5d1d828b$export$59b1c493d29f68e4 = "leave";
var $5d1a3fea5d1d828b$export$40b34dd77d5522bf = "none";
var $5d1a3fea5d1d828b$export$1b792916a5fac4fc = "prepare";
var $5d1a3fea5d1d828b$export$9563153dd25a3ce8 = "start";
var $5d1a3fea5d1d828b$export$e205886172277ec6 = "active";
var $5d1a3fea5d1d828b$export$3a846c3d2fac10b8 = "end";









function $cc675eee28d460e9$export$2e2bcd8739ae039(defaultValue) {
    var destroyRef = $fP0te$useRef(false);
    var _React$useState = $fP0te$useState(defaultValue), _React$useState2 = (0, $8634a4ebc2135fc2$export$2e2bcd8739ae039)(_React$useState, 2), value = _React$useState2[0], setValue = _React$useState2[1];
    $fP0te$useEffect(function() {
        destroyRef.current = false;
        return function() {
            destroyRef.current = true;
        };
    }, []);
    function safeSetState(updater, ignoreDestroy) {
        if (ignoreDestroy && destroyRef.current) return;
        setValue(updater);
    }
    return [
        value,
        safeSetState
    ];
}









var $b5e831540d896356$export$2e2bcd8739ae039 = function() {
    var nextFrameRef = $fP0te$useRef(null);
    function cancelNextFrame() {
        (0, $aee939dffebaf255$export$2e2bcd8739ae039).cancel(nextFrameRef.current);
    }
    function nextFrame(callback) {
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
        cancelNextFrame();
        var nextFrameId = (0, $aee939dffebaf255$export$2e2bcd8739ae039)(function() {
            if (delay <= 1) callback({
                isCanceled: function isCanceled() {
                    return nextFrameId !== nextFrameRef.current;
                }
            });
            else nextFrame(callback, delay - 1);
        });
        nextFrameRef.current = nextFrameId;
    }
    $fP0te$useEffect(function() {
        return function() {
            cancelNextFrame();
        };
    }, []);
    return [
        nextFrame,
        cancelNextFrame
    ];
};




var $95e6853bee6c2ad1$var$useIsomorphicLayoutEffect = (0, $10691ee22657bd97$export$2e2bcd8739ae039)() ? (0, $fP0te$useLayoutEffect) : (0, $fP0te$useEffect);
var $95e6853bee6c2ad1$export$2e2bcd8739ae039 = $95e6853bee6c2ad1$var$useIsomorphicLayoutEffect;


var $7a9a45c2c8de3a99$var$STEP_QUEUE = [
    (0, $5d1a3fea5d1d828b$export$1b792916a5fac4fc),
    (0, $5d1a3fea5d1d828b$export$9563153dd25a3ce8),
    (0, $5d1a3fea5d1d828b$export$e205886172277ec6),
    (0, $5d1a3fea5d1d828b$export$3a846c3d2fac10b8)
];
var $7a9a45c2c8de3a99$export$c2029bf6cfdbc28a = false;
var $7a9a45c2c8de3a99$export$dbee1e282e8c4830 = true;
function $7a9a45c2c8de3a99$export$39e04e72f972b885(step) {
    return step === (0, $5d1a3fea5d1d828b$export$e205886172277ec6) || step === (0, $5d1a3fea5d1d828b$export$3a846c3d2fac10b8);
}
var $7a9a45c2c8de3a99$export$2e2bcd8739ae039 = function(status, callback) {
    var _useState = (0, $cc675eee28d460e9$export$2e2bcd8739ae039)((0, $5d1a3fea5d1d828b$export$40b34dd77d5522bf)), _useState2 = (0, $8634a4ebc2135fc2$export$2e2bcd8739ae039)(_useState, 2), step = _useState2[0], setStep = _useState2[1];
    var _useNextFrame = (0, $b5e831540d896356$export$2e2bcd8739ae039)(), _useNextFrame2 = (0, $8634a4ebc2135fc2$export$2e2bcd8739ae039)(_useNextFrame, 2), nextFrame = _useNextFrame2[0], cancelNextFrame = _useNextFrame2[1];
    function startQueue() {
        setStep((0, $5d1a3fea5d1d828b$export$1b792916a5fac4fc), true);
    }
    (0, $95e6853bee6c2ad1$export$2e2bcd8739ae039)(function() {
        if (step !== (0, $5d1a3fea5d1d828b$export$40b34dd77d5522bf) && step !== (0, $5d1a3fea5d1d828b$export$3a846c3d2fac10b8)) {
            var index = $7a9a45c2c8de3a99$var$STEP_QUEUE.indexOf(step);
            var nextStep = $7a9a45c2c8de3a99$var$STEP_QUEUE[index + 1];
            var result = callback(step);
            if (result === $7a9a45c2c8de3a99$export$c2029bf6cfdbc28a) // Skip when no needed
            setStep(nextStep, true);
            else // Do as frame for step update
            nextFrame(function(info) {
                function doNext() {
                    // Skip since current queue is ood
                    if (info.isCanceled()) return;
                    setStep(nextStep, true);
                }
                if (result === true) doNext();
                else // Only promise should be async
                Promise.resolve(result).then(doNext);
            });
        }
    }, [
        status,
        step
    ]);
    $fP0te$useEffect(function() {
        return function() {
            cancelNextFrame();
        };
    }, []);
    return [
        startQueue,
        step
    ];
};





var $89e9ade2a5726666$export$2e2bcd8739ae039 = function(callback) {
    var cacheElementRef = (0, $fP0te$useRef)(); // Cache callback
    var callbackRef = (0, $fP0te$useRef)(callback);
    callbackRef.current = callback; // Internal motion event handler
    var onInternalMotionEnd = $fP0te$useCallback(function(event) {
        callbackRef.current(event);
    }, []); // Remove events
    function removeMotionEvents(element) {
        if (element) {
            element.removeEventListener((0, $ba36ad3e2379e8f6$export$44baea64b8602e3c), onInternalMotionEnd);
            element.removeEventListener((0, $ba36ad3e2379e8f6$export$760cc9769c51b738), onInternalMotionEnd);
        }
    } // Patch events
    function patchMotionEvents(element) {
        if (cacheElementRef.current && cacheElementRef.current !== element) removeMotionEvents(cacheElementRef.current);
        if (element && element !== cacheElementRef.current) {
            element.addEventListener((0, $ba36ad3e2379e8f6$export$44baea64b8602e3c), onInternalMotionEnd);
            element.addEventListener((0, $ba36ad3e2379e8f6$export$760cc9769c51b738), onInternalMotionEnd); // Save as cache in case dom removed trigger by `motionDeadline`
            cacheElementRef.current = element;
        }
    } // Clean up when removed
    $fP0te$useEffect(function() {
        return function() {
            removeMotionEvents(cacheElementRef.current);
        };
    }, []);
    return [
        patchMotionEvents,
        removeMotionEvents
    ];
};



function $ca3a412deb2c60ec$export$2e2bcd8739ae039(supportMotion, visible, getElement, _ref) {
    var _ref$motionEnter = _ref.motionEnter, motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter, _ref$motionAppear = _ref.motionAppear, motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear, _ref$motionLeave = _ref.motionLeave, motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave, motionDeadline = _ref.motionDeadline, motionLeaveImmediately = _ref.motionLeaveImmediately, onAppearPrepare = _ref.onAppearPrepare, onEnterPrepare = _ref.onEnterPrepare, onLeavePrepare = _ref.onLeavePrepare, onAppearStart = _ref.onAppearStart, onEnterStart = _ref.onEnterStart, onLeaveStart = _ref.onLeaveStart, onAppearActive = _ref.onAppearActive, onEnterActive = _ref.onEnterActive, onLeaveActive = _ref.onLeaveActive, onAppearEnd = _ref.onAppearEnd, onEnterEnd = _ref.onEnterEnd, onLeaveEnd = _ref.onLeaveEnd, onVisibleChanged = _ref.onVisibleChanged;
    // Used for outer render usage to avoid `visible: false & status: none` to render nothing
    var _useState = (0, $cc675eee28d460e9$export$2e2bcd8739ae039)(), _useState2 = (0, $8634a4ebc2135fc2$export$2e2bcd8739ae039)(_useState, 2), asyncVisible = _useState2[0], setAsyncVisible = _useState2[1];
    var _useState3 = (0, $cc675eee28d460e9$export$2e2bcd8739ae039)((0, $5d1a3fea5d1d828b$export$de71442bbf2143da)), _useState4 = (0, $8634a4ebc2135fc2$export$2e2bcd8739ae039)(_useState3, 2), status = _useState4[0], setStatus = _useState4[1];
    var _useState5 = (0, $cc675eee28d460e9$export$2e2bcd8739ae039)(null), _useState6 = (0, $8634a4ebc2135fc2$export$2e2bcd8739ae039)(_useState5, 2), style = _useState6[0], setStyle = _useState6[1];
    var mountedRef = (0, $fP0te$useRef)(false);
    var deadlineRef = (0, $fP0te$useRef)(null); // =========================== Dom Node ===========================
    function getDomElement() {
        return getElement();
    } // ========================== Motion End ==========================
    var activeRef = (0, $fP0te$useRef)(false);
    function onInternalMotionEnd(event) {
        var element = getDomElement();
        if (event && !event.deadline && event.target !== element) // event exists
        // not initiated by deadline
        // transitionEnd not fired by inner elements
        return;
        var currentActive = activeRef.current;
        var canEnd;
        if (status === (0, $5d1a3fea5d1d828b$export$4fc3521687bcacd2) && currentActive) canEnd = onAppearEnd === null || onAppearEnd === void 0 ? void 0 : onAppearEnd(element, event);
        else if (status === (0, $5d1a3fea5d1d828b$export$5d6af549241fe2e8) && currentActive) canEnd = onEnterEnd === null || onEnterEnd === void 0 ? void 0 : onEnterEnd(element, event);
        else if (status === (0, $5d1a3fea5d1d828b$export$59b1c493d29f68e4) && currentActive) canEnd = onLeaveEnd === null || onLeaveEnd === void 0 ? void 0 : onLeaveEnd(element, event);
         // Only update status when `canEnd` and not destroyed
        if (status !== (0, $5d1a3fea5d1d828b$export$de71442bbf2143da) && currentActive && canEnd !== false) {
            setStatus((0, $5d1a3fea5d1d828b$export$de71442bbf2143da), true);
            setStyle(null, true);
        }
    }
    var _useDomMotionEvents = (0, $89e9ade2a5726666$export$2e2bcd8739ae039)(onInternalMotionEnd), _useDomMotionEvents2 = (0, $8634a4ebc2135fc2$export$2e2bcd8739ae039)(_useDomMotionEvents, 1), patchMotionEvents = _useDomMotionEvents2[0]; // ============================= Step =============================
    var eventHandlers = $fP0te$useMemo(function() {
        var _ref2, _ref3, _ref4;
        switch(status){
            case 0, $5d1a3fea5d1d828b$export$4fc3521687bcacd2:
                return _ref2 = {}, (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_ref2, (0, $5d1a3fea5d1d828b$export$1b792916a5fac4fc), onAppearPrepare), (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_ref2, (0, $5d1a3fea5d1d828b$export$9563153dd25a3ce8), onAppearStart), (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_ref2, (0, $5d1a3fea5d1d828b$export$e205886172277ec6), onAppearActive), _ref2;
            case 0, $5d1a3fea5d1d828b$export$5d6af549241fe2e8:
                return _ref3 = {}, (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_ref3, (0, $5d1a3fea5d1d828b$export$1b792916a5fac4fc), onEnterPrepare), (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_ref3, (0, $5d1a3fea5d1d828b$export$9563153dd25a3ce8), onEnterStart), (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_ref3, (0, $5d1a3fea5d1d828b$export$e205886172277ec6), onEnterActive), _ref3;
            case 0, $5d1a3fea5d1d828b$export$59b1c493d29f68e4:
                return _ref4 = {}, (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_ref4, (0, $5d1a3fea5d1d828b$export$1b792916a5fac4fc), onLeavePrepare), (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_ref4, (0, $5d1a3fea5d1d828b$export$9563153dd25a3ce8), onLeaveStart), (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_ref4, (0, $5d1a3fea5d1d828b$export$e205886172277ec6), onLeaveActive), _ref4;
            default:
                return {};
        }
    }, [
        status
    ]);
    var _useStepQueue = (0, $7a9a45c2c8de3a99$export$2e2bcd8739ae039)(status, function(newStep) {
        // Only prepare step can be skip
        if (newStep === (0, $5d1a3fea5d1d828b$export$1b792916a5fac4fc)) {
            var onPrepare = eventHandlers[0, $5d1a3fea5d1d828b$export$1b792916a5fac4fc];
            if (!onPrepare) return 0, $7a9a45c2c8de3a99$export$c2029bf6cfdbc28a;
            return onPrepare(getDomElement());
        } // Rest step is sync update
        // Rest step is sync update
        if (step in eventHandlers) {
            var _eventHandlers$step;
            setStyle(((_eventHandlers$step = eventHandlers[step]) === null || _eventHandlers$step === void 0 ? void 0 : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null);
        }
        if (step === (0, $5d1a3fea5d1d828b$export$e205886172277ec6)) {
            // Patch events when motion needed
            patchMotionEvents(getDomElement());
            if (motionDeadline > 0) {
                clearTimeout(deadlineRef.current);
                deadlineRef.current = setTimeout(function() {
                    onInternalMotionEnd({
                        deadline: true
                    });
                }, motionDeadline);
            }
        }
        return 0, $7a9a45c2c8de3a99$export$dbee1e282e8c4830;
    }), _useStepQueue2 = (0, $8634a4ebc2135fc2$export$2e2bcd8739ae039)(_useStepQueue, 2), startStep = _useStepQueue2[0], step = _useStepQueue2[1];
    var active = (0, $7a9a45c2c8de3a99$export$39e04e72f972b885)(step);
    activeRef.current = active; // ============================ Status ============================
    // Update with new status
    (0, $95e6853bee6c2ad1$export$2e2bcd8739ae039)(function() {
        setAsyncVisible(visible);
        var isMounted = mountedRef.current;
        mountedRef.current = true;
        if (!supportMotion) return;
        var nextStatus; // Appear
        if (!isMounted && visible && motionAppear) nextStatus = (0, $5d1a3fea5d1d828b$export$4fc3521687bcacd2);
         // Enter
        if (isMounted && visible && motionEnter) nextStatus = (0, $5d1a3fea5d1d828b$export$5d6af549241fe2e8);
         // Leave
        if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) nextStatus = (0, $5d1a3fea5d1d828b$export$59b1c493d29f68e4);
         // Update to next status
        if (nextStatus) {
            setStatus(nextStatus);
            startStep();
        }
    }, [
        visible
    ]); // ============================ Effect ============================
    // Reset when motion changed
    (0, $fP0te$useEffect)(function() {
        if (status === (0, $5d1a3fea5d1d828b$export$4fc3521687bcacd2) && !motionAppear || status === (0, $5d1a3fea5d1d828b$export$5d6af549241fe2e8) && !motionEnter || status === (0, $5d1a3fea5d1d828b$export$59b1c493d29f68e4) && !motionLeave) setStatus((0, $5d1a3fea5d1d828b$export$de71442bbf2143da));
    }, [
        motionAppear,
        motionEnter,
        motionLeave
    ]);
    (0, $fP0te$useEffect)(function() {
        return function() {
            mountedRef.current = false;
            clearTimeout(deadlineRef.current);
        };
    }, []); // Trigger `onVisibleChanged`
    var firstMountChangeRef = $fP0te$useRef(false);
    (0, $fP0te$useEffect)(function() {
        // [visible & motion not end] => [!visible & motion end] still need trigger onVisibleChanged
        if (asyncVisible) firstMountChangeRef.current = true;
        if (asyncVisible !== undefined && status === (0, $5d1a3fea5d1d828b$export$de71442bbf2143da)) {
            // Skip first render is invisible since it's nothing changed
            if (firstMountChangeRef.current || asyncVisible) onVisibleChanged === null || onVisibleChanged === void 0 || onVisibleChanged(asyncVisible);
            firstMountChangeRef.current = true;
        }
    }, [
        asyncVisible,
        status
    ]); // ============================ Styles ============================
    var mergedStyle = style;
    if (eventHandlers[0, $5d1a3fea5d1d828b$export$1b792916a5fac4fc] && step === (0, $5d1a3fea5d1d828b$export$9563153dd25a3ce8)) mergedStyle = (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({
        transition: "none"
    }, mergedStyle);
    return [
        status,
        step,
        mergedStyle,
        asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible
    ];
}







var $03e5e234e95e46ba$var$DomWrapper = /*#__PURE__*/ function(_React$Component) {
    (0, $6a6e2222e4757b72$export$2e2bcd8739ae039)(DomWrapper, _React$Component);
    var _super = (0, $4f1a33a2878c5918$export$2e2bcd8739ae039)(DomWrapper);
    function DomWrapper() {
        (0, $ee5c3d0d33581caa$export$2e2bcd8739ae039)(this, DomWrapper);
        return _super.apply(this, arguments);
    }
    (0, $0d7f289b36132a60$export$2e2bcd8739ae039)(DomWrapper, [
        {
            key: "render",
            value: function render() {
                return this.props.children;
            }
        }
    ]);
    return DomWrapper;
}($fP0te$Component);
var $03e5e234e95e46ba$export$2e2bcd8739ae039 = $03e5e234e95e46ba$var$DomWrapper;



function $ecfe8006720bc319$export$e265d52a86a9f199(config) {
    var transitionSupport = config;
    if ((0, $f301c3a9cca1c45b$export$2e2bcd8739ae039)(config) === "object") transitionSupport = config.transitionSupport;
    function isSupportTransition(props) {
        return !!(props.motionName && transitionSupport);
    }
    var CSSMotion = /*#__PURE__*/ $fP0te$forwardRef(function(props, ref) {
        var _props$visible = props.visible, visible = _props$visible === void 0 ? true : _props$visible, _props$removeOnLeave = props.removeOnLeave, removeOnLeave = _props$removeOnLeave === void 0 ? true : _props$removeOnLeave, forceRender = props.forceRender, children = props.children, motionName = props.motionName, leavedClassName = props.leavedClassName, eventProps = props.eventProps;
        var supportMotion = isSupportTransition(props); // Ref to the react node, it may be a HTMLElement
        var nodeRef = (0, $fP0te$useRef)(); // Ref to the dom wrapper in case ref can not pass to HTMLElement
        var wrapperNodeRef = (0, $fP0te$useRef)();
        function getDomElement() {
            try {
                // Here we're avoiding call for findDOMNode since it's deprecated
                // in strict mode. We're calling it only when node ref is not
                // an instance of DOM HTMLElement. Otherwise use
                // findDOMNode as a final resort
                return nodeRef.current instanceof HTMLElement ? nodeRef.current : (0, $125a13f4563f8837$export$2e2bcd8739ae039)(wrapperNodeRef.current);
            } catch (e) {
                // Only happen when `motionDeadline` trigger but element removed.
                return null;
            }
        }
        var _useStatus = (0, $ca3a412deb2c60ec$export$2e2bcd8739ae039)(supportMotion, visible, getDomElement, props), _useStatus2 = (0, $8634a4ebc2135fc2$export$2e2bcd8739ae039)(_useStatus, 4), status = _useStatus2[0], statusStep = _useStatus2[1], statusStyle = _useStatus2[2], mergedVisible = _useStatus2[3]; // Record whether content has rendered
        // Will return null for un-rendered even when `removeOnLeave={false}`
        var renderedRef = $fP0te$useRef(mergedVisible);
        if (mergedVisible) renderedRef.current = true;
         // ====================== Refs ======================
        var setNodeRef = $fP0te$useCallback(function(node) {
            nodeRef.current = node;
            (0, $225049917dd1e288$export$f17fd18fa51dcb5b)(ref, node);
        }, [
            ref
        ]); // ===================== Render =====================
        var motionChildren;
        var mergedProps = (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, eventProps), {}, {
            visible: visible
        });
        if (!children) // No children
        motionChildren = null;
        else if (status === (0, $5d1a3fea5d1d828b$export$de71442bbf2143da) || !isSupportTransition(props)) {
            // Stable children
            if (mergedVisible) motionChildren = children((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, mergedProps), setNodeRef);
            else if (!removeOnLeave && renderedRef.current) motionChildren = children((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, mergedProps), {}, {
                className: leavedClassName
            }), setNodeRef);
            else if (forceRender) motionChildren = children((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, mergedProps), {}, {
                style: {
                    display: "none"
                }
            }), setNodeRef);
            else motionChildren = null;
        } else {
            var _classNames;
            // In motion
            var statusSuffix;
            if (statusStep === (0, $5d1a3fea5d1d828b$export$1b792916a5fac4fc)) statusSuffix = "prepare";
            else if ((0, $7a9a45c2c8de3a99$export$39e04e72f972b885)(statusStep)) statusSuffix = "active";
            else if (statusStep === (0, $5d1a3fea5d1d828b$export$9563153dd25a3ce8)) statusSuffix = "start";
            motionChildren = children((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, mergedProps), {}, {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($9eb44e11aa0ecd62$exports)))((0, $ba36ad3e2379e8f6$export$27c72201b1d09951)(motionName, status), (_classNames = {}, (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_classNames, (0, $ba36ad3e2379e8f6$export$27c72201b1d09951)(motionName, "".concat(status, "-").concat(statusSuffix)), statusSuffix), (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)(_classNames, motionName, typeof motionName === "string"), _classNames)),
                style: statusStyle
            }), setNodeRef);
        } // Auto inject ref if child node not have `ref` props
        if (/*#__PURE__*/ $fP0te$isValidElement(motionChildren) && (0, $225049917dd1e288$export$c1cec34af06bcf7)(motionChildren)) {
            var _motionChildren = motionChildren, originNodeRef = _motionChildren.ref;
            if (!originNodeRef) motionChildren = /*#__PURE__*/ $fP0te$cloneElement(motionChildren, {
                ref: setNodeRef
            });
        }
        return /*#__PURE__*/ $fP0te$createElement((0, $03e5e234e95e46ba$export$2e2bcd8739ae039), {
            ref: wrapperNodeRef
        }, motionChildren);
    });
    CSSMotion.displayName = "CSSMotion";
    return CSSMotion;
}
var $ecfe8006720bc319$export$2e2bcd8739ae039 = $ecfe8006720bc319$export$e265d52a86a9f199((0, $ba36ad3e2379e8f6$export$d28133ed3ad06c8b));














var $d97c38314e43bd06$export$3904baa009bc026e = "add";
var $d97c38314e43bd06$export$851162f0adad2cbc = "keep";
var $d97c38314e43bd06$export$c8b3fb08b68cfc85 = "remove";
var $d97c38314e43bd06$export$2ac1bd1808d2e43a = "removed";
function $d97c38314e43bd06$export$c47fd798e598c85c(key) {
    var keyObj;
    if (key && (0, $f301c3a9cca1c45b$export$2e2bcd8739ae039)(key) === "object" && "key" in key) keyObj = key;
    else keyObj = {
        key: key
    };
    return (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, keyObj), {}, {
        key: String(keyObj.key)
    });
}
function $d97c38314e43bd06$export$84bd7bd42ccc0f72() {
    var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return keys.map($d97c38314e43bd06$export$c47fd798e598c85c);
}
function $d97c38314e43bd06$export$14527669107aa301() {
    var prevKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var currentKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var list = [];
    var currentIndex = 0;
    var currentLen = currentKeys.length;
    var prevKeyObjects = $d97c38314e43bd06$export$84bd7bd42ccc0f72(prevKeys);
    var currentKeyObjects = $d97c38314e43bd06$export$84bd7bd42ccc0f72(currentKeys); // Check prev keys to insert or keep
    prevKeyObjects.forEach(function(keyObj) {
        var hit = false;
        for(var i = currentIndex; i < currentLen; i += 1){
            var currentKeyObj = currentKeyObjects[i];
            if (currentKeyObj.key === keyObj.key) {
                // New added keys should add before current key
                if (currentIndex < i) {
                    list = list.concat(currentKeyObjects.slice(currentIndex, i).map(function(obj) {
                        return (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, obj), {}, {
                            status: $d97c38314e43bd06$export$3904baa009bc026e
                        });
                    }));
                    currentIndex = i;
                }
                list.push((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, currentKeyObj), {}, {
                    status: $d97c38314e43bd06$export$851162f0adad2cbc
                }));
                currentIndex += 1;
                hit = true;
                break;
            }
        } // If not hit, it means key is removed
        if (!hit) list.push((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, keyObj), {}, {
            status: $d97c38314e43bd06$export$c8b3fb08b68cfc85
        }));
    }); // Add rest to the list
    if (currentIndex < currentLen) list = list.concat(currentKeyObjects.slice(currentIndex).map(function(obj) {
        return (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, obj), {}, {
            status: $d97c38314e43bd06$export$3904baa009bc026e
        });
    }));
    /**
   * Merge same key when it remove and add again:
   *    [1 - add, 2 - keep, 1 - remove] -> [1 - keep, 2 - keep]
   */ var keys = {};
    list.forEach(function(_ref) {
        var key = _ref.key;
        keys[key] = (keys[key] || 0) + 1;
    });
    var duplicatedKeys = Object.keys(keys).filter(function(key) {
        return keys[key] > 1;
    });
    duplicatedKeys.forEach(function(matchKey) {
        // Remove `STATUS_REMOVE` node.
        list = list.filter(function(_ref2) {
            var key = _ref2.key, status = _ref2.status;
            return key !== matchKey || status !== $d97c38314e43bd06$export$c8b3fb08b68cfc85;
        }); // Update `STATUS_ADD` to `STATUS_KEEP`
        list.forEach(function(node) {
            if (node.key === matchKey) // eslint-disable-next-line no-param-reassign
            node.status = $d97c38314e43bd06$export$851162f0adad2cbc;
        });
    });
    return list;
}


var $de2eb076cb409118$var$_excluded = [
    "component",
    "children",
    "onVisibleChanged",
    "onAllRemoved"
], $de2eb076cb409118$var$_excluded2 = [
    "status"
];
var $de2eb076cb409118$var$MOTION_PROP_NAMES = [
    "eventProps",
    "visible",
    "children",
    "motionName",
    "motionAppear",
    "motionEnter",
    "motionLeave",
    "motionLeaveImmediately",
    "motionDeadline",
    "removeOnLeave",
    "leavedClassName",
    "onAppearStart",
    "onAppearActive",
    "onAppearEnd",
    "onEnterStart",
    "onEnterActive",
    "onEnterEnd",
    "onLeaveStart",
    "onLeaveActive",
    "onLeaveEnd"
];
function $de2eb076cb409118$export$fcfc62c1d33d5e2e(transitionSupport) {
    var CSSMotion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, $ecfe8006720bc319$export$2e2bcd8739ae039);
    var CSSMotionList = /*#__PURE__*/ function(_React$Component) {
        (0, $6a6e2222e4757b72$export$2e2bcd8739ae039)(CSSMotionList, _React$Component);
        var _super = (0, $4f1a33a2878c5918$export$2e2bcd8739ae039)(CSSMotionList);
        function CSSMotionList() {
            var _this;
            (0, $ee5c3d0d33581caa$export$2e2bcd8739ae039)(this, CSSMotionList);
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            _this = _super.call.apply(_super, [
                this
            ].concat(args));
            _this.state = {
                keyEntities: []
            };
            _this.removeKey = function(removeKey) {
                var keyEntities = _this.state.keyEntities;
                var nextKeyEntities = keyEntities.map(function(entity) {
                    if (entity.key !== removeKey) return entity;
                    return (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, entity), {}, {
                        status: (0, $d97c38314e43bd06$export$2ac1bd1808d2e43a)
                    });
                });
                _this.setState({
                    keyEntities: nextKeyEntities
                });
                return nextKeyEntities.filter(function(_ref) {
                    var status = _ref.status;
                    return status !== (0, $d97c38314e43bd06$export$2ac1bd1808d2e43a);
                }).length;
            };
            return _this;
        }
        (0, $0d7f289b36132a60$export$2e2bcd8739ae039)(CSSMotionList, [
            {
                key: "render",
                value: function render() {
                    var _this2 = this;
                    var keyEntities = this.state.keyEntities;
                    var _this$props = this.props, component = _this$props.component, children = _this$props.children, _onVisibleChanged = _this$props.onVisibleChanged, onAllRemoved = _this$props.onAllRemoved, restProps = (0, $8267cf9e9a5b22d5$export$2e2bcd8739ae039)(_this$props, $de2eb076cb409118$var$_excluded);
                    var Component = component || $fP0te$Fragment;
                    var motionProps = {};
                    $de2eb076cb409118$var$MOTION_PROP_NAMES.forEach(function(prop) {
                        motionProps[prop] = restProps[prop];
                        delete restProps[prop];
                    });
                    delete restProps.keys;
                    return /*#__PURE__*/ $fP0te$createElement(Component, restProps, keyEntities.map(function(_ref2) {
                        var status = _ref2.status, eventProps = (0, $8267cf9e9a5b22d5$export$2e2bcd8739ae039)(_ref2, $de2eb076cb409118$var$_excluded2);
                        var visible = status === (0, $d97c38314e43bd06$export$3904baa009bc026e) || status === (0, $d97c38314e43bd06$export$851162f0adad2cbc);
                        return /*#__PURE__*/ $fP0te$createElement(CSSMotion, (0, $3d3ec4b4055bad86$export$2e2bcd8739ae039)({}, motionProps, {
                            key: eventProps.key,
                            visible: visible,
                            eventProps: eventProps,
                            onVisibleChanged: function onVisibleChanged(changedVisible) {
                                _onVisibleChanged === null || _onVisibleChanged === void 0 || _onVisibleChanged(changedVisible, {
                                    key: eventProps.key
                                });
                                if (!changedVisible) {
                                    var restKeysCount = _this2.removeKey(eventProps.key);
                                    if (restKeysCount === 0 && onAllRemoved) onAllRemoved();
                                }
                            }
                        }), children);
                    }));
                }
            }
        ], [
            {
                key: "getDerivedStateFromProps",
                value: function getDerivedStateFromProps(_ref3, _ref4) {
                    var keys = _ref3.keys;
                    var keyEntities = _ref4.keyEntities;
                    var parsedKeyObjects = (0, $d97c38314e43bd06$export$84bd7bd42ccc0f72)(keys);
                    var mixedKeyEntities = (0, $d97c38314e43bd06$export$14527669107aa301)(keyEntities, parsedKeyObjects);
                    return {
                        keyEntities: mixedKeyEntities.filter(function(entity) {
                            var prevEntity = keyEntities.find(function(_ref5) {
                                var key = _ref5.key;
                                return entity.key === key;
                            }); // Remove if already mark as removed
                            if (prevEntity && prevEntity.status === (0, $d97c38314e43bd06$export$2ac1bd1808d2e43a) && entity.status === (0, $d97c38314e43bd06$export$c8b3fb08b68cfc85)) return false;
                            return true;
                        })
                    };
                } // ZombieJ: Return the count of rest keys. It's safe to refactor if need more info.
            }
        ]);
        return CSSMotionList;
    }($fP0te$Component);
    CSSMotionList.defaultProps = {
        component: "div"
    };
    return CSSMotionList;
}
var $de2eb076cb409118$export$2e2bcd8739ae039 = $de2eb076cb409118$export$fcfc62c1d33d5e2e((0, $ba36ad3e2379e8f6$export$d28133ed3ad06c8b));


var $987f07a8d5eec425$export$2e2bcd8739ae039 = (0, $ecfe8006720bc319$export$2e2bcd8739ae039);


function $ce24257368d7fbd6$export$7b8936ddc277a29a(_ref) {
    var prefixCls = _ref.prefixCls, motion = _ref.motion, animation = _ref.animation, transitionName = _ref.transitionName;
    if (motion) return motion;
    if (animation) return {
        motionName: "".concat(prefixCls, "-").concat(animation)
    };
    if (transitionName) return {
        motionName: transitionName
    };
    return null;
}


function $557e8917951901d3$export$2e2bcd8739ae039(props) {
    var prefixCls = props.prefixCls, visible = props.visible, zIndex = props.zIndex, mask = props.mask, maskMotion = props.maskMotion, maskAnimation = props.maskAnimation, maskTransitionName = props.maskTransitionName;
    if (!mask) return null;
    var motion = {};
    if (maskMotion || maskTransitionName || maskAnimation) motion = (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({
        motionAppear: true
    }, (0, $ce24257368d7fbd6$export$7b8936ddc277a29a)({
        motion: maskMotion,
        prefixCls: prefixCls,
        transitionName: maskTransitionName,
        animation: maskAnimation
    }));
    return /*#__PURE__*/ $fP0te$createElement((0, $987f07a8d5eec425$export$2e2bcd8739ae039), (0, $3d3ec4b4055bad86$export$2e2bcd8739ae039)({}, motion, {
        visible: visible,
        removeOnLeave: true
    }), function(_ref) {
        var className = _ref.className;
        return /*#__PURE__*/ $fP0te$createElement("div", {
            style: {
                zIndex: zIndex
            },
            className: (0, (/*@__PURE__*/$parcel$interopDefault($9eb44e11aa0ecd62$exports)))("".concat(prefixCls, "-mask"), className)
        });
    });
}











var $373960f9d28bc40d$export$2e2bcd8739ae039 = function(element) {
    if (!element) return false;
    if (element instanceof HTMLElement && element.offsetParent) return true;
    if (element instanceof SVGGraphicsElement && element.getBBox) {
        var _element$getBBox = element.getBBox(), width = _element$getBBox.width, height = _element$getBBox.height;
        if (width || height) return true;
    }
    if (element instanceof HTMLElement && element.getBoundingClientRect) {
        var _element$getBoundingC = element.getBoundingClientRect(), _width = _element$getBoundingC.width, _height = _element$getBoundingC.height;
        if (_width || _height) return true;
    }
    return false;
};


function $39aaf537f648375f$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function $39aaf537f648375f$var$_objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) $39aaf537f648375f$var$ownKeys(Object(source), true).forEach(function(key) {
            $39aaf537f648375f$var$_defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else $39aaf537f648375f$var$ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function $39aaf537f648375f$var$_typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") $39aaf537f648375f$var$_typeof = function(obj) {
        return typeof obj;
    };
    else $39aaf537f648375f$var$_typeof = function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return $39aaf537f648375f$var$_typeof(obj);
}
function $39aaf537f648375f$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var $39aaf537f648375f$var$vendorPrefix;
var $39aaf537f648375f$var$jsCssMap = {
    Webkit: "-webkit-",
    Moz: "-moz-",
    // IE did it wrong again ...
    ms: "-ms-",
    O: "-o-"
};
function $39aaf537f648375f$var$getVendorPrefix() {
    if ($39aaf537f648375f$var$vendorPrefix !== undefined) return $39aaf537f648375f$var$vendorPrefix;
    $39aaf537f648375f$var$vendorPrefix = "";
    var style = document.createElement("p").style;
    var testProp = "Transform";
    for(var key in $39aaf537f648375f$var$jsCssMap)if (key + testProp in style) $39aaf537f648375f$var$vendorPrefix = key;
    return $39aaf537f648375f$var$vendorPrefix;
}
function $39aaf537f648375f$var$getTransitionName() {
    return $39aaf537f648375f$var$getVendorPrefix() ? "".concat($39aaf537f648375f$var$getVendorPrefix(), "TransitionProperty") : "transitionProperty";
}
function $39aaf537f648375f$var$getTransformName() {
    return $39aaf537f648375f$var$getVendorPrefix() ? "".concat($39aaf537f648375f$var$getVendorPrefix(), "Transform") : "transform";
}
function $39aaf537f648375f$var$setTransitionProperty(node, value) {
    var name = $39aaf537f648375f$var$getTransitionName();
    if (name) {
        node.style[name] = value;
        if (name !== "transitionProperty") node.style.transitionProperty = value;
    }
}
function $39aaf537f648375f$var$setTransform(node, value) {
    var name = $39aaf537f648375f$var$getTransformName();
    if (name) {
        node.style[name] = value;
        if (name !== "transform") node.style.transform = value;
    }
}
function $39aaf537f648375f$var$getTransitionProperty(node) {
    return node.style.transitionProperty || node.style[$39aaf537f648375f$var$getTransitionName()];
}
function $39aaf537f648375f$var$getTransformXY(node) {
    var style = window.getComputedStyle(node, null);
    var transform = style.getPropertyValue("transform") || style.getPropertyValue($39aaf537f648375f$var$getTransformName());
    if (transform && transform !== "none") {
        var matrix = transform.replace(/[^0-9\-.,]/g, "").split(",");
        return {
            x: parseFloat(matrix[12] || matrix[4], 0),
            y: parseFloat(matrix[13] || matrix[5], 0)
        };
    }
    return {
        x: 0,
        y: 0
    };
}
var $39aaf537f648375f$var$matrix2d = /matrix\((.*)\)/;
var $39aaf537f648375f$var$matrix3d = /matrix3d\((.*)\)/;
function $39aaf537f648375f$var$setTransformXY(node, xy) {
    var style = window.getComputedStyle(node, null);
    var transform = style.getPropertyValue("transform") || style.getPropertyValue($39aaf537f648375f$var$getTransformName());
    if (transform && transform !== "none") {
        var arr;
        var match2d = transform.match($39aaf537f648375f$var$matrix2d);
        if (match2d) {
            match2d = match2d[1];
            arr = match2d.split(",").map(function(item) {
                return parseFloat(item, 10);
            });
            arr[4] = xy.x;
            arr[5] = xy.y;
            $39aaf537f648375f$var$setTransform(node, "matrix(".concat(arr.join(","), ")"));
        } else {
            var match3d = transform.match($39aaf537f648375f$var$matrix3d)[1];
            arr = match3d.split(",").map(function(item) {
                return parseFloat(item, 10);
            });
            arr[12] = xy.x;
            arr[13] = xy.y;
            $39aaf537f648375f$var$setTransform(node, "matrix3d(".concat(arr.join(","), ")"));
        }
    } else $39aaf537f648375f$var$setTransform(node, "translateX(".concat(xy.x, "px) translateY(").concat(xy.y, "px) translateZ(0)"));
}
var $39aaf537f648375f$var$RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
var $39aaf537f648375f$var$getComputedStyleX; // https://stackoverflow.com/a/3485654/3040605
function $39aaf537f648375f$var$forceRelayout(elem) {
    var originalStyle = elem.style.display;
    elem.style.display = "none";
    elem.offsetHeight; // eslint-disable-line
    elem.style.display = originalStyle;
}
function $39aaf537f648375f$var$css(el, name, v) {
    var value = v;
    if ($39aaf537f648375f$var$_typeof(name) === "object") {
        for(var i in name)if (name.hasOwnProperty(i)) $39aaf537f648375f$var$css(el, i, name[i]);
        return undefined;
    }
    if (typeof value !== "undefined") {
        if (typeof value === "number") value = "".concat(value, "px");
        el.style[name] = value;
        return undefined;
    }
    return $39aaf537f648375f$var$getComputedStyleX(el, name);
}
function $39aaf537f648375f$var$getClientPosition(elem) {
    var box;
    var x;
    var y;
    var doc = elem.ownerDocument;
    var body = doc.body;
    var docElem = doc && doc.documentElement; // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
    box = elem.getBoundingClientRect(); // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
    // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
    // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin
    x = Math.floor(box.left);
    y = Math.floor(box.top); // In IE, most of the time, 2 extra pixels are added to the top and left
    // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
    // IE6 standards mode, this border can be overridden by setting the
    // document element's border to zero -- thus, we cannot rely on the
    // offset always being 2 pixels.
    // In quirks mode, the offset can be determined by querying the body's
    // clientLeft/clientTop, but in standards mode, it is found by querying
    // the document element's clientLeft/clientTop.  Since we already called
    // getClientBoundingRect we have already forced a reflow, so it is not
    // too expensive just to query them all.
    // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
    // 窗口边框标准是设 documentElement ,quirks 时设置 body
    // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
    // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
    // 标准 ie 下 docElem.clientTop 就是 border-top
    // ie7 html 即窗口边框改变不了。永远为 2
    // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0
    x -= docElem.clientLeft || body.clientLeft || 0;
    y -= docElem.clientTop || body.clientTop || 0;
    return {
        left: x,
        top: y
    };
}
function $39aaf537f648375f$var$getScroll(w, top) {
    var ret = w["page".concat(top ? "Y" : "X", "Offset")];
    var method = "scroll".concat(top ? "Top" : "Left");
    if (typeof ret !== "number") {
        var d = w.document; // ie6,7,8 standard mode
        ret = d.documentElement[method];
        if (typeof ret !== "number") // quirks mode
        ret = d.body[method];
    }
    return ret;
}
function $39aaf537f648375f$var$getScrollLeft(w) {
    return $39aaf537f648375f$var$getScroll(w);
}
function $39aaf537f648375f$var$getScrollTop(w) {
    return $39aaf537f648375f$var$getScroll(w, true);
}
function $39aaf537f648375f$var$getOffset(el) {
    var pos = $39aaf537f648375f$var$getClientPosition(el);
    var doc = el.ownerDocument;
    var w = doc.defaultView || doc.parentWindow;
    pos.left += $39aaf537f648375f$var$getScrollLeft(w);
    pos.top += $39aaf537f648375f$var$getScrollTop(w);
    return pos;
}
/**
 * A crude way of determining if an object is a window
 * @member util
 */ function $39aaf537f648375f$var$isWindow(obj) {
    // must use == for ie8
    /* eslint eqeqeq:0 */ return obj !== null && obj !== undefined && obj == obj.window;
}
function $39aaf537f648375f$var$getDocument(node) {
    if ($39aaf537f648375f$var$isWindow(node)) return node.document;
    if (node.nodeType === 9) return node;
    return node.ownerDocument;
}
function $39aaf537f648375f$var$_getComputedStyle(elem, name, cs) {
    var computedStyle = cs;
    var val = "";
    var d = $39aaf537f648375f$var$getDocument(elem);
    computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null); // https://github.com/kissyteam/kissy/issues/61
    if (computedStyle) val = computedStyle.getPropertyValue(name) || computedStyle[name];
    return val;
}
var $39aaf537f648375f$var$_RE_NUM_NO_PX = new RegExp("^(".concat($39aaf537f648375f$var$RE_NUM, ")(?!px)[a-z%]+$"), "i");
var $39aaf537f648375f$var$RE_POS = /^(top|right|bottom|left)$/;
var $39aaf537f648375f$var$CURRENT_STYLE = "currentStyle";
var $39aaf537f648375f$var$RUNTIME_STYLE = "runtimeStyle";
var $39aaf537f648375f$var$LEFT = "left";
var $39aaf537f648375f$var$PX = "px";
function $39aaf537f648375f$var$_getComputedStyleIE(elem, name) {
    // currentStyle maybe null
    // http://msdn.microsoft.com/en-us/library/ms535231.aspx
    var ret = elem[$39aaf537f648375f$var$CURRENT_STYLE] && elem[$39aaf537f648375f$var$CURRENT_STYLE][name]; // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
    // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
    // 在 ie 下不对，需要直接用 offset 方式
    // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
    // From the awesome hack by Dean Edwards
    // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
    // If we're not dealing with a regular pixel number
    // but a number that has a weird ending, we need to convert it to pixels
    // exclude left right for relativity
    if ($39aaf537f648375f$var$_RE_NUM_NO_PX.test(ret) && !$39aaf537f648375f$var$RE_POS.test(name)) {
        // Remember the original values
        var style = elem.style;
        var left = style[$39aaf537f648375f$var$LEFT];
        var rsLeft = elem[$39aaf537f648375f$var$RUNTIME_STYLE][$39aaf537f648375f$var$LEFT]; // prevent flashing of content
        elem[$39aaf537f648375f$var$RUNTIME_STYLE][$39aaf537f648375f$var$LEFT] = elem[$39aaf537f648375f$var$CURRENT_STYLE][$39aaf537f648375f$var$LEFT]; // Put in the new values to get a computed value out
        style[$39aaf537f648375f$var$LEFT] = name === "fontSize" ? "1em" : ret || 0;
        ret = style.pixelLeft + $39aaf537f648375f$var$PX; // Revert the changed values
        style[$39aaf537f648375f$var$LEFT] = left;
        elem[$39aaf537f648375f$var$RUNTIME_STYLE][$39aaf537f648375f$var$LEFT] = rsLeft;
    }
    return ret === "" ? "auto" : ret;
}
if (typeof window !== "undefined") $39aaf537f648375f$var$getComputedStyleX = window.getComputedStyle ? $39aaf537f648375f$var$_getComputedStyle : $39aaf537f648375f$var$_getComputedStyleIE;
function $39aaf537f648375f$var$getOffsetDirection(dir, option) {
    if (dir === "left") return option.useCssRight ? "right" : dir;
    return option.useCssBottom ? "bottom" : dir;
}
function $39aaf537f648375f$var$oppositeOffsetDirection(dir) {
    if (dir === "left") return "right";
    else if (dir === "right") return "left";
    else if (dir === "top") return "bottom";
    else if (dir === "bottom") return "top";
} // 设置 elem 相对 elem.ownerDocument 的坐标
function $39aaf537f648375f$var$setLeftTop(elem, offset, option) {
    // set position first, in-case top/left are set even on static elem
    if ($39aaf537f648375f$var$css(elem, "position") === "static") elem.style.position = "relative";
    var presetH = -999;
    var presetV = -999;
    var horizontalProperty = $39aaf537f648375f$var$getOffsetDirection("left", option);
    var verticalProperty = $39aaf537f648375f$var$getOffsetDirection("top", option);
    var oppositeHorizontalProperty = $39aaf537f648375f$var$oppositeOffsetDirection(horizontalProperty);
    var oppositeVerticalProperty = $39aaf537f648375f$var$oppositeOffsetDirection(verticalProperty);
    if (horizontalProperty !== "left") presetH = 999;
    if (verticalProperty !== "top") presetV = 999;
    var originalTransition = "";
    var originalOffset = $39aaf537f648375f$var$getOffset(elem);
    if ("left" in offset || "top" in offset) {
        originalTransition = $39aaf537f648375f$var$getTransitionProperty(elem) || "";
        $39aaf537f648375f$var$setTransitionProperty(elem, "none");
    }
    if ("left" in offset) {
        elem.style[oppositeHorizontalProperty] = "";
        elem.style[horizontalProperty] = "".concat(presetH, "px");
    }
    if ("top" in offset) {
        elem.style[oppositeVerticalProperty] = "";
        elem.style[verticalProperty] = "".concat(presetV, "px");
    } // force relayout
    $39aaf537f648375f$var$forceRelayout(elem);
    var old = $39aaf537f648375f$var$getOffset(elem);
    var originalStyle = {};
    for(var key in offset)if (offset.hasOwnProperty(key)) {
        var dir = $39aaf537f648375f$var$getOffsetDirection(key, option);
        var preset = key === "left" ? presetH : presetV;
        var off = originalOffset[key] - old[key];
        if (dir === key) originalStyle[dir] = preset + off;
        else originalStyle[dir] = preset - off;
    }
    $39aaf537f648375f$var$css(elem, originalStyle); // force relayout
    $39aaf537f648375f$var$forceRelayout(elem);
    if ("left" in offset || "top" in offset) $39aaf537f648375f$var$setTransitionProperty(elem, originalTransition);
    var ret = {};
    for(var _key in offset)if (offset.hasOwnProperty(_key)) {
        var _dir = $39aaf537f648375f$var$getOffsetDirection(_key, option);
        var _off = offset[_key] - originalOffset[_key];
        if (_key === _dir) ret[_dir] = originalStyle[_dir] + _off;
        else ret[_dir] = originalStyle[_dir] - _off;
    }
    $39aaf537f648375f$var$css(elem, ret);
}
function $39aaf537f648375f$var$setTransform$1(elem, offset) {
    var originalOffset = $39aaf537f648375f$var$getOffset(elem);
    var originalXY = $39aaf537f648375f$var$getTransformXY(elem);
    var resultXY = {
        x: originalXY.x,
        y: originalXY.y
    };
    if ("left" in offset) resultXY.x = originalXY.x + offset.left - originalOffset.left;
    if ("top" in offset) resultXY.y = originalXY.y + offset.top - originalOffset.top;
    $39aaf537f648375f$var$setTransformXY(elem, resultXY);
}
function $39aaf537f648375f$var$setOffset(elem, offset, option) {
    if (option.ignoreShake) {
        var oriOffset = $39aaf537f648375f$var$getOffset(elem);
        var oLeft = oriOffset.left.toFixed(0);
        var oTop = oriOffset.top.toFixed(0);
        var tLeft = offset.left.toFixed(0);
        var tTop = offset.top.toFixed(0);
        if (oLeft === tLeft && oTop === tTop) return;
    }
    if (option.useCssRight || option.useCssBottom) $39aaf537f648375f$var$setLeftTop(elem, offset, option);
    else if (option.useCssTransform && $39aaf537f648375f$var$getTransformName() in document.body.style) $39aaf537f648375f$var$setTransform$1(elem, offset);
    else $39aaf537f648375f$var$setLeftTop(elem, offset, option);
}
function $39aaf537f648375f$var$each(arr, fn) {
    for(var i = 0; i < arr.length; i++)fn(arr[i]);
}
function $39aaf537f648375f$var$isBorderBoxFn(elem) {
    return $39aaf537f648375f$var$getComputedStyleX(elem, "boxSizing") === "border-box";
}
var $39aaf537f648375f$var$BOX_MODELS = [
    "margin",
    "border",
    "padding"
];
var $39aaf537f648375f$var$CONTENT_INDEX = -1;
var $39aaf537f648375f$var$PADDING_INDEX = 2;
var $39aaf537f648375f$var$BORDER_INDEX = 1;
var $39aaf537f648375f$var$MARGIN_INDEX = 0;
function $39aaf537f648375f$var$swap(elem, options, callback) {
    var old = {};
    var style = elem.style;
    var name; // Remember the old values, and insert the new ones
    for(name in options)if (options.hasOwnProperty(name)) {
        old[name] = style[name];
        style[name] = options[name];
    }
    callback.call(elem); // Revert the old values
    for(name in options)if (options.hasOwnProperty(name)) style[name] = old[name];
}
function $39aaf537f648375f$var$getPBMWidth(elem, props, which) {
    var value = 0;
    var prop;
    var j;
    var i;
    for(j = 0; j < props.length; j++){
        prop = props[j];
        if (prop) for(i = 0; i < which.length; i++){
            var cssProp = void 0;
            if (prop === "border") cssProp = "".concat(prop).concat(which[i], "Width");
            else cssProp = prop + which[i];
            value += parseFloat($39aaf537f648375f$var$getComputedStyleX(elem, cssProp)) || 0;
        }
    }
    return value;
}
var $39aaf537f648375f$var$domUtils = {
    getParent: function getParent(element) {
        var parent = element;
        do if (parent.nodeType === 11 && parent.host) parent = parent.host;
        else parent = parent.parentNode;
        while (parent && parent.nodeType !== 1 && parent.nodeType !== 9);
        return parent;
    }
};
$39aaf537f648375f$var$each([
    "Width",
    "Height"
], function(name) {
    $39aaf537f648375f$var$domUtils["doc".concat(name)] = function(refWin) {
        var d = refWin.document;
        return Math.max(// ie standard mode : documentElement.scrollHeight> body.scrollHeight
        d.documentElement["scroll".concat(name)], d.body["scroll".concat(name)], $39aaf537f648375f$var$domUtils["viewport".concat(name)](d));
    };
    $39aaf537f648375f$var$domUtils["viewport".concat(name)] = function(win) {
        // pc browser includes scrollbar in window.innerWidth
        var prop = "client".concat(name);
        var doc = win.document;
        var body = doc.body;
        var documentElement = doc.documentElement;
        var documentElementProp = documentElement[prop]; // 标准模式取 documentElement
        // backcompat 取 body
        return doc.compatMode === "CSS1Compat" && documentElementProp || body && body[prop] || documentElementProp;
    };
});
/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */ function $39aaf537f648375f$var$getWH(elem, name, ex) {
    var extra = ex;
    if ($39aaf537f648375f$var$isWindow(elem)) return name === "width" ? $39aaf537f648375f$var$domUtils.viewportWidth(elem) : $39aaf537f648375f$var$domUtils.viewportHeight(elem);
    else if (elem.nodeType === 9) return name === "width" ? $39aaf537f648375f$var$domUtils.docWidth(elem) : $39aaf537f648375f$var$domUtils.docHeight(elem);
    var which = name === "width" ? [
        "Left",
        "Right"
    ] : [
        "Top",
        "Bottom"
    ];
    var borderBoxValue = name === "width" ? Math.floor(elem.getBoundingClientRect().width) : Math.floor(elem.getBoundingClientRect().height);
    var isBorderBox = $39aaf537f648375f$var$isBorderBoxFn(elem);
    var cssBoxValue = 0;
    if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
        borderBoxValue = undefined; // Fall back to computed then un computed css if necessary
        cssBoxValue = $39aaf537f648375f$var$getComputedStyleX(elem, name);
        if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) cssBoxValue = elem.style[name] || 0;
         // Normalize '', auto, and prepare for extra
        cssBoxValue = parseFloat(cssBoxValue) || 0;
    }
    if (extra === undefined) extra = isBorderBox ? $39aaf537f648375f$var$BORDER_INDEX : $39aaf537f648375f$var$CONTENT_INDEX;
    var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
    var val = borderBoxValue || cssBoxValue;
    if (extra === $39aaf537f648375f$var$CONTENT_INDEX) {
        if (borderBoxValueOrIsBorderBox) return val - $39aaf537f648375f$var$getPBMWidth(elem, [
            "border",
            "padding"
        ], which);
        return cssBoxValue;
    } else if (borderBoxValueOrIsBorderBox) {
        if (extra === $39aaf537f648375f$var$BORDER_INDEX) return val;
        return val + (extra === $39aaf537f648375f$var$PADDING_INDEX ? -$39aaf537f648375f$var$getPBMWidth(elem, [
            "border"
        ], which) : $39aaf537f648375f$var$getPBMWidth(elem, [
            "margin"
        ], which));
    }
    return cssBoxValue + $39aaf537f648375f$var$getPBMWidth(elem, $39aaf537f648375f$var$BOX_MODELS.slice(extra), which);
}
var $39aaf537f648375f$var$cssShow = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
}; // fix #119 : https://github.com/kissyteam/kissy/issues/119
function $39aaf537f648375f$var$getWHIgnoreDisplay() {
    for(var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++)args[_key2] = arguments[_key2];
    var val;
    var elem = args[0]; // in case elem is window
    // elem.offsetWidth === undefined
    if (elem.offsetWidth !== 0) val = $39aaf537f648375f$var$getWH.apply(undefined, args);
    else $39aaf537f648375f$var$swap(elem, $39aaf537f648375f$var$cssShow, function() {
        val = $39aaf537f648375f$var$getWH.apply(undefined, args);
    });
    return val;
}
$39aaf537f648375f$var$each([
    "width",
    "height"
], function(name) {
    var first = name.charAt(0).toUpperCase() + name.slice(1);
    $39aaf537f648375f$var$domUtils["outer".concat(first)] = function(el, includeMargin) {
        return el && $39aaf537f648375f$var$getWHIgnoreDisplay(el, name, includeMargin ? $39aaf537f648375f$var$MARGIN_INDEX : $39aaf537f648375f$var$BORDER_INDEX);
    };
    var which = name === "width" ? [
        "Left",
        "Right"
    ] : [
        "Top",
        "Bottom"
    ];
    $39aaf537f648375f$var$domUtils[name] = function(elem, v) {
        var val = v;
        if (val !== undefined) {
            if (elem) {
                var isBorderBox = $39aaf537f648375f$var$isBorderBoxFn(elem);
                if (isBorderBox) val += $39aaf537f648375f$var$getPBMWidth(elem, [
                    "padding",
                    "border"
                ], which);
                return $39aaf537f648375f$var$css(elem, name, val);
            }
            return undefined;
        }
        return elem && $39aaf537f648375f$var$getWHIgnoreDisplay(elem, name, $39aaf537f648375f$var$CONTENT_INDEX);
    };
});
function $39aaf537f648375f$var$mix(to, from) {
    for(var i in from)if (from.hasOwnProperty(i)) to[i] = from[i];
    return to;
}
var $39aaf537f648375f$var$utils = {
    getWindow: function getWindow(node) {
        if (node && node.document && node.setTimeout) return node;
        var doc = node.ownerDocument || node;
        return doc.defaultView || doc.parentWindow;
    },
    getDocument: $39aaf537f648375f$var$getDocument,
    offset: function offset(el, value, option) {
        if (typeof value !== "undefined") $39aaf537f648375f$var$setOffset(el, value, option || {});
        else return $39aaf537f648375f$var$getOffset(el);
    },
    isWindow: $39aaf537f648375f$var$isWindow,
    each: $39aaf537f648375f$var$each,
    css: $39aaf537f648375f$var$css,
    clone: function clone(obj) {
        var i;
        var ret = {};
        for(i in obj)if (obj.hasOwnProperty(i)) ret[i] = obj[i];
        var overflow = obj.overflow;
        if (overflow) {
            for(i in obj)if (obj.hasOwnProperty(i)) ret.overflow[i] = obj.overflow[i];
        }
        return ret;
    },
    mix: $39aaf537f648375f$var$mix,
    getWindowScrollLeft: function getWindowScrollLeft(w) {
        return $39aaf537f648375f$var$getScrollLeft(w);
    },
    getWindowScrollTop: function getWindowScrollTop(w) {
        return $39aaf537f648375f$var$getScrollTop(w);
    },
    merge: function merge() {
        var ret = {};
        for(var i = 0; i < arguments.length; i++)$39aaf537f648375f$var$utils.mix(ret, i < 0 || arguments.length <= i ? undefined : arguments[i]);
        return ret;
    },
    viewportWidth: 0,
    viewportHeight: 0
};
$39aaf537f648375f$var$mix($39aaf537f648375f$var$utils, $39aaf537f648375f$var$domUtils);
/**
 * 得到会导致元素显示不全的祖先元素
 */ var $39aaf537f648375f$var$getParent = $39aaf537f648375f$var$utils.getParent;
function $39aaf537f648375f$var$getOffsetParent(element) {
    if ($39aaf537f648375f$var$utils.isWindow(element) || element.nodeType === 9) return null;
     // ie 这个也不是完全可行
    /*
   <div style="width: 50px;height: 100px;overflow: hidden">
   <div style="width: 50px;height: 100px;position: relative;" id="d6">
   元素 6 高 100px 宽 50px<br/>
   </div>
   </div>
   */ // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
    //  In other browsers it only includes elements with position absolute, relative or
    // fixed, not elements with overflow set to auto or scroll.
    //        if (UA.ie && ieMode < 8) {
    //            return element.offsetParent;
    //        }
    // 统一的 offsetParent 方法
    var doc = $39aaf537f648375f$var$utils.getDocument(element);
    var body = doc.body;
    var parent;
    var positionStyle = $39aaf537f648375f$var$utils.css(element, "position");
    var skipStatic = positionStyle === "fixed" || positionStyle === "absolute";
    if (!skipStatic) return element.nodeName.toLowerCase() === "html" ? null : $39aaf537f648375f$var$getParent(element);
    for(parent = $39aaf537f648375f$var$getParent(element); parent && parent !== body && parent.nodeType !== 9; parent = $39aaf537f648375f$var$getParent(parent)){
        positionStyle = $39aaf537f648375f$var$utils.css(parent, "position");
        if (positionStyle !== "static") return parent;
    }
    return null;
}
var $39aaf537f648375f$var$getParent$1 = $39aaf537f648375f$var$utils.getParent;
function $39aaf537f648375f$var$isAncestorFixed(element) {
    if ($39aaf537f648375f$var$utils.isWindow(element) || element.nodeType === 9) return false;
    var doc = $39aaf537f648375f$var$utils.getDocument(element);
    var body = doc.body;
    var parent = null;
    for(parent = $39aaf537f648375f$var$getParent$1(element); parent && parent !== body && parent !== doc; parent = $39aaf537f648375f$var$getParent$1(parent)){
        var positionStyle = $39aaf537f648375f$var$utils.css(parent, "position");
        if (positionStyle === "fixed") return true;
    }
    return false;
}
/**
 * 获得元素的显示部分的区域
 */ function $39aaf537f648375f$var$getVisibleRectForElement(element, alwaysByViewport) {
    var visibleRect = {
        left: 0,
        right: Infinity,
        top: 0,
        bottom: Infinity
    };
    var el = $39aaf537f648375f$var$getOffsetParent(element);
    var doc = $39aaf537f648375f$var$utils.getDocument(element);
    var win = doc.defaultView || doc.parentWindow;
    var body = doc.body;
    var documentElement = doc.documentElement; // Determine the size of the visible rect by climbing the dom accounting for
    // all scrollable containers.
    while(el){
        // clientWidth is zero for inline block elements in ie.
        if ((navigator.userAgent.indexOf("MSIE") === -1 || el.clientWidth !== 0) && // viewport. In some browsers, el.offsetParent may be
        // document.documentElement, so check for that too.
        el !== body && el !== documentElement && $39aaf537f648375f$var$utils.css(el, "overflow") !== "visible") {
            var pos = $39aaf537f648375f$var$utils.offset(el); // add border
            pos.left += el.clientLeft;
            pos.top += el.clientTop;
            visibleRect.top = Math.max(visibleRect.top, pos.top);
            visibleRect.right = Math.min(visibleRect.right, pos.left + el.clientWidth);
            visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
            visibleRect.left = Math.max(visibleRect.left, pos.left);
        } else if (el === body || el === documentElement) break;
        el = $39aaf537f648375f$var$getOffsetParent(el);
    } // Set element position to fixed
    // make sure absolute element itself don't affect it's visible area
    // https://github.com/ant-design/ant-design/issues/7601
    var originalPosition = null;
    if (!$39aaf537f648375f$var$utils.isWindow(element) && element.nodeType !== 9) {
        originalPosition = element.style.position;
        var position = $39aaf537f648375f$var$utils.css(element, "position");
        if (position === "absolute") element.style.position = "fixed";
    }
    var scrollX = $39aaf537f648375f$var$utils.getWindowScrollLeft(win);
    var scrollY = $39aaf537f648375f$var$utils.getWindowScrollTop(win);
    var viewportWidth = $39aaf537f648375f$var$utils.viewportWidth(win);
    var viewportHeight = $39aaf537f648375f$var$utils.viewportHeight(win);
    var documentWidth = documentElement.scrollWidth;
    var documentHeight = documentElement.scrollHeight; // scrollXXX on html is sync with body which means overflow: hidden on body gets wrong scrollXXX.
    // We should cut this ourself.
    var bodyStyle = window.getComputedStyle(body);
    if (bodyStyle.overflowX === "hidden") documentWidth = win.innerWidth;
    if (bodyStyle.overflowY === "hidden") documentHeight = win.innerHeight;
     // Reset element position after calculate the visible area
    if (element.style) element.style.position = originalPosition;
    if (alwaysByViewport || $39aaf537f648375f$var$isAncestorFixed(element)) {
        // Clip by viewport's size.
        visibleRect.left = Math.max(visibleRect.left, scrollX);
        visibleRect.top = Math.max(visibleRect.top, scrollY);
        visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
        visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
    } else {
        // Clip by document's size.
        var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
        visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
        var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
        visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
    }
    return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}
function $39aaf537f648375f$var$adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
    var pos = $39aaf537f648375f$var$utils.clone(elFuturePos);
    var size = {
        width: elRegion.width,
        height: elRegion.height
    };
    if (overflow.adjustX && pos.left < visibleRect.left) pos.left = visibleRect.left;
     // Left edge inside and right edge outside viewport, try to resize it.
    if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) size.width -= pos.left + size.width - visibleRect.right;
     // Right edge outside viewport, try to move it.
    if (overflow.adjustX && pos.left + size.width > visibleRect.right) // 保证左边界和可视区域左边界对齐
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
     // Top edge outside viewport, try to move it.
    if (overflow.adjustY && pos.top < visibleRect.top) pos.top = visibleRect.top;
     // Top edge inside and bottom edge outside viewport, try to resize it.
    if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) size.height -= pos.top + size.height - visibleRect.bottom;
     // Bottom edge outside viewport, try to move it.
    if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) // 保证上边界和可视区域上边界对齐
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
    return $39aaf537f648375f$var$utils.mix(pos, size);
}
function $39aaf537f648375f$var$getRegion(node) {
    var offset;
    var w;
    var h;
    if (!$39aaf537f648375f$var$utils.isWindow(node) && node.nodeType !== 9) {
        offset = $39aaf537f648375f$var$utils.offset(node);
        w = $39aaf537f648375f$var$utils.outerWidth(node);
        h = $39aaf537f648375f$var$utils.outerHeight(node);
    } else {
        var win = $39aaf537f648375f$var$utils.getWindow(node);
        offset = {
            left: $39aaf537f648375f$var$utils.getWindowScrollLeft(win),
            top: $39aaf537f648375f$var$utils.getWindowScrollTop(win)
        };
        w = $39aaf537f648375f$var$utils.viewportWidth(win);
        h = $39aaf537f648375f$var$utils.viewportHeight(win);
    }
    offset.width = w;
    offset.height = h;
    return offset;
}
/**
 * 获取 node 上的 align 对齐点 相对于页面的坐标
 */ function $39aaf537f648375f$var$getAlignOffset(region, align) {
    var V = align.charAt(0);
    var H = align.charAt(1);
    var w = region.width;
    var h = region.height;
    var x = region.left;
    var y = region.top;
    if (V === "c") y += h / 2;
    else if (V === "b") y += h;
    if (H === "c") x += w / 2;
    else if (H === "r") x += w;
    return {
        left: x,
        top: y
    };
}
function $39aaf537f648375f$var$getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
    var p1 = $39aaf537f648375f$var$getAlignOffset(refNodeRegion, points[1]);
    var p2 = $39aaf537f648375f$var$getAlignOffset(elRegion, points[0]);
    var diff = [
        p2.left - p1.left,
        p2.top - p1.top
    ];
    return {
        left: Math.round(elRegion.left - diff[0] + offset[0] - targetOffset[0]),
        top: Math.round(elRegion.top - diff[1] + offset[1] - targetOffset[1])
    };
}
/**
 * align dom node flexibly
 * @author yiminghe@gmail.com
 */ function $39aaf537f648375f$var$isFailX(elFuturePos, elRegion, visibleRect) {
    return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}
function $39aaf537f648375f$var$isFailY(elFuturePos, elRegion, visibleRect) {
    return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}
function $39aaf537f648375f$var$isCompleteFailX(elFuturePos, elRegion, visibleRect) {
    return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
}
function $39aaf537f648375f$var$isCompleteFailY(elFuturePos, elRegion, visibleRect) {
    return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
}
function $39aaf537f648375f$var$flip(points, reg, map) {
    var ret = [];
    $39aaf537f648375f$var$utils.each(points, function(p) {
        ret.push(p.replace(reg, function(m) {
            return map[m];
        }));
    });
    return ret;
}
function $39aaf537f648375f$var$flipOffset(offset, index) {
    offset[index] = -offset[index];
    return offset;
}
function $39aaf537f648375f$var$convertOffset(str, offsetLen) {
    var n;
    if (/%$/.test(str)) n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
    else n = parseInt(str, 10);
    return n || 0;
}
function $39aaf537f648375f$var$normalizeOffset(offset, el) {
    offset[0] = $39aaf537f648375f$var$convertOffset(offset[0], el.width);
    offset[1] = $39aaf537f648375f$var$convertOffset(offset[1], el.height);
}
/**
 * @param el
 * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
 * @param align
 */ function $39aaf537f648375f$var$doAlign(el, tgtRegion, align, isTgtRegionVisible) {
    var points = align.points;
    var offset = align.offset || [
        0,
        0
    ];
    var targetOffset = align.targetOffset || [
        0,
        0
    ];
    var overflow = align.overflow;
    var source = align.source || el;
    offset = [].concat(offset);
    targetOffset = [].concat(targetOffset);
    overflow = overflow || {};
    var newOverflowCfg = {};
    var fail = 0;
    var alwaysByViewport = !!(overflow && overflow.alwaysByViewport); // 当前节点可以被放置的显示区域
    var visibleRect = $39aaf537f648375f$var$getVisibleRectForElement(source, alwaysByViewport); // 当前节点所占的区域, left/top/width/height
    var elRegion = $39aaf537f648375f$var$getRegion(source); // 将 offset 转换成数值，支持百分比
    $39aaf537f648375f$var$normalizeOffset(offset, elRegion);
    $39aaf537f648375f$var$normalizeOffset(targetOffset, tgtRegion); // 当前节点将要被放置的位置
    var elFuturePos = $39aaf537f648375f$var$getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset); // 当前节点将要所处的区域
    var newElRegion = $39aaf537f648375f$var$utils.merge(elRegion, elFuturePos); // 如果可视区域不能完全放置当前节点时允许调整
    if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
        if (overflow.adjustX) // 如果横向不能放下
        {
            if ($39aaf537f648375f$var$isFailX(elFuturePos, elRegion, visibleRect)) {
                // 对齐位置反下
                var newPoints = $39aaf537f648375f$var$flip(points, /[lr]/gi, {
                    l: "r",
                    r: "l"
                }); // 偏移量也反下
                var newOffset = $39aaf537f648375f$var$flipOffset(offset, 0);
                var newTargetOffset = $39aaf537f648375f$var$flipOffset(targetOffset, 0);
                var newElFuturePos = $39aaf537f648375f$var$getElFuturePos(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);
                if (!$39aaf537f648375f$var$isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
                    fail = 1;
                    points = newPoints;
                    offset = newOffset;
                    targetOffset = newTargetOffset;
                }
            }
        }
        if (overflow.adjustY) // 如果纵向不能放下
        {
            if ($39aaf537f648375f$var$isFailY(elFuturePos, elRegion, visibleRect)) {
                // 对齐位置反下
                var _newPoints = $39aaf537f648375f$var$flip(points, /[tb]/gi, {
                    t: "b",
                    b: "t"
                }); // 偏移量也反下
                var _newOffset = $39aaf537f648375f$var$flipOffset(offset, 1);
                var _newTargetOffset = $39aaf537f648375f$var$flipOffset(targetOffset, 1);
                var _newElFuturePos = $39aaf537f648375f$var$getElFuturePos(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);
                if (!$39aaf537f648375f$var$isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
                    fail = 1;
                    points = _newPoints;
                    offset = _newOffset;
                    targetOffset = _newTargetOffset;
                }
            }
        } // 如果失败，重新计算当前节点将要被放置的位置
        if (fail) {
            elFuturePos = $39aaf537f648375f$var$getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset);
            $39aaf537f648375f$var$utils.mix(newElRegion, elFuturePos);
        }
        var isStillFailX = $39aaf537f648375f$var$isFailX(elFuturePos, elRegion, visibleRect);
        var isStillFailY = $39aaf537f648375f$var$isFailY(elFuturePos, elRegion, visibleRect); // 检查反下后的位置是否可以放下了，如果仍然放不下：
        // 1. 复原修改过的定位参数
        if (isStillFailX || isStillFailY) {
            var _newPoints2 = points; // 重置对应部分的翻转逻辑
            if (isStillFailX) _newPoints2 = $39aaf537f648375f$var$flip(points, /[lr]/gi, {
                l: "r",
                r: "l"
            });
            if (isStillFailY) _newPoints2 = $39aaf537f648375f$var$flip(points, /[tb]/gi, {
                t: "b",
                b: "t"
            });
            points = _newPoints2;
            offset = align.offset || [
                0,
                0
            ];
            targetOffset = align.targetOffset || [
                0,
                0
            ];
        } // 2. 只有指定了可以调整当前方向才调整
        newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
        newOverflowCfg.adjustY = overflow.adjustY && isStillFailY; // 确实要调整，甚至可能会调整高度宽度
        if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) newElRegion = $39aaf537f648375f$var$adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
    } // need judge to in case set fixed with in css on height auto element
    if (newElRegion.width !== elRegion.width) $39aaf537f648375f$var$utils.css(source, "width", $39aaf537f648375f$var$utils.width(source) + newElRegion.width - elRegion.width);
    if (newElRegion.height !== elRegion.height) $39aaf537f648375f$var$utils.css(source, "height", $39aaf537f648375f$var$utils.height(source) + newElRegion.height - elRegion.height);
     // https://github.com/kissyteam/kissy/issues/190
    // 相对于屏幕位置没变，而 left/top 变了
    // 例如 <div 'relative'><el absolute></div>
    $39aaf537f648375f$var$utils.offset(source, {
        left: newElRegion.left,
        top: newElRegion.top
    }, {
        useCssRight: align.useCssRight,
        useCssBottom: align.useCssBottom,
        useCssTransform: align.useCssTransform,
        ignoreShake: align.ignoreShake
    });
    return {
        points: points,
        offset: offset,
        targetOffset: targetOffset,
        overflow: newOverflowCfg
    };
}
/**
 *  2012-04-26 yiminghe@gmail.com
 *   - 优化智能对齐算法
 *   - 慎用 resizeXX
 *
 *  2011-07-13 yiminghe@gmail.com note:
 *   - 增加智能对齐，以及大小调整选项
 **/ function $39aaf537f648375f$var$isOutOfVisibleRect(target, alwaysByViewport) {
    var visibleRect = $39aaf537f648375f$var$getVisibleRectForElement(target, alwaysByViewport);
    var targetRegion = $39aaf537f648375f$var$getRegion(target);
    return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
}
function $39aaf537f648375f$export$ec21431d5ee6c534(el, refNode, align) {
    var target = align.target || refNode;
    var refNodeRegion = $39aaf537f648375f$var$getRegion(target);
    var isTargetNotOutOfVisible = !$39aaf537f648375f$var$isOutOfVisibleRect(target, align.overflow && align.overflow.alwaysByViewport);
    return $39aaf537f648375f$var$doAlign(el, refNodeRegion, align, isTargetNotOutOfVisible);
}
$39aaf537f648375f$export$ec21431d5ee6c534.__getOffsetParent = $39aaf537f648375f$var$getOffsetParent;
$39aaf537f648375f$export$ec21431d5ee6c534.__getVisibleRectForElement = $39aaf537f648375f$var$getVisibleRectForElement;
/**
 * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
 * If client position provided, will internal convert to page position.
 */ function $39aaf537f648375f$export$38f0e12f0aa28098(el, tgtPoint, align) {
    var pageX;
    var pageY;
    var doc = $39aaf537f648375f$var$utils.getDocument(el);
    var win = doc.defaultView || doc.parentWindow;
    var scrollX = $39aaf537f648375f$var$utils.getWindowScrollLeft(win);
    var scrollY = $39aaf537f648375f$var$utils.getWindowScrollTop(win);
    var viewportWidth = $39aaf537f648375f$var$utils.viewportWidth(win);
    var viewportHeight = $39aaf537f648375f$var$utils.viewportHeight(win);
    if ("pageX" in tgtPoint) pageX = tgtPoint.pageX;
    else pageX = scrollX + tgtPoint.clientX;
    if ("pageY" in tgtPoint) pageY = tgtPoint.pageY;
    else pageY = scrollY + tgtPoint.clientY;
    var tgtRegion = {
        left: pageX,
        top: pageY,
        width: 0,
        height: 0
    };
    var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight; // Provide default target point
    var points = [
        align.points[0],
        "cc"
    ];
    return $39aaf537f648375f$var$doAlign(el, tgtRegion, $39aaf537f648375f$var$_objectSpread2($39aaf537f648375f$var$_objectSpread2({}, align), {}, {
        points: points
    }), pointInView);
}
var $39aaf537f648375f$export$2e2bcd8739ae039 = $39aaf537f648375f$export$ec21431d5ee6c534;



var $4048bd02b85327ad$exports = {};
var $2bdc3aabd052232d$exports = {};
var $ea68004ba56a240a$exports = {};
var $e1f43ebf200fa4fb$exports = {};
var $c4b4a2eb5b03d8d1$exports = {};
var $c376a3ef6e54407b$exports = {};
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */ function $c376a3ef6e54407b$var$listCacheClear() {
    this.__data__ = [];
    this.size = 0;
}
$c376a3ef6e54407b$exports = $c376a3ef6e54407b$var$listCacheClear;


var $c6d443768211d990$exports = {};
var $5ca865573cbbd44c$exports = {};
var $aa6eba67c6ff0829$exports = {};
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ function $aa6eba67c6ff0829$var$eq(value, other) {
    return value === other || value !== value && other !== other;
}
$aa6eba67c6ff0829$exports = $aa6eba67c6ff0829$var$eq;


/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function $5ca865573cbbd44c$var$assocIndexOf(array, key) {
    var length = array.length;
    while(length--){
        if ($aa6eba67c6ff0829$exports(array[length][0], key)) return length;
    }
    return -1;
}
$5ca865573cbbd44c$exports = $5ca865573cbbd44c$var$assocIndexOf;


/** Used for built-in method references. */ var $c6d443768211d990$var$arrayProto = Array.prototype;
/** Built-in value references. */ var $c6d443768211d990$var$splice = $c6d443768211d990$var$arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function $c6d443768211d990$var$listCacheDelete(key) {
    var data = this.__data__, index = $5ca865573cbbd44c$exports(data, key);
    if (index < 0) return false;
    var lastIndex = data.length - 1;
    if (index == lastIndex) data.pop();
    else $c6d443768211d990$var$splice.call(data, index, 1);
    --this.size;
    return true;
}
$c6d443768211d990$exports = $c6d443768211d990$var$listCacheDelete;


var $372219cab6fe6238$exports = {};

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function $372219cab6fe6238$var$listCacheGet(key) {
    var data = this.__data__, index = $5ca865573cbbd44c$exports(data, key);
    return index < 0 ? undefined : data[index][1];
}
$372219cab6fe6238$exports = $372219cab6fe6238$var$listCacheGet;


var $8dd7984f31ada3e3$exports = {};

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function $8dd7984f31ada3e3$var$listCacheHas(key) {
    return $5ca865573cbbd44c$exports(this.__data__, key) > -1;
}
$8dd7984f31ada3e3$exports = $8dd7984f31ada3e3$var$listCacheHas;


var $b9bf6c8389f73d36$exports = {};

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */ function $b9bf6c8389f73d36$var$listCacheSet(key, value) {
    var data = this.__data__, index = $5ca865573cbbd44c$exports(data, key);
    if (index < 0) {
        ++this.size;
        data.push([
            key,
            value
        ]);
    } else data[index][1] = value;
    return this;
}
$b9bf6c8389f73d36$exports = $b9bf6c8389f73d36$var$listCacheSet;


/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function $c4b4a2eb5b03d8d1$var$ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `ListCache`.
$c4b4a2eb5b03d8d1$var$ListCache.prototype.clear = $c376a3ef6e54407b$exports;
$c4b4a2eb5b03d8d1$var$ListCache.prototype["delete"] = $c6d443768211d990$exports;
$c4b4a2eb5b03d8d1$var$ListCache.prototype.get = $372219cab6fe6238$exports;
$c4b4a2eb5b03d8d1$var$ListCache.prototype.has = $8dd7984f31ada3e3$exports;
$c4b4a2eb5b03d8d1$var$ListCache.prototype.set = $b9bf6c8389f73d36$exports;
$c4b4a2eb5b03d8d1$exports = $c4b4a2eb5b03d8d1$var$ListCache;


var $623456a710fd05fa$exports = {};

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */ function $623456a710fd05fa$var$stackClear() {
    this.__data__ = new $c4b4a2eb5b03d8d1$exports;
    this.size = 0;
}
$623456a710fd05fa$exports = $623456a710fd05fa$var$stackClear;


var $b1e0fe3d674c8de8$exports = {};
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function $b1e0fe3d674c8de8$var$stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
}
$b1e0fe3d674c8de8$exports = $b1e0fe3d674c8de8$var$stackDelete;


var $ec34916af2a7c90a$exports = {};
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function $ec34916af2a7c90a$var$stackGet(key) {
    return this.__data__.get(key);
}
$ec34916af2a7c90a$exports = $ec34916af2a7c90a$var$stackGet;


var $63d50f8403d2d882$exports = {};
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function $63d50f8403d2d882$var$stackHas(key) {
    return this.__data__.has(key);
}
$63d50f8403d2d882$exports = $63d50f8403d2d882$var$stackHas;


var $9c4157295ea44969$exports = {};

var $d31abbb83d6d8594$exports = {};
var $b90de35121a4bae1$exports = {};
var $d3063870abcad8aa$exports = {};
var $d8aac56c7973b529$exports = {};
var $4c86c05973e00d93$exports = {};
var $46d830bf0094fbfd$exports = {};

var $hMXRG = parcelRequire("hMXRG");
/** Built-in value references. */ var $46d830bf0094fbfd$var$Symbol = $hMXRG.Symbol;
$46d830bf0094fbfd$exports = $46d830bf0094fbfd$var$Symbol;


var $86ca7449e14f29aa$exports = {};

/** Used for built-in method references. */ var $86ca7449e14f29aa$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $86ca7449e14f29aa$var$hasOwnProperty = $86ca7449e14f29aa$var$objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var $86ca7449e14f29aa$var$nativeObjectToString = $86ca7449e14f29aa$var$objectProto.toString;
/** Built-in value references. */ var $86ca7449e14f29aa$var$symToStringTag = $46d830bf0094fbfd$exports ? $46d830bf0094fbfd$exports.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function $86ca7449e14f29aa$var$getRawTag(value) {
    var isOwn = $86ca7449e14f29aa$var$hasOwnProperty.call(value, $86ca7449e14f29aa$var$symToStringTag), tag = value[$86ca7449e14f29aa$var$symToStringTag];
    try {
        value[$86ca7449e14f29aa$var$symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {}
    var result = $86ca7449e14f29aa$var$nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) value[$86ca7449e14f29aa$var$symToStringTag] = tag;
        else delete value[$86ca7449e14f29aa$var$symToStringTag];
    }
    return result;
}
$86ca7449e14f29aa$exports = $86ca7449e14f29aa$var$getRawTag;


var $653d9cb08f27621c$exports = {};
/** Used for built-in method references. */ var $653d9cb08f27621c$var$objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var $653d9cb08f27621c$var$nativeObjectToString = $653d9cb08f27621c$var$objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function $653d9cb08f27621c$var$objectToString(value) {
    return $653d9cb08f27621c$var$nativeObjectToString.call(value);
}
$653d9cb08f27621c$exports = $653d9cb08f27621c$var$objectToString;


/** `Object#toString` result references. */ var $4c86c05973e00d93$var$nullTag = "[object Null]", $4c86c05973e00d93$var$undefinedTag = "[object Undefined]";
/** Built-in value references. */ var $4c86c05973e00d93$var$symToStringTag = $46d830bf0094fbfd$exports ? $46d830bf0094fbfd$exports.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function $4c86c05973e00d93$var$baseGetTag(value) {
    if (value == null) return value === undefined ? $4c86c05973e00d93$var$undefinedTag : $4c86c05973e00d93$var$nullTag;
    return $4c86c05973e00d93$var$symToStringTag && $4c86c05973e00d93$var$symToStringTag in Object(value) ? $86ca7449e14f29aa$exports(value) : $653d9cb08f27621c$exports(value);
}
$4c86c05973e00d93$exports = $4c86c05973e00d93$var$baseGetTag;


var $6aedf7ff07ca9244$exports = {};
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function $6aedf7ff07ca9244$var$isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
}
$6aedf7ff07ca9244$exports = $6aedf7ff07ca9244$var$isObject;


/** `Object#toString` result references. */ var $d8aac56c7973b529$var$asyncTag = "[object AsyncFunction]", $d8aac56c7973b529$var$funcTag = "[object Function]", $d8aac56c7973b529$var$genTag = "[object GeneratorFunction]", $d8aac56c7973b529$var$proxyTag = "[object Proxy]";
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function $d8aac56c7973b529$var$isFunction(value) {
    if (!$6aedf7ff07ca9244$exports(value)) return false;
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = $4c86c05973e00d93$exports(value);
    return tag == $d8aac56c7973b529$var$funcTag || tag == $d8aac56c7973b529$var$genTag || tag == $d8aac56c7973b529$var$asyncTag || tag == $d8aac56c7973b529$var$proxyTag;
}
$d8aac56c7973b529$exports = $d8aac56c7973b529$var$isFunction;


var $0aa9fb3304f136c5$exports = {};
var $22065ffe23747871$exports = {};

var $hMXRG = parcelRequire("hMXRG");
/** Used to detect overreaching core-js shims. */ var $22065ffe23747871$var$coreJsData = $hMXRG["__core-js_shared__"];
$22065ffe23747871$exports = $22065ffe23747871$var$coreJsData;


/** Used to detect methods masquerading as native. */ var $0aa9fb3304f136c5$var$maskSrcKey = function() {
    var uid = /[^.]+$/.exec($22065ffe23747871$exports && $22065ffe23747871$exports.keys && $22065ffe23747871$exports.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function $0aa9fb3304f136c5$var$isMasked(func) {
    return !!$0aa9fb3304f136c5$var$maskSrcKey && $0aa9fb3304f136c5$var$maskSrcKey in func;
}
$0aa9fb3304f136c5$exports = $0aa9fb3304f136c5$var$isMasked;



var $86e59b98fae513ad$exports = {};
/** Used for built-in method references. */ var $86e59b98fae513ad$var$funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */ var $86e59b98fae513ad$var$funcToString = $86e59b98fae513ad$var$funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */ function $86e59b98fae513ad$var$toSource(func) {
    if (func != null) {
        try {
            return $86e59b98fae513ad$var$funcToString.call(func);
        } catch (e) {}
        try {
            return func + "";
        } catch (e1) {}
    }
    return "";
}
$86e59b98fae513ad$exports = $86e59b98fae513ad$var$toSource;


/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var $d3063870abcad8aa$var$reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */ var $d3063870abcad8aa$var$reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */ var $d3063870abcad8aa$var$funcProto = Function.prototype, $d3063870abcad8aa$var$objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var $d3063870abcad8aa$var$funcToString = $d3063870abcad8aa$var$funcProto.toString;
/** Used to check objects for own properties. */ var $d3063870abcad8aa$var$hasOwnProperty = $d3063870abcad8aa$var$objectProto.hasOwnProperty;
/** Used to detect if a method is native. */ var $d3063870abcad8aa$var$reIsNative = RegExp("^" + $d3063870abcad8aa$var$funcToString.call($d3063870abcad8aa$var$hasOwnProperty).replace($d3063870abcad8aa$var$reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function $d3063870abcad8aa$var$baseIsNative(value) {
    if (!$6aedf7ff07ca9244$exports(value) || $0aa9fb3304f136c5$exports(value)) return false;
    var pattern = $d8aac56c7973b529$exports(value) ? $d3063870abcad8aa$var$reIsNative : $d3063870abcad8aa$var$reIsHostCtor;
    return pattern.test($86e59b98fae513ad$exports(value));
}
$d3063870abcad8aa$exports = $d3063870abcad8aa$var$baseIsNative;


var $0046688c6c244378$exports = {};
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ function $0046688c6c244378$var$getValue(object, key) {
    return object == null ? undefined : object[key];
}
$0046688c6c244378$exports = $0046688c6c244378$var$getValue;


/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function $b90de35121a4bae1$var$getNative(object, key) {
    var value = $0046688c6c244378$exports(object, key);
    return $d3063870abcad8aa$exports(value) ? value : undefined;
}
$b90de35121a4bae1$exports = $b90de35121a4bae1$var$getNative;



var $hMXRG = parcelRequire("hMXRG");
/* Built-in method references that are verified to be native. */ var $d31abbb83d6d8594$var$Map = $b90de35121a4bae1$exports($hMXRG, "Map");
$d31abbb83d6d8594$exports = $d31abbb83d6d8594$var$Map;


var $1c2e163ec0f7ac41$exports = {};
var $bc1e50986fd9fbfa$exports = {};
var $ce8b50347c051deb$exports = {};
var $33a27e2562556e75$exports = {};
var $b2e38ca890743791$exports = {};

/* Built-in method references that are verified to be native. */ var $b2e38ca890743791$var$nativeCreate = $b90de35121a4bae1$exports(Object, "create");
$b2e38ca890743791$exports = $b2e38ca890743791$var$nativeCreate;


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function $33a27e2562556e75$var$hashClear() {
    this.__data__ = $b2e38ca890743791$exports ? $b2e38ca890743791$exports(null) : {};
    this.size = 0;
}
$33a27e2562556e75$exports = $33a27e2562556e75$var$hashClear;


var $79a68efeb3150691$exports = {};
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function $79a68efeb3150691$var$hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
}
$79a68efeb3150691$exports = $79a68efeb3150691$var$hashDelete;


var $e213576a498ef450$exports = {};

/** Used to stand-in for `undefined` hash values. */ var $e213576a498ef450$var$HASH_UNDEFINED = "__lodash_hash_undefined__";
/** Used for built-in method references. */ var $e213576a498ef450$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $e213576a498ef450$var$hasOwnProperty = $e213576a498ef450$var$objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function $e213576a498ef450$var$hashGet(key) {
    var data = this.__data__;
    if ($b2e38ca890743791$exports) {
        var result = data[key];
        return result === $e213576a498ef450$var$HASH_UNDEFINED ? undefined : result;
    }
    return $e213576a498ef450$var$hasOwnProperty.call(data, key) ? data[key] : undefined;
}
$e213576a498ef450$exports = $e213576a498ef450$var$hashGet;


var $f154e1b4ed38cf86$exports = {};

/** Used for built-in method references. */ var $f154e1b4ed38cf86$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $f154e1b4ed38cf86$var$hasOwnProperty = $f154e1b4ed38cf86$var$objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function $f154e1b4ed38cf86$var$hashHas(key) {
    var data = this.__data__;
    return $b2e38ca890743791$exports ? data[key] !== undefined : $f154e1b4ed38cf86$var$hasOwnProperty.call(data, key);
}
$f154e1b4ed38cf86$exports = $f154e1b4ed38cf86$var$hashHas;


var $df39ad3e5d9473df$exports = {};

/** Used to stand-in for `undefined` hash values. */ var $df39ad3e5d9473df$var$HASH_UNDEFINED = "__lodash_hash_undefined__";
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */ function $df39ad3e5d9473df$var$hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = $b2e38ca890743791$exports && value === undefined ? $df39ad3e5d9473df$var$HASH_UNDEFINED : value;
    return this;
}
$df39ad3e5d9473df$exports = $df39ad3e5d9473df$var$hashSet;


/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function $ce8b50347c051deb$var$Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `Hash`.
$ce8b50347c051deb$var$Hash.prototype.clear = $33a27e2562556e75$exports;
$ce8b50347c051deb$var$Hash.prototype["delete"] = $79a68efeb3150691$exports;
$ce8b50347c051deb$var$Hash.prototype.get = $e213576a498ef450$exports;
$ce8b50347c051deb$var$Hash.prototype.has = $f154e1b4ed38cf86$exports;
$ce8b50347c051deb$var$Hash.prototype.set = $df39ad3e5d9473df$exports;
$ce8b50347c051deb$exports = $ce8b50347c051deb$var$Hash;




/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ function $bc1e50986fd9fbfa$var$mapCacheClear() {
    this.size = 0;
    this.__data__ = {
        "hash": new $ce8b50347c051deb$exports,
        "map": new ($d31abbb83d6d8594$exports || $c4b4a2eb5b03d8d1$exports),
        "string": new $ce8b50347c051deb$exports
    };
}
$bc1e50986fd9fbfa$exports = $bc1e50986fd9fbfa$var$mapCacheClear;


var $512d5b610568837d$exports = {};
var $2e7544c9bc75868b$exports = {};
var $87ece0b0ab1150ac$exports = {};
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */ function $87ece0b0ab1150ac$var$isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
$87ece0b0ab1150ac$exports = $87ece0b0ab1150ac$var$isKeyable;


/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */ function $2e7544c9bc75868b$var$getMapData(map, key) {
    var data = map.__data__;
    return $87ece0b0ab1150ac$exports(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
$2e7544c9bc75868b$exports = $2e7544c9bc75868b$var$getMapData;


/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function $512d5b610568837d$var$mapCacheDelete(key) {
    var result = $2e7544c9bc75868b$exports(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
}
$512d5b610568837d$exports = $512d5b610568837d$var$mapCacheDelete;


var $d8849d91ed7e8b11$exports = {};

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function $d8849d91ed7e8b11$var$mapCacheGet(key) {
    return $2e7544c9bc75868b$exports(this, key).get(key);
}
$d8849d91ed7e8b11$exports = $d8849d91ed7e8b11$var$mapCacheGet;


var $314c9dca597d3b30$exports = {};

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function $314c9dca597d3b30$var$mapCacheHas(key) {
    return $2e7544c9bc75868b$exports(this, key).has(key);
}
$314c9dca597d3b30$exports = $314c9dca597d3b30$var$mapCacheHas;


var $986810421ab434e9$exports = {};

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */ function $986810421ab434e9$var$mapCacheSet(key, value) {
    var data = $2e7544c9bc75868b$exports(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
}
$986810421ab434e9$exports = $986810421ab434e9$var$mapCacheSet;


/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function $1c2e163ec0f7ac41$var$MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `MapCache`.
$1c2e163ec0f7ac41$var$MapCache.prototype.clear = $bc1e50986fd9fbfa$exports;
$1c2e163ec0f7ac41$var$MapCache.prototype["delete"] = $512d5b610568837d$exports;
$1c2e163ec0f7ac41$var$MapCache.prototype.get = $d8849d91ed7e8b11$exports;
$1c2e163ec0f7ac41$var$MapCache.prototype.has = $314c9dca597d3b30$exports;
$1c2e163ec0f7ac41$var$MapCache.prototype.set = $986810421ab434e9$exports;
$1c2e163ec0f7ac41$exports = $1c2e163ec0f7ac41$var$MapCache;


/** Used as the size to enable large array optimizations. */ var $9c4157295ea44969$var$LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */ function $9c4157295ea44969$var$stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof $c4b4a2eb5b03d8d1$exports) {
        var pairs = data.__data__;
        if (!$d31abbb83d6d8594$exports || pairs.length < $9c4157295ea44969$var$LARGE_ARRAY_SIZE - 1) {
            pairs.push([
                key,
                value
            ]);
            this.size = ++data.size;
            return this;
        }
        data = this.__data__ = new $1c2e163ec0f7ac41$exports(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
}
$9c4157295ea44969$exports = $9c4157295ea44969$var$stackSet;


/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function $e1f43ebf200fa4fb$var$Stack(entries) {
    var data = this.__data__ = new $c4b4a2eb5b03d8d1$exports(entries);
    this.size = data.size;
}
// Add methods to `Stack`.
$e1f43ebf200fa4fb$var$Stack.prototype.clear = $623456a710fd05fa$exports;
$e1f43ebf200fa4fb$var$Stack.prototype["delete"] = $b1e0fe3d674c8de8$exports;
$e1f43ebf200fa4fb$var$Stack.prototype.get = $ec34916af2a7c90a$exports;
$e1f43ebf200fa4fb$var$Stack.prototype.has = $63d50f8403d2d882$exports;
$e1f43ebf200fa4fb$var$Stack.prototype.set = $9c4157295ea44969$exports;
$e1f43ebf200fa4fb$exports = $e1f43ebf200fa4fb$var$Stack;


var $23151385128909bb$exports = {};
var $cf1e39b26f1f3a19$exports = {};

var $77099448d9c1d634$exports = {};
/** Used to stand-in for `undefined` hash values. */ var $77099448d9c1d634$var$HASH_UNDEFINED = "__lodash_hash_undefined__";
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */ function $77099448d9c1d634$var$setCacheAdd(value) {
    this.__data__.set(value, $77099448d9c1d634$var$HASH_UNDEFINED);
    return this;
}
$77099448d9c1d634$exports = $77099448d9c1d634$var$setCacheAdd;


var $816a8fcd13233bd6$exports = {};
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */ function $816a8fcd13233bd6$var$setCacheHas(value) {
    return this.__data__.has(value);
}
$816a8fcd13233bd6$exports = $816a8fcd13233bd6$var$setCacheHas;


/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */ function $cf1e39b26f1f3a19$var$SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new $1c2e163ec0f7ac41$exports;
    while(++index < length)this.add(values[index]);
}
// Add methods to `SetCache`.
$cf1e39b26f1f3a19$var$SetCache.prototype.add = $cf1e39b26f1f3a19$var$SetCache.prototype.push = $77099448d9c1d634$exports;
$cf1e39b26f1f3a19$var$SetCache.prototype.has = $816a8fcd13233bd6$exports;
$cf1e39b26f1f3a19$exports = $cf1e39b26f1f3a19$var$SetCache;


var $83068f34423452eb$exports = {};
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */ function $83068f34423452eb$var$arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while(++index < length){
        if (predicate(array[index], index, array)) return true;
    }
    return false;
}
$83068f34423452eb$exports = $83068f34423452eb$var$arraySome;


var $64ddd5f753ad8078$exports = {};
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function $64ddd5f753ad8078$var$cacheHas(cache, key) {
    return cache.has(key);
}
$64ddd5f753ad8078$exports = $64ddd5f753ad8078$var$cacheHas;


/** Used to compose bitmasks for value comparisons. */ var $23151385128909bb$var$COMPARE_PARTIAL_FLAG = 1, $23151385128909bb$var$COMPARE_UNORDERED_FLAG = 2;
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */ function $23151385128909bb$var$equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & $23151385128909bb$var$COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
    // Check that cyclic values are equal.
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) return arrStacked == other && othStacked == array;
    var index = -1, result = true, seen = bitmask & $23151385128909bb$var$COMPARE_UNORDERED_FLAG ? new $cf1e39b26f1f3a19$exports : undefined;
    stack.set(array, other);
    stack.set(other, array);
    // Ignore non-index properties.
    while(++index < arrLength){
        var arrValue = array[index], othValue = other[index];
        if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        if (compared !== undefined) {
            if (compared) continue;
            result = false;
            break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
            if (!$83068f34423452eb$exports(other, function(othValue, othIndex) {
                if (!$64ddd5f753ad8078$exports(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) return seen.push(othIndex);
            })) {
                result = false;
                break;
            }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
        }
    }
    stack["delete"](array);
    stack["delete"](other);
    return result;
}
$23151385128909bb$exports = $23151385128909bb$var$equalArrays;


var $eae024c0dd12342d$exports = {};

var $71b25a12b29922b9$exports = {};

var $hMXRG = parcelRequire("hMXRG");
/** Built-in value references. */ var $71b25a12b29922b9$var$Uint8Array = $hMXRG.Uint8Array;
$71b25a12b29922b9$exports = $71b25a12b29922b9$var$Uint8Array;




var $9335a9a7c2713729$exports = {};
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */ function $9335a9a7c2713729$var$mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
        result[++index] = [
            key,
            value
        ];
    });
    return result;
}
$9335a9a7c2713729$exports = $9335a9a7c2713729$var$mapToArray;


var $913020b260050e93$exports = {};
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */ function $913020b260050e93$var$setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
        result[++index] = value;
    });
    return result;
}
$913020b260050e93$exports = $913020b260050e93$var$setToArray;


/** Used to compose bitmasks for value comparisons. */ var $eae024c0dd12342d$var$COMPARE_PARTIAL_FLAG = 1, $eae024c0dd12342d$var$COMPARE_UNORDERED_FLAG = 2;
/** `Object#toString` result references. */ var $eae024c0dd12342d$var$boolTag = "[object Boolean]", $eae024c0dd12342d$var$dateTag = "[object Date]", $eae024c0dd12342d$var$errorTag = "[object Error]", $eae024c0dd12342d$var$mapTag = "[object Map]", $eae024c0dd12342d$var$numberTag = "[object Number]", $eae024c0dd12342d$var$regexpTag = "[object RegExp]", $eae024c0dd12342d$var$setTag = "[object Set]", $eae024c0dd12342d$var$stringTag = "[object String]", $eae024c0dd12342d$var$symbolTag = "[object Symbol]";
var $eae024c0dd12342d$var$arrayBufferTag = "[object ArrayBuffer]", $eae024c0dd12342d$var$dataViewTag = "[object DataView]";
/** Used to convert symbols to primitives and strings. */ var $eae024c0dd12342d$var$symbolProto = $46d830bf0094fbfd$exports ? $46d830bf0094fbfd$exports.prototype : undefined, $eae024c0dd12342d$var$symbolValueOf = $eae024c0dd12342d$var$symbolProto ? $eae024c0dd12342d$var$symbolProto.valueOf : undefined;
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function $eae024c0dd12342d$var$equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch(tag){
        case $eae024c0dd12342d$var$dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return false;
            object = object.buffer;
            other = other.buffer;
        case $eae024c0dd12342d$var$arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new $71b25a12b29922b9$exports(object), new $71b25a12b29922b9$exports(other))) return false;
            return true;
        case $eae024c0dd12342d$var$boolTag:
        case $eae024c0dd12342d$var$dateTag:
        case $eae024c0dd12342d$var$numberTag:
            // Coerce booleans to `1` or `0` and dates to milliseconds.
            // Invalid dates are coerced to `NaN`.
            return $aa6eba67c6ff0829$exports(+object, +other);
        case $eae024c0dd12342d$var$errorTag:
            return object.name == other.name && object.message == other.message;
        case $eae024c0dd12342d$var$regexpTag:
        case $eae024c0dd12342d$var$stringTag:
            // Coerce regexes to strings and treat strings, primitives and objects,
            // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
            // for more details.
            return object == other + "";
        case $eae024c0dd12342d$var$mapTag:
            var convert = $9335a9a7c2713729$exports;
        case $eae024c0dd12342d$var$setTag:
            var isPartial = bitmask & $eae024c0dd12342d$var$COMPARE_PARTIAL_FLAG;
            convert || (convert = $913020b260050e93$exports);
            if (object.size != other.size && !isPartial) return false;
            // Assume cyclic values are equal.
            var stacked = stack.get(object);
            if (stacked) return stacked == other;
            bitmask |= $eae024c0dd12342d$var$COMPARE_UNORDERED_FLAG;
            // Recursively compare objects (susceptible to call stack limits).
            stack.set(object, other);
            var result = $23151385128909bb$exports(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result;
        case $eae024c0dd12342d$var$symbolTag:
            if ($eae024c0dd12342d$var$symbolValueOf) return $eae024c0dd12342d$var$symbolValueOf.call(object) == $eae024c0dd12342d$var$symbolValueOf.call(other);
    }
    return false;
}
$eae024c0dd12342d$exports = $eae024c0dd12342d$var$equalByTag;


var $a3c90672575c02e2$exports = {};
var $cef3427cf6ff474f$exports = {};
var $73dcb537f1dc5e73$exports = {};
var $74cbebebf0143b19$exports = {};
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */ function $74cbebebf0143b19$var$arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while(++index < length)array[offset + index] = values[index];
    return array;
}
$74cbebebf0143b19$exports = $74cbebebf0143b19$var$arrayPush;


var $3dc651d81166744d$exports = {};
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var $3dc651d81166744d$var$isArray = Array.isArray;
$3dc651d81166744d$exports = $3dc651d81166744d$var$isArray;


/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */ function $73dcb537f1dc5e73$var$baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return $3dc651d81166744d$exports(object) ? result : $74cbebebf0143b19$exports(result, symbolsFunc(object));
}
$73dcb537f1dc5e73$exports = $73dcb537f1dc5e73$var$baseGetAllKeys;


var $35cd859bfbffed75$exports = {};
var $60c75dddfb4c5d0d$exports = {};
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */ function $60c75dddfb4c5d0d$var$arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while(++index < length){
        var value = array[index];
        if (predicate(value, index, array)) result[resIndex++] = value;
    }
    return result;
}
$60c75dddfb4c5d0d$exports = $60c75dddfb4c5d0d$var$arrayFilter;


var $be10765c37052bf4$exports = {};
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */ function $be10765c37052bf4$var$stubArray() {
    return [];
}
$be10765c37052bf4$exports = $be10765c37052bf4$var$stubArray;


/** Used for built-in method references. */ var $35cd859bfbffed75$var$objectProto = Object.prototype;
/** Built-in value references. */ var $35cd859bfbffed75$var$propertyIsEnumerable = $35cd859bfbffed75$var$objectProto.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */ var $35cd859bfbffed75$var$nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */ var $35cd859bfbffed75$var$getSymbols = !$35cd859bfbffed75$var$nativeGetSymbols ? $be10765c37052bf4$exports : function(object) {
    if (object == null) return [];
    object = Object(object);
    return $60c75dddfb4c5d0d$exports($35cd859bfbffed75$var$nativeGetSymbols(object), function(symbol) {
        return $35cd859bfbffed75$var$propertyIsEnumerable.call(object, symbol);
    });
};
$35cd859bfbffed75$exports = $35cd859bfbffed75$var$getSymbols;


var $1c07158864fb993c$exports = {};
var $9f97cbe14c64efa2$exports = {};
var $d5331323453c3d3d$exports = {};
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */ function $d5331323453c3d3d$var$baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while(++index < n)result[index] = iteratee(index);
    return result;
}
$d5331323453c3d3d$exports = $d5331323453c3d3d$var$baseTimes;


var $4447bfd132d18136$exports = {};
var $5d0c33449f4fcbfc$exports = {};

var $2b96a33122402f0f$exports = {};
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function $2b96a33122402f0f$var$isObjectLike(value) {
    return value != null && typeof value == "object";
}
$2b96a33122402f0f$exports = $2b96a33122402f0f$var$isObjectLike;


/** `Object#toString` result references. */ var $5d0c33449f4fcbfc$var$argsTag = "[object Arguments]";
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */ function $5d0c33449f4fcbfc$var$baseIsArguments(value) {
    return $2b96a33122402f0f$exports(value) && $4c86c05973e00d93$exports(value) == $5d0c33449f4fcbfc$var$argsTag;
}
$5d0c33449f4fcbfc$exports = $5d0c33449f4fcbfc$var$baseIsArguments;



/** Used for built-in method references. */ var $4447bfd132d18136$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $4447bfd132d18136$var$hasOwnProperty = $4447bfd132d18136$var$objectProto.hasOwnProperty;
/** Built-in value references. */ var $4447bfd132d18136$var$propertyIsEnumerable = $4447bfd132d18136$var$objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */ var $4447bfd132d18136$var$isArguments = $5d0c33449f4fcbfc$exports(function() {
    return arguments;
}()) ? $5d0c33449f4fcbfc$exports : function(value) {
    return $2b96a33122402f0f$exports(value) && $4447bfd132d18136$var$hasOwnProperty.call(value, "callee") && !$4447bfd132d18136$var$propertyIsEnumerable.call(value, "callee");
};
$4447bfd132d18136$exports = $4447bfd132d18136$var$isArguments;




var $4yhhw = parcelRequire("4yhhw");
var $9ee41151dcdf6915$exports = {};
/** Used as references for various `Number` constants. */ var $9ee41151dcdf6915$var$MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */ var $9ee41151dcdf6915$var$reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function $9ee41151dcdf6915$var$isIndex(value, length) {
    var type = typeof value;
    length = length == null ? $9ee41151dcdf6915$var$MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && $9ee41151dcdf6915$var$reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
$9ee41151dcdf6915$exports = $9ee41151dcdf6915$var$isIndex;


var $c233d21ed5c4b860$exports = {};
var $d28806f4cc82a6e5$exports = {};

var $3efc87a856302a4c$exports = {};
/** Used as references for various `Number` constants. */ var $3efc87a856302a4c$var$MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function $3efc87a856302a4c$var$isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= $3efc87a856302a4c$var$MAX_SAFE_INTEGER;
}
$3efc87a856302a4c$exports = $3efc87a856302a4c$var$isLength;



/** `Object#toString` result references. */ var $d28806f4cc82a6e5$var$argsTag = "[object Arguments]", $d28806f4cc82a6e5$var$arrayTag = "[object Array]", $d28806f4cc82a6e5$var$boolTag = "[object Boolean]", $d28806f4cc82a6e5$var$dateTag = "[object Date]", $d28806f4cc82a6e5$var$errorTag = "[object Error]", $d28806f4cc82a6e5$var$funcTag = "[object Function]", $d28806f4cc82a6e5$var$mapTag = "[object Map]", $d28806f4cc82a6e5$var$numberTag = "[object Number]", $d28806f4cc82a6e5$var$objectTag = "[object Object]", $d28806f4cc82a6e5$var$regexpTag = "[object RegExp]", $d28806f4cc82a6e5$var$setTag = "[object Set]", $d28806f4cc82a6e5$var$stringTag = "[object String]", $d28806f4cc82a6e5$var$weakMapTag = "[object WeakMap]";
var $d28806f4cc82a6e5$var$arrayBufferTag = "[object ArrayBuffer]", $d28806f4cc82a6e5$var$dataViewTag = "[object DataView]", $d28806f4cc82a6e5$var$float32Tag = "[object Float32Array]", $d28806f4cc82a6e5$var$float64Tag = "[object Float64Array]", $d28806f4cc82a6e5$var$int8Tag = "[object Int8Array]", $d28806f4cc82a6e5$var$int16Tag = "[object Int16Array]", $d28806f4cc82a6e5$var$int32Tag = "[object Int32Array]", $d28806f4cc82a6e5$var$uint8Tag = "[object Uint8Array]", $d28806f4cc82a6e5$var$uint8ClampedTag = "[object Uint8ClampedArray]", $d28806f4cc82a6e5$var$uint16Tag = "[object Uint16Array]", $d28806f4cc82a6e5$var$uint32Tag = "[object Uint32Array]";
/** Used to identify `toStringTag` values of typed arrays. */ var $d28806f4cc82a6e5$var$typedArrayTags = {};
$d28806f4cc82a6e5$var$typedArrayTags[$d28806f4cc82a6e5$var$float32Tag] = $d28806f4cc82a6e5$var$typedArrayTags[$d28806f4cc82a6e5$var$float64Tag] = $d28806f4cc82a6e5$var$typedArrayTags[$d28806f4cc82a6e5$var$int8Tag] = $d28806f4cc82a6e5$var$typedArrayTags[$d28806f4cc82a6e5$var$int16Tag] = $d28806f4cc82a6e5$var$typedArrayTags[$d28806f4cc82a6e5$var$int32Tag] = $d28806f4cc82a6e5$var$typedArrayTags[$d28806f4cc82a6e5$var$uint8Tag] = $d28806f4cc82a6e5$var$typedArrayTags[$d28806f4cc82a6e5$var$uint8ClampedTag] = $d28806f4cc82a6e5$var$typedArrayTags[$d28806f4cc82a6e5$var$uint16Tag] = $d28806f4cc82a6e5$var$typedArrayTags[$d28806f4cc82a6e5$var$uint32Tag] = true;
$d28806f4cc82a6e5$var$typedArrayTags[$d28806f4cc82a6e5$var$argsTag] = $d28806f4cc82a6e5$var$typedArrayTags[$d28806f4cc82a6e5$var$arrayTag] = $d28806f4cc82a6e5$var$typedArrayTags[$d28806f4cc82a6e5$var$arrayBufferTag] = $d28806f4cc82a6e5$var$typedArrayTags[$d28806f4cc82a6e5$var$boolTag] = $d28806f4cc82a6e5$var$typedArrayTags[$d28806f4cc82a6e5$var$dataViewTag] = $d28806f4cc82a6e5$var$typedArrayTags[$d28806f4cc82a6e5$var$dateTag] = $d28806f4cc82a6e5$var$typedArrayTags[$d28806f4cc82a6e5$var$errorTag] = $d28806f4cc82a6e5$var$typedArrayTags[$d28806f4cc82a6e5$var$funcTag] = $d28806f4cc82a6e5$var$typedArrayTags[$d28806f4cc82a6e5$var$mapTag] = $d28806f4cc82a6e5$var$typedArrayTags[$d28806f4cc82a6e5$var$numberTag] = $d28806f4cc82a6e5$var$typedArrayTags[$d28806f4cc82a6e5$var$objectTag] = $d28806f4cc82a6e5$var$typedArrayTags[$d28806f4cc82a6e5$var$regexpTag] = $d28806f4cc82a6e5$var$typedArrayTags[$d28806f4cc82a6e5$var$setTag] = $d28806f4cc82a6e5$var$typedArrayTags[$d28806f4cc82a6e5$var$stringTag] = $d28806f4cc82a6e5$var$typedArrayTags[$d28806f4cc82a6e5$var$weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */ function $d28806f4cc82a6e5$var$baseIsTypedArray(value) {
    return $2b96a33122402f0f$exports(value) && $3efc87a856302a4c$exports(value.length) && !!$d28806f4cc82a6e5$var$typedArrayTags[$4c86c05973e00d93$exports(value)];
}
$d28806f4cc82a6e5$exports = $d28806f4cc82a6e5$var$baseIsTypedArray;


var $0252746d19393a6b$exports = {};
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */ function $0252746d19393a6b$var$baseUnary(func) {
    return function(value) {
        return func(value);
    };
}
$0252746d19393a6b$exports = $0252746d19393a6b$var$baseUnary;



var $j7b0x = parcelRequire("j7b0x");
/* Node.js helper references. */ var $c233d21ed5c4b860$var$nodeIsTypedArray = $j7b0x && $j7b0x.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */ var $c233d21ed5c4b860$var$isTypedArray = $c233d21ed5c4b860$var$nodeIsTypedArray ? $0252746d19393a6b$exports($c233d21ed5c4b860$var$nodeIsTypedArray) : $d28806f4cc82a6e5$exports;
$c233d21ed5c4b860$exports = $c233d21ed5c4b860$var$isTypedArray;


/** Used for built-in method references. */ var $9f97cbe14c64efa2$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $9f97cbe14c64efa2$var$hasOwnProperty = $9f97cbe14c64efa2$var$objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */ function $9f97cbe14c64efa2$var$arrayLikeKeys(value, inherited) {
    var isArr = $3dc651d81166744d$exports(value), isArg = !isArr && $4447bfd132d18136$exports(value), isBuff = !isArr && !isArg && $4yhhw(value), isType = !isArr && !isArg && !isBuff && $c233d21ed5c4b860$exports(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? $d5331323453c3d3d$exports(value.length, String) : [], length = result.length;
    for(var key in value)if ((inherited || $9f97cbe14c64efa2$var$hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    $9ee41151dcdf6915$exports(key, length)))) result.push(key);
    return result;
}
$9f97cbe14c64efa2$exports = $9f97cbe14c64efa2$var$arrayLikeKeys;


var $03f72b45058985f6$exports = {};
var $cc53c21e5c1b5aaf$exports = {};
/** Used for built-in method references. */ var $cc53c21e5c1b5aaf$var$objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */ function $cc53c21e5c1b5aaf$var$isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || $cc53c21e5c1b5aaf$var$objectProto;
    return value === proto;
}
$cc53c21e5c1b5aaf$exports = $cc53c21e5c1b5aaf$var$isPrototype;


var $9df77bc354f0b25a$exports = {};
var $e3315286c94c7434$exports = {};
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function $e3315286c94c7434$var$overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
$e3315286c94c7434$exports = $e3315286c94c7434$var$overArg;


/* Built-in method references for those with the same name as other `lodash` methods. */ var $9df77bc354f0b25a$var$nativeKeys = $e3315286c94c7434$exports(Object.keys, Object);
$9df77bc354f0b25a$exports = $9df77bc354f0b25a$var$nativeKeys;


/** Used for built-in method references. */ var $03f72b45058985f6$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $03f72b45058985f6$var$hasOwnProperty = $03f72b45058985f6$var$objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function $03f72b45058985f6$var$baseKeys(object) {
    if (!$cc53c21e5c1b5aaf$exports(object)) return $9df77bc354f0b25a$exports(object);
    var result = [];
    for(var key in Object(object))if ($03f72b45058985f6$var$hasOwnProperty.call(object, key) && key != "constructor") result.push(key);
    return result;
}
$03f72b45058985f6$exports = $03f72b45058985f6$var$baseKeys;


var $fe4d6a36cf06fa86$exports = {};


/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function $fe4d6a36cf06fa86$var$isArrayLike(value) {
    return value != null && $3efc87a856302a4c$exports(value.length) && !$d8aac56c7973b529$exports(value);
}
$fe4d6a36cf06fa86$exports = $fe4d6a36cf06fa86$var$isArrayLike;


/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */ function $1c07158864fb993c$var$keys(object) {
    return $fe4d6a36cf06fa86$exports(object) ? $9f97cbe14c64efa2$exports(object) : $03f72b45058985f6$exports(object);
}
$1c07158864fb993c$exports = $1c07158864fb993c$var$keys;


/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */ function $cef3427cf6ff474f$var$getAllKeys(object) {
    return $73dcb537f1dc5e73$exports(object, $1c07158864fb993c$exports, $35cd859bfbffed75$exports);
}
$cef3427cf6ff474f$exports = $cef3427cf6ff474f$var$getAllKeys;


/** Used to compose bitmasks for value comparisons. */ var $a3c90672575c02e2$var$COMPARE_PARTIAL_FLAG = 1;
/** Used for built-in method references. */ var $a3c90672575c02e2$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $a3c90672575c02e2$var$hasOwnProperty = $a3c90672575c02e2$var$objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function $a3c90672575c02e2$var$equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & $a3c90672575c02e2$var$COMPARE_PARTIAL_FLAG, objProps = $cef3427cf6ff474f$exports(object), objLength = objProps.length, othProps = $cef3427cf6ff474f$exports(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) return false;
    var index = objLength;
    while(index--){
        var key = objProps[index];
        if (!(isPartial ? key in other : $a3c90672575c02e2$var$hasOwnProperty.call(other, key))) return false;
    }
    // Check that cyclic values are equal.
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) return objStacked == other && othStacked == object;
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while(++index < objLength){
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
        }
        skipCtor || (skipCtor = key == "constructor");
    }
    if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) result = false;
    }
    stack["delete"](object);
    stack["delete"](other);
    return result;
}
$a3c90672575c02e2$exports = $a3c90672575c02e2$var$equalObjects;


var $9bf4ff5389a5a41a$exports = {};
var $a90483ceb1b85acf$exports = {};


var $hMXRG = parcelRequire("hMXRG");
/* Built-in method references that are verified to be native. */ var $a90483ceb1b85acf$var$DataView = $b90de35121a4bae1$exports($hMXRG, "DataView");
$a90483ceb1b85acf$exports = $a90483ceb1b85acf$var$DataView;



var $dc1ad8d8edba2809$exports = {};


var $hMXRG = parcelRequire("hMXRG");
/* Built-in method references that are verified to be native. */ var $dc1ad8d8edba2809$var$Promise = $b90de35121a4bae1$exports($hMXRG, "Promise");
$dc1ad8d8edba2809$exports = $dc1ad8d8edba2809$var$Promise;


var $9fcbf1bfaf7b5890$exports = {};


var $hMXRG = parcelRequire("hMXRG");
/* Built-in method references that are verified to be native. */ var $9fcbf1bfaf7b5890$var$Set = $b90de35121a4bae1$exports($hMXRG, "Set");
$9fcbf1bfaf7b5890$exports = $9fcbf1bfaf7b5890$var$Set;


var $e003c08f2c847c2e$exports = {};


var $hMXRG = parcelRequire("hMXRG");
/* Built-in method references that are verified to be native. */ var $e003c08f2c847c2e$var$WeakMap = $b90de35121a4bae1$exports($hMXRG, "WeakMap");
$e003c08f2c847c2e$exports = $e003c08f2c847c2e$var$WeakMap;




/** `Object#toString` result references. */ var $9bf4ff5389a5a41a$var$mapTag = "[object Map]", $9bf4ff5389a5a41a$var$objectTag = "[object Object]", $9bf4ff5389a5a41a$var$promiseTag = "[object Promise]", $9bf4ff5389a5a41a$var$setTag = "[object Set]", $9bf4ff5389a5a41a$var$weakMapTag = "[object WeakMap]";
var $9bf4ff5389a5a41a$var$dataViewTag = "[object DataView]";
/** Used to detect maps, sets, and weakmaps. */ var $9bf4ff5389a5a41a$var$dataViewCtorString = $86e59b98fae513ad$exports($a90483ceb1b85acf$exports), $9bf4ff5389a5a41a$var$mapCtorString = $86e59b98fae513ad$exports($d31abbb83d6d8594$exports), $9bf4ff5389a5a41a$var$promiseCtorString = $86e59b98fae513ad$exports($dc1ad8d8edba2809$exports), $9bf4ff5389a5a41a$var$setCtorString = $86e59b98fae513ad$exports($9fcbf1bfaf7b5890$exports), $9bf4ff5389a5a41a$var$weakMapCtorString = $86e59b98fae513ad$exports($e003c08f2c847c2e$exports);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ var $9bf4ff5389a5a41a$var$getTag = $4c86c05973e00d93$exports;
// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ($a90483ceb1b85acf$exports && $9bf4ff5389a5a41a$var$getTag(new $a90483ceb1b85acf$exports(new ArrayBuffer(1))) != $9bf4ff5389a5a41a$var$dataViewTag || $d31abbb83d6d8594$exports && $9bf4ff5389a5a41a$var$getTag(new $d31abbb83d6d8594$exports) != $9bf4ff5389a5a41a$var$mapTag || $dc1ad8d8edba2809$exports && $9bf4ff5389a5a41a$var$getTag($dc1ad8d8edba2809$exports.resolve()) != $9bf4ff5389a5a41a$var$promiseTag || $9fcbf1bfaf7b5890$exports && $9bf4ff5389a5a41a$var$getTag(new $9fcbf1bfaf7b5890$exports) != $9bf4ff5389a5a41a$var$setTag || $e003c08f2c847c2e$exports && $9bf4ff5389a5a41a$var$getTag(new $e003c08f2c847c2e$exports) != $9bf4ff5389a5a41a$var$weakMapTag) $9bf4ff5389a5a41a$var$getTag = function(value) {
    var result = $4c86c05973e00d93$exports(value), Ctor = result == $9bf4ff5389a5a41a$var$objectTag ? value.constructor : undefined, ctorString = Ctor ? $86e59b98fae513ad$exports(Ctor) : "";
    if (ctorString) switch(ctorString){
        case $9bf4ff5389a5a41a$var$dataViewCtorString:
            return $9bf4ff5389a5a41a$var$dataViewTag;
        case $9bf4ff5389a5a41a$var$mapCtorString:
            return $9bf4ff5389a5a41a$var$mapTag;
        case $9bf4ff5389a5a41a$var$promiseCtorString:
            return $9bf4ff5389a5a41a$var$promiseTag;
        case $9bf4ff5389a5a41a$var$setCtorString:
            return $9bf4ff5389a5a41a$var$setTag;
        case $9bf4ff5389a5a41a$var$weakMapCtorString:
            return $9bf4ff5389a5a41a$var$weakMapTag;
    }
    return result;
};
$9bf4ff5389a5a41a$exports = $9bf4ff5389a5a41a$var$getTag;




var $4yhhw = parcelRequire("4yhhw");

/** Used to compose bitmasks for value comparisons. */ var $ea68004ba56a240a$var$COMPARE_PARTIAL_FLAG = 1;
/** `Object#toString` result references. */ var $ea68004ba56a240a$var$argsTag = "[object Arguments]", $ea68004ba56a240a$var$arrayTag = "[object Array]", $ea68004ba56a240a$var$objectTag = "[object Object]";
/** Used for built-in method references. */ var $ea68004ba56a240a$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $ea68004ba56a240a$var$hasOwnProperty = $ea68004ba56a240a$var$objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function $ea68004ba56a240a$var$baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = $3dc651d81166744d$exports(object), othIsArr = $3dc651d81166744d$exports(other), objTag = objIsArr ? $ea68004ba56a240a$var$arrayTag : $9bf4ff5389a5a41a$exports(object), othTag = othIsArr ? $ea68004ba56a240a$var$arrayTag : $9bf4ff5389a5a41a$exports(other);
    objTag = objTag == $ea68004ba56a240a$var$argsTag ? $ea68004ba56a240a$var$objectTag : objTag;
    othTag = othTag == $ea68004ba56a240a$var$argsTag ? $ea68004ba56a240a$var$objectTag : othTag;
    var objIsObj = objTag == $ea68004ba56a240a$var$objectTag, othIsObj = othTag == $ea68004ba56a240a$var$objectTag, isSameTag = objTag == othTag;
    if (isSameTag && $4yhhw(object)) {
        if (!$4yhhw(other)) return false;
        objIsArr = true;
        objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
        stack || (stack = new $e1f43ebf200fa4fb$exports);
        return objIsArr || $c233d21ed5c4b860$exports(object) ? $23151385128909bb$exports(object, other, bitmask, customizer, equalFunc, stack) : $eae024c0dd12342d$exports(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & $ea68004ba56a240a$var$COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && $ea68004ba56a240a$var$hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && $ea68004ba56a240a$var$hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new $e1f43ebf200fa4fb$exports);
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
    }
    if (!isSameTag) return false;
    stack || (stack = new $e1f43ebf200fa4fb$exports);
    return $a3c90672575c02e2$exports(object, other, bitmask, customizer, equalFunc, stack);
}
$ea68004ba56a240a$exports = $ea68004ba56a240a$var$baseIsEqualDeep;



/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */ function $2bdc3aabd052232d$var$baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) return true;
    if (value == null || other == null || !$2b96a33122402f0f$exports(value) && !$2b96a33122402f0f$exports(other)) return value !== value && other !== other;
    return $ea68004ba56a240a$exports(value, other, bitmask, customizer, $2bdc3aabd052232d$var$baseIsEqual, stack);
}
$2bdc3aabd052232d$exports = $2bdc3aabd052232d$var$baseIsEqual;


/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */ function $4048bd02b85327ad$var$isEqual(value, other) {
    return $2bdc3aabd052232d$exports(value, other);
}
$4048bd02b85327ad$exports = $4048bd02b85327ad$var$isEqual;



/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */ /* eslint-disable require-jsdoc, valid-jsdoc */ var $26773959d606750f$var$MapShim = function() {
    if (typeof Map !== "undefined") return Map;
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */ function getIndex(arr, key) {
        var result = -1;
        arr.some(function(entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ function() {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */ get: function() {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */ class_1.prototype.get = function(key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */ class_1.prototype.set = function(key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) this.__entries__[index][1] = value;
            else this.__entries__.push([
                key,
                value
            ]);
        };
        /**
         * @param {*} key
         * @returns {void}
         */ class_1.prototype.delete = function(key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) entries.splice(index, 1);
        };
        /**
         * @param {*} key
         * @returns {void}
         */ class_1.prototype.has = function(key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */ class_1.prototype.clear = function() {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */ class_1.prototype.forEach = function(callback, ctx) {
            if (ctx === void 0) ctx = null;
            for(var _i = 0, _a = this.__entries__; _i < _a.length; _i++){
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }();
}();
/**
 * Detects whether window and document objects are available in current environment.
 */ var $26773959d606750f$var$isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;
// Returns global object of a current environment.
var $26773959d606750f$var$global$1 = function() {
    if (typeof $parcel$global !== "undefined" && $parcel$global.Math === Math) return $parcel$global;
    if (typeof self !== "undefined" && self.Math === Math) return self;
    if (typeof window !== "undefined" && window.Math === Math) return window;
    // eslint-disable-next-line no-new-func
    return Function("return this")();
}();
/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */ var $26773959d606750f$var$requestAnimationFrame$1 = function() {
    if (typeof requestAnimationFrame === "function") // It's required to use a bounded function because IE sometimes throws
    // an "Invalid calling object" error if rAF is invoked without the global
    // object on the left hand side.
    return requestAnimationFrame.bind($26773959d606750f$var$global$1);
    return function(callback) {
        return setTimeout(function() {
            return callback(Date.now());
        }, 1000 / 60);
    };
}();
// Defines minimum timeout before adding a trailing call.
var $26773959d606750f$var$trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */ function $26773959d606750f$var$throttle(callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */ function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) proxy();
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */ function timeoutCallback() {
        $26773959d606750f$var$requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */ function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < $26773959d606750f$var$trailingTimeout) return;
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        } else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}
// Minimum delay before invoking the update of observers.
var $26773959d606750f$var$REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var $26773959d606750f$var$transitionKeys = [
    "top",
    "right",
    "bottom",
    "left",
    "width",
    "height",
    "size",
    "weight"
];
// Check if MutationObserver is available.
var $26773959d606750f$var$mutationObserverSupported = typeof MutationObserver !== "undefined";
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */ var $26773959d606750f$var$ResizeObserverController = /** @class */ function() {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */ function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */ this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */ this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */ this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */ this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = $26773959d606750f$var$throttle(this.refresh.bind(this), $26773959d606750f$var$REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */ ResizeObserverController.prototype.addObserver = function(observer) {
        if (!~this.observers_.indexOf(observer)) this.observers_.push(observer);
        // Add listeners if they haven't been added yet.
        if (!this.connected_) this.connect_();
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */ ResizeObserverController.prototype.removeObserver = function(observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) observers.splice(index, 1);
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) this.disconnect_();
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */ ResizeObserverController.prototype.refresh = function() {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) this.refresh();
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */ ResizeObserverController.prototype.updateObservers_ = function() {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function(observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function(observer) {
            return observer.broadcastActive();
        });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */ ResizeObserverController.prototype.connect_ = function() {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!$26773959d606750f$var$isBrowser || this.connected_) return;
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener("transitionend", this.onTransitionEnd_);
        window.addEventListener("resize", this.refresh);
        if ($26773959d606750f$var$mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        } else {
            document.addEventListener("DOMSubtreeModified", this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */ ResizeObserverController.prototype.disconnect_ = function() {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!$26773959d606750f$var$isBrowser || !this.connected_) return;
        document.removeEventListener("transitionend", this.onTransitionEnd_);
        window.removeEventListener("resize", this.refresh);
        if (this.mutationsObserver_) this.mutationsObserver_.disconnect();
        if (this.mutationEventsAdded_) document.removeEventListener("DOMSubtreeModified", this.refresh);
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */ ResizeObserverController.prototype.onTransitionEnd_ = function(_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? "" : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = $26773959d606750f$var$transitionKeys.some(function(key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) this.refresh();
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */ ResizeObserverController.getInstance = function() {
        if (!this.instance_) this.instance_ = new ResizeObserverController();
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */ ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}();
/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */ var $26773959d606750f$var$defineConfigurable = function(target, props) {
    for(var _i = 0, _a = Object.keys(props); _i < _a.length; _i++){
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
};
/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */ var $26773959d606750f$var$getWindowOf = function(target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || $26773959d606750f$var$global$1;
};
// Placeholder of an empty content rectangle.
var $26773959d606750f$var$emptyRect = $26773959d606750f$var$createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */ function $26773959d606750f$var$toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */ function $26773959d606750f$var$getBordersSize(styles) {
    var positions = [];
    for(var _i = 1; _i < arguments.length; _i++)positions[_i - 1] = arguments[_i];
    return positions.reduce(function(size, position) {
        var value = styles["border-" + position + "-width"];
        return size + $26773959d606750f$var$toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */ function $26773959d606750f$var$getPaddings(styles) {
    var positions = [
        "top",
        "right",
        "bottom",
        "left"
    ];
    var paddings = {};
    for(var _i = 0, positions_1 = positions; _i < positions_1.length; _i++){
        var position = positions_1[_i];
        var value = styles["padding-" + position];
        paddings[position] = $26773959d606750f$var$toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */ function $26773959d606750f$var$getSVGContentRect(target) {
    var bbox = target.getBBox();
    return $26773959d606750f$var$createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */ function $26773959d606750f$var$getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) return $26773959d606750f$var$emptyRect;
    var styles = $26773959d606750f$var$getWindowOf(target).getComputedStyle(target);
    var paddings = $26773959d606750f$var$getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = $26773959d606750f$var$toFloat(styles.width), height = $26773959d606750f$var$toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === "border-box") {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) width -= $26773959d606750f$var$getBordersSize(styles, "left", "right") + horizPad;
        if (Math.round(height + vertPad) !== clientHeight) height -= $26773959d606750f$var$getBordersSize(styles, "top", "bottom") + vertPad;
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!$26773959d606750f$var$isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) width -= vertScrollbar;
        if (Math.abs(horizScrollbar) !== 1) height -= horizScrollbar;
    }
    return $26773959d606750f$var$createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */ var $26773959d606750f$var$isSVGGraphicsElement = function() {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== "undefined") return function(target) {
        return target instanceof $26773959d606750f$var$getWindowOf(target).SVGGraphicsElement;
    };
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function(target) {
        return target instanceof $26773959d606750f$var$getWindowOf(target).SVGElement && typeof target.getBBox === "function";
    };
}();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */ function $26773959d606750f$var$isDocumentElement(target) {
    return target === $26773959d606750f$var$getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */ function $26773959d606750f$var$getContentRect(target) {
    if (!$26773959d606750f$var$isBrowser) return $26773959d606750f$var$emptyRect;
    if ($26773959d606750f$var$isSVGGraphicsElement(target)) return $26773959d606750f$var$getSVGContentRect(target);
    return $26773959d606750f$var$getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */ function $26773959d606750f$var$createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    $26773959d606750f$var$defineConfigurable(rect, {
        x: x,
        y: y,
        width: width,
        height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */ function $26773959d606750f$var$createRectInit(x, y, width, height) {
    return {
        x: x,
        y: y,
        width: width,
        height: height
    };
}
/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */ var $26773959d606750f$var$ResizeObservation = /** @class */ function() {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */ function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */ this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */ this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */ this.contentRect_ = $26773959d606750f$var$createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */ ResizeObservation.prototype.isActive = function() {
        var rect = $26773959d606750f$var$getContentRect(this.target);
        this.contentRect_ = rect;
        return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */ ResizeObservation.prototype.broadcastRect = function() {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}();
var $26773959d606750f$var$ResizeObserverEntry = /** @class */ function() {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */ function ResizeObserverEntry(target, rectInit) {
        var contentRect = $26773959d606750f$var$createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        $26773959d606750f$var$defineConfigurable(this, {
            target: target,
            contentRect: contentRect
        });
    }
    return ResizeObserverEntry;
}();
var $26773959d606750f$var$ResizeObserverSPI = /** @class */ function() {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */ function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */ this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */ this.observations_ = new $26773959d606750f$var$MapShim();
        if (typeof callback !== "function") throw new TypeError("The callback provided as parameter 1 is not a function.");
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */ ResizeObserverSPI.prototype.observe = function(target) {
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === "undefined" || !(Element instanceof Object)) return;
        if (!(target instanceof $26773959d606750f$var$getWindowOf(target).Element)) throw new TypeError('parameter 1 is not of type "Element".');
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) return;
        observations.set(target, new $26773959d606750f$var$ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */ ResizeObserverSPI.prototype.unobserve = function(target) {
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === "undefined" || !(Element instanceof Object)) return;
        if (!(target instanceof $26773959d606750f$var$getWindowOf(target).Element)) throw new TypeError('parameter 1 is not of type "Element".');
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) return;
        observations.delete(target);
        if (!observations.size) this.controller_.removeObserver(this);
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */ ResizeObserverSPI.prototype.disconnect = function() {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */ ResizeObserverSPI.prototype.gatherActive = function() {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function(observation) {
            if (observation.isActive()) _this.activeObservations_.push(observation);
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */ ResizeObserverSPI.prototype.broadcastActive = function() {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) return;
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function(observation) {
            return new $26773959d606750f$var$ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */ ResizeObserverSPI.prototype.clearActive = function() {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */ ResizeObserverSPI.prototype.hasActive = function() {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}();
// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var $26773959d606750f$var$observers = typeof WeakMap !== "undefined" ? new WeakMap() : new $26773959d606750f$var$MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */ var $26773959d606750f$var$ResizeObserver = /** @class */ function() {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */ function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var controller = $26773959d606750f$var$ResizeObserverController.getInstance();
        var observer = new $26773959d606750f$var$ResizeObserverSPI(callback, controller, this);
        $26773959d606750f$var$observers.set(this, observer);
    }
    return ResizeObserver;
}();
// Expose public methods of ResizeObserver.
[
    "observe",
    "unobserve",
    "disconnect"
].forEach(function(method) {
    $26773959d606750f$var$ResizeObserver.prototype[method] = function() {
        var _a;
        return (_a = $26773959d606750f$var$observers.get(this))[method].apply(_a, arguments);
    };
});
var $26773959d606750f$var$index = function() {
    // Export existing implementation if available.
    if (typeof $26773959d606750f$var$global$1.ResizeObserver !== "undefined") return $26773959d606750f$var$global$1.ResizeObserver;
    return $26773959d606750f$var$ResizeObserver;
}();
var $26773959d606750f$export$2e2bcd8739ae039 = $26773959d606750f$var$index;



function $0fd446baf0bc74fc$export$792a4d7b8e9efb33(prev, next) {
    if (prev === next) return true;
    if (!prev || !next) return false;
    if ("pageX" in next && "pageY" in next) return prev.pageX === next.pageX && prev.pageY === next.pageY;
    if ("clientX" in next && "clientY" in next) return prev.clientX === next.clientX && prev.clientY === next.clientY;
    return false;
}
function $0fd446baf0bc74fc$export$2284e449d64b22d5(activeElement, container) {
    // Focus back if is in the container
    if (activeElement !== document.activeElement && (0, $efb4f91f6823d701$export$2e2bcd8739ae039)(container, activeElement) && typeof activeElement.focus === "function") activeElement.focus();
}
function $0fd446baf0bc74fc$export$f56787db9e74dfe(element, callback) {
    var prevWidth = null;
    var prevHeight = null;
    function onResize(_ref) {
        var _ref2 = (0, $8634a4ebc2135fc2$export$2e2bcd8739ae039)(_ref, 1), target = _ref2[0].target;
        if (!document.documentElement.contains(target)) return;
        var _target$getBoundingCl = target.getBoundingClientRect(), width = _target$getBoundingCl.width, height = _target$getBoundingCl.height;
        var fixedWidth = Math.floor(width);
        var fixedHeight = Math.floor(height);
        if (prevWidth !== fixedWidth || prevHeight !== fixedHeight) // https://webkit.org/blog/9997/resizeobserver-in-webkit/
        Promise.resolve().then(function() {
            callback({
                width: fixedWidth,
                height: fixedHeight
            });
        });
        prevWidth = fixedWidth;
        prevHeight = fixedHeight;
    }
    var resizeObserver = new (0, $26773959d606750f$export$2e2bcd8739ae039)(onResize);
    if (element) resizeObserver.observe(element);
    return function() {
        resizeObserver.disconnect();
    };
}



var $2e939c1cf42a3e3a$export$2e2bcd8739ae039 = function(callback, buffer) {
    var calledRef = (0, $fP0te$react).useRef(false);
    var timeoutRef = (0, $fP0te$react).useRef(null);
    function cancelTrigger() {
        window.clearTimeout(timeoutRef.current);
    }
    function trigger(force) {
        cancelTrigger();
        if (!calledRef.current || force === true) {
            if (callback() === false) // Not delay since callback cancelled self
            return;
            calledRef.current = true;
            timeoutRef.current = window.setTimeout(function() {
                calledRef.current = false;
            }, buffer);
        } else timeoutRef.current = window.setTimeout(function() {
            calledRef.current = false;
            trigger();
        }, buffer);
    }
    return [
        trigger,
        function() {
            calledRef.current = false;
            cancelTrigger();
        }
    ];
};


function $787d3d1672e63b81$var$getElement(func) {
    if (typeof func !== "function") return null;
    return func();
}
function $787d3d1672e63b81$var$getPoint(point) {
    if ((0, $f301c3a9cca1c45b$export$2e2bcd8739ae039)(point) !== "object" || !point) return null;
    return point;
}
var $787d3d1672e63b81$var$Align = function Align(_ref, ref) {
    var children = _ref.children, disabled = _ref.disabled, target = _ref.target, align = _ref.align, onAlign = _ref.onAlign, monitorWindowResize = _ref.monitorWindowResize, _ref$monitorBufferTim = _ref.monitorBufferTime, monitorBufferTime = _ref$monitorBufferTim === void 0 ? 0 : _ref$monitorBufferTim;
    var cacheRef = (0, $fP0te$react).useRef({});
    var nodeRef = (0, $fP0te$react).useRef();
    var childNode = (0, $fP0te$react).Children.only(children); // ===================== Align ======================
    // We save the props here to avoid closure makes props ood
    var forceAlignPropsRef = (0, $fP0te$react).useRef({});
    forceAlignPropsRef.current.disabled = disabled;
    forceAlignPropsRef.current.target = target;
    forceAlignPropsRef.current.align = align;
    forceAlignPropsRef.current.onAlign = onAlign;
    var _useBuffer = (0, $2e939c1cf42a3e3a$export$2e2bcd8739ae039)(function() {
        var _forceAlignPropsRef$c = forceAlignPropsRef.current, latestDisabled = _forceAlignPropsRef$c.disabled, latestTarget = _forceAlignPropsRef$c.target, latestAlign = _forceAlignPropsRef$c.align, latestOnAlign = _forceAlignPropsRef$c.onAlign;
        if (!latestDisabled && latestTarget) {
            var source = nodeRef.current;
            var result;
            var element = $787d3d1672e63b81$var$getElement(latestTarget);
            var point = $787d3d1672e63b81$var$getPoint(latestTarget);
            cacheRef.current.element = element;
            cacheRef.current.point = point;
            cacheRef.current.align = latestAlign; // IE lose focus after element realign
            // We should record activeElement and restore later
            // IE lose focus after element realign
            // We should record activeElement and restore later
            var _document = document, activeElement = _document.activeElement; // We only align when element is visible
            // We only align when element is visible
            if (element && (0, $373960f9d28bc40d$export$2e2bcd8739ae039)(element)) result = (0, $39aaf537f648375f$export$ec21431d5ee6c534)(source, element, latestAlign);
            else if (point) result = (0, $39aaf537f648375f$export$38f0e12f0aa28098)(source, point, latestAlign);
            (0, $0fd446baf0bc74fc$export$2284e449d64b22d5)(activeElement, source);
            if (latestOnAlign && result) latestOnAlign(source, result);
            return true;
        }
        return false;
    }, monitorBufferTime), _useBuffer2 = (0, $8634a4ebc2135fc2$export$2e2bcd8739ae039)(_useBuffer, 2), _forceAlign = _useBuffer2[0], cancelForceAlign = _useBuffer2[1]; // ===================== Effect =====================
    // Listen for target updated
    var resizeMonitor = (0, $fP0te$react).useRef({
        cancel: function cancel() {}
    }); // Listen for source updated
    var sourceResizeMonitor = (0, $fP0te$react).useRef({
        cancel: function cancel() {}
    });
    (0, $fP0te$react).useEffect(function() {
        var element = $787d3d1672e63b81$var$getElement(target);
        var point = $787d3d1672e63b81$var$getPoint(target);
        if (nodeRef.current !== sourceResizeMonitor.current.element) {
            sourceResizeMonitor.current.cancel();
            sourceResizeMonitor.current.element = nodeRef.current;
            sourceResizeMonitor.current.cancel = (0, $0fd446baf0bc74fc$export$f56787db9e74dfe)(nodeRef.current, _forceAlign);
        }
        if (cacheRef.current.element !== element || !(0, $0fd446baf0bc74fc$export$792a4d7b8e9efb33)(cacheRef.current.point, point) || !(0, (/*@__PURE__*/$parcel$interopDefault($4048bd02b85327ad$exports)))(cacheRef.current.align, align)) {
            _forceAlign(); // Add resize observer
            if (resizeMonitor.current.element !== element) {
                resizeMonitor.current.cancel();
                resizeMonitor.current.element = element;
                resizeMonitor.current.cancel = (0, $0fd446baf0bc74fc$export$f56787db9e74dfe)(element, _forceAlign);
            }
        }
    }); // Listen for disabled change
    (0, $fP0te$react).useEffect(function() {
        if (!disabled) _forceAlign();
        else cancelForceAlign();
    }, [
        disabled
    ]); // Listen for window resize
    var winResizeRef = (0, $fP0te$react).useRef(null);
    (0, $fP0te$react).useEffect(function() {
        if (monitorWindowResize) {
            if (!winResizeRef.current) winResizeRef.current = (0, $943cd8382ac35371$export$2e2bcd8739ae039)(window, "resize", _forceAlign);
        } else if (winResizeRef.current) {
            winResizeRef.current.remove();
            winResizeRef.current = null;
        }
    }, [
        monitorWindowResize
    ]); // Clear all if unmount
    (0, $fP0te$react).useEffect(function() {
        return function() {
            resizeMonitor.current.cancel();
            sourceResizeMonitor.current.cancel();
            if (winResizeRef.current) winResizeRef.current.remove();
            cancelForceAlign();
        };
    }, []); // ====================== Ref =======================
    (0, $fP0te$react).useImperativeHandle(ref, function() {
        return {
            forceAlign: function forceAlign() {
                return _forceAlign(true);
            }
        };
    }); // ===================== Render =====================
    if (/*#__PURE__*/ (0, $fP0te$react).isValidElement(childNode)) childNode = /*#__PURE__*/ (0, $fP0te$react).cloneElement(childNode, {
        ref: (0, $225049917dd1e288$export$ab452c34e8e05029)(childNode.ref, nodeRef)
    });
    return childNode;
};
var $787d3d1672e63b81$var$RcAlign = /*#__PURE__*/ (0, $fP0te$react).forwardRef($787d3d1672e63b81$var$Align);
$787d3d1672e63b81$var$RcAlign.displayName = "Align";
var $787d3d1672e63b81$export$2e2bcd8739ae039 = $787d3d1672e63b81$var$RcAlign;


var $f0359532604d4c80$export$2e2bcd8739ae039 = (0, $787d3d1672e63b81$export$2e2bcd8739ae039);




/**
 * Wrap `React.useLayoutEffect` which will not throw warning message in test env
 */ var $18457910f23f46f2$var$useLayoutEffect = (0, $10691ee22657bd97$export$2e2bcd8739ae039)() ? $fP0te$useLayoutEffect : $fP0te$useEffect;
var $18457910f23f46f2$export$2e2bcd8739ae039 = $18457910f23f46f2$var$useLayoutEffect;
var $18457910f23f46f2$export$9283e56bae2f7b0f = function useLayoutUpdateEffect(callback, deps) {
    var firstMountRef = $fP0te$useRef(true);
    $18457910f23f46f2$var$useLayoutEffect(function() {
        if (!firstMountRef.current) return callback();
    }, deps); // We tell react that first mount has passed
    $18457910f23f46f2$var$useLayoutEffect(function() {
        firstMountRef.current = false;
        return function() {
            firstMountRef.current = true;
        };
    }, []);
};





function $ed2d296a9d7902de$export$2e2bcd8739ae039() {
    "use strict";
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ $ed2d296a9d7902de$export$2e2bcd8739ae039 = function _regeneratorRuntime() {
        return exports;
    };
    var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        return Object.defineProperty(obj, key, {
            value: value,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), obj[key];
    }
    try {
        define({}, "");
    } catch (err) {
        define = function define(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
        return generator._invoke = function(innerFn, self, context) {
            var state = "suspendedStart";
            return function(method, arg) {
                if ("executing" === state) throw new Error("Generator is already running");
                if ("completed" === state) {
                    if ("throw" === method) throw arg;
                    return doneResult();
                }
                for(context.method = method, context.arg = arg;;){
                    var delegate = context.delegate;
                    if (delegate) {
                        var delegateResult = maybeInvokeDelegate(delegate, context);
                        if (delegateResult) {
                            if (delegateResult === ContinueSentinel) continue;
                            return delegateResult;
                        }
                    }
                    if ("next" === context.method) context.sent = context._sent = context.arg;
                    else if ("throw" === context.method) {
                        if ("suspendedStart" === state) throw state = "completed", context.arg;
                        context.dispatchException(context.arg);
                    } else "return" === context.method && context.abrupt("return", context.arg);
                    state = "executing";
                    var record = tryCatch(innerFn, self, context);
                    if ("normal" === record.type) {
                        if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
                        return {
                            value: record.arg,
                            done: context.done
                        };
                    }
                    "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
                }
            };
        }(innerFn, self, context), generator;
    }
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if ("throw" !== record.type) {
                var result = record.arg, value = result.value;
                return value && "object" == (0, $f301c3a9cca1c45b$export$2e2bcd8739ae039)(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                }) : PromiseImpl.resolve(value).then(function(unwrapped) {
                    result.value = unwrapped, resolve(result);
                }, function(error) {
                    return invoke("throw", error, resolve, reject);
                });
            }
            reject(record.arg);
        }
        var previousPromise;
        this._invoke = function(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        };
    }
    function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (undefined === method) {
            if (context.delegate = null, "throw" === context.method) {
                if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
                context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
        var info = record.arg;
        return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if ("function" == typeof iterable.next) return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    for(; ++i < iterable.length;){
                        if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
                    }
                    return next.value = undefined, next.done = !0, next;
                };
                return next.next = next;
            }
        }
        return {
            next: doneResult
        };
    }
    function doneResult() {
        return {
            value: undefined,
            done: !0
        };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function(genFun) {
        var ctor = "function" == typeof genFun && genFun.constructor;
        return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function(genFun) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function(arg) {
        return {
            __await: arg
        };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        void 0 === PromiseImpl && (PromiseImpl = Promise);
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function() {
        return this;
    }), define(Gp, "toString", function() {
        return "[object Generator]";
    }), exports.keys = function(object) {
        var keys = [];
        for(var key in object)keys.push(key);
        return keys.reverse(), function next() {
            for(; keys.length;){
                var key = keys.pop();
                if (key in object) return next.value = key, next.done = !1, next;
            }
            return next.done = !0, next;
        };
    }, exports.values = values, Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for(var name in this)"t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
        },
        stop: function stop() {
            this.done = !0;
            var rootRecord = this.tryEntries[0].completion;
            if ("throw" === rootRecord.type) throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function dispatchException(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i], record = entry.completion;
                if ("root" === entry.tryLoc) return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                    } else {
                        if (!hasFinally) throw new Error("try statement without catch or finally");
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    }
                }
            }
        },
        abrupt: function abrupt(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
            var record = finallyEntry ? finallyEntry.completion : {};
            return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
        },
        complete: function complete(record, afterLoc) {
            if ("throw" === record.type) throw record.arg;
            return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
            }
        },
        "catch": function _catch(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if ("throw" === record.type) {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
            return this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
        }
    }, exports;
}


function $f195c305e971c52e$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function $f195c305e971c52e$export$2e2bcd8739ae039(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                $f195c305e971c52e$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                $f195c305e971c52e$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}






var $c7019916e5f16222$var$StatusQueue = [
    "measure",
    "alignPre",
    "align",
    null,
    "motion"
];
var $c7019916e5f16222$export$2e2bcd8739ae039 = function(visible, doMeasure) {
    var _useState = (0, $cc675eee28d460e9$export$2e2bcd8739ae039)(null), _useState2 = (0, $8634a4ebc2135fc2$export$2e2bcd8739ae039)(_useState, 2), status = _useState2[0], setInternalStatus = _useState2[1];
    var rafRef = (0, $fP0te$useRef)();
    function setStatus(nextStatus) {
        setInternalStatus(nextStatus, true);
    }
    function cancelRaf() {
        (0, $aee939dffebaf255$export$2e2bcd8739ae039).cancel(rafRef.current);
    }
    function goNextStatus(callback) {
        cancelRaf();
        rafRef.current = (0, $aee939dffebaf255$export$2e2bcd8739ae039)(function() {
            // Only align should be manually trigger
            setStatus(function(prev) {
                switch(status){
                    case "align":
                        return "motion";
                    case "motion":
                        return "stable";
                    default:
                }
                return prev;
            });
            callback === null || callback === void 0 || callback();
        });
    } // Init status
    (0, $fP0te$useEffect)(function() {
        setStatus("measure");
    }, [
        visible
    ]); // Go next status
    (0, $fP0te$useEffect)(function() {
        switch(status){
            case "measure":
                doMeasure();
                break;
            default:
        }
        if (status) rafRef.current = (0, $aee939dffebaf255$export$2e2bcd8739ae039)(/*#__PURE__*/ (0, $f195c305e971c52e$export$2e2bcd8739ae039)(/*#__PURE__*/ (0, $ed2d296a9d7902de$export$2e2bcd8739ae039)().mark(function _callee() {
            var index, nextStatus;
            return (0, $ed2d296a9d7902de$export$2e2bcd8739ae039)().wrap(function _callee$(_context) {
                while(true)switch(_context.prev = _context.next){
                    case 0:
                        index = $c7019916e5f16222$var$StatusQueue.indexOf(status);
                        nextStatus = $c7019916e5f16222$var$StatusQueue[index + 1];
                        if (nextStatus && index !== -1) setStatus(nextStatus);
                    case 3:
                    case "end":
                        return _context.stop();
                }
            }, _callee);
        })));
    }, [
        status
    ]);
    (0, $fP0te$useEffect)(function() {
        return function() {
            cancelRaf();
        };
    }, []);
    return [
        status,
        goNextStatus
    ];
};





var $6aa89cda0add5901$export$2e2bcd8739ae039 = function(stretch) {
    var _React$useState = $fP0te$useState({
        width: 0,
        height: 0
    }), _React$useState2 = (0, $8634a4ebc2135fc2$export$2e2bcd8739ae039)(_React$useState, 2), targetSize = _React$useState2[0], setTargetSize = _React$useState2[1];
    function measureStretch(element) {
        setTargetSize({
            width: element.offsetWidth,
            height: element.offsetHeight
        });
    } // Merge stretch style
    var style = $fP0te$useMemo(function() {
        var sizeStyle = {};
        if (stretch) {
            var width = targetSize.width, height = targetSize.height; // Stretch with target
            if (stretch.indexOf("height") !== -1 && height) sizeStyle.height = height;
            else if (stretch.indexOf("minHeight") !== -1 && height) sizeStyle.minHeight = height;
            if (stretch.indexOf("width") !== -1 && width) sizeStyle.width = width;
            else if (stretch.indexOf("minWidth") !== -1 && width) sizeStyle.minWidth = width;
        }
        return sizeStyle;
    }, [
        stretch,
        targetSize
    ]);
    return [
        style,
        measureStretch
    ];
};


var $801cde559af1a2fa$var$PopupInner = /*#__PURE__*/ $fP0te$forwardRef(function(props, ref) {
    var visible = props.visible, prefixCls = props.prefixCls, className = props.className, style = props.style, children = props.children, zIndex = props.zIndex, stretch = props.stretch, destroyPopupOnHide = props.destroyPopupOnHide, forceRender = props.forceRender, align = props.align, point = props.point, getRootDomNode = props.getRootDomNode, getClassNameFromAlign = props.getClassNameFromAlign, onAlign = props.onAlign, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, onMouseDown = props.onMouseDown, onTouchStart = props.onTouchStart, onClick = props.onClick;
    var alignRef = (0, $fP0te$useRef)();
    var elementRef = (0, $fP0te$useRef)();
    var _useState = (0, $fP0te$useState)(), _useState2 = (0, $8634a4ebc2135fc2$export$2e2bcd8739ae039)(_useState, 2), alignedClassName = _useState2[0], setAlignedClassName = _useState2[1]; // ======================= Measure ========================
    var _useStretchStyle = (0, $6aa89cda0add5901$export$2e2bcd8739ae039)(stretch), _useStretchStyle2 = (0, $8634a4ebc2135fc2$export$2e2bcd8739ae039)(_useStretchStyle, 2), stretchStyle = _useStretchStyle2[0], measureStretchStyle = _useStretchStyle2[1];
    function doMeasure() {
        if (stretch) measureStretchStyle(getRootDomNode());
    } // ======================== Status ========================
    var _useVisibleStatus = (0, $c7019916e5f16222$export$2e2bcd8739ae039)(visible, doMeasure), _useVisibleStatus2 = (0, $8634a4ebc2135fc2$export$2e2bcd8739ae039)(_useVisibleStatus, 2), status = _useVisibleStatus2[0], goNextStatus = _useVisibleStatus2[1]; // ======================== Aligns ========================
    /**
   * `alignedClassName` may modify `source` size,
   * which means one time align may not move to the correct position at once.
   *
   * We will reset `alignTimes` for each status switch to `alignPre`
   * and let `rc-align` to align for multiple times to ensure get final stable place.
   * Currently we mark `alignTimes < 2` repeat align, it will increase if user report for align issue.
   */ var _useState3 = (0, $fP0te$useState)(0), _useState4 = (0, $8634a4ebc2135fc2$export$2e2bcd8739ae039)(_useState3, 2), alignTimes = _useState4[0], setAlignTimes = _useState4[1];
    var prepareResolveRef = (0, $fP0te$useRef)();
    (0, $18457910f23f46f2$export$2e2bcd8739ae039)(function() {
        if (status === "alignPre") setAlignTimes(0);
    }, [
        status
    ]); // `target` on `rc-align` can accept as a function to get the bind element or a point.
    // ref: https://www.npmjs.com/package/rc-align
    function getAlignTarget() {
        if (point) return point;
        return getRootDomNode;
    }
    function forceAlign() {
        var _alignRef$current;
        (_alignRef$current = alignRef.current) === null || _alignRef$current === void 0 || _alignRef$current.forceAlign();
    }
    function onInternalAlign(popupDomNode, matchAlign) {
        var nextAlignedClassName = getClassNameFromAlign(matchAlign);
        if (alignedClassName !== nextAlignedClassName) setAlignedClassName(nextAlignedClassName);
         // We will retry multi times to make sure that the element has been align in the right position.
        setAlignTimes(function(val) {
            return val + 1;
        });
        if (status === "align") onAlign === null || onAlign === void 0 || onAlign(popupDomNode, matchAlign);
    } // Delay to go to next status
    (0, $18457910f23f46f2$export$2e2bcd8739ae039)(function() {
        if (status === "align") {
            // Repeat until not more align needed
            if (alignTimes < 2) forceAlign();
            else goNextStatus(function() {
                var _prepareResolveRef$cu;
                (_prepareResolveRef$cu = prepareResolveRef.current) === null || _prepareResolveRef$cu === void 0 || _prepareResolveRef$cu.call(prepareResolveRef);
            });
        }
    }, [
        alignTimes
    ]); // ======================== Motion ========================
    var motion = (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, (0, $ce24257368d7fbd6$export$7b8936ddc277a29a)(props));
    [
        "onAppearEnd",
        "onEnterEnd",
        "onLeaveEnd"
    ].forEach(function(eventName) {
        var originHandler = motion[eventName];
        motion[eventName] = function(element, event) {
            goNextStatus();
            return originHandler === null || originHandler === void 0 ? void 0 : originHandler(element, event);
        };
    });
    function onShowPrepare() {
        return new Promise(function(resolve) {
            prepareResolveRef.current = resolve;
        });
    } // Go to stable directly when motion not provided
    $fP0te$useEffect(function() {
        if (!motion.motionName && status === "motion") goNextStatus();
    }, [
        motion.motionName,
        status
    ]); // ========================= Refs =========================
    $fP0te$useImperativeHandle(ref, function() {
        return {
            forceAlign: forceAlign,
            getElement: function getElement() {
                return elementRef.current;
            }
        };
    }); // ======================== Render ========================
    var mergedStyle = (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, stretchStyle), {}, {
        zIndex: zIndex,
        opacity: status === "motion" || status === "stable" || !visible ? undefined : 0,
        // Cannot interact with disappearing elements
        // https://github.com/ant-design/ant-design/issues/35051#issuecomment-1101340714
        pointerEvents: !visible && status !== "stable" ? "none" : undefined
    }, style); // Align status
    var alignDisabled = true;
    if ((align === null || align === void 0 ? void 0 : align.points) && (status === "align" || status === "stable")) alignDisabled = false;
    var childNode = children; // Wrapper when multiple children
    if ($fP0te$Children.count(children) > 1) childNode = /*#__PURE__*/ $fP0te$createElement("div", {
        className: "".concat(prefixCls, "-content")
    }, children);
    return /*#__PURE__*/ $fP0te$createElement((0, $987f07a8d5eec425$export$2e2bcd8739ae039), (0, $3d3ec4b4055bad86$export$2e2bcd8739ae039)({
        visible: visible,
        ref: elementRef,
        leavedClassName: "".concat(prefixCls, "-hidden")
    }, motion, {
        onAppearPrepare: onShowPrepare,
        onEnterPrepare: onShowPrepare,
        removeOnLeave: destroyPopupOnHide,
        forceRender: forceRender
    }), function(_ref, motionRef) {
        var motionClassName = _ref.className, motionStyle = _ref.style;
        var mergedClassName = (0, (/*@__PURE__*/$parcel$interopDefault($9eb44e11aa0ecd62$exports)))(prefixCls, className, alignedClassName, motionClassName);
        return /*#__PURE__*/ $fP0te$createElement((0, $f0359532604d4c80$export$2e2bcd8739ae039), {
            target: getAlignTarget(),
            key: "popup",
            ref: alignRef,
            monitorWindowResize: true,
            disabled: alignDisabled,
            align: align,
            onAlign: onInternalAlign
        }, /*#__PURE__*/ $fP0te$createElement("div", {
            ref: motionRef,
            className: mergedClassName,
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
            onMouseDownCapture: onMouseDown,
            onTouchStartCapture: onTouchStart,
            onClick: onClick,
            style: (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, motionStyle), mergedStyle)
        }, childNode));
    });
});
$801cde559af1a2fa$var$PopupInner.displayName = "PopupInner";
var $801cde559af1a2fa$export$2e2bcd8739ae039 = $801cde559af1a2fa$var$PopupInner;







var $5c9c95d7028bf153$var$MobilePopupInner = /*#__PURE__*/ $fP0te$forwardRef(function(props, ref) {
    var prefixCls = props.prefixCls, visible = props.visible, zIndex = props.zIndex, children = props.children, _props$mobile = props.mobile;
    _props$mobile = _props$mobile === void 0 ? {} : _props$mobile;
    var popupClassName = _props$mobile.popupClassName, popupStyle = _props$mobile.popupStyle, _props$mobile$popupMo = _props$mobile.popupMotion, popupMotion = _props$mobile$popupMo === void 0 ? {} : _props$mobile$popupMo, popupRender = _props$mobile.popupRender, onClick = props.onClick;
    var elementRef = $fP0te$useRef(); // ========================= Refs =========================
    $fP0te$useImperativeHandle(ref, function() {
        return {
            forceAlign: function forceAlign() {},
            getElement: function getElement() {
                return elementRef.current;
            }
        };
    }); // ======================== Render ========================
    var mergedStyle = (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({
        zIndex: zIndex
    }, popupStyle);
    var childNode = children; // Wrapper when multiple children
    if ($fP0te$Children.count(children) > 1) childNode = /*#__PURE__*/ $fP0te$createElement("div", {
        className: "".concat(prefixCls, "-content")
    }, children);
     // Mobile support additional render
    if (popupRender) childNode = popupRender(childNode);
    return /*#__PURE__*/ $fP0te$createElement((0, $987f07a8d5eec425$export$2e2bcd8739ae039), (0, $3d3ec4b4055bad86$export$2e2bcd8739ae039)({
        visible: visible,
        ref: elementRef,
        removeOnLeave: true
    }, popupMotion), function(_ref, motionRef) {
        var motionClassName = _ref.className, motionStyle = _ref.style;
        var mergedClassName = (0, (/*@__PURE__*/$parcel$interopDefault($9eb44e11aa0ecd62$exports)))(prefixCls, popupClassName, motionClassName);
        return /*#__PURE__*/ $fP0te$createElement("div", {
            ref: motionRef,
            className: mergedClassName,
            onClick: onClick,
            style: (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, motionStyle), mergedStyle)
        }, childNode);
    });
});
$5c9c95d7028bf153$var$MobilePopupInner.displayName = "MobilePopupInner";
var $5c9c95d7028bf153$export$2e2bcd8739ae039 = $5c9c95d7028bf153$var$MobilePopupInner;


var $2859096272bf1afe$var$_excluded = [
    "visible",
    "mobile"
];
var $2859096272bf1afe$var$Popup = /*#__PURE__*/ $fP0te$forwardRef(function(_ref, ref) {
    var visible = _ref.visible, mobile = _ref.mobile, props = (0, $8267cf9e9a5b22d5$export$2e2bcd8739ae039)(_ref, $2859096272bf1afe$var$_excluded);
    var _useState = (0, $fP0te$useState)(visible), _useState2 = (0, $8634a4ebc2135fc2$export$2e2bcd8739ae039)(_useState, 2), innerVisible = _useState2[0], serInnerVisible = _useState2[1];
    var _useState3 = (0, $fP0te$useState)(false), _useState4 = (0, $8634a4ebc2135fc2$export$2e2bcd8739ae039)(_useState3, 2), inMobile = _useState4[0], setInMobile = _useState4[1];
    var cloneProps = (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, props), {}, {
        visible: innerVisible
    }); // We check mobile in visible changed here.
    // And this also delay set `innerVisible` to avoid popup component render flash
    (0, $fP0te$useEffect)(function() {
        serInnerVisible(visible);
        if (visible && mobile) setInMobile((0, $06f42c74412f9c1b$export$2e2bcd8739ae039)());
    }, [
        visible,
        mobile
    ]);
    var popupNode = inMobile ? /*#__PURE__*/ $fP0te$createElement((0, $5c9c95d7028bf153$export$2e2bcd8739ae039), (0, $3d3ec4b4055bad86$export$2e2bcd8739ae039)({}, cloneProps, {
        mobile: mobile,
        ref: ref
    })) : /*#__PURE__*/ $fP0te$createElement((0, $801cde559af1a2fa$export$2e2bcd8739ae039), (0, $3d3ec4b4055bad86$export$2e2bcd8739ae039)({}, cloneProps, {
        ref: ref
    })); // We can use fragment directly but this may failed some selector usage. Keep as origin logic
    return /*#__PURE__*/ $fP0te$createElement("div", null, /*#__PURE__*/ $fP0te$createElement((0, $557e8917951901d3$export$2e2bcd8739ae039), cloneProps), popupNode);
});
$2859096272bf1afe$var$Popup.displayName = "Popup";
var $2859096272bf1afe$export$2e2bcd8739ae039 = $2859096272bf1afe$var$Popup;



var $a00f4d44f52c1b8b$var$TriggerContext = /*#__PURE__*/ $fP0te$createContext(null);
var $a00f4d44f52c1b8b$export$2e2bcd8739ae039 = $a00f4d44f52c1b8b$var$TriggerContext;


function $dddcee8820fb0eac$var$noop() {}
function $dddcee8820fb0eac$var$returnEmptyString() {
    return "";
}
function $dddcee8820fb0eac$var$returnDocument(element) {
    if (element) return element.ownerDocument;
    return window.document;
}
var $dddcee8820fb0eac$var$ALL_HANDLERS = [
    "onClick",
    "onMouseDown",
    "onTouchStart",
    "onMouseEnter",
    "onMouseLeave",
    "onFocus",
    "onBlur",
    "onContextMenu"
];
function $dddcee8820fb0eac$export$55e99723d7f71b47(PortalComponent) {
    var Trigger = /*#__PURE__*/ function(_React$Component) {
        (0, $6a6e2222e4757b72$export$2e2bcd8739ae039)(Trigger, _React$Component);
        var _super = (0, $4f1a33a2878c5918$export$2e2bcd8739ae039)(Trigger);
        // ensure `getContainer` will be called only once
        function Trigger(props) {
            var _this;
            (0, $ee5c3d0d33581caa$export$2e2bcd8739ae039)(this, Trigger);
            _this = _super.call(this, props);
            _this.popupRef = /*#__PURE__*/ $fP0te$createRef();
            _this.triggerRef = /*#__PURE__*/ $fP0te$createRef();
            _this.portalContainer = void 0;
            _this.attachId = void 0;
            _this.clickOutsideHandler = void 0;
            _this.touchOutsideHandler = void 0;
            _this.contextMenuOutsideHandler1 = void 0;
            _this.contextMenuOutsideHandler2 = void 0;
            _this.mouseDownTimeout = void 0;
            _this.focusTime = void 0;
            _this.preClickTime = void 0;
            _this.preTouchTime = void 0;
            _this.delayTimer = void 0;
            _this.hasPopupMouseDown = void 0;
            _this.onMouseEnter = function(e) {
                var mouseEnterDelay = _this.props.mouseEnterDelay;
                _this.fireEvents("onMouseEnter", e);
                _this.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
            };
            _this.onMouseMove = function(e) {
                _this.fireEvents("onMouseMove", e);
                _this.setPoint(e);
            };
            _this.onMouseLeave = function(e) {
                _this.fireEvents("onMouseLeave", e);
                _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
            };
            _this.onPopupMouseEnter = function() {
                _this.clearDelayTimer();
            };
            _this.onPopupMouseLeave = function(e) {
                var _this$popupRef$curren;
                // https://github.com/react-component/trigger/pull/13
                // react bug?
                if (e.relatedTarget && !e.relatedTarget.setTimeout && (0, $efb4f91f6823d701$export$2e2bcd8739ae039)((_this$popupRef$curren = _this.popupRef.current) === null || _this$popupRef$curren === void 0 ? void 0 : _this$popupRef$curren.getElement(), e.relatedTarget)) return;
                _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
            };
            _this.onFocus = function(e) {
                _this.fireEvents("onFocus", e); // incase focusin and focusout
                _this.clearDelayTimer();
                if (_this.isFocusToShow()) {
                    _this.focusTime = Date.now();
                    _this.delaySetPopupVisible(true, _this.props.focusDelay);
                }
            };
            _this.onMouseDown = function(e) {
                _this.fireEvents("onMouseDown", e);
                _this.preClickTime = Date.now();
            };
            _this.onTouchStart = function(e) {
                _this.fireEvents("onTouchStart", e);
                _this.preTouchTime = Date.now();
            };
            _this.onBlur = function(e) {
                _this.fireEvents("onBlur", e);
                _this.clearDelayTimer();
                if (_this.isBlurToHide()) _this.delaySetPopupVisible(false, _this.props.blurDelay);
            };
            _this.onContextMenu = function(e) {
                e.preventDefault();
                _this.fireEvents("onContextMenu", e);
                _this.setPopupVisible(true, e);
            };
            _this.onContextMenuClose = function() {
                if (_this.isContextMenuToShow()) _this.close();
            };
            _this.onClick = function(event) {
                _this.fireEvents("onClick", event); // focus will trigger click
                if (_this.focusTime) {
                    var preTime;
                    if (_this.preClickTime && _this.preTouchTime) preTime = Math.min(_this.preClickTime, _this.preTouchTime);
                    else if (_this.preClickTime) preTime = _this.preClickTime;
                    else if (_this.preTouchTime) preTime = _this.preTouchTime;
                    if (Math.abs(preTime - _this.focusTime) < 20) return;
                    _this.focusTime = 0;
                }
                _this.preClickTime = 0;
                _this.preTouchTime = 0; // Only prevent default when all the action is click.
                // https://github.com/ant-design/ant-design/issues/17043
                // https://github.com/ant-design/ant-design/issues/17291
                if (_this.isClickToShow() && (_this.isClickToHide() || _this.isBlurToHide()) && event && event.preventDefault) event.preventDefault();
                var nextVisible = !_this.state.popupVisible;
                if (_this.isClickToHide() && !nextVisible || nextVisible && _this.isClickToShow()) _this.setPopupVisible(!_this.state.popupVisible, event);
            };
            _this.onPopupMouseDown = function() {
                _this.hasPopupMouseDown = true;
                clearTimeout(_this.mouseDownTimeout);
                _this.mouseDownTimeout = window.setTimeout(function() {
                    _this.hasPopupMouseDown = false;
                }, 0);
                if (_this.context) {
                    var _this$context;
                    (_this$context = _this.context).onPopupMouseDown.apply(_this$context, arguments);
                }
            };
            _this.onDocumentClick = function(event) {
                if (_this.props.mask && !_this.props.maskClosable) return;
                var target = event.target;
                var root = _this.getRootDomNode();
                var popupNode = _this.getPopupDomNode();
                if (// https://github.com/ant-design/ant-design/issues/29853
                (!(0, $efb4f91f6823d701$export$2e2bcd8739ae039)(root, target) || _this.isContextMenuOnly()) && !(0, $efb4f91f6823d701$export$2e2bcd8739ae039)(popupNode, target) && !_this.hasPopupMouseDown) _this.close();
            };
            _this.getRootDomNode = function() {
                var getTriggerDOMNode = _this.props.getTriggerDOMNode;
                if (getTriggerDOMNode) return getTriggerDOMNode(_this.triggerRef.current);
                try {
                    var domNode = (0, $125a13f4563f8837$export$2e2bcd8739ae039)(_this.triggerRef.current);
                    if (domNode) return domNode;
                } catch (err) {}
                return (0, $fP0te$reactdom).findDOMNode((0, $077f3d20e0ba4f49$export$2e2bcd8739ae039)(_this));
            };
            _this.getPopupClassNameFromAlign = function(align) {
                var className = [];
                var _this$props = _this.props, popupPlacement = _this$props.popupPlacement, builtinPlacements = _this$props.builtinPlacements, prefixCls = _this$props.prefixCls, alignPoint = _this$props.alignPoint, getPopupClassNameFromAlign = _this$props.getPopupClassNameFromAlign;
                if (popupPlacement && builtinPlacements) className.push((0, $3b9d6b9665ba1406$export$faa0aa8ed2fe6432)(builtinPlacements, prefixCls, align, alignPoint));
                if (getPopupClassNameFromAlign) className.push(getPopupClassNameFromAlign(align));
                return className.join(" ");
            };
            _this.getComponent = function() {
                var _this$props2 = _this.props, prefixCls = _this$props2.prefixCls, destroyPopupOnHide = _this$props2.destroyPopupOnHide, popupClassName = _this$props2.popupClassName, onPopupAlign = _this$props2.onPopupAlign, popupMotion = _this$props2.popupMotion, popupAnimation = _this$props2.popupAnimation, popupTransitionName = _this$props2.popupTransitionName, popupStyle = _this$props2.popupStyle, mask = _this$props2.mask, maskAnimation = _this$props2.maskAnimation, maskTransitionName = _this$props2.maskTransitionName, maskMotion = _this$props2.maskMotion, zIndex = _this$props2.zIndex, popup = _this$props2.popup, stretch = _this$props2.stretch, alignPoint = _this$props2.alignPoint, mobile = _this$props2.mobile, forceRender = _this$props2.forceRender, onPopupClick = _this$props2.onPopupClick;
                var _this$state = _this.state, popupVisible = _this$state.popupVisible, point = _this$state.point;
                var align = _this.getPopupAlign();
                var mouseProps = {};
                if (_this.isMouseEnterToShow()) mouseProps.onMouseEnter = _this.onPopupMouseEnter;
                if (_this.isMouseLeaveToHide()) mouseProps.onMouseLeave = _this.onPopupMouseLeave;
                mouseProps.onMouseDown = _this.onPopupMouseDown;
                mouseProps.onTouchStart = _this.onPopupMouseDown;
                return /*#__PURE__*/ $fP0te$createElement((0, $2859096272bf1afe$export$2e2bcd8739ae039), (0, $3d3ec4b4055bad86$export$2e2bcd8739ae039)({
                    prefixCls: prefixCls,
                    destroyPopupOnHide: destroyPopupOnHide,
                    visible: popupVisible,
                    point: alignPoint && point,
                    className: popupClassName,
                    align: align,
                    onAlign: onPopupAlign,
                    animation: popupAnimation,
                    getClassNameFromAlign: _this.getPopupClassNameFromAlign
                }, mouseProps, {
                    stretch: stretch,
                    getRootDomNode: _this.getRootDomNode,
                    style: popupStyle,
                    mask: mask,
                    zIndex: zIndex,
                    transitionName: popupTransitionName,
                    maskAnimation: maskAnimation,
                    maskTransitionName: maskTransitionName,
                    maskMotion: maskMotion,
                    ref: _this.popupRef,
                    motion: popupMotion,
                    mobile: mobile,
                    forceRender: forceRender,
                    onClick: onPopupClick
                }), typeof popup === "function" ? popup() : popup);
            };
            _this.attachParent = function(popupContainer) {
                (0, $aee939dffebaf255$export$2e2bcd8739ae039).cancel(_this.attachId);
                var _this$props3 = _this.props, getPopupContainer = _this$props3.getPopupContainer, getDocument = _this$props3.getDocument;
                var domNode = _this.getRootDomNode();
                var mountNode;
                if (!getPopupContainer) mountNode = getDocument(_this.getRootDomNode()).body;
                else if (domNode || getPopupContainer.length === 0) // Compatible for legacy getPopupContainer with domNode argument.
                // If no need `domNode` argument, will call directly.
                // https://codesandbox.io/s/eloquent-mclean-ss93m?file=/src/App.js
                mountNode = getPopupContainer(domNode);
                if (mountNode) mountNode.appendChild(popupContainer);
                else // Retry after frame render in case parent not ready
                _this.attachId = (0, $aee939dffebaf255$export$2e2bcd8739ae039)(function() {
                    _this.attachParent(popupContainer);
                });
            };
            _this.getContainer = function() {
                if (!_this.portalContainer) {
                    // In React.StrictMode component will call render multiple time in first mount.
                    // When you want to refactor with FC, useRef will also init multiple time and
                    // point to different useRef instance which will create multiple element
                    // (This multiple render will not trigger effect so you can not clean up this
                    // in effect). But this is safe with class component since it always point to same class instance.
                    var getDocument = _this.props.getDocument;
                    var popupContainer = getDocument(_this.getRootDomNode()).createElement("div"); // Make sure default popup container will never cause scrollbar appearing
                    // https://github.com/react-component/trigger/issues/41
                    popupContainer.style.position = "absolute";
                    popupContainer.style.top = "0";
                    popupContainer.style.left = "0";
                    popupContainer.style.width = "100%";
                    _this.portalContainer = popupContainer;
                }
                _this.attachParent(_this.portalContainer);
                return _this.portalContainer;
            };
            _this.setPoint = function(point) {
                var alignPoint = _this.props.alignPoint;
                if (!alignPoint || !point) return;
                _this.setState({
                    point: {
                        pageX: point.pageX,
                        pageY: point.pageY
                    }
                });
            };
            _this.handlePortalUpdate = function() {
                if (_this.state.prevPopupVisible !== _this.state.popupVisible) _this.props.afterPopupVisibleChange(_this.state.popupVisible);
            };
            _this.triggerContextValue = {
                onPopupMouseDown: _this.onPopupMouseDown
            };
            var _popupVisible;
            if ("popupVisible" in props) _popupVisible = !!props.popupVisible;
            else _popupVisible = !!props.defaultPopupVisible;
            _this.state = {
                prevPopupVisible: _popupVisible,
                popupVisible: _popupVisible
            };
            $dddcee8820fb0eac$var$ALL_HANDLERS.forEach(function(h) {
                _this["fire".concat(h)] = function(e) {
                    _this.fireEvents(h, e);
                };
            });
            return _this;
        }
        (0, $0d7f289b36132a60$export$2e2bcd8739ae039)(Trigger, [
            {
                key: "componentDidMount",
                value: function componentDidMount() {
                    this.componentDidUpdate();
                }
            },
            {
                key: "componentDidUpdate",
                value: function componentDidUpdate() {
                    var props = this.props;
                    var state = this.state; // We must listen to `mousedown` or `touchstart`, edge case:
                    // https://github.com/ant-design/ant-design/issues/5804
                    // https://github.com/react-component/calendar/issues/250
                    // https://github.com/react-component/trigger/issues/50
                    if (state.popupVisible) {
                        var currentDocument;
                        if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
                            currentDocument = props.getDocument(this.getRootDomNode());
                            this.clickOutsideHandler = (0, $943cd8382ac35371$export$2e2bcd8739ae039)(currentDocument, "mousedown", this.onDocumentClick);
                        } // always hide on mobile
                        if (!this.touchOutsideHandler) {
                            currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
                            this.touchOutsideHandler = (0, $943cd8382ac35371$export$2e2bcd8739ae039)(currentDocument, "touchstart", this.onDocumentClick);
                        } // close popup when trigger type contains 'onContextMenu' and document is scrolling.
                        if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
                            currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
                            this.contextMenuOutsideHandler1 = (0, $943cd8382ac35371$export$2e2bcd8739ae039)(currentDocument, "scroll", this.onContextMenuClose);
                        } // close popup when trigger type contains 'onContextMenu' and window is blur.
                        if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) this.contextMenuOutsideHandler2 = (0, $943cd8382ac35371$export$2e2bcd8739ae039)(window, "blur", this.onContextMenuClose);
                        return;
                    }
                    this.clearOutsideHandler();
                }
            },
            {
                key: "componentWillUnmount",
                value: function componentWillUnmount() {
                    this.clearDelayTimer();
                    this.clearOutsideHandler();
                    clearTimeout(this.mouseDownTimeout);
                    (0, $aee939dffebaf255$export$2e2bcd8739ae039).cancel(this.attachId);
                }
            },
            {
                key: "getPopupDomNode",
                value: function getPopupDomNode() {
                    var _this$popupRef$curren2;
                    // for test
                    return ((_this$popupRef$curren2 = this.popupRef.current) === null || _this$popupRef$curren2 === void 0 ? void 0 : _this$popupRef$curren2.getElement()) || null;
                }
            },
            {
                key: "getPopupAlign",
                value: function getPopupAlign() {
                    var props = this.props;
                    var popupPlacement = props.popupPlacement, popupAlign = props.popupAlign, builtinPlacements = props.builtinPlacements;
                    if (popupPlacement && builtinPlacements) return (0, $3b9d6b9665ba1406$export$44605b74f7c5d944)(builtinPlacements, popupPlacement, popupAlign);
                    return popupAlign;
                }
            },
            {
                key: "setPopupVisible",
                value: /**
       * @param popupVisible    Show or not the popup element
       * @param event           SyntheticEvent, used for `pointAlign`
       */ function setPopupVisible(popupVisible, event) {
                    var alignPoint = this.props.alignPoint;
                    var prevPopupVisible = this.state.popupVisible;
                    this.clearDelayTimer();
                    if (prevPopupVisible !== popupVisible) {
                        if (!("popupVisible" in this.props)) this.setState({
                            popupVisible: popupVisible,
                            prevPopupVisible: prevPopupVisible
                        });
                        this.props.onPopupVisibleChange(popupVisible);
                    } // Always record the point position since mouseEnterDelay will delay the show
                    if (alignPoint && event && popupVisible) this.setPoint(event);
                }
            },
            {
                key: "delaySetPopupVisible",
                value: function delaySetPopupVisible(visible, delayS, event) {
                    var _this2 = this;
                    var delay = delayS * 1000;
                    this.clearDelayTimer();
                    if (delay) {
                        var point = event ? {
                            pageX: event.pageX,
                            pageY: event.pageY
                        } : null;
                        this.delayTimer = window.setTimeout(function() {
                            _this2.setPopupVisible(visible, point);
                            _this2.clearDelayTimer();
                        }, delay);
                    } else this.setPopupVisible(visible, event);
                }
            },
            {
                key: "clearDelayTimer",
                value: function clearDelayTimer() {
                    if (this.delayTimer) {
                        clearTimeout(this.delayTimer);
                        this.delayTimer = null;
                    }
                }
            },
            {
                key: "clearOutsideHandler",
                value: function clearOutsideHandler() {
                    if (this.clickOutsideHandler) {
                        this.clickOutsideHandler.remove();
                        this.clickOutsideHandler = null;
                    }
                    if (this.contextMenuOutsideHandler1) {
                        this.contextMenuOutsideHandler1.remove();
                        this.contextMenuOutsideHandler1 = null;
                    }
                    if (this.contextMenuOutsideHandler2) {
                        this.contextMenuOutsideHandler2.remove();
                        this.contextMenuOutsideHandler2 = null;
                    }
                    if (this.touchOutsideHandler) {
                        this.touchOutsideHandler.remove();
                        this.touchOutsideHandler = null;
                    }
                }
            },
            {
                key: "createTwoChains",
                value: function createTwoChains(event) {
                    var childPros = this.props.children.props;
                    var props = this.props;
                    if (childPros[event] && props[event]) return this["fire".concat(event)];
                    return childPros[event] || props[event];
                }
            },
            {
                key: "isClickToShow",
                value: function isClickToShow() {
                    var _this$props4 = this.props, action = _this$props4.action, showAction = _this$props4.showAction;
                    return action.indexOf("click") !== -1 || showAction.indexOf("click") !== -1;
                }
            },
            {
                key: "isContextMenuOnly",
                value: function isContextMenuOnly() {
                    var action = this.props.action;
                    return action === "contextMenu" || action.length === 1 && action[0] === "contextMenu";
                }
            },
            {
                key: "isContextMenuToShow",
                value: function isContextMenuToShow() {
                    var _this$props5 = this.props, action = _this$props5.action, showAction = _this$props5.showAction;
                    return action.indexOf("contextMenu") !== -1 || showAction.indexOf("contextMenu") !== -1;
                }
            },
            {
                key: "isClickToHide",
                value: function isClickToHide() {
                    var _this$props6 = this.props, action = _this$props6.action, hideAction = _this$props6.hideAction;
                    return action.indexOf("click") !== -1 || hideAction.indexOf("click") !== -1;
                }
            },
            {
                key: "isMouseEnterToShow",
                value: function isMouseEnterToShow() {
                    var _this$props7 = this.props, action = _this$props7.action, showAction = _this$props7.showAction;
                    return action.indexOf("hover") !== -1 || showAction.indexOf("mouseEnter") !== -1;
                }
            },
            {
                key: "isMouseLeaveToHide",
                value: function isMouseLeaveToHide() {
                    var _this$props8 = this.props, action = _this$props8.action, hideAction = _this$props8.hideAction;
                    return action.indexOf("hover") !== -1 || hideAction.indexOf("mouseLeave") !== -1;
                }
            },
            {
                key: "isFocusToShow",
                value: function isFocusToShow() {
                    var _this$props9 = this.props, action = _this$props9.action, showAction = _this$props9.showAction;
                    return action.indexOf("focus") !== -1 || showAction.indexOf("focus") !== -1;
                }
            },
            {
                key: "isBlurToHide",
                value: function isBlurToHide() {
                    var _this$props10 = this.props, action = _this$props10.action, hideAction = _this$props10.hideAction;
                    return action.indexOf("focus") !== -1 || hideAction.indexOf("blur") !== -1;
                }
            },
            {
                key: "forcePopupAlign",
                value: function forcePopupAlign() {
                    if (this.state.popupVisible) {
                        var _this$popupRef$curren3;
                        (_this$popupRef$curren3 = this.popupRef.current) === null || _this$popupRef$curren3 === void 0 || _this$popupRef$curren3.forceAlign();
                    }
                }
            },
            {
                key: "fireEvents",
                value: function fireEvents(type, e) {
                    var childCallback = this.props.children.props[type];
                    if (childCallback) childCallback(e);
                    var callback = this.props[type];
                    if (callback) callback(e);
                }
            },
            {
                key: "close",
                value: function close() {
                    this.setPopupVisible(false);
                }
            },
            {
                key: "render",
                value: function render() {
                    var popupVisible = this.state.popupVisible;
                    var _this$props11 = this.props, children = _this$props11.children, forceRender = _this$props11.forceRender, alignPoint = _this$props11.alignPoint, className = _this$props11.className, autoDestroy = _this$props11.autoDestroy;
                    var child = $fP0te$Children.only(children);
                    var newChildProps = {
                        key: "trigger"
                    }; // ============================== Visible Handlers ==============================
                    // >>> ContextMenu
                    if (this.isContextMenuToShow()) newChildProps.onContextMenu = this.onContextMenu;
                    else newChildProps.onContextMenu = this.createTwoChains("onContextMenu");
                     // >>> Click
                    if (this.isClickToHide() || this.isClickToShow()) {
                        newChildProps.onClick = this.onClick;
                        newChildProps.onMouseDown = this.onMouseDown;
                        newChildProps.onTouchStart = this.onTouchStart;
                    } else {
                        newChildProps.onClick = this.createTwoChains("onClick");
                        newChildProps.onMouseDown = this.createTwoChains("onMouseDown");
                        newChildProps.onTouchStart = this.createTwoChains("onTouchStart");
                    } // >>> Hover(enter)
                    if (this.isMouseEnterToShow()) {
                        newChildProps.onMouseEnter = this.onMouseEnter; // Point align
                        if (alignPoint) newChildProps.onMouseMove = this.onMouseMove;
                    } else newChildProps.onMouseEnter = this.createTwoChains("onMouseEnter");
                     // >>> Hover(leave)
                    if (this.isMouseLeaveToHide()) newChildProps.onMouseLeave = this.onMouseLeave;
                    else newChildProps.onMouseLeave = this.createTwoChains("onMouseLeave");
                     // >>> Focus
                    if (this.isFocusToShow() || this.isBlurToHide()) {
                        newChildProps.onFocus = this.onFocus;
                        newChildProps.onBlur = this.onBlur;
                    } else {
                        newChildProps.onFocus = this.createTwoChains("onFocus");
                        newChildProps.onBlur = this.createTwoChains("onBlur");
                    } // =================================== Render ===================================
                    var childrenClassName = (0, (/*@__PURE__*/$parcel$interopDefault($9eb44e11aa0ecd62$exports)))(child && child.props && child.props.className, className);
                    if (childrenClassName) newChildProps.className = childrenClassName;
                    var cloneProps = (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, newChildProps);
                    if ((0, $225049917dd1e288$export$c1cec34af06bcf7)(child)) cloneProps.ref = (0, $225049917dd1e288$export$ab452c34e8e05029)(this.triggerRef, child.ref);
                    var trigger = /*#__PURE__*/ $fP0te$cloneElement(child, cloneProps);
                    var portal; // prevent unmounting after it's rendered
                    if (popupVisible || this.popupRef.current || forceRender) portal = /*#__PURE__*/ $fP0te$createElement(PortalComponent, {
                        key: "portal",
                        getContainer: this.getContainer,
                        didUpdate: this.handlePortalUpdate
                    }, this.getComponent());
                    if (!popupVisible && autoDestroy) portal = null;
                    return /*#__PURE__*/ $fP0te$createElement((0, $a00f4d44f52c1b8b$export$2e2bcd8739ae039).Provider, {
                        value: this.triggerContextValue
                    }, trigger, portal);
                }
            }
        ], [
            {
                key: "getDerivedStateFromProps",
                value: function getDerivedStateFromProps(_ref, prevState) {
                    var popupVisible = _ref.popupVisible;
                    var newState = {};
                    if (popupVisible !== undefined && prevState.popupVisible !== popupVisible) {
                        newState.popupVisible = popupVisible;
                        newState.prevPopupVisible = prevState.popupVisible;
                    }
                    return newState;
                }
            }
        ]);
        return Trigger;
    }($fP0te$Component);
    Trigger.contextType = (0, $a00f4d44f52c1b8b$export$2e2bcd8739ae039);
    Trigger.defaultProps = {
        prefixCls: "rc-trigger-popup",
        getPopupClassNameFromAlign: $dddcee8820fb0eac$var$returnEmptyString,
        getDocument: $dddcee8820fb0eac$var$returnDocument,
        onPopupVisibleChange: $dddcee8820fb0eac$var$noop,
        afterPopupVisibleChange: $dddcee8820fb0eac$var$noop,
        onPopupAlign: $dddcee8820fb0eac$var$noop,
        popupClassName: "",
        mouseEnterDelay: 0,
        mouseLeaveDelay: 0.1,
        focusDelay: 0,
        blurDelay: 0.15,
        popupStyle: {},
        destroyPopupOnHide: false,
        popupAlign: {},
        defaultPopupVisible: false,
        mask: false,
        maskClosable: true,
        action: [],
        showAction: [],
        hideAction: [],
        autoDestroy: false
    };
    return Trigger;
}
var $dddcee8820fb0eac$export$2e2bcd8739ae039 = $dddcee8820fb0eac$export$55e99723d7f71b47((0, $027f2ae20988aa1f$export$2e2bcd8739ae039));


var $000a318baba181a7$var$autoAdjustOverflow = {
    adjustX: 1,
    adjustY: 1
};
var $000a318baba181a7$var$targetOffset = [
    0,
    0
];
var $000a318baba181a7$export$803cd8101b6c182b = {
    left: {
        points: [
            "cr",
            "cl"
        ],
        overflow: $000a318baba181a7$var$autoAdjustOverflow,
        offset: [
            -4,
            0
        ],
        targetOffset: $000a318baba181a7$var$targetOffset
    },
    right: {
        points: [
            "cl",
            "cr"
        ],
        overflow: $000a318baba181a7$var$autoAdjustOverflow,
        offset: [
            4,
            0
        ],
        targetOffset: $000a318baba181a7$var$targetOffset
    },
    top: {
        points: [
            "bc",
            "tc"
        ],
        overflow: $000a318baba181a7$var$autoAdjustOverflow,
        offset: [
            0,
            -4
        ],
        targetOffset: $000a318baba181a7$var$targetOffset
    },
    bottom: {
        points: [
            "tc",
            "bc"
        ],
        overflow: $000a318baba181a7$var$autoAdjustOverflow,
        offset: [
            0,
            4
        ],
        targetOffset: $000a318baba181a7$var$targetOffset
    },
    topLeft: {
        points: [
            "bl",
            "tl"
        ],
        overflow: $000a318baba181a7$var$autoAdjustOverflow,
        offset: [
            0,
            -4
        ],
        targetOffset: $000a318baba181a7$var$targetOffset
    },
    leftTop: {
        points: [
            "tr",
            "tl"
        ],
        overflow: $000a318baba181a7$var$autoAdjustOverflow,
        offset: [
            -4,
            0
        ],
        targetOffset: $000a318baba181a7$var$targetOffset
    },
    topRight: {
        points: [
            "br",
            "tr"
        ],
        overflow: $000a318baba181a7$var$autoAdjustOverflow,
        offset: [
            0,
            -4
        ],
        targetOffset: $000a318baba181a7$var$targetOffset
    },
    rightTop: {
        points: [
            "tl",
            "tr"
        ],
        overflow: $000a318baba181a7$var$autoAdjustOverflow,
        offset: [
            4,
            0
        ],
        targetOffset: $000a318baba181a7$var$targetOffset
    },
    bottomRight: {
        points: [
            "tr",
            "br"
        ],
        overflow: $000a318baba181a7$var$autoAdjustOverflow,
        offset: [
            0,
            4
        ],
        targetOffset: $000a318baba181a7$var$targetOffset
    },
    rightBottom: {
        points: [
            "bl",
            "br"
        ],
        overflow: $000a318baba181a7$var$autoAdjustOverflow,
        offset: [
            4,
            0
        ],
        targetOffset: $000a318baba181a7$var$targetOffset
    },
    bottomLeft: {
        points: [
            "tl",
            "bl"
        ],
        overflow: $000a318baba181a7$var$autoAdjustOverflow,
        offset: [
            0,
            4
        ],
        targetOffset: $000a318baba181a7$var$targetOffset
    },
    leftBottom: {
        points: [
            "br",
            "bl"
        ],
        overflow: $000a318baba181a7$var$autoAdjustOverflow,
        offset: [
            -4,
            0
        ],
        targetOffset: $000a318baba181a7$var$targetOffset
    }
};
var $000a318baba181a7$export$2e2bcd8739ae039 = $000a318baba181a7$export$803cd8101b6c182b;




function $cc3deb5f2ae5ab86$export$2e2bcd8739ae039(props) {
    var showArrow = props.showArrow, arrowContent = props.arrowContent, children = props.children, prefixCls = props.prefixCls, id = props.id, overlayInnerStyle = props.overlayInnerStyle, className = props.className, style = props.style;
    return /*#__PURE__*/ $fP0te$createElement("div", {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($9eb44e11aa0ecd62$exports)))("".concat(prefixCls, "-content"), className),
        style: style
    }, showArrow !== false && /*#__PURE__*/ $fP0te$createElement("div", {
        className: "".concat(prefixCls, "-arrow"),
        key: "arrow"
    }, arrowContent), /*#__PURE__*/ $fP0te$createElement("div", {
        className: "".concat(prefixCls, "-inner"),
        id: id,
        role: "tooltip",
        style: overlayInnerStyle
    }, typeof children === "function" ? children() : children));
}


var $abd24c78313eb6d4$var$Tooltip = function Tooltip(props, ref) {
    var overlayClassName = props.overlayClassName, _props$trigger = props.trigger, trigger = _props$trigger === void 0 ? [
        "hover"
    ] : _props$trigger, _props$mouseEnterDela = props.mouseEnterDelay, mouseEnterDelay = _props$mouseEnterDela === void 0 ? 0 : _props$mouseEnterDela, _props$mouseLeaveDela = props.mouseLeaveDelay, mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela, overlayStyle = props.overlayStyle, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-tooltip" : _props$prefixCls, children = props.children, onVisibleChange = props.onVisibleChange, afterVisibleChange = props.afterVisibleChange, transitionName = props.transitionName, animation = props.animation, motion = props.motion, _props$placement = props.placement, placement = _props$placement === void 0 ? "right" : _props$placement, _props$align = props.align, align = _props$align === void 0 ? {} : _props$align, _props$destroyTooltip = props.destroyTooltipOnHide, destroyTooltipOnHide = _props$destroyTooltip === void 0 ? false : _props$destroyTooltip, defaultVisible = props.defaultVisible, getTooltipContainer = props.getTooltipContainer, overlayInnerStyle = props.overlayInnerStyle, arrowContent = props.arrowContent, overlay = props.overlay, id = props.id, showArrow = props.showArrow, restProps = (0, $8267cf9e9a5b22d5$export$2e2bcd8739ae039)(props, [
        "overlayClassName",
        "trigger",
        "mouseEnterDelay",
        "mouseLeaveDelay",
        "overlayStyle",
        "prefixCls",
        "children",
        "onVisibleChange",
        "afterVisibleChange",
        "transitionName",
        "animation",
        "motion",
        "placement",
        "align",
        "destroyTooltipOnHide",
        "defaultVisible",
        "getTooltipContainer",
        "overlayInnerStyle",
        "arrowContent",
        "overlay",
        "id",
        "showArrow"
    ]);
    var domRef = (0, $fP0te$useRef)(null);
    (0, $fP0te$useImperativeHandle)(ref, function() {
        return domRef.current;
    });
    var extraProps = (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, restProps);
    if ("visible" in props) extraProps.popupVisible = props.visible;
    var getPopupElement = function getPopupElement() {
        return /*#__PURE__*/ $fP0te$createElement((0, $cc3deb5f2ae5ab86$export$2e2bcd8739ae039), {
            showArrow: showArrow,
            arrowContent: arrowContent,
            key: "content",
            prefixCls: prefixCls,
            id: id,
            overlayInnerStyle: overlayInnerStyle
        }, overlay);
    };
    var destroyTooltip = false;
    var autoDestroy = false;
    if (typeof destroyTooltipOnHide === "boolean") destroyTooltip = destroyTooltipOnHide;
    else if (destroyTooltipOnHide && (0, $f301c3a9cca1c45b$export$2e2bcd8739ae039)(destroyTooltipOnHide) === "object") {
        var keepParent = destroyTooltipOnHide.keepParent;
        destroyTooltip = keepParent === true;
        autoDestroy = keepParent === false;
    }
    return /*#__PURE__*/ $fP0te$createElement((0, $dddcee8820fb0eac$export$2e2bcd8739ae039), (0, $3d3ec4b4055bad86$export$2e2bcd8739ae039)({
        popupClassName: overlayClassName,
        prefixCls: prefixCls,
        popup: getPopupElement,
        action: trigger,
        builtinPlacements: (0, $000a318baba181a7$export$803cd8101b6c182b),
        popupPlacement: placement,
        ref: domRef,
        popupAlign: align,
        getPopupContainer: getTooltipContainer,
        onPopupVisibleChange: onVisibleChange,
        afterPopupVisibleChange: afterVisibleChange,
        popupTransitionName: transitionName,
        popupAnimation: animation,
        popupMotion: motion,
        defaultPopupVisible: defaultVisible,
        destroyPopupOnHide: destroyTooltip,
        autoDestroy: autoDestroy,
        mouseLeaveDelay: mouseLeaveDelay,
        popupStyle: overlayStyle,
        mouseEnterDelay: mouseEnterDelay
    }, extraProps), children);
};
var $abd24c78313eb6d4$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $fP0te$forwardRef)($abd24c78313eb6d4$var$Tooltip);



var $f5dc7bcaafc2c4cd$export$2e2bcd8739ae039 = (0, $abd24c78313eb6d4$export$2e2bcd8739ae039);




var $1b60ecf77e583aa0$var$SliderTooltip = /*#__PURE__*/ $fP0te$forwardRef(function(props, ref) {
    var visible = props.visible, overlay = props.overlay;
    var innerRef = $fP0te$useRef(null);
    var tooltipRef = (0, $225049917dd1e288$export$ab452c34e8e05029)(ref, innerRef);
    var rafRef = $fP0te$useRef(null);
    function cancelKeepAlign() {
        (0, $aee939dffebaf255$export$2e2bcd8739ae039).cancel(rafRef.current);
    }
    function keepAlign() {
        rafRef.current = (0, $aee939dffebaf255$export$2e2bcd8739ae039)(function() {
            var _innerRef$current;
            (_innerRef$current = innerRef.current) === null || _innerRef$current === void 0 || _innerRef$current.forcePopupAlign();
        });
    }
    $fP0te$useEffect(function() {
        if (visible) keepAlign();
        else cancelKeepAlign();
        return cancelKeepAlign;
    }, [
        visible,
        overlay
    ]);
    return /*#__PURE__*/ $fP0te$createElement((0, $f5dc7bcaafc2c4cd$export$2e2bcd8739ae039), (0, $3d3ec4b4055bad86$export$2e2bcd8739ae039)({
        ref: tooltipRef
    }, props));
});
var $1b60ecf77e583aa0$export$2e2bcd8739ae039 = $1b60ecf77e583aa0$var$SliderTooltip;



function $167d05cf619b09fc$export$2e2bcd8739ae039(Component) {
    var _a; // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return _a = /*#__PURE__*/ function(_React$Component) {
        (0, $6a6e2222e4757b72$export$2e2bcd8739ae039)(ComponentWrapper, _React$Component);
        var _super = (0, $4f1a33a2878c5918$export$2e2bcd8739ae039)(ComponentWrapper);
        function ComponentWrapper() {
            var _this;
            (0, $ee5c3d0d33581caa$export$2e2bcd8739ae039)(this, ComponentWrapper);
            _this = _super.apply(this, arguments);
            _this.state = {
                visibles: {}
            };
            _this.handleTooltipVisibleChange = function(index, visible) {
                _this.setState(function(prevState) {
                    return {
                        visibles: (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)((0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, prevState.visibles), {}, (0, $c2297bd41cc24dfb$export$2e2bcd8739ae039)({}, index, visible))
                    };
                });
            };
            _this.handleWithTooltip = function(_ref) {
                var value = _ref.value, dragging = _ref.dragging, index = _ref.index, disabled = _ref.disabled, restProps = (0, $8267cf9e9a5b22d5$export$2e2bcd8739ae039)(_ref, [
                    "value",
                    "dragging",
                    "index",
                    "disabled"
                ]);
                var _this$props = _this.props, tipFormatter = _this$props.tipFormatter, tipProps = _this$props.tipProps, handleStyle = _this$props.handleStyle, getTooltipContainer = _this$props.getTooltipContainer;
                var _tipProps$prefixCls = tipProps.prefixCls, prefixCls = _tipProps$prefixCls === void 0 ? "rc-slider-tooltip" : _tipProps$prefixCls, _tipProps$overlay = tipProps.overlay, overlay = _tipProps$overlay === void 0 ? tipFormatter(value) : _tipProps$overlay, _tipProps$placement = tipProps.placement, placement = _tipProps$placement === void 0 ? "top" : _tipProps$placement, _tipProps$visible = tipProps.visible, visible = _tipProps$visible === void 0 ? false : _tipProps$visible, restTooltipProps = (0, $8267cf9e9a5b22d5$export$2e2bcd8739ae039)(tipProps, [
                    "prefixCls",
                    "overlay",
                    "placement",
                    "visible"
                ]);
                var handleStyleWithIndex;
                if (Array.isArray(handleStyle)) handleStyleWithIndex = handleStyle[index] || handleStyle[0];
                else handleStyleWithIndex = handleStyle;
                return /*#__PURE__*/ (0, $fP0te$react).createElement((0, $1b60ecf77e583aa0$export$2e2bcd8739ae039), (0, $3d3ec4b4055bad86$export$2e2bcd8739ae039)({}, restTooltipProps, {
                    getTooltipContainer: getTooltipContainer,
                    prefixCls: prefixCls,
                    overlay: overlay,
                    placement: placement,
                    visible: !disabled && (_this.state.visibles[index] || dragging) || visible,
                    key: index
                }), /*#__PURE__*/ (0, $fP0te$react).createElement((0, $85255e677065b5b5$export$2e2bcd8739ae039), (0, $3d3ec4b4055bad86$export$2e2bcd8739ae039)({}, restProps, {
                    style: (0, $d59e039cd5b05f8e$export$2e2bcd8739ae039)({}, handleStyleWithIndex),
                    value: value,
                    onMouseEnter: function onMouseEnter() {
                        return _this.handleTooltipVisibleChange(index, true);
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this.handleTooltipVisibleChange(index, false);
                    }
                })));
            };
            return _this;
        }
        (0, $0d7f289b36132a60$export$2e2bcd8739ae039)(ComponentWrapper, [
            {
                key: "render",
                value: function render() {
                    return /*#__PURE__*/ (0, $fP0te$react).createElement(Component, (0, $3d3ec4b4055bad86$export$2e2bcd8739ae039)({}, this.props, {
                        handle: this.handleWithTooltip
                    }));
                }
            }
        ]);
        return ComponentWrapper;
    }((0, $fP0te$react).Component), _a.defaultProps = {
        tipFormatter: function tipFormatter(value) {
            return value;
        },
        handleStyle: [
            {}
        ],
        tipProps: {},
        getTooltipContainer: function getTooltipContainer(node) {
            return node.parentNode;
        }
    }, _a;
}



var $6efb8b67079cec32$var$InternalSlider = (0, $803f678135f2bcdd$export$2e2bcd8739ae039);
$6efb8b67079cec32$var$InternalSlider.Range = (0, $95ca34ae355532c5$export$2e2bcd8739ae039);
$6efb8b67079cec32$var$InternalSlider.Handle = (0, $85255e677065b5b5$export$2e2bcd8739ae039);
$6efb8b67079cec32$var$InternalSlider.createSliderWithTooltip = (0, $167d05cf619b09fc$export$2e2bcd8739ae039);
var $6efb8b67079cec32$export$2e2bcd8739ae039 = $6efb8b67079cec32$var$InternalSlider;


var $2e9c28abb2e6507d$exports = {};
var $2e9c28abb2e6507d$var$containers = []; // will store container HTMLElement references
var $2e9c28abb2e6507d$var$styleElements = []; // will store {prepend: HTMLElement, append: HTMLElement}
var $2e9c28abb2e6507d$var$usage = "insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";
function $2e9c28abb2e6507d$var$insertCss(css, options) {
    options = options || {};
    if (css === undefined) throw new Error($2e9c28abb2e6507d$var$usage);
    var position = options.prepend === true ? "prepend" : "append";
    var container = options.container !== undefined ? options.container : document.querySelector("head");
    var containerId = $2e9c28abb2e6507d$var$containers.indexOf(container);
    // first time we see this container, create the necessary entries
    if (containerId === -1) {
        containerId = $2e9c28abb2e6507d$var$containers.push(container) - 1;
        $2e9c28abb2e6507d$var$styleElements[containerId] = {};
    }
    // try to get the correponding container + position styleElement, create it otherwise
    var styleElement;
    if ($2e9c28abb2e6507d$var$styleElements[containerId] !== undefined && $2e9c28abb2e6507d$var$styleElements[containerId][position] !== undefined) styleElement = $2e9c28abb2e6507d$var$styleElements[containerId][position];
    else {
        styleElement = $2e9c28abb2e6507d$var$styleElements[containerId][position] = $2e9c28abb2e6507d$var$createStyleElement();
        if (position === "prepend") container.insertBefore(styleElement, container.childNodes[0]);
        else container.appendChild(styleElement);
    }
    // strip potential UTF-8 BOM if css was read from a file
    if (css.charCodeAt(0) === 0xFEFF) css = css.substr(1, css.length);
    // actually add the stylesheet
    if (styleElement.styleSheet) styleElement.styleSheet.cssText += css;
    else styleElement.textContent += css;
    return styleElement;
}
function $2e9c28abb2e6507d$var$createStyleElement() {
    var styleElement = document.createElement("style");
    styleElement.setAttribute("type", "text/css");
    return styleElement;
}
$2e9c28abb2e6507d$exports = $2e9c28abb2e6507d$var$insertCss;
$2e9c28abb2e6507d$exports.insertCss = $2e9c28abb2e6507d$var$insertCss;



const $286f87e06b21c8d1$var$noop = ()=>{};
const $286f87e06b21c8d1$var$audio = (0, $12c21507a843a208$exports.canUseDOM) ? new Audio() : null;
let $286f87e06b21c8d1$var$tracks;
let $286f87e06b21c8d1$var$currentTrackIndex = 0;
let $286f87e06b21c8d1$var$timer;
let $286f87e06b21c8d1$var$listeners = {};
let $286f87e06b21c8d1$var$lastListenerId = 0;
const $286f87e06b21c8d1$export$367277103c25ce5d = {
    LISTENER_ADDED: "LISTENER_ADDED",
    TRACKS_ADDED: "TRACKS_ADDED",
    LOAD: "LOAD",
    PLAY: "PLAY",
    PAUSE: "PAUSE",
    STOP: "STOP",
    SEEK: "SEEK",
    TRACK_SWITCH: "TRACK_SWITCH",
    TICK: "TICK"
};
const $286f87e06b21c8d1$export$f7351e61402bc842 = "--:--";
function $286f87e06b21c8d1$var$isPlaying() {
    return $286f87e06b21c8d1$var$audio.duration > 0 && !$286f87e06b21c8d1$var$audio.paused;
}
function $286f87e06b21c8d1$var$isStopped() {
    return !$286f87e06b21c8d1$var$audio.currentTime;
}
function $286f87e06b21c8d1$var$zeroPadNumber(number) {
    return number < 10 ? "0" + number : number;
}
function $286f87e06b21c8d1$export$3203edd9e5edd663(seconds) {
    if (typeof seconds === "number" && seconds >= 0) {
        const m = Math.floor(seconds / 60);
        const s = Math.round(seconds) % 60;
        return $286f87e06b21c8d1$var$zeroPadNumber(m) + ":" + $286f87e06b21c8d1$var$zeroPadNumber(s);
    } else return $286f87e06b21c8d1$export$f7351e61402bc842;
}
function $286f87e06b21c8d1$var$updateListeners(type) {
    Object.values($286f87e06b21c8d1$var$listeners).forEach((listener)=>listener({
            type: type,
            tracks: $286f87e06b21c8d1$var$tracks,
            isPlaying: $286f87e06b21c8d1$var$isPlaying(),
            secondsElapsed: $286f87e06b21c8d1$var$audio.currentTime,
            secondsRemaining: $286f87e06b21c8d1$var$audio.duration - $286f87e06b21c8d1$var$audio.currentTime,
            timeElapsed: $286f87e06b21c8d1$var$isStopped() ? $286f87e06b21c8d1$export$f7351e61402bc842 : $286f87e06b21c8d1$export$3203edd9e5edd663($286f87e06b21c8d1$var$audio.currentTime),
            timeRemaining: $286f87e06b21c8d1$export$3203edd9e5edd663($286f87e06b21c8d1$var$audio.duration - $286f87e06b21c8d1$var$audio.currentTime),
            currentTrack: {
                ...$286f87e06b21c8d1$var$tracks[$286f87e06b21c8d1$var$currentTrackIndex],
                durationSeconds: $286f87e06b21c8d1$var$audio.duration,
                durationString: $286f87e06b21c8d1$export$3203edd9e5edd663($286f87e06b21c8d1$var$audio.duration)
            }
        }));
}
function $286f87e06b21c8d1$var$switchTrack() {
    const wasStopped = $286f87e06b21c8d1$var$isStopped();
    $286f87e06b21c8d1$var$audio.src = $286f87e06b21c8d1$var$tracks[$286f87e06b21c8d1$var$currentTrackIndex].file;
    if (!wasStopped) $286f87e06b21c8d1$export$899fbdb5fa08b653();
    $286f87e06b21c8d1$var$updateListeners($286f87e06b21c8d1$export$367277103c25ce5d.TRACK_SWITCH);
}
function $286f87e06b21c8d1$var$stopTimer() {
    if ($286f87e06b21c8d1$var$timer) {
        clearInterval($286f87e06b21c8d1$var$timer);
        $286f87e06b21c8d1$var$timer = null;
    }
}
const $286f87e06b21c8d1$export$5106570dc4737ef5 = (0, $12c21507a843a208$exports.canUseDOM) ? (newTracks)=>{
    if ($286f87e06b21c8d1$var$tracks === undefined || $286f87e06b21c8d1$var$tracks.length === 0) $286f87e06b21c8d1$var$audio.src = newTracks[0].file;
    $286f87e06b21c8d1$var$tracks = newTracks.map((t, i)=>({
            ...t,
            number: i + 1
        }));
    $286f87e06b21c8d1$var$updateListeners($286f87e06b21c8d1$export$367277103c25ce5d.TRACKS_ADDED);
} : $286f87e06b21c8d1$var$noop;
const $286f87e06b21c8d1$export$899fbdb5fa08b653 = (0, $12c21507a843a208$exports.canUseDOM) ? ()=>{
    if ($286f87e06b21c8d1$var$isPlaying()) {
        $286f87e06b21c8d1$var$audio.pause();
        $286f87e06b21c8d1$var$stopTimer();
        $286f87e06b21c8d1$var$updateListeners($286f87e06b21c8d1$export$367277103c25ce5d.PAUSE);
    } else {
        $286f87e06b21c8d1$var$audio.play();
        $286f87e06b21c8d1$var$updateListeners($286f87e06b21c8d1$export$367277103c25ce5d.PLAY);
        $286f87e06b21c8d1$var$timer = setInterval(()=>$286f87e06b21c8d1$var$updateListeners($286f87e06b21c8d1$export$367277103c25ce5d.TICK), 1000);
    }
} : $286f87e06b21c8d1$var$noop;
const $286f87e06b21c8d1$export$fa6813432f753b0d = (0, $12c21507a843a208$exports.canUseDOM) ? ()=>{
    $286f87e06b21c8d1$var$audio.pause();
    $286f87e06b21c8d1$var$audio.currentTime = 0;
    $286f87e06b21c8d1$var$stopTimer();
    $286f87e06b21c8d1$var$updateListeners($286f87e06b21c8d1$export$367277103c25ce5d.STOP);
} : $286f87e06b21c8d1$var$noop;
const $286f87e06b21c8d1$export$990806b8ad8af834 = (0, $12c21507a843a208$exports.canUseDOM) ? (seconds)=>{
    $286f87e06b21c8d1$var$audio.currentTime = seconds;
    $286f87e06b21c8d1$var$updateListeners($286f87e06b21c8d1$export$367277103c25ce5d.SEEK);
} : $286f87e06b21c8d1$var$noop;
const $286f87e06b21c8d1$export$48cfd1e771a65c4f = (0, $12c21507a843a208$exports.canUseDOM) ? ()=>{
    $286f87e06b21c8d1$var$currentTrackIndex = $286f87e06b21c8d1$var$currentTrackIndex + 1 >= $286f87e06b21c8d1$var$tracks.length ? 0 : $286f87e06b21c8d1$var$currentTrackIndex + 1;
    $286f87e06b21c8d1$var$switchTrack();
} : $286f87e06b21c8d1$var$noop;
const $286f87e06b21c8d1$export$232faf9add678146 = (0, $12c21507a843a208$exports.canUseDOM) ? ()=>{
    $286f87e06b21c8d1$var$currentTrackIndex = $286f87e06b21c8d1$var$currentTrackIndex - 1 < 0 ? $286f87e06b21c8d1$var$tracks.length - 1 : $286f87e06b21c8d1$var$currentTrackIndex - 1;
    $286f87e06b21c8d1$var$switchTrack();
} : $286f87e06b21c8d1$var$noop;
const $286f87e06b21c8d1$export$e64e955830870e84 = (0, $12c21507a843a208$exports.canUseDOM) ? (number)=>{
    $286f87e06b21c8d1$var$currentTrackIndex = number - 1;
    $286f87e06b21c8d1$var$switchTrack();
} : $286f87e06b21c8d1$var$noop;
const $286f87e06b21c8d1$export$2735a780d8a99a8c = (0, $12c21507a843a208$exports.canUseDOM) ? (number)=>{
    $286f87e06b21c8d1$export$e64e955830870e84(number);
    if (!$286f87e06b21c8d1$var$isPlaying()) $286f87e06b21c8d1$export$899fbdb5fa08b653();
} : $286f87e06b21c8d1$var$noop;
const $286f87e06b21c8d1$export$9a5e51d3b9fed543 = (0, $12c21507a843a208$exports.canUseDOM) ? ()=>{
    $286f87e06b21c8d1$var$audio.autoplay = true;
} : $286f87e06b21c8d1$var$noop;
function $286f87e06b21c8d1$export$f03a6b845d3fb58b(callback) {
    $286f87e06b21c8d1$var$listeners[String(++$286f87e06b21c8d1$var$lastListenerId)] = callback;
    return $286f87e06b21c8d1$var$lastListenerId;
}
function $286f87e06b21c8d1$export$b03e9483f936dccb(id) {
    delete $286f87e06b21c8d1$var$listeners[String(id)];
}
function $286f87e06b21c8d1$export$72be9cc1d9b9a9ef() {
    return $286f87e06b21c8d1$var$listeners;
}
if (0, $12c21507a843a208$exports.canUseDOM) {
    $286f87e06b21c8d1$var$audio.addEventListener("play", ()=>$286f87e06b21c8d1$var$updateListeners($286f87e06b21c8d1$export$367277103c25ce5d.PLAY));
    $286f87e06b21c8d1$var$audio.addEventListener("durationchange", ()=>$286f87e06b21c8d1$var$updateListeners($286f87e06b21c8d1$export$367277103c25ce5d.LOAD));
    $286f87e06b21c8d1$var$audio.addEventListener("ended", ()=>{
        $286f87e06b21c8d1$export$48cfd1e771a65c4f();
        $286f87e06b21c8d1$export$899fbdb5fa08b653();
    });
}


function $449a6611044904a5$export$c0b03e78d1b6fede(WrappedComponent, tracks, { autoplay: autoplay = false  } = {}) {
    class Connect extends (0, $fP0te$Component) {
        constructor(props){
            super(props);
            this.state = {
                isPlaying: false,
                currentTrack: null,
                secondsElapsed: 0,
                secondsRemaining: 0,
                timeElapsed: null,
                timeRemaining: null
            };
        }
        componentDidMount() {
            this.listenerId = (0, $286f87e06b21c8d1$export$f03a6b845d3fb58b)((update)=>{
                const { type: type , ...state } = update;
                this.setState(state);
            });
            if (autoplay) (0, $286f87e06b21c8d1$export$9a5e51d3b9fed543)();
            (0, $286f87e06b21c8d1$export$5106570dc4737ef5)(tracks);
        }
        componentWillUnmount() {
            (0, $286f87e06b21c8d1$export$b03e9483f936dccb)(this.listenerId);
        }
        render() {
            const props = {
                play: $286f87e06b21c8d1$export$899fbdb5fa08b653,
                stop: $286f87e06b21c8d1$export$fa6813432f753b0d,
                seek: $286f87e06b21c8d1$export$990806b8ad8af834,
                next: $286f87e06b21c8d1$export$48cfd1e771a65c4f,
                prev: $286f87e06b21c8d1$export$232faf9add678146,
                goto: $286f87e06b21c8d1$export$e64e955830870e84,
                gotoAndPlay: $286f87e06b21c8d1$export$2735a780d8a99a8c,
                isPlaying: this.state.isPlaying,
                currentTrack: this.state.currentTrack || {},
                secondsElapsed: this.state.secondsElapsed,
                secondsRemaining: this.state.secondsRemaining,
                timeElapsed: this.state.timeElapsed,
                timeRemaining: this.state.timeRemaining
            };
            return /*#__PURE__*/ (0, $fP0te$createElement)(WrappedComponent, {
                ...this.props,
                ...props
            });
        }
    }
    return Connect;
}
/* TitleMarquee component */ const $449a6611044904a5$var$marqueeAnimationName = "rdap_marquee";
const $449a6611044904a5$var$baseStyle = {
    paddingLeft: "100%",
    display: "inline-block"
};
const $449a6611044904a5$var$getMarqueeStyle = (duration)=>({
        ...$449a6611044904a5$var$baseStyle,
        animation: `${$449a6611044904a5$var$marqueeAnimationName} ${duration}s infinite linear`
    });
class $449a6611044904a5$var$TM extends (0, $fP0te$Component) {
    constructor(props){
        super(props);
        this.state = {
            on: true,
            currentTrack: null
        };
        if (0, $12c21507a843a208$exports.canUseDOM) (0, (/*@__PURE__*/$parcel$interopDefault($2e9c28abb2e6507d$exports)))(`
        @import url('rc-slider/assets/index.css');
        @keyframes ${$449a6611044904a5$var$marqueeAnimationName} {
        0% {-webkit-transform:translate(0, 0)}
        100% {-webkit-transform:translate(-100%, 0)}
       }`);
    }
    componentDidMount() {
        this.listenerId = (0, $286f87e06b21c8d1$export$f03a6b845d3fb58b)((update)=>this.setState({
                currentTrack: update.currentTrack,
                on: update.type !== (0, $286f87e06b21c8d1$export$367277103c25ce5d).TRACK_SWITCH
            }));
    }
    componentWillUnmount() {
        (0, $286f87e06b21c8d1$export$b03e9483f936dccb)(this.listenerId);
    }
    render() {
        const { className: className , textFn: textFn , duration: duration  } = this.props;
        const { currentTrack: currentTrack  } = this.state;
        const { number: number , artist: artist , title: title  } = currentTrack || {};
        return /*#__PURE__*/ (0, $fP0te$react).createElement("div", {
            className: className
        }, /*#__PURE__*/ (0, $fP0te$react).createElement("div", {
            style: {
                overflow: "hidden",
                whiteSpace: "nowrap"
            }
        }, /*#__PURE__*/ (0, $fP0te$react).createElement("div", {
            style: this.state.on ? $449a6611044904a5$var$getMarqueeStyle(duration || 10) : $449a6611044904a5$var$baseStyle
        }, currentTrack ? textFn ? textFn(currentTrack) : `${number}. ${artist} - ${title}` : "")));
    }
}
$449a6611044904a5$var$TM.propTypes = {
    className: (0, (/*@__PURE__*/$parcel$interopDefault($2ad5bb065e837e63$exports))).string,
    textFn: (0, (/*@__PURE__*/$parcel$interopDefault($2ad5bb065e837e63$exports))).func,
    duration: (0, (/*@__PURE__*/$parcel$interopDefault($2ad5bb065e837e63$exports))).number
};
const $449a6611044904a5$export$b59c99f47fcbedf1 = $449a6611044904a5$var$TM;
/* TimeSlider component */ class $449a6611044904a5$var$DefaultSliderHandle extends (0, $fP0te$Component) {
    render() {
        return /*#__PURE__*/ (0, $fP0te$react).createElement("div", null);
    }
}
class $449a6611044904a5$var$TS extends (0, $fP0te$Component) {
    constructor(props){
        super(props);
        this.state = {
            secondsElapsed: 0,
            secondsRemaining: 0
        };
    }
    componentDidMount() {
        this.listenerId = (0, $286f87e06b21c8d1$export$f03a6b845d3fb58b)((update)=>{
            const { secondsElapsed: secondsElapsed , secondsRemaining: secondsRemaining  } = update;
            this.setState({
                secondsElapsed: secondsElapsed,
                secondsRemaining: secondsRemaining
            });
        });
    }
    componentWillUnmount() {
        (0, $286f87e06b21c8d1$export$b03e9483f936dccb)(this.listenerId);
    }
    render() {
        const { className: className , ...props } = this.props;
        const { secondsElapsed: secondsElapsed , secondsRemaining: secondsRemaining  } = this.state;
        return /*#__PURE__*/ (0, $fP0te$react).createElement("div", {
            className: className
        }, /*#__PURE__*/ (0, $fP0te$react).createElement((0, $6efb8b67079cec32$export$2e2bcd8739ae039), {
            onChange: (0, $286f87e06b21c8d1$export$990806b8ad8af834),
            value: secondsElapsed,
            min: 0,
            max: secondsElapsed + secondsRemaining,
            handle: this.props.handle || /*#__PURE__*/ (0, $fP0te$react).createElement($449a6611044904a5$var$DefaultSliderHandle, null),
            ...props
        }));
    }
}
$449a6611044904a5$var$TS.propTypes = {
    className: (0, (/*@__PURE__*/$parcel$interopDefault($2ad5bb065e837e63$exports))).string
};
const $449a6611044904a5$export$e296a477a1bc715a = $449a6611044904a5$var$TS;
/* Playlist component */ class $449a6611044904a5$var$PL extends (0, $fP0te$Component) {
    constructor(props){
        super(props);
        this.state = {
            tracks: [],
            currentTrack: null
        };
    }
    componentDidMount() {
        this.listenerId = (0, $286f87e06b21c8d1$export$f03a6b845d3fb58b)((update)=>{
            const { tracks: tracks , currentTrack: currentTrack  } = update;
            this.setState({
                tracks: tracks,
                currentTrack: currentTrack
            });
        });
    }
    componentWillUnmount() {
        (0, $286f87e06b21c8d1$export$b03e9483f936dccb)(this.listenerId);
    }
    render() {
        const { className: className , itemClassName: itemClassName , currentItemClassName: currentItemClassName , itemComponent: itemComponent  } = this.props;
        const { tracks: tracks , currentTrack: currentTrack  } = this.state;
        const { number: number  } = currentTrack || {};
        const itemStyle = {
            padding: "2px 6px",
            cursor: "pointer",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden"
        };
        return /*#__PURE__*/ (0, $fP0te$react).createElement("div", {
            className: className
        }, tracks.map((track, i)=>/*#__PURE__*/ (0, $fP0te$react).createElement("div", {
                key: i,
                className: number === i + 1 ? itemClassName + " " + currentItemClassName : itemClassName,
                style: itemStyle,
                onClick: ()=>number === i + 1 ? (0, $286f87e06b21c8d1$export$2735a780d8a99a8c)(i + 1) : (0, $286f87e06b21c8d1$export$e64e955830870e84)(i + 1)
            }, itemComponent ? itemComponent(track) : `${i + 1}. ${track.artist} - ${track.title}`)));
    }
}
$449a6611044904a5$var$PL.propTypes = {
    className: (0, (/*@__PURE__*/$parcel$interopDefault($2ad5bb065e837e63$exports))).string,
    itemClassName: (0, (/*@__PURE__*/$parcel$interopDefault($2ad5bb065e837e63$exports))).string,
    currentItemClassName: (0, (/*@__PURE__*/$parcel$interopDefault($2ad5bb065e837e63$exports))).string,
    itemComponent: (0, (/*@__PURE__*/$parcel$interopDefault($2ad5bb065e837e63$exports))).func
};
const $449a6611044904a5$export$a10c242a3195e585 = $449a6611044904a5$var$PL;




export {$449a6611044904a5$export$c0b03e78d1b6fede as connectAudioPlayer, $449a6611044904a5$export$b59c99f47fcbedf1 as TitleMarquee, $449a6611044904a5$export$e296a477a1bc715a as TimeSlider, $449a6611044904a5$export$a10c242a3195e585 as Playlist};
//# sourceMappingURL=main.mjs.map
