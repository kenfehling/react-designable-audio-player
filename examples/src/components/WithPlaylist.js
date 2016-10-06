import React from 'react';
import {connectAudioPlayer, TitleMarquee, TimeSlider} from 'react-designable-audio-player';
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
        <div className="playlist">
            {tracks.map((track, i) =>
                <div className={number === i + 1 ? 'current playlist-item' : 'playlist-item'}
                     onClick={() => number === i + 1 ? gotoAndPlay(i + 1) : goto(i + 1)} key={i}>
                    {`${i + 1}. ${track.artist} - ${track.title}`}
                </div>)}
        </div>
    </div>
);

export default connectAudioPlayer(AudioPlayer, tracks);