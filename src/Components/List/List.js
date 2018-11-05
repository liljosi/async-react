import React, {Component} from 'react';
import './listStyles.css';
export default class List extends Component {
    constructor () {
        super()
        this.state = {
          checked: [],
          items: [{id: 1, name: 'walk the dog'}, {id: 2, name: 'take out the laundry'}, {id: 3, name: 'make dinner'}]
        }
    }

    checkPressed = e => {
      this.setState({checked: e.target.name})
      console.log(this.state.checked)
    }

    render () {
      const { items, checked } = this.state;
      return (
        <section id='list' className='container'>
          <div>
          <ul className='listContainer'>
            {
              items.map(item => (
                <li key={item.id}><input type='checkbox' onClick={this.checkPressed} name={item.name}/><label className='item'>{item.name}</label></li>
              )) 
            }
          </ul>   
          </div>
        </section>
      );
    }
}