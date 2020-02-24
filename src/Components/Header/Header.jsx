import React, {Component} from 'react';
import './Header.styles.css';
import { Link } from "react-router-dom";
class Header extends Component {

    constructor(){
        super();
        this.state = {
            //get from auth
            user: undefined
        }
    }

    render(){
        return(
            <div className="header-container">
                <div className="navigation">
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/user">User</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
                <div className='user'>
                    User
                </div>
                {/* Include dropdown once user butotn is clicked   */}
            </div>
        )
    }

}

export default Header;
