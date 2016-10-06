import React from 'react';
import {connectAudioPlayer, TitleMarquee, TimeSlider, Playlist} from 'react-designable-audio-player';
import './WithPlaylist.css';
import tracks from '../tracks';

const AudioPlayer = ({play, stop, next, prev, goto, gotoAndPlay, isPlaying, timeElapsed, currentTrack:{number}}) => (
    <div className="wp container">
        <div className="player">
            <div className="controls">
                <i className="fa fa-chevron-circle-left" onClick={prev} />
                <i className={`fa fa-${isPlaying ? 'pause-circle' : 'play-circle'}`} onClick={play} />
                <i className="fa fa-stop-circle" onClick={stop} />
                <i className="fa fa-chevron-circle-right" onClick={next} />
            </div>
            <div className="current-track">
                <TitleMarquee />
            </div>
            <div className="time-slider">
                <TimeSlider />
            </div>
            <div className="time">{timeElapsed}</div>
        </div>
        <Playlist className="playlist" itemClassName='playlist-item' currentItemClassName='current playlist-item' />
    </div>
);

export default connectAudioPlayer(AudioPlayer, tracks);