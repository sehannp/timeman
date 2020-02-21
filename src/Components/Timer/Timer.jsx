import React, {Component} from 'react';
import TimeElapsed from '../TimeElapsed/TimeElapsed';
import './Timer.styles.css';
class Stopwatch extends Component {
  constructor(props) {
    super(props);
    
    ["update", "reset", "toggle"].forEach((method) => {
        this[method] = this[method].bind(this);
    });

    this.state = this.initialState = {
      isRunning: false,
      timeElapsed: 0,
    };
  }

  toggle() {
    this.setState({isRunning: !this.state.isRunning}, () => {
      this.state.isRunning ? this.startTimer() : clearInterval(this.timer)
    });
  }

  reset() {
    clearInterval(this.timer);
    this.setState(this.initialState);
  }

  startTimer() {
    this.startTime = Date.now();
    this.timer = setInterval(this.update, 10);
  }

  update() {
    const delta = Date.now() - this.startTime;
    this.setState({timeElapsed: this.state.timeElapsed + delta});
    this.startTime = Date.now();
  }
  
  render() {
    const {isRunning, timeElapsed} = this.state;
    return (
      <div className="elapsedtime-container">
        <TimeElapsed id="timer" timeElapsed={timeElapsed} userTime={this.props.element}/>
        <button className="timerButton" onClick={this.toggle}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
      </div>
    );
  }
}
  
export default Stopwatch;

// Timer code inspired from vakhtang. credits : https://jsfiddle.net/vakhtang/j276r2zh/