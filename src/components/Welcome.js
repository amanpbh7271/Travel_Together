import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';


class Welcome extends Component {
    constructor(props){
        super(props)
            
            const token = localStorage.getItem("token")
            let userId = token
            let loggedIn = true
            //console.log(token);
        
        if (token === null){
            loggedIn = false
        }

        this.state = {
            loggedIn,
            userId

        }

    }
    render() {
        if (this.state.loggedIn === false){
            return <Redirect to = "/" />
        }
        return (
            <div>
                {this.state.userId} are on welcome page
                
                
                <br/>
                <Link to = "/logout"> Logout </Link> 
            </div>
        );
    }
}

export default Welcome;
