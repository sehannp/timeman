import React, {Component} from 'react';
import './Header.styles.css';

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
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
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
