import React, {Component} from 'react';
import TimeElapsed from '../TimeElapsed/TimeElapsed';
import './Timer.styles.css';
class Stopwatch extends Component {
  constructor(props) {
    super(props);
    
    ["update", "reset", "toggle","getTime", "getUpdValues", "onSubmit"].forEach((method) => {
        this[method] = this[method].bind(this);
    });

    this.state = this.initialState = {
      isRunning: false,
      timeElapsed: this.getTime(),
      submitted: false
    };
  }

  onSubmit(){
    this.setState({submitted: true, isRunning: false});

    const seconds = (this.state.timeElapsed / 1000) 
    const units =  {
        min: Math.floor(seconds / 60).toString(),
        sec: Math.floor(seconds % 60).toString(),
        msec: (seconds % 1).toFixed(3).substring(2)
    }
    this.props.onTotalHours(units.min+":"+units.sec+"."+units.msec+" Minutes");
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
        <button className="Button" onClick={this.toggle} disabled={this.state.submitted} hidden={this.state.submitted}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button type="button" className="Button" disabled={this.state.submitted || isRunning } hidden={this.state.submitted} onClick={()=> this.onSubmit()}>Submit Hours</button>
        <p hidden={!this.state.submitted}>Hours Submitted</p>
      </div>
    );
  }
}
  
export default Stopwatch;

// Timer code inspired from vakhtang. credits : https://jsfiddle.net/vakhtang/j276r2zh/