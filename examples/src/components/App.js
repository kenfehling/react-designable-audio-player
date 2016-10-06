import React from 'react';
import Simple from './Simple';
import WithPlaylist from './WithPlaylist';
import Unstyled from './Unstyled';
import Fixed from './Fixed';

export default () => (
    <div style={{marginTop: '40px'}}>
        <div style={{display: 'flex'}}>
            <Simple />
            <WithPlaylist />
        </div>
        <div style={{width: '320px', margin: '50px auto'}}>
            <Unstyled />
        </div>
        <Fixed />
    </div>
);