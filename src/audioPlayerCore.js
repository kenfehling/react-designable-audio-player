/* global Audio */

import _ from 'lodash';

const audio = new Audio();
let tracks;
let currentTrackIndex = 0;
let timer;
let listeners = {};
let lastListenerId = 0;

export const UpdateTypes = {
    TRACKS_ADDED: 'TRACKS_ADDED',
    LOAD: 'LOAD',
    PLAY: 'PLAY',
    PAUSE: 'PAUSE',
    STOP: 'STOP',
    SEEK: 'SEEK',
    TRACK_SWITCH: 'TRACK_SWITCH',
    TICK: 'TICK'
};

export const DEFAULT_TIME_STRING = '--:--';

function isPlaying() {
    return audio.duration > 0 && !audio.paused;
}

function isStopped() {
    return !audio.currentTime;
}

function zeroPadNumber(number) {
    return number < 10 ? '0' + number : number;
}

export function formatTime(seconds) {
    if (typeof seconds === 'number' && seconds >= 0) {
        const m = Math.floor(seconds / 60);
        const s = Math.round(seconds) % 60;
        return zeroPadNumber(m) + ':' + zeroPadNumber(s);
    }
    else {
        return DEFAULT_TIME_STRING;
    }
}

function updateListeners(type) {
    _.each(_.values(listeners), listener => listener({
        type,
        tracks: tracks,
        isPlaying: isPlaying(),
        secondsElapsed: audio.currentTime,
        secondsRemaining: audio.duration - audio.currentTime,
        timeElapsed: isStopped() ? DEFAULT_TIME_STRING : formatTime(audio.currentTime),
        timeRemaining: formatTime(audio.duration - audio.currentTime),
        currentTrack: {
            ...tracks[currentTrackIndex],
            durationSeconds: audio.duration,
            durationString: formatTime(audio.duration)
        }
    }));
}

function switchTrack() {
    const wasStopped = isStopped();
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

export function addTracks(newTracks) {
    if (_.isEmpty(tracks)) {
        audio.src = newTracks[0].file;
    }
    tracks = _.map(newTracks, (t, i) => ({...t, number: i + 1}));
    updateListeners(UpdateTypes.TRACKS_ADDED);
}

export function play() {
    if (isPlaying()) {
        audio.pause();
        stopTimer();
        updateListeners(UpdateTypes.PAUSE);
    }
    else {
        audio.play();
        updateListeners(UpdateTypes.PLAY);
        timer = setInterval(() => updateListeners(UpdateTypes.TICK), 1000);
    }
}

export function stop() {
    audio.pause();
    audio.currentTime = 0;
    stopTimer();
    updateListeners(UpdateTypes.STOP);
}

export function seek(seconds) {
    audio.currentTime = seconds;
    updateListeners(UpdateTypes.SEEK);
}

export function next() {
    currentTrackIndex = currentTrackIndex + 1 >= _.size(tracks) ? 0 : currentTrackIndex + 1;
    switchTrack();
}

export function prev() {
    currentTrackIndex = currentTrackIndex - 1 < 0 ? _.size(tracks) - 1 : currentTrackIndex - 1;
    switchTrack();
}

export function goto(number) {
    currentTrackIndex = number - 1;
    switchTrack();
}

export function gotoAndPlay(number) {
    goto(number);
    if (!isPlaying()) {
        play();
    }
}

export function turnOnAutoplay() {
    audio.autoplay = true;
}

export function addListener(callback) {
    listeners[String(++lastListenerId)] = callback;
    return lastListenerId;
}

export function removeListener(id) {
    delete listeners[String(id)];
}

export function getAllListeners() {
    return listeners;
}

audio.addEventListener('play', () => updateListeners(UpdateTypes.PLAY));
audio.addEventListener('durationchange', () => updateListeners(UpdateTypes.LOAD));

audio.addEventListener('ended', () => {
    next();
    play();
});