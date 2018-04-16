import React, { Component } from 'react';

class Header extends Component {
  onClick (evt) {
    console.log(this.props);
    this.props.parentFunction()
  }

  render() {
    return (
      <div>
        <h1>Profile of { this.props.title }</h1>
        <button onClick={this.onClick.bind(this)}>Change</button>
      </div>
    );
  }
}

export default Header;