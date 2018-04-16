import React, { Component } from 'react';

class Header extends Component {
  onClick () {
    this.props.addHobby()
  }

  render() {
    return (
      <div>
        <h1>Hobby of { this.props.name }</h1>
        <button disabled={this.props.disabled} onClick={this.onClick.bind(this)}>View more</button>
      </div>
    );
  }
}

export default Header;