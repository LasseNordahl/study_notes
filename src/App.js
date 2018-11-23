import React, { Component } from 'react';
import './App.css';

import Split from './components/Split.js'
import TextEditor from './components/TextEditor.js'
import StudyView from './components/StudyView.js'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Person from "@material-ui/icons/Person";

import logo from './images/study_notes_logo.png'

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
                <AppBar position="static" color="default">
                    <Toolbar>
                    <img className="logo-icon" src={logo}/>                    
                    <Typography variant="h6" color="inherit">
                        StudyNotes
                    </Typography>

                    <div style={{marginLeft: '80%'}}>
                        <Person></Person>
                        <span style={{margin: '5px'}}>Login</span>
                    </div>
                    </Toolbar>
                </AppBar>
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
