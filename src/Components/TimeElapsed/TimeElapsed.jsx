import React,{Component} from 'react';

class TimeElapsed extends Component {

    leftPad = (width, n) => {
        if ((n + '').length > width) {
            return n;
        }
        const padding = new Array(width).join('0');
        return (padding + n).slice(-width);
    };

    getTime() {
        if (this.props.userTime.startime !== undefined && this.props.userTime.startime !== "")
        {
          const {startime, endtime} = this.props.userTime;
          const startSec = parseInt(startime.split(":")[0]) * 60 + parseInt(startime.split(":")[1]);
          const endSec = parseInt(endtime.split(":")[0]) * 60 + parseInt(endtime.split(":")[1]);
          return (endSec - startSec);
        }
        return 0;
    }

    getUnits() {
        const seconds = (this.props.timeElapsed / 1000) + this.getTime()
        return {
        min: Math.floor(seconds / 60).toString(),
        sec: Math.floor(seconds % 60).toString(),
        msec: (seconds % 1).toFixed(3).substring(2)
      };
    }
    render() {
      const units = this.getUnits();
      return (
        <div id={this.props.id}>
          <span>{this.leftPad(2, units.min)}:</span>
          <span>{this.leftPad(2, units.sec)}.</span>
          <span>{units.msec}</span>
        </div>
      );
    }
  }
  
export default TimeElapsed;