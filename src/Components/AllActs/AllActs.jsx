import React,  {Component}from 'react';
import './AllActs.styles.css';
import Act from '../Act/Act';

class AllActs extends Component {
    render() {
        const data = this.props.data;
        return(
            <div className="allacts">
                <div className="th">
                    
                </div>
                { data.map((element,index) => {
                    return(<Act key={index} activity={element.activity}></Act>)
                })}
                <div className="tf">
                    
                </div>
            </div>
        )
    }
}

export default AllActs;
