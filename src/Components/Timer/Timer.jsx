import React, {Component} from 'react';
import TimeElapsed from '../TimeElapsed/TimeElapsed';
import './Timer.styles.css';
class Stopwatch extends Component {
  constructor(props) {
    super(props);
    
    ["update", "reset", "toggle","getTime", "getUpdValues"].forEach((method) => {
        this[method] = this[method].bind(this);
    });

    this.state = this.initialState = {
      isRunning: false,
      timeElapsed: this.getTime(),
    };
  }


  getTime() {
    if (this.props.element.startime)
    {
      const {startime, endtime} = this.props.element;
      const startSec = parseInt(startime.split(":")[0]) * 60 + parseInt(startime.split(":")[1]);
      const endSec = parseInt(endtime.split(":")[0]) * 60 + parseInt(endtime.split(":")[1]);
      return (Math.ceil(endSec - startSec))*1000;
    }
    return 0;
  }

  getUpdValues(value) {
    this.setState({timeElapsed:value});
    console.log(this.state.timeElapsed);
  };

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
        <TimeElapsed id="timer" timeElapsed={timeElapsed} getUpdValues={this.getUpdValues}/>
        <button className="timerButton" onClick={this.toggle}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
      </div>
    );
  }
}
  
export default Stopwatch;

// Timer code inspired from vakhtang. credits : https://jsfiddle.net/vakhtang/j276r2zh/