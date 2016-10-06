import React from 'react';
import Simple from './Simple';
import WithPlaylist from './WithPlaylist';
import Fixed from './Fixed';

export default () => (
    <div style={{display: 'flex', marginTop: '40px'}}>
        <Simple />
        <WithPlaylist />
        <Fixed />
    </div>
);