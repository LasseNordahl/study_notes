import React, { Component } from 'react';
import './App.css';

import Split from './components/Split.js'
import TextEditor from './components/TextEditor.js'
import StudyView from './components/StudyView.js'
import NavBar from './components/NavBar.js'


var middle_split = {
    backgroundColor: 'white',
    width: '100%'
}

var col_alignment = {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
}

class App extends Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <div className="App" style={col_alignment}>
                    <Split style={middle_split}>
                        <TextEditor></TextEditor>
                    </Split>
                    <Split style={middle_split}>
                        <StudyView></StudyView>
                    </Split>
                </div>
            </div>
        );
    }
}

export default App;
