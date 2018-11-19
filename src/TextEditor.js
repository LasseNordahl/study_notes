import React, { Component } from 'react';
import './App.css';

var text_box = {
  margin: '50px',
  backgroundColor: 'white',
  borderRadius: '10px',
  height: '90%',
  position: 'absolute',
 
}

var text = {
  padding: '100px',
  fontSize: '20px'
}

class TextEditor extends Component {
  render() {
    return (
      <div style={text_box}>
        <p style={text}>
            Hello 
        </p>
      </div>
    );
  }
}

export default TextEditor;
