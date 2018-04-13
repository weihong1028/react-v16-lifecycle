import React, { Component } from 'react';
import LifeCycleChildComponent from './LifeCycleChild';
import logo from './logo.svg';
import './App.css';

class LifeCycleUnSafe extends Component {

  state = {
    testStatus: false
  };

  constructor(props) {
    super(props);
    console.cycleLog(`[UnSafeLifeCycle-${props.incrementNum}-${props.updateIncrementNum}] constructor`);
  }

  componentDidCatch(error, info) {
    console.cycleLog(`[UnSafeLifeCycle-${this.props.incrementNum}-${this.props.updateIncrementNum}] componentDidCatch`, error, info);
  }

  UNSAFE_componentWillMount() {
    console.cycleLog(`[UnSafeLifeCycle-${this.props.incrementNum}-${this.props.updateIncrementNum}] UNSAFE_componentWillMount/componentWillMount`);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.cycleLog(`[UnSafeLifeCycle-${nextProps.incrementNum}-${nextProps.updateIncrementNum}] UNSAFE_componentWillReceiveProps/componentWillReceiveProps`);
  }

  shouldComponentUpdate(nextProps) {
    console.cycleLog(`[UnSafeLifeCycle-${nextProps.incrementNum}-${nextProps.updateIncrementNum}] shouldComponentUpdate`);
    return true;
  }

  UNSAFE_componentWillUpdate(nextProps) {
    console.cycleLog(`[UnSafeLifeCycle-${nextProps.incrementNum}-${nextProps.updateIncrementNum}] UNSAFE_componentWillUpdate/componentWillUpdate`);
  }

  componentDidUpdate(prevProps) {
    console.cycleLog(`[UnSafeLifeCycle-${this.props.incrementNum}-${this.props.updateIncrementNum}] componentDidUpdate`);
  }

  render() {
    const { testStatus, incrementNum, updateIncrementNum } = this.props;
    console.cycleLog(`[UnSafeLifeCycle-${incrementNum}-${updateIncrementNum}] render`);
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-title">
            <button onClick={() => { this.setState({ testStatus: !testStatus }); }}>setState</button>
            <div className="App-main-title">UnSafeUnSafeLifeCycle-{incrementNum}-{updateIncrementNum}</div>
            <LifeCycleChildComponent updateIncrementNum={updateIncrementNum} />
          </div>
        </header>
      </div>
    );
  }

  componentDidMount() {
    console.cycleLog(`[UnSafeLifeCycle-${this.props.incrementNum}-${this.props.updateIncrementNum}] componentDidMount`);
  }

  componentWillUnmount() {
    console.cycleLog(`[UnSafeLifeCycle-${this.props.incrementNum}-${this.props.updateIncrementNum}] componentWillUnmount`);
  }
}

export default LifeCycleUnSafe;
