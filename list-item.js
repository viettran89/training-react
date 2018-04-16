import React, { Component } from 'react';
import Item from './item';

class ListItem extends Component {
  addMore () {
    this.setState ({
      
    });
  }

  getListItem () {
    let items = [];
    for (let i = 0; i < this.props.showHobbies.length; i++) {
      let item = <Item key={i} name={this.props.showHobbies[i].name} color={this.props.showHobbies[i].color}></Item>;
      items.push(item);
    }
    return items;
  }
  
  render() {
    return (
      <div>
        
        <ul>
          {this.getListItem() }
        </ul>
      </div>
    );
  }
}

export default ListItem;