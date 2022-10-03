import $zIto6$react, {createElement as $zIto6$createElement, Component as $zIto6$Component} from "react";
import $zIto6$proptypes from "prop-types";
import {canUseDOM as $zIto6$canUseDOM} from "fbjs/lib/ExecutionEnvironment";
import $zIto6$rcslider from "rc-slider";
import $zIto6$insertcss from "insert-css";







const $0dd82c10f9603d2e$var$noop = ()=>{};
const $0dd82c10f9603d2e$var$audio = (0, $zIto6$canUseDOM) ? new Audio() : null;
let $0dd82c10f9603d2e$var$tracks;
let $0dd82c10f9603d2e$var$currentTrackIndex = 0;
let $0dd82c10f9603d2e$var$timer;
let $0dd82c10f9603d2e$var$listeners = {};
let $0dd82c10f9603d2e$var$lastListenerId = 0;
const $0dd82c10f9603d2e$export$367277103c25ce5d = {
    LISTENER_ADDED: "LISTENER_ADDED",
    TRACKS_ADDED: "TRACKS_ADDED",
    LOAD: "LOAD",
    PLAY: "PLAY",
    PAUSE: "PAUSE",
    STOP: "STOP",
    SEEK: "SEEK",
    TRACK_SWITCH: "TRACK_SWITCH",
    TICK: "TICK"
};
const $0dd82c10f9603d2e$export$f7351e61402bc842 = "--:--";
function $0dd82c10f9603d2e$var$isPlaying() {
    return $0dd82c10f9603d2e$var$audio.duration > 0 && !$0dd82c10f9603d2e$var$audio.paused;
}
function $0dd82c10f9603d2e$var$isStopped() {
    return !$0dd82c10f9603d2e$var$audio.currentTime;
}
function $0dd82c10f9603d2e$var$zeroPadNumber(number) {
    return number < 10 ? "0" + number : number;
}
function $0dd82c10f9603d2e$export$3203edd9e5edd663(seconds) {
    if (typeof seconds === "number" && seconds >= 0) {
        const m = Math.floor(seconds / 60);
        const s = Math.round(seconds) % 60;
        return $0dd82c10f9603d2e$var$zeroPadNumber(m) + ":" + $0dd82c10f9603d2e$var$zeroPadNumber(s);
    } else return $0dd82c10f9603d2e$export$f7351e61402bc842;
}
function $0dd82c10f9603d2e$var$updateListeners(type) {
    Object.values($0dd82c10f9603d2e$var$listeners).forEach((listener)=>listener({
            type: type,
            tracks: $0dd82c10f9603d2e$var$tracks,
            isPlaying: $0dd82c10f9603d2e$var$isPlaying(),
            secondsElapsed: $0dd82c10f9603d2e$var$audio.currentTime,
            secondsRemaining: $0dd82c10f9603d2e$var$audio.duration - $0dd82c10f9603d2e$var$audio.currentTime,
            timeElapsed: $0dd82c10f9603d2e$var$isStopped() ? $0dd82c10f9603d2e$export$f7351e61402bc842 : $0dd82c10f9603d2e$export$3203edd9e5edd663($0dd82c10f9603d2e$var$audio.currentTime),
            timeRemaining: $0dd82c10f9603d2e$export$3203edd9e5edd663($0dd82c10f9603d2e$var$audio.duration - $0dd82c10f9603d2e$var$audio.currentTime),
            currentTrack: {
                ...$0dd82c10f9603d2e$var$tracks[$0dd82c10f9603d2e$var$currentTrackIndex],
                durationSeconds: $0dd82c10f9603d2e$var$audio.duration,
                durationString: $0dd82c10f9603d2e$export$3203edd9e5edd663($0dd82c10f9603d2e$var$audio.duration)
            }
        }));
}
function $0dd82c10f9603d2e$var$switchTrack() {
    const wasStopped = $0dd82c10f9603d2e$var$isStopped();
    $0dd82c10f9603d2e$var$audio.src = $0dd82c10f9603d2e$var$tracks[$0dd82c10f9603d2e$var$currentTrackIndex].file;
    if (!wasStopped) $0dd82c10f9603d2e$export$899fbdb5fa08b653();
    $0dd82c10f9603d2e$var$updateListeners($0dd82c10f9603d2e$export$367277103c25ce5d.TRACK_SWITCH);
}
function $0dd82c10f9603d2e$var$stopTimer() {
    if ($0dd82c10f9603d2e$var$timer) {
        clearInterval($0dd82c10f9603d2e$var$timer);
        $0dd82c10f9603d2e$var$timer = null;
    }
}
const $0dd82c10f9603d2e$export$5106570dc4737ef5 = (0, $zIto6$canUseDOM) ? (newTracks)=>{
    if ($0dd82c10f9603d2e$var$tracks === undefined || $0dd82c10f9603d2e$var$tracks.length === 0) $0dd82c10f9603d2e$var$audio.src = newTracks[0].file;
    $0dd82c10f9603d2e$var$tracks = newTracks.map((t, i)=>({
            ...t,
            number: i + 1
        }));
    $0dd82c10f9603d2e$var$updateListeners($0dd82c10f9603d2e$export$367277103c25ce5d.TRACKS_ADDED);
} : $0dd82c10f9603d2e$var$noop;
const $0dd82c10f9603d2e$export$899fbdb5fa08b653 = (0, $zIto6$canUseDOM) ? ()=>{
    if ($0dd82c10f9603d2e$var$isPlaying()) {
        $0dd82c10f9603d2e$var$audio.pause();
        $0dd82c10f9603d2e$var$stopTimer();
        $0dd82c10f9603d2e$var$updateListeners($0dd82c10f9603d2e$export$367277103c25ce5d.PAUSE);
    } else {
        $0dd82c10f9603d2e$var$audio.play();
        $0dd82c10f9603d2e$var$updateListeners($0dd82c10f9603d2e$export$367277103c25ce5d.PLAY);
        $0dd82c10f9603d2e$var$timer = setInterval(()=>$0dd82c10f9603d2e$var$updateListeners($0dd82c10f9603d2e$export$367277103c25ce5d.TICK), 1000);
    }
} : $0dd82c10f9603d2e$var$noop;
const $0dd82c10f9603d2e$export$fa6813432f753b0d = (0, $zIto6$canUseDOM) ? ()=>{
    $0dd82c10f9603d2e$var$audio.pause();
    $0dd82c10f9603d2e$var$audio.currentTime = 0;
    $0dd82c10f9603d2e$var$stopTimer();
    $0dd82c10f9603d2e$var$updateListeners($0dd82c10f9603d2e$export$367277103c25ce5d.STOP);
} : $0dd82c10f9603d2e$var$noop;
const $0dd82c10f9603d2e$export$990806b8ad8af834 = (0, $zIto6$canUseDOM) ? (seconds)=>{
    $0dd82c10f9603d2e$var$audio.currentTime = seconds;
    $0dd82c10f9603d2e$var$updateListeners($0dd82c10f9603d2e$export$367277103c25ce5d.SEEK);
} : $0dd82c10f9603d2e$var$noop;
const $0dd82c10f9603d2e$export$48cfd1e771a65c4f = (0, $zIto6$canUseDOM) ? ()=>{
    $0dd82c10f9603d2e$var$currentTrackIndex = $0dd82c10f9603d2e$var$currentTrackIndex + 1 >= $0dd82c10f9603d2e$var$tracks.length ? 0 : $0dd82c10f9603d2e$var$currentTrackIndex + 1;
    $0dd82c10f9603d2e$var$switchTrack();
} : $0dd82c10f9603d2e$var$noop;
const $0dd82c10f9603d2e$export$232faf9add678146 = (0, $zIto6$canUseDOM) ? ()=>{
    $0dd82c10f9603d2e$var$currentTrackIndex = $0dd82c10f9603d2e$var$currentTrackIndex - 1 < 0 ? $0dd82c10f9603d2e$var$tracks.length - 1 : $0dd82c10f9603d2e$var$currentTrackIndex - 1;
    $0dd82c10f9603d2e$var$switchTrack();
} : $0dd82c10f9603d2e$var$noop;
const $0dd82c10f9603d2e$export$e64e955830870e84 = (0, $zIto6$canUseDOM) ? (number)=>{
    $0dd82c10f9603d2e$var$currentTrackIndex = number - 1;
    $0dd82c10f9603d2e$var$switchTrack();
} : $0dd82c10f9603d2e$var$noop;
const $0dd82c10f9603d2e$export$2735a780d8a99a8c = (0, $zIto6$canUseDOM) ? (number)=>{
    $0dd82c10f9603d2e$export$e64e955830870e84(number);
    if (!$0dd82c10f9603d2e$var$isPlaying()) $0dd82c10f9603d2e$export$899fbdb5fa08b653();
} : $0dd82c10f9603d2e$var$noop;
const $0dd82c10f9603d2e$export$9a5e51d3b9fed543 = (0, $zIto6$canUseDOM) ? ()=>{
    $0dd82c10f9603d2e$var$audio.autoplay = true;
} : $0dd82c10f9603d2e$var$noop;
function $0dd82c10f9603d2e$export$f03a6b845d3fb58b(callback) {
    $0dd82c10f9603d2e$var$listeners[String(++$0dd82c10f9603d2e$var$lastListenerId)] = callback;
    return $0dd82c10f9603d2e$var$lastListenerId;
}
function $0dd82c10f9603d2e$export$b03e9483f936dccb(id) {
    delete $0dd82c10f9603d2e$var$listeners[String(id)];
}
function $0dd82c10f9603d2e$export$72be9cc1d9b9a9ef() {
    return $0dd82c10f9603d2e$var$listeners;
}
if (0, $zIto6$canUseDOM) {
    $0dd82c10f9603d2e$var$audio.addEventListener("play", ()=>$0dd82c10f9603d2e$var$updateListeners($0dd82c10f9603d2e$export$367277103c25ce5d.PLAY));
    $0dd82c10f9603d2e$var$audio.addEventListener("durationchange", ()=>$0dd82c10f9603d2e$var$updateListeners($0dd82c10f9603d2e$export$367277103c25ce5d.LOAD));
    $0dd82c10f9603d2e$var$audio.addEventListener("ended", ()=>{
        $0dd82c10f9603d2e$export$48cfd1e771a65c4f();
        $0dd82c10f9603d2e$export$899fbdb5fa08b653();
    });
}


function $cea81b3248d66e10$export$c0b03e78d1b6fede(WrappedComponent, tracks, { autoplay: autoplay = false  } = {}) {
    class Connect extends (0, $zIto6$Component) {
        constructor(props){
            super(props);
            this.state = {
                isPlaying: false,
                currentTrack: null,
                secondsElapsed: 0,
                secondsRemaining: 0,
                timeElapsed: null,
                timeRemaining: null
            };
        }
        componentDidMount() {
            this.listenerId = (0, $0dd82c10f9603d2e$export$f03a6b845d3fb58b)((update)=>{
                const { type: type , ...state } = update;
                this.setState(state);
            });
            if (autoplay) (0, $0dd82c10f9603d2e$export$9a5e51d3b9fed543)();
            (0, $0dd82c10f9603d2e$export$5106570dc4737ef5)(tracks);
        }
        componentWillUnmount() {
            (0, $0dd82c10f9603d2e$export$b03e9483f936dccb)(this.listenerId);
        }
        render() {
            const props = {
                play: $0dd82c10f9603d2e$export$899fbdb5fa08b653,
                stop: $0dd82c10f9603d2e$export$fa6813432f753b0d,
                seek: $0dd82c10f9603d2e$export$990806b8ad8af834,
                next: $0dd82c10f9603d2e$export$48cfd1e771a65c4f,
                prev: $0dd82c10f9603d2e$export$232faf9add678146,
                goto: $0dd82c10f9603d2e$export$e64e955830870e84,
                gotoAndPlay: $0dd82c10f9603d2e$export$2735a780d8a99a8c,
                isPlaying: this.state.isPlaying,
                currentTrack: this.state.currentTrack || {},
                secondsElapsed: this.state.secondsElapsed,
                secondsRemaining: this.state.secondsRemaining,
                timeElapsed: this.state.timeElapsed,
                timeRemaining: this.state.timeRemaining
            };
            return /*#__PURE__*/ (0, $zIto6$createElement)(WrappedComponent, {
                ...this.props,
                ...props
            });
        }
    }
    return Connect;
}
/* TitleMarquee component */ const $cea81b3248d66e10$var$marqueeAnimationName = "rdap_marquee";
const $cea81b3248d66e10$var$baseStyle = {
    paddingLeft: "100%",
    display: "inline-block"
};
const $cea81b3248d66e10$var$getMarqueeStyle = (duration)=>({
        ...$cea81b3248d66e10$var$baseStyle,
        animation: `${$cea81b3248d66e10$var$marqueeAnimationName} ${duration}s infinite linear`
    });
class $cea81b3248d66e10$var$TM extends (0, $zIto6$Component) {
    constructor(props){
        super(props);
        this.state = {
            on: true,
            currentTrack: null
        };
        if (0, $zIto6$canUseDOM) (0, $zIto6$insertcss)(`
        @import url('rc-slider/assets/index.css');
        @keyframes ${$cea81b3248d66e10$var$marqueeAnimationName} {
        0% {-webkit-transform:translate(0, 0)}
        100% {-webkit-transform:translate(-100%, 0)}
       }`);
    }
    componentDidMount() {
        this.listenerId = (0, $0dd82c10f9603d2e$export$f03a6b845d3fb58b)((update)=>this.setState({
                currentTrack: update.currentTrack,
                on: update.type !== (0, $0dd82c10f9603d2e$export$367277103c25ce5d).TRACK_SWITCH
            }));
    }
    componentWillUnmount() {
        (0, $0dd82c10f9603d2e$export$b03e9483f936dccb)(this.listenerId);
    }
    render() {
        const { className: className , textFn: textFn , duration: duration  } = this.props;
        const { currentTrack: currentTrack  } = this.state;
        const { number: number , artist: artist , title: title  } = currentTrack || {};
        return /*#__PURE__*/ (0, $zIto6$react).createElement("div", {
            className: className
        }, /*#__PURE__*/ (0, $zIto6$react).createElement("div", {
            style: {
                overflow: "hidden",
                whiteSpace: "nowrap"
            }
        }, /*#__PURE__*/ (0, $zIto6$react).createElement("div", {
            style: this.state.on ? $cea81b3248d66e10$var$getMarqueeStyle(duration || 10) : $cea81b3248d66e10$var$baseStyle
        }, currentTrack ? textFn ? textFn(currentTrack) : `${number}. ${artist} - ${title}` : "")));
    }
}
$cea81b3248d66e10$var$TM.propTypes = {
    className: (0, $zIto6$proptypes).string,
    textFn: (0, $zIto6$proptypes).func,
    duration: (0, $zIto6$proptypes).number
};
const $cea81b3248d66e10$export$b59c99f47fcbedf1 = $cea81b3248d66e10$var$TM;
/* TimeSlider component */ class $cea81b3248d66e10$var$DefaultSliderHandle extends (0, $zIto6$Component) {
    render() {
        return /*#__PURE__*/ (0, $zIto6$react).createElement("div", null);
    }
}
class $cea81b3248d66e10$var$TS extends (0, $zIto6$Component) {
    constructor(props){
        super(props);
        this.state = {
            secondsElapsed: 0,
            secondsRemaining: 0
        };
    }
    componentDidMount() {
        this.listenerId = (0, $0dd82c10f9603d2e$export$f03a6b845d3fb58b)((update)=>{
            const { secondsElapsed: secondsElapsed , secondsRemaining: secondsRemaining  } = update;
            this.setState({
                secondsElapsed: secondsElapsed,
                secondsRemaining: secondsRemaining
            });
        });
    }
    componentWillUnmount() {
        (0, $0dd82c10f9603d2e$export$b03e9483f936dccb)(this.listenerId);
    }
    render() {
        const { className: className , ...props } = this.props;
        const { secondsElapsed: secondsElapsed , secondsRemaining: secondsRemaining  } = this.state;
        return /*#__PURE__*/ (0, $zIto6$react).createElement("div", {
            className: className
        }, /*#__PURE__*/ (0, $zIto6$react).createElement((0, $zIto6$rcslider), {
            onChange: (0, $0dd82c10f9603d2e$export$990806b8ad8af834),
            value: secondsElapsed,
            min: 0,
            max: secondsElapsed + secondsRemaining,
            handle: this.props.handle || /*#__PURE__*/ (0, $zIto6$react).createElement($cea81b3248d66e10$var$DefaultSliderHandle, null),
            ...props
        }));
    }
}
$cea81b3248d66e10$var$TS.propTypes = {
    className: (0, $zIto6$proptypes).string
};
const $cea81b3248d66e10$export$e296a477a1bc715a = $cea81b3248d66e10$var$TS;
/* Playlist component */ class $cea81b3248d66e10$var$PL extends (0, $zIto6$Component) {
    constructor(props){
        super(props);
        this.state = {
            tracks: [],
            currentTrack: null
        };
    }
    componentDidMount() {
        this.listenerId = (0, $0dd82c10f9603d2e$export$f03a6b845d3fb58b)((update)=>{
            const { tracks: tracks , currentTrack: currentTrack  } = update;
            this.setState({
                tracks: tracks,
                currentTrack: currentTrack
            });
        });
    }
    componentWillUnmount() {
        (0, $0dd82c10f9603d2e$export$b03e9483f936dccb)(this.listenerId);
    }
    render() {
        const { className: className , itemClassName: itemClassName , currentItemClassName: currentItemClassName , itemComponent: itemComponent  } = this.props;
        const { tracks: tracks , currentTrack: currentTrack  } = this.state;
        const { number: number  } = currentTrack || {};
        const itemStyle = {
            padding: "2px 6px",
            cursor: "pointer",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden"
        };
        return /*#__PURE__*/ (0, $zIto6$react).createElement("div", {
            className: className
        }, tracks.map((track, i)=>/*#__PURE__*/ (0, $zIto6$react).createElement("div", {
                key: i,
                className: number === i + 1 ? itemClassName + " " + currentItemClassName : itemClassName,
                style: itemStyle,
                onClick: ()=>number === i + 1 ? (0, $0dd82c10f9603d2e$export$2735a780d8a99a8c)(i + 1) : (0, $0dd82c10f9603d2e$export$e64e955830870e84)(i + 1)
            }, itemComponent ? itemComponent(track) : `${i + 1}. ${track.artist} - ${track.title}`)));
    }
}
$cea81b3248d66e10$var$PL.propTypes = {
    className: (0, $zIto6$proptypes).string,
    itemClassName: (0, $zIto6$proptypes).string,
    currentItemClassName: (0, $zIto6$proptypes).string,
    itemComponent: (0, $zIto6$proptypes).func
};
const $cea81b3248d66e10$export$a10c242a3195e585 = $cea81b3248d66e10$var$PL;




export {$cea81b3248d66e10$export$c0b03e78d1b6fede as connectAudioPlayer, $cea81b3248d66e10$export$b59c99f47fcbedf1 as TitleMarquee, $cea81b3248d66e10$export$e296a477a1bc715a as TimeSlider, $cea81b3248d66e10$export$a10c242a3195e585 as Playlist};
//# sourceMappingURL=index.js.map
