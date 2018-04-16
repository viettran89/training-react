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
      name: 'Cat',
      listHobbies: [
        {name: 'java', color:'red'},
        {name : 'C', color: 'blue'},
        {name : 'Css', color: 'pink'},
        {name : 'React', color: 'green'},
        {name : 'NodeJs', color: 'yellow'}
      ],
      showHobbies: [],
      disableButton: false,
    }
  }

  parentFunction () {
    this.setState({
      // name: count % 2 ? 'Viet' : 'Lan',
      // age: count % 2 ? 29 : 26,
      // sex: count % 2 ? 'Male' : 'Female',
      // district: count % 2 ? 'Binh Tan' : '5'
    });

    count++;
  }

  addHobby () {
    /*
    1. lay random 1 thằng.
    2. push vào ShowHobbies;
    3. Remove from listHobbies.
    */
    let listHobbies = this.state.listHobbies;
    let showHobbies = this.state.showHobbies;

    let numRandom = Math.floor(Math.random() * listHobbies.length);
    let hobby = listHobbies[numRandom];
    showHobbies.push(hobby);
    listHobbies.splice(numRandom, 1);

    this.setState({
      showHobbies,
    })

    if (!listHobbies.length) {
      this.setState({
        disableButton: true
      })
      return;
    }
  }

  render() {
    return (
      <div>
        <Header name={this.state.name} disabled={this.state.disableButton} addHobby={this.addHobby.bind(this)}></Header>
        <ListItem showHobbies={this.state.showHobbies} age={this.state.age} sex={this.state.sex} district={this.state.district}></ListItem>
      </div>
    );
  }
}

export default App;
