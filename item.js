import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <li style={{color: this.props.color}} >{this.props.name}</li>
    );
  }
}

export default Item;