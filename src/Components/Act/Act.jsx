import React, {Component} from 'react';
import Timer from '../Timer/Timer';
import './Act.styles.css';

class Act extends Component {
    render() {
        const {index,element} = this.props;

        return(
            <div key={index} className="act-container">
                <p key={index}>{element.activity}</p>
                <Timer key={index} element={element}></Timer>
            </div>
        )
    }
}

export default Act;