import React, { Component } from 'react';
import Login from '../Login/login';
import SignUp from '../SignUp/signup';
import './landing-page.css';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="landing_wrapper">
                <Login />
                <SignUp />
            </div>
         );
    }
}
 
export default LandingPage;