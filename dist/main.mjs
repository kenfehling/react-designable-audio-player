import $a2Yf5$react, {createElement as $a2Yf5$createElement, Component as $a2Yf5$Component, forwardRef as $a2Yf5$forwardRef, useRef as $a2Yf5$useRef, useMemo as $a2Yf5$useMemo, isValidElement as $a2Yf5$isValidElement, useState as $a2Yf5$useState, useEffect as $a2Yf5$useEffect, useImperativeHandle as $a2Yf5$useImperativeHandle, Fragment as $a2Yf5$Fragment, useContext as $a2Yf5$useContext, createContext as $a2Yf5$createContext, useCallback as $a2Yf5$useCallback} from "react";
import $a2Yf5$proptypes from "prop-types";
import $a2Yf5$babelruntimehelpersesmdefineProperty from "@babel/runtime/helpers/esm/defineProperty";
import $a2Yf5$babelruntimehelpersesmtoConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import $a2Yf5$babelruntimehelpersesmslicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import $a2Yf5$babelruntimehelpersesmtypeof from "@babel/runtime/helpers/esm/typeof";
import $a2Yf5$classnames from "classnames";
import $a2Yf5$shallowequal from "shallowequal";
import $a2Yf5$rcutileshooksuseMergedState from "rc-util/es/hooks/useMergedState";
import "rc-util/es/warning";
import $a2Yf5$babelruntimehelpersesmextends from "@babel/runtime/helpers/esm/extends";
import $a2Yf5$babelruntimehelpersesmobjectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import $a2Yf5$babelruntimehelpersesmobjectSpread2 from "@babel/runtime/helpers/esm/objectSpread2";
import $a2Yf5$rcutilesKeyCode from "rc-util/es/KeyCode";

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





















var $082fec70572b288f$var$SliderContext = /*#__PURE__*/ $a2Yf5$createContext({
    min: 0,
    max: 0,
    direction: "ltr",
    step: 1,
    includedStart: 0,
    includedEnd: 0,
    tabIndex: 0
});
var $082fec70572b288f$export$2e2bcd8739ae039 = $082fec70572b288f$var$SliderContext;


function $35fda12cd89451f5$export$622cea445a1c5b7d(value, min, max) {
    return (value - min) / (max - min);
}
function $35fda12cd89451f5$export$a41628415415e6e(direction, value, min, max) {
    var offset = $35fda12cd89451f5$export$622cea445a1c5b7d(value, min, max);
    var positionStyle = {};
    switch(direction){
        case "rtl":
            positionStyle.right = "".concat(offset * 100, "%");
            positionStyle.transform = "translateX(50%)";
            break;
        case "btt":
            positionStyle.bottom = "".concat(offset * 100, "%");
            positionStyle.transform = "translateY(50%)";
            break;
        case "ttb":
            positionStyle.top = "".concat(offset * 100, "%");
            positionStyle.transform = "translateY(-50%)";
            break;
        default:
            positionStyle.left = "".concat(offset * 100, "%");
            positionStyle.transform = "translateX(-50%)";
            break;
    }
    return positionStyle;
}
function $35fda12cd89451f5$export$ddfa24987dade61b(value, index) {
    return Array.isArray(value) ? value[index] : value;
}


var $d9b6b450487eb8c4$var$_excluded = [
    "prefixCls",
    "value",
    "valueIndex",
    "onStartMove",
    "style",
    "render",
    "dragging",
    "onOffsetChange"
];
var $d9b6b450487eb8c4$var$Handle = /*#__PURE__*/ $a2Yf5$forwardRef(function(props, ref) {
    var _classNames, _getIndex;
    var prefixCls = props.prefixCls, value = props.value, valueIndex = props.valueIndex, onStartMove = props.onStartMove, style = props.style, render = props.render, dragging = props.dragging, onOffsetChange = props.onOffsetChange, restProps = (0, $a2Yf5$babelruntimehelpersesmobjectWithoutProperties)(props, $d9b6b450487eb8c4$var$_excluded);
    var _React$useContext = $a2Yf5$useContext((0, $082fec70572b288f$export$2e2bcd8739ae039)), min = _React$useContext.min, max = _React$useContext.max, direction = _React$useContext.direction, disabled = _React$useContext.disabled, range = _React$useContext.range, tabIndex = _React$useContext.tabIndex, ariaLabelForHandle = _React$useContext.ariaLabelForHandle, ariaLabelledByForHandle = _React$useContext.ariaLabelledByForHandle, ariaValueTextFormatterForHandle = _React$useContext.ariaValueTextFormatterForHandle;
    var handlePrefixCls = "".concat(prefixCls, "-handle"); // ============================ Events ============================
    var onInternalStartMove = function onInternalStartMove(e) {
        if (!disabled) onStartMove(e, valueIndex);
    }; // =========================== Keyboard ===========================
    var onKeyDown = function onKeyDown(e) {
        if (!disabled) {
            var offset = null; // Change the value
            switch(e.which || e.keyCode){
                case (0, $a2Yf5$rcutilesKeyCode).LEFT:
                    offset = direction === "ltr" || direction === "btt" ? -1 : 1;
                    break;
                case (0, $a2Yf5$rcutilesKeyCode).RIGHT:
                    offset = direction === "ltr" || direction === "btt" ? 1 : -1;
                    break;
                // Up is plus
                case (0, $a2Yf5$rcutilesKeyCode).UP:
                    offset = direction !== "ttb" ? 1 : -1;
                    break;
                // Down is minus
                case (0, $a2Yf5$rcutilesKeyCode).DOWN:
                    offset = direction !== "ttb" ? -1 : 1;
                    break;
                case (0, $a2Yf5$rcutilesKeyCode).HOME:
                    offset = "min";
                    break;
                case (0, $a2Yf5$rcutilesKeyCode).END:
                    offset = "max";
                    break;
                case (0, $a2Yf5$rcutilesKeyCode).PAGE_UP:
                    offset = 2;
                    break;
                case (0, $a2Yf5$rcutilesKeyCode).PAGE_DOWN:
                    offset = -2;
                    break;
            }
            if (offset !== null) {
                e.preventDefault();
                onOffsetChange(offset, valueIndex);
            }
        }
    }; // ============================ Offset ============================
    var positionStyle = (0, $35fda12cd89451f5$export$a41628415415e6e)(direction, value, min, max); // ============================ Render ============================
    var handleNode = /*#__PURE__*/ $a2Yf5$createElement("div", (0, $a2Yf5$babelruntimehelpersesmextends)({
        ref: ref,
        className: (0, $a2Yf5$classnames)(handlePrefixCls, (_classNames = {}, (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_classNames, "".concat(handlePrefixCls, "-").concat(valueIndex + 1), range), (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_classNames, "".concat(handlePrefixCls, "-dragging"), dragging), _classNames)),
        style: (0, $a2Yf5$babelruntimehelpersesmobjectSpread2)((0, $a2Yf5$babelruntimehelpersesmobjectSpread2)({}, positionStyle), style),
        onMouseDown: onInternalStartMove,
        onTouchStart: onInternalStartMove,
        onKeyDown: onKeyDown,
        tabIndex: disabled ? null : (0, $35fda12cd89451f5$export$ddfa24987dade61b)(tabIndex, valueIndex),
        role: "slider",
        "aria-valuemin": min,
        "aria-valuemax": max,
        "aria-valuenow": value,
        "aria-disabled": disabled,
        "aria-label": (0, $35fda12cd89451f5$export$ddfa24987dade61b)(ariaLabelForHandle, valueIndex),
        "aria-labelledby": (0, $35fda12cd89451f5$export$ddfa24987dade61b)(ariaLabelledByForHandle, valueIndex),
        "aria-valuetext": (_getIndex = (0, $35fda12cd89451f5$export$ddfa24987dade61b)(ariaValueTextFormatterForHandle, valueIndex)) === null || _getIndex === void 0 ? void 0 : _getIndex(value)
    }, restProps)); // Customize
    if (render) handleNode = render(handleNode, {
        index: valueIndex,
        prefixCls: prefixCls,
        value: value,
        dragging: dragging
    });
    return handleNode;
});
var $d9b6b450487eb8c4$export$2e2bcd8739ae039 = $d9b6b450487eb8c4$var$Handle;



var $adc2257fd6b9b4f9$var$_excluded = [
    "prefixCls",
    "style",
    "onStartMove",
    "onOffsetChange",
    "values",
    "handleRender",
    "draggingIndex"
];
var $adc2257fd6b9b4f9$var$Handles = /*#__PURE__*/ $a2Yf5$forwardRef(function(props, ref) {
    var prefixCls = props.prefixCls, style = props.style, onStartMove = props.onStartMove, onOffsetChange = props.onOffsetChange, values = props.values, handleRender = props.handleRender, draggingIndex = props.draggingIndex, restProps = (0, $a2Yf5$babelruntimehelpersesmobjectWithoutProperties)(props, $adc2257fd6b9b4f9$var$_excluded);
    var handlesRef = $a2Yf5$useRef({});
    $a2Yf5$useImperativeHandle(ref, function() {
        return {
            focus: function focus(index) {
                var _handlesRef$current$i;
                (_handlesRef$current$i = handlesRef.current[index]) === null || _handlesRef$current$i === void 0 || _handlesRef$current$i.focus();
            }
        };
    });
    return /*#__PURE__*/ $a2Yf5$createElement($a2Yf5$Fragment, null, values.map(function(value, index) {
        return /*#__PURE__*/ $a2Yf5$createElement((0, $d9b6b450487eb8c4$export$2e2bcd8739ae039), (0, $a2Yf5$babelruntimehelpersesmextends)({
            ref: function ref(node) {
                if (!node) delete handlesRef.current[index];
                else handlesRef.current[index] = node;
            },
            dragging: draggingIndex === index,
            prefixCls: prefixCls,
            style: (0, $35fda12cd89451f5$export$ddfa24987dade61b)(style, index),
            key: index,
            value: value,
            valueIndex: index,
            onStartMove: onStartMove,
            onOffsetChange: onOffsetChange,
            render: handleRender
        }, restProps));
    }));
});
var $adc2257fd6b9b4f9$export$2e2bcd8739ae039 = $adc2257fd6b9b4f9$var$Handles;





function $bab692743f110605$var$getPosition(e) {
    var obj = "touches" in e ? e.touches[0] : e;
    return {
        pageX: obj.pageX,
        pageY: obj.pageY
    };
}
function $bab692743f110605$export$2e2bcd8739ae039(containerRef, direction, rawValues, min, max, formatValue, triggerChange, finishChange, offsetValues) {
    var _React$useState = $a2Yf5$useState(null), _React$useState2 = (0, $a2Yf5$babelruntimehelpersesmslicedToArray)(_React$useState, 2), draggingValue = _React$useState2[0], setDraggingValue = _React$useState2[1];
    var _React$useState3 = $a2Yf5$useState(-1), _React$useState4 = (0, $a2Yf5$babelruntimehelpersesmslicedToArray)(_React$useState3, 2), draggingIndex = _React$useState4[0], setDraggingIndex = _React$useState4[1];
    var _React$useState5 = $a2Yf5$useState(rawValues), _React$useState6 = (0, $a2Yf5$babelruntimehelpersesmslicedToArray)(_React$useState5, 2), cacheValues = _React$useState6[0], setCacheValues = _React$useState6[1];
    var _React$useState7 = $a2Yf5$useState(rawValues), _React$useState8 = (0, $a2Yf5$babelruntimehelpersesmslicedToArray)(_React$useState7, 2), originValues = _React$useState8[0], setOriginValues = _React$useState8[1];
    var mouseMoveEventRef = $a2Yf5$useRef(null);
    var mouseUpEventRef = $a2Yf5$useRef(null);
    $a2Yf5$useEffect(function() {
        if (draggingIndex === -1) setCacheValues(rawValues);
    }, [
        rawValues,
        draggingIndex
    ]); // Clean up event
    $a2Yf5$useEffect(function() {
        return function() {
            document.removeEventListener("mousemove", mouseMoveEventRef.current);
            document.removeEventListener("mouseup", mouseUpEventRef.current);
            document.removeEventListener("touchmove", mouseMoveEventRef.current);
            document.removeEventListener("touchend", mouseUpEventRef.current);
        };
    }, []);
    var flushValues = function flushValues(nextValues, nextValue) {
        // Perf: Only update state when value changed
        if (cacheValues.some(function(val, i) {
            return val !== nextValues[i];
        })) {
            if (nextValue !== undefined) setDraggingValue(nextValue);
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
            var cloneCacheValues = originValues.map(function(val) {
                return val + offset;
            });
            flushValues(cloneCacheValues);
        } else {
            // >>>> Dragging on the handle
            var offsetDist = (max - min) * offsetPercent; // Always start with the valueIndex origin value
            var cloneValues = (0, $a2Yf5$babelruntimehelpersesmtoConsumableArray)(cacheValues);
            cloneValues[valueIndex] = originValues[valueIndex];
            var next = offsetValues(cloneValues, offsetDist, valueIndex, "dist");
            flushValues(next.values, next.value);
        }
    }; // Resolve closure
    var updateCacheValueRef = $a2Yf5$useRef(updateCacheValue);
    updateCacheValueRef.current = updateCacheValue;
    var onStartMove = function onStartMove(e, valueIndex) {
        e.stopPropagation();
        var originValue = rawValues[valueIndex];
        setDraggingIndex(valueIndex);
        setDraggingValue(originValue);
        setOriginValues(rawValues);
        var _getPosition = $bab692743f110605$var$getPosition(e), startX = _getPosition.pageX, startY = _getPosition.pageY; // Moving
        var onMouseMove = function onMouseMove(event) {
            event.preventDefault();
            var _getPosition2 = $bab692743f110605$var$getPosition(event), moveX = _getPosition2.pageX, moveY = _getPosition2.pageY;
            var offsetX = moveX - startX;
            var offsetY = moveY - startY;
            var _containerRef$current = containerRef.current.getBoundingClientRect(), width = _containerRef$current.width, height = _containerRef$current.height;
            var offSetPercent;
            switch(direction){
                case "btt":
                    offSetPercent = -offsetY / height;
                    break;
                case "ttb":
                    offSetPercent = offsetY / height;
                    break;
                case "rtl":
                    offSetPercent = -offsetX / width;
                    break;
                default:
                    offSetPercent = offsetX / width;
            }
            updateCacheValueRef.current(valueIndex, offSetPercent);
        }; // End
        var onMouseUp = function onMouseUp(event) {
            event.preventDefault();
            document.removeEventListener("mouseup", onMouseUp);
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("touchend", onMouseUp);
            document.removeEventListener("touchmove", onMouseMove);
            mouseMoveEventRef.current = null;
            mouseUpEventRef.current = null;
            setDraggingIndex(-1);
            finishChange();
        };
        document.addEventListener("mouseup", onMouseUp);
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("touchend", onMouseUp);
        document.addEventListener("touchmove", onMouseMove);
        mouseMoveEventRef.current = onMouseMove;
        mouseUpEventRef.current = onMouseUp;
    }; // Only return cache value when it mapping with rawValues
    var returnValues = $a2Yf5$useMemo(function() {
        var sourceValues = (0, $a2Yf5$babelruntimehelpersesmtoConsumableArray)(rawValues).sort(function(a, b) {
            return a - b;
        });
        var targetValues = (0, $a2Yf5$babelruntimehelpersesmtoConsumableArray)(cacheValues).sort(function(a, b) {
            return a - b;
        });
        return sourceValues.every(function(val, index) {
            return val === targetValues[index];
        }) ? cacheValues : rawValues;
    }, [
        rawValues,
        cacheValues
    ]);
    return [
        draggingIndex,
        draggingValue,
        returnValues,
        onStartMove
    ];
}










function $a89d1377f1cf0514$export$2e2bcd8739ae039(props) {
    var prefixCls = props.prefixCls, style = props.style, start = props.start, end = props.end, index = props.index, onStartMove = props.onStartMove;
    var _React$useContext = $a2Yf5$useContext((0, $082fec70572b288f$export$2e2bcd8739ae039)), direction = _React$useContext.direction, min = _React$useContext.min, max = _React$useContext.max, disabled = _React$useContext.disabled, range = _React$useContext.range;
    var trackPrefixCls = "".concat(prefixCls, "-track");
    var offsetStart = (0, $35fda12cd89451f5$export$622cea445a1c5b7d)(start, min, max);
    var offsetEnd = (0, $35fda12cd89451f5$export$622cea445a1c5b7d)(end, min, max); // ============================ Events ============================
    var onInternalStartMove = function onInternalStartMove(e) {
        if (!disabled && onStartMove) onStartMove(e, -1);
    }; // ============================ Render ============================
    var positionStyle = {};
    switch(direction){
        case "rtl":
            positionStyle.right = "".concat(offsetStart * 100, "%");
            positionStyle.width = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
            break;
        case "btt":
            positionStyle.bottom = "".concat(offsetStart * 100, "%");
            positionStyle.height = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
            break;
        case "ttb":
            positionStyle.top = "".concat(offsetStart * 100, "%");
            positionStyle.height = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
            break;
        default:
            positionStyle.left = "".concat(offsetStart * 100, "%");
            positionStyle.width = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
    }
    return /*#__PURE__*/ $a2Yf5$createElement("div", {
        className: (0, $a2Yf5$classnames)(trackPrefixCls, range && "".concat(trackPrefixCls, "-").concat(index + 1)),
        style: (0, $a2Yf5$babelruntimehelpersesmobjectSpread2)((0, $a2Yf5$babelruntimehelpersesmobjectSpread2)({}, positionStyle), style),
        onMouseDown: onInternalStartMove,
        onTouchStart: onInternalStartMove
    });
}



function $3e5c9f910f0cbf24$export$2e2bcd8739ae039(props) {
    var prefixCls = props.prefixCls, style = props.style, values = props.values, startPoint = props.startPoint, onStartMove = props.onStartMove;
    var _React$useContext = $a2Yf5$useContext((0, $082fec70572b288f$export$2e2bcd8739ae039)), included = _React$useContext.included, range = _React$useContext.range, min = _React$useContext.min;
    var trackList = $a2Yf5$useMemo(function() {
        if (!range) {
            // null value do not have track
            if (values.length === 0) return [];
            var startValue = startPoint !== null && startPoint !== void 0 ? startPoint : min;
            var endValue = values[0];
            return [
                {
                    start: Math.min(startValue, endValue),
                    end: Math.max(startValue, endValue)
                }
            ];
        } // Multiple
        var list = [];
        for(var i = 0; i < values.length - 1; i += 1)list.push({
            start: values[i],
            end: values[i + 1]
        });
        return list;
    }, [
        values,
        range,
        startPoint,
        min
    ]);
    return included ? trackList.map(function(_ref, index) {
        var start = _ref.start, end = _ref.end;
        return /*#__PURE__*/ $a2Yf5$createElement((0, $a89d1377f1cf0514$export$2e2bcd8739ae039), {
            index: index,
            prefixCls: prefixCls,
            style: (0, $35fda12cd89451f5$export$ddfa24987dade61b)(style, index),
            start: start,
            end: end,
            key: index,
            onStartMove: onStartMove
        });
    }) : null;
}









function $811505128501c4db$export$2e2bcd8739ae039(props) {
    var prefixCls = props.prefixCls, style = props.style, children = props.children, value = props.value, _onClick = props.onClick;
    var _React$useContext = $a2Yf5$useContext((0, $082fec70572b288f$export$2e2bcd8739ae039)), min = _React$useContext.min, max = _React$useContext.max, direction = _React$useContext.direction, includedStart = _React$useContext.includedStart, includedEnd = _React$useContext.includedEnd, included = _React$useContext.included;
    var textCls = "".concat(prefixCls, "-text"); // ============================ Offset ============================
    var positionStyle = (0, $35fda12cd89451f5$export$a41628415415e6e)(direction, value, min, max);
    return /*#__PURE__*/ $a2Yf5$createElement("span", {
        className: (0, $a2Yf5$classnames)(textCls, (0, $a2Yf5$babelruntimehelpersesmdefineProperty)({}, "".concat(textCls, "-active"), included && includedStart <= value && value <= includedEnd)),
        style: (0, $a2Yf5$babelruntimehelpersesmobjectSpread2)((0, $a2Yf5$babelruntimehelpersesmobjectSpread2)({}, positionStyle), style),
        onMouseDown: function onMouseDown(e) {
            e.stopPropagation();
        },
        onClick: function onClick() {
            _onClick(value);
        }
    }, children);
}


function $b28fef505ed44895$export$2e2bcd8739ae039(props) {
    var prefixCls = props.prefixCls, marks = props.marks, onClick = props.onClick;
    var markPrefixCls = "".concat(prefixCls, "-mark"); // Not render mark if empty
    if (!marks.length) return null;
    return /*#__PURE__*/ $a2Yf5$createElement("div", {
        className: markPrefixCls
    }, marks.map(function(_ref) {
        var value = _ref.value, style = _ref.style, label = _ref.label;
        return /*#__PURE__*/ $a2Yf5$createElement((0, $811505128501c4db$export$2e2bcd8739ae039), {
            key: value,
            prefixCls: markPrefixCls,
            style: style,
            value: value,
            onClick: onClick
        }, label);
    }));
}










function $691f445334909109$export$2e2bcd8739ae039(props) {
    var prefixCls = props.prefixCls, value = props.value, style = props.style, activeStyle = props.activeStyle;
    var _React$useContext = $a2Yf5$useContext((0, $082fec70572b288f$export$2e2bcd8739ae039)), min = _React$useContext.min, max = _React$useContext.max, direction = _React$useContext.direction, included = _React$useContext.included, includedStart = _React$useContext.includedStart, includedEnd = _React$useContext.includedEnd;
    var dotClassName = "".concat(prefixCls, "-dot");
    var active = included && includedStart <= value && value <= includedEnd; // ============================ Offset ============================
    var mergedStyle = (0, $a2Yf5$babelruntimehelpersesmobjectSpread2)((0, $a2Yf5$babelruntimehelpersesmobjectSpread2)({}, (0, $35fda12cd89451f5$export$a41628415415e6e)(direction, value, min, max)), typeof style === "function" ? style(value) : style);
    if (active) mergedStyle = (0, $a2Yf5$babelruntimehelpersesmobjectSpread2)((0, $a2Yf5$babelruntimehelpersesmobjectSpread2)({}, mergedStyle), typeof activeStyle === "function" ? activeStyle(value) : activeStyle);
    return /*#__PURE__*/ $a2Yf5$createElement("span", {
        className: (0, $a2Yf5$classnames)(dotClassName, (0, $a2Yf5$babelruntimehelpersesmdefineProperty)({}, "".concat(dotClassName, "-active"), active)),
        style: mergedStyle
    });
}


function $3d4984a439cd435a$export$2e2bcd8739ae039(props) {
    var prefixCls = props.prefixCls, marks = props.marks, dots = props.dots, style = props.style, activeStyle = props.activeStyle;
    var _React$useContext = $a2Yf5$useContext((0, $082fec70572b288f$export$2e2bcd8739ae039)), min = _React$useContext.min, max = _React$useContext.max, step = _React$useContext.step;
    var stepDots = $a2Yf5$useMemo(function() {
        var dotSet = new Set(); // Add marks
        marks.forEach(function(mark) {
            dotSet.add(mark.value);
        }); // Fill dots
        if (dots && step !== null) {
            var current = min;
            while(current <= max){
                dotSet.add(current);
                current += step;
            }
        }
        return Array.from(dotSet);
    }, [
        min,
        max,
        step,
        dots,
        marks
    ]);
    return /*#__PURE__*/ $a2Yf5$createElement("div", {
        className: "".concat(prefixCls, "-step")
    }, stepDots.map(function(dotValue) {
        return /*#__PURE__*/ $a2Yf5$createElement((0, $691f445334909109$export$2e2bcd8739ae039), {
            prefixCls: prefixCls,
            key: dotValue,
            value: dotValue,
            style: style,
            activeStyle: activeStyle
        });
    }));
}




function $071d42a15e136dea$export$2e2bcd8739ae039(min, max, step, markList, allowCross, pushable) {
    var formatRangeValue = $a2Yf5$useCallback(function(val) {
        var formatNextValue = isFinite(val) ? val : min;
        formatNextValue = Math.min(max, val);
        formatNextValue = Math.max(min, formatNextValue);
        return formatNextValue;
    }, [
        min,
        max
    ]);
    var formatStepValue = $a2Yf5$useCallback(function(val) {
        if (step !== null) {
            var stepValue = min + Math.round((formatRangeValue(val) - min) / step) * step; // Cut number in case to be like 0.30000000000000004
            var getDecimal = function getDecimal(num) {
                return (String(num).split(".")[1] || "").length;
            };
            var maxDecimal = Math.max(getDecimal(step), getDecimal(max), getDecimal(min));
            var fixedValue = Number(stepValue.toFixed(maxDecimal));
            return min <= fixedValue && fixedValue <= max ? fixedValue : null;
        }
        return null;
    }, [
        step,
        min,
        max,
        formatRangeValue
    ]);
    var formatValue = $a2Yf5$useCallback(function(val) {
        var formatNextValue = formatRangeValue(val); // List align values
        var alignValues = markList.map(function(mark) {
            return mark.value;
        });
        if (step !== null) alignValues.push(formatStepValue(val));
         // min & max
        alignValues.push(min, max); // Align with marks
        var closeValue = alignValues[0];
        var closeDist = max - min;
        alignValues.forEach(function(alignValue) {
            var dist = Math.abs(formatNextValue - alignValue);
            if (dist <= closeDist) {
                closeValue = alignValue;
                closeDist = dist;
            }
        });
        return closeValue;
    }, [
        min,
        max,
        markList,
        step,
        formatRangeValue,
        formatStepValue
    ]); // ========================== Offset ==========================
    // Single Value
    var offsetValue = function offsetValue(values, offset, valueIndex) {
        var mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "unit";
        if (typeof offset === "number") {
            var nextValue;
            var originValue = values[valueIndex]; // Only used for `dist` mode
            var targetDistValue = originValue + offset; // Compare next step value & mark value which is best match
            var potentialValues = [];
            markList.forEach(function(mark) {
                potentialValues.push(mark.value);
            }); // Min & Max
            potentialValues.push(min, max); // In case origin value is align with mark but not with step
            potentialValues.push(formatStepValue(originValue)); // Put offset step value also
            var sign = offset > 0 ? 1 : -1;
            if (mode === "unit") potentialValues.push(formatStepValue(originValue + sign * step));
            else potentialValues.push(formatStepValue(targetDistValue));
             // Find close one
            potentialValues = potentialValues.filter(function(val) {
                return val !== null;
            }) // Remove reverse value
            .filter(function(val) {
                return offset < 0 ? val <= originValue : val >= originValue;
            });
            if (mode === "unit") // `unit` mode can not contain itself
            potentialValues = potentialValues.filter(function(val) {
                return val !== originValue;
            });
            var compareValue = mode === "unit" ? originValue : targetDistValue;
            nextValue = potentialValues[0];
            var valueDist = Math.abs(nextValue - compareValue);
            potentialValues.forEach(function(potentialValue) {
                var dist = Math.abs(potentialValue - compareValue);
                if (dist < valueDist) {
                    nextValue = potentialValue;
                    valueDist = dist;
                }
            }); // Out of range will back to range
            if (nextValue === undefined) return offset < 0 ? min : max;
             // `dist` mode
            if (mode === "dist") return nextValue;
             // `unit` mode may need another round
            if (Math.abs(offset) > 1) {
                var cloneValues = (0, $a2Yf5$babelruntimehelpersesmtoConsumableArray)(values);
                cloneValues[valueIndex] = nextValue;
                return offsetValue(cloneValues, offset - sign, valueIndex, mode);
            }
            return nextValue;
        } else if (offset === "min") return min;
        else if (offset === "max") return max;
    };
    /** Same as `offsetValue` but return `changed` mark to tell value changed */ var offsetChangedValue = function offsetChangedValue(values, offset, valueIndex) {
        var mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "unit";
        var originValue = values[valueIndex];
        var nextValue = offsetValue(values, offset, valueIndex, mode);
        return {
            value: nextValue,
            changed: nextValue !== originValue
        };
    };
    var needPush = function needPush(dist) {
        return pushable === null && dist === 0 || typeof pushable === "number" && dist < pushable;
    }; // Values
    var offsetValues = function offsetValues(values, offset, valueIndex) {
        var mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "unit";
        var nextValues = values.map(formatValue);
        var originValue = nextValues[valueIndex];
        var nextValue = offsetValue(nextValues, offset, valueIndex, mode);
        nextValues[valueIndex] = nextValue;
        if (allowCross === false) {
            // >>>>> Allow Cross
            var pushNum = pushable || 0; // ============ AllowCross ===============
            if (valueIndex > 0 && nextValues[valueIndex - 1] !== originValue) nextValues[valueIndex] = Math.max(nextValues[valueIndex], nextValues[valueIndex - 1] + pushNum);
            if (valueIndex < nextValues.length - 1 && nextValues[valueIndex + 1] !== originValue) nextValues[valueIndex] = Math.min(nextValues[valueIndex], nextValues[valueIndex + 1] - pushNum);
        } else if (typeof pushable === "number" || pushable === null) {
            // >>>>> Pushable
            // =============== Push ==================
            // >>>>>> Basic push
            // End values
            for(var i = valueIndex + 1; i < nextValues.length; i += 1){
                var changed = true;
                while(needPush(nextValues[i] - nextValues[i - 1]) && changed){
                    var _offsetChangedValue = offsetChangedValue(nextValues, 1, i);
                    nextValues[i] = _offsetChangedValue.value;
                    changed = _offsetChangedValue.changed;
                }
            } // Start values
            for(var _i = valueIndex; _i > 0; _i -= 1){
                var _changed = true;
                while(needPush(nextValues[_i] - nextValues[_i - 1]) && _changed){
                    var _offsetChangedValue2 = offsetChangedValue(nextValues, -1, _i - 1);
                    nextValues[_i - 1] = _offsetChangedValue2.value;
                    _changed = _offsetChangedValue2.changed;
                }
            } // >>>>> Revert back to safe push range
            // End to Start
            for(var _i2 = nextValues.length - 1; _i2 > 0; _i2 -= 1){
                var _changed2 = true;
                while(needPush(nextValues[_i2] - nextValues[_i2 - 1]) && _changed2){
                    var _offsetChangedValue3 = offsetChangedValue(nextValues, -1, _i2 - 1);
                    nextValues[_i2 - 1] = _offsetChangedValue3.value;
                    _changed2 = _offsetChangedValue3.changed;
                }
            } // Start to End
            for(var _i3 = 0; _i3 < nextValues.length - 1; _i3 += 1){
                var _changed3 = true;
                while(needPush(nextValues[_i3 + 1] - nextValues[_i3]) && _changed3){
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
    return [
        formatValue,
        offsetValues
    ];
}



var $3dc8da5f55b48257$var$Slider = /*#__PURE__*/ $a2Yf5$forwardRef(function(props, ref) {
    var _classNames;
    var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-slider" : _props$prefixCls, className = props.className, style = props.style, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, autoFocus = props.autoFocus, onFocus = props.onFocus, onBlur = props.onBlur, _props$min = props.min, min = _props$min === void 0 ? 0 : _props$min, _props$max = props.max, max = _props$max === void 0 ? 100 : _props$max, _props$step = props.step, step = _props$step === void 0 ? 1 : _props$step, value = props.value, defaultValue = props.defaultValue, range = props.range, count = props.count, onChange = props.onChange, onBeforeChange = props.onBeforeChange, onAfterChange = props.onAfterChange, _props$allowCross = props.allowCross, allowCross = _props$allowCross === void 0 ? true : _props$allowCross, _props$pushable = props.pushable, pushable = _props$pushable === void 0 ? false : _props$pushable, draggableTrack = props.draggableTrack, reverse = props.reverse, vertical = props.vertical, _props$included = props.included, included = _props$included === void 0 ? true : _props$included, startPoint = props.startPoint, trackStyle = props.trackStyle, handleStyle = props.handleStyle, railStyle = props.railStyle, dotStyle = props.dotStyle, activeDotStyle = props.activeDotStyle, marks = props.marks, dots = props.dots, handleRender = props.handleRender, _props$tabIndex = props.tabIndex, tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex, ariaLabelForHandle = props.ariaLabelForHandle, ariaLabelledByForHandle = props.ariaLabelledByForHandle, ariaValueTextFormatterForHandle = props.ariaValueTextFormatterForHandle;
    var handlesRef = $a2Yf5$useRef();
    var containerRef = $a2Yf5$useRef();
    var direction = $a2Yf5$useMemo(function() {
        if (vertical) return reverse ? "ttb" : "btt";
        return reverse ? "rtl" : "ltr";
    }, [
        reverse,
        vertical
    ]); // ============================ Range =============================
    var mergedMin = $a2Yf5$useMemo(function() {
        return isFinite(min) ? min : 0;
    }, [
        min
    ]);
    var mergedMax = $a2Yf5$useMemo(function() {
        return isFinite(max) ? max : 100;
    }, [
        max
    ]); // ============================= Step =============================
    var mergedStep = $a2Yf5$useMemo(function() {
        return step !== null && step <= 0 ? 1 : step;
    }, [
        step
    ]); // ============================= Push =============================
    var mergedPush = $a2Yf5$useMemo(function() {
        if (pushable === true) return mergedStep;
        return pushable >= 0 ? pushable : false;
    }, [
        pushable,
        mergedStep
    ]); // ============================ Marks =============================
    var markList = $a2Yf5$useMemo(function() {
        var keys = Object.keys(marks || {});
        return keys.map(function(key) {
            var mark = marks[key];
            var markObj = {
                value: Number(key)
            };
            if (mark && (0, $a2Yf5$babelruntimehelpersesmtypeof)(mark) === "object" && !/*#__PURE__*/ $a2Yf5$isValidElement(mark) && ("label" in mark || "style" in mark)) {
                markObj.style = mark.style;
                markObj.label = mark.label;
            } else markObj.label = mark;
            return markObj;
        }).filter(function(_ref) {
            var label = _ref.label;
            return label || typeof label === "number";
        }).sort(function(a, b) {
            return a.value - b.value;
        });
    }, [
        marks
    ]); // ============================ Format ============================
    var _useOffset = (0, $071d42a15e136dea$export$2e2bcd8739ae039)(mergedMin, mergedMax, mergedStep, markList, allowCross, mergedPush), _useOffset2 = (0, $a2Yf5$babelruntimehelpersesmslicedToArray)(_useOffset, 2), formatValue = _useOffset2[0], offsetValues = _useOffset2[1]; // ============================ Values ============================
    var _useMergedState = (0, $a2Yf5$rcutileshooksuseMergedState)(defaultValue, {
        value: value
    }), _useMergedState2 = (0, $a2Yf5$babelruntimehelpersesmslicedToArray)(_useMergedState, 2), mergedValue = _useMergedState2[0], setValue = _useMergedState2[1];
    var rawValues = $a2Yf5$useMemo(function() {
        var valueList = mergedValue === null || mergedValue === undefined ? [] : Array.isArray(mergedValue) ? mergedValue : [
            mergedValue
        ];
        var _valueList = (0, $a2Yf5$babelruntimehelpersesmslicedToArray)(valueList, 1), _valueList$ = _valueList[0], val0 = _valueList$ === void 0 ? mergedMin : _valueList$;
        var returnValues = mergedValue === null ? [] : [
            val0
        ]; // Format as range
        if (range) {
            returnValues = (0, $a2Yf5$babelruntimehelpersesmtoConsumableArray)(valueList); // When count provided or value is `undefined`, we fill values
            if (count || mergedValue === undefined) {
                var pointCount = count >= 0 ? count + 1 : 2;
                returnValues = returnValues.slice(0, pointCount); // Fill with count
                while(returnValues.length < pointCount){
                    var _returnValues;
                    returnValues.push((_returnValues = returnValues[returnValues.length - 1]) !== null && _returnValues !== void 0 ? _returnValues : mergedMin);
                }
            }
            returnValues.sort(function(a, b) {
                return a - b;
            });
        } // Align in range
        returnValues.forEach(function(val, index) {
            returnValues[index] = formatValue(val);
        });
        return returnValues;
    }, [
        mergedValue,
        range,
        mergedMin,
        count,
        formatValue
    ]); // =========================== onChange ===========================
    var rawValuesRef = $a2Yf5$useRef(rawValues);
    rawValuesRef.current = rawValues;
    var getTriggerValue = function getTriggerValue(triggerValues) {
        return range ? triggerValues : triggerValues[0];
    };
    var triggerChange = function triggerChange(nextValues) {
        // Order first
        var cloneNextValues = (0, $a2Yf5$babelruntimehelpersesmtoConsumableArray)(nextValues).sort(function(a, b) {
            return a - b;
        }); // Trigger event if needed
        if (onChange && !(0, $a2Yf5$shallowequal)(cloneNextValues, rawValuesRef.current)) onChange(getTriggerValue(cloneNextValues));
         // We set this later since it will re-render component immediately
        setValue(cloneNextValues);
    };
    var changeToCloseValue = function changeToCloseValue(newValue) {
        if (!disabled) {
            var valueIndex = 0;
            var valueDist = mergedMax - mergedMin;
            rawValues.forEach(function(val, index) {
                var dist = Math.abs(newValue - val);
                if (dist <= valueDist) {
                    valueDist = dist;
                    valueIndex = index;
                }
            }); // Create new values
            var cloneNextValues = (0, $a2Yf5$babelruntimehelpersesmtoConsumableArray)(rawValues);
            cloneNextValues[valueIndex] = newValue; // Fill value to match default 2
            if (range && !rawValues.length && count === undefined) cloneNextValues.push(newValue);
            onBeforeChange === null || onBeforeChange === void 0 || onBeforeChange(getTriggerValue(cloneNextValues));
            triggerChange(cloneNextValues);
            onAfterChange === null || onAfterChange === void 0 || onAfterChange(getTriggerValue(cloneNextValues));
        }
    }; // ============================ Click =============================
    var onSliderMouseDown = function onSliderMouseDown(e) {
        e.preventDefault();
        var _containerRef$current = containerRef.current.getBoundingClientRect(), width = _containerRef$current.width, height = _containerRef$current.height, left = _containerRef$current.left, top = _containerRef$current.top, bottom = _containerRef$current.bottom, right = _containerRef$current.right;
        var clientX = e.clientX, clientY = e.clientY;
        var percent;
        switch(direction){
            case "btt":
                percent = (bottom - clientY) / height;
                break;
            case "ttb":
                percent = (clientY - top) / height;
                break;
            case "rtl":
                percent = (right - clientX) / width;
                break;
            default:
                percent = (clientX - left) / width;
        }
        var nextValue = mergedMin + percent * (mergedMax - mergedMin);
        changeToCloseValue(formatValue(nextValue));
    }; // =========================== Keyboard ===========================
    var _React$useState = $a2Yf5$useState(null), _React$useState2 = (0, $a2Yf5$babelruntimehelpersesmslicedToArray)(_React$useState, 2), keyboardValue = _React$useState2[0], setKeyboardValue = _React$useState2[1];
    var onHandleOffsetChange = function onHandleOffsetChange(offset, valueIndex) {
        if (!disabled) {
            var next = offsetValues(rawValues, offset, valueIndex);
            onBeforeChange === null || onBeforeChange === void 0 || onBeforeChange(getTriggerValue(rawValues));
            triggerChange(next.values);
            onAfterChange === null || onAfterChange === void 0 || onAfterChange(getTriggerValue(next.values));
            setKeyboardValue(next.value);
        }
    };
    $a2Yf5$useEffect(function() {
        if (keyboardValue !== null) {
            var valueIndex = rawValues.indexOf(keyboardValue);
            if (valueIndex >= 0) handlesRef.current.focus(valueIndex);
        }
        setKeyboardValue(null);
    }, [
        keyboardValue
    ]); // ============================= Drag =============================
    var mergedDraggableTrack = $a2Yf5$useMemo(function() {
        if (draggableTrack && mergedStep === null) return false;
        return draggableTrack;
    }, [
        draggableTrack,
        mergedStep
    ]);
    var finishChange = function finishChange() {
        onAfterChange === null || onAfterChange === void 0 || onAfterChange(getTriggerValue(rawValuesRef.current));
    };
    var _useDrag = (0, $bab692743f110605$export$2e2bcd8739ae039)(containerRef, direction, rawValues, mergedMin, mergedMax, formatValue, triggerChange, finishChange, offsetValues), _useDrag2 = (0, $a2Yf5$babelruntimehelpersesmslicedToArray)(_useDrag, 4), draggingIndex = _useDrag2[0], draggingValue = _useDrag2[1], cacheValues = _useDrag2[2], onStartDrag = _useDrag2[3];
    var onStartMove = function onStartMove(e, valueIndex) {
        onStartDrag(e, valueIndex);
        onBeforeChange === null || onBeforeChange === void 0 || onBeforeChange(getTriggerValue(rawValuesRef.current));
    }; // Auto focus for updated handle
    var dragging = draggingIndex !== -1;
    $a2Yf5$useEffect(function() {
        if (!dragging) {
            var valueIndex = rawValues.lastIndexOf(draggingValue);
            handlesRef.current.focus(valueIndex);
        }
    }, [
        dragging
    ]); // =========================== Included ===========================
    var sortedCacheValues = $a2Yf5$useMemo(function() {
        return (0, $a2Yf5$babelruntimehelpersesmtoConsumableArray)(cacheValues).sort(function(a, b) {
            return a - b;
        });
    }, [
        cacheValues
    ]); // Provide a range values with included [min, max]
    // Used for Track, Mark & Dot
    var _React$useMemo = $a2Yf5$useMemo(function() {
        if (!range) return [
            mergedMin,
            sortedCacheValues[0]
        ];
        return [
            sortedCacheValues[0],
            sortedCacheValues[sortedCacheValues.length - 1]
        ];
    }, [
        sortedCacheValues,
        range,
        mergedMin
    ]), _React$useMemo2 = (0, $a2Yf5$babelruntimehelpersesmslicedToArray)(_React$useMemo, 2), includedStart = _React$useMemo2[0], includedEnd = _React$useMemo2[1]; // ============================= Refs =============================
    $a2Yf5$useImperativeHandle(ref, function() {
        return {
            focus: function focus() {
                handlesRef.current.focus(0);
            },
            blur: function blur() {
                var _document = document, activeElement = _document.activeElement;
                if (containerRef.current.contains(activeElement)) activeElement === null || activeElement === void 0 || activeElement.blur();
            }
        };
    }); // ========================== Auto Focus ==========================
    $a2Yf5$useEffect(function() {
        if (autoFocus) handlesRef.current.focus(0);
    }, []); // =========================== Context ============================
    var context = $a2Yf5$useMemo(function() {
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
    }, [
        mergedMin,
        mergedMax,
        direction,
        disabled,
        mergedStep,
        included,
        includedStart,
        includedEnd,
        range,
        tabIndex,
        ariaLabelForHandle,
        ariaLabelledByForHandle,
        ariaValueTextFormatterForHandle
    ]); // ============================ Render ============================
    return /*#__PURE__*/ $a2Yf5$createElement((0, $082fec70572b288f$export$2e2bcd8739ae039).Provider, {
        value: context
    }, /*#__PURE__*/ $a2Yf5$createElement("div", {
        ref: containerRef,
        className: (0, $a2Yf5$classnames)(prefixCls, className, (_classNames = {}, (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_classNames, "".concat(prefixCls, "-vertical"), vertical), (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_classNames, "".concat(prefixCls, "-horizontal"), !vertical), (0, $a2Yf5$babelruntimehelpersesmdefineProperty)(_classNames, "".concat(prefixCls, "-with-marks"), markList.length), _classNames)),
        style: style,
        onMouseDown: onSliderMouseDown
    }, /*#__PURE__*/ $a2Yf5$createElement("div", {
        className: "".concat(prefixCls, "-rail"),
        style: railStyle
    }), /*#__PURE__*/ $a2Yf5$createElement((0, $3e5c9f910f0cbf24$export$2e2bcd8739ae039), {
        prefixCls: prefixCls,
        style: trackStyle,
        values: sortedCacheValues,
        startPoint: startPoint,
        onStartMove: mergedDraggableTrack ? onStartMove : null
    }), /*#__PURE__*/ $a2Yf5$createElement((0, $3d4984a439cd435a$export$2e2bcd8739ae039), {
        prefixCls: prefixCls,
        marks: markList,
        dots: dots,
        style: dotStyle,
        activeStyle: activeDotStyle
    }), /*#__PURE__*/ $a2Yf5$createElement((0, $adc2257fd6b9b4f9$export$2e2bcd8739ae039), {
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
    }), /*#__PURE__*/ $a2Yf5$createElement((0, $b28fef505ed44895$export$2e2bcd8739ae039), {
        prefixCls: prefixCls,
        marks: markList,
        onClick: changeToCloseValue
    })));
});
var $3dc8da5f55b48257$export$2e2bcd8739ae039 = $3dc8da5f55b48257$var$Slider;


var $d020fc884ac3e39d$export$2e2bcd8739ae039 = (0, $3dc8da5f55b48257$export$2e2bcd8739ae039);


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
