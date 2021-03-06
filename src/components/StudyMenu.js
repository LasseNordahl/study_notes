import React, { Component } from "react";
import "../App.css";

import Videos from './Videos'

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Description from "@material-ui/icons/Description";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Settings from "@material-ui/icons/Settings";

const config = require('../config.js')

var menu_card = {
    width: '100%',
    // height: '15vh'
};

var button_margins = {
    margin: '3vh'
}

var menu_button = {
    marginLeft: '1vh',
    marginRight: '1vh'
}

var button_config = {
    'Quizlet' : {
        name: 'Quizlet',
        color: 'primary',
        icon: <Description/>,
        type: 'extendedFab',
    },
    'Youtube' : {
        name: 'Youtube',
        color: 'secondary',
        icon: <PlayArrow/>,
        type: 'extendedFab'
    },
    'Settings' : {
        name: 'Settings',
        color: 'default',
        icon: <Settings/>,
        type: 'fab'
    }
}

var test_buttons = ['Youtube', 'Quizlet', 'Settings']

class StudyMenu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            youtube_videos: []
        }

        this.load_youtube_videos = this.load_youtube_videos.bind(this)
        this.render_videos = this.render_videos.bind(this)
    }

    componentDidMount() {
        let component = this
        fetch(config.default.API + 'getVideos?keyword=BinarySearchTree&keyword=Hashmap')
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            component.setState({
                youtube_videos: response
            })
            console.log(response);
        });
    }

    load_youtube_videos() {
        console.log('loading youtube videos')
        console.log(process.env.REACT_APP_STAGE)
        console.log(this.state.youtube_videos)
    }

    render_videos() {
        console.log(this.state.youtube_videos)
        if (this.state.youtube_videos.length > 0) {
            console.log('rendering video')

            return <Videos videoData={this.state.youtube_videos}></Videos>
        } else {
            console.log('rendering null')

            return null
        }
    }

    render() {
        return (
            <div>
                <Card style={menu_card}>
                    <ButtonMargin>
                        {test_buttons.map((button, i) => (
                            <Button style={menu_button} 
                                    color={button_config[button].color} 
                                    variant={button_config[button].type}
                                    onClick={this.load_youtube_videos}
                                    key={i}>
                                {button_config[button].icon}
                                {button_config[button].type === 'extendedFab' ? button : ''}
                            </Button>
                        ))}
                    </ButtonMargin>
                </Card>
                {this.render_videos()}
            </div>
        );
    }
}

class ButtonMargin extends Component{
    render() {
        return (
            <div style={button_margins}>
                {this.props.children}
            </div>
        );
    }
}

export default StudyMenu;
