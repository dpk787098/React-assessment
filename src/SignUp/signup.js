import React, { Component } from 'react';
import './signup.css';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <form className="signup_form_wrapper">
                <h2>SIGN UP</h2>
                <input required type="text" placeholder="First Name" />
                <input required type="text" placeholder="Last Name" />
                <input required type="email" placeholder="Email" />
                <input required type="password" placeholder="Password" />
                <input required type="password" placeholder="Confirm Password" />
                <button type="submit">SignUp</button>
            </form>
         );
    }
}
 
export default SignUp;