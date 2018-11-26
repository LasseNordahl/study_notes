import React, { Component } from 'react';
import '../App.css';

import YoutubeCard from './YoutubeCard';

var card_margin = {
    width: '100%',
};

class Videos extends Component {
    render() {
        return (
            <div style={card_margin}>
                {this.props.videoData.map((video, i) => (
                    // <h3>{video.</h3>
                    <YoutubeCard video={video} key={i}></YoutubeCard>
                ))}
            </div>
        );
    }
}

export default Videos;
