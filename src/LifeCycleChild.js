import { Component } from 'react';
import './App.css';

class LifeCycleChild extends Component {

  render() {
    if (this.props.updateIncrementNum === 3) {
      // Simulate a JS error
      throw new Error('[LifeCycleChild] I crashed!');
    }
    return '[LifeCycleChild] Crash when updateIncrementNum eq 3';
  }
}

export default LifeCycleChild;
