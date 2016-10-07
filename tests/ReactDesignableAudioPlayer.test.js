import React from 'react';
import {shallow} from 'enzyme';
import {connectAudioPlayer, TitleMarquee, TimeSlider, Playlist} from '../src/ReactDesignableAudioPlayer';

test('TitleMarquee shows text', () => {
    const marquee = shallow(<TitleMarquee />);
    expect(marquee.text()).toEqual('');
});