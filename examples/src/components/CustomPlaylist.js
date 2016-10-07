import React from 'react';
import {connectAudioPlayer, Playlist} from 'react-designable-audio-player';
import './CustomPlaylist.css';
import tracks from '../tracks';

const PlaylistItemComponent = ({number, artist, title}) => (
  <div title={`${artist} - ${title}`}>{number}</div>
);

const AudioPlayer = ({play, stop, next, prev, goto, gotoAndPlay, isPlaying, timeElapsed, currentTrack:{number}}) => (
    <div className="cp container">
        <div className="controls">
            <i className="fa fa-chevron-circle-left" onClick={prev} />
            <i className={`fa fa-${isPlaying ? 'pause-circle' : 'play-circle'}`} onClick={play} />
            <i className="fa fa-stop-circle" onClick={stop} />
            <i className="fa fa-chevron-circle-right" onClick={next} />
        </div>
        <Playlist className="playlist" itemComponent={PlaylistItemComponent}
                  itemClassName="playlist-item" currentItemClassName="current" />
    </div>
);

export default connectAudioPlayer(AudioPlayer, tracks);