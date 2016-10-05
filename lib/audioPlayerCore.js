'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UpdateTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* global Audio */

exports.addTracks = addTracks;
exports.play = play;
exports.stop = stop;
exports.next = next;
exports.prev = prev;
exports.seek = seek;
exports.goto = goto;
exports.turnOnAutoplay = turnOnAutoplay;
exports.addListener = addListener;
exports.removeListener = removeListener;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var audio = new Audio();
var tracks = void 0;
var currentTrackIndex = 0;
var timer = void 0;
var listeners = {};
var lastListenerId = 0;

var UpdateTypes = exports.UpdateTypes = {
    PLAY: 'PLAY',
    PAUSE: 'PAUSE',
    STOP: 'STOP',
    SEEK: 'SEEK',
    TRACK_SWITCH: 'TRACK_SWITCH',
    TICK: 'TICK'
};

function isPlaying() {
    return audio.duration > 0 && !audio.paused;
}

function zeroPadNumber(number) {
    return number < 10 ? '0' + number : number;
}

function formatTime(seconds) {
    if (seconds) {
        var m = Math.round(seconds / 60);
        var s = Math.round(seconds) % 60;
        return zeroPadNumber(m) + ':' + zeroPadNumber(s);
    } else {
        return '--:--';
    }
}

function updateListeners(type) {
    _lodash2.default.each(_lodash2.default.values(listeners), function (listener) {
        return listener({
            type: type,
            currentTrack: _extends({}, tracks[currentTrackIndex], {
                number: currentTrackIndex + 1,
                durationSeconds: audio.duration,
                durationString: formatTime(audio.duration)
            }),
            isPlaying: isPlaying(),
            secondsElapsed: audio.currentTime,
            secondsRemaining: audio.duration - audio.currentTime,
            timeElapsed: formatTime(audio.currentTime),
            timeRemaining: formatTime(audio.duration - audio.currentTime)
        });
    });
}

function switchTrack() {
    var wasStopped = audio.currentTime === 0;
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

function addTracks(newTracks) {
    if (_lodash2.default.isEmpty(tracks)) {
        audio.src = newTracks[0].file;
    }
    tracks = newTracks;
}

function play() {
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
}

function stop() {
    audio.pause();
    audio.currentTime = 0;
    stopTimer();
    updateListeners(UpdateTypes.STOP);
}

function next() {
    currentTrackIndex = currentTrackIndex + 1 >= _lodash2.default.size(tracks) ? 0 : currentTrackIndex + 1;
    switchTrack();
}

function prev() {
    currentTrackIndex = currentTrackIndex - 1 < 0 ? _lodash2.default.size(tracks) - 1 : currentTrackIndex - 1;
    switchTrack();
}

function seek(seconds) {
    audio.currentTime = seconds;
    updateListeners(UpdateTypes.SEEK);
}

function goto(number) {
    currentTrackIndex = number - 1;
    switchTrack();
}

function turnOnAutoplay() {
    audio.autoplay = true;
}

function addListener(callback) {
    listeners[String(++lastListenerId)] = callback;
    return lastListenerId;
}

function removeListener(id) {
    delete listeners[String(id)];
}

audio.addEventListener('durationchange', updateListeners);

audio.addEventListener('ended', function () {
    next();
    play();
});