react-designable-audio-player
==================

An audio player library for [React](https://facebook.github.io/react) that lets you use your own UI component.
Control functions and state are provided to your UI component as props from an HOC ([Higher Level Component](https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e#.d40k7bfb3)).
Built on top of the HTML5 &lt;audio&gt; element.

## Installation
```
npm install --save kenfehling/react-designable-audio-player
```

##Usage
```js
import {connectAudioPlayer, TitleMarquee, TimeSlider} from 'react-designable-audio-player';

const AudioPlayer = ({play, stop, next, prev, isPlaying, timeElapsed}) => (
    <div className={styles.container}>
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
```

## API
Exports:
- `connectAudioPlayer`
- `TitleMarquee`
- `TimeSlider`
- `Playlist`

### connectAudioPlayer
This is all you need to connect your custom UI component to the player library.

`connectAudioPlayer(Component, tracks, [options])`

#### options
<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th>name</th>
        <th>type</th>
        <th>default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>autoplay</td>
          <td>bool</td>
          <td>false</td>
          <td>Should the first track start playing automatically?</td>
        </tr>
    </tbody>
</table>

#### Provided props

A number of props are provided for your component to use.

##### Functions
<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th>name</th>
        <th>params</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>play</td>
          <td></td>
          <td>Play the current track, or pause if already playing</td>
        </tr>
        <tr>
          <td>stop</td>
          <td></td>
          <td>Stop the playback</td>
        </tr>
        <tr>
          <td>seek</td>
          <td>number</td>
          <td>Seek to a point in the current track (in seconds)</td>
        </tr>
        <tr>
          <td>next</td>
          <td></td>
          <td>Go to the next track in the playlist</td>
        </tr>
        <tr>
          <td>prev</td>
          <td></td>
          <td>Go to the previous track in the playlist</td>
        </tr>
        <tr>
          <td>goto</td>
          <td>number</td>
          <td>Go to a certain track number (starting with 1)</td>
        </tr>
        <tr>
          <td>gotoAndPlay</td>
          <td>number</td>
          <td>Go to a certain track number (starting with 1) and start playing</td>
        </tr>
    </tbody>
</table>

##### State
<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th>name</th>
        <th>type</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>currentTrack.number</td>
          <td>number</td>
          <td>Number of the current track (starting with 1)</td>
        </tr>
        <tr>
          <td>currentTrack.artist</td>
          <td>String</td>
          <td>Artist of the current track</td>
        </tr>
        <tr>
          <td>currentTrack.title</td>
          <td>String</td>
          <td>Title of the current track</td>
        </tr>
        <tr>
          <td>currentTrack.durationSeconds</td>
          <td>number</td>
          <td>Duration of the current track in seconds</td>
        </tr>
        <tr>
          <td>currentTrack.durationString</td>
          <td>String</td>
          <td>Duration of the current track as a string (mm:ss)</td>
        </tr>
        <tr>
          <td>isPlaying</td>
          <td>bool</td>
          <td>Is the player currently playing?</td>
        </tr>
        <tr>
          <td>timeElapsed</td>
          <td>string</td>
          <td>Time elapsed in the current track as a string (mm:ss)</td>
        </tr>
        <tr>
          <td>timeRemaining</td>
          <td>string</td>
          <td>Time remaining in the current track as a string (mm:ss)</td>
        </tr>
        <tr>
          <td>secondsElapsed</td>
          <td>number</td>
          <td>Time elapsed in the current track in seconds</td>
        </tr>
        <tr>
          <td>secondsRemaining</td>
          <td>number</td>
          <td>Time remaining in the current track in seconds</td>
        </tr>
    </tbody>
</table>

#### TitleMarquee
Use the `TitleMarquee` component to show the current tracking playing.

##### Props
<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th>name</th>
        <th>type</th>
        <th>default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>className</td>
          <td>String</td>
          <td></td>
          <td>CSS class name(s) of the title marquee container</td>
        </tr>
        <tr>
          <td>text</td>
          <td>String</td>
          <td>#. artist - title</td>
          <td>Text to show inside the marquee</td>
        </tr>
        <tr>
          <td>duration</td>
          <td>number</td>
          <td>10</td>
          <td>Duration of the scroll in seconds</td>
        </tr>
    </tbody>
</table>

#### TimeSlider
The `TimeSlider` component shows the current progress and allows seeking within the playing track.
The component is based on [rc-slider](https://github.com/react-component/slider#rc-slider) and all props and other customizations for that library are available.

##### Props
<table class="table table-bordered table-striped">
    <thead>
        <tr>
            <th>name</th>
            <th>type</th>
            <th>default</th>
            <th>description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
          <td>className</td>
          <td>String</td>
          <td></td>
          <td>CSS class name(s) of the time slider container</td>
        </tr>
    </tbody>
</table>

#### Playlist
The `Playlist` shows all of the tracks, indicates the current track, and handles select and click events appropriately.

##### Props
<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th>name</th>
        <th>type</th>
        <th>default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>className</td>
          <td>String</td>
          <td></td>
          <td>CSS class name(s) of the playlist container</td>
        </tr>
        <tr>
          <td>itemClassName</td>
          <td>String</td>
          <td></td>
          <td>CSS class name(s) of all of the playlist items</td>
        </tr>
        <tr>
          <td>currentItemClassName</td>
          <td>String</td>
          <td></td>
          <td>CSS class name(s) of the current selected playlist item</td>
        </tr>
    </tbody>
</table>