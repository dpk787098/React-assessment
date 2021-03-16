import React, { Component } from 'react';
import './login.css';
import { Redirect } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            admin: {
                userName: 'test-admin',
                password: 'test-admin'
                },
            salesExecutive: {
                userName: 'test-sales',
                password: 'test-sales'
                },
            userType: '',
            userName: '',
            password: ''
         }
    }

    onUserNameChange = e => {
        this.setState({userName:e.target.value})
    }

    onPasswordChange = e => {
        this.setState({password:e.target.value})
    }

    onFormSubmit = e => {
        e.preventDefault();
        if(this.state.userName === this.state.admin.userName && this.state.password === this.state.admin.password){
            this.setState({userType:'admin'});  
            // return <Redirect to="/store-manager-homepage" />  
        }
        else if(this.state.userName === this.state.salesExecutive.userName && this.state.password === this.state.salesExecutive.password){
            this.setState({userType:'salesexecutive'});
            // <Redirect to="/sales-executive-homepage" />

        }
        else{
            alert("Wrong Credentials. Please Enter Correct User Name and Password");
        }
    }

    render() { 
        const { userType } = this.state;
        return ( 
            <form onSubmit={this.onFormSubmit} className="login_form_wrapper">
                <h2>LOGIN</h2>
                <input onChange={(e)=>this.onUserNameChange(e)} type="text" required placeholder="User Name" />
                <input onChange={(e)=>this.onPasswordChange(e)} type="password" required minLength='6' placeholder="Password" />
                <button type="submit">LogIn</button>
                {
                    userType === 'admin' ?
                        <Redirect to="/store-manager-homepage" /> 
                        : ""
                    
                }
                {userType === 'salesexecutive' ?
                    <Redirect to="/sales-executive-homepage" /> 
                    : ""
                }
            </form>
         );
    }
}
 
export default Login;