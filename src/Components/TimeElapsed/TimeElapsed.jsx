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

  leftPad = (width, n) => {
      if ((n + '').length > width) {
          return n;
      }
      const padding = new Array(width).join('0');
      return (padding + n).slice(-width);
  };

  getUnitsText() {
    const seconds = (this.props.timeElapsed / 1000) 
    const units =  {
      min: Math.floor(seconds / 60).toString(),
      sec: Math.floor(seconds % 60).toString(),
      msec: (seconds % 1).toFixed(3).substring(2)
    };
    return this.leftPad(2, units.min)+":"+this.leftPad(2, units.sec)+"."+units.msec
  }

  toggleEdit(unitsText){
    this.setState({editing: !this.state.editing});
    this.setState({inputVal: unitsText})
  }
  
  handleInput(event){
    const val = event.target.value;
    this.setState({inputVal: val}, () => {
      
      if (val.includes(":") && val.includes(".")){
        const totmesec = (
            parseFloat(val.split(":")[0]) * 60 + 
            parseFloat(val.split(":")[1])
            )* 1000  ;
      this.props.getUpdValues(totmesec);
    }
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
