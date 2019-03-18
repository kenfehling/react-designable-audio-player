import React from 'react';
import {connectAudioPlayer, Tracks, Track} from 'react-designable-audio-player';

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

const TracksComponent = () => (
  <Tracks>
    <Track title='Flung' artist='Ken Fehling'
           file='//archive.org/download/kenfehling_music/flung.mp3'>
      Ken Fehling - Flung
    </Track>
  </Tracks>
);

export default connectAudioPlayer(AudioPlayer, TracksComponent);
