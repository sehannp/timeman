import React,  {Component}from 'react';
import {connect} from 'react-redux';

import './AllActs.styles.css';
import Act from '../Act/Act';

class AllActs extends Component {
    render() {
    const activities = this.props.activities;
        return(
            <div className="allacts">
                <div className="th">
                    
                </div>
                { activities.map((element,index) => {
                    return(<Act key={index} element={element}></Act>)
                })}
                <div className="tf">
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    activities: state.activity.activities,
});

export default connect(mapStateToProps)(AllActs);
