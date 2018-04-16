import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Age : {this.props.age}</li>
          <li>Sex : {this.props.sex}</li>
          <li>District : {this.props.district}</li>
        </ul>
      </div>
    );
  }
}

export default ListItem;