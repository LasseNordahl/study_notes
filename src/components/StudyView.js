import React, { Component } from 'react';
import '../App.css';
import StudyMenu from './StudyMenu.js'

class StudyView extends Component {
    render() {
        return (
            <div className="view-margin">
                <StudyMenu></StudyMenu>
            </div>
        );
    }
}

export default StudyView;
