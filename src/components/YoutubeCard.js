import React, { Component } from 'react';
import '../App.css';

import YouTube from 'react-youtube';

import Card from "@material-ui/core/Card";

class YoutubeCard extends Component {
    render() {
        let video = this.props.video

        const options = {
            height: '300',
            width: '530'
        }

        return (
            <Card className="view-margin-top youtube-card">
                <h3>{video.snippet.title}</h3>
                <p>{video.snippet.channelTitle}</p>
                <YouTube style={{margin: '2vh'}} opts={options} videoId={this.props.video.id.videoId}></YouTube>
            </Card>
        );
    }
}

export default YoutubeCard;
