import React, { Component } from 'react';
import LifeCycleComponent from './LifeCycle';
import UnSafeLifeCycleComponent from './LifeCycleUnSafe';
import LifeCycleLogComponent from './LifeCycleLog';
import './App.css';

class App extends Component {

  state = {
    unsafeMode: false,
    mountStatus: false,
    lifeCycleIncrementNum: 0,
    updateIncrementNum: 0
  }

  render() {
    const { mountStatus, unsafeMode, lifeCycleIncrementNum, updateIncrementNum } = this.state;
    const ValidLifeCycleComponent = unsafeMode ? UnSafeLifeCycleComponent : LifeCycleComponent;
    return (
      <div className="App">
        <h1>React v16 lifecycle debug</h1>
        <div className="App-btns">
          <button onClick={() => {
            this.setState({
              mountStatus: !mountStatus,
              lifeCycleIncrementNum: lifeCycleIncrementNum + ( mountStatus ? 0 : 1 ),
              updateIncrementNum: 0
            });
          }}>
            {mountStatus ? 'Unmount' : 'Mount'} {unsafeMode ? 'UnSafe' : ''}LifeCycleComponent
          </button>
          <button onClick={() => {
            this.setState({ updateIncrementNum: updateIncrementNum + 1 });
          }} style={{ margin: '0 20px' }} disabled={!mountStatus}>
            Update {unsafeMode ? 'UnSafe' : ''}LifeCycleComponent
          </button>
          <button onClick={() => {
            this.setState({ unsafeMode: !unsafeMode, lifeCycleIncrementNum: 0 });
          }} disabled={mountStatus}>
            Switch to {unsafeMode ? '' : 'UnSafe'}LifeCycleComponent
          </button>
        </div>
        <div className="App-lifecycle">
          {mountStatus && <ValidLifeCycleComponent incrementNum={lifeCycleIncrementNum} updateIncrementNum={updateIncrementNum} />}
        </div>
        <div className="App-log">
          <LifeCycleLogComponent/>
        </div>
      </div>
    );
  }
}

export default App;
