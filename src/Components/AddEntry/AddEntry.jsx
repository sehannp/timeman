import React, {Component} from 'react';

class AddEntry extends Component{
    constructor(props) {
        super();
        this.state = {
            activity : "",
            starttime : "",
            endtime : ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.onClicker(this.state.activity,this.state.starttime,this.state.endtime);

        this.setState(
            {
                activity : "",
                starttime : "",
                endtime : ""
            }
        )
    }

    //pull setState off to another function, use obj.assign to assign the prop to state. the pulled function should 
    //now do sanitization as well
    render() {
        return (
            <div className="Addentry Container">
                <form>
                    <input 
                        type="text" 
                        id="activity" 
                        value={this.state.activity} 
                        onChange={e => this.setState({activity: e.target.value})}
                    />
                    <input 
                        type="time-local" 
                        id="starttime" 
                        name="starttime" 
                        value={this.state.starttime} 
                        onChange={e => this.setState({starttime: e.target.value})}
                    />
                    <input 
                        type="time-local" 
                        id="endtime" 
                        name="endtime" 
                        value={this.state.endtime} 
                        onChange={e => this.setState({endtime: e.target.value})}
                    />

                    <button type="submit" onClick={(event) => this.handleSubmit(event)}
                    >
                    Go</button>
                </form>
            </div>
        );
    }
}

export default AddEntry;
