var $728Zb$react = require("react");
var $728Zb$proptypes = require("prop-types");
var $728Zb$fbjslibExecutionEnvironment = require("fbjs/lib/ExecutionEnvironment");
var $728Zb$rcslider = require("rc-slider");
var $728Zb$insertcss = require("insert-css");
var $728Zb$bundletextrcsliderassetsindexcss = require("bundle-text:rc-slider/assets/index.css");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "connectAudioPlayer", () => $8fa9287ca73b387b$export$c0b03e78d1b6fede);
$parcel$export(module.exports, "TitleMarquee", () => $8fa9287ca73b387b$export$b59c99f47fcbedf1);
$parcel$export(module.exports, "TimeSlider", () => $8fa9287ca73b387b$export$e296a477a1bc715a);
$parcel$export(module.exports, "Playlist", () => $8fa9287ca73b387b$export$a10c242a3195e585);







const $7bdda7b4f80009e0$var$noop = ()=>{};
const $7bdda7b4f80009e0$var$audio = (0, $728Zb$fbjslibExecutionEnvironment.canUseDOM) ? new Audio() : null;
let $7bdda7b4f80009e0$var$tracks;
let $7bdda7b4f80009e0$var$currentTrackIndex = 0;
let $7bdda7b4f80009e0$var$timer;
let $7bdda7b4f80009e0$var$listeners = {};
let $7bdda7b4f80009e0$var$lastListenerId = 0;
const $7bdda7b4f80009e0$export$367277103c25ce5d = {
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
const $7bdda7b4f80009e0$export$f7351e61402bc842 = "--:--";
function $7bdda7b4f80009e0$var$isPlaying() {
    return $7bdda7b4f80009e0$var$audio.duration > 0 && !$7bdda7b4f80009e0$var$audio.paused;
}
function $7bdda7b4f80009e0$var$isStopped() {
    return !$7bdda7b4f80009e0$var$audio.currentTime;
}
function $7bdda7b4f80009e0$var$zeroPadNumber(number) {
    return number < 10 ? "0" + number : number;
}
function $7bdda7b4f80009e0$export$3203edd9e5edd663(seconds) {
    if (typeof seconds === "number" && seconds >= 0) {
        const m = Math.floor(seconds / 60);
        const s = Math.round(seconds) % 60;
        return $7bdda7b4f80009e0$var$zeroPadNumber(m) + ":" + $7bdda7b4f80009e0$var$zeroPadNumber(s);
    } else return $7bdda7b4f80009e0$export$f7351e61402bc842;
}
function $7bdda7b4f80009e0$var$updateListeners(type) {
    Object.values($7bdda7b4f80009e0$var$listeners).forEach((listener)=>listener({
            type: type,
            tracks: $7bdda7b4f80009e0$var$tracks,
            isPlaying: $7bdda7b4f80009e0$var$isPlaying(),
            secondsElapsed: $7bdda7b4f80009e0$var$audio.currentTime,
            secondsRemaining: $7bdda7b4f80009e0$var$audio.duration - $7bdda7b4f80009e0$var$audio.currentTime,
            timeElapsed: $7bdda7b4f80009e0$var$isStopped() ? $7bdda7b4f80009e0$export$f7351e61402bc842 : $7bdda7b4f80009e0$export$3203edd9e5edd663($7bdda7b4f80009e0$var$audio.currentTime),
            timeRemaining: $7bdda7b4f80009e0$export$3203edd9e5edd663($7bdda7b4f80009e0$var$audio.duration - $7bdda7b4f80009e0$var$audio.currentTime),
            currentTrack: {
                ...$7bdda7b4f80009e0$var$tracks[$7bdda7b4f80009e0$var$currentTrackIndex],
                durationSeconds: $7bdda7b4f80009e0$var$audio.duration,
                durationString: $7bdda7b4f80009e0$export$3203edd9e5edd663($7bdda7b4f80009e0$var$audio.duration)
            }
        }));
}
function $7bdda7b4f80009e0$var$switchTrack() {
    const wasStopped = $7bdda7b4f80009e0$var$isStopped();
    $7bdda7b4f80009e0$var$audio.src = $7bdda7b4f80009e0$var$tracks[$7bdda7b4f80009e0$var$currentTrackIndex].file;
    if (!wasStopped) $7bdda7b4f80009e0$export$899fbdb5fa08b653();
    $7bdda7b4f80009e0$var$updateListeners($7bdda7b4f80009e0$export$367277103c25ce5d.TRACK_SWITCH);
}
function $7bdda7b4f80009e0$var$stopTimer() {
    if ($7bdda7b4f80009e0$var$timer) {
        clearInterval($7bdda7b4f80009e0$var$timer);
        $7bdda7b4f80009e0$var$timer = null;
    }
}
const $7bdda7b4f80009e0$export$5106570dc4737ef5 = (0, $728Zb$fbjslibExecutionEnvironment.canUseDOM) ? (newTracks)=>{
    if ($7bdda7b4f80009e0$var$tracks === undefined || $7bdda7b4f80009e0$var$tracks.length === 0) $7bdda7b4f80009e0$var$audio.src = newTracks[0].file;
    $7bdda7b4f80009e0$var$tracks = newTracks.map((t, i)=>({
            ...t,
            number: i + 1
        }));
    $7bdda7b4f80009e0$var$updateListeners($7bdda7b4f80009e0$export$367277103c25ce5d.TRACKS_ADDED);
} : $7bdda7b4f80009e0$var$noop;
const $7bdda7b4f80009e0$export$899fbdb5fa08b653 = (0, $728Zb$fbjslibExecutionEnvironment.canUseDOM) ? ()=>{
    if ($7bdda7b4f80009e0$var$isPlaying()) {
        $7bdda7b4f80009e0$var$audio.pause();
        $7bdda7b4f80009e0$var$stopTimer();
        $7bdda7b4f80009e0$var$updateListeners($7bdda7b4f80009e0$export$367277103c25ce5d.PAUSE);
    } else {
        $7bdda7b4f80009e0$var$audio.play();
        $7bdda7b4f80009e0$var$updateListeners($7bdda7b4f80009e0$export$367277103c25ce5d.PLAY);
        $7bdda7b4f80009e0$var$timer = setInterval(()=>$7bdda7b4f80009e0$var$updateListeners($7bdda7b4f80009e0$export$367277103c25ce5d.TICK), 1000);
    }
} : $7bdda7b4f80009e0$var$noop;
const $7bdda7b4f80009e0$export$fa6813432f753b0d = (0, $728Zb$fbjslibExecutionEnvironment.canUseDOM) ? ()=>{
    $7bdda7b4f80009e0$var$audio.pause();
    $7bdda7b4f80009e0$var$audio.currentTime = 0;
    $7bdda7b4f80009e0$var$stopTimer();
    $7bdda7b4f80009e0$var$updateListeners($7bdda7b4f80009e0$export$367277103c25ce5d.STOP);
} : $7bdda7b4f80009e0$var$noop;
const $7bdda7b4f80009e0$export$990806b8ad8af834 = (0, $728Zb$fbjslibExecutionEnvironment.canUseDOM) ? (seconds)=>{
    $7bdda7b4f80009e0$var$audio.currentTime = seconds;
    $7bdda7b4f80009e0$var$updateListeners($7bdda7b4f80009e0$export$367277103c25ce5d.SEEK);
} : $7bdda7b4f80009e0$var$noop;
const $7bdda7b4f80009e0$export$48cfd1e771a65c4f = (0, $728Zb$fbjslibExecutionEnvironment.canUseDOM) ? ()=>{
    $7bdda7b4f80009e0$var$currentTrackIndex = $7bdda7b4f80009e0$var$currentTrackIndex + 1 >= $7bdda7b4f80009e0$var$tracks.length ? 0 : $7bdda7b4f80009e0$var$currentTrackIndex + 1;
    $7bdda7b4f80009e0$var$switchTrack();
} : $7bdda7b4f80009e0$var$noop;
const $7bdda7b4f80009e0$export$232faf9add678146 = (0, $728Zb$fbjslibExecutionEnvironment.canUseDOM) ? ()=>{
    $7bdda7b4f80009e0$var$currentTrackIndex = $7bdda7b4f80009e0$var$currentTrackIndex - 1 < 0 ? $7bdda7b4f80009e0$var$tracks.length - 1 : $7bdda7b4f80009e0$var$currentTrackIndex - 1;
    $7bdda7b4f80009e0$var$switchTrack();
} : $7bdda7b4f80009e0$var$noop;
const $7bdda7b4f80009e0$export$e64e955830870e84 = (0, $728Zb$fbjslibExecutionEnvironment.canUseDOM) ? (number)=>{
    $7bdda7b4f80009e0$var$currentTrackIndex = number - 1;
    $7bdda7b4f80009e0$var$switchTrack();
} : $7bdda7b4f80009e0$var$noop;
const $7bdda7b4f80009e0$export$2735a780d8a99a8c = (0, $728Zb$fbjslibExecutionEnvironment.canUseDOM) ? (number)=>{
    $7bdda7b4f80009e0$export$e64e955830870e84(number);
    if (!$7bdda7b4f80009e0$var$isPlaying()) $7bdda7b4f80009e0$export$899fbdb5fa08b653();
} : $7bdda7b4f80009e0$var$noop;
const $7bdda7b4f80009e0$export$9a5e51d3b9fed543 = (0, $728Zb$fbjslibExecutionEnvironment.canUseDOM) ? ()=>{
    $7bdda7b4f80009e0$var$audio.autoplay = true;
} : $7bdda7b4f80009e0$var$noop;
function $7bdda7b4f80009e0$export$f03a6b845d3fb58b(callback) {
    $7bdda7b4f80009e0$var$listeners[String(++$7bdda7b4f80009e0$var$lastListenerId)] = callback;
    return $7bdda7b4f80009e0$var$lastListenerId;
}
function $7bdda7b4f80009e0$export$b03e9483f936dccb(id) {
    delete $7bdda7b4f80009e0$var$listeners[String(id)];
}
function $7bdda7b4f80009e0$export$72be9cc1d9b9a9ef() {
    return $7bdda7b4f80009e0$var$listeners;
}
if (0, $728Zb$fbjslibExecutionEnvironment.canUseDOM) {
    $7bdda7b4f80009e0$var$audio.addEventListener("play", ()=>$7bdda7b4f80009e0$var$updateListeners($7bdda7b4f80009e0$export$367277103c25ce5d.PLAY));
    $7bdda7b4f80009e0$var$audio.addEventListener("durationchange", ()=>$7bdda7b4f80009e0$var$updateListeners($7bdda7b4f80009e0$export$367277103c25ce5d.LOAD));
    $7bdda7b4f80009e0$var$audio.addEventListener("ended", ()=>{
        $7bdda7b4f80009e0$export$48cfd1e771a65c4f();
        $7bdda7b4f80009e0$export$899fbdb5fa08b653();
    });
}


function $8fa9287ca73b387b$export$c0b03e78d1b6fede(WrappedComponent, tracks, { autoplay: autoplay = false  } = {}) {
    class Connect extends (0, $728Zb$react.Component) {
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
            let shadow = this.attachShadow({
                mode: "open"
            });
            let styleEl = document.createElement("style");
            styleEl.textContent = (0, ($parcel$interopDefault($728Zb$bundletextrcsliderassetsindexcss)));
            shadow.appendChild((0, ($parcel$interopDefault($728Zb$bundletextrcsliderassetsindexcss))));
        }
        componentDidMount() {
            this.listenerId = (0, $7bdda7b4f80009e0$export$f03a6b845d3fb58b)((update)=>{
                const { type: type , ...state } = update;
                this.setState(state);
            });
            if (autoplay) (0, $7bdda7b4f80009e0$export$9a5e51d3b9fed543)();
            (0, $7bdda7b4f80009e0$export$5106570dc4737ef5)(tracks);
        }
        componentWillUnmount() {
            (0, $7bdda7b4f80009e0$export$b03e9483f936dccb)(this.listenerId);
        }
        render() {
            const props = {
                play: $7bdda7b4f80009e0$export$899fbdb5fa08b653,
                stop: $7bdda7b4f80009e0$export$fa6813432f753b0d,
                seek: $7bdda7b4f80009e0$export$990806b8ad8af834,
                next: $7bdda7b4f80009e0$export$48cfd1e771a65c4f,
                prev: $7bdda7b4f80009e0$export$232faf9add678146,
                goto: $7bdda7b4f80009e0$export$e64e955830870e84,
                gotoAndPlay: $7bdda7b4f80009e0$export$2735a780d8a99a8c,
                isPlaying: this.state.isPlaying,
                currentTrack: this.state.currentTrack || {},
                secondsElapsed: this.state.secondsElapsed,
                secondsRemaining: this.state.secondsRemaining,
                timeElapsed: this.state.timeElapsed,
                timeRemaining: this.state.timeRemaining
            };
            return /*#__PURE__*/ (0, $728Zb$react.createElement)(WrappedComponent, {
                ...this.props,
                ...props
            });
        }
    }
    return Connect;
}
/* TitleMarquee component */ const $8fa9287ca73b387b$var$marqueeAnimationName = "rdap_marquee";
const $8fa9287ca73b387b$var$baseStyle = {
    paddingLeft: "100%",
    display: "inline-block"
};
const $8fa9287ca73b387b$var$getMarqueeStyle = (duration)=>({
        ...$8fa9287ca73b387b$var$baseStyle,
        animation: `${$8fa9287ca73b387b$var$marqueeAnimationName} ${duration}s infinite linear`
    });
class $8fa9287ca73b387b$var$TM extends (0, $728Zb$react.Component) {
    constructor(props){
        super(props);
        this.state = {
            on: true,
            currentTrack: null
        };
        if (0, $728Zb$fbjslibExecutionEnvironment.canUseDOM) (0, ($parcel$interopDefault($728Zb$insertcss)))(`@keyframes ${$8fa9287ca73b387b$var$marqueeAnimationName} {
        0% {-webkit-transform:translate(0, 0)}
        100% {-webkit-transform:translate(-100%, 0)}
       }`);
    }
    componentDidMount() {
        this.listenerId = (0, $7bdda7b4f80009e0$export$f03a6b845d3fb58b)((update)=>this.setState({
                currentTrack: update.currentTrack,
                on: update.type !== (0, $7bdda7b4f80009e0$export$367277103c25ce5d).TRACK_SWITCH
            }));
    }
    componentWillUnmount() {
        (0, $7bdda7b4f80009e0$export$b03e9483f936dccb)(this.listenerId);
    }
    render() {
        const { className: className , textFn: textFn , duration: duration  } = this.props;
        const { currentTrack: currentTrack  } = this.state;
        const { number: number , artist: artist , title: title  } = currentTrack || {};
        return /*#__PURE__*/ (0, ($parcel$interopDefault($728Zb$react))).createElement("div", {
            className: className
        }, /*#__PURE__*/ (0, ($parcel$interopDefault($728Zb$react))).createElement("div", {
            style: {
                overflow: "hidden",
                whiteSpace: "nowrap"
            }
        }, /*#__PURE__*/ (0, ($parcel$interopDefault($728Zb$react))).createElement("div", {
            style: this.state.on ? $8fa9287ca73b387b$var$getMarqueeStyle(duration || 10) : $8fa9287ca73b387b$var$baseStyle
        }, currentTrack ? textFn ? textFn(currentTrack) : `${number}. ${artist} - ${title}` : "")));
    }
}
$8fa9287ca73b387b$var$TM.propTypes = {
    className: (0, ($parcel$interopDefault($728Zb$proptypes))).string,
    textFn: (0, ($parcel$interopDefault($728Zb$proptypes))).func,
    duration: (0, ($parcel$interopDefault($728Zb$proptypes))).number
};
const $8fa9287ca73b387b$export$b59c99f47fcbedf1 = $8fa9287ca73b387b$var$TM;
/* TimeSlider component */ class $8fa9287ca73b387b$var$DefaultSliderHandle extends (0, $728Zb$react.Component) {
    render() {
        return /*#__PURE__*/ (0, ($parcel$interopDefault($728Zb$react))).createElement("div", null);
    }
}
class $8fa9287ca73b387b$var$TS extends (0, $728Zb$react.Component) {
    constructor(props){
        super(props);
        this.state = {
            secondsElapsed: 0,
            secondsRemaining: 0
        };
    }
    componentDidMount() {
        this.listenerId = (0, $7bdda7b4f80009e0$export$f03a6b845d3fb58b)((update)=>{
            const { secondsElapsed: secondsElapsed , secondsRemaining: secondsRemaining  } = update;
            this.setState({
                secondsElapsed: secondsElapsed,
                secondsRemaining: secondsRemaining
            });
        });
    }
    componentWillUnmount() {
        (0, $7bdda7b4f80009e0$export$b03e9483f936dccb)(this.listenerId);
    }
    render() {
        const { className: className , ...props } = this.props;
        const { secondsElapsed: secondsElapsed , secondsRemaining: secondsRemaining  } = this.state;
        return /*#__PURE__*/ (0, ($parcel$interopDefault($728Zb$react))).createElement("div", {
            className: className
        }, /*#__PURE__*/ (0, ($parcel$interopDefault($728Zb$react))).createElement((0, ($parcel$interopDefault($728Zb$rcslider))), {
            onChange: (0, $7bdda7b4f80009e0$export$990806b8ad8af834),
            value: secondsElapsed,
            min: 0,
            max: secondsElapsed + secondsRemaining,
            handle: this.props.handle || /*#__PURE__*/ (0, ($parcel$interopDefault($728Zb$react))).createElement($8fa9287ca73b387b$var$DefaultSliderHandle, null),
            ...props
        }));
    }
}
$8fa9287ca73b387b$var$TS.propTypes = {
    className: (0, ($parcel$interopDefault($728Zb$proptypes))).string
};
const $8fa9287ca73b387b$export$e296a477a1bc715a = $8fa9287ca73b387b$var$TS;
/* Playlist component */ class $8fa9287ca73b387b$var$PL extends (0, $728Zb$react.Component) {
    constructor(props){
        super(props);
        this.state = {
            tracks: [],
            currentTrack: null
        };
    }
    componentDidMount() {
        this.listenerId = (0, $7bdda7b4f80009e0$export$f03a6b845d3fb58b)((update)=>{
            const { tracks: tracks , currentTrack: currentTrack  } = update;
            this.setState({
                tracks: tracks,
                currentTrack: currentTrack
            });
        });
    }
    componentWillUnmount() {
        (0, $7bdda7b4f80009e0$export$b03e9483f936dccb)(this.listenerId);
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
        return /*#__PURE__*/ (0, ($parcel$interopDefault($728Zb$react))).createElement("div", {
            className: className
        }, tracks.map((track, i)=>/*#__PURE__*/ (0, ($parcel$interopDefault($728Zb$react))).createElement("div", {
                key: i,
                className: number === i + 1 ? itemClassName + " " + currentItemClassName : itemClassName,
                style: itemStyle,
                onClick: ()=>number === i + 1 ? (0, $7bdda7b4f80009e0$export$2735a780d8a99a8c)(i + 1) : (0, $7bdda7b4f80009e0$export$e64e955830870e84)(i + 1)
            }, itemComponent ? itemComponent(track) : `${i + 1}. ${track.artist} - ${track.title}`)));
    }
}
$8fa9287ca73b387b$var$PL.propTypes = {
    className: (0, ($parcel$interopDefault($728Zb$proptypes))).string,
    itemClassName: (0, ($parcel$interopDefault($728Zb$proptypes))).string,
    currentItemClassName: (0, ($parcel$interopDefault($728Zb$proptypes))).string,
    itemComponent: (0, ($parcel$interopDefault($728Zb$proptypes))).func
};
const $8fa9287ca73b387b$export$a10c242a3195e585 = $8fa9287ca73b387b$var$PL;




//# sourceMappingURL=index.js.map
