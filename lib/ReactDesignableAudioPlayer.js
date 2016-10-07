'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Playlist = exports.TimeSlider = exports.TitleMarquee = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.connectAudioPlayer = connectAudioPlayer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcSlider = require('rc-slider');

var _rcSlider2 = _interopRequireDefault(_rcSlider);

require('rc-slider/assets/index.css');

var _audioPlayerCore = require('./audioPlayerCore');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function connectAudioPlayer(WrappedComponent, tracks) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var _ref$autoplay = _ref.autoplay;
    var autoplay = _ref$autoplay === undefined ? false : _ref$autoplay;

    var Connect = function (_Component) {
        _inherits(Connect, _Component);

        function Connect(props) {
            _classCallCheck(this, Connect);

            var _this = _possibleConstructorReturn(this, (Connect.__proto__ || Object.getPrototypeOf(Connect)).call(this, props));

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

        _createClass(Connect, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _this2 = this;

                (0, _audioPlayerCore.addListener)(function (update) {
                    return _this2.setState(_lodash2.default.omit(update, 'type'));
                });
                if (autoplay) {
                    (0, _audioPlayerCore.turnOnAutoplay)();
                }
                (0, _audioPlayerCore.addTracks)(tracks);
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
                return (0, _react.createElement)(WrappedComponent, props);
            }
        }]);

        return Connect;
    }(_react.Component);

    return Connect;
}

/* TitleMarquee component */

function insertStyle(style) {
    for (var i = 0; i < document.styleSheets.length; i++) {
        try {
            document.styleSheets[i].insertRule(style, _lodash2.default.size(document.styleSheets[i].cssRules));
            break;
        } catch (e) {
            if (e.name !== "SecurityError" && e.name !== 'InvalidAccessError') {
                throw e;
            }
        }
    }
}

var animationName = 'marquee_' + Math.round(Math.random() * 10000000);
var keyframes = '@keyframes ' + animationName + ' {\n        0% {-webkit-transform:translate(0, 0)} \n        100% {-webkit-transform:translate(-100%, 0)}\n     }';
insertStyle(keyframes);

var baseStyle = {
    paddingLeft: '100%',
    display: 'inline-block'
};

var getMarqueeStyle = function getMarqueeStyle(duration) {
    return _extends({}, baseStyle, {
        animation: animationName + ' ' + duration + 's infinite linear'
    });
};

var TM = function (_Component2) {
    _inherits(TM, _Component2);

    function TM(props) {
        _classCallCheck(this, TM);

        var _this3 = _possibleConstructorReturn(this, (TM.__proto__ || Object.getPrototypeOf(TM)).call(this, props));

        _this3.state = {
            on: true,
            currentTrack: null
        };
        return _this3;
    }

    _createClass(TM, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this4 = this;

            (0, _audioPlayerCore.addListener)(function (update) {
                return _this4.setState({
                    currentTrack: update.currentTrack,
                    on: update.type !== _audioPlayerCore.UpdateTypes.TRACK_SWITCH
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var className = _props.className;
            var textFn = _props.textFn;
            var duration = _props.duration;
            var currentTrack = this.state.currentTrack;

            var _ref2 = currentTrack || {};

            var number = _ref2.number;
            var artist = _ref2.artist;
            var title = _ref2.title;

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
    className: _react.PropTypes.string,
    textFn: _react.PropTypes.func,
    duration: _react.PropTypes.number
};

var TitleMarquee = exports.TitleMarquee = TM;

/* TimeSlider component */

var DefaultSliderHandle = function DefaultSliderHandle() {
    return _react2.default.createElement('div', null);
};

var TS = function (_Component3) {
    _inherits(TS, _Component3);

    function TS(props) {
        _classCallCheck(this, TS);

        var _this5 = _possibleConstructorReturn(this, (TS.__proto__ || Object.getPrototypeOf(TS)).call(this, props));

        _this5.state = {
            secondsElapsed: 0,
            secondsRemaining: 0
        };
        return _this5;
    }

    _createClass(TS, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this6 = this;

            (0, _audioPlayerCore.addListener)(function (update) {
                return _this6.setState(_lodash2.default.pick(update, ['secondsElapsed', 'secondsRemaining']));
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var className = this.props.className;
            var _state = this.state;
            var secondsElapsed = _state.secondsElapsed;
            var secondsRemaining = _state.secondsRemaining;

            return _react2.default.createElement(
                'div',
                { className: className },
                _react2.default.createElement(_rcSlider2.default, _extends({ onChange: _audioPlayerCore.seek, value: secondsElapsed, min: 0, max: secondsElapsed + secondsRemaining,
                    handle: this.props.handle || _react2.default.createElement(DefaultSliderHandle, null)
                }, _lodash2.default.omit(this.props, 'className')))
            );
        }
    }]);

    return TS;
}(_react.Component);

TS.propTypes = {
    className: _react.PropTypes.string
};

var TimeSlider = exports.TimeSlider = TS;

/* Playlist component */

var PL = function (_Component4) {
    _inherits(PL, _Component4);

    function PL(props) {
        _classCallCheck(this, PL);

        var _this7 = _possibleConstructorReturn(this, (PL.__proto__ || Object.getPrototypeOf(PL)).call(this, props));

        _this7.state = {
            tracks: [],
            currentTrack: null
        };
        return _this7;
    }

    _createClass(PL, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this8 = this;

            (0, _audioPlayerCore.addListener)(function (update) {
                return _this8.setState(_lodash2.default.pick(update, ['tracks', 'currentTrack']));
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props;
            var className = _props2.className;
            var itemClassName = _props2.itemClassName;
            var currentItemClassName = _props2.currentItemClassName;
            var itemComponent = _props2.itemComponent;
            var _state2 = this.state;
            var tracks = _state2.tracks;
            var currentTrack = _state2.currentTrack;

            var _ref3 = currentTrack || {};

            var number = _ref3.number;

            return _react2.default.createElement(
                'div',
                { className: className },
                tracks.map(function (track, i) {
                    return _react2.default.createElement(
                        'div',
                        { className: number === i + 1 ? itemClassName + ' ' + currentItemClassName : itemClassName,
                            onClick: function onClick() {
                                return number === i + 1 ? (0, _audioPlayerCore.gotoAndPlay)(i + 1) : (0, _audioPlayerCore.goto)(i + 1);
                            }, key: i },
                        itemComponent ? itemComponent(currentTrack) : i + 1 + '. ' + track.artist + ' - ' + track.title
                    );
                })
            );
        }
    }]);

    return PL;
}(_react.Component);

PL.propTypes = {
    className: _react.PropTypes.string,
    itemClassName: _react.PropTypes.string,
    currentItemClassName: _react.PropTypes.string,
    itemComponent: _react.PropTypes.func
};

var Playlist = exports.Playlist = PL;