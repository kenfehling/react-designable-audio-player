import React from 'react';
import Simple from './Simple';
import WithPlaylist from './WithPlaylist';
import Unstyled from './Unstyled';
import CustomPlaylist from './CustomPlaylist';
import Fixed from './Fixed';

const rowStyle = {display: 'flex', marginTop: '40px'};
const playlistContainerStyle = {margin: 'auto'};

export default () => (
    <div>
        <div style={rowStyle}>
            <div style={playlistContainerStyle}><Simple /></div>
            <div style={playlistContainerStyle}><WithPlaylist /></div>
        </div>
        <div style={rowStyle}>
            <div style={{...playlistContainerStyle, width: '320px'}}><Unstyled /></div>
            <div style={playlistContainerStyle}><CustomPlaylist /></div>
        </div>
        <Fixed />
    </div>
);