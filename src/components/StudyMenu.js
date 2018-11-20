import React, { Component } from "react";
import "../App.css";

import Split from './Split.js'

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Description from "@material-ui/icons/Description";
import PlayArrow from "@material-ui/icons/PlayArrow";

var menu_card = {
    width: '100%',
    height: '15vh'
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
    }
}

var test_buttons = ['Youtube', 'Quizlet']

class StudyMenu extends Component {
    render() {
        return (
            <div>
                <Card style={menu_card}>
                    <ButtonMargin>
                        {test_buttons.map(button => (
                            <Button style={menu_button} color={button_config[button].color} variant={button_config[button].type}>
                                {button_config[button].icon}
                                {button}
                            </Button>
                        ))}
                    </ButtonMargin>
                </Card>
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
