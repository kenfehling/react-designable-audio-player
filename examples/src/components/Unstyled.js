import React from 'react';
import {connectAudioPlayer} from 'react-designable-audio-player';
import tracks from '../tracks';

const AudioPlayer = ({play, stop, next, prev, isPlaying, timeElapsed, timeRemaining, currentTrack:{artist, title}}) => (
    <div>
        <button onClick={play}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={stop}>Stop</button>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
        <div>{artist} - {title}</div>
        <div>Time elapsed: {timeElapsed}</div>
        <div>Time remaining: {timeRemaining}</div>
    </div>
);

export default connectAudioPlayer(AudioPlayer, tracks);