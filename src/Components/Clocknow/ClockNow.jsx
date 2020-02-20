import React  from 'react';
import Clock from 'react-live-clock';
import './Clocknow.styles.css';

class ClockNow extends React.Component {
    constructor() {
        super();
        this.state = {
            nowtime: "0"
        }
    }

    timehandle() {
        let timenowState = this.state.nowtime;
        let timesec = 59 - timenowState.split(":")[2];
        let timeMin = 59 - timenowState.split(":")[1];
        let timeHour = 23 - timenowState.split(":")[0];
        return  timeHour + ":" + timeMin + ":" + timesec;
    }

    render() {
        return(
        <div className="clock-container">

            <div className="desc">
                Time now :
                <div className="time">
                    <Clock format={'HH:mm:ss'} ticking={true} timezone={'Australia/Melbourne'} onChange={date => this.setState({nowtime: date.output})} />
                </div>
            </div>

            <div className="desc">
                Remaining Time for Day :  
                <div className="time">
                    {this.timehandle()}
                </div>
            </div>
            
        </div>
        )
    }
}

export default ClockNow;