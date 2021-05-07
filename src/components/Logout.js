import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("token")

    }

    render() {
    
        return (
            <div>
                <h1> you are on logout page</h1>
                <Link to = '/'>Login </Link> 
            </div>
        );
    }
}

export default Logout;