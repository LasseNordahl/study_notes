import React, { Component } from 'react';
import '../App.css';

import YoutubeCard from './YoutubeCard';

var card_margin = {
    width: '100%',
    overflowY: 'scroll'
    // height: '15vh'
};

var test_videos = [1, 2, 3]

class Videos extends Component {
    render() {
        return (
            <div style={card_margin}>
                {this.props.videoData.map(video => (
                    <YoutubeCard video={video}></YoutubeCard>
                ))}
            </div>
        );
    }
}

export default Videos;
