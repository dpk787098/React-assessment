import React, { Component } from 'react';
import './add-sales-executive.css';
import TitleBar from '../TitleBar/title-bar';
import { connect } from 'react-redux';
import { addSalesExecutiveDataAction } from '../Actions/actions';

class AddSalesExecutive extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            salesExecutive:{
                first_name: null,
                last_name: null,
                email: null,
                gender: "Male",
                phone: null,
                emp_id: null,
            }
         }
    }


    onFirstNameChange=(e)=>{
        this.setState({
            salesExecutive: {
                ...this.state.salesExecutive,
                first_name: e.target.value
            }
        });
    }

    onLastNameChange=(e)=>{
        this.setState({
            salesExecutive: {
                ...this.state.salesExecutive,
                last_name: e.target.value
            }
        });
    }

    onGenderChange=(e)=>{
        this.setState({
            salesExecutive: {
                ...this.state.salesExecutive,
                gender: e.target.value
            }
        });
    }

    onEmailChange=(e)=>{
        this.setState({
            salesExecutive: {
                ...this.state.salesExecutive,
                email: e.target.value
            }
        });
    }

    onPhoneChange=(e)=>{
        this.setState({
            salesExecutive: {
                ...this.state.salesExecutive,
                phone: e.target.value
            }
        });
    }

    onEmployeeIdChange=(e)=>{
        this.setState({
            salesExecutive: {
                ...this.state.salesExecutive,
                emp_id: e.target.value
            }
        });
    }

    addExecutive=(e)=>{
        e.preventDefault();
        this.setState({
            salesExecutive: {
                ...this.state.salesExecutive,
                id: this.props.salesExecutiveData.length+1,
            }
        },()=>this.props.addSalesExecutiveData(this.state.salesExecutive));
        alert("Sales executive added to inventory");
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
    }

    render() { 
        return ( 
            <div className="add_sales_executive_wrapper">
                <TitleBar title="Add Sales Executive" />
                <div className="add_sales_executive_bar">
                    <form className="sales_executive_form_wrap" onSubmit={this.addExecutive}>
                        <div className="executive_label_input_wrapper">
                            <label>First Name: </label>
                            <input onChange={(e)=>this.onFirstNameChange(e)} required type="text" placeholder="Enter the first name" />
                        </div>
                        <div className="executive_label_input_wrapper">
                            <label>Last Name: </label>
                            <input onChange={(e)=>this.onLastNameChange(e)} required type="text" placeholder="Enter the last name" />
                        </div>
                        <div className="executive_label_input_wrapper">
                            <label>Gender: </label>
                            <select required onChange={(e)=>this.onGenderChange(e)}>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="executive_label_input_wrapper">
                            <label>Email: </label>
                            <input onChange={(e)=>this.onEmailChange(e)} required type="email" placeholder="Enter the email" />
                        </div>
                        <div className="executive_label_input_wrapper">
                            <label>Phone: </label>
                            <input onChange={(e)=>this.onPhoneChange(e)} required type="phone" maxLength="10" placeholder="Enter the phone number" />
                        </div>
                        <div className="executive_label_input_wrapper">
                            <label>Employee Id: </label>
                            <input onChange={(e)=>this.onEmployeeIdChange(e)} required type="phone" maxLength="10" placeholder="Enter the employee id (10 digits)" />
                        </div>
                        <button type="submit">Add Executive</button>
                    </form>
                </div>
            </div>
         );
    }
}

const mapStateToProps = (globalStore) =>({
    salesExecutiveData: globalStore?.productReducer?.salesExecutiveData,
})

const mapDispatchToProps = {
    addSalesExecutiveData: (data)=>addSalesExecutiveDataAction(data),
}
 
export default connect(mapStateToProps,mapDispatchToProps)(AddSalesExecutive);