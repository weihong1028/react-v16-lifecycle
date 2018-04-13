import React, { Component } from 'react';
import './App.css';

class LifeCycleLog extends Component {

  state = {
    lifeCycleLog: []
  }

  componentDidMount() {
    const that = this;
    console.cycleLog = (...params) => {
      that.state.lifeCycleLog.push(<div key={params.join('-') + Math.floor(Math.random() * 999)}>{params.join(' ')}</div>);
      that.setState({ lifeCycleLog: that.state.lifeCycleLog });
    }
  }

  render() {
    const { lifeCycleLog } = this.state;
    return (
      <div>
        <div style={{ marginBottom: '6px' }}>
          <button hidden={!lifeCycleLog.length} style={{ marginRight: '6px' }} onClick={() => {
            this.setState({ lifeCycleLog: [] });
          }}>clear</button>
          {`log format：[{ComponentName}-{ComponentIncrementNum}-{updateIncrementNum}] {info}`}
        </div>
        <div className="App-lifecycle-log">
          {this.state.lifeCycleLog}
        </div>
      </div>
    );
  }
}

export default LifeCycleLog;
