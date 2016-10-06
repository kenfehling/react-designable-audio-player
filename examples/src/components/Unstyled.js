import React from 'react';
import {connectAudioPlayer} from 'react-designable-audio-player';
import tracks from '../tracks';

const AudioPlayer = ({play, stop, next, prev, isPlaying, timeElapsed, timeRemaining, currentTrack:{artist, title}}) => (
    <div>
        <ul>
            <li><a href="#" onClick={play}>{isPlaying ? 'Pause' : 'Play'}</a></li>
            <li><a href="#" onClick={stop}>Stop</a></li>
            <li><a href="#" onClick={next}>Next</a></li>
            <li><a href="#" onClick={prev}>Prev</a></li>
        </ul>
        <div>{artist} - {title}</div>
        <br />
        <div>Time elapsed: {timeElapsed}</div>
        <div>Time remaining: {timeRemaining}</div>
    </div>
);

export default connectAudioPlayer(AudioPlayer, tracks);