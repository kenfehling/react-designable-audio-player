react-designable-audio-player
==================

An audio player library for [React](https://facebook.github.io/react) that lets you use your own UI component.

Control functions and state are provided to your UI component as props from an [Higher Order Component](https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e#.d40k7bfb3) (HOC).

Built on top of the HTML5 [&lt;audio&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio) element.

[![build status](https://travis-ci.org/kenfehling/react-designable-audio-player.svg?branch=master)](https://travis-ci.org/kenfehling/react-designable-audio-player)

## Online demo
[kenfehling.github.io/react-designable-audio-player](https://kenfehling.github.io/react-designable-audio-player/)

## Installation
```
npm install --save kenfehling/react-designable-audio-player
```

## Usage

You can create whatever React component you like for the player view.
The library [provides many props](#provided-props) for your component to use, as well as some [prebuilt components](#prebuilt-components) for common player elements.

```js
import React from 'react';
import {connectAudioPlayer} from 'react-designable-audio-player';

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
```

Create an array of objects to hold all of your tracks. Each object must have an `artist`, `title`, and `file`.
```js
const tracks = [{
    artist: '8BIT-SOLDIER',
    title: 'Close Your Eyes',
    file: 'https://ia601209.us.archive.org/20/items/Chiptune_Songs_Archive/8BIT-SOLDIER/06%20Close%20Your%20Eyes.mp3'
}, {
    artist: 'Hidden Fortress',
    title: 'I Need a Quarter',
    file: 'https://ia802605.us.archive.org/14/items/upupdowndownleftrightleftrightbaslectremix/01INeedAQuartrer.mp3'
}];
```

Call `connectAudioPlayer` with your component and tracks.
```js
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
          <td>string</td>
          <td>Artist of the current track</td>
        </tr>
        <tr>
          <td>currentTrack.title</td>
          <td>string</td>
          <td>Title of the current track</td>
        </tr>
        <tr>
          <td>currentTrack.durationSeconds</td>
          <td>number</td>
          <td>Duration of the current track in seconds</td>
        </tr>
        <tr>
          <td>currentTrack.durationString</td>
          <td>string</td>
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

### Prebuilt components
`TitleMarquee`, `TimeSlider`, and `Playlist` are stylable components for common playlist elements.

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
          <td>string</td>
          <td></td>
          <td>CSS class name(s) of the title marquee container</td>
        </tr>
        <tr>
          <td>textFn</td>
          <td>function</td>
          <td></td>
          <td>Takes currentTrack, returns custom text to show inside the marquee</td>
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
          <td>string</td>
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
          <td>string</td>
          <td></td>
          <td>CSS class name(s) of the playlist container</td>
        </tr>
        <tr>
          <td>itemClassName</td>
          <td>string</td>
          <td></td>
          <td>CSS class name(s) of all of the playlist items</td>
        </tr>
        <tr>
          <td>currentItemClassName</td>
          <td>string</td>
          <td></td>
          <td>CSS class name(s) of the current playlist item</td>
        </tr>
        <tr>
          <td>itemComponent</td>
          <td>Component</td>
          <td></td>
          <td>Custom component for a playlist item</td>
        </tr>
    </tbody>
</table>