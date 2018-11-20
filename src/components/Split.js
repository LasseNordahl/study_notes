import React, { Component } from 'react';
import '../App.css';

var block_split = {
  border: '5px solid red',
  width: '100%',
  height: '100%'
}

class Split extends Component {
  render() {
    return (
      <div style={block_split}>
        {this.props.children}
      </div>
    );
  }
}

export default Split;
