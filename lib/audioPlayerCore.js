'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.turnOnAutoplay = exports.gotoAndPlay = exports.goto = exports.prev = exports.next = exports.seek = exports.stop = exports.play = exports.addTracks = exports.DEFAULT_TIME_STRING = exports.UpdateTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* global Audio */

exports.formatTime = formatTime;
exports.addListener = addListener;
exports.removeListener = removeListener;
exports.getAllListeners = getAllListeners;

var _ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var noop = function noop() {};
var audio = _ExecutionEnvironment.canUseDOM ? new Audio() : null;
var tracks = void 0;
var currentTrackIndex = 0;
var timer = void 0;
var listeners = {};
var lastListenerId = 0;

var UpdateTypes = exports.UpdateTypes = {
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
    _.each(_.values(listeners), function (listener) {
        return listener({
            type: type,
            tracks: tracks,
            isPlaying: isPlaying(),
            secondsElapsed: audio.currentTime,
            secondsRemaining: audio.duration - audio.currentTime,
            timeElapsed: isStopped() ? DEFAULT_TIME_STRING : formatTime(audio.currentTime),
            timeRemaining: formatTime(audio.duration - audio.currentTime),
            currentTrack: _extends({}, tracks[currentTrackIndex], {
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
    if (_.isEmpty(tracks)) {
        audio.src = newTracks[0].file;
    }
    tracks = _.map(newTracks, function (t, i) {
        return _extends({}, t, { number: i + 1 });
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
    currentTrackIndex = currentTrackIndex + 1 >= _.size(tracks) ? 0 : currentTrackIndex + 1;
    switchTrack();
} : noop;

var prev = exports.prev = _ExecutionEnvironment.canUseDOM ? function () {
    currentTrackIndex = currentTrackIndex - 1 < 0 ? _.size(tracks) - 1 : currentTrackIndex - 1;
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