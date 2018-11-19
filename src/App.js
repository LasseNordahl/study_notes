import React, { Component } from 'react';
import './App.css';

import Split from './Split.js'
import TextEditor from './TextEditor.js'

var middle_split = {
  backgroundColor: 'white',
  width: '100%',
}

var horizontal = {
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'row'
}
class App extends Component {
  render() {
    return (
      <div className="App" style={horizontal}>
        <Split style={middle_split}>
          <TextEditor></TextEditor>
        </Split>
        <Split style={middle_split}></Split>
      </div>
    );
  }
}

export default App;
