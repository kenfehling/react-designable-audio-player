import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {connectAudioPlayer, TitleMarquee, TimeSlider, Playlist} from '../../src/ReactDesignableAudioPlayer';
import * as core from '../../src/audioPlayerCore';
import _ from 'lodash';

const tracks = [
    {artist: 'Radiohead', title: 'You', file: ''},
    {artist: 'Joy Division', title: 'Transmission', file: ''},
];

test("Current track props don't break the component before initialization", () => {
    const PlayerComponent = ({currentTrack:{number}}) => <div>Number: {number}</div>;
    const AudioPlayer = connectAudioPlayer(PlayerComponent, tracks);
    const output = render(<AudioPlayer />);
    expect(output.text()).toEqual('Number: ');
});

test("Current track props are filled in after initialization", () => {
    const PlayerComponent = ({currentTrack:{number}}) => <div>Number: {number}</div>;
    const AudioPlayer = connectAudioPlayer(PlayerComponent, tracks);
    const output = mount(<AudioPlayer />);
    expect(output.text()).toEqual('Number: 1');
});

test('TitleMarquee shows nothing when player uninitialized', () => {
    const marquee = mount(<TitleMarquee />);
    expect(marquee.text()).toEqual('');
});

test('TitleMarquee shows text', () => {
    const PlayerComponent = () => <div></div>;
    const AudioPlayer = connectAudioPlayer(PlayerComponent, tracks);
    const marquee = mount(<TitleMarquee />);
    mount(<AudioPlayer />);
    expect(marquee.text()).toEqual('1. Radiohead - You');
});

test('TitleMarqee accepts a custom text function', () => {
    const PlayerComponent = () => <div></div>;
    const textFn = ({number}) => <div>{number}ken</div>;
    const AudioPlayer = connectAudioPlayer(PlayerComponent, tracks);
    const marquee = mount(<TitleMarquee textFn={textFn} />);
    mount(<AudioPlayer />);
    expect(marquee.text()).toEqual('1ken');
});

test("Playlist accepts a custom item component", () => {
    const PlayerComponent = () => <div></div>;
    const ItemComponent = ({number}) => <div>{number}ken</div>;
    const AudioPlayer = connectAudioPlayer(PlayerComponent, tracks);
    const playlist = mount(<Playlist itemComponent={ItemComponent} />);
    mount(<AudioPlayer />);
    expect(playlist.text()).toEqual('1ken2ken');
});

test('TimeSlider removes listener on unmount', () => {
    const PlayerComponent = () => <div></div>;
    const AudioPlayer = connectAudioPlayer(PlayerComponent, tracks);
    const slider = mount(<TimeSlider />);
    mount(<AudioPlayer />);
    const numListeners = _.size(core.getAllListeners());
    slider.unmount();
    expect(_.size(core.getAllListeners())).toBe(numListeners - 1);
});