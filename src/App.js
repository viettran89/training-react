import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './component/header';
import ListItem from './component/list-item';

let count = 0;

class App extends Component {
  constructor () {
    super();

    this.state = {
      name: 'Viet',
      age: 29,
      sex: 'Male',
      district: 'Binh Tan'
    }
  }

  parentFunction () {
    this.setState({
      name: count % 2 ? 'Viet' : 'Lan',
      age: count % 2 ? 29 : 26,
      sex: count % 2 ? 'Male' : 'Female',
      district: count % 2 ? 'Binh Tan' : '5'
    });

    count++;
  }

  render() {
    return (
      <div>
        <Header title={this.state.name} parentFunction={this.parentFunction.bind(this)}></Header>
        <ListItem age={this.state.age} sex={this.state.sex} district={this.state.district}></ListItem>
      </div>
    );
  }
}

export default App;
