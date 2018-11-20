import React, { Component } from 'react';
import '../App.css';
import StudyMenu from './StudyMenu.js'

var view_margin = {
  margin: '4vh'
}

class StudyView extends Component {
  render() {
    return (
      <div style={view_margin}>
        <StudyMenu></StudyMenu>
      </div>
    );
  }
}

export default StudyView;
