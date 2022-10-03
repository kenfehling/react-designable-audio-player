import $a2Yf5$react, {createElement as $a2Yf5$createElement, Component as $a2Yf5$Component, forwardRef as $a2Yf5$forwardRef, useRef as $a2Yf5$useRef, useEffect as $a2Yf5$useEffect} from "react";
import $a2Yf5$proptypes from "prop-types";
import $a2Yf5$babelruntimehelpersesmobjectSpread2 from "@babel/runtime/helpers/esm/objectSpread2";
import $a2Yf5$babelruntimehelpersesmclassCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import $a2Yf5$babelruntimehelpersesmcreateClass from "@babel/runtime/helpers/esm/createClass";
import $a2Yf5$babelruntimehelpersesminherits from "@babel/runtime/helpers/esm/inherits";
import $a2Yf5$babelruntimehelpersesmcreateSuper from "@babel/runtime/helpers/esm/createSuper";
import $a2Yf5$rcutileswarning from "rc-util/es/warning";
import $a2Yf5$babelruntimehelpersesmdefineProperty from "@babel/runtime/helpers/esm/defineProperty";
import $a2Yf5$babelruntimehelpersesmextends from "@babel/runtime/helpers/esm/extends";
import $a2Yf5$babelruntimehelpersesmobjectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import $a2Yf5$babelruntimehelpersesmtoConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import $a2Yf5$babelruntimehelpersesmget from "@babel/runtime/helpers/esm/get";
import $a2Yf5$babelruntimehelpersesmgetPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import $a2Yf5$rcutilesDomaddEventListener from "rc-util/es/Dom/addEventListener";
import $a2Yf5$classnames from "classnames";
import $a2Yf5$babelruntimehelpersesmtypeof from "@babel/runtime/helpers/esm/typeof";
import {findDOMNode as $a2Yf5$findDOMNode} from "react-dom";
import $a2Yf5$rcutilesKeyCode from "rc-util/es/KeyCode";
import $a2Yf5$rctooltip from "rc-tooltip";
import {composeRef as $a2Yf5$composeRef} from "rc-util/es/ref";
import $a2Yf5$rcutilesraf from "rc-util/es/raf";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}


var $3276797958263460$exports = {};
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ "use strict";
var $3276797958263460$var$canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */ var $3276797958263460$var$ExecutionEnvironment = {
    canUseDOM: $3276797958263460$var$canUseDOM,
    canUseWorkers: typeof Worker !== "undefined",
    canUseEventListeners: $3276797958263460$var$canUseDOM && !!(window.addEventListener || window.attachEvent),
    canUseViewport: $3276797958263460$var$canUseDOM && !!window.screen,
    isInWorker: !$3276797958263460$var$canUseDOM // For now, this is true - might change in the future.
};
$3276797958263460$exports = $3276797958263460$var$ExecutionEnvironment;












var $756f770978e0c648$var$Track = function Track(props) {
    var _ref, _ref2;
    var className = props.className, included = props.included, vertical = props.vertical, style = props.style;
    var length = props.length, offset = props.offset, reverse = props.reverse;
    if (length < 0) {
        reverse = !reverse;
        length = Math.abs(length);
        offset = 100 - offset;
    }
    var positonStyle = vertical ? (_ref = {}, (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_ref, reverse ? "top" : "bottom", "".concat(offset, "%")), (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_ref, reverse ? "bottom" : "top", "auto"), (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_ref, "height", "".concat(length, "%")), _ref) : (_ref2 = {}, (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_ref2, reverse ? "right" : "left", "".concat(offset, "%")), (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_ref2, reverse ? "left" : "right", "auto"), (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_ref2, "width", "".concat(length, "%")), _ref2);
    var elStyle = (0, $a2Yf5$babelruntimehelpersesmobjectSpread2)((0, $a2Yf5$babelruntimehelpersesmobjectSpread2)({}, style), positonStyle);
    return included ? /*#__PURE__*/ (0, $a2Yf5$react).createElement("div", {
        className: className,
        style: elStyle
    }) : null;
};
var $756f770978e0c648$export$2e2bcd8739ae039 = $756f770978e0c648$var$Track;






















var $8c13983e77ba506c$var$calcPoints = function calcPoints(vertical, marks, dots, step, min, max) {
    (0, $a2Yf5$rcutileswarning)(dots ? step > 0 : true, "`Slider[step]` should be a positive number in order to make Slider[dots] work.");
    var points = Object.keys(marks).map(parseFloat).sort(function(a, b) {
        return a - b;
    });
    if (dots && step) {
        for(var i = min; i <= max; i += step)if (points.indexOf(i) === -1) points.push(i);
    }
    return points;
};
var $8c13983e77ba506c$var$Steps = function Steps(_ref) {
    var prefixCls = _ref.prefixCls, vertical = _ref.vertical, reverse = _ref.reverse, marks = _ref.marks, dots = _ref.dots, step = _ref.step, included = _ref.included, lowerBound = _ref.lowerBound, upperBound = _ref.upperBound, max = _ref.max, min = _ref.min, dotStyle = _ref.dotStyle, activeDotStyle = _ref.activeDotStyle;
    var range = max - min;
    var elements = $8c13983e77ba506c$var$calcPoints(vertical, marks, dots, step, min, max).map(function(point) {
        var _classNames;
        var offset = "".concat(Math.abs(point - min) / range * 100, "%");
        var isActived = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
        var style = vertical ? (0, $a2Yf5$babelruntimehelpersesmobjectSpread2)((0, $a2Yf5$babelruntimehelpersesmobjectSpread2)({}, dotStyle), {}, (0, $a2Yf5$babelruntimehelpersesmdefineProperty)({}, reverse ? "top" : "bottom", offset)) : (0, $a2Yf5$babelruntimehelpersesmobjectSpread2)((0, $a2Yf5$babelruntimehelpersesmobjectSpread2)({}, dotStyle), {}, (0, $a2Yf5$babelruntimehelpersesmdefineProperty)({}, reverse ? "right" : "left", offset));
        if (isActived) style = (0, $a2Yf5$babelruntimehelpersesmobjectSpread2)((0, $a2Yf5$babelruntimehelpersesmobjectSpread2)({}, style), activeDotStyle);
        var pointClassName = (0, $a2Yf5$classnames)((_classNames = {}, (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_classNames, "".concat(prefixCls, "-dot"), true), (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_classNames, "".concat(prefixCls, "-dot-active"), isActived), (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_classNames, "".concat(prefixCls, "-dot-reverse"), reverse), _classNames));
        return /*#__PURE__*/ (0, $a2Yf5$react).createElement("span", {
            className: pointClassName,
            style: style,
            key: point
        });
    });
    return /*#__PURE__*/ (0, $a2Yf5$react).createElement("div", {
        className: "".concat(prefixCls, "-step")
    }, elements);
};
var $8c13983e77ba506c$export$2e2bcd8739ae039 = $8c13983e77ba506c$var$Steps;







var $434855d4eadbe8c2$var$Marks = function Marks(_ref) {
    var className = _ref.className, vertical = _ref.vertical, reverse = _ref.reverse, marks = _ref.marks, included = _ref.included, upperBound = _ref.upperBound, lowerBound = _ref.lowerBound, max = _ref.max, min = _ref.min, onClickLabel = _ref.onClickLabel;
    var marksKeys = Object.keys(marks);
    var range = max - min;
    var elements = marksKeys.map(parseFloat).sort(function(a, b) {
        return a - b;
    }).map(function(point) {
        var _classNames;
        var markPoint = marks[point];
        var markPointIsObject = (0, $a2Yf5$babelruntimehelpersesmtypeof)(markPoint) === "object" && !/*#__PURE__*/ (0, $a2Yf5$react).isValidElement(markPoint);
        var markLabel = markPointIsObject ? markPoint.label : markPoint;
        if (!markLabel && markLabel !== 0) return null;
        var isActive = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
        var markClassName = (0, $a2Yf5$classnames)((_classNames = {}, (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_classNames, "".concat(className, "-text"), true), (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_classNames, "".concat(className, "-text-active"), isActive), _classNames));
        var bottomStyle = (0, $a2Yf5$babelruntimehelpersesmdefineProperty)({
            marginBottom: "-50%"
        }, reverse ? "top" : "bottom", "".concat((point - min) / range * 100, "%"));
        var leftStyle = (0, $a2Yf5$babelruntimehelpersesmdefineProperty)({
            transform: "translateX(".concat(reverse ? "50%" : "-50%", ")"),
            msTransform: "translateX(".concat(reverse ? "50%" : "-50%", ")")
        }, reverse ? "right" : "left", "".concat((point - min) / range * 100, "%"));
        var style = vertical ? bottomStyle : leftStyle;
        var markStyle = markPointIsObject ? (0, $a2Yf5$babelruntimehelpersesmobjectSpread2)((0, $a2Yf5$babelruntimehelpersesmobjectSpread2)({}, style), markPoint.style) : style;
        return /*#__PURE__*/ (0, $a2Yf5$react).createElement("span", {
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
    return /*#__PURE__*/ (0, $a2Yf5$react).createElement("div", {
        className: className
    }, elements);
};
var $434855d4eadbe8c2$export$2e2bcd8739ae039 = $434855d4eadbe8c2$var$Marks;













var $02d8f4533571f053$export$2e2bcd8739ae039 = /*#__PURE__*/ function(_React$Component) {
    (0, $a2Yf5$babelruntimehelpersesminherits)(Handle, _React$Component);
    var _super = (0, $a2Yf5$babelruntimehelpersesmcreateSuper)(Handle);
    function Handle() {
        var _this;
        (0, $a2Yf5$babelruntimehelpersesmclassCallCheck)(this, Handle);
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
    (0, $a2Yf5$babelruntimehelpersesmcreateClass)(Handle, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                // mouseup won't trigger if mouse moved out of handle,
                // so we listen on document here.
                this.onMouseUpListener = (0, $a2Yf5$rcutilesDomaddEventListener)(document, "mouseup", this.handleMouseUp);
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
                var _this$props = this.props, prefixCls = _this$props.prefixCls, vertical = _this$props.vertical, reverse = _this$props.reverse, offset = _this$props.offset, style = _this$props.style, disabled = _this$props.disabled, min = _this$props.min, max = _this$props.max, value = _this$props.value, tabIndex = _this$props.tabIndex, ariaLabel = _this$props.ariaLabel, ariaLabelledBy = _this$props.ariaLabelledBy, ariaValueTextFormatter = _this$props.ariaValueTextFormatter, restProps = (0, $a2Yf5$babelruntimehelpersesmobjectWithoutProperties)(_this$props, [
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
                var className = (0, $a2Yf5$classnames)(this.props.className, (0, $a2Yf5$babelruntimehelpersesmdefineProperty)({}, "".concat(prefixCls, "-handle-click-focused"), this.state.clickFocused));
                var positionStyle = vertical ? (_ref = {}, (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_ref, reverse ? "top" : "bottom", "".concat(offset, "%")), (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_ref, reverse ? "bottom" : "top", "auto"), (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_ref, "transform", reverse ? null : "translateY(+50%)"), _ref) : (_ref2 = {}, (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_ref2, reverse ? "right" : "left", "".concat(offset, "%")), (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_ref2, reverse ? "left" : "right", "auto"), (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_ref2, "transform", "translateX(".concat(reverse ? "+" : "-", "50%)")), _ref2);
                var elStyle = (0, $a2Yf5$babelruntimehelpersesmobjectSpread2)((0, $a2Yf5$babelruntimehelpersesmobjectSpread2)({}, style), positionStyle);
                var mergedTabIndex = tabIndex || 0;
                if (disabled || tabIndex === null) mergedTabIndex = null;
                var ariaValueText;
                if (ariaValueTextFormatter) ariaValueText = ariaValueTextFormatter(value);
                return /*#__PURE__*/ (0, $a2Yf5$react).createElement("div", (0, $a2Yf5$babelruntimehelpersesmextends)({
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
}((0, $a2Yf5$react).Component);





function $afb7b5cb9bff7c9c$export$597415897f3287c9(e, handles) {
    try {
        return Object.keys(handles).some(function(key) {
            return e.target === (0, $a2Yf5$findDOMNode)(handles[key]);
        });
    } catch (error) {
        return false;
    }
}
function $afb7b5cb9bff7c9c$export$f4657b4dc4cc2ea4(value, _ref) {
    var min = _ref.min, max = _ref.max;
    return value < min || value > max;
}
function $afb7b5cb9bff7c9c$export$eaf0efc71c45a02(e) {
    return e.touches.length > 1 || e.type.toLowerCase() === "touchend" && e.touches.length > 0;
}
function $afb7b5cb9bff7c9c$export$e3e031d5dec39373(val, _ref2) {
    var marks = _ref2.marks, step = _ref2.step, min = _ref2.min, max = _ref2.max;
    var points = Object.keys(marks).map(parseFloat);
    if (step !== null) {
        var baseNum = Math.pow(10, $afb7b5cb9bff7c9c$export$e0c74b50bbd10f68(step));
        var maxSteps = Math.floor((max * baseNum - min * baseNum) / (step * baseNum));
        var steps = Math.min((val - min) / step, maxSteps);
        var closestStep = Math.round(steps) * step + min;
        points.push(closestStep);
    }
    var diffs = points.map(function(point) {
        return Math.abs(val - point);
    });
    return points[diffs.indexOf(Math.min.apply(Math, (0, $a2Yf5$babelruntimehelpersesmtoConsumableArray)(diffs)))];
}
function $afb7b5cb9bff7c9c$export$e0c74b50bbd10f68(step) {
    var stepString = step.toString();
    var precision = 0;
    if (stepString.indexOf(".") >= 0) precision = stepString.length - stepString.indexOf(".") - 1;
    return precision;
}
function $afb7b5cb9bff7c9c$export$642213d516a9b928(vertical, e) {
    return vertical ? e.clientY : e.pageX;
}
function $afb7b5cb9bff7c9c$export$7e1d3da113d10e8e(vertical, e) {
    return vertical ? e.touches[0].clientY : e.touches[0].pageX;
}
function $afb7b5cb9bff7c9c$export$ec6357f54996b379(vertical, handle) {
    var coords = handle.getBoundingClientRect();
    return vertical ? coords.top + coords.height * 0.5 : window.pageXOffset + coords.left + coords.width * 0.5;
}
function $afb7b5cb9bff7c9c$export$65e4339c6f9d8d24(val, _ref3) {
    var max = _ref3.max, min = _ref3.min;
    if (val <= min) return min;
    if (val >= max) return max;
    return val;
}
function $afb7b5cb9bff7c9c$export$5bea24a9dfe5ab1a(val, props) {
    var step = props.step;
    var closestPoint = isFinite($afb7b5cb9bff7c9c$export$e3e031d5dec39373(val, props)) ? $afb7b5cb9bff7c9c$export$e3e031d5dec39373(val, props) : 0; // eslint-disable-line
    return step === null ? closestPoint : parseFloat(closestPoint.toFixed($afb7b5cb9bff7c9c$export$e0c74b50bbd10f68(step)));
}
function $afb7b5cb9bff7c9c$export$3f9ffdaf2961f43f(e) {
    e.stopPropagation();
    e.preventDefault();
}
function $afb7b5cb9bff7c9c$export$e5722e0a8bbb32d9(func, value, props) {
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
function $afb7b5cb9bff7c9c$export$3bef836a1fb84ee6(e, vertical, reverse) {
    var increase = "increase";
    var decrease = "decrease";
    var method = increase;
    switch(e.keyCode){
        case (0, $a2Yf5$rcutilesKeyCode).UP:
            method = vertical && reverse ? decrease : increase;
            break;
        case (0, $a2Yf5$rcutilesKeyCode).RIGHT:
            method = !vertical && reverse ? decrease : increase;
            break;
        case (0, $a2Yf5$rcutilesKeyCode).DOWN:
            method = vertical && reverse ? increase : decrease;
            break;
        case (0, $a2Yf5$rcutilesKeyCode).LEFT:
            method = !vertical && reverse ? increase : decrease;
            break;
        case (0, $a2Yf5$rcutilesKeyCode).END:
            return function(value, props) {
                return props.max;
            };
        case (0, $a2Yf5$rcutilesKeyCode).HOME:
            return function(value, props) {
                return props.min;
            };
        case (0, $a2Yf5$rcutilesKeyCode).PAGE_UP:
            return function(value, props) {
                return value + props.step * 2;
            };
        case (0, $a2Yf5$rcutilesKeyCode).PAGE_DOWN:
            return function(value, props) {
                return value - props.step * 2;
            };
        default:
            return undefined;
    }
    return function(value, props) {
        return $afb7b5cb9bff7c9c$export$e5722e0a8bbb32d9(method, value, props);
    };
}


/* eslint-disable @typescript-eslint/no-explicit-any */ function $98355d89af53d794$var$noop() {}
function $98355d89af53d794$export$2e2bcd8739ae039(Component) {
    var _a; // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return _a = /*#__PURE__*/ function(_Component) {
        (0, $a2Yf5$babelruntimehelpersesminherits)(ComponentEnhancer, _Component);
        var _super = (0, $a2Yf5$babelruntimehelpersesmcreateSuper)(ComponentEnhancer);
        function ComponentEnhancer(props) {
            var _this;
            (0, $a2Yf5$babelruntimehelpersesmclassCallCheck)(this, ComponentEnhancer);
            _this = _super.call(this, props);
            _this.onDown = function(e, position) {
                var p = position;
                var _this$props = _this.props, draggableTrack = _this$props.draggableTrack, isVertical = _this$props.vertical;
                var bounds = _this.state.bounds;
                var value = draggableTrack && _this.positionGetValue ? _this.positionGetValue(p) || [] : [];
                var inPoint = $afb7b5cb9bff7c9c$export$597415897f3287c9(e, _this.handlesRefs);
                _this.dragTrack = draggableTrack && bounds.length >= 2 && !inPoint && !value.map(function(n, i) {
                    var v = !i ? n >= bounds[i] : true;
                    return i === value.length - 1 ? n <= bounds[i] : v;
                }).some(function(c) {
                    return !c;
                });
                if (_this.dragTrack) {
                    _this.dragOffset = p;
                    _this.startBounds = (0, $a2Yf5$babelruntimehelpersesmtoConsumableArray)(bounds);
                } else {
                    if (!inPoint) _this.dragOffset = 0;
                    else {
                        var handlePosition = $afb7b5cb9bff7c9c$export$ec6357f54996b379(isVertical, e.target);
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
                var position = $afb7b5cb9bff7c9c$export$642213d516a9b928(isVertical, e);
                _this.onDown(e, position);
                _this.addDocumentMouseEvents();
            };
            _this.onTouchStart = function(e) {
                if ($afb7b5cb9bff7c9c$export$eaf0efc71c45a02(e)) return;
                var isVertical = _this.props.vertical;
                var position = $afb7b5cb9bff7c9c$export$7e1d3da113d10e8e(isVertical, e);
                _this.onDown(e, position);
                _this.addDocumentTouchEvents();
                $afb7b5cb9bff7c9c$export$3f9ffdaf2961f43f(e);
            };
            _this.onFocus = function(e) {
                var _this$props2 = _this.props, onFocus = _this$props2.onFocus, vertical = _this$props2.vertical;
                if ($afb7b5cb9bff7c9c$export$597415897f3287c9(e, _this.handlesRefs) && !_this.dragTrack) {
                    var handlePosition = $afb7b5cb9bff7c9c$export$ec6357f54996b379(vertical, e.target);
                    _this.dragOffset = 0;
                    _this.onStart(handlePosition);
                    $afb7b5cb9bff7c9c$export$3f9ffdaf2961f43f(e);
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
                var position = $afb7b5cb9bff7c9c$export$642213d516a9b928(_this.props.vertical, e);
                _this.onMove(e, position - _this.dragOffset, _this.dragTrack, _this.startBounds);
            };
            _this.onTouchMove = function(e) {
                if ($afb7b5cb9bff7c9c$export$eaf0efc71c45a02(e) || !_this.sliderRef) {
                    _this.onEnd();
                    return;
                }
                var position = $afb7b5cb9bff7c9c$export$7e1d3da113d10e8e(_this.props.vertical, e);
                _this.onMove(e, position - _this.dragOffset, _this.dragTrack, _this.startBounds);
            };
            _this.onKeyDown = function(e) {
                if (_this.sliderRef && $afb7b5cb9bff7c9c$export$597415897f3287c9(e, _this.handlesRefs)) _this.onKeyboard(e);
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
            (0, $a2Yf5$rcutileswarning)(step && Math.floor(step) === step ? isPointDiffEven : true, "Slider[max] - Slider[min] (".concat(max - min, ") should be a multiple of Slider[step] (").concat(step, ")"));
            _this.handlesRefs = {};
            return _this;
        }
        (0, $a2Yf5$babelruntimehelpersesmcreateClass)(ComponentEnhancer, [
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
                    if ((0, $a2Yf5$babelruntimehelpersesmget)((0, $a2Yf5$babelruntimehelpersesmgetPrototypeOf)(ComponentEnhancer.prototype), "componentWillUnmount", this)) (0, $a2Yf5$babelruntimehelpersesmget)((0, $a2Yf5$babelruntimehelpersesmgetPrototypeOf)(ComponentEnhancer.prototype), "componentWillUnmount", this).call(this);
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
                    this.onTouchMoveListener = (0, $a2Yf5$rcutilesDomaddEventListener)(this.document, "touchmove", this.onTouchMove);
                    this.onTouchUpListener = (0, $a2Yf5$rcutilesDomaddEventListener)(this.document, "touchend", this.onEnd);
                }
            },
            {
                key: "addDocumentMouseEvents",
                value: function addDocumentMouseEvents() {
                    this.onMouseMoveListener = (0, $a2Yf5$rcutilesDomaddEventListener)(this.document, "mousemove", this.onMouseMove);
                    this.onMouseUpListener = (0, $a2Yf5$rcutilesDomaddEventListener)(this.document, "mouseup", this.onEnd);
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
                    var _get$call = (0, $a2Yf5$babelruntimehelpersesmget)((0, $a2Yf5$babelruntimehelpersesmgetPrototypeOf)(ComponentEnhancer.prototype), "render", this).call(this), tracks = _get$call.tracks, handles = _get$call.handles;
                    var sliderClassName = (0, $a2Yf5$classnames)(prefixCls, (_classNames = {}, (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_classNames, "".concat(prefixCls, "-with-marks"), Object.keys(marks).length), (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_classNames, "".concat(prefixCls, "-vertical"), vertical), (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_classNames, className, className), _classNames));
                    return /*#__PURE__*/ (0, $a2Yf5$react).createElement("div", {
                        ref: this.saveSlider,
                        className: sliderClassName,
                        onTouchStart: disabled ? $98355d89af53d794$var$noop : this.onTouchStart,
                        onMouseDown: disabled ? $98355d89af53d794$var$noop : this.onMouseDown,
                        onMouseUp: disabled ? $98355d89af53d794$var$noop : this.onMouseUp,
                        onKeyDown: disabled ? $98355d89af53d794$var$noop : this.onKeyDown,
                        onFocus: disabled ? $98355d89af53d794$var$noop : this.onFocus,
                        onBlur: disabled ? $98355d89af53d794$var$noop : this.onBlur,
                        style: style
                    }, /*#__PURE__*/ (0, $a2Yf5$react).createElement("div", {
                        className: "".concat(prefixCls, "-rail"),
                        style: (0, $a2Yf5$babelruntimehelpersesmobjectSpread2)((0, $a2Yf5$babelruntimehelpersesmobjectSpread2)({}, maximumTrackStyle), railStyle)
                    }), tracks, /*#__PURE__*/ (0, $a2Yf5$react).createElement((0, $8c13983e77ba506c$export$2e2bcd8739ae039), {
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
                    }), handles, /*#__PURE__*/ (0, $a2Yf5$react).createElement((0, $434855d4eadbe8c2$export$2e2bcd8739ae039), {
                        className: "".concat(prefixCls, "-mark"),
                        onClickLabel: disabled ? $98355d89af53d794$var$noop : this.onClickMarkLabel,
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
    }(Component), _a.displayName = "ComponentEnhancer(".concat(Component.displayName, ")"), _a.defaultProps = (0, $a2Yf5$babelruntimehelpersesmobjectSpread2)((0, $a2Yf5$babelruntimehelpersesmobjectSpread2)({}, Component.defaultProps), {}, {
        prefixCls: "rc-slider",
        className: "",
        min: 0,
        max: 100,
        step: 1,
        marks: {},
        handle: function handle(props) {
            var index = props.index, restProps = (0, $a2Yf5$babelruntimehelpersesmobjectWithoutProperties)(props, [
                "index"
            ]);
            delete restProps.dragging;
            if (restProps.value === null) return null;
            return /*#__PURE__*/ (0, $a2Yf5$react).createElement((0, $02d8f4533571f053$export$2e2bcd8739ae039), (0, $a2Yf5$babelruntimehelpersesmextends)({}, restProps, {
                key: index
            }));
        },
        onBeforeChange: $98355d89af53d794$var$noop,
        onChange: $98355d89af53d794$var$noop,
        onAfterChange: $98355d89af53d794$var$noop,
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



var $3dc8da5f55b48257$var$Slider = /*#__PURE__*/ function(_React$Component) {
    (0, $a2Yf5$babelruntimehelpersesminherits)(Slider, _React$Component);
    var _super = (0, $a2Yf5$babelruntimehelpersesmcreateSuper)(Slider);
    /* eslint-enable */ function Slider(props) {
        var _this;
        (0, $a2Yf5$babelruntimehelpersesmclassCallCheck)(this, Slider);
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
        (0, $a2Yf5$rcutileswarning)(!("minimumTrackStyle" in props), "minimumTrackStyle will be deprecated, please use trackStyle instead.");
        (0, $a2Yf5$rcutileswarning)(!("maximumTrackStyle" in props), "maximumTrackStyle will be deprecated, please use railStyle instead.");
        return _this;
    }
    /**
   * [Legacy] Used for inherit other component.
   * It's a bad code style which should be refactor.
   */ /* eslint-disable @typescript-eslint/no-unused-vars, class-methods-use-this */ (0, $a2Yf5$babelruntimehelpersesmcreateClass)(Slider, [
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
                if (!(min === prevProps.min && max === prevProps.max) && $afb7b5cb9bff7c9c$export$f4657b4dc4cc2ea4(theValue, this.props)) onChange(nextValue);
            }
        },
        {
            key: "onChange",
            value: function onChange(state) {
                var props = this.props;
                var isNotControlled = !("value" in props);
                var nextState = state.value > this.props.max ? (0, $a2Yf5$babelruntimehelpersesmobjectSpread2)((0, $a2Yf5$babelruntimehelpersesmobjectSpread2)({}, state), {}, {
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
                $afb7b5cb9bff7c9c$export$3f9ffdaf2961f43f(e);
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
                var valueMutator = $afb7b5cb9bff7c9c$export$3bef836a1fb84ee6(e, vertical, reverse);
                if (valueMutator) {
                    $afb7b5cb9bff7c9c$export$3f9ffdaf2961f43f(e);
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
                var mergedProps = (0, $a2Yf5$babelruntimehelpersesmobjectSpread2)((0, $a2Yf5$babelruntimehelpersesmobjectSpread2)({}, this.props), nextProps);
                var val = $afb7b5cb9bff7c9c$export$65e4339c6f9d8d24(v, mergedProps);
                return $afb7b5cb9bff7c9c$export$5bea24a9dfe5ab1a(val, mergedProps);
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
                var track = /*#__PURE__*/ (0, $a2Yf5$react).createElement((0, $756f770978e0c648$export$2e2bcd8739ae039), {
                    className: "".concat(prefixCls, "-track"),
                    vertical: vertical,
                    included: included,
                    offset: trackOffset,
                    reverse: reverse,
                    length: offset - trackOffset,
                    style: (0, $a2Yf5$babelruntimehelpersesmobjectSpread2)((0, $a2Yf5$babelruntimehelpersesmobjectSpread2)({}, minimumTrackStyle), mergedTrackStyle)
                });
                return {
                    tracks: track,
                    handles: handle
                };
            }
        }
    ]);
    return Slider;
}((0, $a2Yf5$react).Component);
var $3dc8da5f55b48257$export$2e2bcd8739ae039 = (0, $98355d89af53d794$export$2e2bcd8739ae039)($3dc8da5f55b48257$var$Slider);














var $1192a2f648c1dd60$var$_trimAlignValue = function trimAlignValue(_ref) {
    var value = _ref.value, handle = _ref.handle, bounds = _ref.bounds, props = _ref.props;
    var allowCross = props.allowCross, pushable = props.pushable;
    var thershold = Number(pushable);
    var valInRange = $afb7b5cb9bff7c9c$export$65e4339c6f9d8d24(value, props);
    var valNotConflict = valInRange;
    if (!allowCross && handle != null && bounds !== undefined) {
        if (handle > 0 && valInRange <= bounds[handle - 1] + thershold) valNotConflict = bounds[handle - 1] + thershold;
        if (handle < bounds.length - 1 && valInRange >= bounds[handle + 1] - thershold) valNotConflict = bounds[handle + 1] - thershold;
    }
    return $afb7b5cb9bff7c9c$export$5bea24a9dfe5ab1a(valNotConflict, props);
};
var $1192a2f648c1dd60$var$Range = /*#__PURE__*/ function(_React$Component) {
    (0, $a2Yf5$babelruntimehelpersesminherits)(Range, _React$Component);
    var _super = (0, $a2Yf5$babelruntimehelpersesmcreateSuper)(Range);
    function Range(props) {
        var _this;
        (0, $a2Yf5$babelruntimehelpersesmclassCallCheck)(this, Range);
        _this = _super.call(this, props);
        _this.positionGetValue = function(position) {
            var bounds = _this.getValue();
            var value = _this.calcValueByPos(position);
            var closestBound = _this.getClosestBound(value);
            var index = _this.getBoundNeedMoving(value, closestBound);
            var prevValue = bounds[index];
            if (value === prevValue) return null;
            var nextBounds = (0, $a2Yf5$babelruntimehelpersesmtoConsumableArray)(bounds);
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
        var initialValue = Array.apply(void 0, (0, $a2Yf5$babelruntimehelpersesmtoConsumableArray)(Array(count + 1))).map(function() {
            return min;
        });
        var defaultValue = "defaultValue" in props ? props.defaultValue : initialValue;
        var value = props.value !== undefined ? props.value : defaultValue;
        var bounds = value.map(function(v, i) {
            return $1192a2f648c1dd60$var$_trimAlignValue({
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
   */ /* eslint-disable @typescript-eslint/no-unused-vars, class-methods-use-this */ (0, $a2Yf5$babelruntimehelpersesmcreateClass)(Range, [
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
                    return $afb7b5cb9bff7c9c$export$f4657b4dc4cc2ea4(v, _this2.props);
                })) {
                    var newValues = currentValue.map(function(v) {
                        return $afb7b5cb9bff7c9c$export$65e4339c6f9d8d24(v, _this2.props);
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
                var data = (0, $a2Yf5$babelruntimehelpersesmobjectSpread2)((0, $a2Yf5$babelruntimehelpersesmobjectSpread2)({}, this.state), state);
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
                var nextBounds = (0, $a2Yf5$babelruntimehelpersesmtoConsumableArray)(state.bounds);
                nextBounds[this.prevMovedHandleIndex] = value;
                this.onChange({
                    bounds: nextBounds
                });
            }
        },
        {
            key: "onMove",
            value: function onMove(e, position, dragTrack, startBounds) {
                $afb7b5cb9bff7c9c$export$3f9ffdaf2961f43f(e);
                var state = this.state, props = this.props;
                var maxValue = props.max || 100;
                var minValue = props.min || 0;
                if (dragTrack) {
                    var pos = props.vertical ? -position : position;
                    pos = props.reverse ? -pos : pos;
                    var max = maxValue - Math.max.apply(Math, (0, $a2Yf5$babelruntimehelpersesmtoConsumableArray)(startBounds));
                    var min = minValue - Math.min.apply(Math, (0, $a2Yf5$babelruntimehelpersesmtoConsumableArray)(startBounds));
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
                var valueMutator = $afb7b5cb9bff7c9c$export$3bef836a1fb84ee6(e, vertical, reverse);
                if (valueMutator) {
                    $afb7b5cb9bff7c9c$export$3f9ffdaf2961f43f(e);
                    var state = this.state, props = this.props;
                    var bounds = state.bounds, handle = state.handle;
                    var oldValue = bounds[handle === null ? state.recent : handle];
                    var mutatedValue = valueMutator(oldValue, props);
                    var value = $1192a2f648c1dd60$var$_trimAlignValue({
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
                    var pointsObject = (0, $a2Yf5$babelruntimehelpersesmobjectSpread2)({}, marks);
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
                var nextBounds = (0, $a2Yf5$babelruntimehelpersesmtoConsumableArray)(state.bounds);
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
                return $1192a2f648c1dd60$var$_trimAlignValue({
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
                        className: (0, $a2Yf5$classnames)((_classNames = {}, (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_classNames, handleClassName, true), (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_classNames, "".concat(handleClassName, "-").concat(i + 1), true), (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_classNames, "".concat(handleClassName, "-dragging"), dragging), _classNames)),
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
                    var trackClassName = (0, $a2Yf5$classnames)((_classNames2 = {}, (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_classNames2, "".concat(prefixCls, "-track"), true), (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_classNames2, "".concat(prefixCls, "-track-").concat(i), true), _classNames2));
                    return /*#__PURE__*/ (0, $a2Yf5$react).createElement((0, $756f770978e0c648$export$2e2bcd8739ae039), {
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
                    return $1192a2f648c1dd60$var$_trimAlignValue({
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
                    return $1192a2f648c1dd60$var$_trimAlignValue({
                        value: v,
                        handle: i,
                        props: props
                    });
                });
                return (0, $a2Yf5$babelruntimehelpersesmobjectSpread2)((0, $a2Yf5$babelruntimehelpersesmobjectSpread2)({}, state), {}, {
                    bounds: nextBounds
                });
            }
        }
    ]);
    return Range;
}((0, $a2Yf5$react).Component);
/* eslint-enable */ $1192a2f648c1dd60$var$Range.displayName = "Range";
$1192a2f648c1dd60$var$Range.defaultProps = {
    count: 1,
    allowCross: true,
    pushable: false,
    draggableTrack: false,
    tabIndex: [],
    ariaLabelGroupForHandles: [],
    ariaLabelledByGroupForHandles: [],
    ariaValueTextFormatterGroupForHandles: []
};
var $1192a2f648c1dd60$export$2e2bcd8739ae039 = (0, $98355d89af53d794$export$2e2bcd8739ae039)($1192a2f648c1dd60$var$Range);

















var $2e7919118d2d1727$var$SliderTooltip = /*#__PURE__*/ $a2Yf5$forwardRef(function(props, ref) {
    var visible = props.visible, overlay = props.overlay;
    var innerRef = $a2Yf5$useRef(null);
    var tooltipRef = (0, $a2Yf5$composeRef)(ref, innerRef);
    var rafRef = $a2Yf5$useRef(null);
    function cancelKeepAlign() {
        (0, $a2Yf5$rcutilesraf).cancel(rafRef.current);
    }
    function keepAlign() {
        rafRef.current = (0, $a2Yf5$rcutilesraf)(function() {
            var _innerRef$current;
            (_innerRef$current = innerRef.current) === null || _innerRef$current === void 0 || _innerRef$current.forcePopupAlign();
        });
    }
    $a2Yf5$useEffect(function() {
        if (visible) keepAlign();
        else cancelKeepAlign();
        return cancelKeepAlign;
    }, [
        visible,
        overlay
    ]);
    return /*#__PURE__*/ $a2Yf5$createElement((0, $a2Yf5$rctooltip), (0, $a2Yf5$babelruntimehelpersesmextends)({
        ref: tooltipRef
    }, props));
});
var $2e7919118d2d1727$export$2e2bcd8739ae039 = $2e7919118d2d1727$var$SliderTooltip;



function $b09e6d777197c9da$export$2e2bcd8739ae039(Component) {
    var _a; // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return _a = /*#__PURE__*/ function(_React$Component) {
        (0, $a2Yf5$babelruntimehelpersesminherits)(ComponentWrapper, _React$Component);
        var _super = (0, $a2Yf5$babelruntimehelpersesmcreateSuper)(ComponentWrapper);
        function ComponentWrapper() {
            var _this;
            (0, $a2Yf5$babelruntimehelpersesmclassCallCheck)(this, ComponentWrapper);
            _this = _super.apply(this, arguments);
            _this.state = {
                visibles: {}
            };
            _this.handleTooltipVisibleChange = function(index, visible) {
                _this.setState(function(prevState) {
                    return {
                        visibles: (0, $a2Yf5$babelruntimehelpersesmobjectSpread2)((0, $a2Yf5$babelruntimehelpersesmobjectSpread2)({}, prevState.visibles), {}, (0, $a2Yf5$babelruntimehelpersesmdefineProperty)({}, index, visible))
                    };
                });
            };
            _this.handleWithTooltip = function(_ref) {
                var value = _ref.value, dragging = _ref.dragging, index = _ref.index, disabled = _ref.disabled, restProps = (0, $a2Yf5$babelruntimehelpersesmobjectWithoutProperties)(_ref, [
                    "value",
                    "dragging",
                    "index",
                    "disabled"
                ]);
                var _this$props = _this.props, tipFormatter = _this$props.tipFormatter, tipProps = _this$props.tipProps, handleStyle = _this$props.handleStyle, getTooltipContainer = _this$props.getTooltipContainer;
                var _tipProps$prefixCls = tipProps.prefixCls, prefixCls = _tipProps$prefixCls === void 0 ? "rc-slider-tooltip" : _tipProps$prefixCls, _tipProps$overlay = tipProps.overlay, overlay = _tipProps$overlay === void 0 ? tipFormatter(value) : _tipProps$overlay, _tipProps$placement = tipProps.placement, placement = _tipProps$placement === void 0 ? "top" : _tipProps$placement, _tipProps$visible = tipProps.visible, visible = _tipProps$visible === void 0 ? false : _tipProps$visible, restTooltipProps = (0, $a2Yf5$babelruntimehelpersesmobjectWithoutProperties)(tipProps, [
                    "prefixCls",
                    "overlay",
                    "placement",
                    "visible"
                ]);
                var handleStyleWithIndex;
                if (Array.isArray(handleStyle)) handleStyleWithIndex = handleStyle[index] || handleStyle[0];
                else handleStyleWithIndex = handleStyle;
                return /*#__PURE__*/ (0, $a2Yf5$react).createElement((0, $2e7919118d2d1727$export$2e2bcd8739ae039), (0, $a2Yf5$babelruntimehelpersesmextends)({}, restTooltipProps, {
                    getTooltipContainer: getTooltipContainer,
                    prefixCls: prefixCls,
                    overlay: overlay,
                    placement: placement,
                    visible: !disabled && (_this.state.visibles[index] || dragging) || visible,
                    key: index
                }), /*#__PURE__*/ (0, $a2Yf5$react).createElement((0, $02d8f4533571f053$export$2e2bcd8739ae039), (0, $a2Yf5$babelruntimehelpersesmextends)({}, restProps, {
                    style: (0, $a2Yf5$babelruntimehelpersesmobjectSpread2)({}, handleStyleWithIndex),
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
        (0, $a2Yf5$babelruntimehelpersesmcreateClass)(ComponentWrapper, [
            {
                key: "render",
                value: function render() {
                    return /*#__PURE__*/ (0, $a2Yf5$react).createElement(Component, (0, $a2Yf5$babelruntimehelpersesmextends)({}, this.props, {
                        handle: this.handleWithTooltip
                    }));
                }
            }
        ]);
        return ComponentWrapper;
    }((0, $a2Yf5$react).Component), _a.defaultProps = {
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



var $d020fc884ac3e39d$var$InternalSlider = (0, $3dc8da5f55b48257$export$2e2bcd8739ae039);
$d020fc884ac3e39d$var$InternalSlider.Range = (0, $1192a2f648c1dd60$export$2e2bcd8739ae039);
$d020fc884ac3e39d$var$InternalSlider.Handle = (0, $02d8f4533571f053$export$2e2bcd8739ae039);
$d020fc884ac3e39d$var$InternalSlider.createSliderWithTooltip = (0, $b09e6d777197c9da$export$2e2bcd8739ae039);
var $d020fc884ac3e39d$export$2e2bcd8739ae039 = $d020fc884ac3e39d$var$InternalSlider;


var $1101abde3daa7520$exports = {};
var $1101abde3daa7520$var$containers = []; // will store container HTMLElement references
var $1101abde3daa7520$var$styleElements = []; // will store {prepend: HTMLElement, append: HTMLElement}
var $1101abde3daa7520$var$usage = "insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";
function $1101abde3daa7520$var$insertCss(css, options) {
    options = options || {};
    if (css === undefined) throw new Error($1101abde3daa7520$var$usage);
    var position = options.prepend === true ? "prepend" : "append";
    var container = options.container !== undefined ? options.container : document.querySelector("head");
    var containerId = $1101abde3daa7520$var$containers.indexOf(container);
    // first time we see this container, create the necessary entries
    if (containerId === -1) {
        containerId = $1101abde3daa7520$var$containers.push(container) - 1;
        $1101abde3daa7520$var$styleElements[containerId] = {};
    }
    // try to get the correponding container + position styleElement, create it otherwise
    var styleElement;
    if ($1101abde3daa7520$var$styleElements[containerId] !== undefined && $1101abde3daa7520$var$styleElements[containerId][position] !== undefined) styleElement = $1101abde3daa7520$var$styleElements[containerId][position];
    else {
        styleElement = $1101abde3daa7520$var$styleElements[containerId][position] = $1101abde3daa7520$var$createStyleElement();
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
function $1101abde3daa7520$var$createStyleElement() {
    var styleElement = document.createElement("style");
    styleElement.setAttribute("type", "text/css");
    return styleElement;
}
$1101abde3daa7520$exports = $1101abde3daa7520$var$insertCss;
$1101abde3daa7520$exports.insertCss = $1101abde3daa7520$var$insertCss;



const $4b1751272239350a$var$noop = ()=>{};
const $4b1751272239350a$var$audio = (0, $3276797958263460$exports.canUseDOM) ? new Audio() : null;
let $4b1751272239350a$var$tracks;
let $4b1751272239350a$var$currentTrackIndex = 0;
let $4b1751272239350a$var$timer;
let $4b1751272239350a$var$listeners = {};
let $4b1751272239350a$var$lastListenerId = 0;
const $4b1751272239350a$export$367277103c25ce5d = {
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
const $4b1751272239350a$export$f7351e61402bc842 = "--:--";
function $4b1751272239350a$var$isPlaying() {
    return $4b1751272239350a$var$audio.duration > 0 && !$4b1751272239350a$var$audio.paused;
}
function $4b1751272239350a$var$isStopped() {
    return !$4b1751272239350a$var$audio.currentTime;
}
function $4b1751272239350a$var$zeroPadNumber(number) {
    return number < 10 ? "0" + number : number;
}
function $4b1751272239350a$export$3203edd9e5edd663(seconds) {
    if (typeof seconds === "number" && seconds >= 0) {
        const m = Math.floor(seconds / 60);
        const s = Math.round(seconds) % 60;
        return $4b1751272239350a$var$zeroPadNumber(m) + ":" + $4b1751272239350a$var$zeroPadNumber(s);
    } else return $4b1751272239350a$export$f7351e61402bc842;
}
function $4b1751272239350a$var$updateListeners(type) {
    Object.values($4b1751272239350a$var$listeners).forEach((listener)=>listener({
            type: type,
            tracks: $4b1751272239350a$var$tracks,
            isPlaying: $4b1751272239350a$var$isPlaying(),
            secondsElapsed: $4b1751272239350a$var$audio.currentTime,
            secondsRemaining: $4b1751272239350a$var$audio.duration - $4b1751272239350a$var$audio.currentTime,
            timeElapsed: $4b1751272239350a$var$isStopped() ? $4b1751272239350a$export$f7351e61402bc842 : $4b1751272239350a$export$3203edd9e5edd663($4b1751272239350a$var$audio.currentTime),
            timeRemaining: $4b1751272239350a$export$3203edd9e5edd663($4b1751272239350a$var$audio.duration - $4b1751272239350a$var$audio.currentTime),
            currentTrack: {
                ...$4b1751272239350a$var$tracks[$4b1751272239350a$var$currentTrackIndex],
                durationSeconds: $4b1751272239350a$var$audio.duration,
                durationString: $4b1751272239350a$export$3203edd9e5edd663($4b1751272239350a$var$audio.duration)
            }
        }));
}
function $4b1751272239350a$var$switchTrack() {
    const wasStopped = $4b1751272239350a$var$isStopped();
    $4b1751272239350a$var$audio.src = $4b1751272239350a$var$tracks[$4b1751272239350a$var$currentTrackIndex].file;
    if (!wasStopped) $4b1751272239350a$export$899fbdb5fa08b653();
    $4b1751272239350a$var$updateListeners($4b1751272239350a$export$367277103c25ce5d.TRACK_SWITCH);
}
function $4b1751272239350a$var$stopTimer() {
    if ($4b1751272239350a$var$timer) {
        clearInterval($4b1751272239350a$var$timer);
        $4b1751272239350a$var$timer = null;
    }
}
const $4b1751272239350a$export$5106570dc4737ef5 = (0, $3276797958263460$exports.canUseDOM) ? (newTracks)=>{
    if ($4b1751272239350a$var$tracks === undefined || $4b1751272239350a$var$tracks.length === 0) $4b1751272239350a$var$audio.src = newTracks[0].file;
    $4b1751272239350a$var$tracks = newTracks.map((t, i)=>({
            ...t,
            number: i + 1
        }));
    $4b1751272239350a$var$updateListeners($4b1751272239350a$export$367277103c25ce5d.TRACKS_ADDED);
} : $4b1751272239350a$var$noop;
const $4b1751272239350a$export$899fbdb5fa08b653 = (0, $3276797958263460$exports.canUseDOM) ? ()=>{
    if ($4b1751272239350a$var$isPlaying()) {
        $4b1751272239350a$var$audio.pause();
        $4b1751272239350a$var$stopTimer();
        $4b1751272239350a$var$updateListeners($4b1751272239350a$export$367277103c25ce5d.PAUSE);
    } else {
        $4b1751272239350a$var$audio.play();
        $4b1751272239350a$var$updateListeners($4b1751272239350a$export$367277103c25ce5d.PLAY);
        $4b1751272239350a$var$timer = setInterval(()=>$4b1751272239350a$var$updateListeners($4b1751272239350a$export$367277103c25ce5d.TICK), 1000);
    }
} : $4b1751272239350a$var$noop;
const $4b1751272239350a$export$fa6813432f753b0d = (0, $3276797958263460$exports.canUseDOM) ? ()=>{
    $4b1751272239350a$var$audio.pause();
    $4b1751272239350a$var$audio.currentTime = 0;
    $4b1751272239350a$var$stopTimer();
    $4b1751272239350a$var$updateListeners($4b1751272239350a$export$367277103c25ce5d.STOP);
} : $4b1751272239350a$var$noop;
const $4b1751272239350a$export$990806b8ad8af834 = (0, $3276797958263460$exports.canUseDOM) ? (seconds)=>{
    $4b1751272239350a$var$audio.currentTime = seconds;
    $4b1751272239350a$var$updateListeners($4b1751272239350a$export$367277103c25ce5d.SEEK);
} : $4b1751272239350a$var$noop;
const $4b1751272239350a$export$48cfd1e771a65c4f = (0, $3276797958263460$exports.canUseDOM) ? ()=>{
    $4b1751272239350a$var$currentTrackIndex = $4b1751272239350a$var$currentTrackIndex + 1 >= $4b1751272239350a$var$tracks.length ? 0 : $4b1751272239350a$var$currentTrackIndex + 1;
    $4b1751272239350a$var$switchTrack();
} : $4b1751272239350a$var$noop;
const $4b1751272239350a$export$232faf9add678146 = (0, $3276797958263460$exports.canUseDOM) ? ()=>{
    $4b1751272239350a$var$currentTrackIndex = $4b1751272239350a$var$currentTrackIndex - 1 < 0 ? $4b1751272239350a$var$tracks.length - 1 : $4b1751272239350a$var$currentTrackIndex - 1;
    $4b1751272239350a$var$switchTrack();
} : $4b1751272239350a$var$noop;
const $4b1751272239350a$export$e64e955830870e84 = (0, $3276797958263460$exports.canUseDOM) ? (number)=>{
    $4b1751272239350a$var$currentTrackIndex = number - 1;
    $4b1751272239350a$var$switchTrack();
} : $4b1751272239350a$var$noop;
const $4b1751272239350a$export$2735a780d8a99a8c = (0, $3276797958263460$exports.canUseDOM) ? (number)=>{
    $4b1751272239350a$export$e64e955830870e84(number);
    if (!$4b1751272239350a$var$isPlaying()) $4b1751272239350a$export$899fbdb5fa08b653();
} : $4b1751272239350a$var$noop;
const $4b1751272239350a$export$9a5e51d3b9fed543 = (0, $3276797958263460$exports.canUseDOM) ? ()=>{
    $4b1751272239350a$var$audio.autoplay = true;
} : $4b1751272239350a$var$noop;
function $4b1751272239350a$export$f03a6b845d3fb58b(callback) {
    $4b1751272239350a$var$listeners[String(++$4b1751272239350a$var$lastListenerId)] = callback;
    return $4b1751272239350a$var$lastListenerId;
}
function $4b1751272239350a$export$b03e9483f936dccb(id) {
    delete $4b1751272239350a$var$listeners[String(id)];
}
function $4b1751272239350a$export$72be9cc1d9b9a9ef() {
    return $4b1751272239350a$var$listeners;
}
if (0, $3276797958263460$exports.canUseDOM) {
    $4b1751272239350a$var$audio.addEventListener("play", ()=>$4b1751272239350a$var$updateListeners($4b1751272239350a$export$367277103c25ce5d.PLAY));
    $4b1751272239350a$var$audio.addEventListener("durationchange", ()=>$4b1751272239350a$var$updateListeners($4b1751272239350a$export$367277103c25ce5d.LOAD));
    $4b1751272239350a$var$audio.addEventListener("ended", ()=>{
        $4b1751272239350a$export$48cfd1e771a65c4f();
        $4b1751272239350a$export$899fbdb5fa08b653();
    });
}


function $71352365298099f4$export$c0b03e78d1b6fede(WrappedComponent, tracks, { autoplay: autoplay = false  } = {}) {
    class Connect extends (0, $a2Yf5$Component) {
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
            this.listenerId = (0, $4b1751272239350a$export$f03a6b845d3fb58b)((update)=>{
                const { type: type , ...state } = update;
                this.setState(state);
            });
            if (autoplay) (0, $4b1751272239350a$export$9a5e51d3b9fed543)();
            (0, $4b1751272239350a$export$5106570dc4737ef5)(tracks);
        }
        componentWillUnmount() {
            (0, $4b1751272239350a$export$b03e9483f936dccb)(this.listenerId);
        }
        render() {
            const props = {
                play: $4b1751272239350a$export$899fbdb5fa08b653,
                stop: $4b1751272239350a$export$fa6813432f753b0d,
                seek: $4b1751272239350a$export$990806b8ad8af834,
                next: $4b1751272239350a$export$48cfd1e771a65c4f,
                prev: $4b1751272239350a$export$232faf9add678146,
                goto: $4b1751272239350a$export$e64e955830870e84,
                gotoAndPlay: $4b1751272239350a$export$2735a780d8a99a8c,
                isPlaying: this.state.isPlaying,
                currentTrack: this.state.currentTrack || {},
                secondsElapsed: this.state.secondsElapsed,
                secondsRemaining: this.state.secondsRemaining,
                timeElapsed: this.state.timeElapsed,
                timeRemaining: this.state.timeRemaining
            };
            return /*#__PURE__*/ (0, $a2Yf5$createElement)(WrappedComponent, {
                ...this.props,
                ...props
            });
        }
    }
    return Connect;
}
/* TitleMarquee component */ const $71352365298099f4$var$marqueeAnimationName = "rdap_marquee";
const $71352365298099f4$var$baseStyle = {
    paddingLeft: "100%",
    display: "inline-block"
};
const $71352365298099f4$var$getMarqueeStyle = (duration)=>({
        ...$71352365298099f4$var$baseStyle,
        animation: `${$71352365298099f4$var$marqueeAnimationName} ${duration}s infinite linear`
    });
class $71352365298099f4$var$TM extends (0, $a2Yf5$Component) {
    constructor(props){
        super(props);
        this.state = {
            on: true,
            currentTrack: null
        };
        if (0, $3276797958263460$exports.canUseDOM) (0, (/*@__PURE__*/$parcel$interopDefault($1101abde3daa7520$exports)))(`
        @import url('rc-slider/assets/index.css');
        @keyframes ${$71352365298099f4$var$marqueeAnimationName} {
        0% {-webkit-transform:translate(0, 0)}
        100% {-webkit-transform:translate(-100%, 0)}
       }`);
    }
    componentDidMount() {
        this.listenerId = (0, $4b1751272239350a$export$f03a6b845d3fb58b)((update)=>this.setState({
                currentTrack: update.currentTrack,
                on: update.type !== (0, $4b1751272239350a$export$367277103c25ce5d).TRACK_SWITCH
            }));
    }
    componentWillUnmount() {
        (0, $4b1751272239350a$export$b03e9483f936dccb)(this.listenerId);
    }
    render() {
        const { className: className , textFn: textFn , duration: duration  } = this.props;
        const { currentTrack: currentTrack  } = this.state;
        const { number: number , artist: artist , title: title  } = currentTrack || {};
        return /*#__PURE__*/ (0, $a2Yf5$react).createElement("div", {
            className: className
        }, /*#__PURE__*/ (0, $a2Yf5$react).createElement("div", {
            style: {
                overflow: "hidden",
                whiteSpace: "nowrap"
            }
        }, /*#__PURE__*/ (0, $a2Yf5$react).createElement("div", {
            style: this.state.on ? $71352365298099f4$var$getMarqueeStyle(duration || 10) : $71352365298099f4$var$baseStyle
        }, currentTrack ? textFn ? textFn(currentTrack) : `${number}. ${artist} - ${title}` : "")));
    }
}
$71352365298099f4$var$TM.propTypes = {
    className: (0, $a2Yf5$proptypes).string,
    textFn: (0, $a2Yf5$proptypes).func,
    duration: (0, $a2Yf5$proptypes).number
};
const $71352365298099f4$export$b59c99f47fcbedf1 = $71352365298099f4$var$TM;
/* TimeSlider component */ class $71352365298099f4$var$DefaultSliderHandle extends (0, $a2Yf5$Component) {
    render() {
        return /*#__PURE__*/ (0, $a2Yf5$react).createElement("div", null);
    }
}
class $71352365298099f4$var$TS extends (0, $a2Yf5$Component) {
    constructor(props){
        super(props);
        this.state = {
            secondsElapsed: 0,
            secondsRemaining: 0
        };
    }
    componentDidMount() {
        this.listenerId = (0, $4b1751272239350a$export$f03a6b845d3fb58b)((update)=>{
            const { secondsElapsed: secondsElapsed , secondsRemaining: secondsRemaining  } = update;
            this.setState({
                secondsElapsed: secondsElapsed,
                secondsRemaining: secondsRemaining
            });
        });
    }
    componentWillUnmount() {
        (0, $4b1751272239350a$export$b03e9483f936dccb)(this.listenerId);
    }
    render() {
        const { className: className , ...props } = this.props;
        const { secondsElapsed: secondsElapsed , secondsRemaining: secondsRemaining  } = this.state;
        return /*#__PURE__*/ (0, $a2Yf5$react).createElement("div", {
            className: className
        }, /*#__PURE__*/ (0, $a2Yf5$react).createElement((0, $d020fc884ac3e39d$export$2e2bcd8739ae039), {
            onChange: (0, $4b1751272239350a$export$990806b8ad8af834),
            value: secondsElapsed,
            min: 0,
            max: secondsElapsed + secondsRemaining,
            handle: this.props.handle || /*#__PURE__*/ (0, $a2Yf5$react).createElement($71352365298099f4$var$DefaultSliderHandle, null),
            ...props
        }));
    }
}
$71352365298099f4$var$TS.propTypes = {
    className: (0, $a2Yf5$proptypes).string
};
const $71352365298099f4$export$e296a477a1bc715a = $71352365298099f4$var$TS;
/* Playlist component */ class $71352365298099f4$var$PL extends (0, $a2Yf5$Component) {
    constructor(props){
        super(props);
        this.state = {
            tracks: [],
            currentTrack: null
        };
    }
    componentDidMount() {
        this.listenerId = (0, $4b1751272239350a$export$f03a6b845d3fb58b)((update)=>{
            const { tracks: tracks , currentTrack: currentTrack  } = update;
            this.setState({
                tracks: tracks,
                currentTrack: currentTrack
            });
        });
    }
    componentWillUnmount() {
        (0, $4b1751272239350a$export$b03e9483f936dccb)(this.listenerId);
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
        return /*#__PURE__*/ (0, $a2Yf5$react).createElement("div", {
            className: className
        }, tracks.map((track, i)=>/*#__PURE__*/ (0, $a2Yf5$react).createElement("div", {
                key: i,
                className: number === i + 1 ? itemClassName + " " + currentItemClassName : itemClassName,
                style: itemStyle,
                onClick: ()=>number === i + 1 ? (0, $4b1751272239350a$export$2735a780d8a99a8c)(i + 1) : (0, $4b1751272239350a$export$e64e955830870e84)(i + 1)
            }, itemComponent ? itemComponent(track) : `${i + 1}. ${track.artist} - ${track.title}`)));
    }
}
$71352365298099f4$var$PL.propTypes = {
    className: (0, $a2Yf5$proptypes).string,
    itemClassName: (0, $a2Yf5$proptypes).string,
    currentItemClassName: (0, $a2Yf5$proptypes).string,
    itemComponent: (0, $a2Yf5$proptypes).func
};
const $71352365298099f4$export$a10c242a3195e585 = $71352365298099f4$var$PL;




export {$71352365298099f4$export$c0b03e78d1b6fede as connectAudioPlayer, $71352365298099f4$export$b59c99f47fcbedf1 as TitleMarquee, $71352365298099f4$export$e296a477a1bc715a as TimeSlider, $71352365298099f4$export$a10c242a3195e585 as Playlist};
//# sourceMappingURL=main.mjs.map
