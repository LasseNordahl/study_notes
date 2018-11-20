import React, { Component } from 'react';
import '../App.css';

import Card from '@material-ui/core/Card';

var menu_card = {
    width: '100%',
    height: '15vh'
}

class StudyMenu extends Component {
  render() {
    return (
      <div>
        <Card style={menu_card}>
            Hello there
        </Card>
      </div>
    );
  }
}

export default StudyMenu;
