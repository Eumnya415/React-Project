import React, { Component } from 'react'
import LifeCycle from './LifeCycle';
class App extends Component {
  state = {
    color:'red'
  }
  render() {
    return (
      <div>
        <LifeCycle color={this.state.color}/>
      </div>
    );
  }
}

export default App;
