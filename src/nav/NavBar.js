import React, {Component} from 'react';
import NavBarMenu from './NavBarMenu'

class NavBar extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.isLoggedIn ?
                        <NavBarMenu />
                        :
                        <h1>You have to be online to have a menu!</h1>
                }
            </div>
        )
    }
}


export default NavBar;