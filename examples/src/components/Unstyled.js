import {connectAudioPlayer, TitleMarquee, TimeSlider} from 'react-designable-audio-player';

const AudioPlayer = ({play, stop, next, prev, isPlaying, timeElapsed}) => (
    <div>
        <ul>
            <li onClick={play}>{isPlaying ? 'Pause' : 'Play'}</li>
            <li onClick={stop}>Stop</li>
            <li onClick={next}>Next</li>
            <li onClick={prev}>Prev</li>
        </ul>
        <TitleMarquee />
        <TimeSlider />
        <div>{timeElapsed}</div>
    </div>
);

const tracks = [
    { artist: '8BIT-SOLDIER', title: 'Close Your Eyes', file: 'https://ia601209.us.archive.org/20/items/Chiptune_Songs_Archive/8BIT-SOLDIER/06%20Close%20Your%20Eyes.mp3' },
    { artist: 'Doobie Brothers', title: 'Taking it to the Streets', file: '/public/song2.mp3' },
];

export default connectAudioPlayer(AudioPlayer, tracks);