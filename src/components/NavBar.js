import React, { Component } from 'react';
import '../App.css';

import GoogleLogin from 'react-google-login';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import logo from '../images/study_notes_logo.png'

const responseGoogle = (response) => {
    console.log(response);
}

class NavBar extends Component {
    render() {
        return (
            <AppBar position="static" color="default">
                <Toolbar>
                    <img className="logo-icon" src={logo}/>                    
                    <Typography variant="h6" color="inherit">
                        StudyNotes
                    </Typography>
                    
                    <GoogleLogin 
                        className="google-login-button"
                        clientId="662608182401-u9h9tdi8b2g2r6vlc61h5i9vse04dt83.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                    />
                </Toolbar>
            </AppBar>
        );
    }
}

export default NavBar;
