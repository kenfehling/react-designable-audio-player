'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.turnOnAutoplay = exports.gotoAndPlay = exports.goto = exports.prev = exports.next = exports.seek = exports.stop = exports.play = exports.addTracks = exports.DEFAULT_TIME_STRING = exports.UpdateTypes = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

exports.formatTime = formatTime;
exports.addListener = addListener;
exports.removeListener = removeListener;
exports.getAllListeners = getAllListeners;

var _ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');

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