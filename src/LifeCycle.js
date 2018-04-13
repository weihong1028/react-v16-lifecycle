import React, { Component } from 'react';
import LifeCycleChildComponent from './LifeCycleChild';
import logo from './logo.svg';
import './App.css';

class LifeCycle extends Component {

  state = {
    testStatus: false
  };

  constructor(props) {
    super(props);
    console.cycleLog(`[LifeCycle-${props.incrementNum}-${props.updateIncrementNum}] constructor`);
  }

  componentDidCatch(error, info) {
    console.cycleLog(`[LifeCycle-${this.props.incrementNum}-${this.props.updateIncrementNum}] componentDidCatch`, error, info);
  }

  static getDerivedStateFromProps(nextProps) {
    console.cycleLog(`[LifeCycle-${nextProps.incrementNum}-${nextProps.updateIncrementNum}] static getDerivedStateFromProps`);
    return null;
  }

  shouldComponentUpdate(nextProps) {
    console.cycleLog(`[LifeCycle-${nextProps.incrementNum}-${nextProps.updateIncrementNum}] shouldComponentUpdate`);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps) {
    console.cycleLog(`[LifeCycle-${this.props.incrementNum}-${this.props.updateIncrementNum}] getSnapshotBeforeUpdate`);
    return null;
  }

  componentDidUpdate(prevProps, prevStatus, snapShot) {
    console.cycleLog(`[LifeCycle-${this.props.incrementNum}-${this.props.updateIncrementNum}] componentDidUpdate`);
  }

  render() {
    const { testStatus, incrementNum, updateIncrementNum } = this.props;
    console.cycleLog(`[LifeCycle-${incrementNum}-${updateIncrementNum}] render`);
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-title">
            <div className="App-main-title">
              LifeCycle-{incrementNum}-{updateIncrementNum}
              <button style={{ marginLeft: '12px' }} onClick={() => { this.setState({ testStatus: !testStatus }); }}>setState</button>
            </div>
            <LifeCycleChildComponent updateIncrementNum={updateIncrementNum} />
          </div>
        </header>
      </div>
    );
  }

  componentDidMount() {
    console.cycleLog(`[LifeCycle-${this.props.incrementNum}-${this.props.updateIncrementNum}] componentDidMount`);
  }

  componentWillUnmount() {
    console.cycleLog(`[LifeCycle-${this.props.incrementNum}-${this.props.updateIncrementNum}] componentWillUnmount`);
  }
}

export default LifeCycle;
