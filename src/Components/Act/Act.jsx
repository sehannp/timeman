import React, {Component} from 'react';
import Timer from '../Timer/Timer';
import './Act.styles.css';

class Act extends Component {
    constructor(props){
        super(props);
        this.state = {
            started : false
        }
        this.handleClick = this.handleClick.bind(this); 
    }


    handleClick(){
        this.setState({started : !this.state.started});
    }

    render() {
        const {index,element} = this.props;

        return(
            <div key={index} className="act-container">
                <p key={index}>{element.activity}</p>
                <Timer key={index} element={element} onTotalHours={this.props.onTotalHours}></Timer>
            </div>
        )
    }
}

export default Act;