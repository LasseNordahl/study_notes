import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import '../App.css';

class TextEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    };

    this.print_quill_value = this.print_quill_value.bind(this);
    this.handle_text_change = this.handle_text_change.bind(this);
  }

  print_quill_value() {
    console.log(this.state.text);
  }

  handle_text_change(value) {
    this.setState({
      text: value
    })
  }

  render() {
    return (
      <div>
        <ReactQuill value={this.state.text} onChange={this.handle_text_change} className="quill"></ReactQuill>
      </div>
    );
  }
}

export default TextEditor;
