import React, { Component } from 'react';
import './sales-executive-bar.css';

class SalesExecutiveBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="sales_executive_bar_wrapper">
                <div>{this.props.first_name}</div>
                <div>{this.props.last_name}</div>
                <div>{this.props.email}</div>
                <div>{this.props.gender}</div>
                <div>{this.props.phone}</div>
                <div>{this.props.emp_id}</div>
                <div>
                    <i onClick={this.props.deleteItem} className="fas fa-trash"></i>
                </div>
            </div>
         );
    }
}
 
export default SalesExecutiveBar;