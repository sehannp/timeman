import React, {Component} from 'react';
import Timer from '../Timer/Timer';

class Act extends Component {
    constructor(props){
        super();
        this.state = {
            started : false
        }
        this.handleClick = this.handleClick.bind(this); 
    }


    handleClick(){
        this.setState({started : !this.state.started});
    }

    render() {
        const {index,activity} = this.props;

        return(
            <div key={index} className="act-container">
                <p key={index}>{activity}</p>
                <Timer key={index}></Timer>
            </div>
        )
    }
}

export default Act;