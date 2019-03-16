'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Playlist = exports.TimeSlider = exports.TitleMarquee = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.connectAudioPlayer = connectAudioPlayer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _exenv = require('exenv');

var _rcSlider = require('rc-slider');

var _rcSlider2 = _interopRequireDefault(_rcSlider);

var _insertCss = require('insert-css');

var _insertCss2 = _interopRequireDefault(_insertCss);

require('rc-slider/assets/index.css');

var _audioPlayerCore = require('./audioPlayerCore');

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
    if (_exenv.canUseDOM) {
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