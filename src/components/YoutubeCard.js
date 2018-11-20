import React, { Component } from 'react';
import '../App.css';

import YouTube from 'react-youtube';

import Card from "@material-ui/core/Card";

class YoutubeCard extends Component {
    render() {
        return (
            <Card className="viewMargin">
                <YouTube style={{padding: '20px'}} videoId={this.props.video.id.videoId}></YouTube>
            </Card>
        );
    }
}

export default YoutubeCard;
