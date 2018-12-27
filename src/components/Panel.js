import React, { Component } from 'react';

class Panel extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.red}>red</button>
        <button onClick={this.props.black}>black</button>
        <button onClick={this.props.bold}>bold</button>
        <button onClick={this.props.normal}>normal</button>
        <button onClick={this.props.italic}>italic</button>
        <button onClick={this.props.underline}>underline</button>

      </div>
    );
  }
}

export default Panel;