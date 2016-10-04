/* global Audio */

import _ from 'lodash';

const audio = new Audio();
let tracks;
let currentTrackIndex = 0;
let timer;
let listeners = {};
let lastListenerId = 0;

export const UpdateTypes = {
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
        const m = Math.round(seconds / 60);
        const s = Math.round(seconds) % 60;
        return zeroPadNumber(m) + ':' + zeroPadNumber(s);
    }
    else {
        return '--:--';
    }
}

function updateListeners(type) {
    _.each(_.values(listeners), listener => listener({
        type,
        currentTrack: {
            ...tracks[currentTrackIndex],
            number: currentTrackIndex + 1,
            durationSeconds: audio.duration,
            durationString: formatTime(audio.duration)
        },
        isPlaying: isPlaying(),
        secondsElapsed: audio.currentTime,
        secondsRemaining: audio.duration - audio.currentTime,
        timeElapsed: formatTime(audio.currentTime),
        timeRemaining: formatTime(audio.duration - audio.currentTime)
    }));
}

function switchTrack() {
    const wasStopped = audio.currentTime === 0;
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
    tracks = newTracks;
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

export function next() {
    currentTrackIndex = currentTrackIndex + 1 >= _.size(tracks) ? 0 : currentTrackIndex + 1;
    switchTrack();
}

export function prev() {
    currentTrackIndex = currentTrackIndex - 1 < 0 ? _.size(tracks) - 1 : currentTrackIndex - 1;
    switchTrack();
}

export function seek(seconds) {
    audio.currentTime = seconds;
    updateListeners(UpdateTypes.SEEK);
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

audio.addEventListener('durationchange', updateListeners);

audio.addEventListener('ended', () => {
    next();
    play();
});