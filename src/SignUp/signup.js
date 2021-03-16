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
                <p>**Was not asked to implemented. So disabled</p>
                <input disabled required type="text" placeholder="First Name" />
                <input disabled required type="text" placeholder="Last Name" />
                <input disabled required type="email" placeholder="Email" />
                <input disabled required type="password" placeholder="Password" />
                <input disabled required type="password" placeholder="Confirm Password" />
                <button disabled type="submit">SignUp</button>
            </form>
         );
    }
}
 
export default SignUp;