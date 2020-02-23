import React, {Component} from 'react';
import {connect} from 'react-redux';

import './AddEntry.styles.css';
import {addActivity} from '../../redux/activity/activityAction';

class AddEntry extends Component{
    constructor(props) {
        super();
        this.state = {
            activity : "",
            starttime : "",
            endtime : ""
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static increaseCount() {
        return AddEntry.count += 1;
    }
    
    handleSubmit(event){
        event.preventDefault();
        this.props.addActivity(
            {
             id: AddEntry.increaseCount(),
             activity: this.state.activity,
             starttime:this.state.starttime,
             endtime: this.state.endtime}
        );
        this.setState(
            {
                activity : "",
                starttime : "",
                endtime : ""
            }
        )
    }

    onChange(target){
        this.setState({[target.name]:target.value})
    }

    //pull setState off to another function, use obj.assign to assign the prop to state. the pulled function should 
    //now do sanitization as well
    render() {
        return (
            <div className="Addentry-Container">
                <form >
                    <div className="addEntry-form">
                    <input 
                        type="text" 
                        id="activity" 
                        value={this.state.activity} 
                        placeholder={"Activity Name"}
                        name={"activity"}
                        onChange={e => this.onChange(e.target)}
                    />
                    <input 
                        type="time-local" 
                        id="starttime" 
                        name="starttime" 
                        value={this.state.starttime} 
                        placeholder={"Start Time"}
                        onChange={e => this.onChange(e.target)}
                    />
                    <input 
                        type="time-local" 
                        id="endtime" 
                        name="endtime" 
                        value={this.state.endtime} 
                        placeholder={"End Time"}
                        onChange={e => this.onChange(e.target)}
                    />

                    <button className="Button" type="submit" onClick={(event) => this.handleSubmit(event)}
                    >
                    Go</button>
                    </div>
                </form>
            </div>
        );
    }
}

AddEntry.count = 0;

const mapDispatchToProps = dispatch => ({
    addActivity: activity => dispatch(addActivity(activity))
})

export default connect(null,mapDispatchToProps)(AddEntry);
