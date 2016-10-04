import { Component, PropTypes, createElement } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { play, stop, next, prev, seek, addTracks, turnOnAutoplay, addListener, UpdateTypes } from './audioPlayerCore';
import _ from 'lodash';

export function connectAudioPlayer(WrappedComponent, tracks, options={autoplay:false}) {
    class Connect extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isPlaying: false,
                currentTrack: {},
                secondsElapsed: 0,
                secondsRemaining: 0,
                timeElapsed: null,
                timeRemaining: null,
            };
        }

        componentDidMount() {
            addListener(update => this.setState(_.omit(update, 'type')));
            if (options.autoplay) {
                turnOnAutoplay();
            }
            addTracks(tracks);
        }

        render() {
            const props = {
                play,
                stop,
                next,
                prev,
                seek,
                isPlaying: this.state.isPlaying,
                currentTrack: this.state.currentTrack,
                secondsElapsed: this.state.secondsElapsed,
                secondsRemaining: this.state.secondsRemaining,
                timeElapsed: this.state.timeElapsed,
                timeRemaining: this.state.timeRemaining,
            };
            return createElement(WrappedComponent, props);
        }
    }
    return Connect;
}


/* TitleMarquee component */

function insertStyle(style) {
    for (let i = 0; i < document.styleSheets.length; i++) {
        try {
            document.styleSheets[i].insertRule(style, _.size(document.styleSheets[i].cssRules));
            break;
        }
        catch(e) {
            if (e.name !== "SecurityError" && e.name !== 'InvalidAccessError') {
                throw e;
            }
        }
    }
}

const animationName = 'marquee_' + Math.round(Math.random() * 10000000);
const keyframes =
    `@keyframes ${animationName} {
        0% {-webkit-transform:translate(0, 0)} 
        100% {-webkit-transform:translate(-100%, 0)}
     }`;
insertStyle(keyframes);

const baseStyle  = {
    paddingLeft: '100%',
    display: 'inline-block'
};

const getMarqueeStyle = duration => ({
    ...baseStyle,
    animation: `${animationName} ${duration}s infinite linear`
});

class Marquee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            on: true,
            currentTrack: {}
        };
    }

    componentDidMount() {
        addListener(update => this.setState({
            currentTrack: update.currentTrack,
            on: update.type !== UpdateTypes.TRACK_SWITCH,
        }));
    }

    render() {
        const {text, duration} = this.props;
        const {number, artist, title} = this.state.currentTrack;
        return <div style={{overflow: 'hidden', whiteSpace: 'nowrap'}}>
            <div style={this.state.on ? getMarqueeStyle(duration || 10) : baseStyle}>
                {text || `${number}. ${artist} - ${title}`}
            </div>
        </div>
    }
}

Marquee.propTypes = {
    text: PropTypes.string,
    duration: PropTypes.number
};

export const TitleMarquee = Marquee;


/* TimeSlider component */

const DefaultSliderHandle = () => (
    <div></div>
);

export class TimeSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secondsElapsed: 0,
            secondsRemaining: 0
        };
    }

    componentDidMount() {
        addListener(update => this.setState(_.pick(update, ['secondsElapsed', 'secondsRemaining'])));
    }

    render() {
        const {secondsElapsed, secondsRemaining} = this.state;
        return <Slider onChange={seek} value={secondsElapsed} min={0} max={secondsElapsed + secondsRemaining}
                       handle={this.props.handle || <DefaultSliderHandle />} {...this.props} />;
    }
}