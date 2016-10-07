import React from 'react';
import {shallow, mount} from 'enzyme';
import {connectAudioPlayer, TitleMarquee, TimeSlider, Playlist} from '../src/ReactDesignableAudioPlayer';

const DummyComponent = () => <div></div>;

const tracks = [
    {artist: 'Radiohead', title: 'You', file: ''},
    {artist: 'Joy Division', title: 'Transmission', file: ''},
];

test('TitleMarquee shows nothing when player uninitialized', () => {
    const marquee = mount(<TitleMarquee />);
    expect(marquee.text()).toEqual('');
});

test('TitleMarquee shows text', () => {
    const AudioPlayer = connectAudioPlayer(DummyComponent, tracks);
    const marquee = mount(<TitleMarquee />);
    mount(<AudioPlayer />);
    expect(marquee.text()).toEqual('1. Radiohead - You');
});