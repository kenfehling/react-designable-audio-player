'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TimeSlider = exports.TitleMarquee = undefined;

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
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { autoplay: false };

    var Connect = function (_Component) {
        _inherits(Connect, _Component);

        function Connect(props) {
            _classCallCheck(this, Connect);

            var _this = _possibleConstructorReturn(this, (Connect.__proto__ || Object.getPrototypeOf(Connect)).call(this, props));

            _this.state = {
                isPlaying: false,
                currentTrack: {},
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
                if (options.autoplay) {
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
                    next: _audioPlayerCore.next,
                    prev: _audioPlayerCore.prev,
                    seek: _audioPlayerCore.seek,
                    gotoTrack: _audioPlayerCore.gotoTrack,
                    isPlaying: this.state.isPlaying,
                    currentTrack: this.state.currentTrack,
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

var Marquee = function (_Component2) {
    _inherits(Marquee, _Component2);

    function Marquee(props) {
        _classCallCheck(this, Marquee);

        var _this3 = _possibleConstructorReturn(this, (Marquee.__proto__ || Object.getPrototypeOf(Marquee)).call(this, props));

        _this3.state = {
            on: true,
            currentTrack: {}
        };
        return _this3;
    }

    _createClass(Marquee, [{
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
            var text = _props.text;
            var duration = _props.duration;
            var _state$currentTrack = this.state.currentTrack;
            var number = _state$currentTrack.number;
            var artist = _state$currentTrack.artist;
            var title = _state$currentTrack.title;

            return _react2.default.createElement(
                'div',
                { style: { overflow: 'hidden', whiteSpace: 'nowrap' } },
                _react2.default.createElement(
                    'div',
                    { style: this.state.on ? getMarqueeStyle(duration || 10) : baseStyle },
                    text || number + '. ' + artist + ' - ' + title
                )
            );
        }
    }]);

    return Marquee;
}(_react.Component);

Marquee.propTypes = {
    text: _react.PropTypes.string,
    duration: _react.PropTypes.number
};

var TitleMarquee = exports.TitleMarquee = Marquee;

/* TimeSlider component */

var DefaultSliderHandle = function DefaultSliderHandle() {
    return _react2.default.createElement('div', null);
};

var TimeSlider = exports.TimeSlider = function (_Component3) {
    _inherits(TimeSlider, _Component3);

    function TimeSlider(props) {
        _classCallCheck(this, TimeSlider);

        var _this5 = _possibleConstructorReturn(this, (TimeSlider.__proto__ || Object.getPrototypeOf(TimeSlider)).call(this, props));

        _this5.state = {
            secondsElapsed: 0,
            secondsRemaining: 0
        };
        return _this5;
    }

    _createClass(TimeSlider, [{
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
            var _state = this.state;
            var secondsElapsed = _state.secondsElapsed;
            var secondsRemaining = _state.secondsRemaining;

            return _react2.default.createElement(_rcSlider2.default, _extends({ onChange: _audioPlayerCore.seek, value: secondsElapsed, min: 0, max: secondsElapsed + secondsRemaining,
                handle: this.props.handle || _react2.default.createElement(DefaultSliderHandle, null) }, this.props));
        }
    }]);

    return TimeSlider;
}(_react.Component);