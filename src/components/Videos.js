import React, { Component } from 'react';
import '../App.css';

import YoutubeCard from './YoutubeCard';

var card_margin = {
    width: '100%',
};

var test_videos = [1, 2, 3]

class Videos extends Component {
    render() {
        return (
            <div style={card_margin}>
                {this.props.videoData.map(video => (
                    // <h3>{video.</h3>
                    <YoutubeCard video={video}></YoutubeCard>
                ))}
            </div>
        );
    }
}

export default Videos;
