import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {connectAudioPlayer, TitleMarquee, TimeSlider, Playlist} from '../src/ReactDesignableAudioPlayer';



const tracks = [
    {artist: 'Radiohead', title: 'You', file: ''},
    {artist: 'Joy Division', title: 'Transmission', file: ''},
];

test('TitleMarquee shows nothing when player uninitialized', () => {
    const marquee = mount(<TitleMarquee />);
    expect(marquee.text()).toEqual('');
});

test('TitleMarquee shows text', () => {
    const UIComponent = () => <div></div>;
    const AudioPlayer = connectAudioPlayer(UIComponent, tracks);
    const marquee = mount(<TitleMarquee />);
    mount(<AudioPlayer />);
    expect(marquee.text()).toEqual('1. Radiohead - You');
});

test("Current track props don't break the component before initialization", () => {
    const UIComponent = ({currentTrack:{number}}) => <div>Number: {number}</div>;
    const AudioPlayer = connectAudioPlayer(UIComponent, tracks);
    const output = render(<AudioPlayer />);
    expect(output.text()).toEqual('Number: ');
});

test("Current track props are filled in after initialization", () => {
    const UIComponent = ({currentTrack:{number}}) => <div>Number: {number}</div>;
    const AudioPlayer = connectAudioPlayer(UIComponent, tracks);
    const output = mount(<AudioPlayer />);
    expect(output.text()).toEqual('Number: 1');
});