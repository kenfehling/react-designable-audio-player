import {connectAudioPlayer, TitleMarquee, TimeSlider} from 'react-designable-audio-player';
import './Simple.css';

const AudioPlayer = ({play, stop, next, prev, isPlaying, timeElapsed}) => (
    <div className="container">
        <div className="controls">
            <i className="fa fa-step-backward" onClick={prev} />
            <i className={`fa fa-${isPlaying ? 'pause' : 'play'}`} onClick={play} />
            <i className="fa fa-stop" onClick={stop} />
            <i className="fa fa-step-forward" onClick={next} />
        </div>
        <div className="current-track">
            <TitleMarquee />
        </div>
        <div className="time-slider">
            <TimeSlider />
        </div>
        <div className="time">{timeElapsed}</div>
    </div>
);

const tracks = [
    { artist: '8BIT-SOLDIER', title: 'Close Your Eyes', file: 'https://ia601209.us.archive.org/20/items/Chiptune_Songs_Archive/8BIT-SOLDIER/06%20Close%20Your%20Eyes.mp3' },
    { artist: 'Doobie Brothers', title: 'Taking it to the Streets', file: '/public/song2.mp3' },
];

export default connectAudioPlayer(AudioPlayer, tracks);