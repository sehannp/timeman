import React,{Component} from 'react';

class TimeElapsed extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      editing: false,
      inputVal: ""
    }

    this.handleInput = this.handleInput.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }
  
  componentDidMount(){

  }

  leftPad = (width, n) => {
      if ((n + '').length > width) {
          return n;
      }
      const padding = new Array(width).join('0');
      return (padding + n).slice(-width);
  };

  getTime() {
      if (this.props.userTime.startime)
      {
        const {startime, endtime} = this.props.userTime;
        const startSec = parseInt(startime.split(":")[0]) * 60 + parseInt(startime.split(":")[1]);
        const endSec = parseInt(endtime.split(":")[0]) * 60 + parseInt(endtime.split(":")[1]);
        return (endSec - startSec);
      }
      return 0;
  }

  getUnitsText(inputVal) {
    if (!inputVal){
      const seconds = (this.props.timeElapsed / 1000) + this.getTime()
      const units =  {
        min: Math.floor(seconds / 60).toString(),
        sec: Math.floor(seconds % 60).toString(),
        msec: (seconds % 1).toFixed(3).substring(2)
      };
      return this.leftPad(2, units.min)+":"+this.leftPad(2, units.sec)+"."+units.msec
    } 
    // console.log(inputVal);
    return inputVal;
  }

  toggleEdit(unitsText){
    this.setState({editing: !this.state.editing});
    this.setState({inputVal: unitsText})
  }
  
  handleInput(event){
    let val = event.target.value;
    console.log(event.target.value);

    this.setState({inputVal: val}, () => {
      
      let totmesec;
      if (val.includes(":") && val.includes("."))
      {totmesec = (
        parseFloat(val.split(":")[0]) * 60 + 
        parseFloat(val.split(":")[1])
        )* 1000  ;
      this.props.getUpdValues(totmesec);}
    })
  }

  render() {
    const unitsText = this.getUnitsText();
    return (
      <div id={this.props.id} onClick={ ()=> this.toggleEdit(unitsText)}>
        
      { (!this.state.editing) ?
        <div>
            <span>{this.getUnitsText()}</span>
        </div>
        : <input type="text" value={this.state.inputVal} onChange={(event) => this.handleInput(event)}/>
      }
      
      </div>
      
    );
  }
}
  
export default TimeElapsed;

//to read
// https://medium.com/shoutem/react-to-bind-or-not-to-bind-7bf58327e22a
// https://hackernoon.com/replacing-componentwillreceiveprops-with-getderivedstatefromprops-c3956f7ce607
// https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html